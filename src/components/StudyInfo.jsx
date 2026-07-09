import React from 'react';

function StudyInfo({ title, desc, category, isActive, onItemClick }) {
  return (
    <div onClick={onItemClick} className={isActive ? 'active' : ''} style={{ cursor: 'pointer' }}>
      <h2>{title}</h2>

      {isActive && <p style={{ fontWeight: 'bold', color: 'blue' }}>선택된 항목입니다.</p>}
      <p>{desc}</p>
      <span>분류: {category}</span>
      <hr />
    </div>
  );
}
export default StudyInfo;
