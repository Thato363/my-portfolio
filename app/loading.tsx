export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className="mx-auto w-full max-w-[74rem] animate-pulse px-4 py-5 sm:px-6 sm:py-8 lg:px-[clamp(2rem,5vw,5rem)] lg:py-12"
    >
      <span className="sr-only">Loading portfolio...</span>

      <div aria-hidden="true">
        <div className="rounded-3xl border border-[#dfe9e5] bg-white p-6 sm:p-12 lg:p-16">
          <div className="h-3 w-56 rounded bg-[#dfe9e5]" />
          <div className="mt-6 h-20 max-w-sm rounded-xl bg-[#e7eeeb] sm:h-28" />
          <div className="mt-5 h-4 max-w-xl rounded bg-[#e7eeeb]" />
          <div className="mt-2 h-4 max-w-md rounded bg-[#e7eeeb]" />
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <div className="h-12 w-full rounded-xl bg-[#dce8e3] sm:w-40" />
            <div className="h-12 w-full rounded-xl bg-[#edf2ef] sm:w-36" />
          </div>
        </div>

        <section className="mt-10 lg:mt-14">
          <div className="h-7 w-52 rounded bg-[#dfe9e5]" />
          <div className="mt-3 h-4 max-w-sm rounded bg-[#e7eeeb]" />
          <div className="mt-5 grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(14rem,0.8fr)] sm:gap-5">
            <div className="min-h-52 rounded-2xl border border-[#e1e8e5] bg-white p-5 sm:p-7">
              <div className="h-4 max-w-lg rounded bg-[#e7eeeb]" />
              <div className="mt-3 h-4 max-w-md rounded bg-[#e7eeeb]" />
              <div className="mt-7 h-4 max-w-lg rounded bg-[#e7eeeb]" />
              <div className="mt-3 h-4 max-w-sm rounded bg-[#e7eeeb]" />
            </div>
            <div className="min-h-52 rounded-2xl bg-[#e7eeeb]" />
          </div>
        </section>

        <section className="mt-10 lg:mt-14">
          <div className="h-7 w-40 rounded bg-[#dfe9e5]" />
          <div className="mt-3 h-4 max-w-sm rounded bg-[#e7eeeb]" />
          <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#e1e8e5] bg-white p-3"
              >
                <div className="mb-4 min-h-44 rounded-xl bg-[#e7eeeb]" />
                <div className="h-5 max-w-40 rounded bg-[#dfe9e5]" />
                <div className="mt-3 h-4 max-w-52 rounded bg-[#e7eeeb]" />
                <div className="mt-2 h-4 max-w-36 rounded bg-[#e7eeeb]" />
                <div className="mt-5 flex gap-2">
                  <div className="h-6 w-16 rounded-full bg-[#edf2ef]" />
                  <div className="h-6 w-20 rounded-full bg-[#edf2ef]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
