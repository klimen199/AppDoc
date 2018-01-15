import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'

import './style.css'
import '../../icon/style.css'

class HistoryReceptionsItem extends React.Component{

    render(){
        const {type, size, time, date, status, diagnostic, comments, price, conclusion, conclusionDownload, review, content} = this.props;
        const rootClass = cn('receptions',`${status}`);
        const statusClass = cn('patient-status', 'receptions-status',`${status}`);


        return (
            <div className={rootClass}>
                <div className="flex-col">
                    <div className={statusClass}></div>
                    <div className="patient-date">{date}</div>
                    <div className="patient-time">{time}</div>
                    <div className="patient-icon"><Icon svg type={type} size={16} /></div>
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
                    <Popover placement="bottomRight" content={content} trigger="click">
                         <Icon svg type={"file-download popover-nun"} size={30}  num={3}/>
                    </Popover>
                </div>
            </div>
        )
    }
}

HistoryReceptionsItem.propTypes = {
    status: PropTypes.oneOf(['new', 'topical', 'completed', 'extra']),
    type: PropTypes.string.isRequired,
    diagnostic: PropTypes.string,
    comments: PropTypes.string,
    price: PropTypes.string,
    conclusion: PropTypes.string,
    conclusionDownload: PropTypes.string,
    review: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.number
};

HistoryReceptionsItem.defaultProps = {
    size: 'small',
    status: 'new',
    diagnostic: '-',
    comment: '-',
    price: '-',
    conclusion: '-',
    conclusionDownload: '',
    review: '-',
    date: '-',
    time: '-',
};

export default HistoryReceptionsItem