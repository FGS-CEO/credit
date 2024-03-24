let members = [
    { name: "Dio", gfs: 1000 },
    { name: "Insane", gfs: 0 },
    { name: "Jay", gfs: 0 },
    { name: "Hakuna", gfs: 0 },
    { name: "LoneWolf", gfs: 0},
    { name: "Denp", gfs: 0 },
    { name: "Pan", gfs: 0},
];

const tableBody = document.querySelector(".table-body");

let orderedMembers = members.sort((a,b) => a.gfs > b.gfs ? -1 : +1);
orderedMembers.forEach((a, index)=> {
    const tr = document.createElement("tr");
    const rank = document.createElement("th");
    rank.textContent= (index + 1);
    tr.appendChild(rank);

    const name = document.createElement("th");
    name.textContent= a.name;
    tr.appendChild(name);

    const credit = document.createElement("td");
    credit.textContent= a.gfs;
    tr.appendChild(credit);

    const relevancy = document.createElement("td");
    if (a.gfs > 0){
        relevancy.textContent = "Relevant";
    } else if ( a.gfs < 0){
        relevancy.textContent = "Irrelevant";
    } else {
        relevancy.textContent = "-"
    }
    tr.appendChild(relevancy);

    tableBody.appendChild(tr);
})