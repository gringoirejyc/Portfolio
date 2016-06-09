/*
This is empty on purpose! Your code to build the resume will go here.
 */



var education = {
    "schools":[
        {
            "name":"Shanghai Sanda University",
            "location":"Shanghai,China",
            "degree":"Management",
            "major":"Management Information System",
            "dates":"2011-09",
            "url":"http://www.sandau.edu.cn"
        },
        {
           "name":"Centria University of Applied Science",
            "location":"Kokkola,Finland",
            "degree":"Engineering",
            "major":"Information Technology",
            "dates":"2014-01",
            "url":"http://www.centria.fi"
        },
        {
            "name":"Udacity",
            "location":"Online",
            "degree":"Full Stack Web Developer Nanodegree",
            "major":"Full Stack Web Developer",
            "dates":"2016-21",
            "url":"http://www.udacity.com"
        }
    ]
}
education.display = function() {
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        
        var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedschoolUrl = HTMLschoolName.replace("%url%",education.schools[school].url);
        var formattedNameDegree = formattedschoolName+formattedschoolDegree;
        $(".education-entry:last").append(formattedNameDegree);
        
        var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);
        
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);
        
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);
        
        
    }
}
education.display();

var work = {
    "jobs":[
        {
            "employer":"Shanghai Science&Technology Museum",
            "title":"IT Intern",
            "location":"Shanghai,China",
            "dates":"2015-06-16",
            "description":"&middot Designed and developed Android app for museum staff internal use; reported and repaired issues and gave feedback.<br>&middot Installed and configured Remote Video Conferencing System.<br>&middot Collected briefing from newspaper and sorted by category; added info to Database Table by Oracle."
            
        },
        {
            "employer":"Municipality Information Office",
            "title":"Website backend trainee",
            "location":"Shanghai,China",
            "dates":"2013-06-16",
            "description":"&middot Developed website using LAMP & cPanel platform.<br>&middot Published posts/news; collected user feedback and used SQL query to arrange." 
        }
    ]
}

for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedEmployerTitle = formattedworkEmployer+formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
    
}


var projects = {
    "projects":[
        {
            "title":"Responsive Blog",
            "dates":"2016-02",
            "description":"&middot Makes the images fit in their containers in the viewport.<br>&middot Uses the picture element for art direction<br> &middot Different image crops are loaded depending on viewport size.",
            "images0":"images/project/ResponsiveBlog/sc1.png",
            "images1":"images/project/ResponsiveBlog/sc2.png"     
        },
        { 
            "title":"Tournament Result",
            "dates":"May 2016",
            "description":"&middot Created and configured virtual machine to run database server and web app.<br>&middot Architect and develop a database containing fully normalized data within multiple tables<br>&middot Turns static websites into dynamic data-driven web applications",
            "images0":"images/project/TournamentResult/sc1.png",
            "images1":"images/project/TournamentResult/sc2.png"
        },
        {
            "title":"Navigation Drawer",
            "dates":"February 2016",
            "description":"&middot Created app bar and customized the style to allow handling of actions on the action bar<br>&middot Created navigation drawer with DrawerLayout and developed functionality (e.g. initializing the drawer list, handling navigation click events, listening for open and close of events, opening & closing with app icon).<br>&middot Used Navigation view to create navigation drawer; reduced by 70% the time it takes compared traditional methods.",
            "images0":"images/project/NavigationDrawer/sc1.png",
            "images1":"images/project/NavigationDrawer/sc2.png"
        },
        {
            "title":"RecyclerView with Animation",
            "dates":"March 2016",
            "description":"&middot Used v7 support library to create RecyclerView and configure the layout of RecyclerView.<br>&middot Provided content in the RecyclerView, stored in a separate JAVA file.",
            "images0":"images/project/RecyclerView/sc1.png",
            "images1":"images/project/RecyclerView/sc2.png"
        }
    ]
}
projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
    
        $("#projectsimage").append(HTMLprojectImage);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedprojectTitle);
    
        var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedprojectDates);
    
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedprojectDescription);
   
        if(projects.projects[project].images0.length>0){
               
                
                var node = HTMLprojectImage0.replace("%data%",projects.projects[project].images0);
                $(".project-entry:last").append(node);
                
                var node = HTMLprojectImage1.replace("%data%",projects.projects[project].images1);
                $(".project-entry:last").append(node);
            
        }
    }
    
}
projects.display();

var bio = {
    "name":"JI YICHENG",
    "role":"Full Stack Web Developer",
    "welcomeMessage":"Welcome to see my CV, if you are interested in my skills, please refers to other employer",
    "contacts":{
        "Mobile":"+(358)465402679",
        "email":"gringoirejyc@outlook.com",
        "github":"gringoirejyc",
        "blog":"www.ji-yicheng.com",
        "location":"Helsinki,Finland"
    },
    "bioPic":"images/jipic.jpg",
    "skills":["HTML5","CSS3","JavaScript","PHP","MySQL","JAVA","Python","JSON"]
}

bio.display = function () {
    var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").append(formattedheaderName);
    
    var formattedheadRole =   HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedheadRole);
    
    var formattedwelcomeMsg =   HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    
    var formattedbioPic =   HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedbioPic);
     
    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.Mobile);
    $("#topContacts").append(formattedmobile);
        
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedemail);
    
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    
    var formattedblog = HTMLblog.replace("%data%",bio.contacts.blog);
    $("#topContacts").append(formattedblog);
    
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedlocation);
    
}
bio.display();
if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[6]);
    $("#skills").append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[7]);
    $("#skills").append(formattedSkill);
    
}




