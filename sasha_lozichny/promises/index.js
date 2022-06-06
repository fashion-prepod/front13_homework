// сделать GET запрос на list users (reqres.in)
// вывести список (ul) юзеров document.write()
// (имя каждого юзера должно быть "обернуто" в li)
// пользователь вводит имя (prompt),
// если такое имя есть в list users, вывести имя этого юзера
// с помощью document.write();

const listUsers = async () => {
  const resultListUsers = await fetch("https://reqres.in/api/users");
  return (resolve = await resultListUsers.json());
};

listUsers().then((response) => {
  response.data.forEach((user) => {
    const list = `<li><img src = ${user.avatar}> ${user.first_name} ${user.last_name}</li>`;
    document.write(`<ul>${list}</ul>`);
  });

  function userNameEnter() {
    let userName = "";
    do {
      userName = prompt(`"Enter user name!"`);
      if (userName === null) {
        alert(`"In next time, by!"`);
        break;
      }
      return userNamefind(userName);
    } while (userName);
  }

  function userNamefind(userName) {
    let findUser = response.data.find((user) => {
      if (user.first_name.toLowerCase() === userName.toLowerCase()) {
        return true;
      }
    });
    if (!findUser) {
      alert(`"there is no such name in the list"`);
      userNameEnter();
    } else {
      document.write(
        `<center><img src = ${findUser.avatar}> ${findUser.first_name} ${findUser.last_name}</center>`
      );
    }
  }
  setTimeout(() => {
    userNameEnter();
  }, 100);
});
