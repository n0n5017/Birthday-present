import { type ReactNode, type RefObject } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Polaroid, Theme } from "@/lib/birthday-data";

export function Chrome({
  theme,
  soundOn,
  onToggleSound,
}: {
  theme: Theme;
  soundOn: boolean;
  onToggleSound: () => void;
}) {
  return (
    <header className={cn("chrome", theme)}>
      <a className="brand" href="#intro">
        for <i>M&C</i> 16
      </a>
      <button
        className="sound"
        type="button"
        aria-pressed={soundOn}
        onClick={onToggleSound}
      >
        {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <span>{soundOn ? "Sound on" : "Sound off"}</span>
      </button>
    </header>
  );
}

export function Nav({
  back,
  nextLabel = "Continue",
  onBack,
  onNext,
  nextDisabled,
}: {
  back?: boolean;
  nextLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
}) {
  if (!back && !onNext) return null;
  return (
    <div className="nav">
      {back && onBack ? (
        <button className="btn ghost" type="button" onClick={onBack}>
          Back
        </button>
      ) : null}
      {onNext ? (
        <button
          className="btn"
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
        >
          {nextLabel}
        </button>
      ) : null}
    </div>
  );
}

export function PolaroidCard({ photo }: { photo: Polaroid }) {
  return (
    <figure className="po">
      <img src={photo.src} alt={photo.alt} />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export function NoteDialog({
  dialogRef,
  title,
  body,
  onClose,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
  title: string;
  body: string;
  onClose: () => void;
}) {
  return (
    <dialog
      ref={dialogRef}
      className="note-dialog"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button className="x" type="button" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <span aria-hidden="true" style={{ fontSize: "2.4rem", color: "#bd87b3" }}>
        ✿
      </span>
      <h2>{title}</h2>
      <p>{body}</p>
      <button className="btn" type="button" onClick={onClose}>
        Keep wandering
      </button>
    </dialog>
  );
}

export function Heading({
  eyebrow,
  title,
  italic,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  italic?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title}
        {italic ? (
          <>
            <br />
            <em>{italic}</em>
          </>
        ) : null}
      </h2>
      {children ? <p className="lede">{children}</p> : null}
    </>
  );
}
