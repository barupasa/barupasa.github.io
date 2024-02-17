var isVisible = false;
function showOrHideEmail() {
    if (isVisible) {
        document.getElementById('email').innerHTML = " Show my Email"; visible = false;
    }
    else {
        var myEmail = "<a href='mailto:barupasa" + "@" + "mail.uc.edu'>barupasa" + "@" + "mail.uc.edu</a>";
        document.getElementById('email').innerHTML = myEmail; visible = true;
    }
}