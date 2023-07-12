import { Nav } from './components/Nav';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <main>
        <About/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
