import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatVideoPanel from '../';

storiesOf('ChatVideoPanel', module)
    .add('default', () => (
        <div>
            <ChatVideoPanel  duration='00:00:34' onStop={()=>console.log('eeeee')} isCalling={false}/>
            <ChatVideoPanel  duration='00:00:34' onStop={()=>console.log('eeeee')} isCalling={true}/>
        </div>
    ))