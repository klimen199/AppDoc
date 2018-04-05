import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ScrollArea from 'react-scrollbar'
import AddNewPatientItem from '../AddNewPatientItem'
import Input from '../Input'
import Icon from '../Icon'
import {search} from '../../helpers/searching'
import './style.css'

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isVisible: false,

            inputFocus: false,
            itemFocus: false,
            
            searchRes: this.props.data,
        }
        this.input;
    }

    searchHandler = (e) => {

        e.target.value.length > 0 
            ? (this.setState({
                isVisible: true, 
                searchRes: search(e.target.value, this.props.data),
            }))
            : this.setState({
                isVisible: false,
                searchRes: this.props.data,
            });
    }

    onAddHandler = (id) => {
        let user;
        this.state.searchRes.some((el, i) => {
            (el.id === id) ? user = el : null;
            return el.id === id;
        })

        this.input.inp.input.value = user.name;
        this.input.setFocus(true);
        this.props.onAdd(id);
        this.setState({isVisible: false})
    }


    patientsRender = (dataArr) => {
        let patientsArr = [];

        dataArr.map((item, index) => {
            patientsArr.push(<AddNewPatientItem {...item} 
                                                isSearchItem={true}
                                                onAdd = {(id) => {this.onAddHandler(id)}}
                                                key={item.id + ''+index}/>)
        });

        return patientsArr;
    };

    render() {
        
        const { data, collapsed} = this.props;
        const rootClass = cn('auto__complete');
        const resultClass = (this.state.isVisible)? 'auto__complete-result auto__complete-result-focus' : 'auto__complete-result';


        return (
            <div className={rootClass}>
                <div className='auto__complete-search'>
                    <Input 
                        placeholder='Поиск'
                        onChange={(e) => this.searchHandler(e)}
                        ref = {inp => {this.input = inp}}
                    />
                </div>
                <div className={resultClass}>
                    <div className='auto__complete-title'>
                        Результаты поиска 
                        <span className='auto__complete-count'>{this.state.searchRes.length}</span>
                    </div>
                    <ScrollArea
                            speed={1}
                            className="auto__complete-list"
                            contentClassName="content"
                            horizontal={false}
                    >
                        {this.patientsRender(this.state.searchRes)}
                    </ScrollArea>
                </div>
            </div>
        )
    }
}

AutoComplete.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

AutoComplete.defaultProps = {
    data: [],
};

export default AutoComplete