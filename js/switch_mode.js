



document.getElementById('poetry_mode').addEventListener('click', function() {
    var linkElement = document.getElementById('change_style');
    var currentHref = linkElement.getAttribute('href');

    var get_nextBtn = document.getElementById('nextButton');
    var get_prevBtn = document.getElementById('prevButton');

    

    get_nextBtn.hidden = false;
    get_prevBtn.hidden = false;
    

    
    if (currentHref === '../css/standard_style.css') {
        linkElement.setAttribute('href', '../css/by_stanza_styles.css');
        document.getElementById('poetry_mode').textContent = "Whole Page";

        get_nextBtn.hidden = false;
        get_prevBtn.hidden = false;


        
    } else {
        linkElement.setAttribute('href', '../css/standard_style.css');
        document.getElementById('poetry_mode').textContent = "Stanza by Stanza";
        get_nextBtn.hidden = true;
        get_prevBtn.hidden = true;
    }

    

    


});