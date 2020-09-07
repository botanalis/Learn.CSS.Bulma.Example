var data = [
    { id: 1, name: 'TensorFlow For Machine Intelligence', price: 22.99, pages: 270, isbn: '9781939902351', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
    { id: 2, name: 'Docker in Production', price: 22.99, pages: 156, isbn: '9781939902184', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
    { id: 3, name: 'Developing a Gulp.js Edge', price: 22.99, pages: 134, isbn: '9781939902146', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
    { id: 4, name: 'Learning Swift', price: 22.99, pages: 342, isbn: '9781939902115', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
    { id: 5, name: 'Choosing a JavaScript Framework', price: 22.99, pages: 96, isbn: '9781939902092', imgUrl: 'https://picsum.photos/seed/picsum/162/210'},
    { id: 6, name: 'Deconstructing Google Cardboard Apps', price: 22.99, pages: 178, isbn: '9781939902245', imgUrl: 'https://picsum.photos/seed/picsum/162/210'}
];

module.exports = function () {
    return {
        books: data,
        orders: []
    }
}
