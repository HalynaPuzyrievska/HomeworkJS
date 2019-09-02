function loadBook(element) {
    var out = document.getElementById('out');
    out
      .appendChild(document.createElement('div'))
      .classList.add('book');
    out
      .lastChild
      .appendChild(document.createElement('div'))
      .classList.add('name');
    out
      .lastChild
      .getElementsByClassName('name')[0]
      .innerText += element.name;
    out
      .lastChild
      .appendChild(document.createElement('div'))
      .classList.add('block');
    out
      .lastChild
      .getElementsByClassName('block')[0]
      .appendChild(document.createElement('div'))
      .classList.add('block_text');
    out
      .lastChild
      .getElementsByClassName('block')[0]
      .appendChild(document.createElement('div'))
      .classList.add('block_number'); 
    out
      .lastChild
      .getElementsByClassName('block')[0]
      .getElementsByClassName('block_number')[0]
      .appendChild(document.createElement('div'))
      .classList.add('pages');
    out
      .lastChild
      .getElementsByClassName('block')[0]
      .getElementsByClassName('block_text')[0]
      .appendChild(document.createElement('div'))
      .classList.add('authors');
    out
      .lastChild
      .getElementsByClassName('block')[0]
      .getElementsByClassName('block_text')[0]
      .appendChild(document.createElement('div'))
      .classList.add('publisher');
    out
      .lastChild
      .getElementsByClassName('block')[0]
      .getElementsByClassName('block_number')[0]
      .getElementsByClassName('pages')[0]
      .innerText += element.numberOfPages + ' pages';
    out
      .lastChild
      .getElementsByClassName('block')[0]
      .getElementsByClassName('block_text')[0]
      .getElementsByClassName('authors')[0]
      .innerText += element.authors;
    out
      .lastChild
      .getElementsByClassName('block')[0]
      .getElementsByClassName('block_text')[0]
      .getElementsByClassName('publisher')[0]
      .innerText += 'Publisher: ' + element.publisher;
}

