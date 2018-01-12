import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'

import './style.css'
import '../../icon/style.css'

class DiseasesTableItem extends React.Component{

    render(){
        const {date, diseases} = this.props;
        const rootClass = cn('diseases');


        return (
            <div className={rootClass}>
                <div className="flex-col">
                    <div className="patient-date">{date}</div>
                </div>
                <div className="flex-col">
                    <div className="patient-diseases">{diseases}</div>
                </div>
            </div>
        )
    }
}

DiseasesTableItem.propTypes = {
    diseases: PropTypes.string,
    date: PropTypes.string
};

DiseasesTableItem.defaultProps = {
    diseases: '',
    date: '01.01.2018'
};

export default DiseasesTableItem