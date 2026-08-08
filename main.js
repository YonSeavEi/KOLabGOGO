
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const icon = menuIcon.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("bx-menu");
            icon.classList.add("bx-x");
        } else {
            icon.classList.remove("bx-x");
            icon.classList.add("bx-menu");
        }
    });
}


// ================================
// CLOSE MENU WHEN CLICKING LINK
// ================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");
    });
});


// ================================
// ACTIVE NAVIGATION ON SCROLL
// ================================

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            // IMPORTANT: Use backticks here
            const activeLink = document.querySelector(
                `.navbar a[href="#${sectionId}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});


// ================================
// SHOW / HIDE PASSWORD
// ================================

const togglePassword =
    document.getElementById("toggle-password");

const passwordInput =
    document.getElementById("login-password");

if (togglePassword && passwordInput) {

    togglePassword.addEventListener("click", () => {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            togglePassword.classList.remove("bx-hide");
            togglePassword.classList.add("bx-show");

        } else {

            passwordInput.type = "password";

            togglePassword.classList.remove("bx-show");
            togglePassword.classList.add("bx-hide");
        }
    });
}


// ================================
// CONTACT FORM
// ================================

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            alert("Please fill in all fields.");

            return;
        }


        alert(
            `Thank you, ${name}! Your message has been sent successfully.`
        );

        contactForm.reset();

    });
}


// ================================
// LOGIN FORM
// ================================

const loginForm =
    document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email =
            document.getElementById("login-email").value.trim();

        const password =
            document.getElementById("login-password").value.trim();


        if (!email || !password) {

            alert("Please enter your email and password.");

            return;
        }


        if (password.length < 6) {

            alert(
                "Password must contain at least 6 characters."
            );

            return;
        }


        alert("Login successful!");

        loginForm.reset();

    });
}


// ================================
// PLACE DETAILS
// ================================

const detailButtons =
    document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const placeName =
            button
                .closest(".place-info")
                .querySelector("h3")
                .textContent;


        alert(
            `You selected ${placeName}.

More information about this destination will be available soon!`
        );

    });

});


// ================================
// SCROLL TO TOP BUTTON
// ================================

const scrollTopButton =
    document.createElement("button");

scrollTopButton.innerHTML =
    '<i class="bx bx-up-arrow-alt"></i>';

scrollTopButton.className =
    "scroll-top";

document.body.appendChild(scrollTopButton);


// Show / Hide button

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

fetch("http://localhost:3000/api/places")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });