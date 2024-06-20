document.addEventListener("DOMContentLoaded", (event) => {

    let tl = gsap.timeline()
    tl.from(".hero>h1>div",{
            x:500,
            duration:0.3,
            stagger:0.6,
            opacity:0
      })
})

const openDialogButton = document.getElementById('open-dialog');
const dialog = document.getElementById('dialog');
const closeDialogButton = document.getElementById('close-dialog');
const openDialogButtonVote = document.getElementById('open-dialog-vote');
const dialogVote = document.getElementById('dialog-vote');
const closeDialogButtonVote = document.getElementById('close-dialog-vote');
const openDialogButtonHelp = document.getElementById('open-dialog-help');
const dialogHelp = document.getElementById('dialog-help');
const closeDialogButtonHelpe = document.getElementById('close-dialog-help');

openDialogButton.addEventListener('click', () => {
            dialog.style.display = 'block';
        });

        
closeDialogButton.addEventListener('click', () => {
            dialog.style.display = 'none';
        });


window.addEventListener('click', (event) => {
            if (event.target === dialog) {
                dialog.style.display = 'none';
            }
        });
openDialogButtonVote.addEventListener('click', () => {
            dialogVote.style.display = 'block';
        });

        
closeDialogButtonVote.addEventListener('click', () => {
            dialogVote.style.display = 'none';
        });


window.addEventListener('click', (event) => {
            if (event.target === dialogVote) {
                dialogVote.style.display = 'none';
            }
        });
openDialogButtonHelp.addEventListener('click', () => {
            dialogHelp.style.display = 'block';
        });

        
closeDialogButtonHelpe.addEventListener('click', () => {
            dialogHelp.style.display = 'none';
        });


window.addEventListener('click', (event) => {
            if (event.target === dialogHelp) {
                dialogHelp.style.display = 'none';
            }
        });
