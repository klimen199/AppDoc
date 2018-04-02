import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import ScrollArea from 'react-scrollbar'
import AddNewPatientItem from '../AddNewPatientItem'
import Input from '../Input'
import Icon from '../Icon'
import './style.css'

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            onFocus: false,
            searchString: ""
        }
    }

    focusHandler = (isFocused) => {
        this.setState(prev => ({onFocus: isFocused}))
    };

    searchHandler = () => {

    }


    patientsRender = (dataArr) => {
        let patientsArr = [];

        dataArr.map((item, index) => {
            patientsArr.push(<AddNewPatientItem {...item} 
                                                isSearchItem={true}
                                                onAdd = {(id) => {this.props.onAdd(id); this.focusHandler(false)}}
                                                key={item.id + ''+index}/>)
        });

        return patientsArr;
    };

    render() {
        
        const { data, collapsed} = this.props;
        const rootClass = cn('auto__complete');
        const resultClass = this.state.onFocus ? 'auto__complete-result auto__complete-result-focus' : 'auto__complete-result';

        return (
            <div className={rootClass} 
                onFocus={(e) => console.log(e.target)}
            >
                <div className='auto__complete-search'>
                    <Input 
                        placeholder='Поиск'
                        onChange={this.searchHandler}
                       
                    />
                </div>
                <div className={resultClass}>
                    <div className='auto__complete-title'>Результаты поиска <span className='auto__complete-count'>{data.length}</span></div>
                    <ScrollArea
                            speed={1}
                            className="auto__complete-list"
                            contentClassName="content"
                            horizontal={false}
                    >
                        {this.patientsRender(this.props.data)}
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