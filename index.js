const fs = require('fs');
const prompt = require('prompt');

const jsonReadFromFile = fs.readFileSync('./grocerylist.json','utf-8');

let savedList = new Array();
//I cannot figure out how to correctly add new items to the grocery list if there are already saved values

if (jsonReadFromFile){    
    savedList = JSON.parse(jsonReadFromFile);
    //console.log(typeof(savedList));
    console.log(savedList);
    //savedList = savedList.split(',');
    //console.log(savedList);
}

let groceryList = [];
if (savedList){
    //for (let i = 0; i < savedList.length-1; i++)
    groceryList.push(savedList);
}

class GroceryItem {
    constructor (item, quantity, price){
        this.item = item;
        this.quantity = quantity;
        this.price = price;
    }
}

generateGroceryList = function() {

prompt.start();

prompt.get(['item','quantity','price'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Item: ' + result.item);
    console.log('  Quantity: ' + result.quantity);
    console.log('  Price: ' + '$' + result.price);

    const item1 = {
        item: result.item,
        quantity: result.quantity,
        price: result.price
    }
        

    //console.log(typeof(groceryList));


    groceryList.push(item1);
    //console.log(typeof(item1));
    console.log(groceryList);

    const jsonString = JSON.stringify(groceryList);
    //console.log(jsonString);
    fs.writeFileSync('./grocerylist.json', jsonString);

            prompt.get(['Do you want to exit? (y/n)'], function (err,result){
                if (err) { return onErr(err); }
                return result;

                //let temp = result;

                //I cannot get this code to execute and exit the program upon correct input
                //if (result === 'y'){
                //    return;
                //} else {
                //generateGroceryList();            
        });
});

}
function onErr(err) {
    console.log(err);
    return 1;
}

//console.log(groceryList);

generateGroceryList();
