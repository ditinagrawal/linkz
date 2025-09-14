import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";

export const Links = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="https://portfolio.ditin.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-green-400 bg-green-200 px-4 py-2 text-green-900 shadow-[4px_4px_var(--color-green-800)] transition hover:border-1 hover:shadow-[8px_8px_var(--color-green-800)]">
          portfolio <IconArrowUpRight className="size-4" />
        </button>
      </Link>
      <Link
        href="https://docs.google.com/document/d/1R749yAfoSVe-3szgcmggzlKvj6oj-k1uxhGI84usCPs/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-purple-400 bg-purple-200 px-4 py-2 text-purple-900 shadow-[4px_4px_var(--color-purple-800)] transition hover:border-1 hover:shadow-[8px_8px_var(--color-purple-800)]">
          resume <IconArrowUpRight className="size-4" />
        </button>
      </Link>
      <Link
        href="https://github.com/ditinagrawal/linkz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-yellow-400 bg-yellow-200 px-4 py-2 text-yellow-900 shadow-[4px_4px_var(--color-yellow-800)] transition hover:border-1 hover:shadow-[8px_8px_var(--color-yellow-800)]">
          source code <IconArrowUpRight className="size-4" />
        </button>
      </Link>
    </div>
  );
};
