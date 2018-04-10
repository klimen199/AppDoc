import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Form } from 'antd'
import Button from '../Button'
import Upload from '../Upload'
import Select from '../Select'
import DatePicker from '../DatePicker'
import Input from '../Input'

import './style.css'
import '../../icon/style.css'
import PersonalExperience from "../PersonalExperience";
const FormItem = Form.Item;
const Option = Select.Option;

class PersonalEducationItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            educatBlock : 0,
            idCurrentDegree : null
        }
    }

    clone = (obj) => {
        if (null == obj || "object" !== typeof obj) return obj;
        let copy = obj.constructor();
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    };

    sendMainInstution = (values) => {

        let newProfile = JSON.parse(JSON.stringify(this.props.profileDoctor));

        let inst  = newProfile.arrayMainInstitution;
        let idInst = null;
        try{
            idInst = (inst[inst.length-1].id + 1);
        }
        catch(e) {
            idInst = 0;
        }

        let dateStart = null;
        let dateEnd = null;

        if(values.datePickerMain){
            if(values.datePickerMain[0]) {
                dateStart = Math.floor(( +values.datePickerMain[0].format('x')) / 1000);
            }
            if(values.datePickerMain[1]) {
                dateEnd = Math.floor(( +values.datePickerMain[1].format('x')) / 1000);
            }
        }

        inst.push(
            {
                id               : idInst,
                mainInstitution  : values.mainInstitutionField,
                mainSpecialty    : values.mainSpecialtyField,
                mainDateStart    : dateStart,
                mainDateEnd      : dateEnd,
                documents        : values.uploadMain || []
            });
        return newProfile;
    };

    sendSecondInstution = (values) => {
        let newProfile = JSON.parse(JSON.stringify(this.props.profileDoctor));
        //let newProfile = {...this.props.profileDoctor};

        let inst  = newProfile.arraySecondInstitution;

        let dateStart = null;
        let dateEnd = null;

        if(values.datePickerSecond){
            if(values.datePickerSecond[0]) {
                dateStart = Math.floor(( +values.datePickerSecond[0].format('x')) / 1000);
            }
            if(values.datePickerSecond[1]) {
                dateEnd = Math.floor(( +values.datePickerSecond[1].format('x')) / 1000);
            }
        }
        inst.push(
            {
                id                 : inst[inst.length-1].id + 1,
                secondInstitution  : values.secondInstitutionField,
                secondSpecialty    : values.secondSpecialtyField,
                secondDateStart    : dateStart,
                secondDateEnd      : dateEnd,
                documents          : values.uploadSecond || []
            });
        return newProfile;
    };

    sendDegree = (values) => {
        let newProfile = JSON.parse(JSON.stringify(this.props.profileDoctor));
       // let newProfile = {...this.props.profileDoctor};
        let inst  = newProfile.arrayDegree;
        inst.push(
            {
                id        : inst[inst.length-1].id + 1,
                degree    : values.addDegreeField,
                documents : values.uploadAddDegree || []
            });
        return newProfile;
    };

    changeDegree = (values) => {
        let newProfile = JSON.parse(JSON.stringify(this.props.profileDoctor));
        //let newProfile = {...this.props.profileDoctor};
        let inst  = newProfile.arrayDegree;

        inst.map((elem) => {
            if(elem.id === this.state.idCurrentDegree) {
                elem.degree = values.changeDegreeField;
                elem.documents = values.uploadDegree || [];
            }
        });
        this.setState({idCurrentDegree: null});
        return newProfile;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err && this.state.educatBlock !== 0) {
                let newProfile = null;
                switch (this.state.educatBlock) {
                    case 1:
                        newProfile = this.sendMainInstution(values);
                        break;
                    case 2:
                        newProfile = this.sendSecondInstution(values);
                        break;
                    case 3:
                        newProfile = this.changeDegree(values);
                        break;
                    case 4:
                        newProfile = this.sendDegree(values);
                        break;
                }
                this.props.form.resetFields();
                this.setState({educatBlock: 0});
                //console.log("get", newProfile);
            }
        });
    };

    onChange = (a) => {
        alert();
        try{
            if(a){
                if(a[0]) this.mainDateStart = Math.floor(( +a[0].format('x')) / 1000);
                if(a[1]) this.mainDateEnd = Math.floor(( +a[0].format('x')) / 1000);
            }
        }
        catch (e){
            console.log(e);
        }

    };

    addDp = () => {
        this.setState({educatBlock:1})
    };

    renderDp = (getFieldDecorator) =>{
        let dpArr = [];

        if(this.state.educatBlock === 1) {
            dpArr.push(
                <div className="personal-item" key={this.state.educatBlock}>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('mainInstitutionField', {
                            rules: [{
                                required: true,
                                message: 'Введите учебное заведение'
                            }],
                        })(
                            <Input id="mainInstitution" addonBefore="Учебное заведение"/>
                        )}
                    </FormItem>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('mainSpecialtyField', {
                            rules: [{
                                required: true,
                                message: 'Введите cпециальность'
                            }],
                        })(
                            <Input id="mainSpecialty" addonBefore="Специальность"/>
                        )}
                    </FormItem>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('datePickerMain', {
                            rules: [{
                                required: true,
                                message: 'Введите дату'
                            }],
                        })(
                            <DatePicker  range placeholderStart="Начало обучения" placeholderEnd="Окончание обучения"
                                         showTime format="DD.MM.YYYY" />
                        )}
                    </FormItem>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('uploadMain', {
                        })(
                            <Upload text="Прикрепить документ, подтверждающий ученую степень" />
                        )}
                    </FormItem>
                </div>
            )
        }
        return (
            <div className="new-d">
            {dpArr}
    </div>
            );
    };

    addDp2 = () => {
        this.setState({educatBlock:2})
    };

    renderDp2 = (getFieldDecorator) =>{
        let dpArr2 = [];

        if(this.state.educatBlock === 2) {
            dpArr2.push(
                <div className="personal-item" key={this.state.educatBlock}>
                    <FormItem className="personal-item">
                        {getFieldDecorator('secondInstitutionField', {
                            rules: [{
                                required: true,
                                message: 'Введите учебное заведение'
                            }],
                        })(
                            <Input id="secondInstitution" addonBefore="Учебное заведение" />
                        )}
                    </FormItem>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('secondSpecialtyField', {
                            rules: [{
                                required: true,
                                message: 'Введите название цикла'
                            }],
                        })(
                            <Input id="secondSpecialty" addonBefore="Название цикла обучения" />
                        )}
                    </FormItem>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('datePickerSecond', {
                            rules: [{
                                required: true,
                                message: 'Введите время'
                            }],
                        })(
                            <DatePicker  range placeholderStart="Начало обучения" placeholderEnd="Окончание обучения"
                            showTime format="DD.MM.YYYY"/>
                        )}
                    </FormItem>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('uploadSecond', {
                        })(
                            <Upload text="Прикрепить документ, подтверждающий ученую степень"/>
                        )}
                    </FormItem>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr2}
            </div>
            );
    };

    addDp3 = (id) => {
        this.setState({educatBlock:3, idCurrentDegree: id})
    };

    renderDp3 = (getFieldDecorator) =>{
        let dpArr3 = [];
        if(this.state.educatBlock === 3) {
            dpArr3.push(
                <div className="personal-item" key={this.state.educatBlock}>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('changeDegreeField', {
                            rules: [{
                                required: true,
                                message: 'Введите ученую степень'
                            }],
                        })(
                            <Select placeholder="Ученая степень">
                              <Option value="Пункт 1">Пункт 1</Option>
                              <Option value="Пункт 2">Пункт 2</Option>
                              <Option value="Пункт 3">Пункт 3</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('uploadDegree', {
                        })(
                            <Upload text="Прикрепить документ, подтверждающий ученую степень"/>
                        )}
                    </FormItem>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr3}
            </div>
            );
    };
    addDp4 = () => {
        this.setState({educatBlock:4})
    };

    renderDp4 = (getFieldDecorator) =>{
        let dpArr4 = [];

        if(this.state.educatBlock === 4) {
            dpArr4.push(
                <div className="personal-item" key={this.state.educatBlock}>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('addDegreeField', {
                            rules: [{
                                required: true,
                                message: 'Введите ученую степень'
                            }],
                        })(
                            <Select >
                              <Option value="Пункт 1">Пункт 1</Option>
                              <Option value="Пункт 2">Пункт 2</Option>
                              <Option value="Пункт 3">Пункт 3</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem className="personal-item" >
                        {getFieldDecorator('uploadAddDegree', {
                        })(
                            <Upload text="Прикрепить документ, подтверждающий ученую степень"/>
                        )}
                    </FormItem>
                </div>
            )
        }
        return (
            <div className="new-d">
                {dpArr4}
            </div>
            );
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        const {arrayMainInstitution,  arraySecondInstitution,  arrayDegree} = this.props.profileDoctor;
        const rootClass = cn('personal-education');

        const instituions = arrayMainInstitution.map((elem) => {
            return (
                <div key={elem.id} className="personal-item mb-35">
                    <div className="personal-info">{elem.mainInstitution}, {elem.mainDateStart}-{elem.mainDateEnd}</div>
                    <div className="personal-info">{elem.mainSpecialty}</div>
                </div> );
        });
        const instituionsSecond = arraySecondInstitution.map((elem) => {
            return (
                <div key={elem.id} className="personal-item pb-25 mb-35 brd-b brd-d">
                    <div className="personal-info">{elem.secondInstitution}, {elem.dateStart}-{elem.dateEnd}</div>
                    <div className="personal-info">{elem.secondSpecialty}</div>
                </div> );
        });


        const degrees = arrayDegree.map((elem) => {
            return (
                <div key={elem.id} className="personal-item mb-35">
                    <div className="personal-info">{elem.degree}</div>
                    <Button onClick={() => this.addDp3(elem.id)}
                            className="personal-edit"
                            size='small'
                            type='blue-float'
                            icon='setting_edit'
                            iconSize={17}
                            svg
                        />
                </div> );
        });

        return (
                <Form className={rootClass} onSubmit={this.handleSubmit}>
                    <div className="personal-block">
                        <div className="personal-item">
                            <div className="personal-title">Основное образование</div>
                        </div>

                        {instituions}

                        <div className="personal-item">
                             <Button onClick={this.addDp}
                                className="personal-btn"
                                btnText='Добавить'
                                size='small'
                                type='no-brd'
                                icon='plus'
                                iconSize={11}
                                svg
                            />
                        </div>
                        {this.renderDp(getFieldDecorator)}
                    </div>

                    <div className="personal-block">
                        <div className="personal-item">
                            <div className="personal-title">Последипломное образование</div>
                        </div>
                        {instituionsSecond}

                        <div className="personal-item">
                             <Button onClick={this.addDp2}
                             className="personal-btn"
                                btnText='Добавить'
                                size='small'
                                type='no-brd'
                                icon='plus'
                                iconSize={11}
                                svg
                            />
                        </div>
                        {this.renderDp2(getFieldDecorator)}
                    </div>

                    <div className="personal-block">
                        <div className="personal-item">
                            <div className="personal-title">Ученая степень</div>
                        </div>
                        {degrees}
                        {this.renderDp3(getFieldDecorator)}
                    </div>

                    <div className="personal-block">
                        <div className="personal-item">
                             <Button onClick={this.addDp4}
                             className="personal-btn"
                                btnText='Добавить ученое звание'
                                size='small'
                                type='no-brd'
                                icon='plus'
                                iconSize={11}
                                svg
                            />
                        </div>
                        {this.renderDp4(getFieldDecorator)}
                    </div>
                    <div className="personal-block">
                        <Button
                            htmlType="submit"
                            btnText='Сохранить изменения'
                            size='default'
                            type='float'
                        />
                    </div>
                </Form>
        )
    }
}

const PersonalEducationItem  = Form.create()(PersonalEducationItemForm);

PersonalEducationItem.propTypes = {
    profileDoctor: PropTypes.object
};

PersonalEducationItem.defaultProps = {
    profileDoctor: {}
};

export default PersonalEducationItem