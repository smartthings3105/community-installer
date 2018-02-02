function updateHeadHtml() {
    let html = '';
    html += '\n                 <meta name="description" content="Community Installer">';
    html += '\n                 <meta name="author" content="Anthony S.">';
    html += '\n                 <title>Community Installer</title>';
    html += '\n                 <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">';
    html += '\n                 <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"></link>';
    html += '\n                 <script src="https://use.fontawesome.com/a81eef09c0.js" defer></script>';
    html += '\n                 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous" async></script>';
    html += '\n                 <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" async></script>';
    html += '\n                 <script src="https://static.firebase.com/v0/firebase.js"></script>';
    html += '\n                 <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js" async></script>';
    html += '\n                 <style>';
    html += '\n                     input[type=checkbox]:disabled:checked+label:before { border-color: transparent rgba(75, 243, 72, 0.46) rgba(36, 204, 103, 0.46) transparent; }';
    html += '\n                 </style>';
    $('head').append(html);
}

function buildCoreHtml() {
    let html = '';
    html += '\n       <header>';
    html += '\n           <nav class="navbar navbar-fixed-top navbar-dark ">';
    html += '\n               <div class="d-flex w-100 justify-content-between align-items-center mx-auto" style="max-width: 725px;">';
    html += '\n                   <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                       <a class="nav-link white-text p-0" href="' + homeUrl + '" style="font-size: 30px;"><i id="homeBtn" class="fa fa-home"></i><span class="sr-only">(current)</span></a>';
    html += '\n                   </div>';
    html += '\n                   <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                       <a class="navbar-brand"><span class="align-middle"><img src="' + baseAppUrl + '/content/images/app_logo.png" height="40" class="d-inline-block align-middle" alt=""> Installer</span></a>';
    html += '\n                   </div>';
    html += '\n                   <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                       <a id="showSearchBtn" class="nav-link white-text p-0" style="font-size: 30px;"><i class="fa fa-search"></i><span class="sr-only">(current)</span></a>';
    html += '\n                   </div>';
    html += '\n               </div>';
    html += '\n           </nav>';
    html += '\n       </header>';
    html += '\n       <main class="mt-3">';
    html += '\n           <div id="mainDiv" class="container-fluid" style="min-width: 380px; max-width: 750px; height: auto; min-height: 100%;">';
    html += '\n               <section class="px-3">';
    html += '\n                   <div class="w-100 text-center">';
    html += '\n                       <h5 id="sectTitle" class="h5-responsive" style="font-weight: 400;">Software Installer</h5>';
    html += '\n                       <div id="loaderDiv" class="flex-row fadeIn fadeOut">';
    html += '\n                           <div class="d-flex flex-column justify-content-center align-items-center" style="height: 200px;">';
    html += '\n                               <svg id="loader" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-double-ring">';
    html += '\n                                   <circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="40" stroke-width="7" stroke="#18B9FF" stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(139.357 50 50)">';
    html += '\n                                       <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.8s" begin="0s" repeatCount="indefinite"></animateTransform>';
    html += '\n                                   </circle>';
    html +=
        '\n                                   <circle cx="50" cy="50" ng-attr-r="{{config.radius2}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-dasharray="{{config.dasharray2}}" ng-attr-stroke-dashoffset="{{config.dashoffset2}}" fill="none" stroke-linecap="round" r="32" stroke-width="7" stroke="#FF7F27" stroke-dasharray="50.26548245743669 50.26548245743669" stroke-dashoffset="50.26548245743669" transform="rotate(-139.357 50 50)">';
    html += '\n                                       <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-360 50 50" keyTimes="0;1" dur="1.8s" begin="0s" repeatCount="indefinite"></animateTransform>';
    html += '\n                                   </circle>';
    html += '\n                                   <text id="loaderText1" fill="gray" stroke-width="0" x="50%" y="50%" text-anchor="middle" class="loaderText">Please</text>';
    html += '\n                                   <text id="loaderText2" fill="gray" stroke-width="0" x="50%" y="60%" text-anchor="middle" class="loaderText">Wait</text>';
    html += '\n                               </svg>';
    html += '\n                           </div>';
    html += '\n                       </div>';
    html += '\n                       <div id="listContDiv" class="row fadeIn fadeOut" style="display: none;"></div>';
    html += '\n                       <div id="appViewDiv" class="row fadeIn fadeOut" style="display: none;"></div>';

    html += '\n                       <div id="actResultsDiv" class="row fadeIn fadeOut mb-5" style="display: none;">';
    html += '\n                           <div class="listDiv">';
    html += '\n                               <div id="resultList">';
    html += '\n                                   <div class="card card-body card-outline" style="background-color: transparent; line-height:1.0;">';

    html += '\n                                       <div class="row">';
    html += '\n                                           <div class="d-flex w-100 flex-column mb-3">';
    html += '\n                                               <i id="finishedImg" class="fa fa-check" style="display: none;"></i>';
    html += '\n                                               <div id="results"></div>';

    html += '\n                                               <div class="d-flex flex-column justify-content-center mx-2">';
    html += '\n                                                   <div class="d-flex flex-column align-items-center" style="border: 1px solid gray; border-radius: 10px;">';

    html += '\n                                                       <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                                                           <h6 id="ideResultsTitle" class="mt-2 mb-0" style="display: none;"><u>IDE Authentication</u></h6>';
    html += '\n                                                           <ul id="ideResultUl" class="w-100 px-4" style="display: none;"></ul>';
    html += '\n                                                       </div>';

    html += '\n                                                       <div class="d-flex w-100 flex-column justify-content-center align-items-center">';
    html += '\n                                                           <h6 id="repoResultsTitle" class="mt-2 mb-0" style="display: none;"><u>GitHub Integration</u></h6>';
    html += '\n                                                           <ul id="repoResultUl" class="w-100 px-3" style="display: none;"></ul>';
    html += '\n                                                       </div>';

    html += '\n                                                       <div class="d-flex w-100 flex-column justify-content-center align-items-center">';
    html += '\n                                                           <h6 id="appResultsTitle" class="mt-2 mb-0" style="display: none;"><u>SmartApps</u></h6>';
    html += '\n                                                           <ul id="appResultUl" class="w-100 px-3" style="display: none;"></ul>';
    html += '\n                                                       </div>';

    html += '\n                                                       <div class="d-flex w-100 flex-column justify-content-center align-items-center">';
    html += '\n                                                           <h6 id="devResultsTitle" class="mt-2 mb-0" style="display: none;"><u>Devices</u></h6>';
    html += '\n                                                           <ul id="devResultUl" class="w-100 px-3" style="display: none;"></ul>';
    html += '\n                                                       </div>';

    html += '\n                                                   </div>';
    html += '\n                                               </div>';

    html += '\n                                               <div id="resultsDone" class="mt-4" style="display: none;"><small>Press Back/Done Now</small></div>';
    html += '\n                                               <div id="resultsDoneHomeBtnDiv" style="display: none;"><button id="resultsDoneHomeBtn" type="button" class="btn" style="border-radius: 20px;"><a class="button" href="' + homeUrl + '"><i id="homeBtn" class="fa fa-home"></i> Go Home<span class="sr-only">(current)</span></a></button></div>';
    html += '\n                                          </div>';

    html += '\n                                     </div>';
    html += '\n                                 </div>';
    html += '\n                            </div>';
    html += '\n                       </div>';
    html += '\n               </section>';

    html += '\n           </div>';
    html += '\n       </main>';
    html += '\n       <footer id="ftrSect" class="page-footer center-on-small-only m-0 p-0">';
    html += '\n           <div class="footer-copyright">';
    html += '\n               <div class="containter-fluid">';
    // html += '\n                   <small>Copyright \u00A9 2018 Anthony Santilli & Corey Lista</small>';
    html += '\n                   <button class="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#aboutModal" style="background: transparent; border-color: white;"><span class="white-text"><i class="fa fa-info"></i> About</span></button>';
    html += '\n               </div>';
    html += '\n           </div>';
    html += '\n       </footer>';
    html += '\n       <!-- Modal -->';
    html += '\n       <div class="modal fade-in" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="aboutModalLabel" aria-hidden="true">';
    html += '\n           <div class="modal-dialog modal-dialog-centered" role="document">';
    html += '\n               <div class="modal-content darkModalBg">';
    html += '\n                   <!--  Modal BODY -->';
    html += '\n                   <div class="modal-body py-2">';
    html += '\n                       <div class="card card-body pt-3" style="background-color: transparent;">';
    html += '\n                           <div class="flex-row align-center">';
    html += '\n                               <div class="d-flex flex-row justify-content-center">';
    html += '\n                                   <h3 class="modal-title align-self-center" id="exampleModalLongTitle">Community Installer</h3>';
    html += '\n                               </div>';
    html += '\n                               <div class="flex-row justify-content-center mb-3">';
    html += '\n                                   <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                                       <small><u>Author:</u></small>';
    html += '\n                                       <small>Anthony Santilli (@tonesto7)</small>';
    html += '\n                                   </div>';
    html += '\n                                   <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                                       <small><u>Co-Author:</u></small>';
    html += '\n                                       <small>Corey Lista (@coreylista)</small>';
    html += '\n                                   </div>';
    html += '\n                               </div>';
    html += '\n                               <div class="flex-row justify-content-center">';
    html += '\n                                   <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                                       <small><u>SmartApp Version:</u></small>';
    html += '\n                                       <small>v' + appVersion + '</small>';
    html += '\n                                   </div>';
    html += '\n                                   <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                                       <small><u>WebApp Version:</u></small>';
    html += '\n                                       <small>v' + scriptVersion + '</small>';
    html += '\n                                   </div>';
    html += '\n                               </div>';
    html += '\n                           </div>';
    html += '\n                       </div>';
    html += '\n                   </div>';
    html += '\n                   <div class="modal-body py-2">';
    html += '\n                       <div class="card card-body pt-3" style="background-color: transparent;">';
    html += '\n                           <div class="flex-row align-center">';
    html += '\n                               <div class="d-flex flex-row justify-content-center">';
    html += '\n                                   <div class="d-flex flex-column justify-content-center align-items-center text-center">';
    html += '\n                                       <h5><u>Notice</u></h5>';
    html += '\n                                       <small><strong>Use this product at your own risk!</strong></small>';
    html += '\n                                       <small>We are NOT responsible for any SmartApps and/or Devices displayed in this App.  They will always be the responsibility of the individual developer</small>';
    html += '\n                                       <small>We are NOT responsible for any damages obtained to yourself or your belonging while using this application</small>';
    html += '\n                                       <small>Now Please Enjoy It!!!</small>';
    html += '\n                                   </div>';
    html += '\n                               </div>';
    html += '\n                           </div>';
    html += '\n                       </div>';
    html += '\n                   </div>';
    html += '\n                   <!--  Modal FOOTER -->';
    html += '\n                   <div class="modal-body py-2">';
    html += '\n                       <div class="card card-body pt-3" style="background-color: transparent;">';
    html += '\n                           <div class="flex-row align-center">';
    html += '\n                               <div class="d-flex flex-row justify-content-center">';
    html += '\n                                   <div class="d-flex flex-column justify-content-center align-items-center">';
    html += '\n                                       <h6>Want to make a Donation?</h6>';
    html +=
        '\n                                       <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="VPPATVAXQLTNC"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></form>';
    html += '\n                                       <small><u>Privacy</u></small>';
    html += '\n                                       <a class="blue-text" href="https://community-installer-34dac.firebaseapp.com/privacypolicy.html"><small>Privacy Policy</small></a>';
    html += '\n                                       <br>';
    html += '\n                                       <small style="font-size: 10px;">Copyright \u00A9 2018 Anthony Santilli & Corey Lista</small>';
    html += '\n                                   </div>';

    html += '\n                               </div>';
    html += '\n                           </div>';
    html += '\n                           <button type="button" class="btn btn-sm btn-secondary mx-5 my-4" data-dismiss="modal">Close</button>';
    html += '\n                       </div>';
    html += '\n                   </div>';
    html += '\n               </div>';
    html += '\n           </div>';
    html += '\n       </div>';
    $('body').css({ 'overflow-x': 'hidden' });
    $('#bodyDiv').html(html);
}