type Props = {
  label: string;
  hint?: string;
  ratio?: "16/9" | "4/3" | "1/1" | "3/2";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Plassholder for bilder som ennå ikke er levert.
 * Bytt ut med <img src={...} alt={...} /> når bildet er klart.
 */
export function ImagePlaceholder({
  label,
  hint,
  ratio = "3/2",
  tone = "light",
  className = "",
}: Props) {
  const isDark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
      className={[
        "flex w-full flex-col items-center justify-center rounded-md border border-dashed p-6 text-center",
        isDark
          ? "border-navy-foreground/25 bg-navy-foreground/5 text-navy-foreground/70"
          : "border-border bg-muted text-muted-foreground",
        className,
      ].join(" ")}
    >
      <span className="text-xs font-bold tracking-[0.18em] text-teal uppercase">Bilde</span>
      <span className="mt-2 max-w-xs text-sm font-semibold">{label}</span>
      {hint ? <span className="mt-1 max-w-xs text-xs opacity-80">{hint}</span> : null}
    </div>
  );
}
