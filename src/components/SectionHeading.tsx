type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`mt-3 text-2xl sm:text-3xl ${light ? "text-forest-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 text-base ${light ? "text-forest-foreground/80" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
