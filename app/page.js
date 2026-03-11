import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Private AI Models for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Enterprise Workflows
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">
              Deploy secure fine-tuned AI models with predictable costs and full control over your data.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/finetune"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:scale-105"
              >
                Start Fine-Tuning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Enterprise-Grade AI Infrastructure
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Everything you need to deploy production-ready AI models
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl transition-all hover:shadow-2xl hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20">
                    <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">Private Model Deployment</h3>
                  <p className="mt-2 text-zinc-400">
                    Deploy fine-tuned models in isolated environments for enterprise security.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl transition-all hover:shadow-2xl hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/20">
                    <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">Predictable Pricing</h3>
                  <p className="mt-2 text-zinc-400">
                    Infrastructure-based pricing instead of unpredictable token billing.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl transition-all hover:shadow-2xl hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-600/20">
                    <svg className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">Built-in Guardrails</h3>
                  <p className="mt-2 text-zinc-400">
                    PII filtering, schema validation, and safety checks for production AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple Four-Step Process
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              From data to deployment in minutes
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-xl font-bold text-white shadow-lg">
                  1
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Upload Data</h3>
                <p className="mt-2 text-sm text-zinc-400">Upload your training dataset</p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-purple-500 text-xl font-bold text-white shadow-lg">
                  2
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Configure Model</h3>
                <p className="mt-2 text-sm text-zinc-400">Select base model and parameters</p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-pink-500 text-xl font-bold text-white shadow-lg">
                  3
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Fine Tune</h3>
                <p className="mt-2 text-sm text-zinc-400">Automated training process</p>
              </div>

              {/* Step 4 */}
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-500 text-xl font-bold text-white shadow-lg">
                  4
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Deploy API</h3>
                <p className="mt-2 text-sm text-zinc-400">Get your private endpoint</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-white">ModelForge</p>
              <p className="mt-1 text-sm text-zinc-400">Enterprise AI Infrastructure</p>
            </div>
            <div className="flex gap-6 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
