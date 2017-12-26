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
			<div style={{ padding: 16 }}>
				<Input addonBefore="Email" />
			</div>
		</div>
    ))
    .add('TextArea', () => (
		<div>
			<div style={{ padding: 16 }}>
				<TextArea rows={4} />
			</div>
		</div>
    ))