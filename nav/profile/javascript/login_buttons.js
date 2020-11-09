// (function loginButtons() {
//     // organize login & create user modal in self invoking function
//     let loginBtn = document.getElementById('id01');
//     let createUserBtn = document.getElementById('id02');
    
//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//             if (event.target == loginBtn) {
//                     loginBtn.style.display = "none";
//             } 
//             else if (event.target == createUserBtn) {
//                 createUserBtn.style.display = "none";
//             }
//     }
// }) ();

// organize login & create user modal in self invoking function
let loginBtn = document.getElementById('id01');
let createUserBtn = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == loginBtn) {
                loginBtn.style.display = "none";
        } 
        else if (event.target == createUserBtn) {
            createUserBtn.style.display = "none";
        }
}
