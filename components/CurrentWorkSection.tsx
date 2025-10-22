export function CurrentWorkSection() {
  return (
    <section className="bg-[#F7F6F2]">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-28">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-[32px] font-bold leading-tight text-[#0B1B34]">Your team right now</h2>
          <p className="text-base leading-relaxed text-[#333333]">
            {`9:47am: Mark manually updates 23 project statuses. Clicks through each one. Updates the percentage. Saves. Next. Repeat.`}
          </p>
          <p className="text-base leading-relaxed text-[#333333]">
            {`2:15pm: Customer email #47 today: "What's my order status?" Jennifer checks three systems. Types the same answer she typed yesterday.`}
          </p>
          <p className="text-base leading-relaxed text-[#333333]">
            {`4:58pm Friday: The weekly report panic. Eight people scrambling for numbers that live in eight different places.`}
          </p>
          <p className="text-base leading-relaxed text-[#333333]">
            {`They're not lazy. The system is broken.`}
          </p>
        </div>
      </div>
    </section>
  );
}
