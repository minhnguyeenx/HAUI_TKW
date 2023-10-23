function myfunc1(){
    var num = document.getElementById("nhapn").value;

    let arr = num.split("");
    let cnt = 0;
    for(const i of arr){
        if(i%2 == 1){
            cnt++;
        }
    }
    document.getElementById("sole").value = cnt;

    
}
function myfunc2(){
    document.getElementById("nhapn").value = "";
    document.getElementById("sole").value = "";
}