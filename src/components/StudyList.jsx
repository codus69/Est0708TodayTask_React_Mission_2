import React from 'react';
import StudyInfo from './StudyInfo';

function StudyList({ items }) {
  return (
    <div>
      <h2>학습 목록</h2>

      {items.map((item) => (
        <StudyInfo key={item.id} title={`${item.id}. ${item.title}`} desc={item.desc} category={item.category} />
      ))}
    </div>
  );
}
export default StudyList;
