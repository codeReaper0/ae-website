import {motion} from "framer-motion";
import {ArrowRight, Sparkles} from "lucide-react";
import {Link} from "react-router-dom";

const family = [
  {name: "Lolade", age: "15", initial: "L", color: "bg-[#E9B44C]"},
  {name: "Dipo", age: "13", initial: "D", color: "bg-[#E85D04]"},
  {name: "Ife", age: "5", initial: "I", color: "bg-[#F5EBDD]"},
];

export default function AnimatedSeries() {
  return (
    <section className="relative overflow-hidden bg-[#F5EBDD] py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#0A1931]/[0.07]" />
      <div className="pointer-events-none absolute -right-8 -top-12 h-64 w-64 rounded-full border border-[#0A1931]/[0.07]" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#C8963E]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A1931]/60">
              Stories in motion
            </span>
          </div>
          <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0A1931] md:text-[54px]">
            African roots.
            <br />
            <em className="font-normal text-[#C8963E]">Big adventures.</em>
          </h2>
          <p className="mt-6 max-w-[600px] text-[15px] leading-[1.8] text-[#0A1931]/70">
            Meet the Ekundayos, an animated family series following siblings Lolade, Dipo, and little Ife as they reconnect with Nigeria. Through funny family moments and exciting discoveries, children can explore Yoruba language, Nigerian traditions, food, music, and the meaning of home.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Nigerian culture", "Yoruba traditions", "Family adventures"].map((tag) => (
              <span key={tag} className="rounded-full border border-[#0A1931]/10 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#0A1931]/65">
                {tag}
              </span>
            ))}
          </div>
          <Link
            to="/animated-series"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0A1931] px-6 py-4 text-[13px] font-bold text-white transition-colors hover:bg-[#C8963E]"
          >
            Discover the animation
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20, scale: 0.97}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.12}}
          className="relative overflow-hidden rounded-[32px] bg-[#0A1931] p-7 text-white shadow-[0_24px_60px_rgba(10,25,49,0.16)] md:p-10"
        >
          <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute -right-1 -top-3 h-32 w-32 rounded-full border border-white/10" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5">
              <Sparkles size={13} className="text-[#E9B44C]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">The Ekundayos</span>
            </div>
            <p className="mt-7 max-w-[390px] font-display text-[27px] font-semibold leading-[1.12] md:text-[32px]">
              Three siblings. One unforgettable journey back to their roots.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-3">
              {family.map((person) => (
                <div key={person.name} className="rounded-[18px] border border-white/10 bg-white/[0.06] p-3 text-center md:p-4">
                  <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${person.color} font-display text-[22px] font-bold text-[#0A1931]`}>
                    {person.initial}
                  </div>
                  <div className="mt-3 text-[12px] font-bold">{person.name}</div>
                  <div className="mt-0.5 text-[10px] text-white/45">Age {person.age}</div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">
              <span className="h-px w-8 bg-[#E9B44C]" /> Culture comes alive through stories
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
