import Header from "@/components/header";
import PlaygroundSection from "@/components/playground-section";
import prisma from "@/prisma";
import Image from "next/image";
import AItoolpng from "@/assets/ai-writing-tool.png";

export default async function Home() {
  const templateOptions = await prisma.template.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <main className="container fle min-h-screen mx-auto px-5 lg:px-5 scroll-smooth">
      <Header />
      <div className="text-center mt-[4vh]">
        <h1 className="text-neutral-100 text-center mb-5">
          <div className="flex justify-center items-center self-center mt-auto mb-10">
            <Image
              src={AItoolpng}
              alt=""
              height="250"
              width="250"
              className="rounded-2xl animate-bounce"
            />
          </div>
          <span className="text-lime-50 text-xl text-semibold tracking-wide">Enhance your writing with our AI-powered assistant, ensuring clarity, precision, and creativity in every word.</span>
        </h1>
      </div>

      <PlaygroundSection templateOptions={templateOptions} />

      <div className="absolute image-hero-dots w-full h-full top-0 left-0 -z-10 opacity-30" />
      <div className="liner-gradient-blue hidden xl:block absolute w-28 h-64 top-[5%] left-[30%] -z-10" />
      <div className="liner-gradient-blue absolute w-28 h-64 top-[15%] left-[66%] -z-10" />
    </main>
  );
}