import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import Icon from '../Icon'
import TextArea from '../TextArea'
import Upload from '../Upload'
import DatePicker from '../DatePicker'
import Button from '../Button'
import './styles.css'

class CancelVisitModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dpNum: 1,
        }
    }

    addDp = () => {
        const {dpNum} = this.state;
        if(dpNum<4)
            this.setState({dpNum:(dpNum+1)})
    };

    renderDp = () =>{
        let dpArr = [];
        for(let i =0; i<this.state.dpNum;i++){
            dpArr.push(<DatePicker range delimiter='&mdash;' key={i}/>)
        }
        return (
            <div className="cancelVisitModal-datepickers">
                {dpArr}
            </div>
        );
    };

    render(){
        const {visible, userName} = this.props;

        return (
            <Modal title='Отмена приема'
                   visible={visible}>
                <div className='cancelVisitModal'>
                    <div className="cancelVisitModal-user">
                        <div className="cancelVisitModal-user-icon">
                            <Icon type="user" size={24}/>
                        </div>
                        <div className="cancelVisitModal-user-name">
                            {userName}
                        </div>
                    </div>
                    <TextArea label='Текст сообщения' className="cancelVisitModal-txtarea"/>
                    <Upload className="cancelVisitModal-upload"/>
                    {this.renderDp()}
                    <Button onClick={this.addDp}
                            className='cancelVisitModal-dpAdd'
                            btnText='Добавить интервал'
                            size='file'
                            type='file'
                            icon='add-button'
                            svg
                    />
                    <Button size='default'
                            btnText='Сохранить'
                            type='float'/>
                </div>
            </Modal>
        )
    }
}

CancelVisitModal.propTypes = {
    visible: PropTypes.bool,
    userName: PropTypes.string,
};

CancelVisitModal.defaultProps = {
    visible: false,
    userName: '',
};

export default CancelVisitModal;