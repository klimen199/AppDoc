// You don't need to specify field 'svg'. There is special check

export const menuItems = [
    {name: 'main', title: 'Главная', iconType: 'dashboard', svg: true, onClick: () => {console.log('main')}},
    {name: 'schedule', title: 'График работы', iconType: 'calendar', svg: true},
    {name: 'asks', title: 'Обращения', iconType: 'order-form', svg: true},
    {name: 'patients', title: 'Мои пациенты', iconType: 'user',},
    {name: 'info', title: 'Личные данные', iconType: 'setting_edit', svg: true},
    {name: 'comments', title: 'Отзывы пациентов', iconType: 'chat', svg: true},
];