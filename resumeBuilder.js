
var bio = {
    name: "Paschal Oduoza",
    role: "Web developer",
    contacts: {
        mobile: "6476061116",
        email: "paschal.oduoza@gmail.com",
        github: "#Link",
        twitter: "#",
        location: "Toronto, Canada"
    },
    welcomeMessage: "Here is my resume that displays my skills",
    skills: "",
    biopic: "url",
    display: function showBioInfo(){
        var topContacts = $('#topContacts');
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#header").prepend(formattedName);
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
            location: "Toronto, Canada",
            degree: "High School Diploma",
            dates: "2011"
        }
    ],

    onlineCourses: [
        {
            name: "Udacity",
            location: "Toronto CANADA",
            degree: "Nano front-end Web developer",
            majors: "Computer Science",
            dates: "01-01-2018",
            url: "www.udacity.com"
        }
    ],


    // this code needs to optimized
    display: function showEducationInfo() {
        var i = $('#education').find("h2");
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
        var formattedLocation =  HTMLschoolLocation.replace("%data%", education.schools[0].location);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[0].majors);
        var formattedMinors = HTMLschoolMinor.replace("%data%", education.schools[0].minors[0]);
           // + HTMLschoolName.replace("%data%", education.schools[0].minors[1]);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
        var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[0].url);


        // code for the online course
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].degree);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].name);
        //look at the html code for the location
        var formattedOnlineLocation = HTMLonlineLocation.replace("%data%", education.onlineCourses[0].location);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);


        $(i).append(HTMLschoolStart);
        //$('.education-entry').append(formattedSchoolName);
       /*
        $(i).append(formattedSchoolName);
        $(i).append(formattedDegree);
        $(i).append(formattedLocation);
        $(i).append(formattedMinors);
        $(i).append(formattedDates);
        $(i).append(formattedUrl);
*/

        var listFormattedInfos = [
            formattedSchoolName + " " + formattedDegree,
            formattedLocation,
            formattedDates,
            formattedMajors,
            formattedMinors,
            formattedUrl
        ];

        listFormattedInfos.forEach(function (value) {
            $('.education-entry').append(value);
        })


        // high school code

        var listOnlineCoursesInfo = [
            formattedOnlineTitle + " " + formattedOnlineSchool,
            formattedOnlineDate,
            formattedOnlineLocation,
            formattedOnlineUrl
        ];

        $(i).append(HTMLonlineClasses);

        listOnlineCoursesInfo.forEach(function (value) {
            $('#education').find("h3").append(value);

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

        // chanage variable names
        // work on this to display its number of work experiences. This is only valid for one experience
        var workExp = $('#workExperience').find('h2').append(HTMLworkStart);

        var formattedWorkEmployer =  HTMLworkEmployer.replace('%data%', work.jobs[0].employer);
        var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[0].title);
        var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[0].location);
        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[0].dates);
        var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[0].descriptions);

        var listFormattedWorkInfo = [
            formattedWorkEmployer + " " +  formattedWorkTitle,
            formattedWorkLocation,
            formattedWorkDates,
            formattedWorkDescription
        ];

        listFormattedWorkInfo.forEach(function (value) {
            $('.work-entry').append(value);
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

        var formattedProjectTitle =  HTMLprojectTitle.replace("%data%", projects.projects[0].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[0].images);

        var listFormattedProjects = [
            formattedProjectTitle,
            formattedDates,
            formattedProjectDescription,
            formattedImages
        ];

        listFormattedProjects.forEach(function (value) {
           $('.project-entry').append(value);
        });
    }
};

bio.display();
education.display();
work.display();
projects.display();