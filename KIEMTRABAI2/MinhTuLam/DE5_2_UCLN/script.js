function myfunc(){
    var str = document.getElementById("nhapchuoi").value;
    console.log(str);

    // let sotu = 0;
    // const sotu =  count_word(str);
    const sotu =  count_word_2(str);

    document.getElementById("demtu").value = sotu;
}
function count_word(x){
    let cnt = 0;
    if(x.length == 0) cnt = 0;
    else{
        if(x[0] == " ") cnt = 0;
        else cnt = 1;
    }
    for(i = 0; i < x.length-1; i++){
        if(x[i] == " "){
            if(x[i+1] != " "){
                cnt++;
            }
        }
    }
    return cnt;
}
function count_word_2(x){
    let arr = x.split(" ");
    let cnt = 0;
    for(const word of arr){
        if(word != ""){
            cnt++;
        }
    }
    return cnt;
}