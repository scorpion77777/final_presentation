import "./styles.css";
import { motion, Variants } from "framer-motion";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (



    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["🤯 JS lib React.js", 340, 10],
  ["🤖 State Management Mob-x", 340, 10],
  ["⏳ Deployment Vercel", 340, 10],
  ["🦋 Anime.js", 20, 40],
  ["🩴 ReactFlipMove", 60, 90],
  ["🥂 ReactHotToast", 80, 120],
  ["⌨️ ReactKeyboard", 100, 140],
  ["🎨 Font-Oswald", 205, 245],
  ["👨‍💻 Backend-Node.js", 260, 290],
  ["👨‍🎨 CSS-lib Tailwind", 290, 320],
  ["Credits: 🚀 Chad & 🧠 Nick", 290, 320],
  ["Thank you!!! 🙏", 290, 320],
  ["Will miss you GUYS😔", 290, 320]

];

export default function App() {
  return food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
}
