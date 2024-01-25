// sideBar

function showSidebar() {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex'
    sideBar.style.width = '250px'
    document.addEventListener("mousedown", closeSidebarOutside)
}

function hideSidebar() {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'none'
    sideBar.style.width = '0px'
    document.removeEventListener("mousedown", closeSidebarOutside);
} 

function closeSidebarOutside (event) {
    const sideBar = document.querySelector('.sidebar');
    if (!sideBar.contains(event.target)) {
        hideSidebar();
    }
}

//programme filter-----------------------------------------------------------------------//

function showDay(dayId) {
    // Hide all days
    var days = document.querySelectorAll('.day');
    days.forEach(function(day) {
        day.style.display = 'none';
    });

    // Show the selected day
    var selectedDay = document.getElementById(dayId);
    if (selectedDay) {
        selectedDay.style.display = 'block';
    }
}

function showAllDays() {
    // Show all days
    var days = document.querySelectorAll('.day');
    days.forEach(function(day) {
        day.style.display = 'block';
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // Get the fragment identifier from the URL
    var fragment = window.location.hash.substring(1);

    // Hide all profile sections
    var profileSections = document.querySelectorAll('.container-v');
    profileSections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the profile section based on the fragment identifier
    if (fragment) {
        var targetProfile = document.getElementById(fragment);
        if (targetProfile) {
            targetProfile.style.display = 'flex';
        } else {
            console.warn('Profile section with ID ' + fragment + ' not found.');
        }
    }
});


//speaker filter-----------------------------------------------------------------------//


    // Function to show the specified section based on URL hash
    function showSectionFromUrl() {
        // Get the section ID from the URL hash
        var sectionIdFromUrl = window.location.hash.substr(1);

        // If a valid section ID is found, show that section
        if (sectionIdFromUrl) {
            showSection(sectionIdFromUrl);
        } else {
            // If no section ID is found in the URL, default to showing 's1'
            showSection('s1');
        }
    }

    // Function to show only the specified section
    function showSection(sectionId) {
        // Hide all sections
        var allSections = document.querySelectorAll('.sess_d');
        allSections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the specified section
        var targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'flex';
        }
    }

    // Call the function when the page loads to handle initial section display
    document.addEventListener('DOMContentLoaded', showSectionFromUrl);




    //Back button for page

    function goBack() {
        // Use the history object to navigate back
        window.history.back();
    }

