// Instantiations
const github = new GitHub;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input's event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text 
    const userText = e.target.value;

    if(userText !== ''){
        // http call
        github.getUser(userText).then(data => {
            if(data.profile.message == 'Not Found'){
                // Show not found alert message
                ui.showAlert('User Not Found', 'alert alert-danger');

            }else{
                // show the profile
                ui.showProfile(data.profile);
                // show the repos
                ui.showRepos(data.repos);
            }
        })
    }else{
        // Clear profile
        ui.clearProfile();
    }
});