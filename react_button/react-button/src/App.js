import './App.css';

function App() {
  const clickHandler = () => {
    console.log('Changed!')
  };

  return (
    <div className="button">
      <button onClick={clickHandler}>Change Me!</button>
    </div>
  );
}

export default App;
