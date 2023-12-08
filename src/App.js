import Filter from "./components/Filter";
import Search from "./components/Search";
import Title from "./components/Title";
import produtosMock from "./products (1).json";
import "./styles/globals.scss";

function App() {
  console.log(produtosMock);

  return (
    <>
      <Title></Title>
      <Search></Search>
      <Filter></Filter>
    </>
  );
}

export default App;
