// import logo from './logo.svg';
import './App.css';
 import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Note from "./components/Note";

function App() {
  return (
    <div>
      <Header/>
      <Note header="Header 1" content="Content 1" img="logo192.png"/>
      <Note header="Header 2" content="Content 2" img="logo192.png"/>
      <Note header="Header 3" content="Content 3" img="logo192.png"/>
      <Note header="Header 44" content="Content 3" img="logo192.png"/>
      <Footer/>
    </div>
  );
}

export default App;
