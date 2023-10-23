function myfunc1(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    // const num3 = document.getElementById("ucln").value;
    console.log(num1);
    console.log(num2);
    if(check_blank() == 1){
        document.getElementById("blank").innerHTML = "Vui lòng nhập đầy đủ thông tin";
    }
    else{
        document.getElementById("blank").innerHTML = "";
        let so1 = num1;
        let so2 = num2;
        
        while(so1 * so2 != 0){
            if(so1 > so2){
                so1 = so1%so2;
            }
            else{
                so2 = so2%so1;
            }
        }
        var ans;
        if(so1 > so2) ans = so1;
        else ans = so2;
        document.getElementById("ucln").value = ans;
    }
}
function check_blank(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let check = 0;

    if(num1 == ""){
        check+=1;
    }
    if(num2 == ""){
        check+=1;
    }
    if(check > 0){
        return 1;
        // document.getElementById("blank").innerHTML = "Vui lòng nhập đầy đủ thông tin";
    }
    else{
        return 0;
        // document.getElementById("blank").innerHTML = "";
    }
}
function myfunc2(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("ucln").value = "";
}