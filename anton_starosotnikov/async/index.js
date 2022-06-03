const API_URL_USERS = 'https://reqres.in/api/users?page=1';

const getDataOfUsers = async(url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        document.write(`<h1>${err.message}, try again</h1>`);
        throw new Error(err.message);
    }
}

const isUserInArrNames = (arrNames) => {
    const userName = prompt('Enter username');
    document.write(arrNames.includes(userName) ? 
        `<p><b>${userName}</b> found in the list</p>` : 
        `<p><b>${userName}</b> NOT found in the list</p>`
    );
}

const showListOfNames = async() => {
    const data = await getDataOfUsers(API_URL_USERS);
    const users = data.data;
    // const usersNames = users.map(user => user.first_name);
    // usersNames.forEach((name, index) => {
    //     document.write(`
    //         ${index === 0 ? '<ul>' : ''}
    //             <li>${name}</li>
    //         ${index === usersNames.length - 1 ? '</ul>' : ''}
    //     `);
    // });
    // Понял, что закомменченый код выше мне показался не очень хорошим, т.к там использовал методы и map и forEach. А эти методы имеют не самую быструю скорость работы O(n),
    // Поэтому решил переписать только с методом map, т.к это ускорит работу, особенно если бы нужно было обрабатывать много данных.
    const usersNames = users.map((user, index) => {
        document.write(`
            ${index === 0 ? '<ul>' : ''}
                 <li>${user.first_name}</li>
            ${index === users.length - 1 ? '</ul>' : ''}
        `);
        return user.first_name;
    })

    setTimeout(() => {
        isUserInArrNames(usersNames);
    }, 1000);
}
showListOfNames();



