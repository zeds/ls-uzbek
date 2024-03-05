

let fruits = ['olma-1', 'olma-2', 'olma-3', 'olma-4'];
fruits.splice(0, 1); // birinc raqam index joylawuvi,ikinci raqam necta ocriliw soni
fruits.push('olma-1-1'); // ohrdig element qowad
fruits.unshift('olma-0') // bowiga element qowad
fruits.shift(); // boshidig elemnt ocradi
fruits.pop(); // ohirdig element ocradi



let mevalar = document.querySelector(".meva").innerHTML = fruits;


