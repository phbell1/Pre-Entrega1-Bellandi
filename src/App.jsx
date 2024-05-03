
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <>
      <div class="contMenu">
        <h1>Vivero Green House</h1>
        <nav class="navMenu">
          <ul>
            <NavBar/>
          </ul>
        </nav>
      </div>
      
      <ItemListContainer/>

    </>
  );
}

export default App
