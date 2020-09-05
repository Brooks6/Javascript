var myMovie = {
	title: "the social network",
	releaseYear: "2010",
	duration: 2.0,
	actor: [
		{
			name: "jessie eisenberg",
			birthday: new Date("October 5, 1983"),
			hometown: "new york"
		},
		{
			name: "roonie mara",
			birthday: new Date("April 17, 1985"),
			hometown: "bedford new york"
		},
	]
}

document.write(myMovie.actor[1].birthday);