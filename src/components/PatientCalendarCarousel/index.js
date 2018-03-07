import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import moment from 'moment'

import { Carousel } from 'antd';

import './style.css'
import '../../icon/style.css'

class PatientCalendarCarousel extends React.Component{
    
    render(){
        const {} = this.props;
        const rootClass = cn('calendar-carousel');

        return (
            <div className={rootClass}>
                <Carousel>
                    <div className='calendar-carousel-slide'>
                        <div className='calendar-carousel-col'>
                            <div className='calendar-carousel-day'>Пн 25 мая</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                        </div>

                        <div className='calendar-carousel-col'>
                            <div className='calendar-carousel-day'>Вт 26 мая</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                        </div>

                        <div className='calendar-carousel-col'>
                            <div className='calendar-carousel-day'>Ср 27 мая</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                            <div className='calendar-carousel-time'>10:30</div>
                        </div>
                    </div>
                </Carousel>
                <button>Prev</button>
                <button>Next</button>
            </div>
        )
    }
}

PatientCalendarCarousel.propTypes = {
    doctorRate: PropTypes.number,
};

PatientCalendarCarousel.defaultProps = {
    doctorRate: 0,
};

export default PatientCalendarCarousel