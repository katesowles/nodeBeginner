// this is sync
const result = database.query('SELECT * FROM hugetable');
console.log('hello world');

// this is async
database.query('SELECT * FROM hugetable', function (rows) {
  const result = rows;
})
console.log('hello world');
