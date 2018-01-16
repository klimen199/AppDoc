import React from 'react';
import PropTypes from 'prop-types'

import Review from '../Review'
import Card from '../Card'
import Tabs from '../Tabs'
import DatePicker from '../DatePicker'
import Icon from '../Icon'

import './style.css'
const TabPane = Tabs.TabPane;

class ReviewsTree extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayDP: false,
            range: [],
        }

    }
    // отзывы должны быть размещены в соответствии с: чем меньше id, тем раньше он был опубликован

    renderAll = (dataArr) => {
        let revArr = [];

        dataArr.map((item) => {
            revArr.push(<Review {...item} key={item.id}/>)
        });
        return revArr;
    };

    renderToday = (dataArr) =>{
        const day = 86400000;   // day to msec
        let revArr = [];
        let now = new Date();

        dataArr.every((item) => {
            if ((now - item.date)/day < 1){
                revArr.push(<Review {...item} key={item.id}/>);
                return true;
            }
            else
                return false;
        });
        return revArr;
    };

    renderPeriod = (dataArr) =>{
        let revArr = [];
        const [start, end] = this.state.range;

        dataArr.map((item, i) => {
            if (item.date > start && item.date < end)
                revArr.push(<Review {...item} key={item.id}/>);
        });
        return revArr
    };

    tabChangeHadler = (tab) => {
        tab === 'period' ?
            this.setState({displayDP: true}) : this.setState({displayDP: false});
    };

    dpHandler = (range) => {
        this.setState({range})
    };

    render(){
        const {data, reviewNum} = this.props;

        const DPstyle = {
            display: this.state.displayDP ? 'block' : 'none',
        };

        return (
            <Card title="Все отзывы"
                  className="reviewsTree"
                  extra={reviewNum}>
                <Tabs onChange={this.tabChangeHadler}
                      tabBarExtraContent={<DatePicker style={DPstyle} small onChange={this.dpHandler}/>}>
                    <TabPane tab="Все" key="all">{this.renderAll(data)}</TabPane>
                    <TabPane tab="За сегодня" key="today">{this.renderToday(data)}</TabPane>
                    <TabPane tab="За период" key="period">{this.renderPeriod(data)}</TabPane>
                </Tabs>
            </Card>
        )
    }
}

ReviewsTree.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    reviewNum: PropTypes.number,
};

ReviewsTree.defaultProps = {
    data: [],
    reviewNum: 0,
};

export default ReviewsTree