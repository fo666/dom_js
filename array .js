var number=[77,44,55,999,44,];
var hridoy=[]
for(a=0;a<number.length;a++){
    var full=number[a];
    var index=hridoy.indexOf(full)
    if(index==-1){
        hridoy.push(full);
    }
    
}
 console.log(hridoy)

