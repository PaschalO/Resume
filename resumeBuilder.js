
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

bio.display();









