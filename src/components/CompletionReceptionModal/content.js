import React from 'react';

import {Form} from 'antd';
import Input from '../Input'
import Button from '../Button'
import Checkbox from '../Checkbox'

const FormItem = Form.Item;

class ContentForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onComplete(this.props.form.getFieldsValue())
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const rootClass = 'completionReceptionModal';

        return (
            <Form onSubmit={this.handleSubmit} className="cancelVisitModal">

                <div className={rootClass}>
                    <FormItem>
                        {getFieldDecorator('diagnosis')(
                            <Input className={rootClass + '-input'}
                                   placeholder="Диагноз"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('flag')(
                            <Checkbox className={rootClass + '-checkbox'}>
                                Добавить в список хронических болезней</Checkbox>
                        )}
                    </FormItem>
                    <Button onClick={this.props.onComplete}
                            htmlType="submit"
                            btnText="Завершить"
                            size="default"
                            type="float"
                    />
                </div>

            </Form>
        )
    }
}

const Content = Form.create()(ContentForm);

export default Content
