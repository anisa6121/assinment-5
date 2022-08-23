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

function getInputId(inputId) {
	const element = document.getElementById(inputId);
	const elementValueString = element.value;
	const value = parseFloat(elementValueString);
	return value;
}

document.getElementById("player-expense-btn").addEventListener("click", function () {

  const playerExpense = document.getElementById("expense-amount"); 

    const perPlayerCost = getInputId("per-player-amount-input");
    
    const totalExpense = perPlayerCost * playerArray.length;
    
 playerExpense.innerText = totalExpense;

	});

document.getElementById("total-cost-amount-btn").addEventListener("click", function () {
    
    const totalAmountCost = document.getElementById("total-cost");

    const playerCost = document.getElementById("expense-amount");
    const previouCostsString = playerCost.innerText;
    const newCostValue = parseFloat(previouCostsString);
    


    const ManagerExpense = getInputId(" manager-cost");

   const coachExpense = getInputId(" coach-cost");
	

	const totalPlayerExpense = newCostValue + ManagerExpense + coachExpense;

	totalAmountCost.innerText = totalPlayerExpense;
	});
