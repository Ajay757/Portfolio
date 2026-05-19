function BentoCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/10
        bg-white/[0.04]
        p-8
        shadow-xl shadow-black/20
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-500/20
        hover:bg-white/[0.06]
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default BentoCard