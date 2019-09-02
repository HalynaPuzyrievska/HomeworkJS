request('get', 'https://anapioficeandfire.com/api/books/', function(data) {
    for( var i = 0; i < data.body.length; i++) {
        loadBook(data.body[i]);
    };
});







