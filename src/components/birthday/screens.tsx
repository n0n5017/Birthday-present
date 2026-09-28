import { useEffect, useMemo, useRef, useState } from "react";
import { FlowerMark } from "@/components/birthday/flower";
import { Heading, Nav, NoteDialog, PolaroidCard } from "@/components/birthday/ui";
import {
  CHAOS,
  CHOCOLATE_LINES,
  COMIC_PANELS,
  FLOWER_NOTES,
  POLAROIDS,
  QUESTS,
  WISHES,
  photos,
  type Who,
} from "@/lib/birthday-data";
import { burst, chime } from "@/lib/fx";

type NavProps = {
  onBack?: () => void;
  onNext: () => void;
};

const FLOWER_POS = [
  { left: "6%", bottom: "2%", delay: "0s" },
  { left: "24%", bottom: "10%", delay: "0.12s" },
  { left: "42%", bottom: "0%", delay: "0.22s" },
  { left: "58%", bottom: "14%", delay: "0.34s" },
  { left: "74%", bottom: "6%", delay: "0.46s" },
  { left: "32%", bottom: "28%", delay: "0.18s" },
];

export function IntroScreen({ onNext }: { onNext: () => void }) {
  return (
    <>
      <p className="eyebrow">29 · 09 · 2026</p>
      <h1>
        Munachimso
        <br />
        <em>& Chukwukamso</em>
      </h1>
      <p className="lede">
        Two siblings. One birthday. Two completely different operating systems.
        Somehow, both made it to sixteen.
      </p>
      <Nav nextLabel="Open your birthday surprise" onNext={onNext} />
    </>
  );
}

export function ChooseScreen({
  onBack,
  onPick,
}: {
  onBack: () => void;
  onPick: (who: Who) => void;
}) {
  return (
    <>
      <p className="eyebrow">same family · same birthday</p>
      <h2>
        Who's opening
        <br />
        <em>this first?</em>
      </h2>
      <p className="lede">Almost completely different settings. Pick a twin.</p>
      <div className="picks">
        <button className="pick pm" type="button" onClick={() => onPick("m")}>
          <img src={photos.munachiHero} alt="" />
          Munachimso
          <small>the talkative one · “Let me explain…”</small>
        </button>
        <button className="pick pk" type="button" onClick={() => onPick("k")}>
          <img src={photos.kamsoHero} alt="" />
          Chukwukamso
          <small>the nonchalant one · “Okay.”</small>
        </button>
      </div>
      <Nav back onBack={onBack} />
    </>
  );
}

export function MunachiMeet({ onBack, onNext }: NavProps) {
  const [result, setResult] = useState("");
  return (
    <>
      <div className="meet">
        <figure className="po" style={{ width: "13.5rem" }}>
          <img src={photos.munachiHero} alt="Munachimso in a burgundy dress" />
          <figcaption>Munachimso</figcaption>
        </figure>
        <div className="meet-copy">
          <p className="eyebrow">the talkative one</p>
          <h2>
            Munachimso
            <br />
            <em>smart. stubborn. loud.</em>
          </h2>
          <p className="lede">
            She has never met a conversation she couldn't contribute to, or
            an argument she couldn't extend by another forty-five minutes.
            Very smart, very talk-active, occasionally disrespectful, and
            apparently powered by an unlimited supply of opinions.
          </p>
          <div className="interest">
            <span className="chip">Money</span>
            <span className="chip">Anime</span>
            <span className="chip">Opinions</span>
          </div>
          <button
            className="btn ghost"
            type="button"
            onClick={() => {
              chime();
              setResult(
                "ERROR 404: Stubbornness limit not found. Please try again in 16 years.",
              );
            }}
          >
            Measure her stubbornness
          </button>
          <p className="live" aria-live="polite">
            {result}
          </p>
        </div>
      </div>
      <Nav back onBack={onBack} onNext={onNext} nextLabel="Enter the garden" />
    </>
  );
}

export function MunachiGarden({ onBack, onNext }: NavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<boolean[]>(() => FLOWER_NOTES.map(() => false));
  const [note, setNote] = useState({ title: "", body: "" });

  function bloom(index: number) {
    const item = FLOWER_NOTES[index];
    setOpen((current) => current.map((value, i) => (i === index ? true : value)));
    setNote({ title: item.title, body: item.note });
    dialogRef.current?.showModal();
    burst("petal", 18);
    chime();
  }

  return (
    <>
      <Heading
        eyebrow="little things, from your brother"
        title="Pick a flower."
        italic="There's a note inside."
      >
        Each bloom holds something I wanted you to keep. Open whichever one
        calls to you.
      </Heading>
      <div className="garden" aria-label="Birthday garden">
        {FLOWER_NOTES.map((item, index) => (
          <button
            key={item.title}
            className={`fl${item.rose ? " rose" : ""}${open[index] ? " open" : ""}`}
            style={{
              left: FLOWER_POS[index]?.left,
              bottom: FLOWER_POS[index]?.bottom,
              ["--d" as string]: FLOWER_POS[index]?.delay,
            }}
            type="button"
            onClick={() => bloom(index)}
            aria-label={`Open flower: ${item.title}`}
          >
            <FlowerMark variant={index} rose={item.rose} />
          </button>
        ))}
      </div>
      <p className="lede">A little more patience can make room for a lot more tenderness.</p>
      <Nav back onBack={onBack} onNext={onNext} nextLabel="To the stash" />
      <NoteDialog
        dialogRef={dialogRef}
        title={note.title}
        body={note.body}
        onClose={() => dialogRef.current?.close()}
      />
    </>
  );
}

export function MunachiChocolate({ onBack, onNext }: NavProps) {
  const [gone, setGone] = useState<boolean[]>(() => Array(9).fill(false));
  const eaten = gone.filter(Boolean).length;
  const live =
    eaten === 0
      ? "Nine squares. She will notice."
      : CHOCOLATE_LINES[eaten - 1] ?? "Stash gone.";

  return (
    <>
      <Heading
        eyebrow="a small stash"
        title="Chocolate first."
        italic="Questions later."
      >
        Nine squares of the good stuff. Eat them before Munachi files a report.
      </Heading>
      <div className="bar" aria-label="Chocolate bar">
        {gone.map((isGone, index) => (
          <button
            key={index}
            className={`sq${isGone ? " gone" : ""}`}
            type="button"
            aria-label={`Chocolate square ${index + 1}`}
            onClick={() => {
              if (isGone) return;
              setGone((current) =>
                current.map((value, i) => (i === index ? true : value)),
              );
              chime();
            }}
          />
        ))}
      </div>
      <p className="live" aria-live="polite">
        {live}
      </p>
      <Nav back onBack={onBack} onNext={onNext} nextLabel="Her polaroids" />
    </>
  );
}

export function PhotoWall({
  who,
  onBack,
  onNext,
}: NavProps & { who: Who | "all" }) {
  const shots = useMemo(() => {
    if (who === "all") return POLAROIDS;
    if (who === "m") return POLAROIDS.filter((item) => item.who === "m");
    return POLAROIDS.filter((item) => item.who === "k");
  }, [who]);

  return (
    <>
      <Heading
        eyebrow={who === "all" ? "05 · the memory vault" : "snapshots"}
        title={who === "all" ? "Sixteen years of memories." : "A few frames."}
        italic={who === "all" ? "Keep them." : undefined}
      >
        {who === "all"
          ? "Birthday portraits, sibling snapshots, and a few throwbacks from the years that got you here."
          : "Hover to straighten. These are yours."}
      </Heading>
      <div className="polas">
        {shots.map((photo) => (
          <PolaroidCard key={photo.src} photo={photo} />
        ))}
      </div>
      <Nav
        back={Boolean(onBack)}
        onBack={onBack}
        onNext={onNext}
        nextLabel={who === "all" ? "Sibling chaos" : "The next chapter"}
      />
    </>
  );
}

export function KamsoMeet({ onBack, onNext }: NavProps) {
  const [result, setResult] = useState("");
  return (
    <>
      <div className="meet">
        <figure className="po" style={{ width: "13.5rem" }}>
          <img
            src={photos.kamsoHero}
            alt="Chukwukamso smiling in a burgundy outfit"
          />
          <figcaption>Chukwukamso</figcaption>
        </figure>
        <div className="meet-copy">
          <p className="eyebrow">the nonchalant one</p>
          <h2>
            Chukwukamso
            <br />
            <em>quiet. unbothered.</em>
          </h2>
          <p className="lede">
            While Munachimso can fill a room with conversation, Kamso can
            communicate an entire paragraph with one word: “Okay.” He doesn't
            say much, but he has his own world, his own interests, and his own
            extremely relaxed approach to life.
          </p>
          <div className="interest">
            <span className="chip">Free Fire</span>
            <span className="chip">MrBeast</span>
            <span className="chip">Unbothered</span>
          </div>
          <button
            className="btn ghost"
            type="button"
            onClick={() => {
              chime();
              setResult("Loading enthusiasm... Loading... Request timed out.");
            }}
          >
            Try to get Kamso excited
          </button>
          <p className="live" aria-live="polite">
            {result}
          </p>
        </div>
      </div>
      <Nav back onBack={onBack} onNext={onNext} nextLabel="Open the comic" />
    </>
  );
}

export function KamsoComic({ onBack, onNext }: NavProps) {
  const [shown, setShown] = useState(1);

  return (
    <>
      <Heading
        eyebrow="origin story"
        title="Kamso: the comic."
        italic="Tap for the next panel."
      >
        A quiet legend, told one panel at a time.
      </Heading>
      <div className="panels">
        {COMIC_PANELS.map((panel, index) => (
          <article
            key={panel.tag}
            className={`panel${panel.speed ? " speed" : ""}${index < shown ? " show" : ""}`}
          >
            <b>{panel.tag}</b>
            {panel.text}
          </article>
        ))}
      </div>
      <div className="nav">
        <button className="btn ghost" type="button" onClick={onBack}>
          Back
        </button>
        {shown < COMIC_PANELS.length ? (
          <button
            className="btn"
            type="button"
            onClick={() => {
              setShown((n) => n + 1);
              burst("confetti", 10);
              chime();
            }}
          >
            Next panel
          </button>
        ) : (
          <button className="btn" type="button" onClick={onNext}>
            Start the quests
          </button>
        )}
      </div>
    </>
  );
}

export function KamsoQuests({ onBack, onNext }: NavProps) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [chillLeft, setChillLeft] = useState<number | null>(null);
  const chillTimer = useRef<number | null>(null);
  const completed = QUESTS.filter((quest) => done[quest.id]).length;
  const percent = Math.round((completed / QUESTS.length) * 100);

  useEffect(() => {
    return () => {
      if (chillTimer.current) window.clearInterval(chillTimer.current);
    };
  }, []);

  function complete(id: string) {
    setDone((current) => ({ ...current, [id]: true }));
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
    }, 1000);
  }

  return (
    <>
      <Heading
        eyebrow="daily quests"
        title="Do the work."
        italic="Or tap it. Same thing."
      >
        Three missions. Completely optional. Extremely on-brand.
      </Heading>
      <div className="quests">
        {QUESTS.map((quest) => (
          <button
            key={quest.id}
            className={`quest${done[quest.id] ? " done" : ""}`}
            type="button"
            onClick={() => {
              if (done[quest.id]) return;
              if (quest.id === "chill") startChill();
              else complete(quest.id);
            }}
          >
            {quest.id === "chill" && chillLeft !== null && !done.chill
              ? `Unbothered protocol: ${chillLeft}s`
              : quest.label}
          </button>
        ))}
      </div>
      <div className="meter" aria-label="Quest progress">
        <i style={{ width: `${percent}%` }} />
      </div>
      {completed === QUESTS.length ? (
        <p className="reward">Reward unlocked: a whole lifetime ahead</p>
      ) : (
        <p className="lede">
          {completed}/3 complete
          {chillLeft !== null && !done.chill ? " · stay unbothered" : ""}
        </p>
      )}
      <Nav back onBack={onBack} onNext={onNext} nextLabel="Arcade" />
    </>
  );
}

export function KamsoArcade({ onBack, onNext }: NavProps) {
  const [coinText, setCoinText] = useState("Tap the coin.");
  const [canText, setCanText] = useState("Then the can.");

  return (
    <>
      <Heading
        eyebrow="side quest"
        title="Coin. Can. Okay."
      >
        Kamso's entire economy and hydration strategy, in two objects.
      </Heading>
      <div className="arcade">
        <button
          className="coin"
          type="button"
          aria-label="Tap the gold coin"
          onClick={() => {
            burst("coin", 10);
            chime();
            setCoinText("Economy: thriving. Expression: unchanged.");
          }}
        >
          16
        </button>
        <button
          className="can"
          type="button"
          aria-label="Tap the energy drink"
          onClick={() => {
            burst("bubble", 16);
            chime();
            setCanText("Ranked night fuel. Do not shake.");
          }}
        >
          ENERGY
        </button>
      </div>
      <p className="live" aria-live="polite">
        {coinText} {canText}
      </p>
      <Nav back onBack={onBack} onNext={onNext} nextLabel="His polaroids" />
    </>
  );
}

export function JourneyScreen({
  who,
  onBack,
  onNext,
}: {
  who: Who | null;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <>
      <Heading
        eyebrow="03 · next level"
        title="WAEC → JAMB → UNI"
        italic="One chapter is closing."
      >
        {who === "k"
          ? "Even the unbothered one has a next level. JAMB is not a side quest you can skip."
          : "You both made it through. The next one is already loading."}
      </Heading>
      <div className="journey">
        <article className="jcard">
          <b>01</b>
          <h3>WAEC</h3>
          <strong>DONE</strong>
          <p>You both made it through. Respect.</p>
        </article>
        <article className="jcard current">
          <b>02</b>
          <h3>JAMB</h3>
          <strong>LOADING…</strong>
          <p>Next year. Time to lock in.</p>
        </article>
        <article className="jcard">
          <b>03</b>
          <h3>UNIVERSITY</h3>
          <strong>UNLOCKED SOON</strong>
          <p>New people, new responsibilities, new memories.</p>
        </article>
      </div>
      <article className="card">
        <p>
          Don't rush adulthood. Learn. Make mistakes. Learn from them.
          Choose your friends carefully. Take your education seriously. Learn
          how to handle money. Don't be like me. Stay close to God and to
          your family. And when life gets difficult, remember that you don't
          have to figure everything out in one day.
        </p>
      </article>
      <Nav onNext={onNext} nextLabel="Sixteen things" back onBack={onBack} />
    </>
  );
}

export function WishesScreen({ onBack, onNext }: NavProps) {
  const [open, setOpen] = useState<boolean[]>(() => WISHES.map(() => false));

  return (
    <>
      <Heading
        eyebrow="04 · sixteen things"
        title="Things I want you both to remember."
      >
        Sixteen cards. Open them one at a time.
      </Heading>
      <div className="wishes">
        {WISHES.map((wish, index) => (
          <button
            key={wish}
            className="wish"
            type="button"
            onClick={() => {
              setOpen((current) =>
                current.map((value, i) => (i === index ? true : value)),
              );
              chime();
            }}
          >
            <b>{String(index + 1).padStart(2, "0")}</b>
            <span>{open[index] ? wish : "Tap to open"}</span>
          </button>
        ))}
      </div>
      <Nav back onBack={onBack} onNext={onNext} nextLabel="Memory vault" />
    </>
  );
}

export function ChaosScreen({ onBack, onNext }: NavProps) {
  return (
    <>
      <Heading eyebrow="06 · sibling chaos" title="Things you two have survived." />
      <div className="chaos-grid">
        {CHAOS.map((item) => (
          <button
            key={item.title}
            className="chaos-card"
            type="button"
            onClick={() => {
              burst("confetti", 8);
              chime();
            }}
          >
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </button>
        ))}
      </div>
      <Nav back onBack={onBack} onNext={onNext} nextLabel="A letter" />
    </>
  );
}

export function LetterScreen({ onBack, onNext }: NavProps) {
  return (
    <>
      <article className="card" style={{ position: "relative" }}>
        <div className="stamp" aria-hidden="true">
          16
        </div>
        <p className="eyebrow">07 · from your big brother</p>
        <h2>
          A message
          <br />
          <em>for both of you.</em>
        </h2>
        <p>
          Watching younger siblings grow up is strange. One minute you're
          looking at children, and somehow you're suddenly looking at two
          sixteen-year-olds preparing for university.
        </p>
        <p>
          I'm proud of how far you've both come. You are very different
          people, and you don't have to become the same kind of person.
          Munachi, keep your intelligence and ambition, but remember that being
          smart is even better when it comes with humility and respect. Kamso,
          you don't have to be the loudest person in a room. Keep your
          calm, but never let being nonchalant stop you from caring about the
          things that matter.
        </p>
        <p>
          The years ahead will change you both. I hope they make you wiser,
          stronger, kinder and more confident. Take care of yourselves. Look
          out for each other. And remember that your family will always be part
          of your story.
        </p>
        <p className="signoff">
          Happy 16th, both of you.
          <br />
          <strong>— Your Big Brother</strong>
        </p>
      </article>
      <Nav back onBack={onBack} onNext={onNext} nextLabel="One last button" />
    </>
  );
}

export function SecretScreen({ onBack, onNext }: NavProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <p className="eyebrow">classified</p>
      <h2>
        Do not
        <br />
        <em>click this.</em>
      </h2>
      <button
        className="secret-btn"
        type="button"
        onClick={() => {
          setOpened(true);
          burst("confetti", 40);
          chime();
        }}
      >
        {opened ? "You were told not to click it" : "Do not click this"}
      </button>
      {opened ? (
        <div className="secret-msg">
          <p className="eyebrow">You clicked it? Mumu.</p>
          <p>
            You were specifically told not to click that button. Apparently,
            sixteen years of life have not produced the required level of
            obedience.
          </p>
          <p>Still… I love you both. Don't let it get to your heads sha.</p>
        </div>
      ) : (
        <p className="lede">Seriously. Leave it. Walk away. Be sixteen and wise.</p>
      )}
      <Nav back onBack={onBack} onNext={onNext} nextLabel="Finale" />
    </>
  );
}

export function FinaleScreen({
  onCelebrate,
  onMunachi,
  onKamso,
}: {
  onCelebrate: () => void;
  onMunachi: () => void;
  onKamso: () => void;
}) {
  return (
    <>
      <p className="eyebrow">29 · 09 · 2026</p>
      <p className="finale-num">16</p>
      <h2>
        Happy
        <br />
        <em>birthday.</em>
      </h2>
      <p className="names">Munachimso & Chukwukamso</p>
      <p className="lede">Sixteen years down. A whole lifetime ahead.</p>
      <div className="nav">
        <button className="btn" type="button" onClick={onCelebrate}>
          Celebrate again
        </button>
      </div>
      <div className="nav">
        <button className="btn ghost" type="button" onClick={onMunachi}>
          Visit Munachi
        </button>
        <button className="btn ghost" type="button" onClick={onKamso}>
          Visit Kamso
        </button>
      </div>
      <p className="lede">
        Made with love, sarcasm, and a suspicious amount of sibling evidence.
      </p>
    </>
  );
}
