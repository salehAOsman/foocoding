console.log("Test!!")
const link = 'https://api.github.com/orgs/foocoding/repos?per_page=100'
fetch(link)
.then(response => response.json())
.then(data => {
    const info1 = document.getElementById('data1')

    info1.innerHTML = data[0].id
    const info2 = document.getElementById('data2')
    info2.innerHTML = data[2].forks
    
    console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))
