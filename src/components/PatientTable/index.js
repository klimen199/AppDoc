import React from 'react';
import PropTypes from 'prop-types'

import PatientTableItem from '../PatientTableItem'
import Card from '../Card'
import Button from '../Button'
import Input from '../Input'
import ScrollArea from 'react-scrollbar'
import {search} from '../../helpers/searching'
import './style.css'
import '../../icon/style.css'


class PatientTable extends React.Component{
    state = {
        searchRes: this.props.data,
        filtered: false,
    };

    

    componentWillReceiveProps(nextProps){
        this.setState({
            searchRes: nextProps.data,
        })
    }

    onInputChange = (e) => {

        e.target.value.length > 0 
            ? (this.setState({
                searchRes: search(e.target.value, this.props.data),
            }))
            : this.setState({
                searchRes: this.props.data,
            });
    }

    patinetRender = (dataArr) => {
        let patientArr = [];

        dataArr.map((item,index) => {
            patientArr.push(<PatientTableItem key={index} 
                                            onGoto={this.props.onGoto}
                                            onDelete={this.props.onDelete} 
                                            onNewVisit={this.props.onNewVisit}
                                            onNewMessage={this.props.onNewMessage}
                                            setModal1Visible={this.props.setModal1Visible}
                                            setModal2Visible={this.props.setModal2Visible}
                                            onChangeDate={this.props.onChangeDate}
                                            availableArea={this.props.availableArea}

                                            {...item}/>)
        });

        return patientArr;
    }

    render(){
        const { data } = this.props;

        return (
            <div className='patient-all'>
                <Card title="Список пациентов" extra={<div className='patient-count'>{data.length}</div>}>
                    <ScrollArea
                            speed={1}
                            className="patient-list"
                            contentClassName="content"
                    >
                        <div className="tableheader">
                            <div className="flex-col">
                                <Button
                                    onClick = {this.props.onAdd} 
                                    btnText='Добавить'
                                    size='default'
                                    type='yellow'
                                    icon='plus'
                                    iconSize={11}
                                    svg
                                />
                            </div>
                            <div className="flex-col ico-btn">
                                <Input.Search
                                    placeholder="Поиск..."
                                    onChange={this.onInputChange}
                                    onSearch={e => this.props.onSearch(e)}
                                />
                            </div>
                        </div>
                        {this.patinetRender(this.state.searchRes)}
                    </ScrollArea>
                  </Card>
            </div>
        )
    }
}

PatientTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    availableArea: PropTypes.array,
    onAdd: PropTypes.func,
    onSearch: PropTypes.func,
    onGoto: PropTypes.func,
    onChangeDate:  PropTypes.func,
};

PatientTable.defaultProps = {
    data: [],
    availableArea: [], 
    onAdd: () => {},
    onSearch: () => {},
    onGoto: () => {},
    onChangeDate: () => {},
};

export default PatientTable