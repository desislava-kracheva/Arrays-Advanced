function solve (sequence, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];
 
    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;
 
        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    console.log(sequence.reduce((a, b) => a + b, 0));
}

solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]

//Обяснение:

//while се изпълнява докато има специално число.
//С elementsToRemove = bombPower * 2 + 1 искам да премахна всички елементи на веднъж (тук е 2х преди индекса, 2х след индекса и самата 'бомба') = 5 елемента
//Проблемът тук е, че startIndex става негативен (четворката е на 1 индекс, а аз трябва да премахна два елемента, което води до негативен индекс). Така аз реално казвам на splice да премахва елементи от края на масива, а аз искам да почна от нулевият...
//Затова правя проверка и, ако startIndex <  0, го занулявам. Но преди това трябва да се оправи бройката на elementsToRemove, защото тя все още е 5, а аз искам да махна само 4 (един елемент преди четворката, самата четворка и два елемента след нея). Затова на 11-ти ред изваждам разликата, а на 12-ти занулявам индекса.

    
    
    )