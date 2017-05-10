//using selectors for managing complex data

export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}
