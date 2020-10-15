module.exports = function toReadable (number) {
  
  function toReadable (number) {
    let result;
    let val = String(number);
    let units = String(val % 10);
    let deci = Math.trunc(val/10);
      alert(val<100);
    alert(deci);
  
    if(val < 10){
      return reply(val);
  
    } else if(10 <= val < 20){
      return replyDec(val - 10);
  
    }
  
  }
  
  function reply(x){
      let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      return arr[x];
    };
  
  function replyDec(x){
    let arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    return arr[x];
  };
  
  function decim(x){
    let arr = ['0', '1', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return decim[x];
  };
  
  toReadable(25);
   //will return 'nine hundred ninety seven'   //will return 'nine hundred ninety seven'
}

