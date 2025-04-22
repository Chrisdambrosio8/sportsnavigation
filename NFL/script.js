const teams = [
    { name: "Bills", logo: "images/Bills.png", url: "#" },
    { name: "Dolphins", logo: "images/Dolphins.png", url: "#" },
    { name: "Jets", logo: "images/Jets.png", url: "#" },
    { name: "Patriots", logo: "images/Patriots.png", url: "#" },
    { name: "Ravens", logo: "images/Ravens.png", url: "#" },
    { name: "Steelers", logo: "images/Steelers.png", url: "#" },
    { name: "Bengals", logo: "images/Bengals.png", url: "#" },
    { name: "Browns", logo: "images/Browns.png", url: "#" },
    { name: "Texans", logo: "images/Texans.png", url: "#" },
    { name: "Colts", logo: "images/Colts.png", url: "#" },
    { name: "Jaguars", logo: "images/Jaguars.png", url: "#" },
    { name: "Titans", logo: "images/Titans.png", url: "#" },
    { name: "Chiefs", logo: "images/Chiefs.png", url: "#" },
    { name: "Chargers", logo: "images/Chargers.png", url: "#" },
    { name: "Broncos", logo: "images/Broncos.png", url: "#" },
    { name: "Raiders", logo: "images/Raiders.png", url: "#" },
    { name: "Eagles", logo: "images/Eagles.png", url: "Eagles/index.html" },
    { name: "Commanders", logo: "images/Commanders.png", url: "#" },
    { name: "Cowboys", logo: "images/Cowboys.png", url: "#" },
    { name: "Giants", logo: "images/Giants.png", url: "#" },
    { name: "Lions", logo: "images/Lions.png", url: "#" },
    { name: "Vikings", logo: "images/Vikings.png", url: "#" },
    { name: "Packers", logo: "images/Packers.png", url: "#" },
    { name: "Bears", logo: "images/Bears.png", url: "#" },
    { name: "Buccaneers", logo: "images/Buccaneers.png", url: "#" },
    { name: "Falcons", logo: "images/Falcons.png", url: "#" },
    { name: "Panthers", logo: "images/Panthers.png", url: "#" },
    { name: "Saints", logo: "images/Saints.png", url: "#" },
    { name: "Rams", logo: "images/Rams.png", url: "#" },
    { name: "Seahawks", logo: "images/Seahawks.png", url: "#" },
    { name: "Cardinals", logo: "images/Cardinals.png", url: "#" },
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