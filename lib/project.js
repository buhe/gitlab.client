exports.list = function(sdk) {
	sdk.projects.all(function(projects) {
		console.log;
		console.log("=== Projects ===");
		for(var i in projects){
			console.log("id : " + projects[i].id + " , name : " + projects[i].name);
		}
	});
}



exports.show = function(sdk, projectId) {

	sdk.projects.show(projectId,function(project) {
		console.log;
		console.log("=== Project ===");
		return console.log(project);
	});

	sdk.projects.members.list(projectId, function(members) {
		console.log("");
		console.log("=== Members ===");
		return console.log(members);
	});
}

exports.list = function(sdk) {
	sdk.projects.all(function(projects) {
		console.log;
		console.log("=== Projects ===");
		for(var i in projects){
			console.log("id : " + projects[i].id + " , name : " + projects[i].name);
		}
	});
}