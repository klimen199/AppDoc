import React from 'react';
import { storiesOf } from '@storybook/react';
import CompleteAppealModal from '../';

storiesOf('Modal - CompleteAppealModal', module)
    .add('CompleteAppealModal', () => (
        <div>
            <CompleteAppealModal/>
        </div>
    ));