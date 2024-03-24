 
const members = [
    { name: "Insane", gfs: 0 },
    { name: "Jay", gfs: 0 },
    { name: "Hakuna", gfs: 0 },
    { name: "LoneWolf", gfs: 0},
    { name: "Denp", gfs: 0 },
    { name: "Pan", gfs: 0},
    { name: "Dio", gfs: 1000 },
    {name: "Null", gfs: 100},
];


const TableBody = document.querySelector(".table-body");


let tableHtml = '';

// Loop through the members after sorting them to build the table body.
members.sort((a,b) => a.gfs > b.gfs ? -1 : +1).forEach((a, index) => {
    tableHtml += `
        <tr>
            <th>${index + 1}</th>
            <th>${a.name}</th>
            <td>${a.gfs}</td>
            <td>${a.gfs > 0 ? "Relevant": a.gfs < 0 ? "Irrelevant" : "-"}</td>
        <tr/>
    `
});

// Update the DOM.
TableBody.innerHTML = tableHtml;
