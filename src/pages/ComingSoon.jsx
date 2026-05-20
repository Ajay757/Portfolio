import { useSearchParams, Link } from "react-router-dom"

function ComingSoon() {
  const [searchParams] = useSearchParams()

  const project =
    searchParams.get("project") || "Case Study"

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          SEG3125 Design Project
        </p>

        <h1 className="text-5xl font-bold">
          {project}
        </h1>

        <p className="mt-5 text-lg text-white/60">
          This case study is currently being designed and
          will be added soon.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ComingSoon