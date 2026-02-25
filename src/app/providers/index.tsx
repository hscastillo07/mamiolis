import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { initAnalytics } from "@/config/analytics";

export function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    initAnalytics();
  }, []);

  return <>{children}</>;
}
