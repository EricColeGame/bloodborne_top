import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Bloodborne, its artwork, characters, logos, and related media belong to FromSoftware and Sony Interactive Entertainment.</p>
      <p>This is a non-official fan wiki implementation for educational and guide presentation purposes.</p>
      <p>If you own rights to content displayed here and have a concern, contact the site operator at <a className="text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
