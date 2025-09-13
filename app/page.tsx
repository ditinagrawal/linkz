import Link from "next/link";

import { DotPattern } from "@/components/dot-pattern";
import { Info } from "@/components/info";
import { Links } from "@/components/links";
import { Socials } from "@/components/socials";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <main className="relative h-screen flex flex-col items-center">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-10"
        )}
      />
      <div className="py-12 px:8 space-y-8">
        <Info />
        <Socials />
        <section className="text-center">
          <p>
            I&apos;m currently building{" "}
            <Link
              href="https://ping.ditin.in"
              className="font-bold underline underline-offset-4 ms-1 tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Ping project - currently building"
            >
              Ping
            </Link>
          </p>
        </section>
        <Links />
        <section className="text-center font-semibold">
          <p>I&apos;m available for work</p>
          <div
            className="flex items-center justify-center mt-2"
            role="status"
            aria-label="Available for work status"
          >
            <div className="size-4 bg-green-200 rounded-full flex items-center justify-center">
              <div className="size-2 bg-green-500 rounded-full" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
