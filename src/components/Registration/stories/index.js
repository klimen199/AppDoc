import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';

import RegistrationForm from '../';

import {langs, payments} from './mock-data'

storiesOf('Registration', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('Registration', () => (
        <div>
            <RegistrationForm onFinish={action('Submit values:')}
                              langs={langs}
                              payments={payments}
                              academicTitle = {[]}
                              finalText='Финальный текст для Checkbox'
            />
        </div>
    ))