import React from 'react';
import Todo from '../todo'
class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => {
                    console.log("todo:"+todo.text);
                    return <Todo key={todo.id} {...todo} onClick={() => {
                        this.props.onTodoClick(todo.id)
                    }
                    }/>
                })}

            </ul>
        );
    }
}
export {TodoList as default}
