const authors = [
    { id: 1, name: "Salvatore C.", age: 30, email: "salvatore@example.com" },
    { id: 2, name: "John Doe", age: 25, email: "john@example.com" },
    { id: 3, name: "Jane Smith", age: 35, email: "jane@example.com" }
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