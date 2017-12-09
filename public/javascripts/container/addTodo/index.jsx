import {connect} from 'react-redux'
import {addTodo } from '../../actions'
import React from 'react';

class AddTodo extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        if (!this.input.value.trim()) {
            return;
        }
        this.props.dispatch(addTodo(this.input.value))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref={(input) => this.input = input}/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>)
    }

}
let mapStateToProps = (state) => {
    return {

    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        dispatch:dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);//connect 高阶方法，返回一个方法，第一个参数可以传一些对后面函数加强的东西
