import Image from "next/image";

interface Props {
  eyebrown?: string;
  title: string;
  subtitle?: string;
  paragraph?: string;
  image: string;
}

export default function Hero({
  eyebrown,
  title,
  subtitle,
  paragraph,
  image,
}: Props) {
  return (
    <section className="md:flex gap-3 items-center bg-secondary rounded-lg p-2">
      <div className="flex-1 px-3">
        <p className="text-lg font-normal text-gray-500 lg:text-xl">
          {eyebrown}
        </p>
        <h1 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {title}
        </h1>
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">
          {subtitle}
        </h2>
        <p className="text-md font-normal text-gray-500 lg:text-xl">
          {paragraph}
        </p>
      </div>
      <div className="flex-1">
        <Image
          src={image}
          width={1080}
          height={720}
          alt={title}
          className="h-auto max-w-lg transition-all duration-300 rounded-lg filter grayscale hover:grayscale-0 ms-auto"
        />
      </div>
    </section>
  );
}
