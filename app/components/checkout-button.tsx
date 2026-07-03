"use client";

import { useState, type ReactNode } from "react";

export function CheckoutButton({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleCheckout() {
    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      window.location.assign(data.url);
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Unable to start checkout.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={isLoading}
      className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
    >
      {isLoading ? "Preparing checkout..." : children}
    </button>
  );
}
