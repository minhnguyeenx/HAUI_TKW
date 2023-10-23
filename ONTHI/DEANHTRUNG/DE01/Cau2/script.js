function fun() {
    const repass = /^(?=.*[A-Z])([a-zA-Z0-9!@#$%&*_?]){7,}$/;
    const repas2 = /^(?=.*[A-Z])([a-zA-Z0-9!@#$%&*_?]){7,}$/;

    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;

    if(name === "" || pass === ""){
        alert("Bạn nhập sai!");
        return;
    }
    if(!repass.test(pass)){
        alert("Bạn nhập sai!");
        return;
    }
    if(!isNaN(pass[0])){
        alert("Bạn nhập sai!");
        return;
    }
    alert("Bạn nhập đúng");
}