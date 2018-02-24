var bio = {
    name: "Paschal Oduoza",
    role: "Web developer",
    contacts: {
        mobile: "6476061116",
        email: "paschal.oduoza@gmail.com",
        github: "PaschalO",
        twitter: "NewtonEinstein_",
        location: "Toronto"
    },
    welcomeMessage: "Here is my resume that displays my skills",
    skills: ["HMTL5", "Javascript", "Jquery", "CSS3", "Google Map API", "Github"],
    biopic: "./images/profile-pic.jpg",
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
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $(header).prepend(formattedName);
        $(header).append(formattedBioPic);
        $(header).append(formattedWelcomeMsg);
        $(header).append(HTMLskillsStart);
        bio.skills.forEach(function (value) {
            var formattedSkills = HTMLskills.replace("%data%", value);
            $('#skills').append(formattedSkills);
        });


        $("#name").after(formattedRole);
        $(topContacts).append(formattedMobile);
        $(topContacts).append(formattedEmail);
        $(topContacts).append(formattedGithub);
        $(topContacts).append(formattedTwitter);
        $(topContacts).append(formattedLocation);

        // footer contents
        var footerContacts = $('#footerContacts');
        $(footerContacts).append('<li>' + formattedMobile + '</li>');
        $(footerContacts).append('<li>' + formattedEmail  + '</li>');
        $(footerContacts).append('<li>' + formattedGithub + '</li>');

    }
};

var education = {
    schools: [
        {
            name: "University of Toronto",
            location: "Toronto, Canada",
            degree: "Bsc",
            majors: ["Computer Science"],
            //minors: ["Statistics"],
            dates: "2017",
            url: "www.utoronto.ca"
        },

        {
            name: "James Cardinal McGuigan",
            location: "Toronto, Canada",
            degree: "High School Diploma",
            dates: "2011"
        }
    ],

    onlineCourses: [
        {
            name: "Udacity",
            location: "Toronto, Canada",
            degree: "Nano front-end Web developer",
            majors: "Computer Science",
            dates: "January -   Present",
            url: "www.udacity.com"
        }
    ],

    // this code needs to optimized
    display: function() {
        //var educationDiv = $('#education');
        var listFormattedInfos = [];
        var listOnlineCoursesInfo = [];
        var educationDiv = $('#education');
        $(educationDiv).append(HTMLschoolStart);
        var educationEntry = $('.education-entry');

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

        listDatas(listFormattedInfos, educationEntry);
        $(educationEntry).append('<br>');

        var onlineHeader = $(educationEntry).append(HTMLonlineClasses);
        for (var j=0; j < education.onlineCourses.length; j++){
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].degree);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].name);
            var formattedOnlineLocation = HTMLonlineLocation.replace("%data%", education.onlineCourses[j].location);
            var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            listOnlineCoursesInfo.push(formattedOnlineTitle.concat(formattedOnlineSchool));
            listOnlineCoursesInfo.push(formattedOnlineDate);
            listOnlineCoursesInfo.push(formattedOnlineLocation);
            listOnlineCoursesInfo.push(formattedOnlineUrl);
        }

        listDatas(listOnlineCoursesInfo, onlineHeader);
    }
};

var work = {
    jobs: [
        {
            employer: "Google",
            title: "Web Developer",
            location: "San Francisco",
            dates: "2019",
            descriptions: "Worked on multiple projects and developed websites"
        }
    ],

    display: function() {
        var listFormattedWorkInfo = [];
        var workExp = $('#workExperience').append(HTMLworkStart);
        var workEntry = $('.work-entry');
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

        listDatas(listFormattedWorkInfo, workEntry);
    }
};

var projects = {
    projects: [
        {
            title: "Q-Card",
            dates: "2017",
            description: "This card displays information about the Polar bear. Built with HTML and CSS3.",
            images: ['./images/ProjectImage.png']
        }
    ],

    display: function () {
        var projectExp = $('#projects').append(HTMLprojectStart);
        var projectEntry = $('.project-entry');
        var listFormattedProjects = [];
        var formattedImages;
        for (var i=0; i < projects.projects.length; i++){
            var formattedProjectTitle =  HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            listFormattedProjects.push(formattedProjectTitle);
            listFormattedProjects.push(formattedDates);
            listFormattedProjects.push(formattedProjectDescription);
            projects.projects[0].images.forEach(function (value) {
                formattedImages = HTMLprojectImage.replace("%data%", value);
                listFormattedProjects.push(formattedImages);
            });
        }

        listDatas(listFormattedProjects, projectEntry);
    }
};

$('#mapDiv').append(googleMap);

/**
 * Below code dosen't display the datas that are undefined
 * e.g Major(key): "undefined"(value) - wont be displayed in the second school data.
 *
 * first @param - Takes an array
 * second @param - Takes a jquery selector
 *
 * */
function listDatas(arrays, selector){
    for (var k=0; k < arrays.length; k++){
        if (arrays[k].search('undefined') !== -1){
            arrays.splice(k, 1);
        }

        else{
            $(selector.append(arrays[k]));
        }
    }
}

bio.display();
education.display();
work.display();
projects.display();
