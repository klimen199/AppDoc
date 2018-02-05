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
                                  defaultStartValue: moment('11.11.2017', 'DD.MM.YYYY'),
                              },{
                                  placeholderStart: 'Начало',
                                  defaultEndValue: moment('11.11.2017', 'DD.MM.YYYY'),
                              }]}
                              userName='Петров-Иванов Александр Константинович'/>
        </div>
    ));