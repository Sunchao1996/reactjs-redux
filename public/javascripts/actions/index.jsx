/*分析用户行为*/
let nextTodoId = 0;
/*用户添加待办项行为*/
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
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