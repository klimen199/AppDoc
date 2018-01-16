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
        // const minute = 60 * 1000;
        // const hour = minute * 60;
        // const day = hour * 24;
        // const now = Date.now();
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
        const day = 86400000;   // day in msec
        let revArr = [];
        let now = new Date();

        dataArr.every((item) => {
            if ((now - item.date)/day < 1){
                revArr.push(<Review {...item} key={item.id}/>);
                return true;
            }
            else return false;

        });

        return revArr;
    };

    tabChangeHadler = (tab) => {
        console.log(tab);
    };

    render(){
        const {data} = this.props;

        console.log(111)

        return (
            <Card title="Все отзывы"
                  className="reviewsTree"
                  extra={32}>
                <Tabs onChange={this.tabChangeHadler} activeKey='period'>
                    <TabPane tab="Все" key="all">{this.renderAll(data)}</TabPane>
                    <TabPane tab="За сегодня" key="today">{this.renderToday(data)}</TabPane>
                    <TabPane tab="За период" key="period">
                        <Icon type="calendar" svg size={20}/> <DatePicker range className="datepicker-tab" delimiter='&ndash;'/></TabPane>
                </Tabs>
            </Card>
        )
    }
}

ReviewsTree.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

ReviewsTree.defaultProps = {
    data: [],
};

export default ReviewsTree