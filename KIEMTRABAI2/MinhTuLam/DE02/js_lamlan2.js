function myfunc(){
    var ten = document.getElementById("ht");
    var diachi = document.getElementById("dc");

    console.log(ten.value);
    console.log(diachi.value);

    ten.value = chuanhoa(ten.value);
    diachi.value = chuanhoa(diachi.value);
}
function chuanhoa(str){
    str = str.trim();
    str = str.toLowerCase();

    ans = "";
    for(i = 0; i <str.length; i++){
        if(str[i] != " "){
            ans += str[i];
        }
        else if(i+1 < str.length && str[i+1] != " "){
            ans += str[i];
        }
    }
    ans = ans.charAt(0).toUpperCase() + ans.slice(1);
    for(i = 0; i<ans.length; i++){
        if(ans[i] == " "){
            if(i+1 < ans.length){
                ans = ans.substring(0, i+1) + ans.charAt(i+1).toUpperCase() + ans.slice(i+2);
            }
        }
    }
    return ans;
}