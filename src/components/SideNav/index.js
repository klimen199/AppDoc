import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

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

    renderMenuItems = (selectedKey, menuItems, withCount) =>{
        menuItems.map( ({menu, items, name, title, index, onClick, count}) => {
            const path = `/${menu}/${name}/`
            const isActive = () => path === selectedKey

            return (
                <Menu.Item className={css['nav-item']} key={path}>
                    <NavLink isActive={isActive} to={path} onClick={onClick}>
                        {renderIndex(index)}
                        <div className={css['nav-title']}>
                            <div className={css['nav-title-inner']}>{title}</div>
                        </div>
                        {withCount && renderItemCount(count)}
                    </NavLink>
                    {items && renderSubMenu(items)}
                </Menu.Item>
            )
        })
    };

    render(){
        const {isShort} = this.state,
            {} = this.props;


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
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {this.renderMenuItems()}
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </Menu>
            </div>
        )
    }
}

SideNav.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        icon: PropTypes.string,
        svg: PropTypes.bool,
    }))
};

SideNav.defaultProps = {
    menuItems: [{
        name: '',
        title: '',
        icon: '',
        svg: false,
    }]
};

export default SideNav;