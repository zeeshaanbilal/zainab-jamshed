"use client";

import React, { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";

export default function BookingButtonClient({ isMobile = false, text = "Book Free Consultation" }: { isMobile?: boolean, text?: string }) {
  const [mounted] = useState(true);

  useEffect(() => {
    // mounted
  }, []);

  const desktopClasses = "inline-flex items-center justify-center rounded-md bg-[#7749F8] px-7 py-3 text-base font-medium text-white transition-all hover:bg-[#A78BFA] hover:shadow-lg hover:shadow-[#7749F8]/30";
  const mobileClasses = "w-full text-center inline-flex items-center justify-center rounded-md bg-[#7749F8] px-7 py-3 text-base font-medium text-white transition-all hover:bg-[#A78BFA]";
  
  const buttonClass = isMobile ? mobileClasses : desktopClasses;

  // Next.js hydrates this cleanly because PopupButton works fine.
  // We can just rely on the buttonClass

  return (
    <PopupButton
      url="https://calendly.com/zjlogix/30min"
      rootElement={document.body}
      text={text}
      className={buttonClass}
    />
  );
}
