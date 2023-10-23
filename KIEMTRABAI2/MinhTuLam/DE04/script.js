function myfunc(){
    const n = document.getElementById("nhapso").value;
    console.log(n);
    let ans = "";
    for(let i = 6; i <= n; i++){
        if(check(i) == 1){
            ans += i + ", ";
        }
    }
    ans = ans.slice(0, -2);
    document.getElementById("hoanhao").value = ans;
}
function check(x){
    let sum = 0;
    for(let i = 0; i <= x/2; i++){
        if(x % i == 0){
            sum += i;
        }
    }
    if(sum == x) return 1;
    return 0;
}