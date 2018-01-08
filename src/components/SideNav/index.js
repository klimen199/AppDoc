import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import './styles.css'

import {Menu} from 'antd'
import Button from '../Button'
import Icon from '../Icon'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SideNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShort: false,
        }
    }

    getSelectedKeys = () => {
        // const { location: { hash, pathname }, selectedKeys} = this.props
        //
        // if (selectedKeys && selectedKeys.length) return selectedKeys
        // return [pathname + hash]
    }

    renderMenuItems = (selectedKey, menuItems, isShort) =>{
        let items = [];
        const clName = 'sidenav-root-menu-item' + (isShort ? '-short':'');

        menuItems.map(({name, title, iconType, svg, onClick},i) => {
            const path = `/${name}/`;
            const isActive = () => path === selectedKey;

            items.push(<Menu.Item key={path}>
                {/*<NavLink isActive={isActive} to={path} onClick={onClick}>*/}
                    <div className={clName}>

                            {iconType && <Icon type={iconType} size={26} svg={svg}/>}

                        <span className="item-title">
                            {title}
                        </span>
                    </div>
                {/*</NavLink>*/}
            </Menu.Item>);
        })
        return items;

    };

    render(){
        const {isShort} = this.state,
            {menuItems} = this.props;

        //const selectedKeys = this.getSelectedKeys()
        const rootClass = cn('sidenav-root', {'sidenav-root-short' : isShort});

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

                <Menu
                    mode="inline"
                >
                    {/*{this.renderMenuItems(selectedKeys[0], menuItems)}*/}
                    {this.renderMenuItems('', menuItems, isShort)}
                    {/*<Menu.Item key="1">Option 1</Menu.Item>*/}
                    {/*<Menu.Item key="2">Option 2</Menu.Item>*/}
                    {/*<Menu.Item key="3">Option 3</Menu.Item>*/}
                    {/*<Menu.Item key="4">Option 4</Menu.Item>*/}
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