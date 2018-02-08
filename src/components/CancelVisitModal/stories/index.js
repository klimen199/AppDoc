import React from 'react';
import { storiesOf } from '@storybook/react';
import CancelVisitModal from '../';
import moment from 'moment';


storiesOf('Modal - CancelVisitModal', module)
    .add('modal', () => (
        <div>
            <CancelVisitModal visible={true}
                              onSave={e => console.log(e)}/>
        </div>
    ));
