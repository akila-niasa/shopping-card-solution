function updateCase(product,price,isIncreaseing){
    const inputOne=document.getElementById(product+"-input")
    let inputOneValue=inputOne.value 
    if(isIncreaseing==true)
    {
        inputOneValue=parseInt(inputOneValue)+1
    }
    else if(inputOne.value>0){
        inputOneValue=parseInt(inputOneValue)-1
    }
    inputOne.value=inputOneValue
    // update total
    const total=document.getElementById(product+"-total")
    total.innerText=inputOneValue*price
    calculateSubTotal()
}
function getInputValue(product){
 const phoneInput=document.getElementById(product+"-input")
 const phonPrice=phoneInput.value
 return phonPrice
}
function calculateSubTotal(){
    const phoneTotal=getInputValue("phone")*1219
    const caseTotal=getInputValue("case")*59
    const subTotal=phoneTotal+caseTotal
document.getElementById("subtotal").innerText= subTotal
// tax
const tax=subTotal/10
document.getElementById("tax").innerText=tax
// total
const total=subTotal+tax
document.getElementById("total").innerText=total
}
// phone-1
document.getElementById("plus-button" ).addEventListener("click",function(){
   updateCase("phone",1219,true)

})
document.getElementById("minaz-button").addEventListener("click",function(){
        updateCase("phone",1219,false)
    
})
// phone-2
document.getElementById("plus-button-2" ).addEventListener("click",function(){
    updateCase("case",59,true)
 
 })
 document.getElementById("minaz-button-2").addEventListener("click",function(){
    updateCase("case",59,false)
})
