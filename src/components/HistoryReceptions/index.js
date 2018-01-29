import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import HistoryReceptionsItem from '../HistoryReceptionsItem'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class HistoryReceptions extends React.Component{

    historyRender = (dataArr) => {
        let historyArr = [];

        dataArr.map((item,i) => {
            historyArr.push(<HistoryReceptionsItem {...item} key={'histRecept'+i}/>)
        });

        return historyArr;
    };

    render(){
        const rootClass = cn('receptions-all');

        return (
            <div className={rootClass}>
                <Card title="Актуальные обращения">
                    <div className="tableheader">
                        <div className="flex-col"><div className="receptions-status new">Новые</div></div>
                        <div className="flex-col"><div className="receptions-status topical">Актуальные</div></div>
                        <div className="flex-col"><div className="receptions-status completed">Завершенные</div></div>
                        <div className="flex-col"><div className="receptions-status extra">Экстренные</div></div>
                    </div>
                    <div className="tableheader menu-header">
                        <div className="flex-col"><div className="tableheader-name">Дата приема</div></div>
                        <div className="flex-col"><div className="tableheader-name">диагноз</div></div>
                        <div className="flex-col"><div className="tableheader-name">Комментарий к приему</div></div>
                        <div className="flex-col"><div className="tableheader-name">стоимость</div></div>
                        <div className="flex-col"><div className="tableheader-name">заключение</div></div>
                        <div className="flex-col"><div className="tableheader-name">отзыв</div></div>
                        <div className="flex-col"><div className="tableheader-name"></div></div>
                    </div>
                    {this.historyRender(this.props.data)}
                    <div className="table-footer">
                        <Button
                            btnText='Показать еще'
                            size='link'
                            type='link'
                            icon='circle_arrow_down'
                        />
                    </div>
                  </Card>
            </div>
        )
    }
}

HistoryReceptions.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

HistoryReceptions.defaultProps = {
    data: [],
};

export default HistoryReceptions