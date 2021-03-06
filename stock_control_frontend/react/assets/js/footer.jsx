import React from 'react'
import '../css/footer.css'
/*
Functional component to display the greeting (passed in as prop from loginform.jsx, set in state
in index.jsx).
 */
const Footer = ({copyright = '', footer = '', version = ''} = {}) => {
    return (
        <div className={'footer container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    {footer}
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>
                    {copyright}
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>
                    {version}
                </div>
            </div>
        </div>
    );
};
export default Footer;