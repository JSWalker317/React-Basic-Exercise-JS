import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">  
            <Navbar/>
            <Home bootcamp= { 'Rookies'}/>
    
    </div>
  );
}

export default App;
