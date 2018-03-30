import React from 'react';

import {Form} from 'antd';
import DatePicker from '../DatePicker'
import Tabs from '../Tabs'
import TimePicker from '../TimePicker'
import Radio from '../Radio'
import Select from '../Select'
import Checkbox from '../Checkbox'
import Button from '../Button'

const FormItem = Form.Item;

class ContentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tpNum: {
                'reception': props.timeSetReception.length || 1,
                'call': props.timeSetCall.length || 1,
            },
            shouldDPUpdate: false,
            isReset: false,
        }
    }

    compareDates = (first, second) => {
        return (first.date() === second.date()
        && first.month() === second.month()
        && first.year() === second.year())
    };

    changeFieldsVal = (props = this.props) => {
        const {dateSet, timeSetCall, timeSetReception} = props;
        let {defaultStartValue, defaultEndValue} = dateSet;
        props.form.setFieldsValue({
            ['day']: [defaultStartValue, defaultEndValue],
        });

        this.initializeTP(timeSetReception, 'reception', props);
        this.initializeTP(timeSetCall, 'call', props);
    };

    initializeTP = (set, flag) => {
        if (set.length) {
            for (let i = 0; i < this.state.tpNum[flag]; i++) {
                if(set[i]){
                    let {defaultStartValue, defaultEndValue} = set[i];
                    this.props.form.setFieldsValue({
                        [flag + 'Tp' + i]: [defaultStartValue, defaultEndValue],
                    });
                }
            }
        }
        else {
            this.props.form.setFieldsValue({
                [flag + 'Tp0']: [null, null],
            });
        }

    };

    componentDidMount() {
        this.changeFieldsVal()
    }

    componentWillReceiveProps(nextProps) {
        const dateSet_pr = this.props.dateSet,
            dateSet_cur = nextProps.dateSet;
        if(!(this.compareDates(dateSet_pr.defaultEndValue,dateSet_cur.defaultEndValue))
            || !(this.compareDates(dateSet_pr.defaultStartValue,dateSet_cur.defaultStartValue))){
            this.setState({shouldDPUpdate:true})
        }

        if (nextProps.visible === true && this.props.visible === false) {
            this.setState({
                tpNum: {
                    'call': nextProps.timeSetCall.length || 1,
                    'reception': nextProps.timeSetReception.length || 1,
                }
            });
            this.changeFieldsVal(nextProps);
        }

        if(nextProps.visible === false && this.props.visible === true){
            this.props.form.setFieldsValue({
                ['day']: [null, null],
            });
            this.initializeTP([], 'reception');
            this.initializeTP([], 'call');
            this.setState({
                isReset: true,
                'call': 1,
                'reception': 1,
            });
        }
    }

    componentDidUpdate(prevProps) {
        const dateSet_pr = prevProps.dateSet,
            dateSet_cur = this.props.dateSet;
        if(this.state.shouldDPUpdate)
            this.setState({shouldDPUpdate:false});

        if (prevProps.timeSetReception.length !== this.props.timeSetReception.length
            || prevProps.timeSetCall.length !== this.props.timeSetCall.length
            ||!(this.compareDates(dateSet_pr.defaultEndValue, dateSet_cur.defaultEndValue))
            || !(this.compareDates(dateSet_pr.defaultStartValue, dateSet_cur.defaultStartValue))
        ) {
            this.changeFieldsVal()
        }


        if(this.props.visible === false && prevProps.visible === true){
            this.setState({isReset: false,})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {day, isDayOff, intervalTime, type, ...rest} = this.props.form.getFieldsValue();
        let time = [],
            emergencyTime = [];

        for (let key in rest){
            if(key.indexOf('callTp') + 1 ){
                pushTimeToArr(time, rest[key]);
            }
            if(key.indexOf('receptionTp') + 1 ){
                pushTimeToArr(emergencyTime, rest[key]);
            }
        }

        function pushTimeToArr(array, time){
            (time[0] && time[1]) ? 
                array.push({
                    start: (time[0]).unix(),
                    end: (time[1]).unix(),
                }) : null;
        }

        let obj = {
            datestart: (day[0]).unix(),
            dateend: (day[1]).unix(),
            isDayOff, 
            intervalTime, 
            type,
            intervalOb: time,
            intervalEx: emergencyTime,
        }

        this.props.onSave(obj);
    };

    addTp = (tab, e) => {
        e.preventDefault();
        const n = this.state.tpNum[tab];
        let tpNum = this.state.tpNum;
        if (n < this.props[tab + 'Limit']) {
            tpNum[tab] = n + 1;
            this.setState({tpNum})
        }
    };

    renderTp = (tab, timeSet, fieldDecorator) => {
        let tpArr = [];
        const tpNum = this.state.tpNum[tab];
        for (let i = 0; i < tpNum; i++) {
            tpArr.push(
                <FormItem key={tab + i}>
                    {fieldDecorator(`${tab}Tp${i}`)(
                        <TimePicker range
                                    isReset={this.state.isReset}
                                    rangeSet={timeSet[i]}
                                    delimiter='&mdash;'
                        />
                    )}
                </FormItem>)
        }
        return (
            <div className="receptionsScheduleModal-timepickers">
                {tpArr}
            </div>
        );
    };

    renderTpBlock = (tab, timeSet, fieldDecorator) => {
        return (
            <div>
                <div className="receptionsScheduleModal-tabs-title">
                    Интервал рабочего времени
                </div>
                {this.renderTp(tab, timeSet, fieldDecorator)}
            </div>
        )
    };

    renderOptions = (selOptions) => {
        let options = [];
        selOptions.map((el) => {
            options.push(<Select.Option value={el}
                                        key={el}>
                {el}</Select.Option>)
        });

        return options;
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {dateSet, selOptions} = this.props;

        return (
            <Form onSubmit={this.handleSubmit}
                  className="receptionsScheduleModal">

                <FormItem>
                    {getFieldDecorator('day')(
                        <DatePicker range
                                    shouldUpdate={this.state.shouldDPUpdate}
                                    rangeSet={dateSet}
                                    delimiter='&mdash;'/>
                    )}
                </FormItem>

                <Tabs defaultActiveKey="1"
                      className="receptionsScheduleModal-tabs">
                        <Tabs.TabPane tab="Плановые приемы"
                                  key="1">
                        {this.renderTpBlock(
                            'reception',
                            this.props.timeSetReception,
                            getFieldDecorator
                        )}
                        <FormItem>
                            {getFieldDecorator('type', {
                                initialValue: 'chat'
                            })(
                                <Radio icons={['chat1','telephone', "video-camera"]}/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('intervalTime')(
                                <Select placeholder="Длительность приема">
                                    {this.renderOptions(selOptions)}
                                </Select>
                            )}
                        </FormItem>
                        <Button onClick={(e) => this.addTp('reception', e)}
                                btnText='Добавить интервал'
                                iconSize={30}
                                size='file'
                                type='file'
                                icon='add-button'
                                svg/>
                        <FormItem>
                            {getFieldDecorator('isDayOff', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(
                                <Checkbox>Выходной</Checkbox>
                            )}
                        </FormItem>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Экстренные вызовы"
                                  key="2">
                        {this.renderTpBlock(
                            'call',
                            this.props.timeSetCall,
                            getFieldDecorator
                        )}
                        <Button className='mb-1r'
                                onClick={(e) => this.addTp('call', e)}
                                btnText='Добавить интервал'
                                iconSize={30}
                                size='file'
                                type='file'
                                icon='add-button'
                                svg
                        />
                    </Tabs.TabPane>
                </Tabs>
                <Button 
                        htmlType="submit"
                        btnText='Сохранить'
                        size='default'
                        type='float'
                />
            </Form>
        )
    }
}

const Content = Form.create()(ContentForm);

export default Content
