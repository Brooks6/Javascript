var books =[
	{
		title: "harry potter",
		author: "jk rowling",
		pages: 300
	},
	{
		title: "green eggs & ham",
		author: "dr.seuss",
		pages: 25
	}
];
var friends = ["oscar", "angela", "kevin"];

friends.forEach(function(friend){//for every single in this friends array
	document.write(friend + "<br>");
});

books.forEach(function(book){
	document.write(book.title + "<br>");
	document.write(book.author + "<br>");
	document.write(book.title + "<hr>");
});