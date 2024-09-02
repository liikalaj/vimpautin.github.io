function calculate() {

    let totalPercentage = 0;
    
    for (let i = 1; i <= 5; i++) {
        const itemValue = parseFloat(document.getElementById(`item${i}`).value);
        const percentage = parseFloat(document.getElementById(`percentage${i}`).value);
        const resultElement = document.getElementById(`result${i}`);

        totalPercentage += percentage;
        
        if (percentage === 0) {
            resultElement.innerText = '';
        } else {
            const result = (itemValue * percentage) / 100;
            resultElement.innerText = `Annos: ${result} grammaa`;
        }
    }
    document.getElementById('result0').innerText = `Total Percentage: ${totalPercentage}%`;

}
