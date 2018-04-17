import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatSend from '../';

storiesOf('ChatSend', module)
    .add('default', () => (
        <div>
            <ChatSend send={message => console.log(message)}
                        disable={true}
                        closeVisit = {() => console.log('close visit')}
            />
        </div>
    ))