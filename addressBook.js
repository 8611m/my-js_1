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

function addUser(users) {
	var user = {};
	user.firstName = prompt('Введите имя:');
	user.lastName = prompt('Введите фамилию:');
	user.birthDay = prompt('Дату рождения:');
	user.phones = [];
	while (true) {
		var phone = prompt('Номер телефона:(для выхода введите пустой номер)');
		if (!phone) break;
		user.phones.push(phone);
	}
	users.push(user);
}



function csvFormat(users) {
  return users.map(function(user) {
    return Object.keys(user).map(function(key) { 
      if(typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"'; 
      else return user[key].map(function(phone) { return '"' + phone + '"'; }).join(';');
    }).join(';');
  }).join('\r\n');
}
