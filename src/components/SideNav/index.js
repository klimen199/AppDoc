import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import './styles.css'

import {Menu} from 'antd'
import DoctorProfileCard from '../DoctorProfileCard'
import Icon from '../Icon'

class SideNav extends React.Component{

    renderMenuItems = (menuItems) =>{
        let items = [];

        menuItems.map(({name, title, iconType, svg, onClick}) => {
            const path = `/${name}`;

            items.push(<Menu.Item key={path}>
                <NavLink exact to={path} activeClassName="selectedNavLink">
                    <div className='sidenav-root-menu-item'>
                        {iconType && <Icon type={iconType} size={26} svg={svg}/>}
                        <span className="item-title">
                            {title}
                        </span>
                    </div>
                </NavLink>
            </Menu.Item>);
        });
        return items;
    };


    render(){
        const {isShort} = this.props,
            {menuItems, onClick} = this.props;

        const rootClass = cn('sidenav-root', {'sidenav-root-short' : isShort});
        const menuClass = 'sidenav-root-menu' + (isShort ? '-short':'');

        return (
            <div className={rootClass}>
                <div className="logo" onClick={this.props.onLogoClick}><span className="logo-img"></span></div>
                <button onClick={onClick}
                        className="sidenav-root-btn">
                    {
                        isShort ? (
                                <Icon type="right-arrow-forward_small" size={12} svg/>
                            ) : (
                                <Icon type="left-arrow-forward_small" size={12} svg/>
                            )
                    }
                </button>
                <div className='overwlow-a-y'>
                    <DoctorProfileCard {...this.props}
                                        online={true}
                                       short={isShort}/>

                    <Menu
                        mode="inline"
                        className={menuClass}
                    >
                        {this.renderMenuItems(menuItems)}
                    </Menu>
                </div>
            </div>
        )
    }
}

SideNav.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        iconType: PropTypes.string,
        svg: PropTypes.bool,
        onClick: PropTypes.func,
    })),
    img: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    specialty: PropTypes.array,
    isShort: PropTypes.bool,
    rateValue: PropTypes.number,
    timesRated: PropTypes.number,
    onClick: PropTypes.func,
    onLogoClick: PropTypes.func,
};

SideNav.defaultProps = {
    menuItems: [],
    isShort: false,
    timesRated: 0,
    rateValue: 0,
    name: '',
    onClick: () => {},
    onLogoClick: () => {},
};

export default SideNav;