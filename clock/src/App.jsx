import './App.css';
import Clock from './components/Clock';
function App() {
  return (
    <div className="App">
      <div className='clock-container'>
        <Clock timeZone={'America/Bogota'}/>
      </div>
    </div>
  );
}

export default App;
