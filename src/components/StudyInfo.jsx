import React from 'react';

function StudyInfo({ title, desc, category }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>분류: {category}</span>
    </>
  );
}
export default StudyInfo;
