import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { FlipWords } from "@/components/ui/flip-words";
import { ModeToggle } from "@/components/Modetoggle";

export default function Home() {
  const words = ["artists", "opertunities", "events", "gigs"];

  return (
    <main className="h-screen">
      <div className="wrapper-header sticky top-0 py-6 px-24 w-full bg-slate-50 dark:bg-gray-950 border-b">
        <div className="header flex justify-between gap-14">
          <section className="header-middle flex gap-14">
            <h1 className="text-3xl font-semibold">GigHarmony</h1>
            <div className="flex justify-evenly content-end gap-8">
              <Link href="/">
                <Button variant="link" className="p-0 text-md">
                  Gigs
                </Button>
              </Link>
              <Link href="/">
                <Button variant="link" className="p-0 text-md">
                  Artists
                </Button>
              </Link>
              <Link href="/">
                <Button variant="link" className="p-0 text-md">
                  Getting Started
                </Button>
              </Link>
            </div>
          </section>
          <section className="header-right flex gap-4 ">
            <Link href="/">
              <Button variant="secondary">Sign up</Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">Profile or whatever</Button>
            </Link>
            <ModeToggle />
          </section>
        </div>
      </div>
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
    </main>
  );
}
