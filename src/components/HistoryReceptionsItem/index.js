import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'

import Rate from '../Rate'
import Icon from '../Icon'
import PopoverFile from '../PopoverFile'

import './style.css'
import '../../icon/style.css'

class HistoryReceptionsItem extends React.Component{

    render(){
        const {
            type,
            size,
            name,
            time,
            startDate,
            endDate,
            status,
            diagnostic,
            comments,
            price,
            conclusion,
            conclusionDownload,
            title,
            review,
            content
        } = this.props;
        const rootClass = cn('receptions',`${status}`);
        const statusClass = cn('patient-status', 'receptions-status',`${status}`);


        return (
            <div className={rootClass}>
                <div className="flex-col"><div className="patient-name"><a href="#">{name}</a></div></div>
                <div className="flex-col">
                    <div className={statusClass}></div>
                    <div className="patient-date">{moment(startDate).format('DD.MM.YYYY')}</div>
                    <div className="patient-time">
                        {moment(startDate).format('HH:mm')} - {moment(endDate).format('HH:mm')}
                    </div>
                    <div className="patient-icon"><Icon title={title} svg type={type} size={16} /></div>
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

HistoryReceptionsItem.propTypes = {
    status: PropTypes.oneOf(['new', 'topical', 'completed', 'extra']),
    type: PropTypes.string.isRequired,
    diagnostic: PropTypes.string,
    name: PropTypes.string,
    comments: PropTypes.string,
    price: PropTypes.string,
    conclusion: PropTypes.string,
    conclusionDownload: PropTypes.string,
    review: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string
};

HistoryReceptionsItem.defaultProps = {
    size: 'small',
    status: 'new',
    name: '',
    diagnostic: '-',
    comment: '-',
    price: '-',
    conclusion: '-',
    conclusionDownload: '',
    review: '-',
    date: '-',
    time: '-',
    title: '',
};

export default HistoryReceptionsItem