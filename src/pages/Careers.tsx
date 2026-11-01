import {motion} from "framer-motion";
import {ArrowDown, ArrowUpRight, BriefcaseBusiness, MapPin, Sparkles} from "lucide-react";

const roles = [
  {
    title: "Digital Product Manager",
    department: "Digital Product Management",
    description:
      "Drive product strategy and development by translating user needs and business goals into impactful digital solutions.",
    href: "https://www.mylingoatlas.com/careers/digital-product-manager#apply",
    icon: "01",
  },
  {
    title: "Human Resource Manager",
    department: "Human Resource Management",
    description:
      "Lead people strategy and HR operations, fostering a positive workplace culture while supporting talent development, employee engagement, and organisational growth.",
    href: "https://www.mylingoatlas.com/careers/human-resource-manager#apply",
    icon: "02",
  },
  {
    title: "Yoruba Language Tutor",
    department: "Language Education",
    description:
      "Help learners discover Yoruba language and culture through engaging, practical lessons in speaking, listening, pronunciation, and everyday expression.",
    href: "https://www.mylingoatlas.com/careers/yoruba-language-instructor#apply",
    icon: "03",
  },
  {
    title: "Twi Teaching Professional",
    department: "Language Education",
    description:
      "Help learners grow their Twi skills and connect with Ghanaian culture through lively, practical language lessons.",
    href: "https://www.mylingoatlas.com/careers/twi-teaching-professional#apply",
    icon: "04",
  },
  {
    title: "Urdu Teaching Professional",
    department: "Language Education",
    description:
      "Help learners build their Urdu skills and explore the rich cultural heritage of Urdu-speaking communities.",
    href: "https://www.mylingoatlas.com/careers/urdu-teaching-professional#apply",
    icon: "05",
  },
  {
    title: "Igbo Teaching Professional",
    department: "Language Education",
    description:
      "Help learners develop their Igbo and connect with Igbo culture and heritage through accessible, practical lessons.",
    href: "https://www.mylingoatlas.com/careers/igbo-teaching-professional#apply",
    icon: "06",
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#FFFBF5] pt-[80px]">
      <section className="relative min-h-[540px] overflow-hidden bg-[#0A1931] text-white">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.08]" />
          <div className="absolute -right-4 -top-20 h-[360px] w-[360px] rounded-full border border-white/[0.08]" />
          <div className="absolute right-[8%] top-[18%] flex h-24 w-24 rotate-12 items-center justify-center rounded-[28px] bg-[#E9B44C] font-display text-5xl text-[#0A1931] shadow-2xl shadow-black/20">
            文
          </div>
          <div className="absolute right-[25%] top-[57%] flex h-14 w-14 -rotate-12 items-center justify-center rounded-full border border-white/25 font-display text-2xl text-white/80">
            あ
          </div>
          <div className="absolute -bottom-32 left-[36%] h-72 w-72 rounded-full bg-[#E85D04]/20 blur-[100px]" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#162447]/40 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[540px] max-w-[1280px] items-center px-6 py-20 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            className="max-w-[740px]"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
              <Sparkles size={14} className="text-[#E9B44C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
                Careers at Afro European
              </span>
            </div>
            <h1 className="font-display text-[52px] font-bold leading-[0.92] tracking-[-0.04em] md:text-[76px] lg:text-[88px]">
              Make words
              <br />
              <span className="text-[#E9B44C]">mean more.</span>
            </h1>
            <p className="mt-7 max-w-[580px] text-[16px] leading-[1.75] text-white/65 md:text-[18px]">
              Language brings people closer. Join us in creating learning experiences that help people discover new languages, understand different cultures, and connect with the world.
            </p>
            <a
              href="#open-positions"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#E9B44C] px-6 py-4 text-[13px] font-bold text-[#0A1931] transition-all hover:bg-white"
            >
              Explore opportunities
              <ArrowDown size={16} />
            </a>
          </motion.div>
          <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 lg:flex">
            <span className="h-px w-10 bg-white/30" /> Words connect us
          </div>
        </div>
      </section>

      <section className="border-b border-[#0A1931]/10 bg-[#E9B44C]">
        <div className="mx-auto grid max-w-[1280px] gap-4 px-6 py-6 sm:grid-cols-3 lg:px-8">
          {[
            {title: "Purpose-led work", detail: "Help culture travel across generations."},
            {title: "A world of languages", detail: "Make learning feel human and alive."},
            {title: "Room to make an impact", detail: "Bring your ideas, care, and craft."},
          ].map((item, index) => (
            <div key={item.title} className="flex items-start gap-3 py-2">
              <span className="mt-0.5 font-display text-[15px] font-bold text-[#0A1931]/50">0{index + 1}</span>
              <div>
                <h2 className="font-display text-[17px] font-bold text-[#0A1931]">{item.title}</h2>
                <p className="mt-1 text-[12px] leading-relaxed text-[#0A1931]/70">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="open-positions" className="scroll-mt-24 py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <motion.div
              initial={{opacity: 0, y: 18}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-[#C8963E]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A1931]/55">Open positions</span>
              </div>
              <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0A1931] md:text-[56px]">
                Find your place
                <br />
                <em className="font-normal text-[#C8963E]">on the team.</em>
              </h2>
            </motion.div>
            <p className="max-w-[370px] text-[14px] leading-[1.7] text-[#0A1931]/60">
              Bring your perspective to a team helping people feel closer to language, culture, and one another.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roles.map((role, index) => (
              <motion.article
                key={role.title}
                initial={{opacity: 0, y: 22}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-40px"}}
                transition={{duration: 0.5, delay: (index % 3) * 0.08}}
                className="group flex min-h-[310px] flex-col rounded-[24px] border border-[#0A1931]/[0.08] bg-white p-7 shadow-[0_10px_36px_rgba(10,25,49,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9B44C]/70 hover:shadow-[0_18px_45px_rgba(10,25,49,0.09)] md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-[15px] font-bold text-[#C8963E]">{role.icon}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFBF5] text-[#0A1931] transition-colors group-hover:bg-[#E9B44C]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3 className="mt-7 font-display text-[23px] font-bold leading-tight text-[#0A1931]">{role.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#0A1931]/60">{role.description}</p>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#0A1931]/[0.08] pt-5 mt-6 text-[10px] font-bold uppercase tracking-[0.1em] text-[#0A1931]/50">
                  <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness size={13} /> Full-time</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> Onsite</span>
                  <span className="w-full text-[#0A1931]/65">{role.department}</span>
                </div>
                <a
                  href={role.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-[13px] font-bold text-[#0A1931] transition-colors hover:text-[#C8963E]"
                >
                  Apply for this role <ArrowUpRight size={15} />
                </a>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[24px] bg-[#0A1931] px-7 py-8 text-white md:flex-row md:items-center md:px-10">
            <div>
              <p className="font-display text-[22px] font-bold">Don’t see your role?</p>
              <p className="mt-1 text-[13px] text-white/60">We’re always interested in meeting people who care about language and culture.</p>
            </div>
            <a href="mailto:info@afro-european.com?subject=Careers%20enquiry" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[12px] font-bold transition-colors hover:border-[#E9B44C] hover:bg-[#E9B44C] hover:text-[#0A1931]">
              Introduce yourself <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
