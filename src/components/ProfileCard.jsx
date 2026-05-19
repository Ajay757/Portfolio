import BentoCard from "./BentoCard"

function ProfileCard() {
  return (
    <BentoCard className="lg:col-span-3 min-h-[360px] flex flex-col justify-end">
      <div className="mb-6 flex h-56 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 to-purple-500/20 text-white/50">
        Profile Image
      </div>

      <h3 className="text-2xl font-bold">Ajay Suthaharan</h3>
      <p className="mt-2 text-white/60">Computer Science Student</p>
      <p className="mt-1 text-white/50">Ottawa, Canada</p>
    </BentoCard>
  )
}

export default ProfileCard