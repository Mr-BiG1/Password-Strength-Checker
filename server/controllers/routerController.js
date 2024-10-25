const bcrypt = require('bcryptjs');
const passwordChecker = require('check-password-strength');
var passwordGenerator = require('generate-password');
const salt = bcrypt.genSaltSync(10);

// Render index page
const getIndex = (req, res) => {
    res.render('index');
}

// Render about page
const getAbout = (req, res) => {
    res.render('about');
}

// Check password strength
const checkPassword = (req, res) => {
    const { password } = req.body;

    let passwordInfo = getPassInfo(password);
    const strength = passwordChecker.passwordStrength(password).value;
    let data = inspectPassword(strength);

    res.render('result', { data, password, passwordInfo });
};

// Generate a new password
const getPasswordGenerator = (req, res) => {
    const newPassword = passwordGenerator.generate({
        length: 10,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        strict: true
    });

    const strength = passwordChecker.passwordStrength(newPassword).value;
    let data = inspectPassword(strength);
    let passwordInfo = getPassInfo(newPassword);

    res.render('result', { password: newPassword, data, passwordInfo });
}

const hashPassword = (req,res)=>{
    let hash = '';
    res.render('hash',{hash})
}

// Hash a password and render the result
const gethashPassword = (req, res) => {
    const { text } = req.body;
    
    if (!text) {
        return res.render('hash', { hash: '', error: 'Please provide a password to hash.' });
    }
 
    const hash = bcrypt.hashSync(text, salt); 
    console.log(hash)
    res.render('hash', { hash });
};

// Compare a password with the hash
const decrypt = (req, res) => {
    const { text } = req.body;
    const isMatch = bcrypt.compareSync(text, hash); 
    res.send(isMatch ? 'Password matches the hash!' : 'Password does not match.');
}

// A function to check the password's strength and return feedback data
const inspectPassword = (strength) => {
    let data = {
        message: '',
        class: '',
        suggestion: '',
        width: '0%'  // Default width for progress bar
    };

    if (strength === 'Very Weak') {
        data.message = 'The password is very weak. Consider using a stronger password.';
        data.class = 'danger';
        data.suggestion = 'Use a mix of uppercase, lowercase, numbers, and special characters.';
        data.width = '20%';
    } else if (strength === 'Weak') {
        data.message = 'The password is weak. It’s best to strengthen it.';
        data.class = 'warning';
        data.suggestion = 'Include more characters, symbols, and numbers.';
        data.width = '40%';
    } else if (strength === 'Medium') {
        data.message = 'The password is moderate. Strengthen it for better security.';
        data.class = 'warning';
        data.suggestion = 'Consider adding more varied characters.';
        data.width = '60%';
    } else if (strength === 'Strong') {
        data.message = 'The password is strong. It provides good security!';
        data.class = 'success';
        data.suggestion = 'Consider adding more length or special characters for extra strength.';
        data.width = '80%';
    } else if (strength === 'Very Strong') {
        data.message = 'The password is very strong. Excellent!';
        data.class = 'success';
        data.suggestion = '';
        data.width = '100%';
    }

    return data;
}

// Function to analyze the password's components (length, uppercase, lowercase, numbers, special chars)
const getPassInfo = (password) => {
    let passwordInfo = {
        length: password.length,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        numbers: /[0-9]/.test(password),
        special: /[\W_]/.test(password)
    };

    return passwordInfo;
}

module.exports = {
    getIndex,
    getAbout,
    checkPassword,
    getPasswordGenerator,
    gethashPassword,
    decrypt,
    hashPassword
};
