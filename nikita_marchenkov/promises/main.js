
let getUsers = async function() {
    let promise = await fetch(`https://reqres.in/api/users?page=1`)
    let json = await promise.json();
    let str = `<ul>` + json.data.map(el =>  `<li>` + el.first_name + `</li>`).join("") + `</ul>` 
    document.write(str)
    let name = prompt("Enter a name")
    let match = json.data.find((el) => el.first_name === name);
    if(match) {
        document.write(name)
    }
}

getUsers();



