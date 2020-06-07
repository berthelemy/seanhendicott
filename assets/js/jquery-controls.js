$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
        $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
            var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                        SectionOneOffset = $('body').offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
                        SectionTwoOffset = $('#about').offset().top, // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
                        SectionThreeOffset = $('#products').offset().top,
                        SectionFourOffset = $('#services').offset().top,
                        //SectionFiveOffset = $('#photos').offset().top,
                        SectionSixOffset = $('#testimonials').offset().top,
                        SectionSevenOffset = $('#contact').offset().top;
            if (Scroll >= SectionOneOffset) { // If you have scrolled past section one do this.
                $(".menu-item-1").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
            } else { // If you have not scrolled section one do this.
                $(".menu-item-1").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
            }
                if (Scroll >= SectionTwoOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
                $(".menu-item-2").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                        $(".menu-item-1").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
            } else { // If you have not scrolled section two do this.
                $(".menu-item-2").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
            }
            if (Scroll >= SectionThreeOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
                $(".menu-item-3").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                        $(".menu-item-2").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
            } else { // If you have not scrolled section two do this.
                $(".menu-item-3").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
            }
            if (Scroll >= SectionFourOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
                $(".menu-item-4").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                        $(".menu-item-3").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
            } else { // If you have not scrolled section two do this.
                $(".menu-item-4").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
            }
           // if (Scroll >= SectionFiveOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
               // $(".menu-item-5").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                 //       $(".menu-item-4").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
            //} else { // If you have not scrolled section two do this.
              //  $(".menu-item-5").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
            //}
            if (Scroll >= SectionSixOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
                $(".menu-item-6").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                        $(".menu-item-4").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
            } else { // If you have not scrolled section two do this.
                $(".menu-item-6").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
            }
            if (Scroll >= SectionSevenOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
                $(".menu-item-7").addClass("current"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                        $(".menu-item-6").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
            } else { // If you have not scrolled section two do this.
                $(".menu-item-7").removeClass("current"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
            }
        });
});


$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
        $('a[href^="http"]').attr('target','_blank');
        });