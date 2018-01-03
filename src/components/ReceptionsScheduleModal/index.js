import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import DatePicker from '../DatePicker'
import Tabs from '../Tabs'
import TimePicker from '../TimePicker'
import Button from '../Button'
import './styles.css'

class ReceptionsScheduleModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tpNum:{
                'reception': 1,
                'call': 1,
            }
        }
    }

    addTp = (tab) => {
        const n = this.state.tpNum[tab];
        let tpNum = this.state.tpNum;
        if(n<4){
            tpNum[tab] = n+1;
            this.setState({tpNum})
        }
    };

    renderTp = (tab) =>{
        let tpArr = [];
        const tpNum = this.state.tpNum[tab];
        for(let i =0; i<tpNum;i++){
            tpArr.push(<TimePicker range delimiter='&mdash;' key={i}/>)
        }
        return (
            <div className="receptionsScheduleModal-timepickers">
                {tpArr}
            </div>
        );
    };

    renderTpBlock = (tab) => {
        return (
            <div>
                <div className="receptionsScheduleModal-tabs-title">
                    Интервал рабочего времени
                </div>
                {this.renderTp(tab)}
                <Button onClick={() => this.addTp(tab)}
                        btnText='Добавить интервал'
                        size='file'
                        type='file'
                        icon='add-button'
                        svg
                />
            </div>
        )
    };

    render(){
        const {visible, onSave} = this.props;

        return (
            <Modal title='График приемов'
                   visible={visible}>
                <div className='receptionsScheduleModal'>
                    <DatePicker range
                                delimiter='&mdash;'/>
                    <Tabs defaultActiveKey="1" className="receptionsScheduleModal-tabs">
                        <Tabs.TabPane tab="Плановые приемы" key="1">
                            {this.renderTpBlock('reception')}
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Экстренные вызовы" key="2">
                            {this.renderTpBlock('call')}
                        </Tabs.TabPane>
                    </Tabs>
                    <Button onClick={onSave}
                            btnText='Сохранить'
                            size='default'
                            type='float'
                    />
                </div>
            </Modal>
        )
    }
}

ReceptionsScheduleModal.propTypes = {
    visible: PropTypes.bool,
    onSave: PropTypes.func,
};

ReceptionsScheduleModal.defaultProps = {
    visible: false,
    onSave: () => {},
};

export default ReceptionsScheduleModal;