const http = require('http');

const itemPrice = 1499.99;
const taxRate = 0.13;

let discount = 0.0;
if (itemPrice > 1000) {
discount = 0.20;
} else if (itemPrice > 100) {
discount = 0.10;
}

const discountAmount = itemPrice * discount;
const subtotal = itemPrice - discountAmount;
const taxAmount = subtotal * taxRate;
const total = subtotal + taxAmount;

const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<html><body>');
res.write('<h1>eBay Purchase</h1>');
res.write('<p>Item price: $' + itemPrice + '</p>');
res.write('<p>Discount: $' + discountAmount + ' (' + (discount * 100) + '%)</p>');
res.write('<p>Subtotal: $' + subtotal + '</p>');
res.write('<p>Tax: $' + taxAmount + ' (' + (taxRate * 100) + '%)</p>');
res.write('<p>Total: $' + total + '</p>');
res.write('</body></html>');
res.end();
});

server.listen(425, () => {
console.log('Server listening on port 425');
});