"use client";

import { useState, useEffect } from "react";

export default function PhantomLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("@aejkatappaja/phantom-ui");
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return <phantom-ui loading={isLoading}>{children}</phantom-ui>;
}
