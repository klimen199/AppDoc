const minute = 60 * 1000;
const hour = minute * 60;
const day = hour * 24;
const now = Date.now();

export const historyArr = [
    {
        id: 1,
        id_user: 2223,
        status: "new",
        startDate: new Date(2017,9,14,15).getTime()/1000,
        endDate: new Date(2017,9,14,16).getTime()/1000,
        type: 'chat',
        diagnostic: "Сахарный диабет",
        comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: "112 руб.",
        conclusion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        conclusionDownloadName: "Заключение 252525.pdf",
        review: "Lorem ipsum dolor sit amet, consectetuer...",
        rating: 3,
    }, {
        status: "new",
        date: "15.09.2017",
        time: '15:00-16:00',
        type: 'chat1',
        diagnostic: "Сахарный диабет",
        comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: "112 руб.",
        conclusion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        conclusionDownloadName: "Заключение 252525.pdf",
        review: "Lorem ipsum dolor sit amet, consectetuer...",
    }, {
        status: "new",
        date: "15.09.2017",
        time: '15:00-16:00',
        type: 'chat1',
        diagnostic: "Сахарный диабет",
        comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: "112 руб.",
        conclusion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        conclusionDownloadName: "Заключение 252525.pdf",
        review: "Lorem ipsum dolor sit amet, consectetuer...",
    }, {
        status: "new",
        date: "15.09.2017",
        time: '15:00-16:00',
        type: 'chat1',
        diagnostic: "Сахарный диабет",
        comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: "112 руб.",
        conclusion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        conclusionDownloadName: "Заключение 252525.pdf",
        review: "Lorem ipsum dolor sit amet, consectetuer...",
    },{
        status: "new",
        date: "15.09.2017",
        time: '15:00-16:00',
        type: 'chat1',
        diagnostic: "Сахарный диабет",
        comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: "112 руб.",
        conclusion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        conclusionDownloadName: "Заключение 252525.pdf",
        review: "Lorem ipsum dolor sit amet, consectetuer...",
    },{
        status: "topical",
        date: "15.09.2017",
        time: '15:00-16:00',
        type: 'chat1',
        diagnostic: "Сахарный диабет",
        comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: "112 руб.",
        conclusion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        conclusionDownloadName: "Заключение 252525.pdf",
        review: "Lorem ipsum dolor sit amet, consectetuer...",
    },{
        status: "extra",
        date: "15.09.2017",
        time: '15:00-16:00',
        type: 'chat1',
        diagnostic: "Сахарный диабет",
        comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: "112 руб.",
        conclusion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        conclusionDownloadName: "Заключение 252525.pdf",
        review: "Lorem ipsum dolor sit amet, consectetuer...",
    },{
        status: "completed",
        date: "15.09.2017",
        time: '15:00-16:00',
        type: 'chat1',
        diagnostic: "Сахарный диабет",
        comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: "112 руб.",
        conclusion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        conclusionDownloadName: "Заключение 252525.pdf",
        review: "Lorem ipsum dolor sit amet, consectetuer...",
    },
];


// const data1 = {
//     author: "Иванова А. К.",
//     avatar: "https://www.proza.ru/pics/2017/06/03/1990.jpg",
//     text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. ",
//     date: date1,
//     treatmentDate: '13.10.2017',
//     rate: 4,
// };
// const data2 = {
//     text: "Далеко-далеко. Максимально далеко и еще чуть-чуть дальше за словесными горами в стране гласных и согласных живут рыбные тексты. ",
//     date: date1,
//     secondary: true,
// };