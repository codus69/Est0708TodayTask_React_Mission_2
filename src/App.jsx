import './App.css';
import reactData from './data/data.json';

function App() {
  console.log('불러온 데이터:', reactData);

  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <hr />
      <p>전체 학습 항목 수 : {reactData.length}개</p>
    </>
  );
}

export default App;
