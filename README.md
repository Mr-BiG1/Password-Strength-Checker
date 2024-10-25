# Password Strength Checker 🔒

This *Password Strength Checker* is a web application built with Node.js and Express that assesses password strength, generates secure passwords, and hashes passwords with bcrypt. It’s designed for users interested in cybersecurity practices and password security, providing useful feedback on password quality and hashing.

![Screenshot 2024-10-25 012841](https://github.com/user-attachments/assets/d29cbeb8-4fe5-4995-8c6c-dd1532bf77be)

![Screenshot 2024-10-25 012901](https://github.com/user-attachments/assets/7b06c70e-8bb9-4da0-8c2c-22dd6740d742)

![Screenshot 2024-10-25 012826](https://github.com/user-attachments/assets/c3a5d216-1bcd-4192-9db5-aa32e1e3c898)



## Features 🌟
- *Password Strength Checker*: Evaluates a given password’s strength (e.g., Very Weak, Weak, Medium, Strong, Very Strong) and provides suggestions for improvement.
- *Password Generator*: Generates a secure, random password with customizable options (length, uppercase, lowercase, numbers, and symbols).
- *Password Hashing*: Hashes user-provided passwords using bcrypt for added security.
- *Password Comparison*: Compares a plain password with a hash to verify if they match.

## Technologies Used 🛠
- *Node.js* and *Express* for server-side scripting
- *bcryptjs* for hashing passwords securely
- *check-password-strength* for password strength evaluation
- *generate-password* for creating secure passwords
- *Bootstrap* for styling

## Getting Started 🚀

### Prerequisites
Ensure you have *Node.js* and *npm* installed on your machine.

### Installation

1. Clone the repository:
    bash
    `git clone https://github.com/Mr-BiG1/Password-Strength-Checker.git`
    
2. Navigate into the project directory:
    bash
   ` cd password-strength-checker `
    
3. Install the necessary dependencies:
    bash
   ` npm install `
    
   
### Running the Application

1. Start the server:
    bash
    node app.js
    
2. Open your web browser and go to http://localhost:3000.

## Usage 📋

### 1. Check Password Strength
- Enter a password on the main page to receive feedback on its strength and suggestions for improvement.

### 2. Generate a Secure Password
- Use the password generator option to create a random, secure password.

### 3. Hash a Password
- Go to the Hash page, enter a password, and get its hash.

### 4. Compare a Password with Hash
- On the Hash page, enter a password to hash, then enter a password to compare it with the generated hash.

## Contributing 🤝
Contributions are welcome! Please feel free to submit issues or pull requests.

## License 📝
This project is licensed under the MIT License.

## Acknowledgements 🙏
- *bcryptjs* for password hashing
- *check-password-strength* for password strength assessment
- *generate-password* for generating random secure passwords

---

Feel free to reach out if you have any questions or feedback!
