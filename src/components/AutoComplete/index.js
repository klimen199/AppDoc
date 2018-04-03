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
            inputFocus: false,
            itemFocus: false,
            
            searchRes: this.props.data,
        }
        this.input;
    }

    searchHandler = (e) => {
        let search = () => {
            this.setState({inputFocus: true});
            let str = (e.target.value).toLowerCase();
            let newArr = this.props.data.filter(elem => {
                console.log(str.split(' ').length > 1 )
                return str.split(' ').length === 1 
                    ? search1word(elem, str)
                    : searchSeveralWords(elem, str);
                
            })
    
            this.setState({searchRes: newArr})

            function search1word(elem, str){
                let fioArr = elem.name.toLowerCase().split(' ');
                for (let i =0, len = fioArr.length; i < len; i++){
                    if(fioArr[i].indexOf(str) === 0){
                        return true;
                    }
                }
            }
            function searchSeveralWords(elem, str){
                let searchArr = str.split(' ');
                for(let j = 0, len = searchArr.length; j < len; j++){
                    if (!search1word(elem, searchArr[j])){
                        return false;
                    }
                    else if(j == len - 1) return true;
                }
                
            }
        }

        e.target.value.length > 0 
            ? search() 
            : this.setState({
                inputFocus: false,
                searchRes: this.props.data,
            });
        
       

        
    }


    patientsRender = (dataArr) => {
        let patientsArr = [];

        dataArr.map((item, index) => {
            patientsArr.push(<AddNewPatientItem {...item} 
                                                isSearchItem={true}
                                                onAdd = {(id) => {this.props.onAdd(id)}}
                                                key={item.id + ''+index}/>)
        });

        return patientsArr;
    };

    render() {
        
        const { data, collapsed} = this.props;
        const rootClass = cn('auto__complete');
        const resultClass = (this.state.itemFocus || this.state.inputFocus)? 'auto__complete-result auto__complete-result-focus' : 'auto__complete-result';

        console.log(this.state.inputFocus, this.state.itemFocus)

        return (
            <div className={rootClass}>
                <div className='auto__complete-search'>
                    <Input 
                        placeholder='Поиск'
                        onChange={(e) => this.searchHandler(e)}
                        onBlur={()=> {
                            console.log('input blur')
                            //this.setState({inputFocus: false})
                        }}
                        ref = {inp => {this.input = inp}}
                       
                    />
                </div>
                <div className={resultClass}

                    
                    onBlur={()=> {
                        console.log('items blur')
                        this.setState({itemFocus: false})
                    }}
                    onFocus={() => {
                        console.log('items focus')
                        this.setState({itemFocus: true})
                    }}
                >
                    <div className='auto__complete-title' onClick={() => {
                            this.input.setFocus(true)
                        }}>
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