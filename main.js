// First Class ($150)
function ticketChange(isIncrease){
   var buttonToIncease = document.getElementById("valueToIncease");
   var numberOfValueToIncease = parseInt(buttonToIncease.value);
   var recentValueToIncease = numberOfValueToIncease;
   // var currentValueToIncease = recentValueToIncease - 1;
   if(isIncrease == false && currentValueToIncease> 0 ){
      currentValueToIncease = recentValueToIncease - 1;
   }
   if(isIncrease == true){
      currentValueToIncease = recentValueToIncease + 1;
   }
   buttonToIncease.value = currentValueToIncease;
   totalPrice();
}



// var clickToIncrease = document.querySelector("#clickToDecrease");
// clickToIncrease.addEventListener("click", function(){
//    var buttonToIncease = document.getElementById("valueToIncease");
//    var numberOfValueToIncease = parseInt(buttonToIncease.value);
//    var recentValueToIncease = numberOfValueToIncease;
//    var currentValueToIncease = recentValueToIncease - 1;
//    buttonToIncease.value = currentValueToIncease;

//    var ticketPrice = document.getElementById("ticket-Price");
//    var ticketPriceNum = parseInt(ticketPrice.innerText);
//    ticketPrice.innerText = currentValueToIncease * 150;
   
// });

/// Second Product


function EconomyTicketChange(isIncrease){
   var buttonToIncease = document.getElementById("svalueToIncease");
   var numberOfValueToIncease = parseInt(buttonToIncease.value);
   var recentValueToIncease = numberOfValueToIncease;
   // var currentValueToIncease2 = recentValueToIncease - 1;
   if(isIncrease == true){
      currentValueToIncease2 = recentValueToIncease + 1;
   }
   if(isIncrease == false && currentValueToIncease2 > 0){
      currentValueToIncease2 = recentValueToIncease - 1;
   }
   buttonToIncease.value = currentValueToIncease2;
   totalPrice();
}


// document.querySelector("#sclickToDecrease").addEventListener("click", function(){
//    var buttonToIncease = document.getElementById("svalueToIncease");
//    var numberOfValueToIncease = parseInt(buttonToIncease.value);
//    var recentValueToIncease = numberOfValueToIncease;
//    var currentValueToIncease2 = recentValueToIncease - 1;
//    buttonToIncease.value = currentValueToIncease2;

//    var ticketPrice = document.getElementById("ticket-Price");
//    var ticketPriceNum = parseInt(ticketPrice.innerText);
//    ticketPrice.innerText = ticketPrice.innerText + (currentValueToIncease2 * 150);
   
// });

function totalPrice(){
   var buttonToIncease = document.getElementById("valueToIncease");
   var numberOfValueToIncease = parseInt(buttonToIncease.value);

   var buttonToIncease = document.getElementById("svalueToIncease");
   var numberOfValueToIncease2 = parseInt(buttonToIncease.value);

   var subToalPrice = numberOfValueToIncease * 150 + numberOfValueToIncease2 * 100;
   document.getElementById("total-Price").innerText = subToalPrice;

   var Tax = subToalPrice * 0.1;
   document.getElementById("tax").innerText = Tax;

   var Total = subToalPrice + Tax;
   document.getElementById("total").innerText = Total;

//   To show taka in form
   document.getElementById("taka").value = Total;

}

// Bcash Payment
document.getElementById("bookNow").addEventListener("click", function(){
   document.getElementById("payment").style.display = 'block';
})
// Style on send button
document.getElementById("send").addEventListener("click", function(){
   document.getElementById("payment").style.display = 'none';
   document.querySelector(".thanks").style.display = 'block';

});



