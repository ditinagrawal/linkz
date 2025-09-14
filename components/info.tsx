import Image from "next/image";

export const Info = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image
        src="/avatar.jpg"
        alt="Ditin Agrawal - Software Engineer Profile Picture"
        width={120}
        height={120}
        priority
        className="rounded-3xl shadow-[4px_4px_#000000] transition ease-in-out hover:shadow-[10px_10px_#000000]"
      />
      <div className="space-y-1 text-center">
        <h1 className="text-4xl font-bold text-neutral-950 drop-shadow text-shadow-neutral-800">
          Ditin Agrawal
        </h1>
        <p className="text-neutral-600">Software Engineer</p>
      </div>
    </div>
  );
};
