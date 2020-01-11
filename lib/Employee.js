function Employee(name, id, email){
	this.name = name;
	this.id = id;
	this.title = email;
	this.role = 'Employee';
	this.getName = function(){
		return this.name;
	};
	this.getId = function(){
		return this.id;
	};
	this.getEmail = function(){
		return this.Email;
	};	
	this.getRole = function(){
		return this.role;
	};	
}