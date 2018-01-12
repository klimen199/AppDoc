import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableNoHeadItem from '../';

storiesOf('TableNoHeadItem', module)
    .add('TableNoHeadItem', () => (
        <div>
            <TableNoHeadItem 
                name="Иванова А. К." 
                infoText="Консультация по результатам анализа крови." 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                time="08:15"
                type='chat1'
            />
        </div>
    ))