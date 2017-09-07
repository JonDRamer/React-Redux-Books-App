export function selectBook(book) {
  // selectBook is an action creator and needs to return an action
  // which is just an object with a type property and a payload
  return {
    type: 'BOOK_SELECTED',//Type is always uppercased
    payload: book
  };
}
