"use strict";
(function () {
    function DisplayAboutPage() {
        console.log("About Page");
    }
    function DisplayProjectsPage() {
        console.log("Projects Page");
    }
    function DisplayServicesPage() {
        console.log("Services Page");
    }
    function DisplayHomePage() {

        document.body.style ="background-size: cover; background-image: url(./Assets/Images/MinimalCode.png);";
        console.log("Home Page");
    }
    function validateField(input_field_ID, regular_expression, error_message) {
        let messageArea = $("#messageArea").hide();
        $("#" + input_field_ID).on("blur", function () {
            let textContent = $(this).val();
            if (!regular_expression.test(textContent)) {
                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function ContactFormValidation() {
        validateField("fullName", /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*$/, "Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitalized last name.");
        validateField("contactNumber", /^(\+\d{1,3}[\s-.]?)?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/, "Please enter a valid Contact Number. Example: (905) 555-5555");
        validateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid Email Address.");
    }
    function DisplayContactPage() {
        console.log("Contact Us Page");
        ContactFormValidation();
    }
    function ConfirmDelete(redirect) {
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = redirect;
            }
        });
    }
    function DisplayBusinessContactListPage() {
        console.log("Business-Contact-List Page");
        ConfirmDelete('/business-contact-list');
    }
    function DisplayInquiriesListPage() {
        console.log("inquiries-list Page");
        ConfirmDelete('/inquiries-list');
    }
    function DisplayEditPage() {
        console.log("Edit Page");
        ContactFormValidation();
    }
    function DisplayLoginPage() {
        console.log("Login page");
    }
    function DisplayContactFormPage() {
        console.log("Contact Form Page");
    }
    function DisplayRegisterPage() {
        console.log("register page");
    }
    function Display404page() {
        console.log("404 page");
    }
    function Start() {
        console.log("App Started!!");
        let page_id = $("body")[0].getAttribute("id");
        switch (page_id) {
            case "home":
                DisplayHomePage();
                break;
            case "about":
                DisplayAboutPage();
                break;
            case "projects":
                DisplayProjectsPage();
                break;
            case "services":
                DisplayServicesPage();
                break;
            case "contact":
                DisplayContactPage();
                break;
            case "business-contact-list":
                DisplayBusinessContactListPage();
                break;
            case "add":
                DisplayEditPage();
            case "edit":
                DisplayEditPage();
                break;
            case "login":
                DisplayLoginPage();
                break;
            case "register":
                DisplayRegisterPage();
                break;
            case "inquiries-list":
                DisplayInquiriesListPage();
            case "contactform":
                DisplayContactFormPage();
            case "404":
                Display404page();
                break;
        }
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map