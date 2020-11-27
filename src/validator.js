const validator = {
  isValid:(num)=>{
    let reverse = '';
    for(let i= num.length-1; i>=0; i--){
        reverse = reverse + num[i];
    }
    const NewArray = Array.from(reverse).map(Number);
    let odd = [];
    for(let i=0; i<NewArray.length; i++){
        if(i%2!==0){
            odd.push(NewArray[i]*2);
        }else{
            odd.push(NewArray[i]*1);
        }
    }
    let list = [];
    for(let i=0; i<odd.length; i++){
        if(odd[i]>=10){
            list.push((odd[i]-10)+1);
        }else{
            list.push(odd[i]*1);
        }
    }
    const total = list.reduce((sum, current) => sum + current, 0);
    let verified = false;
    if(total%10===0){
        verified = true
    }
    return verified
},
maskify:(num)=>{
  let maskify2 = '';
  for(let i=0; i<num.length; i++){
      if(i<=num.length-5){
          maskify2 = maskify2 + '*';
      }else{
          maskify2 = maskify2 + num[i];
      }
  }
  return maskify2
}
};

export default validator;
