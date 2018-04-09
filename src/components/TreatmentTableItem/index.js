import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import Popover from '../Popover'
import PopoverFile from '../PopoverFile'

import './style.css'
import '../../icon/style.css'

class TreatmentTableItem extends React.Component{

    handleClick = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }

    render(){
        //const {id, type, name, size, time, date, diagnostic, comments, price, conclusion, conclusionDownload, title, review, content, onGoto} = this.props;
        const {
            id,
            id_user,
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
            conclusionDownloadName,
            conclusionDownloadLink,
            review,
            content,
            onGoto,
            rating,
            onGotoChat,
        } = this.props;
        const rootClass = cn('treatment');
        
        const key_val = {
            'chat': 'chat1',
            'voice': 'telephone', 
            'video': "video-camera",
        }

        return (
            <div className={rootClass} 
                    onClick={(e) => {
                        onGotoChat(id)
                        this.handleClick(e);
                    }}
            >
                <div className="flex-col">
                    <div className="patient-name">
                        <div onClick={(e) => {
                            onGoto(id_user)
                            this.handleClick(e);
                        }} className='go-to'>{name}</div>
                    </div>
                </div>
                <div className="flex-col">
                    <div className="patient-date">
                        {moment(startDate*1000).format('DD.MM.YYYY')}</div>
                    <div className="patient-time">
                    {moment(startDate*1000).format('HH:mm')} - {moment(endDate*1000).format('HH:mm')}
                    </div>
                    <div className="patient-icon">
                        <Icon svg type={key_val[type]} size={16}/>
                    </div>
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
                    <a href={conclusionDownloadLink} download onClick={this.handleClick}>
                        {conclusionDownloadName}
                    </a>
                </div>
                <div className="flex-col">
                    <Rate defaultValue={rating} disabled/>
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
    date: '',
    time: '',
    onGoto: () => {},
};

export default TreatmentTableItem