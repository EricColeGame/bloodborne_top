import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>Bloodborne Wiki is an independent fan-built guide hub covering progression routes, bosses, trick weapons, builds, The Old Hunters DLC, and essential game knowledge for new and veteran hunters alike.</p>
      <p>Bloodborne, its characters, artwork, and related media belong to FromSoftware and Sony Interactive Entertainment. This is an unofficial fan resource.</p>
      <p>Contact the site team at <a className="text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
