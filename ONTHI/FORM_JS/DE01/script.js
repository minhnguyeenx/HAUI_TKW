function myfunc(){
    var mk = document.getElementById("mk").value;
    var ht = document.getElementById("ht").value;
    let cnt1 = 0;
    let cnt2 = 0;
    if(ht.length == 0){
        cnt1 = 1;
    }
    if(mk.length == 0){
        cnt2 = 1;
    }
    if(cnt1+cnt2 == 2){
        document.getElementById("errortext").innerHTML = "Vui lòng nhập mk và tên";
    }
    else if(cnt2 == 1){
        document.getElementById("errortext").innerHTML = "Vui lòng nhập mk";
    }
    else if(cnt1 == 1){
        document.getElementById("errortext").innerHTML = "Vui lòng nhập tên";
    }
    else{
        document.getElementById("errortext").innerHTML = " ";
        var re = new RegExp("^(\D)(?=.*[0-9])(?=.*[A-Z])(?=.{8,}$)");
        // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    
        if(re.test(mk)){
            alert("Nhập đúng mật khẩu");
        }
        else{
            alert("Nhập sai mật khấu");
        }
    }
}