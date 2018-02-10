export function validateFirstName(name) {
  let matches = /^[a-zA-Z]{2,31}(?:[\s.]+[a-zA-Z]+)*$/.test(name);

  if (matches === false) {
    return {
      error: true,
      message: "Please enter a valid First Name!"
    };
  } else {
    return { error: false };
  }
}

export function validateLastName(name) {
  let matches = /^[a-zA-Z'-.]{2,31}(?:[\s.]+(?!.*\s\s)\S(.*\S)[a-zA-Z]+)*$/.test(
    name
  );

  if (matches === false) {
    return {
      error: true,
      message: "Please enter a valid Last Name!"
    };
  } else {
    return { error: false };
  }
}
export function validateEmail(email) {
  let matches = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    email
  );
  if (matches === false) {
    return {
      error: true,
      message: "Please enter a valid email address!"
    };
  } else {
    return { error: false };
  }
}

export function validatePassword(password) {
  let matches = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(
    password
  );

  if (matches === false) {
    return {
      error: true,
      message:
        "Password must contain 1 upper case letter, 3 lower case letters, 1 number, and be a minimum of 8 characters."
    };
  } else {
    return { error: false };
  }
}
