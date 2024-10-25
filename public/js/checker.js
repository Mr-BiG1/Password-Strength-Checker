// this is the pass check logic if you want feel free to use this instead of the other one. 
function checkPassword() {
    var password = document.getElementById("password").value;
    let strength = { message: 'very weak', class: 'week' };

    if (password.length >= 8) {
        strength.message = 'weak';
        strength.class = 'weak';

        if (/[A-Z]/.test(password)) {
            strength.message = 'moderate';
            strength.class = 'moderate';
        }

        if (/[0-9]/.test(password) && /[\W_]/.test(password)) {
            strength.message = 'strong';
            strength.class = 'strong';
        }

        return strength;
    }
}