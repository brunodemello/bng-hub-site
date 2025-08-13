import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timelineData';
import './TimelineCircular.css';

export const TimelineCircular = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemChange = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <motion.div 
      className="timeline-circular h-[90vh]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div 
        className="cards-container mt-0"
        style={{ 
          '--items': timelineData.length 
        } as React.CSSProperties}
      >
        <ul className="cards top-[12vw]">
          {timelineData.map((item, index) => (
            <li 
              key={item.id}
              style={{ 
                '--i': index 
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
              <h2>
                {item.title}
              </h2>
              <p className="ml-[2vw]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};