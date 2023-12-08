import Title from "./components/Title";
import produtosMock from "./products (1).json";
import "./styles/globals.scss";

function App() {
  console.log(produtosMock.data.nodes.length);

  return (
    <>
      <Title></Title>
    </>
  );
}

export default App;
