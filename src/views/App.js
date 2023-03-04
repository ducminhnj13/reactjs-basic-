import logo from './logo.svg';
import './App.scss';
import MyComponents from './example/MyComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello tat ca cac nguoi anh em thien lanh
        </p>
        <MyComponents/>  
      </header>
    </div>
  );
}

export default App;
