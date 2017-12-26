import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../';

storiesOf('Inputs', module)
    .add('Search', () => (
        <div>
           <Input.Search
		      placeholder="Поиск..."
		    />
        </div>
    ))