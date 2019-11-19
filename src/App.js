import React from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo"
class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'buy some food'},
      {id: 2, content: "play guitar"}
    ]
  }
  deleteTodo = (id)=>{
    let newList = this.state.todos.filter((todo)=>{
      return todo.id !== id;
    });
    this.setState({
      todos: newList
    })
  }

  addTodo = (todo)=>{
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  
  render(){
    return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo} />
    </div>
  );}
}

export default App;
