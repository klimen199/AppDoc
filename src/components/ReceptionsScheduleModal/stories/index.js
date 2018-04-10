import React from 'react';
import {storiesOf} from '@storybook/react';
import ReceptionsScheduleModal from '../';
import moment from 'moment'

const options = ['1', 2, 3, '4']

// дата обязательно через moment(new Date(2017,11,11))

storiesOf('Modal - ReceptionsScheduleModal', module)
    .add('modal', () => (
        <div>
            <ReceptionsScheduleModal
                visible={true}
                dateSet={{
                    defaultEndValue: moment(new Date(2017, 11, 15)),
                    defaultStartValue: moment(new Date(2017, 11, 10))
                }}
                timeSetCall={[
                    {
                        defaultStartValue: moment(new Date(2016, 11, 11, 14, 55), "YYYY-MM-DD HH:mm"),
                        defaultEndValue: moment(new Date(2017, 11, 11, 11, 50), "YYYY-MM-DD HH:mm"),
                    },
                    {
                        defaultStartValue: moment(new Date(2016, 11, 11, 14, 55), "YYYY-MM-DD HH:mm"),
                        defaultEndValue: moment(new Date(2017, 11, 11, 11, 50), "YYYY-MM-DD HH:mm"),
                    }
                ]}
                
                selOptions={options}
                onSave={(obj) => console.log(obj)}
            />
        </div>
    ));