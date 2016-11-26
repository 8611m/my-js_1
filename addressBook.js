var users = [
  {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    birthDay: '11.11.1981',
    phones: [
      '89001234567',
      '89011234567'
    ]
  },
  {
    firstName: 'Petr',
    lastName: 'Petrov',
    birthDay: '10.10.1980',
    phones: [
      '89111234567',
      '89121234567'
    ]
  } 
];

var user = {};

user.fitstName = prompt('Введите имя');
user.lastName = prompt('Введите фамилию');
user.birthDay = prompt('Введите дату рождения');
user.phone = prompt('Введите номер телефона');


user.push(user);