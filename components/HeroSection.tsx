export function HeroSection() {
  return (
    <section className="bg-[#f7f6f3]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:gap-16 lg:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              We make Digital Employees.
            </h1>
            <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
              We help companies use AI to do the boring jobs so their team can focus on the interesting stuff that moves the ball forward.
            </p>
          </div>
          <div className="md:flex md:flex-col md:items-end md:self-start">
            <a
              href="mailto:hello@digitalpeople.co"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 px-5 py-2 text-sm font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-900 hover:text-[#f7f6f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
