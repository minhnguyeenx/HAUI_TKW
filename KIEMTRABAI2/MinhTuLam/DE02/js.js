function myfunc(){
    var ten = document.getElementById("ht");
    var diachi = document.getElementById("dc");

    console.log(chuanhoa(ten.value));
    console.log(chuanhoa(diachi.value));

    ten.value = chuanhoa(ten.value);
    diachi.value = chuanhoa(diachi.value);
}
function chuanhoa(str){
    let kq = str;

    kq = kq.trim();
    kq = kq.toLowerCase();
    //kq = kq.Replace(/ + /g, " ");
    ans = "";
    for(i = 0; i < kq.length - 1; i++){
        if(kq[i] != " "){
            ans += kq[i];
        }
        else if(kq[i+1] != " "){
            ans += " ";
        }
    }
    ans += kq[kq.length-1];
    ans = ans.charAt(0).toUpperCase() + ans.slice(1);
    for(var i = 0; i < ans.length-1; i++){
        if(ans[i] == " "){
                ans = ans.substring(0, i+1) + ans.charAt(i+1).toUpperCase() + ans.slice(i+2);
        }
    }
    return ans;
}