import React, { useState } from 'react';
import { MemoryCard } from "../types";
import { Card } from './Card';
import "./cards.css";


export interface CardGridProps {
    memoryCards: MemoryCard[];
}



//1. flip each card and check it's type
//2. flip second card and it's type will match with prev one, turn it true
//3. if it's not match card should flipped false back
//4. do the steps again and if it will match then turn both to flipped: true
//5 . update the score
//6.
export function CardGrid({ memoryCards }: CardGridProps) {
    const score = 0;
    const [turns, setTurns] = useState([])
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    
    const handleClick = (card) =>{
      choiceOne? setChoiceTwo(card) : setChoiceOne(card)
    }

    const resetTurn =()=>{
      setChoiceTwo(null)
      setChoiceOne(null)
      setTurns(0)
    }
    return (
      <>
        <div className="card-grid">
          {memoryCards.map((card) => {
            return (
              <Card
                key={card.id}
                flipped={card.flipped}
                type={card.type}
                onClick={(e)=>handleClick(e)}
              />
            );
          })}
        </div>
        <h1>Score: {score}</h1>
      </>
    );
  }
  