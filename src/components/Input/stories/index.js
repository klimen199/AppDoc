import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../';
const { TextArea } = Input;
storiesOf('Inputs', module)
    .add('Search', () => (
        <div>
           <Input.Search
		      placeholder="Поиск..."
		      onSearch={action('onSearch')}
		    />
        </div>
    ))
    .add('Input', () => (
		<div>
			<Input addonAfter="After" addonBefore='Before'/>
			<Input placeholder="Enter smth" />
		</div>
    ));
