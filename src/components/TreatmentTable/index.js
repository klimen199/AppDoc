import React from 'react';
import PropTypes from 'prop-types'

import TreatmentTableItem from '../TreatmentTableItem'
import Card from '../Card'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class TreatmentTable extends React.Component{

    treatmentRender = (dataArr) => {
        let treatmentArr = [];

        dataArr.map((item, index) => {
            treatmentArr.push(<TreatmentTableItem {...item} data={this.props.data} key={item.id + ''+index}/>)
        });

        return treatmentArr;
    };

    render(){
        const {data} = this.props;
        return (
            <div className='treatment-all'>
                <Card title="Актуальные обращения" 
                        extra={<a onClick={this.props.redirect}>
                            <Icon svg size={16} type="order-form" /> <span>Все обращения</span>
                        </a>}>
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
                    <div className='overflow-x-a'>
                        {data.length ? 
                            this.treatmentRender(data) 
                            : <div classname='entry-list'>Обращений нет</div>}
                    </div>
                  </Card>
            </div>
        )
    }
}

TreatmentTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    redirect: PropTypes.func,
};

TreatmentTable.defaultProps = {
    data: [],
    redirect: () => {},
};

export default TreatmentTable