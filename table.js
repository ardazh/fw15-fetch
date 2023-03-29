const table = document.getElementById('table-body')

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const row = function (el){
        return `
        <tr class="border border-black">
            <td class="border border-black">${el.id}</td>
            <td class="border border-black">${el.name}</td>
            <td class="border border-black">${el.username}</td>
            <td class="border border-black">${el.email}</td>
            <td class="border border-black">${el.address}</td>
        </tr>
        `
    }
    data.forEach(el => {
        table.innerHTML += row(el)
    })
}

getData()