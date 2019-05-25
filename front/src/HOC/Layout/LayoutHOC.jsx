import React from 'react';
import SideNavbar from '../../components/Sidenavbar/sideNavbarComponent'

const Layout = (props) => {
    return (
        <div id={'wrapper'}>
            <SideNavbar/>
            <div id={'container'}>
                {props.children}
            </div>
            {/*<Footer />*/}
        </div>
    );
};

export default (Layout);
