function myfunc(){
    const ten = document.getElementById("ten");
    const diachi = document.getElementById("diachi");

    console.log(chuanhoaten(ten.value));
    console.log(chuanhoaten(diachi.value));
    
    ten.value = chuanhoaten(ten.value);
}

function chuanhoaten(str){
    let strNew = str;

    strNew = strNew.trim();
    strNew = strNew.toLowerCase();
    strNew = strNew.replace(/  +/g, " ");

    let arr = strNew.split(" ");
    strNew = "";
    for(const word of arr){
        if(word.trim().length > 0){
            let string = word + "";
            if(string == "," || string == "."){
                //strNew += string //đây là chuẩn hoá thêm cho địa chỉ
            }
            else{
                string = string.charAt(0).toUpperCase() + string.slice(1);
                strNew += " " + string;
            }
        }
    }
    strNew = strNew.trim();
    return strNew;
}