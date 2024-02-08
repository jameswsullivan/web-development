/*
This JS script is for the KOHA library catalog page branding for Butte County.
The first part of the scripts modifies the default wording and change them to
match the library's marketing needs.

The second part customizes the user regisration page to accommodate the "electronic resource only" (e-card)
registration.
*/

$(document).ready(function(){  
  
    if ( $('#opac-usersuggestions').length ) {
        $('label[for="place"]').text("I would like this item requested for:");
      $('#place').replaceWith(`<select name="place" required="required">
      <option value=""></option>
      <option value="Purchase for Library collection ">Purchase for Library collection</option>
      <option value="Personal Reading and/or Research">Personal Reading and/or Research</option>
      </select>`);
    }    
    
    /*Hide unwanted branches in main search bar. */
    $("#select_library option[value='branch:YOURBRANCH'],option[value='branch:YOURBRANCH'],option[value='branch:YOURBRANCH'],option[value='branch:YOURBRANCH'],option[value='branch:YOURBRANCH'],option[value='branch:YOURBRANCH']").remove();
  
    /*Library Branding*/
    var logo='YOUR_URL';
    var bkgnd=$("#opac-main-search").css("background-color");
    var frgnd=$("#moresearches").css("color");
  
    $("#opac-main-search").find("h1").remove();
    $("#searchform").prepend("<a id='#libraryname' href='/cgi-bin/koha/opac-main.pl' style='float: left; padding: 0pt; display: inline; margin: 0em 1em 0.3em 0.1em; width: 100px;'><img src="+logo+" /></a>");
    $("#fluid-offset").css({ "float":"left","width":"25%" });
    if($(".ft").length != 0) {
      $(".ft").after("<div id='kohacredit'><center><b style='color:"+frgnd+";'>Powered By :</b><a href='http://www.koha-community.org' style='text-decoration:none;' target='_blank'  > <img src='/opac-tmpl/prog/images/koha-logo.gif' alt='Koha' ALIGN='ABSMIDDLE' style='background:"+bkgnd+";'/> </a></center></div>");
    }
    else {
      $("div#bd").after("<div id='kohacredit'><center><b style='color:"+frgnd+";'>Powered By :</b><a href='http://www.koha-community.org' style='text-decoration:none;' target='_blank'  > <img src='/opac-tmpl/prog/images/koha-logo.gif' alt='Koha' ALIGN='ABSMIDDLE' style='background:"+bkgnd+";'/> </a></center></div>");
    }
  
    $("h1#logo").remove();
    $("select[name='idx'] option:first").text('Keyword');
    $('.no-image').remove();
  
    /* Unifying the login label wordings on password reset and login pages. - Begin */
    $('#forgotpassword-main a').html('Forgot your PIN/password?');
    $('#forgotpassword-modal a').html('Forgot your PIN/password?');
    $('.span10 h3:contains("Forgotten password recovery")').html('PIN/Password Recovery');
    $('.breadcrumb a:contains("Forgotten password recovery")').html('PIN/Password Recovery');
    $('#password-recovery p:contains("To reset your password, enter your login or your email address.")').html('To reset your PIN/password, enter your Library Card Number or email address.');
    $('#password-recovery label[for="username"]').text('Library Card Number:');
    $('#patronregistration-main,#patronregistration-modal,#patronregistration p').html('Interested in online resources only?<br /><a href="https://butte.bywatersolutions.com/cgi-bin/koha/opac-memberentry.pl">Get an e-Card!</a>');
    $('#loginModal label[for="muserid"]').text('Username/Library Card Number:');
    $('#loginModal label[for="mpassword"]').text('PIN/Password:');
    $("#auth legend:contains('Log in to your account')").text("Log in to your Library Account");
    $("#auth label[for='userid']").html("Username/Library Card Number:");
    $("#auth label[for='password']").html("PIN/Password:");
    $('#members a:contains("Log in to your account")').text("Log in to your Library Account");
    $('#modalLoginLabel').text("LOG IN");
  
    if( $('#opac-login-page').length) {
      $('#opac-auth h3').text('Log in to your Library Account');
      $('#forgotpassword a').html('Forgot your PIN/password?');
      $('#nologininstructions').remove();
      $('#forgotpassword').after(
        '<div id="registrationinstructions">' +
        '<p>Interested in online resources only? <a href="/cgi-bin/koha/opac-memberentry.pl">Get an e-Card!</a></p>' +
        '</div>'
      );
    }
    /* Unifying the login label wordings on password reset and login pages. - End*/
  
    /* Add Featured Content to user's OPAC account. */
    $('#userdetails').prepend(
      '<h2>What\'s New?</h2>' +
      '<div id="FeaturedContentInOPACAcct">' +
      '<p class="FeaturedContentInOPACAcct">1. ADD_YOUR_CONTENT</p>' +
      '<p style="margin-left:12px;">ADD_YOUR_CONTENT_DESCRIPTION</p>' +
      '<p class="FeaturedContentInOPACAcct">2. ADD_YOUR_CONTENT</p>' +
      '<p style="margin-left:12px;">ADD_YOUR_CONTENT_DESCRIPTION</p>' +
      '<p class="FeaturedContentInOPACAcct">3. ADD_YOUR_CONTENT</p>' +
      '<p style="margin-left:12px;">ADD_YOUR_CONTENT_DESCRIPTION</p>' +
      '<p class="FeaturedContentInOPACAcct">ADD_YOUR_CONTENT</p>' +
      '</div>'
    );
  
    /*Social Feeds Menu Toggle - BEGIN*/
    $("#socialFeedsTwitterToggle").click(function() {
      if ( $('#socialFeedsTwitterContent').css('display') == 'none') {
        $('#socialFeedsTwitterContent').css('display','block');
        $('#socialFeedsTwitterToggleBlurb').html('Click to hide tweets');
      } else {
        $('#socialFeedsTwitterContent').css('display','none');
        $('#socialFeedsTwitterToggleBlurb').html('Click to show @ButteCoLibrary');
      }
    });
    /*Social Feeds Menu Toggle - END*/
});  
/*Monor Cosmetic Fixes - By Alex - End*/
  
/*Self Registration - E-Card Modification - Begin */
  $(document).ready(function () {
      if ( $('#opac-patron-registration').length ) {
          $('#memberentry-form').prepend(
              '<div id="BCLeCardInformation">' +
              '<h3>Welcome to Butte County Library e-Card</h3>' +
              '<p>Live in Butte County but don’t have a library card? Good news: Butte County residents can access our e-Resources by getting an e-Card without first having to visit a library branch !</p><br />' +
              '<table class="table table-hover" style="width: auto;">' +
              '	<thead>' +
              '	<tr>' +
              '		<th scope="col" style="width:60%;"><h3>What Can I Do with an e-Card vs a Full Access Library Card?</h3></th>' +
              '		<th scope="col" style="width:20%; text-align:center;"><h3>e-Card</h3></th>' +
              '		<th scope="col" style="width:20%; text-align:center;"><h3>Full Access Library Card</h3></th>' +
              '	</tr>' +
              '	</thead>' +
              '	<tbody>' +
              '	<tr>' +
              '		<td><h3>e-Media</h3>Access to eBooks, Audiobooks, Comics; stream Movies and TVs.</td>' +
              '		<td class="status"><i class="fa fa-check-square" aria-hidden="true"></i></td>' +
              '		<td class="status"><i class="fa fa-check-square" aria-hidden="true"></i></td>' +
              '	</tr>' +
              '	<tr>' +
              '		<td><h3>Research & Education</h3>Browse catalog; access to Britannica, ProQuest, WorldBook, Testing & Education Reference Center, and other online databases; education and career tools.</td>' +
              '		<td class="status"><i class="fa fa-check-square" aria-hidden="true"></i></td>' +
              '		<td class="status"><i class="fa fa-check-square" aria-hidden="true"></i></td>' +
              '	</tr>' +
              '	<tr>' +
              '		<td><h3>Physical Collections</h3>Request and check out library materials.</td>' +
              '		<td class="status"></td>' +
              '		<td class="status"><i class="fa fa-check-square" aria-hidden="true"></i></td>' +
              '	</tr>' +
              '	<tr>' +
              '		<td><h3>Library Computers</h3>Reserve and use library public computers.</td>' +
              '		<td class="status"></td>' +
              '		<td class="status"><i class="fa fa-check-square" aria-hidden="true"></i></td>' +
              '	</tr>' +
              '	</tbody>' +
              '</table>' + 
              '<hr>' +
              '<h3>Did You Know</h3>' +
              '<ul>' +
              '<li>If you already have a Full Access Library Card, you do <strong>not</strong> need an e-Card.</li>' +
              '<li> e-Cards are valid for two years.</li>' +
              '<li> Email is required and must be unique. Your e-Card number and username will be delivered to your email within one (1) business day after successful registration.</li>' +
              '<li> <strong>PIN</strong> and <strong>Password</strong> are interchangeable terms used by vendors/services for authentication. Need to reset password? Use <a href="https://butte.bywatersolutions.com/cgi-bin/koha/opac-password-recovery.pl" target="_blank">Forgot your PIN/password?</a>.</li>' +
              '</ul>' +
              '</div>' +
              '<hr>'
          );
          
          $('#memberentry_captcha').after(
              '<div id="BCLeCardInformation_Agreement">' +
              '<h3>Library Borrower\'s Agreement</h3>' +
              '<ul>' +
              '<li>I accept responsibility for all services accessed by this card with or without my consent. I agree to notify the library of any changes to my account information.</li>' +
              '<li>I understand that library e-Resources are available to all library users. For Parent\/Guardian\/Sponsor: I understand that I am responsible for my child\'s use of all library e-resources.</li>' +
              '<li>By completing this form, you certify that you are a resident within the jurisdiction of Butte County.</li>' +
              '</ul>' +
              '</div>'
      );
      
      $("#memberentry_mainaddress label[for='borrower_state']").html('State:<br />(Enter CA)');
      $("#borrower_state").attr('value', 'CA');
      $("#borrower_branchcode option[value='ECARD']").prop('selected', true);
      $('#memberentry_library').hide();
      $("#memberentry_mainaddress label[for='borrower_address']").html('Residential Address: <br /> (no PO Boxes)');
      $("#memberentry_captcha legend" ).text('I\'m not a robot.');
      $("#memberentry_captcha label[for='captcha']").text('Enter CAPTCHA:');
      $('#memberentry_password legend').html('PIN/Password<span class="ecard-pin-explanation">&nbsp;(The PIN/password you choose here will be used for e-Resources authentication.)</span>');
      $('#memberentry_password label[for="borrower_password"]').html('PIN/Password');
      $('#memberentry_password label[for="borrower_password2"]').html('Confirm PIN/Password');
          
      }
      
      if ( $('#opac-patron-update').length ) {
        $("#borrower_branchcode option[value='YOURBRANCH'],option[value='YOURBRANCH'],option[value='YOURBRANCH'],option[value='YOURBRANCH'], option[value='YOURBRANCH'], option[value='YOURBRANCH']").remove();
        /* Hide "Submit update request" section in OPAC */
        if ( $("#update-account").length ) {
          $("#memberentry-form fieldset[class='action']").remove();
          
          $("#update-account").after(
            '<div id="OPAC_ContactLibraryToUpdatePersonalInfo">' +
            '<p>If you need to update your personal information, please visit the library with your Library Card or picture ID, or call us at 530-552-5652 opt 2 and provide your Library Card Number.' +
            '</div>'
          );
          
          $("#memberentry-form input[type=text]").prop("disabled", true);
          $("#memberentry-form select[id=borrower_branchcode]").prop("disabled", true);
        }
      }
  
      $("#identity_legend").text('Registration Info');
      $("#mainaddress_legend").text('Address');
      $("#contact_legend").text('Contact Information');
      $("#memberentry_identity label[for='borrower_surname']").text('Last name:'); 
      $('.breadcrumb a:contains("Register a new account")').text('Get an e-Card');
  });
/*Self Registration - E-Card Modification - End */
