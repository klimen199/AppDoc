import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import TreatmentTableItem from '../TreatmentTableItem'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class TreatmentTable extends React.Component{

    treatmentRender = (dataArr) => {
        let treatmentArr = [];

        dataArr.map((item) => {
            treatmentArr.push(<TreatmentTableItem {...item} key={item.id}/>)
        });

        return treatmentArr;
    };

    render(){
        const rootClass = cn('treatment-all');

        return (
            <div className={rootClass}>
                <Card title="Актуальные обращения" extra={<a href="#"><Icon svg size={16} type="order-form" /> Все обращения</a>}>
                    <div className="tableheader">
                        <div className="flex-col"><div className="tableheader-name">Имя пациента</div></div>
                        <div className="flex-col"><div className="tableheader-name">Дата приема</div></div>
                        <div className="flex-col"><div className="tableheader-name">диагноз</div></div>
                        <div className="flex-col"><div className="tableheader-name">Комментарий к приему</div></div>
                        <div className="flex-col"><div className="tableheader-name">стоимость</div></div>
                        <div className="flex-col"><div className="tableheader-name">заключение</div></div>
                        <div className="flex-col"><div className="tableheader-name">отзыв</div></div>
                        <div className="flex-col"><div className="tableheader-name"></div></div>
                    </div>
                    {this.treatmentRender(this.props.data)}
                  </Card>
            </div>
        )
    }
}

TreatmentTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

TreatmentTable.defaultProps = {
    data: [],
};

export default TreatmentTable