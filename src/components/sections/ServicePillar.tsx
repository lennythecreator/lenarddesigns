import {
  Branches,
  Exploded,
  Phosphor,
  Phone,
  Slow,
} from "@lucasmarkes/hairline/react";
import type { ServicePillar as ServicePillarData } from "@/lib/content";

type ServicePillarProps = {
  pillar: ServicePillarData;
};

const figureByPillar: Record<string, typeof Exploded> = {
  "website-design": Exploded,
  "mobile-app": Phone,
  "e-commerce": Slow,
  "startup-mvp": Branches,
  "marketing-event": Phosphor,
};

export function ServicePillar({ pillar }: ServicePillarProps) {
  const text = (
    <div className="flex flex-col justify-center">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-6">
        CAPABILITIES // {pillar.index}
      </div>
      <h2 className="font-headline-lg text-headline-lg text-soft-white mb-6">
        {pillar.title}
      </h2>
      <p className="font-body-lg text-body-lg mb-8 text-soft-white/80">
        {pillar.description}
      </p>
      <ul className="space-y-4">
        {pillar.features.map((feature) => (
          <li
            key={feature.index}
            className="flex items-center gap-4 border-b border-glass-border pb-4"
          >
            <span className="font-label-caps text-label-caps text-primary">
              {feature.index}
            </span>
            <span className="font-body-md text-body-md text-soft-white">
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  const Figure = figureByPillar[pillar.id] ?? Exploded;

  const image = (
    <div
      className="relative w-full rounded glass-panel overflow-hidden cinematic-shadow p-6 md:p-10"
      style={{
        ["--hairline-plate" as string]: "#201f1f",
        ["--hairline-hi" as string]: "#f5f5f2",
        ["--hairline-edge" as string]: "#c4c7c3",
        ["--hairline-mid" as string]: "#8e928e",
        ["--hairline-lo" as string]: "#444845",
      }}
    >
      <Figure
        theme="dark"
        intensity={0.6}
        aria-label={pillar.image.alt}
      />
    </div>
  );

  if (pillar.layout === "right") {
    return (
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-6 md:col-start-1 mb-12 md:mb-0">{image}</div>
        <div className="md:col-span-5 md:col-start-8">{text}</div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
      <div className="md:col-span-5 md:col-start-1 flex flex-col justify-center order-2 md:order-1">
        {text}
      </div>
      <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 mb-12 md:mb-0">
        {image}
      </div>
    </section>
  );
}