import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const stripePriceId = process.env.STRIPE_PRICE_ID;

  if (!stripeSecretKey || !stripePriceId) {
    return NextResponse.json(
      {
        error: "Stripe is not configured yet. Please add STRIPE_SECRET_KEY and STRIPE_PRICE_ID to your environment variables.",
      },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey);
  const origin = request.headers.get("origin") ?? request.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 7,
      },
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Stripe error";

    console.error("Stripe checkout session creation failed", error);
    console.error("Stripe checkout error message", message);

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? message
            : "We could not start checkout right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
