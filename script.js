function calculate() {
    const itemValue = parseFloat(document.getElementById('item').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    const result = (itemValue * percentage) / 100;
    document.getElementById('result').innerText = `Result: ${result}`;
}
