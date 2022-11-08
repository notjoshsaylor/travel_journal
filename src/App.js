import logo from './logo.svg';
import './App.css';
import Nav from "./Nav"
import Data from "./Data"
import Card from "./Card"

function App() {
  const cards = Data.map(item => {
    return(
      <Card   
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
