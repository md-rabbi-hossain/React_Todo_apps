
const setlocalStoarage = (istrue) => {
    const data = localStorage.getItem('todo');

    if (istrue) {
        return localStorage.setItem('todo', JSON.stringify(istrue))
    }
    else if (data) {
        return JSON.parse(data)
    }

    else return { tasks: [] }

}

export default setlocalStoarage
