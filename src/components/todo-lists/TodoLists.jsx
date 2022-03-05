import React from 'react';
import Todo from '../todo/Todo.jsx';


class TodoLists extends React.Component {

  render() {
    const arr = this.props.todos.map( (todo) => {
      return <Todo 
        key={todo.id}
        id={todo.id}
        text={todo.title}
        status={todo.status}
        onDelete={this.props.onDelete}
        onCheck={this.props.onCheck}
        onEdit={this.props.onEdit}
      />
    })
    // [ 
    //   <Todo text="Buy suger" />,
    //   <Todo text="Buy salt 1kg" />,
    // ]

    return (
      <div className='todo_wrapper'>
        {arr.length ? arr : <h3 className='text-center mt-3 mb-3'>PLease add Todo</h3>}
      </div>
    )
  }
}

export default TodoLists;