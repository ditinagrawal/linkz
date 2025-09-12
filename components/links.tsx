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
        <button className="bg-green-200 text-green-900 px-4 py-2 rounded-lg hover:shadow-[8px_8px_var(--color-green-800)] transition w-full hover:border-1 border-green-400 shadow-[4px_4px_var(--color-green-800)] cursor-pointer flex items-center justify-center gap-2">
          portfolio <IconArrowUpRight className="size-4" />
        </button>
      </Link>
      <Link
        href="https://docs.google.com/document/d/1R749yAfoSVe-3szgcmggzlKvj6oj-k1uxhGI84usCPs/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-purple-200 text-purple-900 px-4 py-2 rounded-lg hover:shadow-[8px_8px_var(--color-purple-800)] transition w-full hover:border-1 border-purple-400 shadow-[4px_4px_var(--color-purple-800)] cursor-pointer flex items-center justify-center gap-2">
          resume <IconArrowUpRight className="size-4" />
        </button>
      </Link>
      <Link
        href="https://github.com/ditinagrawal/linkz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-lg hover:shadow-[8px_8px_var(--color-yellow-800)] transition w-full hover:border-1 border-yellow-400 shadow-[4px_4px_var(--color-yellow-800)] cursor-pointer flex items-center justify-center gap-2">
          source code <IconArrowUpRight className="size-4" />
        </button>
      </Link>
    </div>
  );
};
