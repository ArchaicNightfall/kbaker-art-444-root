const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //get inner elements for each dropdown
    const select = dropdown.querySelector('.select');
    const mobile_menu_burger = dropdown.querySelector('.mobile_menu_burger');
    const mobile_tablet_menu = dropdown.querySelector('.mobile_tablet_menu');
    const mobile_tablet_link = dropdown.querySelector('.mobile_tablet_link');

    //add a click event to the select element
    select.addEventListener('click', () => {
        //add the clicked select styles to the select element
        select.classList.toggle('select-clicked');
        //add the rotate styles to the hamburger element
        mobile_menu_burger.classList.toggle('mobile_menu_burger-rotate');
        //add the open styles to the menu element
        mobile_tablet_menu.classList.toggle('menu-open');
    )};
