import React from 'react';

function StudyInfo({ title, desc, category, isActive, onItemClick }) {
  return (
    <div onClick={onItemClick} className={`study-card ${isActive ? 'active' : ''}`}>
      <h2>{title}</h2>

      {isActive && <p className="selected-msg">선택된 항목입니다.</p>}

      <p>{desc}</p>
      <span className="category">분류: {category}</span>
    </div>
  );
}
export default StudyInfo;
