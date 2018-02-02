import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '../Icon'
import TopPanelItem from '../TopPanelItem';
import './style.css'
import '../../icon/style.css'

class TopPanel extends React.Component{

	panelRender = (dataArr) => {
        let panelArr = [];

        dataArr.map((item, index) => {
            panelArr.push(<TopPanelItem {...item} key={'top-panel-'+index}/>)
        });

        return panelArr;
    };

    render(){
        return (
            <div className='top-panel'>
                {this.panelRender(this.props.data)}
            </div>
        )
    }
}

TopPanel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

TopPanel.defaultProps = {
    data: [],
};


export default TopPanel