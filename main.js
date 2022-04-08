var removebtn = document.getElementsByClassName("btn-danger");
// for (i = 0 ; i < removebtn.length;i++){
//     removebtn[i].addEventListener('click' , removebtns)
// }
function removebtns(event){
    var e = event.target;
    var parents = e.parentElement.parentElement.remove()
    // console.log(parents);
    grandtotal()
}
var addTocart = document.getElementsByClassName("btn-primary");
for (i = 0 ; i < addTocart.length;i++){
    addTocart[i].addEventListener('click' , addTocarts)
}
function addTocarts(event){
    var addTocart = event.target;
    var addtocartEl = addTocart.parentElement
    // cosole.log(addtocartEl)
    var imgname = addtocartEl.children[0].src;
    var titlename = addtocartEl.children[1].innerText;
    var price = addtocartEl.children[2].innerText;
    addTocartupdate(imgname , titlename , price)
}
var tbody = document.getElementsByTagName("tbody")[0]
function addTocartupdate( imgname , titlename , price){
 var createElement = document.createElement('tr');
 var titleNames = document.getElementsByClassName('item-title');
 for (i = 0 ; i < titleNames.length ; i++){
     if(titleNames[i].innerText == titlename){
         alert("this item already added to your cart");
         return
     }
 }
 createElement.innerHTML = `
  <td><img src="${imgname}" class="item-img" alt=""></td>
                    <td><h4 class="item-title">${titlename}</h4></td>
                    <td><h4 class="item-price">${price}</h4></td>
                    <td><input type="number" class="item-quantity" value="0" min="1"></td>
                    <td><h4 class="sub-total">0 VNĐ</td>
                    <td><button class="btn btn-danger">Remove</button></td>`
                    tbody.append(createElement);
                    for(i = 0 ; i < removebtn.length ; i++){
                        removebtn[i].addEventListener('click', removebtns)
                    }
                    for(i = 0 ; i < quantityupdate.length;i++){
                        quantityupdate[i].addEventListener('click' ,updatequantity )
                    }
                    grandtotal()
}
var quantityupdate = document.getElementsByClassName('item-quantity');
function updatequantity(event){
    var updateEl = event.target;
    var parentsEl = updateEl.parentElement.parentElement
    // console.log( parentsEl)
    var itemPrice = parentsEl.getElementsByClassName('item-price')[0];
    var itemprices = itemPrice.innerText.replace('VNĐ', ' ');
    var subtotal = parentsEl.getElementsByClassName('sub-total')[0];
    subtotal.innerHTML = updateEl.value * itemprices ;
    if (isNaN(updateEl.value) || updateEl.value<= 0){
        updateEl.value = 1;

    }
    grandtotal()
    }
    function grandtotal(){
        var total = 0;
var garnds = document.getElementsByClassName('grand-total')[0];
var updates = document.getElementsByClassName('sub-total')
for( i = 0 ; i < updates.length ; i++){
    var updatesAmount = parseInt(updates[i].innerText.replace('VNĐ', ' '));
    total += updatesAmount;
}
garnds.innerHTML =  total + ' VNĐ'  ;
    }

