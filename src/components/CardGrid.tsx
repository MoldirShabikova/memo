import React from 'react';
import { MemoryCard } from "../types";
import { Card } from './Card';
import "./cards.css";


export interface CardGridProps {
    memoryCards: MemoryCard[];
}

export function CardGrid({ memoryCards }: CardGridProps) {
    const score = 0;
    
    return (
      <>
        <div className="card-grid">
          {memoryCards.map((card) => {
            return (
              <Card
                key={card.id}
                flipped={card.flipped}
                type={card.type}
              />
            );
          })}
        </div>
        <h1>Score: {score}</h1>
      </>
    );
  }
  