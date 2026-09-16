import type { ReactNode } from "react";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function PageHero({ image, imageAlt, eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-20 sm:py-28">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-3 text-3xl text-forest-foreground sm:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base text-forest-foreground/85 sm:text-lg">{subtitle}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
