// creating list links
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed........');
    //    global variable
    const sections = document.querySelectorAll("Section");
    //create header links
    sections.forEach(e => {
        var li = `<li>${e.id}</li>`;
        // add class to list so i can target them.
        document.querySelector("#navbar__list")
            .innerHTML += li;
    })
    // create li element 
    const li = document.querySelectorAll("li");
    // loop through links and add event listener 
    li.forEach(e => {
        // add eventListener to header li element 
        e.addEventListener('click', () => {
            // e.classList.add('active-link');
            console.log("link cliked..", e.id);
            //id of section is same as li links 
            const sectionId = e.innerHTML;
            const scrollTo = document.getElementById(sectionId);
            scrollTo.scrollIntoView({
                behavior: "smooth"
            });

        })

    })

    //    adding and removing  class="your-active-class"
    window.addEventListener('scroll', () => {

        sections.forEach(e => {
            const recTop = Math.floor(e.getBoundingClientRect().top);
            //add classes here 
            if (recTop >= -20 && recTop <= 400) {
                const listclass = e.id;
                document.querySelector(`.${listclass}`).classList.add("active-link")
                e.classList.add('your-active-class');
            //else remove classes
            } else {
                const listclass = e.id;
                e.classList.remove('your-active-class');
                document.querySelector(`.${listclass}`).classList.remove("active-link")
            }
        })
    })

    //adding class to my links
    function addLinkStyles() {
        const li = document.getElementById('navbar__list');
        const list = li.childNodes;
        var num = 1;
        list.forEach(e => {
            console.log(e.classList.add("section" + `${num}`));
            num = num + 1
        })

    }

    addLinkStyles();

});