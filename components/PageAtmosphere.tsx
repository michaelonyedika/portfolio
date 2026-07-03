import Particles from "./Particles";

export default function PageAtmosphere() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="absolute top-0 -right-40 h-[600px] w-[600px] rounded-full bg-heroAccent/10 blur-[160px]" />

      <div className="absolute top-[900px] -left-40 h-[600px] w-[600px] rounded-full bg-fuchsia-700/10 blur-[180px]" />

      <div className="absolute bottom-0 -right-40 h-[600px] w-[600px] rounded-full bg-heroAccent/10 blur-[160px]" />

      <Particles count={24} />
    </div>
  );
}
