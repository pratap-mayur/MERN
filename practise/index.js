let isleapyear = (year) =>{
    if((year%4===0 && year%100!==0) || year%400===0){
        //return true;
        console.log(true);
}else{
        //return false;
        console.log(false);
    }
}
isleapyear(2027);

