/*对响应的抽象*/


const visiblityFilter = (state = "SHOW_ALL", action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filter;
        default:
            return state;
    }
};
export default visiblityFilter;
