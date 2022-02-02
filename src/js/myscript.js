console.log('Welcome to HackerU-JustCode Assignment');
$(document).ready(function () {
    getRemoteData();
});
function getRemoteData() {
    // write your code here to fetch data from api.
    const tableBody = document.querySelector('tbody')
    fetch('https://www.justcode.com/dataservice/api/laptopManufacturer/list')
        .then(res => res.json())
        .then(JSON => {

            JSON.forEach(laptopManu => {
                console.log(laptopManu);
                // Create Elements 
                const tr = document.createElement("tr")
                const id = document.createElement('td')
                const manuName = document.createElement('td')
                const ceoName = document.createElement('td')
                const headquarters = document.createElement('td')
                const modifiedOn = document.createElement('td')

                // Assign Elements
                id.innerText = laptopManu.id
                manuName.innerText = laptopManu.manufacturerName
                ceoName.innerText = laptopManu.nameOfCEO
                headquarters.innerText = laptopManu.headquarters
                modifiedOn.innerText = laptopManu.modifiedOn
                // Assign elements to table row
                tr.append(id, manuName, ceoName, headquarters, modifiedOn)
                // Assign row to able body
                tableBody.append(tr)
            })
        })
}