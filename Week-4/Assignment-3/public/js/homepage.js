// Use for the login & register's page check and animation function
const form_login = document.getElementById("login");
const form_register = document.getElementById("register");
const btn_top = document.getElementById("btn");
const input_emails = document.querySelectorAll('[type="email"]');
const input_pws = document.querySelectorAll('[type="password"]');
const toggle_pws = document.querySelectorAll("#toggle-password");
const register_pw = document.querySelector('[name="register_password"]');
const confirm_pw = document.querySelector('[name="register_confirmpw"]');
const body = document.querySelector('body');
const warning = document.getElementById("warning");
const register_btn = document.getElementById("register-btn");
const notification = document.getElementById("notification");

// Make all input field null when change page
// [Need to fixed] toggle password can't reset
function reset(){
    [...input_emails].map( input => input.value = "" );
    [...input_pws].map( input => input.value = "" );
    // [...toggle_pws].map( toggle => toggle.classList.toggle("bi-eye") );
    document.getElementById("notification").innerHTML = "";
}

// Use for login/register page position parameter
function go_page(page){
    
    let [x, y, z] = ["", "", ""];
    if(page === "login")                        // login
        [x, y, z] = ["50px", "450px", "0"];
    else                                        // register
        [x, y, z] = ["-400px", "50px", "110"];

    [form_login.style.left, form_register.style.left, btn_top.style.left] = 
    [x, y, z];
}

// Use for topbutton login/register click response
function btn_top_click(btn){
    go_page(btn);
    reset();
}

// Use for /home/re-register start at register page
function check_page(){
    const register_word = "The email has been registered. Please change the email and retype!";
    if(notification.innerHTML.trim() === register_word.trim()) 
        go_page("register");
    else
        go_page("login");
}

check_page();

// Check confirm password === password
body.addEventListener('keyup', (e) => {

    if( e.target === register_pw || e.target === confirm_pw ){
        if( confirm_pw.value !== register_pw.value && confirm_pw.value){
            warning.innerHTML = "Your confirm password is different from password!";
            register_btn.disabled = true;
        }
        else{
            warning.innerHTML = "";
            register_btn.disabled = false;
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