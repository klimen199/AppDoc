const minute = 60 * 1000;
const hour = minute * 60;
const day = hour * 24;
const now = Date.now();

const date1 = new Date(now - 5 * minute);

export const data1 = {
    author: "Иванова А. К.",
    avatar: "https://www.proza.ru/pics/2017/06/03/1990.jpg",
    text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. ",
    date: date1,
    treatmentDate: '13.10.2017',
    rate: 4,
    secondaryAllowed: true,
};
export const data2 = {
    text: "Далеко-далеко. Максимально далеко и еще чуть-чуть дальше за словесными горами в стране гласных и согласных живут рыбные тексты. ",
    date: date1,
    secondary: true,
};

export const data3 = {
    author: "Иванова А. К.",
    avatar: "https://www.proza.ru/pics/2017/06/03/1990.jpg",
    text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. ",
    date: date1,
    treatmentDate: '13.10.2017',
    rate: 3,
    secondaryAllowed: true,
    comment: {
        text: "Далеко-далеко. dddddddddddddddddd Максимально далеко и еще чуть-чуть дальше за словесными горами в стране гласных и согласных живут рыбные тексты. ",
        date: date1,
        secondary: true,
    }
};