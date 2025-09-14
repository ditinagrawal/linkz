import Link from "next/link";

import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconBrandYoutubeFilled,
  IconMailFilled,
} from "@tabler/icons-react";

export const Socials = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="https://github.com/ditinagrawal"
        className="rounded-lg border-1 border-neutral-400 bg-white p-2 transition hover:shadow-[8px_8px_var(--color-neutral-800)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandGithubFilled className="size-8 text-neutral-800" />
      </Link>
      <Link
        href="https://x.com/ditinagrawal"
        className="rounded-lg border-1 border-gray-400 bg-white p-2 transition hover:shadow-[8px_8px_var(--color-gray-600)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandXFilled className="size-8 text-gray-600" />
      </Link>
      <Link
        href="https://linkedin.com/in/ditinagrawal"
        className="rounded-lg border-1 border-blue-300 bg-white p-2 transition hover:shadow-[8px_8px_var(--color-blue-600)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandLinkedinFilled className="size-8 text-blue-600" />
      </Link>
      <Link
        href="mailto:ditin.agrawal05@gmail.com"
        className="rounded-lg border-1 border-neutral-400 bg-white p-2 transition hover:shadow-[8px_8px_var(--color-neutral-800)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconMailFilled className="size-8 text-neutral-800" />
      </Link>
      <Link
        href="https://youtube.com/@ditinagrawal"
        className="rounded-lg border-1 border-rose-300 bg-white p-2 transition hover:shadow-[8px_8px_var(--color-rose-600)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandYoutubeFilled className="size-8 text-rose-600" />
      </Link>
    </div>
  );
};
