var bio = {
    name: "Paschal Oduoza",
    role: "Web developer",
    contacts: {
        mobile: "6476061116",
        email: "paschal.oduoza@gmail.com",
        github: "https://github.com/PaschalO",
        twitter: "#",
        location: "Toronto, CANADA"
    },
    welcomeMessage: "Here is my resume that displays my skills",
    skills: ["This is where i show case my talents", "Pro at Javascript, Jquery, CSS, HTML"],
    biopic: "url",
    display: function(){
        var topContacts = $('#topContacts');
        var header = $('#header');
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        //var formattedSkillStart = HTMLskillsStart.replace("%data%", bio.skills);
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
        var formattedNewSkills = HTMLskills.replace("%data%", bio.skills[1]);

        $(header).prepend(formattedName);
        $(header).append(formattedBioPic);
        $(header).append(formattedWelcomeMsg);
        $(header).append(HTMLskillsStart);
        $(header).find('#skills').append(formattedSkills).append(formattedNewSkills);

        $("#name").after(formattedRole);
        $(topContacts).append(formattedMobile);
        $(topContacts).append(formattedEmail);
        $(topContacts).append(formattedGithub);
        $(topContacts).append(formattedTwitter);
        $(topContacts).append(formattedLocation);
    }
};

var education = {
    schools: [
        {
            name: "University of Toronto",
            location: "Toronto, CANADA",
            degree: "Bsc",
            majors: ["Computer Science"],
            minors: ["Statistics"],
            dates: "2013 - Present",
            url: "www.utoronto.ca"
        },

        {
            name: "James Cardinal McGuigan",
            location: "Toronto, CANADA",
            degree: "High School Diploma",
            dates: "2011"
        }
    ],

    onlineCourses: [
        {
            name: "Udacity",
            location: "Toronto, CANADA",
            degree: "Nano front-end Web developer",
            majors: "Computer Science",
            dates: "01-01-2018",
            url: "www.udacity.com"
        }
    ],


    // this code needs to optimized
    display: function() {
        //var educationDiv = $('#education');
        var listFormattedInfos = [];
        var listOnlineCoursesInfo = [];
        var educationDiv = $('#education').find("h2");
        $(educationDiv).append(HTMLschoolStart);
        var onlineHeader = $(educationDiv).append(HTMLonlineClasses);

        for (var i=0; i < education.schools.length; i++){

                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedLocation =  HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
                //var formattedMinors = HTMLschoolMinor.replace("%data%", education.schools[i].minors[i]);
                // + HTMLschoolName.replace("%data%", education.schools[0].minors[1]);
                var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);
                listFormattedInfos.push(formattedSchoolName.concat(formattedDegree));
                listFormattedInfos.push(formattedLocation);
                listFormattedInfos.push(formattedDates);
                listFormattedInfos.push(formattedMajors);
                //listFormattedInfos.push(formattedMinors);
                listFormattedInfos.push(formattedUrl);

        }

        listFormattedInfos.forEach(function (value, index) {
            if (value.search('undefined') !== -1){
                var indx = listFormattedInfos.indexOf(index);
                listFormattedInfos.splice(indx, 1);
            }
            else{
                $('.education-entry').append(value);
            }

        });
        $('.education-entry').append('<br>');

        for (var j=0; j < education.onlineCourses.length; j++){
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].degree);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].name);
            //look at the html code for the location
            var formattedOnlineLocation = HTMLonlineLocation.replace("%data%", education.onlineCourses[j].location);
            var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            listOnlineCoursesInfo.push(formattedOnlineTitle.concat(formattedOnlineSchool));
            listOnlineCoursesInfo.push(formattedOnlineDate);
            listOnlineCoursesInfo.push(formattedOnlineLocation);
            listOnlineCoursesInfo.push(formattedOnlineUrl);
        }

        listOnlineCoursesInfo.forEach(function (v, y) {
            if (v.search('undefined') !== -1){
                var indx = listOnlineCoursesInfo.indexOf(y);
                listOnlineCoursesInfo.splice(indx, 1);
            }
            else
                $('#education').find("h3").append(v);
        });
    }
};

var work = {
    jobs: [
        {
            employer: "Google",
            title: "Web Developer",
            location: "San Francisco",
            dates: "05-05-2019",
            descriptions: "Developed websites and other stuffs"
        }
    ],

    display: function() {
        var listFormattedWorkInfo = [];
        // chanage variable names
        // work on this to display its number of work experiences. This is only valid for one experience
        var workExp = $('#workExperience').find('h2').append(HTMLworkStart);

        for (var i=0; i < work.jobs.length; i++){
            var formattedWorkEmployer =  HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
            var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].descriptions);
            listFormattedWorkInfo.push(formattedWorkEmployer.concat(formattedWorkTitle));
            listFormattedWorkInfo.push(formattedWorkLocation);
            listFormattedWorkInfo.push(formattedWorkDates);
            listFormattedWorkInfo.push(formattedWorkDescription);
        }


        // all this list forEach needs to be optimized...
        listFormattedWorkInfo.forEach(function (value, index) {
            if (value.search('undefined') !== -1){
                var indx = listFormattedWorkInfo.indexOf(index);
                listFormattedWorkInfo.splice(indx, 1);
            }
            else{
                $('.work-entry').append(value);
            }

        });
    }
};

var projects = {
    projects: [
        {
            title: "Online Resume",
            dates: "2017",
            description: "Using javascript to display the resume",
            images: ['Insert Image']
        }
    ],

    display: function () {
        var projectExp = $('#projects').find('h2').append(HTMLprojectStart);
        var listFormattedProjects = [];
        for (var i=0; i < projects.projects.length; i++){
            var formattedProjectTitle =  HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            listFormattedProjects.push(formattedProjectTitle);
            listFormattedProjects.push(formattedDates);
            listFormattedProjects.push(formattedProjectDescription);
            listFormattedProjects.push(formattedImages);
        }

        listFormattedProjects.forEach(function (value, index) {
            if (value.search('undefined') !== -1){
                var indx = listFormattedProjects.indexOf(index);
                listFormattedProjects.splice(indx, 1);
            }
            else{
                $('.project-entry').append(value);
            }

        });
    }
};

$('#mapDiv').find('h2').append(googleMap);


bio.display();
education.display();
work.display();
projects.display();