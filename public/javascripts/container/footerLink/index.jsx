import React from 'react';
import {connect} from 'react-redux';
import {setVisbility} from '../../actions'
import Link from '../../components/link';

let mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter == state.todoApp.visiblityFilter
    }
};
let mapDispatchToProps = (dispatcher, ownProps) => {
    return {
        onClick: function () {
            dispatcher(setVisbility(ownProps.filter));
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Link);
