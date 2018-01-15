const minute = 60 * 1000;
const hour = minute * 60;
const day = hour * 24;
const now = Date.now();

export const dataArr = [
    {
        id: 0,
        parentId: null,
        author: "Иванова А. К.",
        avatar: "https://www.proza.ru/pics/2017/06/03/1990.jpg",
        text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. ",
        date: `${new Date(now - 17 * minute)}`,
        treatmentDate: '13.09.2017',
        rate: 4,
    },
];