import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import {DatePicker as AntDatePicker} from 'antd'
import DefaulDP from './DefaultDP'
import RangeDP from './RangeDP'
import SmallRP from './SmallRP'

import './styles.css'

const dateFormat = 'DD.MM.YYYY';

const DatePicker = (props) => {
        const {range, small} = props;

        return (<div className={small?'datepicker':'datepicker-base'}>
            {
            small ?
                <SmallRP format={dateFormat} className='datepicker-small'/>
                :
                range ? (
                        <RangeDP format={dateFormat}
                                 {...props}/>
                    ) : (
                        <DefaulDP format={dateFormat}
                                  {...props} />
                    )
            }
        </div>);
    };

DatePicker.propTypes = {
    defaultValue: PropTypes.object,
    range: PropTypes.bool,
    small: PropTypes.bool,
    rangeSet: PropTypes.shape({
        defaultStartValue: PropTypes.object,
        placeholderStart: PropTypes.string,
        defaultEndValue: PropTypes.object,
        placeholderEnd: PropTypes.string,
    }),
    delimiter: PropTypes.string,
};

DatePicker.defaultProps = {
    defaultValue: null,
    range: false,
    small: false,
    rangeSet: {},
    delimiter: "—",
};

export default  DatePicker;