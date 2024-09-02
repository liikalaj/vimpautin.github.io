function calculate() {
    for (let i = 1; i <= 5; i++) {
        const itemValue = parseFloat(document.getElementById(`item${i}`).value);
        const percentage = parseFloat(document.getElementById(`percentage${i}`).value);
        const result = (itemValue * percentage) / 100;
        document.getElementById(`result${i}`).innerText = `Result: ${result}`;
    }
}
