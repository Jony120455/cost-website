// Memory Button 
const eightGbMemory = document.getElementById('EightGb-btn');
const SixtyGbMemory = document.getElementById('SixtyGb-btn');
// Selection Memory Id Name 
const priceEightGb = document.getElementById('price-memory');
const priceSixtyGb = document.getElementById('price-memory')

// Change Memory Price
eightGbMemory.addEventListener('click', function () {
    priceEightGb.innerText = '0';
    updateTotal()
    updateTotalWithPromoCode()
});
SixtyGbMemory.addEventListener('click', function () {
    priceSixtyGb.innerText = '180';
    updateTotal()
    updateTotalWithPromoCode()
});
/*--------------------------------------*/
// Storage Button 
const firstStorageValue = document.getElementById('firstStorage');
const secondStorageValue = document.getElementById('secondStorage');
const thirdStorageValue = document.getElementById('thirdStorage');
// Change Storage Piece 
const firstStoragePrice = document.getElementById('price-storage');
const secondStoragePrice = document.getElementById('price-storage');
const thirdStoragePrice = document.getElementById('price-storage');

// Change Storage  Price
firstStorageValue.addEventListener('click', function () {
    firstStoragePrice.innerText = '0';
    updateTotal()
    updateTotalWithPromoCode()
});
secondStorageValue.addEventListener('click', function () {
    secondStoragePrice.innerText = '100';
    updateTotal()
    updateTotalWithPromoCode()
});
thirdStorageValue.addEventListener('click', function () {
    thirdStoragePrice.innerText = '180';
    updateTotal()
    updateTotalWithPromoCode()
});
/*--------------------------------------*/
// delivery Button 
const freeDeliveryCost = document.getElementById('free-delivery');
const premiumDeliveryCost = document.getElementById('cost-delivery');

// Change Delivery Cost 
const updateDeliveryCostFree = document.getElementById('delivery-charge');
const updateDeliveryCostPremium = document.getElementById('delivery-charge');

// Update Charge 
freeDeliveryCost.addEventListener('click', function () {
    updateDeliveryCostFree.innerText = '0';
    updateTotal()
    updateTotalWithPromoCode()
});
premiumDeliveryCost.addEventListener('click', function () {
    updateDeliveryCostPremium.innerText = '20';
    updateTotal()
    updateTotalWithPromoCode()
});

/* -----------------------All Total------------------------- */
const bestPrice = document.getElementById('best-price');

function updateTotal() {
    const totalPrice = document.getElementById('total-price');
    const allTotal = parseInt(bestPrice.innerText) + parseInt(priceEightGb.innerText) + parseInt(secondStoragePrice.innerText) + parseInt(updateDeliveryCostFree.innerText);
    totalPrice.innerText = allTotal;
};
/* -----------------------All Total With Promo Code------------------------- */
const totalWithPromoCode = document.getElementById('best-price');

function updateTotalWithPromoCode() {
    const totalWithPromoCode = document.getElementById('total-With-Promo');
    const allTotal = parseInt(bestPrice.innerText) + parseInt(priceEightGb.innerText) + parseInt(secondStoragePrice.innerText) + parseInt(updateDeliveryCostFree.innerText);
    totalWithPromoCode.innerText = allTotal;
    return allTotal;
};
/* ------------------------------Promo Code Button----------------------------------- */
document.getElementById('apply-code').addEventListener('click', function () {
    const InputFiled = document.getElementById('inputValue');
    const userPromoCode = InputFiled.value;
    if (userPromoCode == 'stevekaku') {
        const discount = updateTotalWithPromoCode() * (20 / 100);
        document.getElementById('total-With-Promo').innerText = updateTotalWithPromoCode() - discount;
        // return 'You have got 20% Discount';
    }
    InputFiled.value= '';

})