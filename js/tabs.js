/***** Certificate Details tab *****/
function certificateDetailsTab(event, detailName) {
  let tabContent, tabLinks;

  // Hide all tabs
  tabContent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove all active links
  tabLinks = document.getElementsByClassName("tab-links");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button link
  document.getElementById(detailName).style.display = "block";
  event.currentTarget.className += " active";
}

document.getElementById("defaultTab").click();
