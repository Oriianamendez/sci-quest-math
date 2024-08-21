"use client";

import { useEffect, useState } from "react";

export function HelpCounter({ help }: { help: number }) {
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const waitedTime = new Date(Number(time) - help);

  return (
    <div
      className="bg-red-400 rounded-md p-2 text-white"
      suppressHydrationWarning
    >
      {" "}
      {waitedTime.getMinutes() + ":" + waitedTime.getSeconds()}
    </div>
  );
}
