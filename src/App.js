import logo from './logo.svg';
import Header from './pages/Header';
import Restaurant from './components/Restaurant/Restaurant';
import Restaurants from './pages/Restaurants';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Restaurants/>
      {/* <Restaurants></Restaurants> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
