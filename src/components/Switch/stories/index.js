import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Switch from '../';

storiesOf('Switch', module)
    .add('with text', () => (
        <div>
           <Switch onChange={action('Switched')}/>
        </div>
    ))