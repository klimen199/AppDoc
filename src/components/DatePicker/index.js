import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import {DatePicker as AntDatePicker} from 'antd'
import DefaulDP from './DefaultDP'
import RangeDP from './RangeDP'
import SmallRP from './SmallRP'

import './styles.css'

const dateFormat = 'DD.MM.YYYY';

class DatePicker extends React.Component {

    render() {
        const {range, small, style} = this.props;

        return (<div className={small ? 'datepicker' : 'datepicker-base'}>
            {
                small ?
                    <SmallRP format={dateFormat}
                             className='datepicker-small'
                             {...this.props}/>
                    :
                    range ? (
                            <RangeDP format={dateFormat}
                                     {...this.props}/>
                        ) : (
                            <DefaulDP format={dateFormat}
                                      {...this.props} />
                        )
            }
        </div>)
    }
}

DatePicker.propTypes = {
    // defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    range: PropTypes.bool,
    small: PropTypes.bool,
    rangeSet: PropTypes.shape({
        defaultStartValue: PropTypes.object,
        placeholderStart: PropTypes.string,
        defaultEndValue: PropTypes.object,
        placeholderEnd: PropTypes.string,
    }),
    delimiter: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
};

DatePicker.defaultProps = {
    //defaultValue: null,
    range: false,
    small: false,
    rangeSet: {},
    delimiter: "—",
    style: {},
    onChange: () => {},
};

export default  DatePicker;