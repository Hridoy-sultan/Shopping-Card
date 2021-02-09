
// document.getElementById('case-increase').addEventListener('click',function(){
//     const caseInput =document.getElementById('case-input');
//     const inputConvert =parseInt(caseInput.value);
//     const inputIncrease =inputConvert+1;
//     caseInput.value  =inputIncrease;
//     const caseTotal =inputIncrease *59 ;
//     document.getElementById('case-price').innerText = '$'+caseTotal ;
// })
// document.getElementById('case-decrease').addEventListener('click',function(){
//     const caseInput =document.getElementById('case-input');
//     const inputConvert =parseInt(caseInput.value);
//     const caseDecrease=inputConvert -1;
//     caseInput.value =caseDecrease ;
//     const caseTotal =caseDecrease * 59;
//     document.getElementById('case-price').innerText = '$'+caseTotal;
// })

function ProductCount(product, IsDecrease) {
     const productInput = document.getElementById(product + '-count');
     const productInputConvert = parseInt(productInput.value);
     if (IsDecrease == true) {
          productTotal = productInputConvert + 1;
     }
     if (IsDecrease == false && productInputConvert > 0) {
          productTotal = productInputConvert - 1;

     }
     productInput.value = productTotal;
     if (product == 'case') {
          productPrice = productTotal * 59;
     }
     if (product == 'phone') {
          productPrice = productTotal * 1238;
     }
     document.getElementById(product + '-price').innerText = '$' + productPrice;
     getInputvalue(product, 'phone-count');
     getInputvalue(product, 'case-count');
     calculateTotal()
}

function calculateTotal() {
     const phoneCount = getInputvalue('phone');
     const caseCount = getInputvalue('case');

     const subTotal = phoneCount * 1238 + caseCount * 59;
     const tax = Math.round(subTotal * 0.1);
     const allTotal = tax + subTotal;
     document.getElementById('subTotal').innerText = '$' + subTotal;
     document.getElementById('tax-amount').innerText = '$' + tax;
     document.getElementById('all-total').innerText = '$' + allTotal;

}
function getInputvalue(product) {
     const productCount = document.getElementById(product + '-count');
     const productConvert = parseInt(productCount.value);
     return productConvert;
}