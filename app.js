// get input

function getInputValue() {
    var inputVal = document.getElementById('myInput').value;
    if (inputVal == '') {
        return alert('Give Your Github Repo Link!');
    }
    if (inputVal.includes('itzalonex')) {
        return alert(
            "You Can't Deploy Official Repo As It Has Been Blacklisted By Heroku. Simply Fork The Repo & Then Input Your Forked Repo Link Here!",
        );
    } else {
        if (inputVal.includes('https://github.com/')) {
            her = 'https://dashboard.heroku.com/new?template=';
            herokulink = her.concat(inputVal);
            window.open(herokulink, 'blank');
        } else {
            return alert('Input Github Link Starts with https only!');
        }
    }
}

  
