import { PageShell } from "@/app/layout/PageShell";
import { Providers } from "@/app/providers";
import { HomePage } from "@/app/routes/HomePage";

export default function App() {
  return (
    <Providers>
      <PageShell>
        <HomePage />
      </PageShell>
    </Providers>
  );
}
