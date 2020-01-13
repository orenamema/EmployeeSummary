# EmployeeSummary - Template Engine

# Introduction
I have built a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. 

This application passes all unit tests. When the user has completed building the team, the application creates an HTML file that displays a team roster based on the information provided by the user. 

## Technology Used
* JSON
* NPM
* Jest
* Inquirer
* Bootstrap
* Fontawesome
* JS
* HTML

## Application
![alt text](https://github.com/orenamema/EmployeeSummary/raw/master/images/employee.gif)

![alt text](https://github.com/orenamema/EmployeeSummary/raw/master/images/employee2.png)

## Requirements

Following are the requirements for this project:

* Functional application.
* GitHub repository with a unique name and a README describing the project.
* User can use the CLI to generate an HTML page that displays information about their team.
* All tests must pass.

## Code
```
inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "manager name: "
        },
        .
        .       
        .           
        {
            type: "input",
            name: "internSchool",
            message: "intern's school: "
        },                

    ])
    .then(function(data){
    	team['manager'] = new Manager(data.managerName, 
    		data.managerId , data.managerEmail, data.managerOfficeNumber);
    	team['engineer'] = new Engineer(data.engineerName, 
    		data.engineerId , data.engineerEmail, data.engineerGithub);
    	team['intern'] = new Intern(data.internName, 
    		data.internId , data.internEmail, data.internSchool);
    	html = generateHTML();
    	fs.writeFile('output/index.html', html, (err) => {
		    if (err) throw err;
		    console.log('File saved!');
		});
 });
 ```
 This portion of the code highlights the inquirer prompt used to prompt the user for employees information.

## Authors
**Oren Amema**
* [Github](https://github.com/orenamema)
* [LinkedIn](https://www.linkedin.com/in/oren-amematekpo-b7a12b13)
