import React from 'react'
import { Input as AntInput} from 'antd'
import './style.css'


class Input extends AntInput{
    constructor(props){
        super(props);
        this.state ={
            onFocus: false,
        }
    }

    focusHandler = (isFocused) => {
        this.setState(prev => ({onFocus: isFocused}))
    };

    render() {
        const rootCl = this.state.onFocus ? 'input-root-focus' : 'input-root';

        return (
            <div onFocus={() => this.focusHandler(true)}
                 onBlur={() => this.focusHandler(false)}
                 className={rootCl}>
                <AntInput {...this.props}/>
            </div>
        )
    }
}

export default Input