console.log('content.js executed');

window.addEventListener ("load", myMain, false);

function executeDownload() {
    console.log("Event triggered");
}

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 1000);
    var t = 0;
    var top;
    var element;
    var workspace;
    var documentContainer;
    var authorName;
    var nextSelector = "tii-router";
    let selectors = [".document-container", "tii-doc-glyph-document", "tii-sws-content-container", "tii-sws-submission-workspace", "aiwa-home"];
    function checkForJS_Finish () {
        // const collection = document.getElementsByClassName("document-container");     
        // const collection = document.getElementsByTagName("tii-ai-writing-app") 
        if(!element)
        {
            console.log("Found");
            element = document.querySelector('tii-ai-writing-app');
        }
        if (nextSelector != "" && element)
        {
            console.log("loop for: ", nextSelector);
            console.log("element: ", element.innerHTML);
            let shadow = element.shadowRoot;
            console.log("shadow: ", shadow.innerHTML);            
            if(shadow) {
                // console.log("shadow found, state", shadow.mode);
                // shadow.mode = 'closed'; // If it is open, close it to stop people stealing our secrets!
                // console.log(shadow.innerHTML);
                var tmp = shadow.querySelector(nextSelector); 
                if (tmp)
                {
                    element = tmp;
                    if (nextSelector == "tii-sws-submission-workspace")
                    {
                        console.log("Workspace set");
                        workspace = element;
                        authorName = element.querySelector(".author-name");
                        console.log(authorName.innerHTML);
                    }
                    // pop
                    if (selectors.length>0)
                    {
                        nextSelector = selectors.pop();
                    }
                    else
                    { 
                        documentContainer = element;
                        nextSelector = "";
                        if (false)
                        {
                            // finished this selector navigation
                            if (!documentContainer)
                            {
                                documentContainer = element;
                                element = workspace;
                                nextSelector = "tii-sws-header";
                                selectors = [".author-name"];
                            }
                            else if (!authorName)
                            {
                                authorName = element;
                                nextSelector = "";
                            }
                            else
                            {
                                nextSelector = "";
                            }
                        }
                    }
                }
            }
        }

        // end or report progress
        if (nextSelector == "")
        {
            clearInterval(jsInitChecktimer);
            console.log("Done");
            console.log(documentContainer.outerHTML);
            console.log(authorName.outerHTML);
            authorName.addEventListener("click", executeDownload);
            // DO YOUR STUFF HERE.
            // nothing else to do in init
        }
    }
}