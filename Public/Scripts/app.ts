/*
  Name: Ethan Bentolila
  ID: 100783477

  Name: Marshall Presutto
  ID: 100775601

  Date: 2022-04-15
*/
(function()
{

    function DisplayAboutPage() : void
    {       
         console.log("About Page");
    }

    function DisplayProjectsPage() : void
    {       
         console.log("Projects Page");
    }

    function DisplayServicesPage() : void
    {        
        console.log("Services Page");
    }

    function DisplayHomePage() : void
    {
        console.log("Home Page");

    }

    /**
     * Will validate an input field given the input field id, regular expression and error message
     * @param {string} input_field_ID 
     * @param {RegExp} regular_expression 
     * @param {string} error_message 
     */
    function validateField(input_field_ID : string ,regular_expression:RegExp,error_message:string) 
    {
        let messageArea = $("#messageArea").hide();

        $("#"+input_field_ID).on("blur" , function() {
            let textContent = $(this).val() as string; 
            if(!regular_expression.test(textContent)) {
                $(this).trigger("focus").trigger("select"); 
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }
            else 
            {
                messageArea.removeAttr("class").hide(); 
            }
        });
    }


    /**
     * This method validates the fullName,contactNumber and emailAddress fields of a form.
     * @returns {void}
     */
    function ContactFormValidation() :void
    {
        //validates full name
        validateField("fullName", /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*$/, "Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitalized last name.");
        //validate contact number
        validateField("contactNumber",/^(\+\d{1,3}[\s-.]?)?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/,"Please enter a valid Contact Number. Example: (905) 555-5555");
        
        //validate email address
        validateField("emailAddress",/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,"Please enter a valid Email Address.");
    }



    
    function DisplayContactPage() : void
    {
         console.log("Contact Us Page");
        

        ContactFormValidation();

    }


    function ConfirmDelete(redirect : string) : void
    {
        $("a.delete").on("click", function(event)
        {
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
                location.href = redirect;
            }            
        });
    }



    function DisplayBusinessContactListPage(): void
    {
        console.log("Business-Contact-List Page");
        ConfirmDelete('/business-contact-list');
    }

    function DisplayInquiriesListPage(): void
    {
        console.log("inquiries-list Page");
        ConfirmDelete('/inquiries-list');
    }





    function DisplayEditPage(): void
    {
        console.log("Edit Page");
        ContactFormValidation();
    }


    function DisplayLoginPage() : void
    {
        console.log("Login page");
    }


    function DisplayContactFormPage() : void
    {
        console.log("Contact Form Page");
        //ContactFormValidation();
        //TODO: Validate Message
    }



    function DisplayRegisterPage() : void
    {
        console.log("register page");
        //TODO: Future work - add some validation
        //validateField("firstName",/^[A-Z]{1}[a-z]{2,}\S*$/gm,"Please enter a valid first Name")
        //validateField("lastName",/^[A-Z]{1}[a-z]{2,}\S*$/gm,"Please enter a valid Last Name")

    }

    function Display404page() : void
    {
        console.log("404 page");
    }


    //Named function
    function Start() : void
    {
        console.log("App Started!!");

        let page_id = $("body")[0].getAttribute("id");


        switch(page_id)
        {
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