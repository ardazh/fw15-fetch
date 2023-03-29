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
            <td class="border border-black">
                    <div>
                            <ul>
                                <li>Street: ${el.address.street}</li>
                                <li>Suite: ${el.address.suite}</li>
                                <li>City: ${el.address.city}</li>
                                <li>Zipcode: ${el.address.zipcode}</li>
                                <li>geo: </li>
                                <div class="ml-3">
                                    <li>
                                        <ul>
                                            <li>lat: ${el.address.geo.lat}</li>
                                            <li>lng: ${el.address.geo.lng}</li>
                                        </ul>
                                    </li>
                                </div>
                            </ul>
                    </div>
            </td>
        </tr>
        `
    }
    data.forEach(el => {
        table.innerHTML += row(el)
    })
}

getData()