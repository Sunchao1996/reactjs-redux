import React from 'react';
import {toggleTodo} from '../../actions';
import TodoList from '../../components/todoList';
import {connect} from 'react-redux';
class VisibleTodoList extends React.Component {

    render() {
        console.log('visibleTodoList:'+this.props.todos1);
        return (
            <div>
                <TodoList todos={this.props.todos1} onTodoClick={this.props.onTodoClick}/>
            </div>
        );
    }
}


var getVisibleTodos = (todos, filter) => {
    console.log("show_all"+todos,filter);
    switch (filter) {
        case 'SHOW_ALL':
            console.log("show_all"+todos);
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};

//将state作为props构造
let mapStateToProps = (state) => {
    console.log(state);
    return {
        todos1: getVisibleTodos(state.todoApp.todos, state.todoApp.visiblityFilter)

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: function (id) {
            dispatch(toggleTodo(id))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
