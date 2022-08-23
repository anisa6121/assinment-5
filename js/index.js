const playerArray = [];

function displayName(playerName) {
	const playerList = document.getElementById("selected-player");

	playerList.innerHTML = "";
	for (let i = 0; i < playerName.length; i++) {
		const playerName = playerArray[i].playerNames;
		if (playerArray.length > 5) {
			break;
		}
		console.log(playerName);

		const namelist = document.createElement("li");
		namelist.innerHTML = `
    <ol class="list-group  list-group-numbered ">
        <li class="list-group-item list-group-item-secondary ">${playerName}</li>
    </ol>
    `;

		playerList.appendChild(namelist);
	}
}

function addToPlayer(element) {
	// console.log(element.parentNode.children[0].innerText);

	const playerName = element.parentNode.children[0].innerText;
	// console.log(playerName)
	const playerObj = {
		playerNames: playerName,
	};
	// console.log(playerObj);

	playerArray.push(playerObj);

	displayName(playerArray);
}
