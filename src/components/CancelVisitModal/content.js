import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import { Form } from 'antd';
import TextArea from '../TextArea'
import Upload from '../Upload'
import DatePicker from '../DatePicker'
import Button from '../Button'

const FormItem = Form.Item;

class ContentForm extends React.Component{
    constructor(props){
        super(props);
        const {rangeSet} = props;

        this.state = {
            dpNum: rangeSet.length || 1,
        };
    }

    componentDidMount(){
        const {rangeSet} = this.props;
        console.log(rangeSet)
        for(let i = 0; i < this.state.dpNum; i++){
            let {defaultStartValue, defaultEndValue} = rangeSet[i];
            this.props.form.setFieldsValue({
                ['dp'+i]: [defaultStartValue, defaultEndValue],
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.form.getFieldsValue());
        console.log(this.ta.state.value);

        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         this.props.onSubmit(values);
        //         this.props.onNext();
        //     }
        // });
    };

    addDp = () => {
        const {dpNum} = this.state;
        if(dpNum< this.props.limit)
            this.setState({dpNum:(dpNum+1)})
    };

    filterRangeSet = (order) => {
        const {rangeSet} = this.props;
        if (Array.isArray(rangeSet)){
            return rangeSet[order];
        }
    };

    renderDp = (fieldDecorator) =>{
        let dpArr = [];
        for(let i =0; i<this.state.dpNum;i++){
            dpArr.push(
                <FormItem key={'dp'+i}>
                    {fieldDecorator(`dp${i}`)(
                        <DatePicker range
                                    rangeSet={this.filterRangeSet(i)}
                                    delimiter='&mdash;'/>
                    )}
                </FormItem>)
        }
        return (
            <div className="cancelVisitModal-datepickers">
                {dpArr}
            </div>
        );
    };

    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="cancelVisitModal">

                <TextArea label='Причина отмены'
                          ref = {ta => this.ta = ta}
                          className="cancelVisitModal-txtarea"/>

                    <Upload className="cancelVisitModal-upload" text="Прикрепить файл"/>
                    {this.renderDp(getFieldDecorator)}
                    <Button onClick={this.addDp}
                            className='cancelVisitModal-dpAdd'
                            btnText='Добавить интервал'
                            size='file'
                            type='file'
                            icon='add-button'
                            svg
                    />
                    <Button htmlType="submit"
                            size='default'
                            btnText='Сохранить'
                            type='float'/>

                
                
                
                {/*
                <div className="steps-action">
                    <Button htmlType="submit"
                            disable={!(userFio&&
                            userEmail &&
                            userPhone &&
                            userSex &&
                            userBirthday)}
                            btnText='Далее'
                            size='large'
                            type='gradient'/>
                </div>*/}
            </Form>
        )
    }
}

const Content = Form.create()(ContentForm);


Content.propTypes = {
    // urlForget: PropTypes.string,
    // urlRegistration: PropTypes.string,
    // onSubmit: PropTypes.func,
};

Content.defaultProps = {
    // urlForget: '',
    // urlRegistration: '',
    // onSubmit: () => {},
};

export default Content
