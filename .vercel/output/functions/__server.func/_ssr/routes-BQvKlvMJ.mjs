import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Volume2, t as VolumeX } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQvKlvMJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SCREEN_IDS = [
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
	"finale"
];
function isScreenId(value) {
	return SCREEN_IDS.includes(value);
}
var THEME = {
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
	finale: "s-i"
};
var FLOW = {
	intro: { next: "choose" },
	choose: { back: "intro" },
	"m-meet": {
		back: "choose",
		next: "m-garden"
	},
	"m-garden": {
		back: "m-meet",
		next: "m-chocolate"
	},
	"m-chocolate": {
		back: "m-garden",
		next: "m-photos"
	},
	"m-photos": {
		back: "m-chocolate",
		next: "journey"
	},
	"k-meet": {
		back: "choose",
		next: "k-comic"
	},
	"k-comic": {
		back: "k-meet",
		next: "k-quests"
	},
	"k-quests": {
		back: "k-comic",
		next: "k-arcade"
	},
	"k-arcade": {
		back: "k-quests",
		next: "k-photos"
	},
	"k-photos": {
		back: "k-arcade",
		next: "journey"
	},
	journey: { next: "wishes" },
	wishes: {
		back: "journey",
		next: "vault"
	},
	vault: {
		back: "wishes",
		next: "chaos"
	},
	chaos: {
		back: "vault",
		next: "letter"
	},
	letter: {
		back: "chaos",
		next: "secret"
	},
	secret: {
		back: "letter",
		next: "finale"
	},
	finale: { back: "secret" }
};
var photos = {
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
	throwbackCouch: "/photos/throwback-couch.jpg"
};
var POLAROIDS = [
	{
		src: photos.munachiHero,
		alt: "Munachimso in a burgundy dress",
		caption: "Munachimso",
		who: "m"
	},
	{
		src: photos.munachiPose,
		alt: "Munachimso posing against a painted wall",
		caption: "Sixteen looks",
		who: "m"
	},
	{
		src: photos.munachiRest,
		alt: "Munachimso resting with her eyes closed",
		caption: "Soft reset",
		who: "m"
	},
	{
		src: photos.munachiScarf,
		alt: "Munachimso in a patterned headscarf",
		caption: "That stare",
		who: "m"
	},
	{
		src: photos.munachiOveralls,
		alt: "Munachimso in orange overalls",
		caption: "Main character",
		who: "m"
	},
	{
		src: photos.munachiWhite,
		alt: "Munachimso smiling in a white outfit",
		caption: "Sunday best",
		who: "m"
	},
	{
		src: photos.kamsoHero,
		alt: "Chukwukamso smiling in a burgundy outfit",
		caption: "Chukwukamso",
		who: "k"
	},
	{
		src: photos.kamsoPeace,
		alt: "Chukwukamso smiling and making a peace sign",
		caption: "Okay.",
		who: "k"
	},
	{
		src: photos.kamsoOutdoor,
		alt: "Chukwukamso standing outdoors with arms crossed",
		caption: "Unbothered",
		who: "k"
	},
	{
		src: photos.together,
		alt: "Munachimso and Chukwukamso together",
		caption: "Sibling memory",
		who: "both"
	},
	{
		src: photos.throwbackHat,
		alt: "A throwback portrait in a black hat",
		caption: "Throwback",
		who: "throwback"
	},
	{
		src: photos.throwbackCouch,
		alt: "A throwback photo on a blue couch",
		caption: "Saturday",
		who: "throwback"
	}
];
var WISHES = [
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
	"Build a life you'll be proud of."
];
var FLOWER_NOTES = [
	{
		title: "Keep God close",
		note: "Stay close to God. Sixteen opens a lot of new doors. You don't have to walk through them alone.",
		rose: false
	},
	{
		title: "That brain of yours",
		note: "You're smart. Stubborn. Loud. Somehow still lovable. Keep the intelligence. Pair it with humility. That's the real flex.",
		rose: false
	},
	{
		title: "Money, but make it wise",
		note: "Learn how to handle money. Don't be like me. Anime merch can wait until the savings envelope has eaten first.",
		rose: false
	},
	{
		title: "Your voice",
		note: "You have never met a conversation you couldn't join. That's a gift. Being heard is even better when people still feel respected.",
		rose: false
	},
	{
		title: "Don't rush",
		note: "Don't rush adulthood. Have fun while you're young. University is loading, not here yet.",
		rose: false
	},
	{
		title: "A rose, for you",
		note: "Sixteen looks good on you, Munachimso. Keep growing. Protect your softness too. Happy birthday. — Your big brother",
		rose: true
	}
];
var CHOCOLATE_LINES = [
	"Warm-up square.",
	"She is going to ask who ate this.",
	"Blame Kamso.",
	"Kamso will say Okay.",
	"That one had the caramel. Bold.",
	"Your cover is thinning.",
	"Leave the last two. Strategy.",
	"You left one. Coward. Respect.",
	"Stash gone. Happy birthday. Run."
];
var COMIC_PANELS = [
	{
		tag: "PANEL 01",
		text: "Born into this family. Achievement unlocked. He said… nothing."
	},
	{
		tag: "PANEL 02",
		text: "Munachi fills the room. Kamso holds a whole paragraph in one word: Okay."
	},
	{
		tag: "PANEL 03",
		text: "Meanwhile, in another universe: Free Fire is loading.",
		speed: true
	},
	{
		tag: "PANEL 04",
		text: "WAEC: survived. JAMB: incoming. Enthusiasm: still buffering."
	},
	{
		tag: "PANEL 05",
		text: "Level 16 unlocked. He will celebrate by being mildly aware of the fact."
	}
];
var QUESTS = [
	{
		id: "fire",
		label: "Win (or at least start) a Free Fire match"
	},
	{
		id: "beast",
		label: "Watch a MrBeast video without blinking"
	},
	{
		id: "chill",
		label: "Stay unbothered for 16 whole seconds"
	}
];
var CHAOS = [
	{
		title: "Being born into this family",
		detail: "Achievement unlocked."
	},
	{
		title: "School",
		detail: "Somehow, WAEC is behind you."
	},
	{
		title: "Who ate my food?",
		detail: "A question with no reliable witnesses."
	},
	{
		title: "Who broke this?",
		detail: "Everyone suddenly develops amnesia."
	},
	{
		title: "Family meetings",
		detail: "Munachi has a statement ready."
	},
	{
		title: "Growing up",
		detail: "Level 16 unlocked."
	}
];
var PACKED = [
	"m-photos",
	"k-photos",
	"wishes",
	"vault",
	"chaos",
	"letter"
];
var COLORS = [
	"#cdb6ff",
	"#ff9be4",
	"#7c4dff",
	"#c6ff3d",
	"#ffd166",
	"#ffffff"
];
var soundOn = false;
var audio = null;
function prefersReducedMotion() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function setSoundEnabled(value) {
	soundOn = value;
}
function chime() {
	if (!soundOn || prefersReducedMotion() || typeof window === "undefined") return;
	const AudioCtx = window.AudioContext || window.webkitAudioContext;
	if (!AudioCtx) return;
	audio ||= new AudioCtx();
	if (audio.state === "suspended") audio.resume();
	const oscillator = audio.createOscillator();
	const gain = audio.createGain();
	oscillator.type = "sine";
	oscillator.frequency.setValueAtTime(660, audio.currentTime);
	oscillator.frequency.exponentialRampToValueAtTime(988, audio.currentTime + .18);
	gain.gain.setValueAtTime(1e-4, audio.currentTime);
	gain.gain.exponentialRampToValueAtTime(.07, audio.currentTime + .03);
	gain.gain.exponentialRampToValueAtTime(1e-4, audio.currentTime + .5);
	oscillator.connect(gain);
	gain.connect(audio.destination);
	oscillator.start();
	oscillator.stop(audio.currentTime + .52);
}
function burst(kind, count = 24) {
	if (typeof document === "undefined" || prefersReducedMotion()) return;
	const root = document.getElementById("fx-root");
	if (!root) return;
	for (let i = 0; i < count; i++) {
		const el = document.createElement("span");
		const color = COLORS[Math.floor(Math.random() * COLORS.length)];
		if (kind === "petal") {
			el.className = "fx pt";
			el.style.setProperty("--c", color);
		} else if (kind === "confetti") {
			el.className = "fx cf";
			el.style.setProperty("--c", color);
		} else if (kind === "coin") {
			el.className = "fx cn";
			el.textContent = "₦";
		} else el.className = "fx bb";
		el.style.left = `${Math.random() * 100}%`;
		el.style.top = `${20 + Math.random() * 50}%`;
		el.style.setProperty("--dx", `${Math.random() * 280 - 140}px`);
		el.style.setProperty("--dy", kind === "bubble" ? `${-120 - Math.random() * 220}px` : `${80 + Math.random() * 320}px`);
		el.style.setProperty("--r", `${Math.random() * 540 - 180}deg`);
		el.style.animationDuration = `${1.1 + Math.random() * 1.8}s`;
		root.append(el);
		window.setTimeout(() => el.remove(), 3200);
	}
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Chrome({ theme, soundOn, onToggleSound }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("chrome", theme === "k" && "k"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			className: "brand",
			href: "#intro",
			children: [
				"for ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "M&C" }),
				" 16"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "sound",
			type: "button",
			"aria-pressed": soundOn,
			onClick: onToggleSound,
			children: [soundOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: soundOn ? "Sound on" : "Sound off" })]
		})]
	});
}
function Nav({ back, nextLabel = "Continue", onBack, onNext, nextDisabled }) {
	if (!back && !onNext) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "nav",
		children: [back && onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "btn ghost",
			type: "button",
			onClick: onBack,
			children: "Back"
		}) : null, onNext ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "btn",
			type: "button",
			onClick: onNext,
			disabled: nextDisabled,
			children: nextLabel
		}) : null]
	});
}
function PolaroidCard({ photo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "po",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: photo.src,
			alt: photo.alt
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: photo.caption })]
	});
}
function NoteDialog({ dialogRef, title, body, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dialog", {
		ref: dialogRef,
		className: "note-dialog",
		onClick: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "x",
				type: "button",
				"aria-label": "Close",
				onClick: onClose,
				children: "×"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				style: {
					fontSize: "2.4rem",
					color: "#bd87b3"
				},
				children: "✿"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn",
				type: "button",
				onClick: onClose,
				children: "Keep wandering"
			})
		]
	});
}
function Heading({ eyebrow, title, italic, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: eyebrow
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [title, italic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: italic })] }) : null] }),
		children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lede",
			children
		}) : null
	] });
}
var PALETTES = [
	[
		"#c4a6ff",
		"#8d6cff",
		"#fff4ff"
	],
	[
		"#ff9ec8",
		"#ff5db1",
		"#fff0f6"
	],
	[
		"#ffc7a6",
		"#ff8f6b",
		"#fff6ee"
	],
	[
		"#e4c2ff",
		"#a077ff",
		"#faf4ff"
	],
	[
		"#f6c1de",
		"#c45c9a",
		"#fff7fb"
	]
];
function FlowerMark({ variant, rose }) {
	const [petal, edge, heart] = PALETTES[variant % PALETTES.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 130",
		overflow: "visible",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 52 C36 78 44 100 40 128",
				fill: "none",
				stroke: "#2f7a45",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "54",
				cy: "90",
				rx: "11",
				ry: "5",
				fill: "#3d9a55",
				transform: "rotate(-28 54 90)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "28",
				cy: "96",
				rx: "9",
				ry: "4.5",
				fill: "#2f7a45",
				transform: "rotate(32 28 96)"
			}),
			(rose ? [
				0,
				40,
				80,
				120,
				160,
				200,
				240,
				280,
				320
			] : [
				0,
				72,
				144,
				216,
				288
			]).map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "40",
				cy: rose ? 26 : 28,
				rx: rose ? 10 : 11,
				ry: rose ? 22 : 20,
				fill: petal,
				stroke: edge,
				strokeWidth: "0.7",
				transform: `rotate(${deg} 40 40)`
			}, deg)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: rose ? 11 : 9,
				fill: heart,
				stroke: edge,
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "40",
				r: rose ? 5 : 4,
				fill: "#f2b823"
			})
		]
	});
}
var FLOWER_POS = [
	{
		left: "6%",
		bottom: "2%",
		delay: "0s"
	},
	{
		left: "24%",
		bottom: "10%",
		delay: "0.12s"
	},
	{
		left: "42%",
		bottom: "0%",
		delay: "0.22s"
	},
	{
		left: "58%",
		bottom: "14%",
		delay: "0.34s"
	},
	{
		left: "74%",
		bottom: "6%",
		delay: "0.46s"
	},
	{
		left: "32%",
		bottom: "28%",
		delay: "0.18s"
	}
];
function IntroScreen({ onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "29 · 09 · 2026"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
			"Munachimso",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "& Chukwukamso" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bloom",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "16" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lede",
			children: "Two siblings. One birthday. Two completely different operating systems. Somehow, both made it to sixteen."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			nextLabel: "Open your birthday surprise",
			onNext
		})
	] });
}
function ChooseScreen({ onBack, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "same family · same birthday"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
			"Who's opening",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "this first?" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lede",
			children: "Almost completely different settings. Pick a twin."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "picks",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "pick pm",
				type: "button",
				onClick: () => onPick("m"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos.munachiHero,
						alt: ""
					}),
					"Munachimso",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "the talkative one · “Let me explain…”" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "pick pk",
				type: "button",
				onClick: () => onPick("k"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos.kamsoHero,
						alt: ""
					}),
					"Chukwukamso",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "the nonchalant one · “Okay.”" })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: true,
			onBack
		})
	] });
}
function MunachiMeet({ onBack, onNext }) {
	const [result, setResult] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "meet",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "po",
			style: { width: "13.5rem" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos.munachiHero,
				alt: "Munachimso in a burgundy dress"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "Munachimso" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "meet-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "the talkative one"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Munachimso",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "smart. stubborn. loud." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "She has never met a conversation she couldn't contribute to, or an argument she couldn't extend by another forty-five minutes. Very smart, very talk-active, occasionally disrespectful, and apparently powered by an unlimited supply of opinions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "interest",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Money"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Anime"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Opinions"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn ghost",
					type: "button",
					onClick: () => {
						chime();
						setResult("ERROR 404: Stubbornness limit not found. Please try again in 16 years.");
					},
					children: "Measure her stubbornness"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "live",
					"aria-live": "polite",
					children: result
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
		back: true,
		onBack,
		onNext,
		nextLabel: "Enter the garden"
	})] });
}
function MunachiGarden({ onBack, onNext }) {
	const dialogRef = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(() => FLOWER_NOTES.map(() => false));
	const [note, setNote] = (0, import_react.useState)({
		title: "",
		body: ""
	});
	function bloom(index) {
		const item = FLOWER_NOTES[index];
		setOpen((current) => current.map((value, i) => i === index ? true : value));
		setNote({
			title: item.title,
			body: item.note
		});
		dialogRef.current?.showModal();
		burst("petal", 18);
		chime();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: "little things, from your brother",
			title: "Pick a flower.",
			italic: "There's a note inside.",
			children: "Each bloom holds something I wanted you to keep. Open whichever one calls to you."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "garden",
			"aria-label": "Birthday garden",
			children: FLOWER_NOTES.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: `fl${item.rose ? " rose" : ""}${open[index] ? " open" : ""}`,
				style: {
					left: FLOWER_POS[index]?.left,
					bottom: FLOWER_POS[index]?.bottom,
					["--d"]: FLOWER_POS[index]?.delay
				},
				type: "button",
				onClick: () => bloom(index),
				"aria-label": `Open flower: ${item.title}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowerMark, {
					variant: index,
					rose: item.rose
				})
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lede",
			children: "A little more patience can make room for a lot more tenderness."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: true,
			onBack,
			onNext,
			nextLabel: "To the stash"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteDialog, {
			dialogRef,
			title: note.title,
			body: note.body,
			onClose: () => dialogRef.current?.close()
		})
	] });
}
function MunachiChocolate({ onBack, onNext }) {
	const [gone, setGone] = (0, import_react.useState)(() => Array(9).fill(false));
	const eaten = gone.filter(Boolean).length;
	const live = eaten === 0 ? "Nine squares. She will notice." : CHOCOLATE_LINES[eaten - 1] ?? "Stash gone.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: "a small stash",
			title: "Chocolate first.",
			italic: "Questions later.",
			children: "Nine squares of the good stuff. Eat them before Munachi files a report."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bar",
			"aria-label": "Chocolate bar",
			children: gone.map((isGone, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: `sq${isGone ? " gone" : ""}`,
				type: "button",
				"aria-label": `Chocolate square ${index + 1}`,
				onClick: () => {
					if (isGone) return;
					setGone((current) => current.map((value, i) => i === index ? true : value));
					chime();
				}
			}, index))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "live",
			"aria-live": "polite",
			children: live
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: true,
			onBack,
			onNext,
			nextLabel: "Her polaroids"
		})
	] });
}
function PhotoWall({ who, onBack, onNext }) {
	const shots = (0, import_react.useMemo)(() => {
		if (who === "all") return POLAROIDS;
		if (who === "m") return POLAROIDS.filter((item) => item.who === "m");
		return POLAROIDS.filter((item) => item.who === "k");
	}, [who]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: who === "all" ? "05 · the memory vault" : "snapshots",
			title: who === "all" ? "Sixteen years of memories." : "A few frames.",
			italic: who === "all" ? "Keep them." : void 0,
			children: who === "all" ? "Birthday portraits, sibling snapshots, and a few throwbacks from the years that got you here." : "Hover to straighten. These are yours."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "polas",
			children: shots.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolaroidCard, { photo }, photo.src))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: Boolean(onBack),
			onBack,
			onNext,
			nextLabel: who === "all" ? "Sibling chaos" : "The next chapter"
		})
	] });
}
function KamsoMeet({ onBack, onNext }) {
	const [result, setResult] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "meet",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "po",
			style: { width: "13.5rem" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos.kamsoHero,
				alt: "Chukwukamso smiling in a burgundy outfit"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "Chukwukamso" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "meet-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "the nonchalant one"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Chukwukamso",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "quiet. unbothered." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede",
					children: "While Munachimso can fill a room with conversation, Kamso can communicate an entire paragraph with one word: “Okay.” He doesn't say much, but he has his own world, his own interests, and his own extremely relaxed approach to life."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "interest",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Free Fire"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "MrBeast"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip",
							children: "Unbothered"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn ghost",
					type: "button",
					onClick: () => {
						chime();
						setResult("Loading enthusiasm... Loading... Request timed out.");
					},
					children: "Try to get Kamso excited"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "live",
					"aria-live": "polite",
					children: result
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
		back: true,
		onBack,
		onNext,
		nextLabel: "Open the comic"
	})] });
}
function KamsoComic({ onBack, onNext }) {
	const [shown, setShown] = (0, import_react.useState)(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: "origin story",
			title: "Kamso: the comic.",
			italic: "Tap for the next panel.",
			children: "A quiet legend, told one panel at a time."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "panels",
			children: COMIC_PANELS.map((panel, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `panel${panel.speed ? " speed" : ""}${index < shown ? " show" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: panel.tag }), panel.text]
			}, panel.tag))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nav",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn ghost",
				type: "button",
				onClick: onBack,
				children: "Back"
			}), shown < COMIC_PANELS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn",
				type: "button",
				onClick: () => {
					setShown((n) => n + 1);
					burst("confetti", 10);
					chime();
				},
				children: "Next panel"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn",
				type: "button",
				onClick: onNext,
				children: "Start the quests"
			})]
		})
	] });
}
function KamsoQuests({ onBack, onNext }) {
	const [done, setDone] = (0, import_react.useState)({});
	const [chillLeft, setChillLeft] = (0, import_react.useState)(null);
	const chillTimer = (0, import_react.useRef)(null);
	const completed = QUESTS.filter((quest) => done[quest.id]).length;
	const percent = Math.round(completed / QUESTS.length * 100);
	(0, import_react.useEffect)(() => {
		return () => {
			if (chillTimer.current) window.clearInterval(chillTimer.current);
		};
	}, []);
	function complete(id) {
		setDone((current) => ({
			...current,
			[id]: true
		}));
		burst("confetti", 14);
		chime();
	}
	function startChill() {
		if (done.chill || chillLeft !== null) return;
		setChillLeft(16);
		if (chillTimer.current) window.clearInterval(chillTimer.current);
		chillTimer.current = window.setInterval(() => {
			setChillLeft((left) => {
				if (left === null) return left;
				if (left <= 1) {
					if (chillTimer.current) window.clearInterval(chillTimer.current);
					complete("chill");
					return 0;
				}
				return left - 1;
			});
		}, 1e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: "daily quests",
			title: "Do the work.",
			italic: "Or tap it. Same thing.",
			children: "Three missions. Completely optional. Extremely on-brand."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "quests",
			children: QUESTS.map((quest) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: `quest${done[quest.id] ? " done" : ""}`,
				type: "button",
				onClick: () => {
					if (done[quest.id]) return;
					if (quest.id === "chill") startChill();
					else complete(quest.id);
				},
				children: quest.id === "chill" && chillLeft !== null && !done.chill ? `Unbothered protocol: ${chillLeft}s` : quest.label
			}, quest.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "meter",
			"aria-label": "Quest progress",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${percent}%` } })
		}),
		completed === QUESTS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "reward",
			children: "Reward unlocked: a whole lifetime ahead"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "lede",
			children: [
				completed,
				"/3 complete",
				chillLeft !== null && !done.chill ? " · stay unbothered" : ""
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: true,
			onBack,
			onNext,
			nextLabel: "Arcade"
		})
	] });
}
function KamsoArcade({ onBack, onNext }) {
	const [coinText, setCoinText] = (0, import_react.useState)("Tap the coin.");
	const [canText, setCanText] = (0, import_react.useState)("Then the can.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: "side quest",
			title: "Coin. Can. Okay.",
			children: "Kamso's entire economy and hydration strategy, in two objects."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "arcade",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "coin",
				type: "button",
				"aria-label": "Tap the gold coin",
				onClick: () => {
					burst("coin", 10);
					chime();
					setCoinText("Economy: thriving. Expression: unchanged.");
				},
				children: "16"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "can",
				type: "button",
				"aria-label": "Tap the energy drink",
				onClick: () => {
					burst("bubble", 16);
					chime();
					setCanText("Ranked night fuel. Do not shake.");
				},
				children: "ENERGY"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "live",
			"aria-live": "polite",
			children: [
				coinText,
				" ",
				canText
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: true,
			onBack,
			onNext,
			nextLabel: "His polaroids"
		})
	] });
}
function JourneyScreen({ who, onBack, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: "03 · next level",
			title: "WAEC → JAMB → UNI",
			italic: "One chapter is closing.",
			children: who === "k" ? "Even the unbothered one has a next level. JAMB is not a side quest you can skip." : "You both made it through. The next one is already loading."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "journey",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "jcard",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "01" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "WAEC" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "DONE" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You both made it through. Respect." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "jcard current",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "02" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "JAMB" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "LOADING…" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Next year. Time to lock in." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "jcard",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "03" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "UNIVERSITY" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "UNLOCKED SOON" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "New people, new responsibilities, new memories." })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Don't rush adulthood. Learn. Make mistakes. Learn from them. Choose your friends carefully. Take your education seriously. Learn how to handle money. Don't be like me. Stay close to God and to your family. And when life gets difficult, remember that you don't have to figure everything out in one day." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			onNext,
			nextLabel: "Sixteen things",
			back: true,
			onBack
		})
	] });
}
function WishesScreen({ onBack, onNext }) {
	const [open, setOpen] = (0, import_react.useState)(() => WISHES.map(() => false));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: "04 · sixteen things",
			title: "Things I want you both to remember.",
			children: "Sixteen cards. Open them one at a time."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wishes",
			children: WISHES.map((wish, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "wish",
				type: "button",
				onClick: () => {
					setOpen((current) => current.map((value, i) => i === index ? true : value));
					chime();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: open[index] ? wish : "Tap to open" })]
			}, wish))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: true,
			onBack,
			onNext,
			nextLabel: "Memory vault"
		})
	] });
}
function ChaosScreen({ onBack, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
			eyebrow: "06 · sibling chaos",
			title: "Things you two have survived."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "chaos-grid",
			children: CHAOS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "chaos-card",
				type: "button",
				onClick: () => {
					burst("confetti", 8);
					chime();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.detail })]
			}, item.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: true,
			onBack,
			onNext,
			nextLabel: "A letter"
		})
	] });
}
function LetterScreen({ onBack, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card",
		style: { position: "relative" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stamp",
				"aria-hidden": "true",
				children: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "07 · from your big brother"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
				"A message",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "for both of you." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Watching younger siblings grow up is strange. One minute you're looking at children, and somehow you're suddenly looking at two sixteen-year-olds preparing for university." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm proud of how far you've both come. You are very different people, and you don't have to become the same kind of person. Munachi, keep your intelligence and ambition, but remember that being smart is even better when it comes with humility and respect. Kamso, you don't have to be the loudest person in a room. Keep your calm, but never let being nonchalant stop you from caring about the things that matter." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The years ahead will change you both. I hope they make you wiser, stronger, kinder and more confident. Take care of yourselves. Look out for each other. And remember that your family will always be part of your story." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "signoff",
				children: [
					"Happy 16th, both of you.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "— Your Big Brother" })
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
		back: true,
		onBack,
		onNext,
		nextLabel: "One last button"
	})] });
}
function SecretScreen({ onBack, onNext }) {
	const [opened, setOpened] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "classified"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
			"Do not",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "click this." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "secret-btn",
			type: "button",
			onClick: () => {
				setOpened(true);
				burst("confetti", 40);
				chime();
			},
			children: opened ? "You were told not to click it" : "Do not click this"
		}),
		opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "secret-msg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "You clicked it? Mumu."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You were specifically told not to click that button. Apparently, sixteen years of life have not produced the required level of obedience." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Still… I love you both. Don't let it get to your heads sha." })
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lede",
			children: "Seriously. Leave it. Walk away. Be sixteen and wise."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			back: true,
			onBack,
			onNext,
			nextLabel: "Finale"
		})
	] });
}
function FinaleScreen({ onCelebrate, onMunachi, onKamso }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "29 · 09 · 2026"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "finale-num",
			children: "16"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
			"Happy",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "birthday." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "names",
			children: "Munachimso & Chukwukamso"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lede",
			children: "Sixteen years down. A whole lifetime ahead."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "nav",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn",
				type: "button",
				onClick: onCelebrate,
				children: "Celebrate again"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nav",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn ghost",
				type: "button",
				onClick: onMunachi,
				children: "Visit Munachi"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn ghost",
				type: "button",
				onClick: onKamso,
				children: "Visit Kamso"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "lede",
			children: "Made with love, sarcasm, and a suspicious amount of sibling evidence."
		})
	] });
}
var WHO_KEY = "mc16-who";
function readHash() {
	if (typeof window === "undefined") return "intro";
	const raw = window.location.hash.replace(/^#\/?/, "");
	return isScreenId(raw) ? raw : "intro";
}
function readWho() {
	if (typeof window === "undefined") return null;
	try {
		const value = sessionStorage.getItem(WHO_KEY);
		return value === "m" || value === "k" ? value : null;
	} catch {
		return null;
	}
}
function BirthdayApp() {
	const [screen, setScreen] = (0, import_react.useState)("intro");
	const [who, setWho] = (0, import_react.useState)(null);
	const [soundOn, setSoundOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setScreen(readHash());
		setWho(readWho());
		const onHash = () => setScreen(readHash());
		window.addEventListener("hashchange", onHash);
		return () => window.removeEventListener("hashchange", onHash);
	}, []);
	function go(id) {
		if (typeof window !== "undefined") window.location.hash = id;
		setScreen(id);
	}
	function pick(next) {
		setWho(next);
		try {
			sessionStorage.setItem(WHO_KEY, next);
		} catch {}
		if (next === "m") {
			burst("petal", 28);
			go("m-meet");
		} else {
			burst("confetti", 28);
			go("k-meet");
		}
		chime();
	}
	function back() {
		if (screen === "journey") {
			go(who === "k" ? "k-photos" : "m-photos");
			return;
		}
		const target = FLOW[screen].back;
		if (target) go(target);
	}
	function next() {
		const target = FLOW[screen].next;
		if (target) {
			if (screen === "intro") burst("petal", 22);
			go(target);
			chime();
		}
	}
	const theme = THEME[screen];
	const packed = PACKED.includes(screen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip",
			href: "#stage",
			children: "Skip to the birthday"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chrome, {
			theme,
			soundOn,
			onToggleSound: () => {
				const enabled = !soundOn;
				setSoundOn(enabled);
				setSoundEnabled(enabled);
				if (enabled) chime();
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "fx-root" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "stage",
			className: `screen ${theme} on${packed ? " packed" : ""}`,
			children: [
				screen === "intro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroScreen, { onNext: next }) : null,
				screen === "choose" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChooseScreen, {
					onBack: back,
					onPick: pick
				}) : null,
				screen === "m-meet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MunachiMeet, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "m-garden" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MunachiGarden, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "m-chocolate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MunachiChocolate, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "m-photos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoWall, {
					who: "m",
					onBack: back,
					onNext: next
				}) : null,
				screen === "k-meet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KamsoMeet, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "k-comic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KamsoComic, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "k-quests" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KamsoQuests, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "k-arcade" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KamsoArcade, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "k-photos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoWall, {
					who: "k",
					onBack: back,
					onNext: next
				}) : null,
				screen === "journey" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyScreen, {
					who,
					onBack: back,
					onNext: next
				}) : null,
				screen === "wishes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishesScreen, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "vault" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoWall, {
					who: "all",
					onBack: back,
					onNext: next
				}) : null,
				screen === "chaos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChaosScreen, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "letter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterScreen, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "secret" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecretScreen, {
					onBack: back,
					onNext: next
				}) : null,
				screen === "finale" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinaleScreen, {
					onCelebrate: () => {
						burst("confetti", 80);
						burst("petal", 24);
						chime();
					},
					onMunachi: () => pick("m"),
					onKamso: () => pick("k")
				}) : null
			]
		}, screen)
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirthdayApp, {});
}
//#endregion
export { Home as component };
