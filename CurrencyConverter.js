const EUR ={
    'KRW': 16475, // South Korean Won
    'USD': 1.16,  // US Dollar
    'GBP': 0.85,  // British Pound
    'JPY': 129.53 // Japanese Yen
}

let sourceCurrency = 'EUR';
let targetCurrency = 'Currency';
let amount = 0;


function convert(sourceCurrency, targetCurrency, amount) {

    if(targetCurrency === 'USD'){
        console.log(amount * EUR.USD);
    } else if (targetCurrency === 'GBP') {
        console.log(amount * EUR.GBP);
    } else if (targetCurrency === 'JPY') {
        console.log(amount * EUR.JPY);
    } else if (targetCurrency === 'KRW') {
        console.log(amount * EUR.KRW);
    } else if (targetCurrency === 'EUR'){
      console.log(amount * EUR.EUR);
    }
}

convert('EUR', 'USD', 300);
// Expected output: 348 
convert('EUR', 'GBP', 300);
// Expected output: 255
convert('EUR', 'JPY', 300); 
// Expected output: 38859
convert('EUR', 'KRW', 300);
// Expected output: 4942500
convert('EUR', 'EUR', 300);
// Expected output: 300















    
    // return (100*JPY);
    // console.log(convert);
    // // Expected output: 12953
    // return (200*USD);
    // console.log(convert);
    // // Expected output: 232
    // return (300*GBP);
    // console.log(convert);
    // // Expected output: 255
    // return (400*KRW);
    // console.log(convert);
    // // Expected output: 6590000

    


   


   

//   if (sourceCurrency === 16475 && targetCurrency === 0.0000607) {
//     return amount * euro;
//   } else if (krw === 0.0000607 && euro === 16475) {
//     return amount * krw;
//   } else {
//     return null;
//   }




       


        
    

        
        
    

 