import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import TextArea from '../TextArea'
import Upload from '../Upload'
import DatePicker from '../DatePicker'
import Button from '../Button'

import Content from './content'

import './styles.css'

class CancelVisitModal extends React.Component{
    /*constructor(props){
        super(props);
        const {rangeSet} = props;

        this.state = {
            dpNum: rangeSet.length || 1,
        }
    }*/

    /*addDp = () => {
        const {dpNum} = this.state;
        if(dpNum< this.props.limit)
            this.setState({dpNum:(dpNum+1)})
    };

    filterRangeSet = (order) => {
        const {rangeSet} = this.props;
        if (!rangeSet)
            return {};
        if (Array.isArray(rangeSet)){
            return rangeSet[order];
        }
        if (typeof rangeSet === "object" && order === 0){
            return rangeSet;
        }
    };

    renderDp = () =>{
        let dpArr = [];
        for(let i =0; i<this.state.dpNum;i++){
            dpArr.push(<DatePicker range
                                   rangeSet={this.filterRangeSet(i)}
                                   ref={dp => this['dp'+i] = dp}
                                   delimiter='&mdash;'
                                   key={i}/>)
        }
        return (
            <div className="cancelVisitModal-datepickers">
                {dpArr}
            </div>
        );
    };

    onSaveHandler = () => {

        console.log(this.ta.state.value)
        for (let i =0; i <this.state.dpNum; i++)
            console.log(this['dp'+i])
        this.props.onSave();
    };*/

    render(){
        const {visible} = this.props;

        return (
            <Modal title='Отмена приема'
                   visible={visible}>
                <Content {...this.props}/>

                {/*<div className='cancelVisitModal'>
                    <TextArea label='Причина отмены'
                              ref = {ta => this.ta = ta}
                              className="cancelVisitModal-txtarea"/>
                    <Upload className="cancelVisitModal-upload" text="Прикрепить файл"/>
                    {this.renderDp()}
                    <Button onClick={this.addDp}
                            className='cancelVisitModal-dpAdd'
                            btnText='Добавить интервал'
                            size='file'
                            type='file'
                            icon='add-button'
                            svg
                    />
                    <Button onClick={this.onSaveHandler}
                            size='default'
                            btnText='Сохранить'
                            type='float'/>
                </div>*/}
            </Modal>
        )
    }
}

CancelVisitModal.propTypes = {
    visible: PropTypes.bool,
    limit: PropTypes.number,
    rangeSet:
        PropTypes.arrayOf(PropTypes.shape({
            defaultStartValue: PropTypes.object,
            placeholderStart: PropTypes.string,
            defaultEndValue: PropTypes.object,
            placeholderEnd: PropTypes.string,
        })),
    onSave: PropTypes.func,
};

CancelVisitModal.defaultProps = {
    visible: false,
    limit: 5,
    rangeSet: [],
    onSave: () => {},
};

export default CancelVisitModal;