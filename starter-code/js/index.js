function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(product, productPrice) {
  const sumDom = product.querySelector(".sum");
  sumDom.innerText = productPrice.toFixed(2);
}

function getTotalPrice() {
  let totalPrice = 0;
  const productsDom = document.querySelectorAll(".products > article");
  productsDom.forEach(product => {
    console.log(product);
    const singlePrice = parseFloat(product.querySelector(".price").innerText);
    console.log(singlePrice);
    const amount = parseInt(product.querySelector("input").value);
    console.log(amount);
    sum = amount * singlePrice;
    updatePriceByProduct(product, sum)
    totalPrice += sum;
  })
  const totalPriceDom = document.querySelector("#total-price");
  totalPriceDom.innerText = totalPrice.toFixed(2);
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = () => {
  const calculatePriceButton = document.getElementById("calc-prices-button");
  // let createItemButton = document.getElementById("new-item-create");
  // let deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.addEventListener("click", getTotalPrice);
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++) {
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
