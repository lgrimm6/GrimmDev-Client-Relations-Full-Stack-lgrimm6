import "./App.css";
import FormLogin from "./components/Forms/FormLogin";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <FormLogin></FormLogin>
      </main>
      <footer>Grimm Dev </footer>
    </div>
  );
}

export default App;
