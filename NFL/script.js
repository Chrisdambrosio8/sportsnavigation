const teams = [
    { name: "Bills", logo: "images/Bills.png", url: "#" },
    { name: "Dolphins", logo: "images/Dolphins.png", url: "#" },
    { name: "Jets", logo: "images/jets.png", url: "#" },
    { name: "Patriots", logo: "images/patriots.png", url: "#" },
    { name: "Ravens", logo: "images/ravens.png", url: "#" },
    { name: "Steelers", logo: "images/steelers.png", url: "#" },
    { name: "Bengals", logo: "images/bengals.png", url: "#" },
    { name: "Browns", logo: "images/browns.png", url: "#" },
    { name: "Texans", logo: "images/texans.png", url: "#" },
    { name: "Colts", logo: "images/colts.png", url: "#" },
    { name: "Jaguars", logo: "images/jaguars.png", url: "#" },
    { name: "Titans", logo: "images/titans.png", url: "#" },
    { name: "Chiefs", logo: "images/chiefs.png", url: "#" },
    { name: "Chargers", logo: "images/chargers.png", url: "#" },
    { name: "Broncos", logo: "images/broncos.png", url: "#" },
    { name: "Raiders", logo: "images/raiders.png", url: "#" },
    { name: "Eagles", logo: "images/eagles.png", url: "eagles.html" },
    { name: "Commanders", logo: "images/commanders.png", url: "#" },
    { name: "Cowboys", logo: "images/cowboys.png", url: "#" },
    { name: "Giants", logo: "images/giants.png", url: "#" },
    { name: "Lions", logo: "images/lions.png", url: "#" },
    { name: "Vikings", logo: "images/vikings.png", url: "#" },
    { name: "Packers", logo: "images/packers.png", url: "#" },
    { name: "Bears", logo: "images/bears.png", url: "#" },
    { name: "Buccaneers", logo: "images/buccaneers.png", url: "#" },
    { name: "Falcons", logo: "images/falcons.png", url: "#" },
    { name: "Panthers", logo: "images/panthers.png", url: "#" },
    { name: "Saints", logo: "images/saints.png", url: "#" },
    { name: "Rams", logo: "images/rams.png", url: "#" },
    { name: "Seahawks", logo: "images/seahawks.png", url: "#" },
    { name: "Cardinals", logo: "images/cardinals.png", url: "#" },
    { name: "49ers", logo: "images/49ers.png", url: "#" }
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
    let input = document.getElementById("searchBar").value.toLowerCase();
    let teamDivs = document.querySelectorAll(".team");

    teamDivs.forEach(teamDiv => {
        let teamName = teamDiv.querySelector("p").textContent.toLowerCase();
        if (teamName.includes(input)) {
            teamDiv.style.display = "block";
        } else {
            teamDiv.style.display = "none";
        }
    });
}



window.onload = loadTeams;