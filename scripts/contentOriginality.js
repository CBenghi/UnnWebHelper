console.log('content.js executed');
var pageToDo = 0;
var totalPages = -1;
var pagesContainerId = "";
var authorNameElement;
var dictPages = {};
var someOriginality = false;
var downloadInfo;
var isCapturing = false;
var pagesContainer;
var re = /(top:(\d+)px; left:(\d+)px; height:(\d+)px; width:(\d+)px;|left:\d+px; "[^>]*>(\d+))/g

window.addEventListener ("load", initializeState, false);
var scrollContainer;

function download(filename, text) 
{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/txt;charset=utf-8,' + encodeURIComponent(text));
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
    var data = "";
    var any = false;
    for (var i = 0; i < totalPages; i++ )
    {
        var dataPage = dictPages[i];
        if (dataPage)
        {
            data += "== Page " + (i+1) + "\r\n";
            data += dataPage + "\r\n"
            any = true;
        }
    }
    if (!any)
        return;
    var fileName = 'Reference Detection.txt'
    if (authorNameElement)
    {
        var name = authorNameElement.firstChild.innerHTML.trim();
        if (name != "")
        {
            fileName = 'Reference Detection ' + name + '.txt'
        }
    }
    download(fileName, data);
}

function getRanges(array) {
    var ranges = [], rstart, rend;
    for (var i = 0; i < array.length; i++) {
      rstart = array[i];
      rend = rstart;
      while (array[i + 1] - array[i] == 1) {
        rend = array[i + 1]; // increment the index if the numbers sequential
        i++;
      }
      ranges.push(rstart == rend ? rstart+'' : rstart + '-' + rend);
    }
    return ranges;
  }

function downloadLoop () {
    // try to get the next page
    // 
    if (totalPages == -1)
    {
        var pgDiv = document.querySelector("footer"); 
        if (pgDiv)
        {
            let re = /Page: \d+ of (\d+)/;
            const content = pgDiv.innerHTML;
            const pgm = content.match(re);
            // console.log(pgm[1]);
            totalPages = parseInt(pgm[1]);
        }
    }

    // see if we can get some pages 
    var need = 0;
    var missingPages = [];
    for (var i = 0; i < totalPages; i++)
    {
        var dataPage = dictPages[i];
        if (dataPage)
        {
            continue;
        }
        missingPages.push(i+1);
        need++;
        // console.log("looking for page ", i+1);
        var nextPageId = pagesContainerId + "-" + i;
        var page = document.getElementById(nextPageId); 
        if (page)
        {
            var canvas = page.querySelector(".page-shape-set.originality"); 
            if (canvas)
            {
                var tot = "";
                var s = " " + canvas.innerHTML;
                var match;
                do {
                    match = re.exec(s);
                    if (match) {
                        someOriginality = true;
                        if (match[2] === undefined)
                            tot = tot + "reference: " + match[6] + "\r\n";
                        else
                            tot = tot + "area: " + match[2] + "," + match[3] + "," + match[4] + "," + match[5] + "\r\n";
                    }
                } while (match);
                if (tot == "")
                    tot = "-";
                else if (pagesContainer)
                {
                    // add scale information
                    tot += "transform: " + pagesContainer.style.transform + "\r\n"
                }
                dictPages[i] = tot;
                need--;
            }
            else if (someOriginality)
            {
                // can't find because there's no hit, but some had hits, so it's probaly just no items on the page
                dictPages[i] = "-";
            }

        }
    }
    downloadInfo.innerHTML = " " + getRanges(missingPages);
    if (need == 0 && totalPages != -1)
    {
        clearInterval(downloadTimer);
        EvaluateDownload();
        downloadInfo.innerHTML = "";
        isCapturing = false;
    }
}

function executeDownload() {
    if (isCapturing == false)
    {
        isCapturing = true;
        console.log("Initializing capture");
        dictPages = {};
        downloadTimer = setInterval (downloadLoop, 1000);
    }
    else
    {
        console.log("stopping capture");
        clearInterval(downloadTimer);
        EvaluateDownload();
        isCapturing = false;
    }
}

// discovers the various elements needed to control the download of information
// this is based on a recurring timed loop, set at an interval, then clears itself when done
function initializeState (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 1000);
    function checkForJS_Finish () {
        if (!pagesContainer)
        {
            // the container that also includes the scale transform
            console.log("Searching element: .page-list-view");
            var tmp = document.querySelector('.page-list-view');
            if (tmp && tmp.id != "")
            {
                pagesContainer = tmp;
                pagesContainerId = pagesContainer.id;

            }
        }
        if(!authorNameElement)
        {
            console.log("Searching element: .sc-view.paper-info");
            var tmp = document.querySelector('.sc-view.paper-info');
            if (tmp && tmp.innerHTML != "")
            {
                authorNameElement = tmp;
            }
        }
        if (!scrollContainer)
        {
            // sc-view sc-container-view tii-theme carta sc-large
            console.log("Searching top element: .sc-view.sc-container-view");
            var tmp = document.querySelector('.sc-view.sc-container-view');
            if (tmp && tmp.innerHTML != "")
            {
                scrollContainer = tmp;
            }
        }
        if (scrollContainer && authorNameElement && pagesContainer)
        {
            authorNameElement.addEventListener("click", executeDownload);
            authorNameElement.style.color = "green";
            authorNameElement.style.setProperty('cursor', 'pointer', 'important');
            clearInterval(jsInitChecktimer);

            downloadInfo = document.createElement('span');
            downloadInfo.innerHTML = "click to start capturing"
            downloadInfo.setAttribute("class", "title");
            downloadInfo.style.cursor = 'pointer';

            downloadInfo.addEventListener("click", executeDownload);
            authorNameElement.appendChild(downloadInfo);

        }
    }
}