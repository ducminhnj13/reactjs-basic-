import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello tat ca cac nguoi anh em thien lanh
        </p>
        <MyComponent/>  
      </header>
    </div>
  );
}

export default App;
