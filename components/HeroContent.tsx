"use client";

import { HeroHighlight } from "./ui/hero-highlight";
import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signInWithSpotify } from "@/lib/auth";

export function HeroContent() {
  const words = ["artists", "opertunities", "events", "gigs"];
  return (
    <HeroHighlight>
      <div className="wrapper-hero w-full">
        <div className="h-[30rem] flex flex-col gap-8 justify-center items-start px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Find
            <FlipWords words={words} /> <br />
            easily with GigHarmony
          </div>
          <div className="links but then not links when logged in flex flex-col gap-4 w-full">
            <Link href="/">
              <Button
                onClick={signInWithSpotify}
                variant="secondary"
                className="text-lg p-6 rounded-3xl w-full flex"
              >
                <Image
                  src="/spotify.svg"
                  alt="Vercel Logo"
                  className="dark:invert mr-3"
                  width={20}
                  height={24}
                  priority
                />
                Continue with Spotify
              </Button>
            </Link>

            <Link href="/">
              <Button
                variant="secondary"
                className="text-lg p-6 rounded-3xl w-full flex"
              >
                <Mail className="mr-3" />
                Continue with Email
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
}
