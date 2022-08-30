const fonts = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

for (let f of fonts) {
  
  f.onclick = function() {
  	
  	book.querySelector('.font-size_active').classList.remove('font-size_active');
  	f.classList.add('font-size_active');

    if (f.classList.contains('font-size_small')) {
      book.classList.add('book_fs-small');
      return false
    } else if (f.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
        return false
    } else {
        book.className = 'book';
        return false;
    }
  }
}