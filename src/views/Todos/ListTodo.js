import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    // let currentListTodo = this.state.listTodos;
    // currentListTodo.push(todo);

    this.setState({
      listTodos: [...this.state.listTodos, todo],
      // listTodos: currentListTodo
    });

    toast.success("Wow so easy!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete todo success!");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos]

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState ({
        listTodos: listTodosCopy,
        editTodo:{}
      })
      toast.success("Update todo success!");
      return;
    }
    // edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    // let listTodos = this.state.listTodos;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
      <p>ToDo App React</p>
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            onChange={(event) =>
                              this.handleOnChangeEditTodo(event)
                            }
                            value={editTodo.title}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      </>
    );
  }
}

export default Color(ListTodo);
