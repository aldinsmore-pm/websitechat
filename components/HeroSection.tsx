import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-[#F7F6F2]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <div className="max-w-2xl space-y-8 text-center lg:text-left">
          <h1 className="text-[48px] font-bold leading-tight text-[#0B1B34] sm:text-[56px]">
            We make Digital Employees
          </h1>
          <p className="text-xl font-normal leading-8 text-[#333333]">
            We take complex AI & automation and use it to do the boring tasks so your team can focus on the important stuff.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:items-center lg:justify-start">
            <a
              href="#chat"
              className="inline-flex items-center justify-center rounded-lg bg-[#0B1B34] px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-[#08152a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1B34]"
            >
              Email us
            </a>
          </div>
        </div>
        <div className="w-full max-w-xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
            <Image
              src="/docs/workflow.jpg"
              alt="Illustration of a digital employee orchestrating automated workflows"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
