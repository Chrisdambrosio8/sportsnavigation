const teams = [
    { name: "Bills", logo: "images/Bills.png", url: "bills.html" },
    { name: "Dolphins", logo: "images/Dolphins.png", url: "dolphins.html" },
    { name: "Jets", logo: "images/jets.png", url: "jets.html" },
    { name: "Patriots", logo: "images/patriots.png", url: "patriots.html" },
    { name: "Ravens", logo: "images/ravens.png", url: "ravens.html" },
    { name: "Steelers", logo: "images/steelers.png", url: "steelers.html" },
    { name: "Bengals", logo: "images/bengals.png", url: "bengals.html" },
    { name: "Browns", logo: "images/browns.png", url: "browns.html" },
    { name: "Texans", logo: "images/texans.png", url: "texans.html" },
    { name: "Colts", logo: "images/colts.png", url: "colts.html" },
    { name: "Jaguars", logo: "images/jaguars.png", url: "jaguars.html" },
    { name: "Titans", logo: "images/titans.png", url: "titans.html" },
    { name: "Chiefs", logo: "images/chiefs.png", url: "chiefs.html" },
    { name: "Chargers", logo: "images/chargers.png", url: "chargers.html" },
    { name: "Broncos", logo: "images/broncos.png", url: "broncos.html" },
    { name: "Raiders", logo: "images/raiders.png", url: "raiders.html" },
    { name: "Eagles", logo: "images/eagles.png", url: "eagles.html" },
    { name: "Commanders", logo: "images/commanders.png", url: "commanders.html" },
    { name: "Cowboys", logo: "images/cowboys.png", url: "cowboys.html" },
    { name: "Giants", logo: "images/giants.png", url: "giants.html" },
    { name: "Lions", logo: "images/lions.png", url: "lions.html" },
    { name: "Vikings", logo: "images/vikings.png", url: "vikings.html" },
    { name: "Packers", logo: "images/packers.png", url: "packers.html" },
    { name: "Bears", logo: "images/bears.png", url: "bears.html" },
    { name: "Buccaneers", logo: "images/buccaneers.png", url: "buccaneers.html" },
    { name: "Falcons", logo: "images/falcons.png", url: "falcons.html" },
    { name: "Panthers", logo: "images/panthers.png", url: "panthers.html" },
    { name: "Saints", logo: "images/saints.png", url: "saints.html" },
    { name: "Rams", logo: "images/rams.png", url: "rams.html" },
    { name: "Seahawks", logo: "images/seahawks.png", url: "seahawks.html" },
    { name: "Cardinals", logo: "images/cardinals.png", url: "cardinals.html" },
    { name: "49ers", logo: "images/49ers.png", url: "49ers.html" }
];

function loadTeams() {
    const container = document.getElementById("teamsContainer");
    teams.forEach(team => {
        const teamDiv = document.createElement("div");
        teamDiv.classList.add("team");
        teamDiv.innerHTML = `<img src="${team.logo}" alt="${team.name}"><p>${team.name}</p>`;
        teamDiv.onclick = () => window.location.href = team.url;
        container.appendChild(teamDiv);
    });
}

function searchTeams() {
    let input = document.getElementById("search").value.toLowerCase();
    let teamDivs = document.getElementsByClassName("team");

    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name.toLowerCase().includes(input)) {
            teamDivs[i].style.display = "block";
        } else {
            teamDivs[i].style.display = "none";
        }
    }
}

window.onload = loadTeams;