export const profileDoctor = {
    /*personalContact*/
            secondname  : "Иванова",
            firstname   : "Иван",
            patronymic  : "Иванович",
            phone       : "+375 29 111 11 11",
            email       : "test@test.com",
            oldPassword : "",  // пользователь сам вводит старый пароль ( как например в vk )
            newPassword : "",
    /*personEducation*/
            arrayMainInstitution   : [
                {
                    id               : 1,
                    mainInstitution  : "Белорусский государственный медицинский университет",
                    mainSpecialty    : "Факультет стоматологии. Стоматолог",
                    mainDateStart    : "30.07.2012",
                    mainDateEnd      : "30.07.2018",
                    documents        : []
                },
                {
                    id               : 2,
                    mainInstitution  : "БГУИР",
                    mainSpecialty    : "Факультет стоматологии. Стоматолог",
                    mainDateStart    : "30.07.2012",
                    mainDateEnd      : "30.07.2018",
                    documents        : []
                }
            ],
            arraySecondInstitution   : [
                {
                    id                : 1,
                    secondInstitution : "Медицинский университет Lorem ipsum dolor sit amet",
                    secondSpecialty   : "Курс стоматологии. Стоматолог",
                    dateStart         : "30.07.2012",
                    dateEnd           : "30.07.2018",
                    documents         : []
                },
                {
                    id                : 2,
                    secondInstitution : "Медицинский университет Lorem ipsum dolor sit amet",
                    secondSpecialty   : "Курс магии. Слизерин. Маг.",
                    dateStart         : "30.07.2012",
                    dateEnd           : "30.07.2018",
                    documents         : []
                }],
            degree: {
                name: "Пункт 1"
            },
    /*personExperience*/
            expWork      : "10",
            arrayExpWork : [
                {
                    id          : 1,
                    post        : "Стоматолог",
                    placeOfWord : "Мед центр «Lorem ipsum dolor sit amet»",
                    dateStart   : "2011",
                    isWorking   : true,
                    documents   : []
                },
                {
                    id          : 2,
                    post        : "Лесоруб",
                    placeOfWord : "Мед центр «Lorem ipsum dolor sit amet»",
                    dateStart   : "2011",
                    isWorking   : false,
                    documents   : []
                }
            ],
            category : "1-ая категория",
    /*personInformation */
            langData  : ["Английский", "Русский"],
            priceData : '50 - 100 руб',
            consultChildren : true,
            freeConsult : true
};