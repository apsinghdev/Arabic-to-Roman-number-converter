function convertToRoman(num) {
 
 let romanArr = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]];

let romanNum = [];

romanArr.forEach(function(p){
  while( num >= p[1]){
     romanNum.push(p[0]);
     num -= p[1];
  };
})
  return romanNum.join('')
}
