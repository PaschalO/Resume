$(document).ready(function() {

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
            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            $('#header').append(formattedName).append(formattedRole);
        }
    };

    var education = {
        schools: [
            {
                name: "University of Toronto",
                location: "Toronto, Canada",
                degree: "Bsc",
                majors: ["Computer Science", "Statistics", "Mathematics"],
                dates: "",
                url: ""
            }
        ],

        onlineCourses: [
            {
                name: "",
                location: "Toronto",
                degree: "Nano front-end Web developer",
                majors: "Computer Science",
                dates: "01-01-2018",
                url: "www.udacity.com"
            }
        ],

        display: ""
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

        display: ""
    };

    var projects = {
        projects: [
            {
                title: "Online Resume",
                dates: "",
                description: "Using javascript to display the resume",
                images: []
            }
        ],

        display: ""
    };

    bio.display():

});







