import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileAvatar from '../';

storiesOf('ProfileAvatar', module)
    .add('online / offline', () => (
        <div>
            <p>owner='patient' online / ofline</p>
            <ProfileAvatar img='https://24smi.org/public/media/resize/660x-/person/2017/10/25/cdRRFH0JWoYv_supermen.jpg'
                           owner='patient'
                           online/>
            <ProfileAvatar img='https://24smi.org/public/media/resize/660x-/person/2017/10/25/cdRRFH0JWoYv_supermen.jpg'
                           owner='patient'/>
            <p>owner='doctor' online / offline</p>
            <ProfileAvatar img='https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3036143-poster-p-1-5-strategies-for-big-picture-thinking.png'
                           owner='doctor'/>
            <ProfileAvatar img='https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3036143-poster-p-1-5-strategies-for-big-picture-thinking.png'
                           owner='doctor'
                           online/>
        </div>
    ));