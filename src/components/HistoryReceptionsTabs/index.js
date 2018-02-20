import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import HistoryReceptionsItem from '../HistoryReceptionsItem'
import Card from '../Card'
import Button from '../Button'
import Input from '../Input'
import Tabs from '../Tabs'
import DatePicker from '../DatePicker'
import Hoc from '../Hoc'

import './style.css'
import '../../icon/style.css'
const TabPane = Tabs.TabPane;

class HistoryReceptionsTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            range: [],
            limit: this.props.limit,
            limitedShow: true,
            periodReceptions: [],
            topicalReceptions: [],
            completedReceptions: [],
            upcomingReceptions: [],
            currentTab: 'all'
        };
    }

    // отзывы должны быть размещены в соответствии с: чем меньше id, тем раньше он был опубликован

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.length !== this.props.data.length) {
            this.setState(prev => ({
                range: [],
                periodReceptions: [],
                limitedShow: true,
            }));
            this.sortHistoryReceptions();
        }
    }

    tabChangeHadler = (currentTab) => {
        this.setState(prev => ({
            limitedShow: true,
            range: [],
            periodReceptions: [],
            currentTab,
        }));
    };

    renderShowMoreBtn = (revArr) => {
        if (this.state.limit < revArr.length && this.state.limitedShow) {
            return (
                <div className="table-footer"
                     key="btn">
                    <Button btnText='Показать еще'
                            size='link'
                            type='link'
                            title='Показать ещё'
                            icon='circle_arrow_down'
                            onClick={() => this.setState(prev => ({limitedShow: false}))}/>
                </div>)
        }
    };

    sortPeriod = (period = this.state.range) => {
        const [start, end] = period,
            currentTab = this.state.currentTab;
        let revArr = [];

        let itemsToSort = currentTab === 'all'
            ? this.props.data
            : this.state[`${currentTab}Receptions`];

        itemsToSort.map((item) => {
            if (item.startDate > start && item.endDate < end)
                revArr.push(item);
        });
        return revArr;
    };

    dpHandler = (range) => {
        let _range = range.length ? [
            moment(range[0]).hour(0).minute(0).second(0).millisecond(0),
            moment(range[1]).hour(0).minute(0).second(0).millisecond(0)
        ] : [];
        this.setState(prev => ({
            periodReceptions: this.sortPeriod(_range),
            range: _range,
        }));
    };

    historyRender = (dataArr) => {
        let historyArr = [];
        const arr = (this.state.periodReceptions.length || this.state.range.length)
            ? this.state.periodReceptions : dataArr;
        arr.map((item, i) => {
            if (this.state.limit > i || !this.state.limitedShow) {
                historyArr.push(<HistoryReceptionsItem {...item} key={'histRecept' + i}/>)
            }
        });
        historyArr.push(this.renderShowMoreBtn(arr));
        return historyArr;
    };

    sortHistoryReceptions =() => {
        let topicalArr = [],
            completedArr = [],
            upcomingArr =[];
        const now = Date.now();
        this.props.data.map((item) => {
            switch (item.status){
                case 'topical':
                    topicalArr.push(item);
                    break;
                case 'completed':
                    completedArr.push(item);
                    break;
                default:
                    break;
            }
            item.endDate > now ? upcomingArr.push(item) : null;
        });
        this.setState({
            topicalReceptions: topicalArr,
            completedReceptions: completedArr,
            upcomingReceptions: upcomingArr,
        })
    };

    tabHeaderRender = () => {
        return (
            <Hoc>
                <div className="tableheader">
                    <div className="flex-col">
                        <div className="receptions-status new">Новые</div>
                    </div>
                    <div className="flex-col">
                        <div className="receptions-status topical">Актуальные</div>
                    </div>
                    <div className="flex-col">
                        <div className="receptions-status completed">Завершенные</div>
                    </div>
                    <div className="flex-col">
                        <div className="receptions-status extra">Экстренные</div>
                    </div>
                </div>
                <div className="tableheader menu-header">
                    <div className="flex-col">
                        <div className="tableheader-name">Дата приема</div>
                    </div>
                    <div className="flex-col">
                        <div className="tableheader-name">Диагноз</div>
                    </div>
                    <div className="flex-col">
                        <div className="tableheader-name">Комментарий к приему</div>
                    </div>
                    <div className="flex-col">
                        <div className="tableheader-name">Стоимость</div>
                    </div>
                    <div className="flex-col">
                        <div className="tableheader-name">Заключение</div>
                    </div>
                    <div className="flex-col">
                        <div className="tableheader-name">Отзыв</div>
                    </div>
                    <div className="flex-col">
                        <div className="tableheader-name"></div>
                    </div>
                </div>
            </Hoc>
        )
    };

    componentWillMount(){
        this.sortHistoryReceptions();
    }

    render() {

        return (
            <div className='receptions-all'>
                <Card title="История обращений">
                    <Tabs onChange={this.tabChangeHadler}
                          defaultActiveKey='all'
                          tabBarExtraContent={
                              <div className='extra-panel'>
                                  <DatePicker small
                                              onChange={this.dpHandler}
                                              defaultValue={this.state.range}/>
                                  <Input.Search placeholder="Поиск..."/></div>}>
                        <TabPane tab="Все" key="all">
                            {this.tabHeaderRender()}
                            {this.historyRender(this.props.data)}
                        </TabPane>
                        <TabPane tab="Завершенные" key="completed">
                            {this.tabHeaderRender()}
                            {this.historyRender(this.state.completedReceptions)}
                        </TabPane>
                        <TabPane tab="Актуальные" key="topical">
                            {this.tabHeaderRender()}
                            {this.historyRender(this.state.topicalReceptions)}
                        </TabPane>
                        <TabPane tab="Предстоящие" key="upcoming">
                            {this.tabHeaderRender()}
                            {this.historyRender(this.state.upcomingReceptions)}
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