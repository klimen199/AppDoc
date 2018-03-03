import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Input from '../Input'
import PopoverItem from './content'

import './style.css'
import '../../icon/style.css'


class PatientAnalyzesPopover extends React.Component {


    panelRender = (dataArr) => {
        let panelArr = [];

        dataArr.map((item, index) => {
            panelArr.push(<PopoverItem {...item} key={index}/>)
        });

        return panelArr;
    };

    render(){

        return (
            <div className='analyzes-popover'>  
                <div className='analyzes-popover-title'>Ближайшие лаборатории, в которых Вы можете сдать данный анализ:</div>
                <div className='analyzes-popover-overlay'>{this.panelRender(this.props.data)}</div>
                <div className='analyzes-popover-close'>
                    <Button
                        
                        size='small'
                        type='no-brd'
                        icon='close'
                        iconSize={13}
                    />
                </div>
            </div>
        )
    }
}


PatientAnalyzesPopover.propTypes ={
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
}

PatientAnalyzesPopover.defaultProps = {
    title: '',
    data: [],
}

export default PatientAnalyzesPopover