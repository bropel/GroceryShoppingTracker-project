const fs = require('fs');

const jsonReadFromFile = fs.readFileSync('./grocerylist.json','utf-8');
const savedList = JSON.parse(jsonReadFromFile);
console.log(savedList);

const prompt = require('prompt');

prompt.start();

let groceryList;

class GroceryItem {
    constructor (item, quantity, price){
        this.item = item;
        this.quantity = quantity;
        this.price = price;
    }
}

generateGroceryList = function() {

prompt.get(['item','quantity','price'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Item: ' + result.item);
    console.log('  Quantity: ' + result.quantity);
    console.log('  Price: ' + '$' + result.price);

    const item1 = new GroceryItem(result.item,result.quantity,result.price);

    groceryList = new Array();


    groceryList.push(item1);
    console.log(groceryList);
    return groceryList;


});

function onErr(err) {
    console.log(err);
    return 1;
}

}

//console.log(groceryList);
let list = groceryList;

saveProcess = function(){
    prompt.get(['Do you want to save your list? (y/n)'], function (err,result){
        let temp = result;
        if (err) { return onErr(err); }
        if (temp == 'y'){
            let jsonString = JSON.stringify(list);
            fs.writeFileSync('./grocerylist.json', jsonString);
            
        } else {
            generateGroceryList();
        }

    });
}


generateGroceryList();
//saveProcess();

//prompt('Do you want to save and exit?')