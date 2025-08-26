    /*function applyStyles(target, source) {
    // Copy styles from source to target
    Object.assign(target.style, {
        textDecoration: source.style.textDecoration,
        color: source.style.color,
        fontSize: source.style.fontSize,
        backgroundColor: source.style.backgroundColor,
        padding: source.style.padding,
        borderRadius: source.style.borderRadius
  
    });
  
    Object.assign(source.style, {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '5px 10px',
        borderRadius: '5px',
    });
}*/

document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let currentPageIndex = 0;
    var nextBtn = document.getElementById('nextButton');
    var prevBtn = document.getElementById('prevButton');

    const updatePageVisibility = () => {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === currentPageIndex);
        });

        

        if(currentPageIndex === 0){
            prevBtn.disabled = true;
            prevBtn.style.backgroundColor = 'rgba(216, 192, 54, 0.4)';
        }else{
            prevBtn.disabled = false;
            prevBtn.style.backgroundColor = 'rgba(216, 192, 54, 0.8)';
        }
        
        if(currentPageIndex === pages.length - 1){
            nextBtn.disabled = true;
            nextBtn.style.backgroundColor = 'rgba(216, 192, 54, 0.4)';
        }else{
            nextBtn.disabled = false;
            nextBtn.style.backgroundColor = 'rgba(216, 192, 54, 0.8)';
        }
        
       

        


    };

    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updatePageVisibility();
        }
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            updatePageVisibility();
        }
    });

    // Initialize
    updatePageVisibility();
});
