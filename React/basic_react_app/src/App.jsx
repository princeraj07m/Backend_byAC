import './App.css'
import Title from './Title.jsx'
import About from './About.jsx'

let name = "app"; 

function App() {
  return (
  <div>
    <Title/>
    <p>This is {name} component {1*1}</p>
    <About/>
  </div>
  );
}

export default App;
