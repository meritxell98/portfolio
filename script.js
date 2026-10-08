(function () {
        const navbar = document.querySelector('.navbar');
        const toggle = navbar.querySelector('.nav-toggle');
        const list = document.getElementById('nav-list');

        function setOpen(open) {
            list.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', open);
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        }

        toggle.addEventListener('click', function () {
            setOpen(!list.classList.contains('is-open'));
        });

        // Close after choosing a link
        list.addEventListener('click', function (e) {
            if (e.target.closest('a')) setOpen(false);
        });

        // Close when tapping outside the navbar
        document.addEventListener('click', function (e) {
            if (!navbar.contains(e.target)) setOpen(false);
        });

        // Close with Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && list.classList.contains('is-open')) {
                setOpen(false);
                toggle.focus();
            }
        });

        // Reset when the screen grows past the breakpoint
        window.matchMedia('(min-width: 461px)').addEventListener('change', function (e) {
            if (e.matches) setOpen(false);
        });
    })();