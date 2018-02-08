import React from 'react';
import {storiesOf} from '@storybook/react';
import NewVisitModal from '../';

const patients = [{
        name: 'name1'
    }, {
        name: 'name2'
    }, {
        name: 'name3'
    },];

storiesOf('Modal - NewVisitModal', module)
    .add('modal', () => (
        <div>
            <NewVisitModal visible={true}
                           userName='Петров-Иванов Александр Константинович'
                           date={new Date(2018,1,4,8,10)}
                           patients={patients}
                           onSave = {(obj) => console.log(obj)}
            />
        </div>
    ));