
let contact = document.form_contact;
let inputNom = contact.nom;
let inputPrenom = contact.prenom; //requis
let inputEmail = contact.email; //requis
let commentaire = contact.zone_texte; //requis

let nomErreur = document.getElementById('nom-Error');
let prenomErreur = document.getElementById('prenom-Error');
let emailErreur = document.getElementById('email-Error');
let commentaireErreur = document.getElementById('text-Error');
let popup = document.getElementById('valid-popup');


function envoiFormContact(){

    //condition pour le prenom
    let prenom = true;
    if(inputPrenom.value == "" || inputPrenom.value.trim() == ''){
        prenomErreur.innerHTML = 'Champs requis! &#10060';
        prenomErreur.classList.remove('success');
        prenomErreur.classList.add('error');
        
        prenom = false;
    }else if(inputPrenom.value.trim().length < 2){
        prenomErreur.innerHTML = 'Le champs doit faire minimum 2 caractères &#10060';
        prenomErreur.classList.remove('success');
        prenomErreur.classList.add('error');

        prenom = false;

    } else if(inputPrenom.value.trim().length > 150){
        prenomErreur.innerHTML = 'Le champs doit faire au maximum 150 caractères &#10060';
        prenomErreur.classList.remove('success');
        prenomErreur.classList.add('error');

        prenom = false;

    } else{
        prenomErreur.innerHTML = 'Champs valide &#9989'
        prenomErreur.classList.remove('error');
        prenomErreur.classList.add('success');

        prenom = true;
    }

    //condition pour le mail
    let email = true;
    if(inputEmail.value == "" || inputEmail.value.trim() == ''){
        emailErreur.innerHTML = 'Champs requis! &#10060';
        emailErreur.classList.remove('success');
        emailErreur.classList.add('error');

         email = false;

    }else if(inputEmail.value.trim().length < 2){
        emailErreur.innerHTML = 'Le champs doit faire minimum 2 caractères &#10060';
        emailErreur.classList.remove('success');
        emailErreur.classList.add('error');

         email = false;

    } else if(inputEmail.value.trim().length > 150){
        emailErreur.innerHTML = 'Le champs doit faire au maximum 150 caractères &#10060';
        emailErreur.classList.remove('success');
        emailErreur.classList.add('error');

         email = false;

    } else{
        emailErreur.innerHTML = 'Champs valide &#9989';
        emailErreur.classList.remove('error');
        emailErreur.classList.add('success');

         email = true;
    }
    
    //condition commentaire
    let txtCom = true;
    if(commentaire.value == "" || commentaire.value.trim() == ''){
        commentaireErreur.innerHTML = 'Champs requis! &#10060';
        commentaireErreur.classList.remove('success');
        commentaireErreur.classList.add('error');

         txtCom = false;

    }else if(commentaire.value.trim().length < 2){
        commentaireErreur.innerHTML = 'Le champs doit faire minimum 2 caractères &#10060';
        commentaireErreur.classList.remove('success');
        commentaireErreur.classList.add('error');

        txtCom = false;

    } else if(commentaire.value.trim().length > 500){
        commentaireErreur.innerHTML = 'Le champs doit faire au maximum 500 caractères &#10060';
        commentaireErreur.classList.remove('success');
        commentaireErreur.classList.add('error');

        txtCom = false;

    } else{
        commentaireErreur.innerHTML = 'Champs valide &#9989';
        commentaireErreur.classList.remove('error');
        commentaireErreur.classList.add('success');

        txtCom = true;
    }

    if(prenom == true && email == true && txtCom == true){
        popup.classList.remove('hide');
        popup.classList.add('show');
    }
}

function closePopup(){
    popup.classList.remove('show');
    popup.classList.add('hide');
    contact.reset();
    prenomErreur.innerHTML = '';
    emailErreur.innerHTML = '';
    commentaireErreur.innerHTML = '';
   
}