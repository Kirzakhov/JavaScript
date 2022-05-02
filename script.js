function fact(){
    var n = prompt("Tell the number");
    var res=1;
    for(let i = 1; i <= n; i++){
        res *= i;
    }
    document.write("The factorial is "+res+"<br>");
    var fruits = ["Apple", "Banana", "Orange", "Kiwi", "Papaya"];
    // document.write(fruits.slice(2)+"<br>");
    // document.write(fruits.slice(-3)+"<br>");
    document.write(fruits.slice(-3,-1)+"<br>");
    fruits.splice(1,1);
    fruits.splice(1,0,"Chikoo");
    document.write(fruits.join("-")+"<br>");
    document.write(fruits.toString());
    for(let i = 0; i < fruits.length; i++){
        document.write("<p style='color:cyan; font-weight:bold'>"+fruits[i]+"</p>"+"<br>");
    }
}
function rev(){
    var n = prompt("Tell the number");
    var temp = n;
    var rem, res=0;
    while(temp>0){
        rem = temp%10;
        res = res*10 + rem;
        temp = parseInt(temp/10); 
    }
    document.write("The reverse of "+n+" is "+res);
}