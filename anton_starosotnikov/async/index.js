const getDataOfUsers = async() => {
    try {
        const response = await fetch('https://reqres.in/api/users?page=1');
        return await response.json();
    } catch (err) {
        document.write(`<h1>${err.message}, try again</h1>`);
        throw new Error(err.message);
    }
}

const isUserInArrNames = (arrNames) => {
    const userName = prompt('Enter username');
    document.write(arrNames.includes(userName) ? `
        <p><b>${userName}</b> found in the list</p>` : 
        `<p><b>${userName}</b> NOT found in the list</p>
    `);
}

const showListOfNames = async() => {
    const data = await getDataOfUsers();
    const users = data.data;
    const usersNames = users.map(user => user.first_name);
    usersNames.forEach((name, index) => {
        document.write(`
            ${index === 0 ? '<ul>' : ''}
                <li>${name}</li>
            ${index === usersNames.length - 1 ? '</ul>' : ''}
        `);
    });
    setTimeout(() => {
        isUserInArrNames(usersNames);
    }, 1000);
}
showListOfNames();



