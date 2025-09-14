import Link from "next/link";

import { DotPattern } from "@/components/dot-pattern";
import { Info } from "@/components/info";
import { Links } from "@/components/links";
import { Socials } from "@/components/socials";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <main className="relative flex h-screen flex-col items-center">
      <DotPattern
        className={cn(
          "-z-10 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="px:8 space-y-8 py-12">
        <Info />
        <Socials />
        <section className="text-center">
          <p>
            I&apos;m currently building{" "}
            <Link
              href="https://ping.ditin.in"
              className="ms-1 font-bold tracking-wide underline underline-offset-4"
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
            className="mt-2 flex items-center justify-center"
            role="status"
            aria-label="Available for work status"
          >
            <div className="flex size-4 items-center justify-center rounded-full bg-green-200">
              <div className="size-2 rounded-full bg-green-500" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
