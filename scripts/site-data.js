export const routes = {
  home: "/",
  building: "/building.html",
  services: "/services.html",
  about: "/about.html",
  contact: "/contact.html",
  beta: "/contact.html#beta",
};

export const statusItems = [
  {
    title: "In active development",
    body: "Klyvo is being shaped around real creative workflows instead of padded launch copy.",
    iconClass: "",
  },
  {
    title: "Private beta stage",
    body: "We are working with a small group of early users while the product surface gets tighter.",
    iconClass: "purple",
  },
  {
    title: "Human-reviewed output",
    body: "Creative direction, scripts, and final concepts still pass through human judgment.",
    iconClass: "success",
  },
];

export const audienceItems = [
  {
    title: "Growing product brands",
    body: "Teams with good products but inconsistent paid creative or content throughput.",
  },
  {
    title: "Founders and lean marketing teams",
    body: "People who need sharper creative systems without building a full internal studio.",
  },
  {
    title: "Brands testing new ad workflows",
    body: "Early adopters who want service help now and a closer look at the platform as it grows.",
  },
];

export const services = [
  {
    title: "Product ad concepts",
    body: "Hooks, visual directions, and layout ideas for products that need better paid creative.",
  },
  {
    title: "Short-form video edits",
    body: "Ad-ready cuts built from raw clips, UGC footage, product shots, or generated support visuals.",
  },
  {
    title: "AI-assisted scripts",
    body: "Generate hooks, concepts, and draft ad structures faster while keeping creative control in human hands.",
  },
  {
    title: "Brand creative direction",
    body: "Messaging, visual consistency, and creative feedback for brands still finding their ad voice.",
  },
];

export const platformFeatureCards = [
  {
    title: "Product creative planning",
    body: "Structure ad concepts around product inputs, campaign goals, and visual direction.",
  },
  {
    title: "Brand Kit organization",
    body: "Store references, tone, colors, and brand rules in one place so projects stay consistent.",
  },
  {
    title: "Project and history workflow",
    body: "Keep concepts, versions, and creative iterations organized as work moves forward.",
  },
  {
    title: "Early render queue interface",
    body: "Track what is being prepared, reviewed, and rendered while the pipeline improves.",
  },
  {
    title: "AI Director",
    body: "A guided creative layer being built to help shape scenes, pacing, and direction faster.",
  },
  {
    title: "Automated editing workflow",
    body: "A smoother system for turning raw assets and decisions into usable ad outputs.",
  },
];

export const roadmapGroups = [
  {
    title: "What works today",
    items: [
      "Product creative planning",
      "Brand Kit organization",
      "Project/history workflow",
      "Early render queue interface",
    ],
  },
  {
    title: "Building now",
    items: [
      "AI Director",
      "Automated editing workflow",
      "Captions and creative variations",
      "Better render pipeline",
    ],
  },
  {
    title: "Planned",
    items: [
      "Team collaboration",
      "Brand memory",
      "Multi-platform export",
      "Full self-serve SaaS access",
    ],
  },
];
