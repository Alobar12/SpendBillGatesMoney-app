import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Money from './components/Money';
import ProducList from './components/ProducList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Money/>
      <ProducList/>
      <Cart/>
    </div>
  );
}

export default App;
