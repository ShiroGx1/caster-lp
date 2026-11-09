// Data murni tanpa JSX biar file .js tetap valid
const teamData = [
  {
    name: "Shirocore",
    role: "Founder & Owner",
    desc: "The visionary who started it all. Leading the legion with passion and dedication.",
    icon: "crown",
    status: "online",
    socials: [
      { type: "riot", href: "#", label: "Valorant" },
      {
        type: "tiktok",
        href: "https://www.tiktok.com/@shirox_g?_r=1&_t=ZS-97Tsn2IXdUT",
        label: "TikTok",
      },
    ],
  },
  {
    name: "Wangsap",
    role: "Co-Owner",
    desc: "The right hand of the Legion. Managing operations and keeping things running smoothly.",
    icon: "star",
    status: "online",
    socials: [
      { type: "riot", href: "#", label: "Valorant" },
      {
        type: "tiktok",
        href: "https://www.tiktok.com/@muflih_og?is_from_webapp=1&sender_device=pc",
        label: "TikTok",
      },
    ],
  },
  {
    name: "Kuroneko",
    role: "Head Admin",
    desc: "The guardian of the Legion. Ensuring peace and order across all channels.",
    icon: "gavel",
    status: "idle",
    socials: [
      { type: "riot", href: "#", label: "Valorant" },
      { type: "steam", href: "#", label: "Steam" },
    ],
  },
  {
    name: "ICIBOSS",
    role: "Streamer Tiktok",
    desc: "The All Game Streamer",
    icon: "wand",
    status: "online",
    socials: [
      {
        type: "tiktok",
        href: "https://www.tiktok.com/@icibossplayz?is_from_webapp=1&sender_device=pc",
        label: "TikTok",
      },
      {
        type: "instagram",
        href: "https://www.instagram.com/prasetyoyogi_9?igsh=MXZ5czZlODdmd3A3YQ==",
        label: "Instagram",
      },
    ],
  },
];

export default teamData;
