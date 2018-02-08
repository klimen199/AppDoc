import React from 'react';
import { storiesOf } from '@storybook/react';
import CancelVisitModal from '../';
import moment from 'moment';


storiesOf('Modal - CancelVisitModal', module)
    .add('modal', () => (
        <div>
            <CancelVisitModal visible={true}
                              rangeSet = {[{
                                  placeholderStart: 'Начало',
                                  defaultEndValue: moment('12.12.2017', 'DD.MM.YYYY'),
                                  defaultStartValue: moment(new Date(2017,11,11)),
                              },{
                                  placeholderStart: 'Начало',
                                  defaultEndValue: moment('11.11.2017', 'DD.MM.YYYY'),
                              }]}
                              onSave={e => console.log(e)}/>
        </div>
    ));