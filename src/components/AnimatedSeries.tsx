import {motion} from "framer-motion";
import {ArrowUpRight, Clapperboard, Play} from "lucide-react";
import {Link} from "react-router-dom";

const videos = [
  {
    title: "What Did Grandma Give Ife?",
    subtitle: "Episode one · Premieres November 5",
    videoId: "GdaK0T1fSOc",
    description:
      "The Ekundayo siblings arrive in Nigeria for Christmas and discover that Grandma has a very special surprise for Ife.",
    badge: "Coming soon",
  },
  {
    title: "Meet the Ekundayos",
    subtitle: "A first look at the family",
    videoId: "tD0rzTa2fnQ",
    description:
      "Meet Lolade, Dipo, and little Ife as they set off to explore Nigerian culture, language, food, and family life.",
    badge: "Series trailer",
  },
];

export default function AnimatedSeries() {
  return (
    <section className="relative overflow-hidden bg-[#F5EBDD] py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#0A1931]/[0.07]" />
      <div className="pointer-events-none absolute -right-8 -top-12 h-64 w-64 rounded-full border border-[#0A1931]/[0.07]" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.55}}
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#C8963E]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A1931]/60">
                Stories in motion
              </span>
            </div>
            <h2 className="font-display text-[40px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0A1931] md:text-[54px]">
              Meet the
              <br />
              <em className="font-normal text-[#C8963E]">Ekundayos.</em>
            </h2>
          </motion.div>
          <div className="max-w-[540px] lg:justify-self-end">
            <p className="text-[15px] leading-[1.75] text-[#0A1931]/70">
              Join Lolade, Dipo, and little Ife on an animated family adventure celebrating Nigerian culture, Yoruba traditions, and the joy of finding your roots.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/animated-series"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A1931] px-5 py-3 text-[12px] font-bold text-white transition-colors hover:bg-[#C8963E]"
              >
                Watch the series <Play size={13} fill="currentColor" />
              </Link>
              <a
                href="https://www.youtube.com/@HeartOfAfrica2025"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-bold text-[#0A1931] transition-colors hover:text-[#C8963E]"
              >
                Follow HeartOfAfrica2025 <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          {videos.map((video, index) => (
            <motion.article
              key={video.videoId}
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-40px"}}
              transition={{duration: 0.55, delay: index * 0.1}}
              className="overflow-hidden rounded-[24px] border border-[#0A1931]/[0.08] bg-white shadow-[0_12px_40px_rgba(10,25,49,0.07)]"
            >
              <div className="relative aspect-video bg-[#0A1931]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                  title={`${video.title} — The Ekundayos animated series`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9B44C]/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0A1931]">
                    {index === 0 ? <Clapperboard size={13} /> : <Play size={12} />}
                    {video.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-[#0A1931]/45">{video.subtitle}</span>
                </div>
                <h3 className="mt-4 font-display text-[24px] font-bold leading-tight text-[#0A1931] md:text-[27px]">
                  {video.title}
                </h3>
                <p className="mt-2 max-w-[540px] text-[13px] leading-[1.7] text-[#0A1931]/60">
                  {video.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
