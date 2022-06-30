// use for the login & register's page animation 
const x = document.getElementById("login");
const y = document.getElementById("register");
const z = document.getElementById("btn");
const input_emails = document.querySelectorAll('[type="email"]');
const input_pws = document.querySelectorAll('[type="password"]');
const toggle_pws = document.querySelectorAll("#toggle-password");
const register_pw = document.querySelector('[name="register_password"]');
const confirm_pw = document.querySelector('[name="register_confirmpw"]');
const body = document.querySelector('body');

// make all input field null when change page
// [Need to fixed] toggle can't reset
function reset(){
    [...input_emails].map( input => input.value = "" );
    [...input_pws].map( input => input.value = "" );
    // [...toggle_pws].map( toggle => toggle.classList.toggle("bi-eye") );
    document.getElementById("notification").innerHTML = "";
}

// make login page shift
function go_login_page() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

// make register page shift
function go_register_page() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

// Click the login button
function login() {
    go_login_page();
    reset();
}

// Click the register button
function register() {
    go_register_page();
    reset();
}

// Use for /home/re-register start at register page
function check_page(){
    const notification = document.getElementById("notification");
    const register_word = "The email has been registered. Please change the email and retype!";
    if(notification.innerHTML.trim() === register_word.trim()) 
        go_register_page();
    else
        go_login_page();
}

check_page();

// Check confirm password === password
body.addEventListener('keyup', (e) => {

    if( e.target === register_pw || e.target === confirm_pw ){
        if( confirm_pw.value !== register_pw.value && confirm_pw.value){
            document.getElementById("warning").innerHTML = "Your confirm password is different from password!";
            document.getElementById("register-btn").disabled = true;
        }
        else{
            document.getElementById("warning").innerHTML = "";
            document.getElementById("register-btn").disabled = false;
        }
    }
});

// togglePassword
[...toggle_pws].map( toggle_pw => {
                        toggle_pw.addEventListener("click", function () {
                            // toggle the eye icon
                            this.classList.toggle("bi-eye");
                            
                            // toggle the pw type attribute
                            [...input_pws].map( pw => {
                                const type = pw.getAttribute("type") === "password" ? "text" : "password";
                                pw.setAttribute("type", type);
                            });
                        });
                    });