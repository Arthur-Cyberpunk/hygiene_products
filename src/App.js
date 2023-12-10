import CategoryFilter from "./components/CategoryFilter";
import SearchFilter from "./components/SearchFilter";
import Title from "./components/Title";
import "./styles/globals.scss";

function App() {
  return (
    <>
      <Title></Title>
      <SearchFilter></SearchFilter>
      <CategoryFilter></CategoryFilter>
    </>
  );
}

export default App;
