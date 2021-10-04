
module.exports = function CreatePizza() {
   let smallTotal = (0.00).toFixed(2);
   let mediumTotal = (0.00).toFixed(2);
   let largeTotal = (0.00).toFixed(2);
   let grandTotal = (0.00).toFixed(2);

   let smallQty = 0;
   let mediumQty = 0;
   let largeQty = 0;

   let orders = [];
   let orderId = 0;
   let buttonStatus = "Pay";

   function buySmall() {
      smallTotal = (Number(smallTotal) + 23.75).toFixed(2);
      grandTotal = (Number(grandTotal) + Number(smallTotal)).toFixed(2);
      smallQty++;
   }

   function buyMedium() {
      mediumTotal = (Number(mediumTotal) + 43.75).toFixed(2);
      grandTotal = (Number(grandTotal) + Number(mediumTotal)).toFixed(2);
      mediumQty++;
   }

   function buyLarge() {
      largeTotal = (Number(largeTotal) + 65.75).toFixed(2);
      grandTotal = (Number(grandTotal) + Number(largeTotal)).toFixed(2);
      largeQty++;
   }

   function getTotals() {
      return {
         smallTotal,
         mediumTotal,
         largeTotal,
         grandTotal
      }
   }

   function getQuanties() {
      return {
         smallQty,
         mediumQty,
         largeQty
      }
   }

   function createOrder() {
      orderId++;
      const order = {
         orderId : orderId,
         status : "Payment due",
         amount : grandTotal,
         buttonStatus: "Pay"
      }
      orders.push(order);
   }

   function getOrders() {
      return orders;
   }

   function resetTotals(){
      smallTotal = (0.00).toFixed(2);
      mediumTotal = (0.00).toFixed(2);
      largeTotal = (0.00).toFixed(2);
      grandTotal = (0.00).toFixed(2);
      smallQty = 0;
      mediumQty = 0;
      largeQty = 0;
   }

   function updateOrderStatus(id){
      let obj = orders.filter(item => item.orderId === Number(id));

      orders.find(item => {
         if(item == obj[0]) {
            if(item.status == "Payment due") {
               item.status = "Paid";
               item.buttonStatus = "Collect"
            } else if(item.status == "Paid") {
               item.status = "Collected";
            } 
         }
      });
   }

   function getButtonStatus() {
      return buttonStatus;
   }

   return {
      getTotals,
      getQuanties,
      buySmall,
      buyMedium,
      buyLarge,
      createOrder,
      getOrders,
      resetTotals,
      updateOrderStatus,
      getButtonStatus

   }


}