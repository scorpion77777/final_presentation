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
  ["ð¤¯ JS lib React.js", 340, 10],
  ["ð¤ State Management Mob-x", 340, 10],
  ["â³ Deployment Vercel", 340, 10],
  ["ð¦ Anime.js", 20, 40],
  ["ð©´ ReactFlipMove", 60, 90],
  ["ð¥ ReactHotToast", 80, 120],
  ["â¨ï¸ ReactKeyboard", 100, 140],
  ["ð¨ Font-Oswald", 205, 245],
  ["ð¨âð» Backend-Node.js", 260, 290],
  ["ð¨âð¨ CSS-lib Tailwind", 290, 320],
  ["Credits: ð Chad & ð§  Nick", 290, 320],
  ["Thank you!!! ð", 290, 320],
  ["Will miss you GUYSð", 290, 320]

];

export default function App() {
  return food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
}
