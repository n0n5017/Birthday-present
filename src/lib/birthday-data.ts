export const SCREEN_IDS = [
  "intro",
  "choose",
  "m-meet",
  "m-garden",
  "m-chocolate",
  "m-photos",
  "k-meet",
  "k-comic",
  "k-quests",
  "k-arcade",
  "k-photos",
  "journey",
  "wishes",
  "vault",
  "chaos",
  "letter",
  "secret",
  "finale",
] as const;

export type ScreenId = (typeof SCREEN_IDS)[number];
export type Who = "m" | "k";
export type Theme = "s-i" | "s-c" | "m" | "k";

export function isScreenId(value: string): value is ScreenId {
  return (SCREEN_IDS as readonly string[]).includes(value);
}

export const THEME: Record<ScreenId, Theme> = {
  intro: "s-i",
  choose: "s-c",
  "m-meet": "m",
  "m-garden": "m",
  "m-chocolate": "m",
  "m-photos": "m",
  "k-meet": "k",
  "k-comic": "k",
  "k-quests": "k",
  "k-arcade": "k",
  "k-photos": "k",
  journey: "m",
  wishes: "m",
  vault: "m",
  chaos: "m",
  letter: "m",
  secret: "k",
  finale: "s-i",
};

export const FLOW: Record<ScreenId, { back?: ScreenId; next?: ScreenId }> = {
  intro: { next: "choose" },
  choose: { back: "intro" },
  "m-meet": { back: "choose", next: "m-garden" },
  "m-garden": { back: "m-meet", next: "m-chocolate" },
  "m-chocolate": { back: "m-garden", next: "m-photos" },
  "m-photos": { back: "m-chocolate", next: "journey" },
  "k-meet": { back: "choose", next: "k-comic" },
  "k-comic": { back: "k-meet", next: "k-quests" },
  "k-quests": { back: "k-comic", next: "k-arcade" },
  "k-arcade": { back: "k-quests", next: "k-photos" },
  "k-photos": { back: "k-arcade", next: "journey" },
  journey: { next: "wishes" },
  wishes: { back: "journey", next: "vault" },
  vault: { back: "wishes", next: "chaos" },
  chaos: { back: "vault", next: "letter" },
  letter: { back: "chaos", next: "secret" },
  secret: { back: "letter", next: "finale" },
  finale: { back: "secret" },
};

export const photos = {
  munachiHero: "/photos/munachi-burgundy.jpg",
  munachiPose: "/photos/munachi-pose.jpg",
  munachiRest: "/photos/munachi-rest.jpg",
  munachiScarf: "/photos/munachi-scarf.jpg",
  munachiOveralls: "/photos/munachi-overalls.jpg",
  munachiWhite: "/photos/munachi-white.jpg",
  kamsoHero: "/photos/kamso-burgundy.jpg",
  kamsoPeace: "/photos/kamso-peace.jpg",
  kamsoOutdoor: "/photos/kamso-outdoor.jpg",
  together: "/photos/together.jpg",
  throwbackHat: "/photos/throwback-hat.jpg",
  throwbackCouch: "/photos/throwback-couch.jpg",
} as const;

export type Polaroid = {
  src: string;
  alt: string;
  caption: string;
  who: Who | "both" | "throwback";
};

export const POLAROIDS: Polaroid[] = [
  {
    src: photos.munachiHero,
    alt: "Munachimso in a burgundy dress",
    caption: "Munachimso",
    who: "m",
  },
  {
    src: photos.munachiPose,
    alt: "Munachimso posing against a painted wall",
    caption: "Sixteen looks",
    who: "m",
  },
  {
    src: photos.munachiRest,
    alt: "Munachimso resting with her eyes closed",
    caption: "Soft reset",
    who: "m",
  },
  {
    src: photos.munachiScarf,
    alt: "Munachimso in a patterned headscarf",
    caption: "That stare",
    who: "m",
  },
  {
    src: photos.munachiOveralls,
    alt: "Munachimso in orange overalls",
    caption: "Main character",
    who: "m",
  },
  {
    src: photos.munachiWhite,
    alt: "Munachimso smiling in a white outfit",
    caption: "Sunday best",
    who: "m",
  },
  {
    src: photos.kamsoHero,
    alt: "Chukwukamso smiling in a burgundy outfit",
    caption: "Chukwukamso",
    who: "k",
  },
  {
    src: photos.kamsoPeace,
    alt: "Chukwukamso smiling and making a peace sign",
    caption: "Okay.",
    who: "k",
  },
  {
    src: photos.kamsoOutdoor,
    alt: "Chukwukamso standing outdoors with arms crossed",
    caption: "Unbothered",
    who: "k",
  },
  {
    src: photos.together,
    alt: "Munachimso and Chukwukamso together",
    caption: "Sibling memory",
    who: "both",
  },
  {
    src: photos.throwbackHat,
    alt: "A throwback portrait in a black hat",
    caption: "Throwback",
    who: "throwback",
  },
  {
    src: photos.throwbackCouch,
    alt: "A throwback photo on a blue couch",
    caption: "Saturday",
    who: "throwback",
  },
];

export const WISHES = [
  "Stay close to God.",
  "Take your education seriously.",
  "Never let anyone make you feel small.",
  "Choose your friends carefully.",
  "Learn how to manage money.",
  "Don't be afraid to fail.",
  "Respect people.",
  "Learn to apologize when you're wrong.",
  "Protect each other.",
  "Don't rush into adulthood.",
  "Have fun while you're young.",
  "Take care of your health.",
  "Keep learning outside school.",
  "Don't compare your journey to someone else's.",
  "Remember your family.",
  "Build a life you'll be proud of.",
];

export const FLOWER_NOTES = [
  {
    title: "Keep God close",
    note: "Stay close to God. Sixteen opens a lot of new doors. You don't have to walk through them alone.",
    rose: false,
  },
  {
    title: "That brain of yours",
    note: "You're smart. Stubborn. Loud. Somehow still lovable. Keep the intelligence. Pair it with humility. That's the real flex.",
    rose: false,
  },
  {
    title: "Money, but make it wise",
    note: "Learn how to handle money. Don't be like me. Anime merch can wait until the savings envelope has eaten first.",
    rose: false,
  },
  {
    title: "Your voice",
    note: "You have never met a conversation you couldn't join. That's a gift. Being heard is even better when people still feel respected.",
    rose: false,
  },
  {
    title: "Don't rush",
    note: "Don't rush adulthood. Have fun while you're young. University is loading, not here yet.",
    rose: false,
  },
  {
    title: "A rose, for you",
    note: "Sixteen looks good on you, Munachimso. Keep growing. Protect your softness too. Happy birthday. — Your big brother",
    rose: true,
  },
];

export const CHOCOLATE_LINES = [
  "Warm-up square.",
  "She is going to ask who ate this.",
  "Blame Kamso.",
  "Kamso will say Okay.",
  "That one had the caramel. Bold.",
  "Your cover is thinning.",
  "Leave the last two. Strategy.",
  "You left one. Coward. Respect.",
  "Stash gone. Happy birthday. Run.",
];

export const COMIC_PANELS = [
  {
    tag: "PANEL 01",
    text: "Born into this family. Achievement unlocked. He said… nothing.",
  },
  {
    tag: "PANEL 02",
    text: "Munachi fills the room. Kamso holds a whole paragraph in one word: Okay.",
  },
  {
    tag: "PANEL 03",
    text: "Meanwhile, in another universe: Free Fire is loading.",
    speed: true,
  },
  {
    tag: "PANEL 04",
    text: "WAEC: survived. JAMB: incoming. Enthusiasm: still buffering.",
  },
  {
    tag: "PANEL 05",
    text: "Level 16 unlocked. He will celebrate by being mildly aware of the fact.",
  },
];

export const QUESTS = [
  {
    id: "fire",
    label: "Win (or at least start) a Free Fire match",
  },
  {
    id: "beast",
    label: "Watch a MrBeast video without blinking",
  },
  {
    id: "chill",
    label: "Stay unbothered for 16 whole seconds",
  },
];

export const CHAOS = [
  {
    title: "Being born into this family",
    detail: "Achievement unlocked.",
  },
  {
    title: "School",
    detail: "Somehow, WAEC is behind you.",
  },
  {
    title: "Who ate my food?",
    detail: "A question with no reliable witnesses.",
  },
  {
    title: "Who broke this?",
    detail: "Everyone suddenly develops amnesia.",
  },
  {
    title: "Family meetings",
    detail: "Munachi has a statement ready.",
  },
  {
    title: "Growing up",
    detail: "Level 16 unlocked.",
  },
];

export const PACKED: ScreenId[] = [
  "m-photos",
  "k-photos",
  "wishes",
  "vault",
  "chaos",
  "letter",
];
