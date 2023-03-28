document.getElementById('getData').addEventListener('click', getData);

function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        let output = '<h2 class="font-bold text-3xl m-10">Data User</h2>'
        // console.log(data);

        data.forEach(el => {
            output += `
                <div class="ml-10 my-16">
                    <ul>
                        <li>ID: ${el.id}</li>
                        <li>Name: ${el.name}</li>
                        <li>Username: ${el.username}</li>
                        <li>Email: ${el.email}</li>
                        <li>Address: </li>
                        <div class="ml-5">
                            <li>
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
                            </li>
                        </div>
                        <li>Phone: ${el.phone}</li>
                        <li>Website: ${el.website}</li>
                        <li>Company: </li>
                        <div class="ml-5">
                            <li>
                                <ul>
                                    <li>Name: ${el.company.name}</li>
                                    <li>CaatchPhrase: ${el.company.catchPhrase}</li>
                                    <li>Bs: ${el.company.bs}</li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                </div>
                `;
        })
        document.getElementById('container').innerHTML = output;
    })
    .catch((err) => console.log(err));
}