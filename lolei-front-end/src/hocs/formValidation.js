export function validateFirstName(name) {
  let matches = /^[a-zA-Z]{2,31}(?:[\s.]+[a-zA-Z]+)*$/.test(name);

  if (matches === false) {
    return {
      error: true,
      message:
        "Please enter a valid First Name without leading or trailing whitespace!"
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
      message:
        "Please enter a valid Last Name without leading or trailing whitespace!"
    };
  } else {
    return { error: false };
  }
}
