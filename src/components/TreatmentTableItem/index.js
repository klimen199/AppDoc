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
        const {id, type, name, size, time, date, diagnostic, comments, price, conclusion, conclusionDownload, title, review, content, onGoto} = this.props;
        const rootClass = cn('treatment');


        return (
            <div className={rootClass}>
                <div className="flex-col">
                    <div className="patient-name">
                        <div onClick={() => onGoto(id)} className='go-to'>{name}</div>
                    </div>
                </div>
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
    id: PropTypes.number,
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
    title: PropTypes.string,
    onGoto: PropTypes.func,
};

TreatmentTableItem.defaultProps = {
    id: 0,
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
    onGoto: () => {},
};

export default TreatmentTableItem