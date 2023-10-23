function myfunc(){
    const n = document.getElementById("nhapso").value;
    // let str = document.getElementById("hoanhao").value; // làm như này không hiện lên đâu
    console.log(n); // ghi nhớ những gì mình đã nhập vào, không có cũng ok
    // bên js khởi tạo nhớ để let nhưng niểu thức cần tính toán
    let sum = 0;
    for(let i = 6; i <= n; i++){
        if(check(i) == 1){
            sum += i;
        }
    }
    document.getElementById("hoanhao").value = sum; //cái này phải nhớ có .value
}
function check(x){
    let sum = 0;
    for(let i = 1; i <= x/2; i++){
        if(x % i == 0){
            sum += i;
        }
    }
    if(sum == x) return 1;
    return 0;
}