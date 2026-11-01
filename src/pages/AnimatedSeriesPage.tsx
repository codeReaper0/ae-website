import {motion} from "framer-motion";
import {ArrowDown, ArrowUpRight, Play, Sparkles} from "lucide-react";

const episodes = [
  {
    id: "tD0rzTa2fnQ",
    title: "Meet the Ekundayos",
    label: "Meet the family",
    description:
      "Get to know Lolade, Dipo, and Ife before their journey across Nigeria begins. A first look at the family, their roots, and the adventures ahead.",
    status: "Series preview",
  },
  {
    id: "GdaK0T1fSOc",
    title: "What Did Grandma Give Ife?",
    label: "Episode 1 · Premieres November 5",
    description:
      "The Ekundayo siblings are spending Christmas in Nigeria, and Grandma has a special gift for little Ife. What could possibly happen next?",
    status: "Coming soon",
  },
];

const family = [
  {
    name: "Lolade",
    age: "15",
    role: "The clever, confident big sister who loves Yoruba and Nigerian style.",
  },
  {
    name: "Dipo",
    age: "13",
    role: "Tech-loving, energetic, and always ready for the next adventure.",
  },
  {
    name: "Ife",
    age: "5",
    role: "Curious, cheeky, and guaranteed to ask the question on everyone’s mind.",
  },
];

export default function AnimatedSeriesPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5] pt-[80px]">
      <section className="relative overflow-hidden bg-[#0A1931] text-white">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -right-24 -top-40 h-[580px] w-[580px] rounded-full border border-white/[0.08]" />
          <div className="absolute right-[-20px] top-[-100px] h-[420px] w-[420px] rounded-full border border-white/[0.08]" />
          <div className="absolute right-[13%] top-[18%] flex h-24 w-24 rotate-12 items-center justify-center rounded-[28px] bg-[#E9B44C] font-display text-5xl text-[#0A1931] shadow-xl shadow-black/20">
            文
          </div>
          <div className="absolute bottom-[-120px] left-[30%] h-72 w-72 rounded-full bg-[#E85D04]/20 blur-[100px]" />
        </div>
        <div className="relative mx-auto grid min-h-[500px] max-w-[1280px] items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_0.65fr] lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 22}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
              <Sparkles size={14} className="text-[#E9B44C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
                Afro European presents
              </span>
            </div>
            <h1 className="font-display text-[56px] font-bold leading-[0.9] tracking-[-0.04em] md:text-[78px]">
              The <span className="text-[#E9B44C]">Ekundayos.</span>
            </h1>
            <p className="mt-6 max-w-[590px] text-[16px] leading-[1.75] text-white/70 md:text-[18px]">
              An animated family adventure celebrating Nigerian culture, Yoruba
              traditions, and the joy of finding your roots. Come along with
              Lolade, Dipo, and little Ife.
            </p>
            <a
              href="#watch"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#E9B44C] px-6 py-4 text-[13px] font-bold text-[#0A1931] transition-colors hover:bg-white"
            >
              <Play size={15} fill="currentColor" /> Watch the videos{" "}
              <ArrowDown size={15} />
            </a>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.96, rotate: 2}}
            animate={{opacity: 1, scale: 1, rotate: 0}}
            transition={{duration: 0.8, delay: 0.15}}
            className="relative hidden aspect-[4/3] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#162447] via-[#172849] to-[#C8963E]/40 p-8 lg:flex"
          >
            <div className="absolute left-8 top-8 font-display text-[110px] leading-none text-white/[0.08]">
              家
            </div>
            <div className="absolute bottom-8 right-8 font-display text-[96px] leading-none text-[#E9B44C]/20">
              À
            </div>
            <div className="relative grid grid-cols-3 items-end gap-3">
              {[
                {glyph: "L", color: "bg-[#E9B44C]", height: "h-44"},
                {glyph: "D", color: "bg-[#E85D04]", height: "h-56"},
                {glyph: "I", color: "bg-[#F5EBDD]", height: "h-36"},
              ].map((person) => (
                <div
                  key={person.glyph}
                  className={`${person.height} flex w-24 items-center justify-center rounded-t-[48px] rounded-b-[28px] ${person.color} font-display text-5xl font-bold text-[#0A1931] shadow-xl`}
                >
                  {person.glyph}
                </div>
              ))}
            </div>
            <div className="absolute bottom-5 left-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              A family story · Rooted in Nigeria
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8963E]">
                Meet the family
              </div>
              <h2 className="font-display text-[34px] font-bold leading-tight text-[#0A1931] md:text-[42px]">
                Three siblings. One big adventure.
              </h2>
            </div>
            <p className="max-w-[390px] text-[13px] leading-[1.7] text-[#0A1931]/60">
              Discover Nigeria through the eyes of a family reconnecting with
              their culture, language, and one another.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {family.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{opacity: 0, y: 18}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.45, delay: index * 0.08}}
                className="rounded-[22px] border border-[#0A1931]/[0.07] bg-white p-6 shadow-[0_8px_30px_rgba(10,25,49,0.04)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${index === 1 ? "bg-[#0A1931] text-white" : "bg-[#E9B44C]/30 text-[#0A1931]"} font-display text-[20px] font-bold`}
                  >
                    {person.name[0]}
                  </div>
                  <div>
                    <h3 className="font-display text-[19px] font-bold text-[#0A1931]">
                      {person.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#0A1931]/45">
                      Age {person.age}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[13px] leading-[1.7] text-[#0A1931]/65">
                  {person.role}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="watch" className="scroll-mt-24 bg-[#F5EBDD] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A1931]/55">
                <span className="h-px w-8 bg-[#C8963E]" /> Watch on our platform
              </div>
              <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0A1931] md:text-[52px]">
                The adventure starts here.
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@HeartOfAfrica2025"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-bold text-[#0A1931] transition-colors hover:text-[#C8963E]"
            >
              More from HeartOfAfrica2025 <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {episodes.map((episode, index) => (
              <motion.article
                key={episode.id}
                initial={{opacity: 0, y: 22}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-40px"}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className="overflow-hidden rounded-[24px] border border-[#0A1931]/[0.08] bg-white shadow-[0_12px_40px_rgba(10,25,49,0.07)]"
              >
                <div className="relative aspect-video bg-[#0A1931]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${episode.id}`}
                    title={`${episode.title} — The Ekundayos animated series`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-[#E9B44C]/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0A1931]">
                      {episode.status}
                    </span>
                    <span className="text-[11px] font-semibold text-[#0A1931]/45">
                      {episode.label}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[24px] font-bold leading-tight text-[#0A1931] md:text-[27px]">
                    {episode.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#0A1931]/60">
                    {episode.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
