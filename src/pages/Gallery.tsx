import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { works } from "@/src/data/works";
import { cn } from "@/src/lib/utils";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] h-full">
      {/* Gallery Section */}
      <div className="p-10 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>

      {/* Intro Panel (Matches 'details' section in design) */}
      <aside className="hidden lg:flex flex-col bg-white border-l border-border p-12 overflow-y-auto">
        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-2">
            Portfolio 2026
          </span>
          <h1 className="text-5xl font-serif leading-[1.1] mb-6">
            Selected <br /> Works
          </h1>
        </div>

        <p className="text-[15px] leading-relaxed text-ink/80 mb-12 font-light">
          美術大学での4年間を通じて制作した作品群。
          日常の観察から生まれる静かな対話と、素材との格闘の記録です。
          各作品をクリックすると詳細が表示されます。
        </p>

        <div className="mt-auto grid grid-cols-2 gap-6 pt-8 border-t border-border">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-2">Artist</span>
            <div className="font-serif text-xl italic">Shiori Kanamori</div>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-2">Location</span>
            <div className="font-serif text-xl italic">Tokyo, JP</div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function WorkCard({ work, index }: { work: any; index: number; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-square bg-white rounded-3xl overflow-hidden border-2 border-transparent hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
    >
      <Link to={`/work/${work.id}`} className="block w-full h-full">
        <img
          src={work.imageUrl}
          alt={work.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out"
        />
        <div className="absolute top-5 right-5 text-[10px] font-bold tracking-wider bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-accent">
          #{index + 1}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
            <h3 className="text-sm font-bold tracking-tight text-ink">
              {work.title}
            </h3>
            <p className="text-[10px] text-accent font-medium mt-0.5">{work.category}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
