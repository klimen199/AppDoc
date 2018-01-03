import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class TopPanelItem extends React.Component{

    render(){

        const {className, PanelText, type, firstItem, PanelTitle, icon, iconSize, svg} = this.props;

        const rootClass = cn( `${className}`, 'PanelItem')
        let PanelTextStyle = {}
        let PanelTitleStyle = {}

        return (
            <div className={rootClass}>
                <div className='PanelItem-header'>
                     {icon && (
                        <Icon svg={svg} type={icon} size={iconSize}/>
                    )}
                    {!svg && <span></span>}
                    {type !== 'icon' && <span className={'panel-title'} style={PanelTitleStyle}>{PanelTitle}</span>}
                </div>
                {<span className={'PanelItem-num'} style={PanelTextStyle}>{PanelText}</span>}
            </div>
        )
    }
}


TopPanelItem.propTypes ={
    className: PropTypes.string,
    PanelTitle: PropTypes.string,
    PanelText: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.number,
    svg: PropTypes.bool,
    firstItem: PropTypes.bool
}

TopPanelItem.defaultProps = {
    className: '',
    PanelTitle: '',
    PanelText: '',
    icon: '',
    iconSize: 30,
    firstItem: false,
}

export default TopPanelItem