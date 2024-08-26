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
  const minutes = waitedTime.getMinutes();
  const seconds = waitedTime.getSeconds();

  return (
    <div
      className="bg-red-400 rounded-md p-2 text-white w-24 text-center"
      suppressHydrationWarning
    >
      {(minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds)}
    </div>
  );
}
