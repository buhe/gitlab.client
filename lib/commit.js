exports.list = function(sdk) {
	sdk.projects.listCommits({'id':58},function(commits) {
		console.log;
		console.log("=== Commits ===");
		for(var i in commits){
			console.log("id : " + commits[i].id + " , title : " + commits[i].title + " , author : " + commits[i].author_name);
			// console.log(commits[i])
		}
	});
}