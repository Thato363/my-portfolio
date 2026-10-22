export default function Contact() {
  return (
    <div className="flex flex-col flex-1">
      <section className="px-4 py-16 sm:py-24 max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Available for freelance work and full-time frontend / full-stack
            roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-6 rounded-xl p-8 border border-slate-200 bg-slate-50">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={5}
                placeholder="What would you like to talk about?"
                className="border border-slate-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send message
            </button>
          </form>

          <div className="space-y-8">
            <div className="rounded-xl p-8 border border-slate-200 bg-slate-50">
              <h2 className="text-2xl font-bold mb-4">Let's connect</h2>
              <p className="text-slate-600 mb-6">
                Feel free to reach out by email or find me on LinkedIn and
                GitHub.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Email",
                    value: "thato@example.com",
                    hint: "thato@example.com",
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin.com/in/thatothobane",
                    hint: "@thatothobane",
                  },
                  {
                    label: "GitHub",
                    value: "github.com/Thato363",
                    hint: "@Thato363",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded border border-slate-300 bg-white text-slate-900 text-xs font-mono flex items-center justify-center">
                      [{item.label[0]}]
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        {item.value}
                      </div>
                      <div className="text-sm text-slate-500">{item.hint}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-96 w-full rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-slate-400 text-sm">
              [Map / location placeholder]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}