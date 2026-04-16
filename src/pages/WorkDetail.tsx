import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { works } from "@/src/data/works";
import { ArrowLeft } from "lucide-react";

export default function WorkDetail() {
  const { id } = useParams();
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-serif">Work not found</h2>
        <Link to="/" className="text-accent hover:underline">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] h-full">
      {/* Gallery Section (Background context) */}
      <div className="p-10 overflow-y-auto scrollbar-hide opacity-30 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-2 gap-8">
          {works.map((w, index) => (
            <div key={w.id} className="aspect-square bg-[#EEE] overflow-hidden">
              <img
                src={w.imageUrl}
                alt={w.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <aside className="flex flex-col bg-white/80 backdrop-blur-md border-l border-border p-12 overflow-y-auto">
        <Link 
          to="/"
          className="flex items-center gap-2 text-muted hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Gallery</span>
        </Link>

        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-2">
            Graduation Project {work.year}
          </span>
          <h1 className="text-4xl font-sans font-bold leading-[1.1] mb-6">
            {work.title}
          </h1>
          <div className="flex gap-4 text-xs text-muted font-medium uppercase tracking-wider">
            <span>{work.category}</span>
            <span>•</span>
            <span>F100 Size</span>
          </div>
        </div>

        <div className="mb-10 aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-lg">
          <img 
            src={work.imageUrl} 
            alt={work.title} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-[15px] leading-relaxed text-ink/80 mb-12 font-light">
          {work.description}
          <br /><br />
          {work.details}
        </p>

        <div className="mt-auto grid grid-cols-2 gap-6 pt-8 border-t border-border">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-2">Year</span>
            <div className="font-serif text-xl italic">{work.year}</div>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-2">Medium</span>
            <div className="font-serif text-xl italic">{work.category.split(' / ')[0]}</div>
          </div>
        </div>

        <button className="mt-10 w-full py-4 bg-ink text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-accent transition-colors">
          Inquire about work
        </button>
      </aside>
    </div>
  );
}
