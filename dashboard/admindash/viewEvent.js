function setupTable() {
    const table = document.getElementById('tableEvent')
    apiFetchAllEvents(table)
}

setupTable()

function propulateActualData(table, events) {

    for (const event of events) {

        const { id, title, startdate, enddate, location, time } = event
        const updatePageUrl = `./updateEvent.html?id=${id}`

        const row = table.insertRow()
        row.insertCell(0).innerHTML = id
        row.insertCell(1).innerHTML = title
        row.insertCell(2).innerHTML = startdate
        row.insertCell(3).innerHTML = enddate
        row.insertCell(4).innerHTML = location
        row.insertCell(5).innerHTML = time
        row.insertCell(6).innerHTML = `
            <a class='ms-2' href='${updatePageUrl}'>Update</a> 
            <a class='ms-2' onclick='showConfirmDeleteModal(${id})'>Delete</a> 
        `
    }
}

function showConfirmDeleteModal(id) {
    console.log('clicked ' + id)
    const myModalEl = document.getElementById('deleteModal');
    const modal = new bootstrap.Modal(myModalEl)
    modal.show()

    const btDl = document.getElementById('btDl')
    btDl.onclick = () => {
        apiCallDeleteEvent(id, modal)
    }
}

function apiFetchAllEvents(table) {
    axios.get('http://localhost:8080/admin/events')
        .then(res => {
            const { data } = res
            console.log(data)
            propulateActualData(table, data)
        })
        .catch(err => console.log(err))
}


function apiCallDeleteEvent(id, modal) {
    const url = `http://localhost:8080/admin/events/${id}`

    axios.delete(url)
        .then(res =>
            window.location.reload())
        .then(({ sts, msg, bd }) => modal.hide())
        .catch(console.log)
}

function logOut() {
    localStorage.setItem("userId", null)
    window.location.href = "../../homepage/home.html"
}