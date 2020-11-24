// Imports
// Component Imports
import { Header } from "./components/Header";
import { Section01 } from './components/Section01';
import { Section02 } from './components/Section02';
import { Section03 } from './components/Section03';
import { Section04 } from './components/Section04';
import { Footer1 } from './components/Footer1';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <div className="content-wrap">
        <Header/>
        <Section01/>
        <Section02/>
        <Section03/>
        <Section04/>
      </div>
    <Footer1/>
    </div>
    
    
  );
}

export default App;