// GET SELECTORS
const calculateBtn = document.getElementById("calculateBtn")
const pips = document.getElementById("pips")
const lotSizeElement = document.getElementById("result");

// GET EVENT LISTENERS
calculateBtn.addEventListener("click", calculatePositionSize);

pips.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        calculatePositionSize();
    }
});

// FUNCTIONS
function calculatePositionSize(){
    const pipsNumber = parseInt(pips.value);
    const brokerPips = pipsNumber / 10;
    const usdPips = 0.01*brokerPips;
    const lotSize = (2*0.001) / usdPips;
    const roundedLotSize = lotSize.toFixed(2);

    lotSizeElement.innerText = roundedLotSize;
}