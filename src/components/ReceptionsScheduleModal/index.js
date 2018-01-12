import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'
import DatePicker from '../DatePicker'
import Tabs from '../Tabs'
import TimePicker from '../TimePicker'
import Radio from '../Radio'
import Select from '../Select'
import Checkbox from '../Checkbox'
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
            </div>
        )
    };

    renderOptions = (selOptions) => {
        let options = [];
        selOptions.map((el) => {
            options.push(<Option value={el}>{el}</Option>)
        });

        return options;
    };

    render(){
        const {visible, onSave, selOptions} = this.props;

        return (
            <Modal title='График приемов'
                   visible={visible}>
                <div className='receptionsScheduleModal'>
                    <DatePicker range
                                delimiter='&mdash;'/>
                    <Tabs defaultActiveKey="1" className="receptionsScheduleModal-tabs">
                        <Tabs.TabPane tab="Плановые приемы" key="1">
                            {this.renderTpBlock('reception')}
                            <Radio icons={['telephone', "video-camera", 'chat1']}/>
                            <Select placeholder="Длительность приема">
                                {this.renderOptions(selOptions)}
                            </Select>
                            <Button onClick={() => {}}
                                    btnText='Добавить интервал'
                                    iconSize={30}
                                    size='file'
                                    type='file'
                                    icon='add-button'
                                    svg/>
                            <Checkbox>Выходной</Checkbox>
                        </Tabs.TabPane>

                        <Tabs.TabPane tab="Экстренные вызовы" key="2">
                            {this.renderTpBlock('call')}
                            <Button onClick={() => this.addTp('call')}
                                    btnText='Добавить интервал'
                                    iconSize={30}
                                    size='file'
                                    type='file'
                                    icon='add-button'
                                    svg
                            />
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
    selOptions: PropTypes.arrray,
};

ReceptionsScheduleModal.defaultProps = {
    visible: false,
    onSave: () => {},
    selOptions: [],
};

export default ReceptionsScheduleModal;