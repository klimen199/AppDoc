import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button';

import './style.css'
import '../../icon/style.css'

class RadioIcon extends React.Component{

    render(){
        const rootClass = cn('radio-group');

        return (
            <div className={rootClass}>
            	<label>
            		<input id="first" name="radioIcon" type="radio" className="radio-input" />
            		<Button
            			btnText=''
	                    size='icon'
	                    type='icon'
	                    icon='telephone'
	                    svg
	                    iconSize={16}
		            />
            	</label>
            	<label>
            		<input id="second" name="radioIcon" type="radio" className="radio-input" />
            		<Button
            			btnText=''
	                    size='icon'
	                    type='icon'
	                    icon='video-camera'
	                    svg
	                    iconSize={16}
		            />
            	</label>
            	<label>
            		<input id="third" name="radioIcon" type="radio" className="radio-input" />
            		<Button
            			btnText=''
	                    size='icon'
	                    type='icon'
	                    icon='chat1'
	                    svg
	                    iconSize={16}
		            />
            	</label>
            </div>
        )
    }
}

export default RadioIcon