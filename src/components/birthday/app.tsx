import { useEffect, useState } from "react";
import {
  FLOW,
  PACKED,
  THEME,
  isScreenId,
  type ScreenId,
  type Who,
} from "@/lib/birthday-data";
import { burst, chime, setSoundEnabled } from "@/lib/fx";
import { Chrome } from "@/components/birthday/ui";
import {
  ChaosScreen,
  ChooseScreen,
  FinaleScreen,
  IntroScreen,
  JourneyScreen,
  KamsoArcade,
  KamsoComic,
  KamsoMeet,
  KamsoQuests,
  LetterScreen,
  MunachiChocolate,
  MunachiGarden,
  MunachiMeet,
  PhotoWall,
  SecretScreen,
  WishesScreen,
} from "@/components/birthday/screens";

const WHO_KEY = "mc16-who";

function readHash(): ScreenId {
  if (typeof window === "undefined") return "intro";
  const raw = window.location.hash.replace(/^#\/?/, "");
  return isScreenId(raw) ? raw : "intro";
}

function readWho(): Who | null {
  if (typeof window === "undefined") return null;
  try {
    const value = sessionStorage.getItem(WHO_KEY);
    return value === "m" || value === "k" ? value : null;
  } catch {
    return null;
  }
}

export function BirthdayApp() {
  const [screen, setScreen] = useState<ScreenId>("intro");
  const [who, setWho] = useState<Who | null>(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    setScreen(readHash());
    setWho(readWho());
    const onHash = () => setScreen(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function go(id: ScreenId) {
    if (typeof window !== "undefined") {
      window.location.hash = id;
    }
    setScreen(id);
  }

  function pick(next: Who) {
    setWho(next);
    try {
      sessionStorage.setItem(WHO_KEY, next);
    } catch {
      /* ignore */
    }
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

  return (
    <>
      <a className="skip" href="#stage">
        Skip to the birthday
      </a>
      <Chrome
        theme={theme}
        soundOn={soundOn}
        onToggleSound={() => {
          const enabled = !soundOn;
          setSoundOn(enabled);
          setSoundEnabled(enabled);
          if (enabled) chime();
        }}
      />
      <div id="fx-root" />
      <main
        id="stage"
        key={screen}
        className={`screen ${theme} on${packed ? " packed" : ""}`}
      >
        {screen === "intro" ? (
          <IntroScreen onNext={next} />
        ) : null}
        {screen === "choose" ? (
          <ChooseScreen onBack={back} onPick={pick} />
        ) : null}
        {screen === "m-meet" ? (
          <MunachiMeet onBack={back} onNext={next} />
        ) : null}
        {screen === "m-garden" ? (
          <MunachiGarden onBack={back} onNext={next} />
        ) : null}
        {screen === "m-chocolate" ? (
          <MunachiChocolate onBack={back} onNext={next} />
        ) : null}
        {screen === "m-photos" ? (
          <PhotoWall who="m" onBack={back} onNext={next} />
        ) : null}
        {screen === "k-meet" ? (
          <KamsoMeet onBack={back} onNext={next} />
        ) : null}
        {screen === "k-comic" ? (
          <KamsoComic onBack={back} onNext={next} />
        ) : null}
        {screen === "k-quests" ? (
          <KamsoQuests onBack={back} onNext={next} />
        ) : null}
        {screen === "k-arcade" ? (
          <KamsoArcade onBack={back} onNext={next} />
        ) : null}
        {screen === "k-photos" ? (
          <PhotoWall who="k" onBack={back} onNext={next} />
        ) : null}
        {screen === "journey" ? (
          <JourneyScreen who={who} onBack={back} onNext={next} />
        ) : null}
        {screen === "wishes" ? (
          <WishesScreen onBack={back} onNext={next} />
        ) : null}
        {screen === "vault" ? (
          <PhotoWall who="all" onBack={back} onNext={next} />
        ) : null}
        {screen === "chaos" ? (
          <ChaosScreen onBack={back} onNext={next} />
        ) : null}
        {screen === "letter" ? (
          <LetterScreen onBack={back} onNext={next} />
        ) : null}
        {screen === "secret" ? (
          <SecretScreen onBack={back} onNext={next} />
        ) : null}
        {screen === "finale" ? (
          <FinaleScreen
            onCelebrate={() => {
              burst("confetti", 80);
              burst("petal", 24);
              chime();
            }}
            onMunachi={() => pick("m")}
            onKamso={() => pick("k")}
          />
        ) : null}
      </main>
    </>
  );
}
