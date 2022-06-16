/*
Template Name: Massive
Author: GrayGrids
*/



(function () {
    //===== Prealoder

    window.addEventListener("load", () => {
        var carousels = document.querySelectorAll(".carousel-3d");
        for (var i = 0; i < carousels.length; i++) {
            carousel(carousels[i]);
        }
    });
    function carousel(root) {
        var figure = root.querySelector("figure"),
            nav = root.querySelector("nav"),
            images = figure.children,
            n = images.length,
            gap = root.dataset.gap || 0,
            bfc = "bfc" in root.dataset,
            theta = 2 * Math.PI / n,
            currImage = 0;
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        window.addEventListener("resize", () => {
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        });
        setupNavigation();
        function setupCarousel(n, s) {
            var apothem = s / (2 * Math.tan(Math.PI / n));
            figure.style.transformOrigin = `50% 50% ${-apothem}px`;
            for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
            for (i = 0; i < n; i++) {
                images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
                images[i].style.transform = `rotateY(${i * theta}rad)`;
            }
            if (bfc)
                for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
            rotateCarousel(currImage);
        }
        function setupNavigation() {
            nav.addEventListener("click", onClick, true);
            function onClick(e) {
                e.stopPropagation();
                var t = e.target;
                if (t.tagName.toUpperCase() != "BUTTON") return;
                if (t.classList.contains("next")) {
                    currImage++;
                } else {
                    currImage--;
                }
                rotateCarousel(currImage);
            }
        }
        function rotateCarousel(imageIndex) {
            figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
        }
    }

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".collapse");

    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    })
    // WOW active
    new WOW().init();

    let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    filterButtons.forEach(e =>
        e.addEventListener('click', () => {

            let filterValue = event.target.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
        })
    );

    var elements = document.getElementsByClassName("portfolio-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            var el = elements[0];
            while (el) {
                if (el.tagName === "BUTTON") {
                    el.classList.remove("active");
                }
                el = el.nextSibling;
            }
            this.classList.add("active");
        };
    };

    //====== counter up 
    var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: " ",
    });
    cu.start();
})();