"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./Modetoggle";
import { useHeader } from "@/lib/hooks/useHeader";
import { HeaderAvatar } from "./Avatar";

export function Header() {
  const { user } = useHeader();
  return (
    <div className="header flex justify-between gap-14">
      <section className="header-middle flex gap-14">
        <h1 className="text-3xl font-semibold">
          <a href="/">GigHarmony</a>
        </h1>
        <div className="flex justify-evenly content-end gap-8">
          <Link href="/gigs">
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
        {user === null ? (
          <Link href="/">
            <Button variant="secondary">Sign up</Button>
          </Link>
        ) : (
          <>
            {" "}
            <HeaderAvatar />
          </>
        )}
        <ModeToggle />
      </section>
    </div>
  );
}
