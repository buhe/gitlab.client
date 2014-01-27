exports.list = function(sdk,fn) {

	sdk.issues.all(function(issues) {
		
		for (var i in issues) {
			// console.log(issues[i]);
			if(!fn || fn(issues[i])){
				console.log("Id : " + issues[i].id + " , Title : " + issues[i].title)
			}
		}
	});
}

exports.listOpen = function(sdk) {
	console.log;
	console.log("===Opened Issues ===");
	exports.list(sdk,function(i){
		return i.state === 'opened';
	})
}

exports.close = function(sdk,id){

	console.log("Close Issue " + id + " successful. ");
}