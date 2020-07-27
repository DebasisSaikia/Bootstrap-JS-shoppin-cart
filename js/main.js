var pro_total=document.getElementById('pro_total');
var ship_total=document.getElementById('ship_total')
var total_cart_amt=document.getElementById('total_cart_amt');

var discountcode=document.getElementById('discount_code1');

const decreaseNumber=(addrem,price)=>{
var itemval=document.getElementById(addrem);
var price = document.getElementById(price);

if(itemval.value <=0){
    itemval.value=0;
    alert('Minimum1 item must be ordered')
}else{
    itemval.value=parseInt(itemval.value) -1;
    itemval.style.background='grey';
    itemval.style.color='black';
    price.innerHTML = parseInt(price.innerHTML) - 15;
    pro_total.innerHTML = parseInt(pro_total.innerHTML) - 15;
    total_cart_amt.innerHTML = parseInt(pro_total.innerHTML) + parseInt(ship_total.innerHTML);
}
}

const increaseNumber = (addrem,price) => {
  var itemval = document.getElementById(addrem);
  var price = document.getElementById(price);

  if (itemval.value >= 5) {
    itemval.value = 5;
    alert('You can only order 5 items at a time');
    itemval.style.background='red';
    itemval.style.color='#fff';
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    price.innerHTML=parseInt(price.innerHTML) + 15;
    pro_total.innerHTML = parseInt(pro_total.innerHTML) + 15;
    total_cart_amt.innerHTML =
      parseInt(pro_total.innerHTML) + parseInt(ship_total.innerHTML);
  }
};

 const discount_code=()=>{
     let totalproamt=parseInt(total_cart_amt.innerHTML);
     let error_trw=document.getElementById('error_trw');
     if(discount_code.value === 'DEB123'){
         let newtotalamount=totalproamt-15;
         total_cart_amt.innerHTML=newtotalamount;
         error_trw.innerHTML='Coupon code applied. You saved Rs 15 on this product'
     }else{
        error_trw.innerHTML="Invalid Coupon code";
     }
 }