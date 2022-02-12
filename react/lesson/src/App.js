import "./App.css";

function soma(a, b) {
  return a + b;
}

function testeJSX() {
  return (
    <div>
      <h2>Jonathan d L Ferreira - Introdução ao ReactJS</h2>
      <p className="teste-soma">Soma: {soma(10, 10)}</p>
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
