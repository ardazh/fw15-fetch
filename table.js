const table = document.getElementById('table-body')

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const row = function (el){
        return `
        <tr class="border border-black text-sm">
            <td class="border border-black p-2 w-10 text-center">${el.id}</td>
            <td class="border border-black p-2">${el.name}</td>
            <td class="border border-black p-2">${el.username}</td>
            <td class="border border-black p-2">${el.email}</td>
            <td class="border border-black p-2">
                <div>
                    <ul>
                        <li class="p-2">
                            <span class="font-bold">Street </span> 
                            ${el.address.street}
                        </li>
                        <li class="p-2">
                            <span class="font-bold">Suite </span> 
                            ${el.address.suite}
                        </li>
                        <li class="p-2">
                            <span class="font-bold">City </span> 
                            ${el.address.city}
                        </li>
                        <li class="p-2">
                            <span class="font-bold">Zip Code </span> 
                            ${el.address.zipcode}
                        </li>
                        <li class="p-2">
                            <span class="font-bold">Geo </span> 
                            ${el.address.geo.lat} ${el.address.geo.lng}
                        </li>
                    </ul>
                </div>
            </td>
            <td class="border border-black w-48 p-2">${el.phone}</td>
            <td class="border border-black p-2">${el.website}</td>
            <td class="border border-black p-2">
                <div>
                    <ul class="gap-3">
                        <li class="font-bold">${el.company.name}</li>
                        <li> ${el.company.catchPhrase}</li>
                        <li> ${el.company.bs}</li>
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