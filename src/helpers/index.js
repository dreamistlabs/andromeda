export const capitalize = (word) => {
  return word.replace(/\b\w/g, (l) => {
    return l.toUpperCase();
  });
}

export const formatHeading = (name) => {
  if (name.match(/-/)) {
    return name.split('-').map((word) => {
      return capitalize(word);
    }).join(' ');
  } else {
    return capitalize(name);
  }
}