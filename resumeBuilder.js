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
    display: function showBioInfo(){
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
            location: "Toronto CANADA",
            degree: "Nano front-end Web developer",
            majors: "Computer Science",
            dates: "01-01-2018",
            url: "www.udacity.com"
        }
    ],


    // this code needs to optimized
    display: function showEducationInfo() {
        //var educationDiv = $('#education');
        var listFormattedInfos = [];
        var listOnlineCoursesInfo = [];
        var educationDiv = $('#education').find("h2");
        $(educationDiv).append(HTMLschoolStart);
        var onlineHeader = $(educationDiv).append(HTMLonlineClasses);

        for (var i=0; i < education.schools.length; i++){

            // if ((education.schools[i].hasOwnProperty('name') && (education.schools[i].hasOwnProperty('location') )
            //     && (education.schools[i].hasOwnProperty('degree')) && (education.schools[i].hasOwnProperty('majors'))
            //     && (education.schools[i].hasOwnProperty('dates')) && (education.schools[i].hasOwnProperty('url')))) {

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

        // online education

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

        // code for the online course
        // var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].degree);
        // var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].name);
        // //look at the html code for the location
        // var formattedOnlineLocation = HTMLonlineLocation.replace("%data%", education.onlineCourses[0].location);
        // var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
        // var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);



        //$('.education-entry').append(formattedSchoolName);
       /*
        $(i).append(formattedSchoolName);
        $(i).append(formattedDegree);
        $(i).append(formattedLocation);
        $(i).append(formattedMinors);
        $(i).append(formattedDates);
        $(i).append(formattedUrl);
*/

        // var listFormattedInfos = [
        //     formattedSchoolName + " " + formattedDegree,
        //     formattedLocation,
        //     formattedDates,
        //     formattedMajors,
        //     formattedMinors,
        //     formattedUrl
        // ];




        // high school code

        // var listOnlineCoursesInfo = [
        //     formattedOnlineTitle + " " + formattedOnlineSchool,
        //     formattedOnlineDate,
        //     formattedOnlineLocation,
        //     formattedOnlineUrl
        // ];
        //
        //
        //
        // listOnlineCoursesInfo.forEach(function (value) {
        //     $('#education').find("h3").append(value);
        //
        // });

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

$('#mapDiv').find('h2').append(googleMap);


bio.display();
education.display();
work.display();
projects.display();