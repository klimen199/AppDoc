import React from 'react';
import PropTypes from 'prop-types'

import HistoryReceptionsItem from '../HistoryReceptionsItem'
import Card from '../Card'
import Button from '../Button'
import Input from '../Input'
import Tabs from '../Tabs'
import DatePicker from '../DatePicker'

import './style.css'
import '../../icon/style.css'
const TabPane = Tabs.TabPane;

class HistoryReceptionsTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayDP: false,
            range: [],
            limit: this.props.limit,
            limitedShow: true,
            periodRec: [],
        };
    }
    // отзывы должны быть размещены в соответствии с: чем меньше id, тем раньше он был опубликован

    componentWillUpdate(nextProps){
        if (nextProps.data !== this.props.data){
            //console.log('!!! New data receive');
            this.setState(prev => ({
                range: [],
                periodRec: [],
                limitedShow: true,
            }));
        }
    }

    tabChangeHadler = (tab) => {
        this.setState(prev => ({limitedShow: true}));
        tab === 'period' ?
            this.setState({displayDP: true}) : this.setState({displayDP: false});
    };


    renderShowMoreBtn = (revArr) => {
        if (this.state.limit < revArr.length && this.state.limitedShow){
            return (
                <div className="table-footer" key="btn">
                    <Button btnText='Показать еще'
                            size='link'
                            type='link'
                            title='Показать ещё'
                            icon='circle_arrow_down'
                            onClick={() => this.setState(prev => ({limitedShow:false}))}/>
                </div>)
        }
    };

    sortPeriod =(period = this.state.range) => {
        const [start, end] = period;
        let revArr = [];

        this.props.data.map((item) => {
            if (item.date > start && item.date < end)
                revArr.push(item);
        });
        return revArr;
    };

    dpHandler = (range) => {
        this.setState(prev => ({
            periodRec: this.sortPeriod(range),
            range
        }));
    };

    historyRender = (dataArr) => {
        let historyArr = [];
        dataArr.map((item, i) => {
            if (this.state.limit > i || !this.state.limitedShow){
                historyArr.push(<HistoryReceptionsItem {...item} key={'histRecept'+i}/>)
            }
        });
        historyArr.push(this.renderShowMoreBtn(dataArr));
        return historyArr;
    };

    render(){



        return (
            <div className='receptions-all'>
                <Card title="История обращений">
                    <Tabs onChange={this.tabChangeHadler}
                      tabBarExtraContent={<div className='extra-panel'><DatePicker small onChange={this.dpHandler} defaultValue={this.state.range}/><Input.Search placeholder="Поиск..."/></div>}>
                        <TabPane tab="Все" key="all">
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
                        </TabPane>
                        <TabPane tab="завершенные" key="completed">
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
                        </TabPane>
                        <TabPane tab="актуальные" key="topical">
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
                        </TabPane>
                        <TabPane tab="предстоящие" key="upcoming">
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
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}

HistoryReceptionsTabs.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    limit: PropTypes.number,
};

HistoryReceptionsTabs.defaultProps = {
    data: [],
    limit: 7,
};

export default HistoryReceptionsTabs