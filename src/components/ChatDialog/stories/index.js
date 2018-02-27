import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatDialog from '../';

storiesOf('ChatDialog', module)
    .add('samples', () => (
        <div>
            <ChatDialog 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                name="Иванова А. К." 
                consultation="Консультация по результатам анализа..." 
                time={Date.now()}
                isExtra
                iconType='chat1'
            />
            <ChatDialog 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                name="Иванова А. К." 
                consultation="Консультация по результатам анализа..." 
                time={new Date(2018,1,26,14,40).getTime()}
                iconType='chat1'
            />
            <ChatDialog 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                name="Иванова А. К." 
                consultation="Консультация по результатам анализа..." 
                time={new Date(2018,1,27,12,10).getTime()}
                iconType='chat1'
            />
        </div>
    ))

    