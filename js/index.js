const playerArray = [];

function displayName(playerName) {
const playerList = document.getElementById("selected-player");

	playerList.innerHTML = "";
	for (let i = 0; i < playerName.length; i++) {
		const playerName = playerArray[i].playerNames;
		if (playerArray.length > 5) {
			break;
		}
		

	const namelist = document.createElement("li");
	namelist.className = "list-group-item list-group-item-dark";
	namelist.innerHTML = `
     ${playerName} 
     `;

		playerList.appendChild(namelist);
	}
}

function addToPlayer(element) {


	const playerName = element.parentNode.children[0].innerText;
	// console.log(playerName)
	const playerObj = {
		playerNames: playerName,
	};


	playerArray.push(playerObj);

	displayName(playerArray);
}

function disable(button) {
	button.disabled = true;
}

function getElementById(elementId) {
	const element = document.getElementById(elementId);
	const elementValueString = element.innerText;
	const value = parseFloat(elementValueString);
	return value;
}

document.getElementById("player-expense-btn").addEventListener("click", function () {
	const playerExpense = document.getElementById("expense-amount");

	const perPlayerCost = getElementById("per-player-cost");

	const totalExpense = perPlayerCost * playerArray.length;

	playerExpense.innerText = totalExpense;
	});

document.getElementById("total-cost-amount-btn").addEventListener("click", function () {
    
      const totalAmountCost = document.getElementById("total-cost");

		const playerExpense = getElementById("expense-amount");

		const ManagerExpense = getElementById("manager-cost");

		const newCoachExpense = getElementById("coach-cost");

		const totalPlayerExpense =
			playerExpense + ManagerExpense + newCoachExpense;

		totalAmountCost.innerText = totalPlayerExpense;
	});
