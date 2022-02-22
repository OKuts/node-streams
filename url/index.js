console.log(__dirname);
console.log(__filename);
console.log(__filename.slice(__dirname.length + 1));
// console.log(process.env);
console.log(process.argv);
const url = new URL('https://www.duolingo.com/learn?name=Sasha&surname=back#222');
console.log(url);
console.log(url.searchParams);
