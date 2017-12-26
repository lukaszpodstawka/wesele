//dadadadadffffggggggvfgfff
function setPullRight(){
    var width = $(window).width();
    if (width > 751){
        $('#nav-items-list').addClass('pull-right');
    } else {
        $('#nav-items-list').removeClass('pull-right');
    }
        
}

function setKafelekHeight(){
    var outer = window.outerWidth;
    var $kafelek = $('.kafelek');
            if(outer < 860){
                var width = $kafelek.width();
                var height = width * 0.5;
                $kafelek.height(height);
            } else {
                $kafelek.removeAttr("style");
            }
}


$(function() {
    setKafelekHeight();
    setPullRight();
    
    createGalleries();
    
    
        $(".resize").css("height", window.innerHeight + "px");
    
          $('nav a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 500);
                return false;
              }
            }
          });
        
        $('.link a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 500);
                return false;
              }
            }
          });
     

        $(window).resize(function() {
            $(".resize").css("height", window.innerHeight + "px");
        });
    
        $(window).resize(function(){
            setPullRight();
        });
    
        $(window).resize(function(){
            setKafelekHeight();
        });
    
        /*GALLERY ACTIVATOR*/
        $('.kafelek').click(function(e){
                var gallery = $(this).attr("gallery");
                window.location.hash = "#lg=1&slide=0";
                $(gallery).lightGallery({
                    thumbnail:true,
                    preload:4,
                    download:false
                });
            });
    
});

function createGalleries(){
    var GALLERIES = [
        {
        id:"gallery-plener",
        folder:"0B4aQQfEsO1ONbDJvYkNMUVRVYUU",
        ilosc:71
        },
        {
        id:"gallery-slub",
        folder:"0B4aQQfEsO1ONYW41WGk2YTlRWDA",
        ilosc:115   
        },
        {
        id:"gallery-wesele",
        folder:"0B4aQQfEsO1ONYjBhbUo2X3VwM3M",
        ilosc:197   
        },
        {
        id:"gallery-poprawiny",
        folder:"0B4aQQfEsO1ONOFZKN0Vfel9kMDg",
        ilosc:39   
        }];
    
    
    $.each(GALLERIES, function(){
       createGallery(this.id,this.folder,this.ilosc);
    });
    
}

function createGallery(id, folder, ilo){
    var JPG_SUFFIX = ".jpg"
    var GOOGLE_ADDRESS = "http://www.googledrive.com/host/";
    var DATA_SRC_TAG = "data-src";
    var THUMB_FOLDER = "img/galeria/thumb/";
    
    var galleryList = $('<ul>');
    $(galleryList).attr("id",id);
    
    for (var i = 1; i <= ilo; ++i) { 
        var item = $('<li>');
        var imgLocation = GOOGLE_ADDRESS + folder + "/" + i + JPG_SUFFIX;
        var thumbLocation = THUMB_FOLDER + id + "/" + i + JPG_SUFFIX;
        $(item).attr(DATA_SRC_TAG,imgLocation).append($('<img>',{src:thumbLocation}));
        
        $(galleryList).append(item);
    }
    $('#gallery-items').append(galleryList);
    
}