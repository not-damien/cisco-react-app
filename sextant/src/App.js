
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Banner />
      <Exhibit title={'IP Adress'}/>
    </div>
    
  );
}

export function Banner(){
  return (
  <><h1>Sextant</h1><hr></hr></>
  );
}

export function Exhibit({title}){
  return (
  <div class="exhibit">
  <h3>{title}</h3>
  <hr></hr>
  <p>123.345.123</p>
  </div>
  );
}

export default App;
