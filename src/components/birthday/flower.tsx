const PALETTES = [
  ["#c4a6ff", "#8d6cff", "#fff4ff"],
  ["#ff9ec8", "#ff5db1", "#fff0f6"],
  ["#ffc7a6", "#ff8f6b", "#fff6ee"],
  ["#e4c2ff", "#a077ff", "#faf4ff"],
  ["#f6c1de", "#c45c9a", "#fff7fb"],
] as const;

type FlowerMarkProps = {
  variant: number;
  rose?: boolean;
};

export function FlowerMark({ variant, rose }: FlowerMarkProps) {
  const [petal, edge, heart] = PALETTES[variant % PALETTES.length];
  const petals = rose ? [0, 40, 80, 120, 160, 200, 240, 280, 320] : [0, 72, 144, 216, 288];

  return (
    <svg viewBox="0 0 80 130" overflow="visible" aria-hidden="true">
      <path
        d="M40 52 C36 78 44 100 40 128"
        fill="none"
        stroke="#2f7a45"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="54"
        cy="90"
        rx="11"
        ry="5"
        fill="#3d9a55"
        transform="rotate(-28 54 90)"
      />
      <ellipse
        cx="28"
        cy="96"
        rx="9"
        ry="4.5"
        fill="#2f7a45"
        transform="rotate(32 28 96)"
      />
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="40"
          cy={rose ? 26 : 28}
          rx={rose ? 10 : 11}
          ry={rose ? 22 : 20}
          fill={petal}
          stroke={edge}
          strokeWidth="0.7"
          transform={`rotate(${deg} 40 40)`}
        />
      ))}
      <circle cx="40" cy="40" r={rose ? 11 : 9} fill={heart} stroke={edge} strokeWidth="1" />
      <circle cx="40" cy="40" r={rose ? 5 : 4} fill="#f2b823" />
    </svg>
  );
}
