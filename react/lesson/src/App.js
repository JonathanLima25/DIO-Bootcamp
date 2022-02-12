import "./App.css";
import Button from "./components/Button";

function soma(a, b) {
  alert(a + b);
}

function testeJSX() {
  return (
    <div>
      <h2>Jonathan d L Ferreira - Introdução ao ReactJS</h2>
      <p className="teste-soma">Soma:</p>
      <Button onClick={() => soma(10,10)} name="Jhow" />
    </div>
  );
}

function App() {
  return (
    <div className="teste">
      <h1>Meu App React</h1>
      {testeJSX()}
    </div>
  );
}

export default App;
