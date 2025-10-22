export function CaseStudySection() {
  return (
    <section className="bg-[#F7F6F2]">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-28">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-[32px] font-bold leading-tight text-[#0B1B34]">
            Sarah from Accounting spent 3 hours every Monday
          </h2>
          <p className="text-base leading-relaxed text-[#333333]">
            Cross-checking invoices against purchase orders. One by one.
          </p>
          <p className="text-base leading-relaxed text-[#333333]">
            {`156 invoices per month. 312 manual verifications. 47 emails asking "is this right?"`}
          </p>
          <p className="text-base leading-relaxed text-[#333333]">Now? 12 minutes. Total.</p>
        </div>
      </div>
    </section>
  );
}
