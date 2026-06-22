import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

import {
  FaCheese,
  FaHamburger,
  FaHotdog,
  FaLeaf,
  FaPepperHot
} from "react-icons/fa";

import {
  GiGarlic,
  GiSausage,
  GiTomato
} from "react-icons/gi";

type FloatingFoodIcon = {
  id: string;
  Icon: IconType;
  className: string;
  rotate: `${number}deg`;
  delay: `${number}s`;
};

type FoodIconStyle = CSSProperties & {
  "--food-rotate": string;
};

const FLOATING_FOOD_ICONS = [
  {
    id: "desktop-pepper",
    Icon: FaPepperHot,
    className:
      "hidden md:block left-4 top-[14dvh] lg:left-10 text-7xl text-red-500/20 md:text-red-500/25",
    rotate: "-14deg",
    delay: "0s"
  },
  {
    id: "desktop-garlic",
    Icon: GiGarlic,
    className:
      "hidden md:block right-4 top-[18dvh] lg:right-10 text-7xl text-white/20 md:text-white/25",
    rotate: "18deg",
    delay: "-1.4s"
  },
  {
    id: "desktop-tomato",
    Icon: GiTomato,
    className:
      "hidden md:block left-6 top-[42dvh] lg:left-16 text-8xl text-red-500/20 md:text-red-500/25",
    rotate: "10deg",
    delay: "-2.1s"
  },
  {
    id: "desktop-cheese",
    Icon: FaCheese,
    className:
      "hidden md:block right-6 top-[43dvh] lg:right-16 text-8xl text-accent/20 md:text-accent/25",
    rotate: "-12deg",
    delay: "-3s"
  },
  {
    id: "desktop-burger",
    Icon: FaHamburger,
    className:
      "hidden md:block left-4 bottom-[16dvh] lg:left-12 text-8xl text-amber-900/25 md:text-amber-900/30",
    rotate: "8deg",
    delay: "-4.2s"
  },
  {
    id: "desktop-leaf",
    Icon: FaLeaf,
    className:
      "hidden md:block right-10 bottom-[18dvh] lg:right-20 text-7xl text-lime-400/20 md:text-lime-400/25",
    rotate: "22deg",
    delay: "-2.7s"
  },
  {
    id: "desktop-sausage",
    Icon: GiSausage,
    className:
      "hidden lg:block left-[10vw] bottom-[4dvh] text-8xl text-rose-400/20 md:text-rose-400/25",
    rotate: "-20deg",
    delay: "-5s"
  },
  {
    id: "desktop-hotdog",
    Icon: FaHotdog,
    className:
      "hidden lg:block right-[10vw] bottom-[5dvh] text-8xl text-orange-900/25 md:text-orange-900/30",
    rotate: "15deg",
    delay: "-3.8s"
  },

  {
    id: "mobile-burger",
    Icon: FaHamburger,
    className:
      "md:hidden left-[-1rem] top-[16dvh] text-8xl text-amber-900/10",
    rotate: "-12deg",
    delay: "0s"
  },
  {
    id: "mobile-tomato",
    Icon: GiTomato,
    className:
      "md:hidden right-[-1.5rem] top-[34dvh] text-8xl text-red-500/10",
    rotate: "18deg",
    delay: "-1.8s"
  },
  {
    id: "mobile-cheese",
    Icon: FaCheese,
    className:
      "md:hidden left-[-1rem] top-[54dvh] text-8xl text-accent/10",
    rotate: "10deg",
    delay: "-3.2s"
  },
  {
    id: "mobile-garlic",
    Icon: GiGarlic,
    className:
      "md:hidden right-[-1rem] top-[72dvh] text-7xl text-white/10",
    rotate: "-18deg",
    delay: "-2.4s"
  },
  {
    id: "mobile-hotdog",
    Icon: FaHotdog,
    className:
      "md:hidden left-[20vw] bottom-[2dvh] text-8xl text-orange-900/10",
    rotate: "16deg",
    delay: "-4.5s"
  }
] as const satisfies readonly FloatingFoodIcon[];

export function FloatingFoodIcons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {FLOATING_FOOD_ICONS.map(({ id, Icon, className, rotate, delay }) => {
        const style: FoodIconStyle = {
          "--food-rotate": rotate,
          animationDelay: delay
        };

        return (
          <Icon
            key={id}
            fill="none"
            stroke="currentColor"
            strokeWidth={18}
            className={`
              food-outline-icon absolute motion-reduce:animate-none
              ${className}
            `}
            style={style}
          />
        );
      })}
    </div>
  );
}