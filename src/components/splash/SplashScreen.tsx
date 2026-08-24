"use client";

import { useEffect, useState } from "react";
import { SplashWordmark } from "./SplashWordmark";
import { WebGLBackground } from "./WebGLBackground";
import { SplashShapes } from "./SplashShapes";

const STING_DURATION = 2600;
const FADE_DURATION = 700;

export function SplashScreen() {
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLeaving(true), STING_DURATION);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => setHidden(true), FADE_DURATION);
    return () => clearTimeout(t);
  }, [leaving]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-obsidian-base text-soft-white overflow-hidden flex flex-col justify-center items-center transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <WebGLBackground />
      <SplashShapes />
      <main
        className={`relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-margin-mobile md:px-margin-desktop transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          leaving ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <SplashWordmark className="w-full max-w-4xl" />
      </main>
    </div>
  );
}