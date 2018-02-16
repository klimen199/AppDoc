import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'
import PopoverFile from '../PopoverFile'

import './style.css'
import '../../icon/style.css'

class TreatmentTableItem extends React.Component{

    render(){
        const {type, name, size, time, date, diagnostic, comments, price, conclusion, conclusionDownload, title, review, content} = this.props;
        const rootClass = cn('treatment');


        return (
            <div className={rootClass}>
                <div className="flex-col"><div className="patient-name"><a href="#">{name}</a></div></div>
                <div className="flex-col">
                    <div className="patient-date">{date}</div>
                    <div className="patient-time">{time}</div>
                    <div className="patient-icon"><Icon svg type={type} size={16} title={title} /></div>
                </div>
                <div className="flex-col">
                    <div className="patient-diagnostic">{diagnostic}</div>
                </div>
                <div className="flex-col">
                    <div className="patient-comment">{comments}</div>
                </div>
                <div className="flex-col">
                    <div className="patient-price">{price}</div>
                </div>
                <div className="flex-col">
                    <div className="patient-conclusion">{conclusion}</div>
                    <a href="#" download>{conclusionDownload}</a>
                </div>
                <div className="flex-col">
                    <Rate defaultValue={4}/>
                    <div className="patient-review">{review}</div>
                </div>
                <div className="flex-col">
                    <PopoverFile data={this.props.data}></PopoverFile>
                </div>
            </div>
        )
    }
}

TreatmentTableItem.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    diagnostic: PropTypes.string,
    comments: PropTypes.string,
    price: PropTypes.string,
    conclusion: PropTypes.string,
    conclusionDownload: PropTypes.string,
    review: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string
};

TreatmentTableItem.defaultProps = {
    name: '',
    size: 'small',
    diagnostic: '-',
    comment: '-',
    price: '-',
    conclusion: '-',
    conclusionDownload: '',
    review: '-',
    title: '',
    date: '01.01.2018',
    time: '00:00',
};

export default TreatmentTableItem