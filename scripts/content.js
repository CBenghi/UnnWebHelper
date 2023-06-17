console.log('content.js executed');
var documentContainer;
var pageToDo = 0;
var totalPages = -1;
var nextScroll = 0;
var pages = [];
var highlightData = [];
var downloadTimer;
var authorName = "";
window.addEventListener ("load", initializeState, false);

function download(filename, text) 
{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function EvaluateDownload()
{
    if (totalPages < 1)
    {
        return;
    }
    var data = "<html><head><style>body {background: #ddd;} .region.document-region {  background: rgba(82, 199, 219, 0.4);}.tin-page { margin: 15px; position: relative;}</style></head><body>";
    for (var i = 0; i < totalPages; i++ )
    {
        data += '<div class="tin-page"><img src="' + pages[i] + '" alt="Page ' + i+1 + '" />\r\n';
        // fix div closure
        var t = highlightData[i].replace('position: absolute;"/>', 'position: absolute;"></div>');
        data +=  highlightData[i];
        data += "</div>\r\n";
    }
    data += "</body></html>"
    var fileName = 'AI Detection ' + authorName + '.html'
    download(fileName, data);
}

function GetShadow(starting, selectors)
{
    var thisSelector = selectors.pop();
    var pageLayerContainer = starting.querySelector(thisSelector);
    if (pageLayerContainer)
    {
        let shadow = pageLayerContainer.shadowRoot;
        if(shadow) {
            if (selectors.length > 0)
            {
                return GetShadow(shadow, selectors);
            }
            else
            {
                return shadow;
            }
        }
    }
    return null;
}

function downloadLoop () {
    // try to get the next page
    // 
    if (totalPages == -1)
    {
        var pgDiv = documentContainer.querySelector(".page-counter"); 
        if (pgDiv)
        {
            let re = /Page \d+ of (\d+)/;
            const content = pgDiv.innerHTML;
            const pgm = content.match(re);
            // console.log(pgm[1]);
            totalPages = parseInt(pgm[1]);
        }
    }
    var nextPageClassName = ".bw-page.bw-page-" + pageToDo;
    var page = documentContainer.querySelector(nextPageClassName); 
    if (page)
    {
        var canvas = page.querySelector("canvas"); 
        if (canvas)
        {
            var canvadData = canvas.toDataURL();
            nextScroll = canvas.clientHeight;
            
            pages.push(canvadData);
            pageToDo++;
            // console.log('<div><img src="' + canvadData + '" alt="Page ' + pageToDo + '" /><div>');
            // var pageLayer = GetShadow(page, ["tii-aiw-page-layer", "tii-sws-page-layer-container"]);
            var pageLayer = GetShadow(page, ["tii-aiw-page-layer"]);
            if (pageLayer)
            {
                highlightData.push(pageLayer.innerHTML);
                console.log(pageLayer.innerHTML);
            }

            if (pageToDo == totalPages)
            {
                // we have completed
                clearInterval(downloadTimer);
                EvaluateDownload();
            }
        }
    }
    else
    {
        // scroll down a bit
        var scroll = Math.max(nextScroll, 100);
        documentContainer.scrollTop = documentContainer.scrollTop + scroll;
    }
}

function executeDownload() {
    // console.log("Document scroll: ", documentContainer.scrollTop);
    // var ch = documentContainer.firstChild;
    // var h = ch.clientHeight;
    // documentContainer.scrollTop = h/30;
    // console.log("Document scroll: ", documentContainer.scrollTop);
    console.log("Initializing capture");
    documentContainer.scrollTop = 0;
    pages = [];
    highlightData = [];
    downloadTimer = setInterval (downloadLoop, 1000);
}

// discovers the various elements needed to control the download of information
// this is based on a recurring timed loop, set at an interval, then clears itself when done
function initializeState (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 1000);
    var element;
    var authorNameElement;
    var nextSelector = "tii-router";
    let selectors = [".bw-document-root", "tii-doc-glyph-document", "tii-sws-content-container", "tii-sws-submission-workspace", "aiwa-home"];
    function checkForJS_Finish () {
        if(!element)
        {
            console.log("Searching top element: tii-ai-writing-app");
            element = document.querySelector('tii-ai-writing-app');
        }
        if (nextSelector != "" && element)
        {
            console.log("Searching: ", nextSelector);
            let shadow = element.shadowRoot;
            if(shadow) {
                var tmp = shadow.querySelector(nextSelector); 
                if (tmp)
                {
                    element = tmp;
                    if (nextSelector == "tii-sws-submission-workspace")
                    {
                        // in the workspace we also get the name, to which we will add the download event on click
                        authorNameElement = element.querySelector(".author-name");
                        authorName = authorNameElement.innerHTML; 
                        // console.log(authorNameElement.innerHTML);
                    }
                    if (selectors.length>0)
                    {
                        nextSelector = selectors.pop();
                    }
                    else
                    { 
                        documentContainer = element;
                        nextSelector = "";
                    }
                }
            }
        }

        // end or report progress
        if (nextSelector == "")
        {
            clearInterval(jsInitChecktimer);
            console.log("Done");
            authorNameElement.addEventListener("click", executeDownload);
            authorNameElement.style.color = "green";
            // nothing else to do in init
        }
    }
}