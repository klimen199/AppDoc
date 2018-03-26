import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatDialog from '../';

storiesOf('ChatDialog', module)
    .add('extra', () => (
        <div>
            <ChatDialog 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                name="Иванова А. К." 
                consultation="Консультация по результатам анализа..." 
                time="15:00"
                status='extra'
                iconType='chat1'
                onGoto={() => console.log('eee')}
            />
        </div>
    ))
    .add('soon', () => (
        <div>
            <ChatDialog 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                name="Иванова А. К." 
                consultation="Консультация по результатам анализа..." 
                time="через 10 мин"
                status='soon'
                iconType='chat1'
            />
        </div>
    ))

    .add('default', () => (
        <div>
            <ChatDialog 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                name="Иванова А. К." 
                consultation="Консультация по результатам анализа..." 
                time="15:00"
                status='default'
                iconType='chat1'
            />
        </div>
    ))