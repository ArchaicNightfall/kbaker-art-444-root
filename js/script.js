function menuOpen() {
    document.getElementById("mobile_menu").classList.toggle("reveal_mtm")
}

    //darkmode
    function darkMode() {
        // Select the <link> element
        let theme = document.getElementById("theme");
    
        // Toggle between light.css and dark.css
        if (theme.getAttribute('href') == 'css/styles.css') {
            theme.setAttribute('href', 'css/dark_mode.css');
        } else {
            theme.setAttribute('href', 'css/styles.css');
        }
    }