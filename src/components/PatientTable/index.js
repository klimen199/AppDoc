import React from 'react';
import PropTypes from 'prop-types'

import PatientTableItem from '../PatientTableItem'
import Card from '../Card'
import Button from '../Button'
import Input from '../Input'

import './style.css'
import '../../icon/style.css'


class PatientTable extends React.Component{
    state = {
        patientArr: [],
        searchText: '',
        filtered: false,
    };

    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    }
    onSearch = () => {
        const { searchText } = this.state;
        console.log(searchText)
        const reg = new RegExp(searchText, 'gi');
        this.setState({
            filtered: !!searchText,
            patientArr: this.props.data.map((record) => {
                const match = record.name.match(reg);
                if (!match) {
                    return null;
                }
                return {
                    ...record,
                    name: (
                    <span>
                        {record.name.split(reg).map((text, i) => (
                            i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
                        ))}
                    </span>
                ),
                };
            }).filter(record => !!record),
        });
    }

    patinetRender = (dataArr) => {
        let patientArr = [];

        dataArr.map((item,index) => {
            patientArr.push(<PatientTableItem key={index} {...item}/>)
        });

        return patientArr;
    }

    render(){
        const { data } = this.props;

        return (
            <div className='patient-all'>
                <Card title="Список пациентов" extra={<div className='patient-count'>{data.length}</div>}>
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
                                ref={ele => this.searchInput = ele}
                                placeholder="Поиск..."
                                value={this.state.searchText}
                                onChange={this.onInputChange}
                                onPressEnter={this.onSearch}
                            />
                        </div>
                    </div>
                    {this.patinetRender(this.props.data)}
                  </Card>
            </div>
        )
    }
}

PatientTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    onAdd: PropTypes.func,
};

PatientTable.defaultProps = {
    data: [],
    onAdd: () => {},
};

export default PatientTable