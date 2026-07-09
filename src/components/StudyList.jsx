import React from 'react';
import StudyInfo from './StudyInfo';

function StudyList({ items, selectedId, onSelect }) {
  return (
    <div>
      <h2>학습 목록</h2>

      {items.map((item) => {
        const isActive = item.id === selectedId;

        return (
          <StudyInfo
            key={item.id}
            title={`${item.id}. ${item.title}`}
            desc={item.desc}
            category={item.category}
            isActive={isActive}
            onItemClick={() => onSelect(item.id)}
          />
        );
      })}
    </div>
  );
}
export default StudyList;
