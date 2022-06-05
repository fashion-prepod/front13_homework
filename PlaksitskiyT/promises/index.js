// сделать GET запрос на list users (reqres.in)
// вывести список (ul) юзеров document.write()
// (имя каждого юзера должно быть "обернуто" в li )
// пользователь вводит имя (prompt),
// если такое имя есть в list users, вывести имя это юзера
// с помощью document.write();

const usersList = async () => {
  const requestData = await fetch('https://reqres.in/api/users?page=2');
  const returnData = await requestData.json();
  document.write('<ul>');
  returnData.data.forEach((user) => {
  document.write(`<li>${user.first_name}</li>`);
  });
  document.write('</ul>');
  const userName = prompt('Enter username');
  returnData.data.find((userObj) => {
  if (userName === userObj.first_name) {
  document.write(`You enter valid name ${user}`);
  return true;
  }
  });
};
usersList();
