import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import StorybookStylesProvider from './StorybookStylesProvider'

const styles = {
    padding: 15,
}

const LocalProviderDecorator = story => (
    <div style={styles}>
        <StorybookStylesProvider>{story()}</StorybookStylesProvider>
    </div>
);

const loadStories = () => {
    addDecorator(LocalProviderDecorator);

    require('../src/components/Arrow/stories');
    require('../src/components/Button/stories');
    require('../src/components/Checkbox/stories');
    require('../src/components/Input/stories');
    require('../src/components/Select/stories');
    require('../src/components/Switch/stories');
    require('../src/components/SwitchPanel/stories');
    require('../src/components/DatePicker/stories');
    require('../src/components/Modal/stories');
    require('../src/components/CompleteAppeal/stories');
    require('../src/components/Rate/stories');
    require('../src/components/RatePanel/stories');
    require('../src/components/TextArea/stories');
    require('../src/components/Icon/stories');
    require('../src/components/Tabs/stories');
    require('../src/components/CancelVisitModal/stories');
    require('../src/components/Upload/stories');
    require('../src/components/NewMessageModal/stories');
    require('../src/components/TimePicker/stories');
    require('../src/components/Links/stories');
    require('../src/components/Popover/stories');
    require('../src/components/TopPanel/stories');
    require('../src/components/TopPanelItem/stories');
    require('../src/components/ReceptionsScheduleModal/stories');
    require('../src/components/ProfileAvatar/stories');
    require('../src/components/DoctorProfileCard/stories');
    require('../src/components/CompletionReceptionModal/stories');
    require('../src/components/Review/stories');
    require('../src/components/Card/stories');
    require('../src/components/Reviews/stories');
    //require('../src/components/RadioIcon/stories');
    require('../src/components/TableNoHeadItem/stories');
    require('../src/components/TableNoHead/stories');
    require('../src/components/TreatmentTableItem/stories');
    require('../src/components/TreatmentTable/stories');
    require('../src/components/DiseasesTableItem/stories');
    require('../src/components/DiseasesTable/stories');
    require('../src/components/ProfilePatient/stories');
    require('../src/components/Accordion/stories');
    require('../src/components/Radio/stories');
    require('../src/components/WarningModal/stories');
    require('../src/components/SideNav/stories');
    require('../src/components/HistoryReceptionsItem/stories');
    require('../src/components/HistoryReceptions/stories');
    require('../src/components/ReviewsTree/stories');
    require('../src/components/PersonalContactItem/stories');
    require('../src/components/PersonalContact/stories');
    require('../src/components/RateIndicator/stories');
    require('../src/components/PersonalEducationItem/stories');
    require('../src/components/PersonalEducation/stories');
    require('../src/components/PersonalExperienceItem/stories');
    require('../src/components/PersonalExperience/stories');
    require('../src/components/PersonalInformationItem/stories');
    require('../src/components/PersonalInformation/stories');
    require('../src/components/RadioBox/stories');
    require('../src/components/Login/stories');
    require('../src/components/Step/stories');
    require('../src/components/LoginForget/stories');
    require('../src/components/Registration/stories');
    require('../src/components/UploadBig/stories');
    require('../src/components/RegistrationComplete/stories');
    require('../src/components/PopoverBody/stories');
    require('../src/components/PatientTableItem/stories');
    require('../src/components/PatientTable/stories');
    require('../src/components/Calendar22/stories');
    require('../src/components/Hr/stories');
    require('../src/components/Notification/stories');
    require('../src/components/NotificationCard/stories');
    require('../src/components/NotificationApp/stories');
    require('../src/components/SmallCalendar/stories');
    require('../src/components/ChatDialog/stories');
    require('../src/components/ChatDialogs/stories');
    require('../src/components/ChatInMessage/stories');
    require('../src/components/ChatOutMessage/stories');
    require('../src/components/ChatComments/stories');
    require('../src/components/ChatFiles/stories');
};

configure(loadStories, module);