import logo from "./logo.svg";
import "./App.scss";
import MyComponents from './example/MyComponents';
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./example/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ListUser from "./Users/ListUser";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />

        
        
        
        <Switch>
          <Route path="/" exact>
          <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponents/>  
          </Route>
          <Route path='/user'>
            <ListUser/>
          </Route>
        </Switch>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
