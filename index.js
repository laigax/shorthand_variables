var price = 5;
var quantity = 14;
var total = price * quantity;
var el = document.getElementById('cost');

total = price * quantity;
el.textContent = '$' + total;