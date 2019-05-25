import React, {Component} from 'react'
import {connect} from 'react-redux'
import './sidenavbar.css'

class SideNavbar extends Component {
    render() {
        return (
            <div id={'sidenavbar_container'}>
                <div id={'navbar_title'}>
                    <p id={'title'}>HUB</p>
                    <img id={'navbar_logo'} src={'/assets/logo-42.png'}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(SideNavbar);
