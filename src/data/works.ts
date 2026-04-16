import bookRackTolk01 from "@/src/assets/book-rack-tolk-01.png";

export interface Work {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  imageUrl: string;
  details?: string;
}

export const works: Work[] = [
  {
    id: "1",
    title: "Book Rack Tolk",
    year: "2024",
    category: "アプリケーションデザイン / グループワーク",
    description: "本を通して人と繋がるコミュニティアプリの提案。",
    imageUrl: bookRackTolk01,
    details: "グループワークで制作したアプリケーションデザインです。本好きな人たちが、読書を通じて自然に繋がれるコミュニティアプリ「Book Rack Tolk」を考案しました。読書好きの友達が欲しいけれど、一歩踏み出す勇気が出ないという方に向けて、共通の趣味である『本』を介したコミュニケーションの形をデザインしました。"
  },
  {
    id: "2",
    title: "記憶の断片",
    year: "2023",
    category: "ミクストメディア",
    description: "過去の記憶を再構成し、新しい物語を紡ぎ出す試み。",
    imageUrl: "https://picsum.photos/seed/art2/1200/800",
    details: "古い写真や手紙、拾い集めたオブジェを組み合わせたインスタレーション作品です。見る人の記憶と共鳴し、失われた時間を想起させることを意図しています。"
  },
  {
    id: "3",
    title: "共鳴する呼吸",
    year: "2024",
    category: "彫刻 / 石膏",
    description: "生命の根源的なリズムを形にした彫刻作品。",
    imageUrl: "https://picsum.photos/seed/art3/1200/800",
    details: "有機的なフォルムと滑らかな質感が特徴です。呼吸という目に見えない現象を、物質としての重みを持ちながらも軽やかな印象を与える造形へと昇華させました。"
  },
  {
    id: "4",
    title: "都市の残像",
    year: "2023",
    category: "写真",
    description: "移ろいゆく都市の風景を、長時間露光で捉えたシリーズ。",
    imageUrl: "https://picsum.photos/seed/art4/1200/800",
    details: "夜の新宿を舞台に、人々の動きや車の光が織りなす抽象的な軌跡を記録しました。実体としての都市が消え去り、エネルギーの流れだけが残る瞬間を表現しています。"
  },
  {
    id: "5",
    title: "内なる庭",
    year: "2024",
    category: "日本画",
    description: "伝統的な技法を用いながら、現代的な心象風景を描く。",
    imageUrl: "https://picsum.photos/seed/art5/1200/800",
    details: "岩絵具の独特な発色と質感を活かし、自身の内面にある静かな空間を「庭」として描きました。伝統と現代の感性が交差する地点を模索しています。"
  },
  {
    id: "6",
    title: "浮遊する思考",
    year: "2022",
    category: "デジタルアート",
    description: "アルゴリズムによって生成される、絶え間なく変化するビジュアル。",
    imageUrl: "https://picsum.photos/seed/art6/1200/800",
    details: "プログラミングを用いて、鑑賞者の動きに反応して形態を変えるインタラクティブな作品です。デジタル空間における身体性と意識の在り方を問うています。"
  }
];
