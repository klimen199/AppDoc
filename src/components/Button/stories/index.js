import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../';

storiesOf('Button', module)
    .add('with text', () => (
        <div>
            <Button onClick={action('clicked')}
                    btnText='its a btn'
                    size='large'
                    icon='bulb'
            />
            <br/>
            <Button onClick={action('clicked')}
                    btnText='its a btn'
                    size='default'
                    type="primary"
                    icon='bulb'
            />
            <br/>
            <Button onClick={action('clicked')}
                    btnText='its a btn'
                    size='small'
                    disable
            />
        </div>
    ))