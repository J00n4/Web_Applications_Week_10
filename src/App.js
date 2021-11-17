import './App.css';
import MyContainer from "./components/MyContainer";
import {useState} from "react";

function App() {
  const [header, setHeader] = useState("Really epic list component");

  const [items, setItems] = useState([
      {id: "1", text: "This is an item"},
      {id: "2", text: "Also this"}
  ]);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer header={header} items={items} />
    </div>
  );
}

/*function MyContainer() {
  return(
    <div>

    </div>
  );
}*/

export default App;
