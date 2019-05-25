import React, {Component} from 'react'
import {connect} from 'react-redux'
import './sidenavbar.css'

class SideNavbar extends Component {

    state = {
      items: [
          {title: 'Cluster'}
      ]

    };

    renderItems = (items) => {
      return items.map((item, i) => (
          <li key={i} className={'item_li'}>{item.title} {i}</li>
      ))
    };


    render() {
        let items = this.state.items;
        return (
            <div id={'sidenavbar_container'}>
                <div id={'navbar_title'}>
                    <p id={'title'}>NOC</p>
                    <img id={'navbar_logo'} src={'/assets/logo-42.png'}/>
                </div>
                <ul id={'sidenavbar_list'}>
                    {this.renderItems(items)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(SideNavbar);
