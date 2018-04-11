import React from 'react';
import PropTypes from 'prop-types'

import './styles.css'
import Rate from '../Rate'

class RatePanel extends React.Component{
    

    render(){
        const {rateValue,timesRated } = this.props;
        //console.log(parseFloat(rateValue))

        return (
            <div className="ratePanel">
                <span className="value">{rateValue.toFixed(1)}</span>
                <Rate style={{fontSize:12}}
                      defaultValue={Math.ceil(rateValue)}
                      {...this.props}/>
                <span className="times">({timesRated})</span>
            </div>
        )
    }
}

RatePanel.propTypes = {
    rateValue: PropTypes.number,
    timesRated: PropTypes.number,
    disabled: PropTypes.bool,
};

RatePanel.defaultProps = {
    rateValue: 0,
    timesRated: 0,
    disabled: true,
};

export default RatePanel;