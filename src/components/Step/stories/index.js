import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import App from '../'



storiesOf('App', module)
    .add('basic', () => (
	 <div>
		  <App/>
      </div>
    ))