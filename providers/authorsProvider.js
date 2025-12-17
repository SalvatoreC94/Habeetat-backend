const authors = [
    { id: 1, name: "Stephen King", age: 77, email: "stephen.king@example.com" },
    { id: 2, name: "J.K. Rowling", age: 59, email: "jk.rowling@example.com" },
    { id: 3, name: "George R.R. Martin", age: 76, email: "george.martin@example.com" },
    { id: 4, name: "Haruki Murakami", age: 75, email: "haruki.murakami@example.com" },
    { id: 5, name: "Margaret Atwood", age: 85, email: "margaret.atwood@example.com" },
    { id: 6, name: "Neil Gaiman", age: 64, email: "neil.gaiman@example.com" },
    { id: 7, name: "Elena Ferrante", age: 65, email: "elena.ferrante@example.com" },
    { id: 8, name: "Dan Brown", age: 60, email: "dan.brown@example.com" }
];

function getAllAuthors() {
    return authors;
}

function getAuthorById(id) {
    return authors.find(author => author.id === id);
}

function getAuthorsByfilter(age) {
    return authors.filter(author => author.age === age);
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    getAuthorsByfilter
};