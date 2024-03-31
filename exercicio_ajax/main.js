document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.getElementById('avatar');
    const nameProfile = document.getElementById('name');
    const username =document.getElementById('username');
    const repository = document.getElementById('repository');
    const follower = document.getElementById('follower');
    const following = document.getElementById('following');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/ADRIANOSANT0S')
        .then(function(resp) {
            return resp.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url;
            nameProfile.innerText = json.name;
            username.innerText = json.login;
            repository.innerHTML = json.public_repos;
            follower.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
        .catch(function(error) {
            console.log('Erro na requisição', error);
        })
        .finally(function(){
            console.log("O program foi executado com sucesso.")
        })
})