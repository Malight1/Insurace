var toggler = document.querySelector('.toggle-button');
var nav = document.querySelector('.nav-c2');

function handleSmallScreens() {
    
    toggler.addEventListener('click', () => {

        let navbarMenu = nav;
    
        if (navbarMenu.style.display === 'block') {

            navbarMenu.style.display = 'none'
            document.querySelector('.fa-bars').style.display = "flex"
            document.querySelector('.fa-times').style.display = "none"

            return
        }
  
        navbarMenu.style.display = 'block'
        document.querySelector('.fa-bars').style.display = "none"
        document.querySelector('.fa-times').style.display = "flex"
    })
}
  
  handleSmallScreens()