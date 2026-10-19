export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Bloodborne Wiki",
  shortName: "Bloodborne",
  logoText: "B",
  tagline: "Explore Yharnam, Master the Hunt",
  description: "Explore Bloodborne with detailed boss guides, trick weapon builds, walkthroughs, The Old Hunters DLC tips, secrets, lore explanations, and practical combat strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bloodborne.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bloodborne.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.playstation.com/en-us/games/bloodborne/",
  heroVideoId: "Hdzpy5UXT0Y", // Bloodborne Gameplay Announce Trailer | Gamescom | PlayStation 4 Action RPG
  social: {
    youtube: "https://www.youtube.com/@PlayStation",
    twitter: "https://x.com/PlayStation",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
