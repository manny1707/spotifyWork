let cookies = document.cookie;

window.addEventListener('load', loginButtons());

function loginButtons() {
    // organize login & create user modal in self invoking function
    let loginModal = document.getElementById('id01');
    let createUserModal = document.getElementById('id02');

    ///
    if (cookies == "") {
        $(window).load(function () {
            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false,
            });
        });
    }
    ///

    window.addEventListener("click", function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        } else if (event.target == createUserModal) {
            createUserModal.style.display = "none";
        }
    });
};
