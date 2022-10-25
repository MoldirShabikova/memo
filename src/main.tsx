import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryCard } from "./types";
import { CardGrid } from "./components/CardGrid";

function Main() {
  const shuffle = <T,>(arr: T[]) => arr.sort(() => Math.random() - 0.5);

  const genId = () => Math.random().toString();

  const memoryTypes = [
    "island",
    "mountains",
    "plains",
    "desert",
    "swamp",
    "space",
  ];

  const memoryCards: MemoryCard[] = shuffle(
    memoryTypes.flatMap((type) => [
      { type, flipped: false, id: genId() },
      { type, flipped: false, id: genId() },
    ])
  );
  return <CardGrid memoryCards={memoryCards} />;
}

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(<Main />);
