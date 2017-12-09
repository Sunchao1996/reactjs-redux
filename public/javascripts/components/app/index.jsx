import React from 'react';
import AddTodo from '../../container/addTodo';
import VisibleTodoList from '../../container/visibleTodoList';
import Footer from '../footer';


class App extends React.Component {

    render() {
        return (
                <div>
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />

                </div>
        );
    }
}
export {App as default}
