import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: "todo1",
        title: "an o nha",
      },
      {
        id: "todo2",
        title: "di choi",
      },
      {
        id: "todo3",
        title: "hoc",
      },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
    toast.success("Wow so easy!");
  };


  render() {
    let { listTodos } = this.state;

    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child">
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
