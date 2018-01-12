import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import './styles.css'

import {Menu} from 'antd'
import DoctorProfileCard from '../DoctorProfileCard'
import Icon from '../Icon'

class SideNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShort: false,
        }
    }

    // getSelectedKeys = () => {
    //     const { location: { hash, pathname }, selectedKeys} = this.props;
    //
    //     if (selectedKeys && selectedKeys.length) return selectedKeys;
    //     return [pathname + hash];
    // };

    renderMenuItems = (selectedKey, menuItems) =>{
        let items = [];

        menuItems.map(({name, title, iconType, svg, onClick},i) => {
            const path = `/${name}/`;
            //const isActive = () => path === selectedKey;
            const isActive = () => path === '/'+selectedKey+'/';

            items.push(<Menu.Item key={path}>
                <NavLink isActive={isActive} to={path} onClick={onClick} activeClassName="selectedNavLink">
                    <div className='sidenav-root-menu-item'>

                            {iconType && <Icon type={iconType} size={26} svg={svg}/>}

                        <span className="item-title">
                            {title}
                        </span>
                    </div>
                </NavLink>
            </Menu.Item>);
        })
        return items;

    };

    render(){
        const {isShort} = this.state,
            {menuItems} = this.props;

        const rootClass = cn('sidenav-root', {'sidenav-root-short' : isShort});
        const menuClass = 'sidenav-root-menu' + (isShort ? '-short':'');

        //const selectedKeys = this.getSelectedKeys()

        return (
            <div className={rootClass}>
                <button onClick={() => {this.setState({isShort: !isShort})}}
                        className="sidenav-root-btn">
                    {
                        isShort ? (
                                <Icon type="right-arrow-forward_small" size={12} svg/>
                            ) : (
                                <Icon type="left-arrow-forward_small" size={12} svg/>
                            )
                    }
                </button>
                <DoctorProfileCard/>

                <Menu
                    mode="inline"
                    className={menuClass}
                >
                    {/*{this.renderMenuItems(selectedKeys[0], menuItems)}*/}
                    {this.renderMenuItems('asks', menuItems)}
                </Menu>
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
    }))
};

SideNav.defaultProps = {
    menuItems: [],
};

export default SideNav;