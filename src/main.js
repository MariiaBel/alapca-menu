import '@/style.scss'

import "@/assets/img/icons/logo.svg";
import "@/assets/img/icons/arrow.svg";
import "@/assets/img/icons/arrow.svg";
import "@/assets/img/icons/burger.svg";
import "@/assets/img/icons/phone.svg";


(() => {
    const menu = document.querySelector('#menu')
    const popover = document.querySelector('[popover]')

    window.addEventListener("resize", init);
    init()

    function init() {
        if (window.innerWidth >= 1440) {
            document.addEventListener('mouseover', handleMouseover)
            menu.removeEventListener('click', handleClickMenu)
            popover.hidePopover()
        } else {
            menu.addEventListener('click', handleClickMenu)
            document.removeEventListener('mouseover', handleMouseover)
        }
    }

    function handleClickMenu(e) {
        const target = e.target.closest('[data-parent]')

        if (target) {
            const childNode = target.parentNode.querySelector('[data-child]')
            childNode.classList.toggle('--active')
            target.classList.toggle('--active')
        }
    }

    function handleMouseover(e) {
        const parent = e.target.closest('[data-parent]')
        const isMenu = e.target.closest('[data-menu-item]')

        if (parent) {
            const childNode = parent.parentNode.querySelector('[data-child]')
            childNode.classList.add('--active')
            parent.classList.add('--active')
        } else {
            const childNode = e.target.closest('[data-child]')
            if (childNode) {
                childNode
                    .querySelectorAll('[data-parent]')
                    .forEach((item) => item.classList.remove('--active'))
                childNode
                    .querySelectorAll('[data-child]')
                    .forEach((item) => item.classList.remove('--active'))
            }
        }

        if (!isMenu) {
            menu
                .querySelectorAll('[data-parent]')
                .forEach((item) => item.classList.remove('--active'))
            menu
                .querySelectorAll('[data-child]')
                .forEach((item) => item.classList.remove('--active'))
        }

    }

})()