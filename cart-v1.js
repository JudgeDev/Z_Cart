console.log("Loading javascript file")

// get all remove buttons from document object
var removeCartItemButtons = document.getElementsByClassName('btn-remove')
for (var i = 0; i < removeCartItemButtons.length; i++) {  // loop through all buttons
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){  // add listener to button for click action
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()  // remove parent div, i.e. cart-row)
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0  // initialise cart total
    for (var i = 0; i < cartRows.length; i++) {  // loop through all cart rows
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = priceElement.innerText
        price = parseFloat(price.replace('$', ''))  // get price as number
        var quantity = quantityElement.value
        total += price * quantity  // update cart total
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + 
    total
}