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
            }
        }
    }

    initializeTP = (set, flag) => {
        if (set.length)
            for(let i = 0; i < this.state.tpNum[flag]; i++){
                let {defaultStartValue, defaultEndValue} = set[i];
                this.props.form.setFieldsValue({
                    [flag+'Tp'+i]: [defaultStartValue, defaultEndValue],
                });
            }
    };

    componentDidMount(){
        const {dateSet, timeSetCall, timeSetReception} = this.props;
        let {defaultStartValue, defaultEndValue} = dateSet;
        this.props.form.setFieldsValue({
            ['day']: [defaultStartValue, defaultEndValue],
        });

        this.initializeTP(timeSetReception,'reception');
        this.initializeTP(timeSetCall,'call');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.form.getFieldsValue());
        this.props.onSave(this.props.form.getFieldsValue());
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
                            {getFieldDecorator('radio')(
                                <Radio icons={['telephone', "video-camera", 'chat1']}/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('durability')(
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
                            {getFieldDecorator('dayOff', {
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
                        <Button onClick={(e) => this.addTp('call', e)}
                                btnText='Добавить интервал'
                                iconSize={30}
                                size='file'
                                type='file'
                                icon='add-button'
                                svg
                        />
                    </Tabs.TabPane>
                </Tabs>
                <Button htmlType="submit"
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
