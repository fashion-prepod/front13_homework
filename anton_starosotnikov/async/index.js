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



