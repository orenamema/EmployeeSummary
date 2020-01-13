const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var team = {};

inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "manager name: "
        },
        {
            type: "input",
            name: "managerId",
            message: "manager's id: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "manager's email: "
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "manager's office number: "
        },
        {
            type: "input",
            name: "engineerName",
            message: "engineer name: "
        },
        {
            type: "input",
            name: "engineerId",
            message: "engineer's id: "
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "engineer's email: "
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "engineer's github username: "
        },
        {
            type: "input",
            name: "internName",
            message: "intern name: "
        },
        {
            type: "input",
            name: "internId",
            message: "intern's id: "
        },
        {
            type: "input",
            name: "internEmail",
            message: "intern's email: "
        },
        {
            type: "input",
            name: "internSchool",
            message: "intern's school: "
        },                

    ])
    .then(function(data){
    	console.log(data);
    	team['manager'] = new Manager(data.managerName, 
    		data.managerId , data.managerEmail, data.managerOfficeNumber);
    	team['engineer'] = new Engineer(data.engineerName, 
    		data.engineerId , data.engineerEmail, data.engineerGithub);
    	team['intern'] = new Intern(data.internName, 
    		data.internId , data.internEmail, data.internSchool);
    	html = generateHTML();
    	// console.log(html);
    	fs.writeFile('output/index.html', html, (err) => {
		    if (err) throw err;
		    console.log('File saved!');
		});


 });


function generateHTML(){
	return `
	<!doctype html>
	<html lang="en">
	      <head>
	        <meta charset="utf-8">
	        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
	        <title>My Team</title>
	        <style>
	        .navbar-center
			{
			    position: absolute;
			    width: 100%;
			    left: 0;
			    top: 0;
			    text-align: center;
			    overflow: visible;
			    height: 0;
			}
			 .navbar {
			  min-height: 150px;
			}

			#nav {
				text-align: center;
				margin-left: 40%;
			}
			
	        </style>
	      </head>
	    <body>
		    <nav class="navbar navbar-light bg-light">
			  <ul id="nav"><a class="navbar-brand text-center" href="#"><h1>My Team</h1></a></ul>
			</nav>
			<div class="container">
				<div class="row">

			        <div class="col-12 col-md-6 col-lg-4">
			            <div class="card">
			                <div class="card-header bg-dark text-white text-center">
			                    <h3>${team.manager.name}</h3>
			                    <h3><i class="fas fa-paste pr-1"></i>${team.manager.title}</h3>
			                </div>
			                <div class="card-body bg-light">
			                    <ul class="list-group">
			                        <li class="list-group-item">ID: ${team.manager.id}</li>
			                        <li class="list-group-item">Email: ${team.manager.email}</li>
			                        <li class="list-group-item">Office Number: ${team.manager.officeNumber}</li>
			                    </ul>
			                </div>
			            </div>
			        </div> 
			        <div class="col-12 col-md-6 col-lg-4" >
			            <div class="card">
			                <div class="card-header bg-dark text-white text-center">
			                    <h3>${team.engineer.name}</h3>
			                    <h3><i class="fas fa-glasses pr-1"></i>${team.engineer.title}</h3>
			                </div>
			                <div class="card-body bg-light">
			                    <ul class="list-group">
			                        <li class="list-group-item">ID: ${team.engineer.id}</li>
			                        <li class="list-group-item">Email: ${team.engineer.email}</li>
			                        <li class="list-group-item">GitHub: ${team.engineer.github}</li>
			                    </ul>
			                </div>
			            </div>
			        </div>
			        <div class="col-12 col-md-6 col-lg-4">
			            <div class="card">
			                <div class="card-header bg-dark text-white text-center">
			                    <h3>${team.intern.name}</h3>
			                    <h3><i class="fas fa-user-graduate pr-1"></i>${team.intern.title}</h3>
			                </div>
			                <div class="card-body bg-light">
			                    <ul class="list-group">
			                        <li class="list-group-item">ID: ${team.intern.id}</li>
			                        <li class="list-group-item">Email: ${team.intern.email}</li>
			                        <li class="list-group-item">School: ${team.intern.school}</li>
			                    </ul>
			                </div>
			            </div>
			        </div> 

				</div>


			</div>
	    </body>
	</html>
	`;
}


