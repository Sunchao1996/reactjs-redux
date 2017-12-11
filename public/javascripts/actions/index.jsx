/*分析用户行为*/
let nextTodoId = 0;
/*用户添加待办项行为*/
export const addTodo1 = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};
export const addTodo = (text) => {
    //在函数里面可以进行异步操作，从外部获取数据来进行判断是否进行继续进行
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(addTodo1(text))
        }, 2000);
        //return false;返回false表示函数不进行继续执行，
    }
};
/*用户选择展示待办项行为*/
export const setVisbility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter

    }
};
/*用户点击待办项完成待办项行为*/
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};