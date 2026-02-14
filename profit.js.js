document.getElementById('submit').addEventListener('click', function() {
    const costPrice = parseFloat(document.getElementById('number').value);
    const sellingPrice = parseFloat(document.getElementById('number2').value);
    const quantity = parseInt(document.getElementById('amount').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(costPrice) || isNaN(sellingPrice) || isNaN(quantity) || costPrice < 0 || sellingPrice < 0 || quantity < 1) {
        resultDiv.textContent = 'Please enter valid positive numbers.';
        resultDiv.style.color = 'red';
        return;
    }
    
    const profit = (sellingPrice - costPrice) * quantity;
    resultDiv.textContent = `Total Profit: $${profit.toFixed(2)}`;
    resultDiv.style.color = profit >= 0 ? 'green' : 'red';
});