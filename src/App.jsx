import Data from "./Data.json";
console.log(Data);
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Carousel Data={Data} />
    </div>
  );
}

export default App;
