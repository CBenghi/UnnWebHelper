# TIN plagiarism

## Inteface

The TIN system uses sproutcore to build the UI.

## Data structure

the scale to adopt is contained is in the transform style of

```html
<div id="sc5429" class="sc-view sc-collection-view sc-list-view page-list-view sc-large tii-theme carta collection" style="left: 858px; top: -42401px; height: 42900px; width: 1107px; transform: scale(1.14)
```

and needs to be inverted 1.14 => 0.877

``` html
<div aria-label="Page 27" tabindex="-1" id="sc5429-26" class="sc-view page-view sc-collection-item sc-item sc-large tii-theme carta" style="left: 0px; top: 37180px; height: 1428px; width: 1105px; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; ">
 <img src="/paper/page_image/2/207039691/1/1687088520/fdab152a65360a34b50c3e0740643095136eef30?lang=en_us&amp;page=27" alt="Image of page 27" draggable="false" class="page-image">
  <canvas class="pdf-canvas" style="position: absolute; top: 0px; left: 0px; visibility: visible;" width="1659" height="2145"/>
  <div class="loading-view page-loading-view sc-hidden">
   <div class="sc-view loading-image"/>
   <div class="loading-text sc-view sc-label-view sc-regular-size">Loading...</div>
  </div>
  <div class="page-shape-set originality">
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight first-line-highlight or-multi-color-highlighting-on group-node-color-2 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:820px; left:130px; height:24px; width:782px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight or-multi-color-highlighting-on group-node-color-2 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:895px; left:195px; height:24px; width:570px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight or-multi-color-highlighting-on group-node-color-2 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:945px; left:195px; height:24px; width:733px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight last-line-highlight or-multi-color-highlighting-on group-node-color-2 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:995px; left:195px; height:24px; width:654px; "/>
   <div class="shape match-stem start-stem or-multi-color-highlighting-on group-node-color-2 bright-highlight" role="" style="top:815px; left:129px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape match-stem end-stem or-multi-color-highlighting-on group-node-color-2 bright-highlight" role="" style="top:994px; left:849px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape highlight-label or-multi-color-highlighting-on group-node-color-2 bright-highlight" role="button" style="top:800px; height:18px; left:129px; " data-px="EVSimReportPaperSourceClicked">3</div>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight first-line-highlight or-multi-color-highlighting-on group-node-color-0 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:1070px; left:130px; height:24px; width:762px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight or-multi-color-highlighting-on group-node-color-0 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:1145px; left:195px; height:24px; width:739px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight or-multi-color-highlighting-on group-node-color-0 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:1195px; left:195px; height:24px; width:716px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight last-line-highlight or-multi-color-highlighting-on group-node-color-0 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:1244px; left:195px; height:24px; width:396px; "/>
   <div class="shape match-stem start-stem or-multi-color-highlighting-on group-node-color-0 bright-highlight" role="" style="top:1065px; left:129px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape match-stem end-stem or-multi-color-highlighting-on group-node-color-0 bright-highlight" role="" style="top:1243px; left:591px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape highlight-label or-multi-color-highlighting-on group-node-color-0 bright-highlight" role="button" style="top:1050px; height:18px; left:129px; " data-px="EVSimReportPaperSourceClicked">7</div>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight first-line-highlight or-multi-color-highlighting-on group-node-color-4 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:181px; left:130px; height:24px; width:842px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight or-multi-color-highlighting-on group-node-color-4 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:245px; left:195px; height:24px; width:721px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight or-multi-color-highlighting-on group-node-color-4 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:295px; left:195px; height:24px; width:293px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight last-line-highlight or-multi-color-highlighting-on group-node-color-4 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:345px; left:195px; height:24px; width:596px; "/>
   <div class="shape match-stem start-stem or-multi-color-highlighting-on group-node-color-4 bright-highlight" role="" style="top:176px; left:129px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape match-stem end-stem or-multi-color-highlighting-on group-node-color-4 bright-highlight" role="" style="top:344px; left:791px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape highlight-label or-multi-color-highlighting-on group-node-color-4 bright-highlight" role="button" style="top:161px; height:18px; left:129px; " data-px="EVSimReportPaperSourceClicked">11</div>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight first-line-highlight or-multi-color-highlighting-on group-node-color-1 bright-highlight first-match-segment mark-owner-undefined" role="" style="top:420px; left:130px; height:24px; width:835px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight or-multi-color-highlighting-on group-node-color-1 bright-highlight first-match-segment mark-owner-undefined" role="" style="top:495px; left:163px; height:24px; width:806px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight last-line-highlight or-multi-color-highlighting-on group-node-color-1 bright-highlight first-match-segment mark-owner-undefined" role="" style="top:545px; left:163px; height:24px; width:303px; "/>
   <div class="shape match-stem start-stem or-multi-color-highlighting-on group-node-color-1 bright-highlight" role="" style="top:415px; left:129px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape highlight-label or-multi-color-highlighting-on group-node-color-1 bright-highlight" role="button" style="top:400px; height:18px; left:129px; " data-px="EVSimReportPaperSourceClicked">14</div>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight first-line-highlight last-line-highlight or-multi-color-highlighting-on group-node-color-1 bright-highlight last-match-segment mark-owner-undefined" role="" style="top:620px; left:253px; height:24px; width:31px; "/>
   <div class="shape match-stem end-stem or-multi-color-highlighting-on group-node-color-1 bright-highlight" role="" style="top:619px; left:284px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight first-line-highlight or-multi-color-highlighting-on group-node-color-3 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:620px; left:289px; height:24px; width:674px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight or-multi-color-highlighting-on group-node-color-3 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:695px; left:163px; height:24px; width:803px; "/>
   <div class="shape highlight-shape highlight-view line-highlight originality-match-highlight-line bright-highlight last-line-highlight or-multi-color-highlighting-on group-node-color-3 bright-highlight first-match-segment last-match-segment mark-owner-undefined" role="" style="top:745px; left:163px; height:24px; width:395px; "/>
   <div class="shape match-stem start-stem or-multi-color-highlighting-on group-node-color-3 bright-highlight" role="" style="top:615px; left:288px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape match-stem end-stem or-multi-color-highlighting-on group-node-color-3 bright-highlight" role="" style="top:744px; left:558px; height:30px; ">
    <div class="match-stem-tail">&nbsp;</div>
   </div>
   <div class="shape highlight-label or-multi-color-highlighting-on group-node-color-3 bright-highlight" role="button" style="top:600px; height:18px; left:288px; " data-px="EVSimReportPaperSourceClicked">16</div>
  </div>
 </div>
```
