function myfunc(){
    var n = document.getElementById("nhapn").value;
    console.log(n);
    const result = cp(n);
    document.getElementById("tongcp").value = result;
}
function cp(x){
    let sum = 0;
    for(i = 1; i <= x; i++){
        if(i*i <= x){
            sum += i*i;
        }
    }
    return sum;
}