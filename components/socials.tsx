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
    <div className="flex gap-4 flex-wrap">
      <Link
        href="https://github.com/ditinagrawal"
        className="p-2 border-1 border-neutral-400 rounded-lg hover:shadow-[8px_8px_var(--color-neutral-800)] transition bg-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandGithubFilled className="size-8 text-neutral-800" />
      </Link>
      <Link
        href="https://x.com/ditinagrawal"
        className="p-2 border-1 border-gray-400 rounded-lg hover:shadow-[8px_8px_var(--color-gray-600)] transition bg-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandXFilled className="size-8 text-gray-600" />
      </Link>
      <Link
        href="https://linkedin.com/in/ditinagrawal"
        className="p-2 border-1 border-blue-300 rounded-lg hover:shadow-[8px_8px_var(--color-blue-600)] transition bg-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandLinkedinFilled className="size-8 text-blue-600" />
      </Link>
      <Link
        href="mailto:ditin.agrawal05@gmail.com"
        className="p-2 border-1 border-neutral-400 rounded-lg hover:shadow-[8px_8px_var(--color-neutral-800)] transition bg-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconMailFilled className="size-8 text-neutral-800" />
      </Link>
      <Link
        href="https://youtube.com/@ditinagrawal"
        className="p-2 border-1 border-rose-300 rounded-lg hover:shadow-[8px_8px_var(--color-rose-600)] transition bg-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandYoutubeFilled className="size-8 text-rose-600" />
      </Link>
    </div>
  );
};
