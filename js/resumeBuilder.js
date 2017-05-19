var bio = {
    name: 'Dr. Gonzo',
    role: 'Cool Consultant',
    contacts: {
        mobile: '234-234-5555',
        email: 'gooddaysunshine@nowhere.net',
        github: 'pasteroo',
        location: 'Chicago',
        blog: 'I hate blogs',
    },
    welcomeMessage: 'Some message',
    skills: ['coolness', 'front end development', 'drinking '],
    biopic: 'images/fry.jpg',
};

var education = {
    schools: [{
        name: 'Illinois State University',
        location: 'Normal, IL',
        degree: 'Bachelor',
        majors: ['Front-End Web Development', 'Awesomeness'],
        dates: '02/03/17 - Present',
        url: 'https://en.wikipedia.org/wiki/Illinois_State_University'},
    ],
    onlineCourses: [{
       title: 'Front-end Web Development',
       school: 'Udacity',
       dates: 'Now',
       url: 'https://www.udacity.com/'},
   ],
};

var work = {
  jobs: [{
        employer: 'Zeus',
        title: 'Messenger',
        location: 'Mt. Olympus',
        dates: 'Sometime in the early 2nd century BCE',
        description: 'Was Zeus\' messenger, but mainly just got drunk with him and covered for his shenanigans',
        url: 'https://en.wikipedia.org/wiki/Zeus'},
    ],  
};

var projects = {
    projects: [{
        title: 'Project Mayhem',
        dates: 'mid 1990\'s',
        description: 'Reset the history books',
        images: ['images/fry.jpg', 'images/fry.jpg'],
        url: 'https://en.wikipedia.org/wiki/Fight_Club_(novel)'
        },
        {
        title: 'Disco Inferno',
        dates: 'May-30-2016 - May-29-2017',
        description: 'Boogied super hard',
        images: ['images/fry.jpg', 'images/fry.jpg'],
        url: 'https://en.wikipedia.org/wiki/Disco_Inferno'
        },
    ],
};


bio.display = function(){
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name) + HTMLheaderRole.replace('%data%', bio.role));
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic).replace('%alt%', bio.name));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    $('#header').append(HTMLskillsStart);
    
    for(var i = 0; i < bio.skills.length; i++){
        $('#header').append(HTMLskills.replace('%data%', bio.skills[i]));
    }
    
    $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#topContacts').append(HTMLblog.replace('%data%', bio.contacts.blog));
    $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
    
    $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#footerContacts').append(HTMLblog.replace('%data%', bio.contacts.blog));
    $('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
};

education.display = function(){
    $('#education').append(HTMLschoolStart);
    
    for(var i = 0; i < education.schools.length; i++){
        $('#education').append(HTMLschoolName.replace('%data%', education.schools[i].name)
        .replace('#', education.schools[i].url) + HTMLschoolDegree.replace('%data%', education.schools[i].degree));
        $('#education').append(HTMLschoolDates.replace('%data%', education.schools[i].dates));
        
        for(var x = 0; x < education.schools[i].majors.length; x++){
            $('#education').append(HTMLschoolMajor.replace('%data%', education.schools[i].majors[x]));
        }
    }
    
    $('#education').append(HTMLonlineClasses);
    
    for(var j = 0; j < education.onlineCourses.length; j++){
        $('#education').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title)
        .replace('#', education.onlineCourses[j].url) + HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school));
        $('#education').append(HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates));
        $('#education').append(HTMLonlineURL.replace('%data%', education.onlineCourses[j].url)
        .replace('#', education.onlineCourses[j].url));
    }
    
};

work.display = function(){
    $('#workExperience').append(HTMLworkStart);
    
    for(var i = 0; i < work.jobs.length; i++){
        $('#workExperience').append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer)
        .replace('#', work.jobs[i].url) + HTMLworkTitle.replace('%data%', work.jobs[i].title));
        $('#workExperience').append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
        $('#workExperience').append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
        $('#workExperience').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
    }
};

projects.display = function(){
    $('#projects').append(HTMLprojectStart);
    
    for(var i = 0; i < projects.projects.length; i++){
        $('#projects').append(HTMLprojectTitle.replace('%data%', projects.projects[i].title)
        .replace('#', projects.projects[i].url));
        $('#projects').append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));
        $('#projects').append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
        
        for(var x = 0; x < projects.projects[i].images.length; x++){
            $('#projects').append(HTMLprojectImage.replace('%data%', projects.projects[i].images[x]));
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);