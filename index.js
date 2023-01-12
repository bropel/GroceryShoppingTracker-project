const fs = require('fs');

const prompt = require('prompt');

prompt.start();

generateGroceryList = function() {

    class GroceryItem {
        constructor (item, quantity, price){
            this.item = item;
            this.quantity = quantity;
            this.price = price;
        }
    }

prompt.get(['item','quantity','price'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Item: ' + result.item);
    console.log('  Quantity: ' + result.quantity);
    console.log('  Price: ' + '$' + result.price);

    const item1 = new GroceryItem(result.item,result.quantity,result.price);

    let groceryList = new Array();


    groceryList.push(item1);
    console.log(groceryList);


});

function onErr(err) {
    console.log(err);
    return 1;
}

}