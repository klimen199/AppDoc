// import React from 'react'
// import PropTypes from 'prop-types'
// import cn from 'classnames'
//
// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
//
//
// import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
// //import 'D:/work/AppDoc_/AppDoc/node_modules/react-big-calendar/lib/css/react-big-calendar.css'
//
// //import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
// import './styles.css'
//
// BigCalendar.momentLocalizer(moment);
// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
//
// // console.log(allViews)
//
// const Calendar = (props) => {
//
//     //console.log(props.events)
//
//     return (<BigCalendar
//         selectable
//         {...props}
//         events={props.events}
//         views={['day','week','month']}
//         step={60}
//         defaultDate={new Date(2015, 3, 1)}
//     />);
// };
//
// Calendar.propTypes = {
//     events: PropTypes.array,
// };
//
// Calendar.defaultProps = {
//     events: [],
// };
//
// export default Calendar;