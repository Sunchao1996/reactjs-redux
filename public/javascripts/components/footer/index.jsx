import React from 'react';
import FooterLink from '../../container/footerLink';

class Footer extends React.Component {

    render() {
        return (
            <p>
                Show:{' '}
                <FooterLink filter="SHOW_ALL">All</FooterLink>{', '}
                <FooterLink filter="SHOW_ACTIVE">Active</FooterLink>{', '}
                <FooterLink filter="SHOW_COMPLETED">Completed</FooterLink>
            </p>
        );
    }
}
export {Footer as default}
