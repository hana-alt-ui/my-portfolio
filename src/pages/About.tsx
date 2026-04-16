import { motion } from "motion/react";

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] h-full">
      {/* Content Section */}
      <div className="p-10 overflow-y-auto scrollbar-hide">
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-sans font-black tracking-tighter mb-12 text-accent"
          >
            Shiori <br /> Kanamori
          </motion.h2>

          <div className="aspect-[16/9] bg-white rounded-[40px] overflow-hidden mb-16 shadow-xl">
            <img 
              src="https://picsum.photos/seed/artist-studio/1200/675" 
              alt="Artist Studio" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Biography</h4>
              <p className="text-lg font-light leading-relaxed text-ink/80">
                2002年生まれ。現在は美術大学の4年生として、油彩画を中心に制作活動を行っています。
                作品を通じて、目に見える世界の背後にある静寂や、時間の経過とともに変化する光の質感を追求しています。
              </p>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Philosophy</h4>
              <p className="text-lg font-light leading-relaxed text-ink/80">
                素材の持つ物理的な存在感と、そこから立ち上がる精神的な空間の調和を模索し続けています。
                日常の何気ない風景が、絵画というフィルターを通すことで特別な意味を持つ瞬間を捉えたいと考えています。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <aside className="flex flex-col bg-white border-l border-border p-12 overflow-y-auto">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-4">Profile</span>
          <div className="aspect-square bg-white rounded-3xl overflow-hidden mb-6 shadow-md">
            <img 
              src="https://picsum.photos/seed/artist-portrait/600/600" 
              alt="Artist Portrait" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-serif italic mb-2">金森 栞</h3>
          <p className="text-sm text-muted">美術大学 絵画学科 4年</p>
        </div>

        <div className="space-y-12">
          <section>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6">Exhibitions</h4>
            <ul className="space-y-4 text-sm font-light text-ink/70">
              <li className="flex justify-between border-b border-border pb-2">
                <span>卒業制作展</span>
                <span className="font-mono text-[10px]">2024</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>境界の在処</span>
                <span className="font-mono text-[10px]">2023</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span>学内選抜展</span>
                <span className="font-mono text-[10px]">2022</span>
              </li>
            </ul>
          </section>

          <section>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6">Contact</h4>
            <div className="space-y-2 text-sm font-light text-ink/70">
              <p>info@shiori-kanamori.art</p>
              <p>@shiori_art_portfolio</p>
            </div>
          </section>
        </div>

        <button className="mt-auto w-full py-4 border border-ink text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-ink hover:text-white transition-all">
          Download CV
        </button>
      </aside>
    </div>
  );
}
