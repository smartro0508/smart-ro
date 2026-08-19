"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { SEO_CONFIG } from "@/seo.config";

export default function GlobalAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track route changes as page views
  useEffect(() => {
    if (pathname && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", SEO_CONFIG.googleAnalyticsId, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
      });
    }
  }, [pathname, searchParams]);

  // Global event delegation for clicks and forms
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      const button = target.closest("button");
      
      const element = link || button;
      if (element && typeof window !== "undefined" && (window as any).gtag) {
        const href = link ? link.getAttribute("href") || "" : "";
        const text = element.textContent?.trim() || "";
        
        if (href.startsWith("tel:")) {
          (window as any).gtag("event", "phone_click", { event_category: "contact", event_label: href });
        } else if (href.includes("whatsapp") || href.includes("wa.me")) {
          (window as any).gtag("event", "whatsapp_click", { event_category: "contact", event_label: href });
        } else if (href.startsWith("mailto:")) {
          (window as any).gtag("event", "email_click", { event_category: "contact", event_label: href });
        } else if (text.toLowerCase().includes("quote") || text.toLowerCase().includes("consultation")) {
          (window as any).gtag("event", "cta_click", { event_category: "engagement", event_label: text });
        }
      }
    };

    const handleFormSubmit = (e: SubmitEvent) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "form_submission", { event_category: "lead", event_label: "contact_or_enquiry" });
      }
    };

    document.addEventListener("click", handleGlobalClick);
    document.addEventListener("submit", handleFormSubmit);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
      document.removeEventListener("submit", handleFormSubmit);
    };
  }, []);

  return null;
}
