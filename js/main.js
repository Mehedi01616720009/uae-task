/*========= TOGGLE DROPDOWN =========*/
document.querySelectorAll(".toggle_dropdown").forEach(multiAction => {
    const menuButton = multiAction.querySelector(".toggle_btn");
    const list = multiAction.querySelector(".toggle_dropdown_list");

    menuButton.addEventListener("click", () => {
        list.classList.toggle("active");
    });
});

document.addEventListener("click", e => {
    const keepOpen = (
        e.target.matches(".toggle_dropdown_list")
        || e.target.matches(".toggle_btn")
        || e.target.matches(".toggle_btn_trigger")
    );

    if (keepOpen) return;

    document.querySelectorAll(".toggle_dropdown_list").forEach(list => {
        list.classList.remove("active");
    });
});

/*========= MENU SIDEBAR =========*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/*========= MENU SHOW =========*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*========= MENU HIDE =========*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*========= REMOVE MENU MOBILE =========*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*========= category slider =========*/
var swiper = new Swiper(".product_category_slider", {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
        768: {
            slidesPerView: 4,
        },

        1024: {
            slidesPerView: 7,
            spaceBetween: 24,
        },
    },
});

/*========= MODAL =========*/
/*===== SHOW MODAL =====*/
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('show-modal')
}

/*===== CLOSE MODAL =====*/
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal_container')
        closeModal(modal)
    })
})

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('show-modal')
}

/*========= SELECT INPUT =========*/
const selectedBox = document.querySelectorAll('.select_box')

/*===== SELECT BOX TOGGLE =====*/
selectedBox.forEach((select) => {
    const selected = select.querySelector('.option_selected')

    selected.addEventListener('click', () => {
        const openSelect = document.querySelector('.select-active')

        toggleSelect(select)

        if (openSelect && openSelect!= select) {
            toggleSelect(openSelect)
        }

        /*===== OPTION SELECT =====*/
        const optionList = select.querySelectorAll('.option')
        optionList.forEach( o => {
            o.addEventListener('click', () => {
                selected.innerHTML = o.querySelector('label').innerHTML;
                select.classList.remove('select-active')
                selected.classList.add('active')
            })
        })

        /*===== SEARCH OPTION =====*/
        const selectSearch = select.querySelector('.option_search input')
        selectSearch.addEventListener('keyup', function(e) {
            filterList(e.target.value);
        })
        
        const filterList = searchTerm => {
            searchTerm = searchTerm.toLowerCase();
            optionList.forEach( option => {
                let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
                if (label.indexOf(searchTerm) != -1) {
                    option.style.display = 'block';
                } else {
                    option.style.display = 'none';
                }
            })
        }

        selectSearch.value = '';
        filterList('');
    })
})

const toggleSelect = (select) => {
    const optionContainer = select.querySelector('.option_container')

    if (select.classList.contains('select-active')) {
        select.classList.remove('select-active')
    } else {
        select.classList.add('select-active')
    }
}