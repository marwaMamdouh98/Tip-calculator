 /* put id in varibles*/
let bill = document.getElementById("tipBill");
let servicePeople = document.getElementById("servPeople");
let numPeople = document.getElementById("tipPeople");
let tipBtn = document.getElementById("tipBtn");
 
     
// create class of tip calculator 

class TipBill {
    constructor (bill ,numPeople , servicePeople){
        this.bill=bill;
        this.numPeople = numPeople;
        this.servicePeople=servicePeople;
    }
   
    //  method for check input 
        checkData(){
        if(bill == "" || servicePeople == 0 ){
            alert (" please inter your data please ....");
        }
        else {
            this.clacTip();
            this.clearData();  
            }
            
        }
        // method for calculate data
        clacTip(){
            var calcTip = (this.bill / this.numPeople) * this.servicePeople;
            calcTip = Math.round(calcTip * 100) / 100;
            return calcTip;
        }
    //  method for clear input 
    clearData(){
        bill.value = "" ;
        servicePeople.value="";
        numPeople.value="";
        
    }
    // method for show output
   /* displayData(){
       
        document.getElementById("tipPeople").innerHTML="set the vale "+calculatorTip.checkData(); 
     }*/
}
    //for display output
        tipBtn.addEventListener("click", function(e) {
        e.preventDefault();
           let calculatorTip = new  TipBill (bill.value , numPeople.value , servicePeople.value);
            calculatorTip.checkData();
            var showData =document.getElementById("result");
            var temp ="";
            temp+=`<h3>the amount is `+calculatorTip.clacTip()+` $</h3>`
           // showData.innerHTML="the amount is "+calculatorTip.clacTip()+"$";
           showData.innerHTML=temp;
              
        });
        
        
   