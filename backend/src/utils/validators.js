

class Validators {
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  isStrongPassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  }
}

export default new Validators();