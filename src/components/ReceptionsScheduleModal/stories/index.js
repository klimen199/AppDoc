import React from 'react';
import { storiesOf } from '@storybook/react';
import ReceptionsScheduleModal from '../';
import moment from 'moment'

const options = ['1',2,3,'4']

// дата обязательно через moment(new Date(2017,11,11))

storiesOf('Modal - ReceptionsScheduleModal', module)
    .add('modal', () => (
        <div>
            <ReceptionsScheduleModal visible={true}
                                     dateSet={{
                                             defaultEndValue: moment(new Date(2017,11,11)),
                                             defaultStartValue: moment(new Date(2017,11,11))
                                         }}
                                     timeSetCall = {[
                                         {
                                             defaultEndValue: moment(new Date(2017,11,11,14,50), "YYYY-MM-DD HH:mm"),
                                             defaultStartValue: moment(new Date(2017,11,11,14,55), "YYYY-MM-DD HH:mm"),
                                         },{
                                         defaultEndValue: moment("2017-10-20 14:30", "YYYY-MM-DD HH:mm"),
                                         defaultStartValue: moment("2017-10-20 14:40", "YYYY-MM-DD HH:mm"),
                                     }
                                     ]}
                                     timeSetReception= {[
                                         {
                                             defaultEndValue: moment("2017-10-20 15:50", "YYYY-MM-DD HH:mm"),
                                             defaultStartValue: moment("2010-10-20 15:55", "YYYY-MM-DD HH:mm"),
                                         },{
                                             defaultEndValue: moment("2017-10-20 16:30", "YYYY-MM-DD HH:mm"),
                                             defaultStartValue: moment("2017-10-20 16:40", "YYYY-MM-DD HH:mm"),
                                         }
                                     ]}
                                     selOptions={options}/>
        </div>
    ));