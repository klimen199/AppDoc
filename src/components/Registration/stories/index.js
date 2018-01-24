import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';

import RegistrationForm from '../';

storiesOf('Registration', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('Registration', () => (
        <div>
            <RegistrationForm onSubmit={action('Submit values:')}/>
        </div>
    ))