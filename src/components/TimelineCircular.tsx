import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timelineData';
import './TimelineCircular.css';

export const TimelineCircular = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const totalItems = timelineData.length;

  const handleItemChange = (index: number) => {
    setSelectedIndex(index);
  };

  const isVisible = (index: number) => {
    const distance = Math.abs(index - selectedIndex);
    // Ajuste circular
    const circularDistance = Math.min(
      distance,
      totalItems - distance
    );
    return circularDistance <= 4;
  };

  const getZIndex = (index: number) => {
    const distance = Math.abs(index - selectedIndex);
    const circularDistance = Math.min(
      distance,
      totalItems - distance
    );
    // quanto mais perto do item selecionado, maior o z-index
    return 100 - circularDistance;
  };

  return (
    <motion.div 
      className="timeline-circular h-[74vh] md:h-[42vw] bg-[url(/timelineBG.png)] bg-cover bg-no-repeat bg-bottom"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div 
        className="cards-container mt-0"
        style={{ 
          '--items': totalItems 
        } as React.CSSProperties}
      >
        <ul className="cards w-full md:w-auto top-[42vw] md:top-[12vw]">
          {timelineData.map((item, index) => {
            const visible = isVisible(index);

            return (
              <li 
                key={item.id}
                style={{ 
                  '--i': index,
                  opacity: visible ? 1 : 0,
                  pointerEvents: visible ? 'auto' : 'none',
                  transition: 'opacity 0.3s',
                  zIndex: getZIndex(index),
                } as React.CSSProperties}
              >
                <input
                  type="radio"
                  id={`item-${index}`}
                  name="gallery-item"
                  checked={selectedIndex === index}
                  onChange={() => handleItemChange(index)}
                />
                <label htmlFor={`item-${index}`}>
                  {item.year}
                </label>
                <h2>{item.title}</h2>
                <p className="ml-[2vw]">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};
