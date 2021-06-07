var client = ZAFClient.init();

function init() {
	
	getUser().then(function(currentUser.id){
	var output = 'assignee: ' + currentUser.id;
	return output;
	
	client.set('ticket.assignee', getSetRequest());	
	});
	
	getMailfromUser().then(function(currentUser.user_fields.absender_mailadresse){
	var output = 'ticket.recipient' + currentUser.user_fields.absender_mailadresse
	return output;
	
	client.set('ticket.recipient', currentUser.user_fields.absender_mailadresse)
	});	
}			

function getUser() {
	return client.get('currentUser.id').then(function(data){
		return data['currentUser.id'];
	});
}

function getGroup() {
	return client.get('currentUser.groups.0.id').then(function(data){
		return data['currentUser.groups.0.id'];
	});
}

function getSetRequest() {
	var setRequest = '{ userId:' + getUser() +', groupId:' +getGroup() + '}'
	return setRequest
}

function getMailfromUser() {
	return client.get('currentUser').then(function(data){
		return data['currentUser.user_fields.absender_mailadresse'];
	});
}