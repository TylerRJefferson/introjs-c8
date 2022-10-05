//	THIS IS AN EXEMPLE OF FUNCTION TYPE 4 FROM FUNCTIONS.JS

const subtotal = 17.24
const taxRate = 0.07

function calculateSalesTax(subtotal, taxRate) {
	return subtotal * taxRate
}

const taxTotal = calculateSalesTax(subtotal, taxRate)

//or const total = subtotal + taxTotal

console.log('Subtotal     $', subtotal.toFixed(2))
console.log('Tax          $', taxTotal.toFixed(2))
console.log('---------------------')
//console.log('Total      $', total)

//returns same result as  separate function below

function calculateSalesTotal(subtotal, taxTotal) {
	return subtotal + taxTotal
}

const total = calculateSalesTotal(subtotal, taxTotal)

console.log('Total        $', total.toFixed(2));
