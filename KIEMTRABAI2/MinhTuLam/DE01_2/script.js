function myfunc(){
    var hoten = document.getElementById("ht").value;
    console.log(hoten);

    hoten = hoten.trim();
    hoten = hoten.toLowerCase();

    let ans = "";
    let arr = hoten.split(" ");
    for(const word of arr){
        if(word != ""){
            let chuoi = word;
            chuoi = chuoi.charAt(0).toUpperCase() + chuoi.slice(1);
            ans += chuoi + " ";
        }
    }
    ans = ans.trim();
    document.getElementById("ht").value = ans;
}