import React, { useState } from 'react';
import './App.css';
import reactData from './data/data.json';
import StudyInfo from './components/StudyInfo';
import StudyList from './components/StudyList';

function App() {
  const firstData = reactData[0];
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState('all');

  const [keyword, setKeyword] = useState('');

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const filteredItems = reactData.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesKeyword = item.title.toLowerCase().includes(keyword.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <p>전체 학습 항목 수 : {reactData.length}개</p>
      <hr />

      <h2>첫 번째 데이터 출력</h2>
      <StudyInfo title={firstData.title} desc={firstData.desc} category={firstData.category} />
      <hr />

      <h2>카테고리 필터</h2>
      <div>
        <button onClick={() => setCategory('all')}>전체</button>
        <button onClick={() => setCategory('concept')}>concept</button>
        <button onClick={() => setCategory('library')}>library</button>
        <button onClick={() => setCategory('hook')}>hook</button>
      </div>
      <hr />

      <h2>검색</h2>
      <input type="text" placeholder="제목 검색" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <hr />

      <h2>학습 목록</h2>
      <StudyList items={filteredItems} selectedId={selectedId} onSelect={handleSelect} />
    </>
  );
}

export default App;
