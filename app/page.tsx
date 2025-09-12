import Link from "next/link";

import { DotPattern } from "@/components/dot-pattern";
import { Info } from "@/components/info";
import { Links } from "@/components/links";
import { Socials } from "@/components/socials";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <div className="relative h-screen flex flex-col items-center">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] -z-10"
        )}
      />
      <div className="py-12 px:8 space-y-8">
        <Info />
        <Socials />
        <div className="text-center">
          I&apos;m currently building{" "}
          <Link
            href="https://ping.ditin.in"
            className="font-bold underline underline-offset-4 ms-1 tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ping
          </Link>
        </div>
        <Links />
        <div className="text-center font-semibold">
          I&apos;m available for work
          <div className="flex items-center justify-center mt-2">
            <div className="size-4 bg-green-200 rounded-full flex items-center justify-center">
              <div className="size-2 bg-green-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
