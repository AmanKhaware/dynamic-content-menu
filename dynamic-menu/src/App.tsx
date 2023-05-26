import "./App.css";
import Content from "./component/content";
import Footer from "./component/footer";
import Header from "./component/header";
import Menu from "./component/menu";

function App() {
  return (
    <div>
      <Header />
      <span>
        <Menu />
        <Content />
      </span>
      <Footer />
    </div>
  );
}

export default App;
