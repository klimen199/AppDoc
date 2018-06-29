import React from 'react';
import {storiesOf} from '@storybook/react';
import NewVisitModal from '../';

const patients = [{
        id: 1,
        name: 'name1'
    }, {
        id: 2,
        name: 'name2'
    }, {
        id: 3,
        name: 'name3'
    },];

storiesOf('Modal - NewVisitModal', module)
    .add('modal', () => (
        <div>
            <NewVisitModal visible={true}
                           userName='Петров-Иванов Александр Константинович'
                           date={new Date(2018,1,4,8,10)}
                           patients={patients}
                           isChoosebleTime={true}
                           onSave = {(obj) => console.log(obj)}
                            availableArea={[
         {
             from:1395954000000,
             to:1395954000000-1,
         }
     ]}
            />
        </div>
    ));