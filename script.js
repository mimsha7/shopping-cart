
   //    //phone item increase + price setup
   //    document.getElementById('btnTwo').addEventListener('click', function(){
   //       UpdateProductAmount('productValue', 1);
   //       let productNumber = document.getElementById('productValue').value;
   //       updatePhoneAmount('phoneAmount', productNumber);
   //       totalAmount();
   // })
   //    //phone item decrease + price setup
   //    document.getElementById('btnOne').addEventListener('click', function(){
   //       UpdateProductAmount('productValue', -1);
   //       let productNumber = document.getElementById('productValue').value;
   //       updatePhoneAmount('phoneAmount', productNumber);
   //       totalAmount();
   // })
   //    //case item increase + price setup
   //    document.getElementById('btnFour').addEventListener('click', function(){
   //       UpdateProductAmount('caseValue', 1);
   //       let productNumber = document.getElementById('caseValue').value;
   //       updateCaseAmount('caseAmount', productNumber);
   //       totalAmount();
   //    })
   //    //case item decrease + price setup
   //    document.getElementById('btnThree').addEventListener('click', function(){
   //       UpdateProductAmount('caseValue', -1);
   //       let productNumber = document.getElementById('caseValue').value;
   //       updateCaseAmount('caseAmount', productNumber);
   //       totalAmount();
   //    })

   // function UpdateProductAmount(id, decrease){
   //    let productNumber = document.getElementById(id).value;
   //    productNumber = parseInt(productNumber) + 1*decrease;
   //    document.getElementById(id).value = productNumber;
   // }

   // function updatePhoneAmount(id, productNumber){
   //    phoneAmountNumber = 1219 * productNumber;
   //    document.getElementById(id).innerText = phoneAmountNumber;
   // }
   // function updateCaseAmount(id, productNumber) {
   //    caseAmountNumber = 59 * productNumber;
   //    document.getElementById(id).innerText = caseAmountNumber;
   // }
   //total price setup
   // function totalAmount(){
   //    let phoneAmountNumber = Number(document.getElementById('phoneAmount').innerText);
   //    let caseAmountNumber = Number(document.getElementById('caseAmount').innerText);
   //    let sTotal = phoneAmountNumber + caseAmountNumber;
   //    document.getElementById('total').innerText = sTotal;
   //    document.getElementById('subTotal').innerText = sTotal;
   // }