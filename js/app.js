/* Select elements from DOM */
const toggleIcon = document.querySelector('#toggle');
const mobileMenu = document.querySelector('.menu');

/** 
 * toggleMobileMenu();
 * Show and hide mobile menu by adding class "open"
 * Change the burguer menu icon to "X" when clicked
 */

 function toggleMobileMenu() {
 	toggleIcon.addEventListener('click', function(){
		 this.classList.toggle("open");
		 mobileMenu.classList.toggle("open");
 	});
 }
 
 toggleMobileMenu();