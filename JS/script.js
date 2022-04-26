let resume = document.getElementById('resume');
let infini = document.getElementById('infini');

function affichePresentation(){
resume.classList.remove('hide');
resume.classList.add('show');
infini.classList.remove('show');
infini.classList.add('hide');
}

function affichePasPresentation(){
    resume.classList.remove('show');
    resume.classList.add('hide');
    infini.classList.add('show');
    infini.classList.remove('hide');
    }