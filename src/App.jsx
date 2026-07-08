import './App.css';
import reactData from './data/data.json';
import StudyInfo from './components/StudyInfo';

function App() {
  const firstData = reactData[0];

  return (
    <>
      <h1>React Basic Review Mission 2</h1>
      <hr />
      <p>전체 학습 항목 수 : {reactData.length}개</p>
      <StudyInfo title={firstData.title} desc={firstData.desc} category={firstData.category} />
    </>
  );
}

export default App;
