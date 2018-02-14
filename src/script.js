// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

// jQuery(document).ready(function(){
// 	if( $('.my-nav').length > 0 ) {
// 		var stretchyNavs = $('.my-nav');
		
// 		stretchyNavs.each(function(){
// 			var stretchyNav = $(this),
// 				stretchyNavTrigger = stretchyNav.find('.trigger');
			
// 			stretchyNavTrigger.on('click', function(event){
// 				event.preventDefault();
// 				stretchyNav.toggleClass('nav-is-visible');
// 			});
// 		});

// 		$(document).on('click', function(event){
// 			( !$(event.target).is('.trigger') && !$(event.target).is('.trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
// 		});
// 	}
// });