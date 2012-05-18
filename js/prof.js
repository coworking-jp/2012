// JavaScript Document
$(function() {
    function launch() {
         $('#prof1').lightbox_me({centered: true, onLoad: function() { $('#prof1').find('input:first').focus()}});
    }
    
    $('#profname1').click(function(e) {
        $("#prof1").lightbox_me({centered: true, onLoad: function() {
			$("#prof1").find("input:first").focus();
		}});
		
        e.preventDefault();
    });
        
    $('table tr:nth-child(even)').addClass('stripe');
})

$(function() {
    function launch() {
         $('#prof2').lightbox_me({centered: true, onLoad: function() { $('#prof2').find('input:first').focus()}});
    }
    
    $('#profname2').click(function(e) {
        $("#prof2").lightbox_me({centered: true, onLoad: function() {
			$("#prof2").find("input:first").focus();
		}});
		
        e.preventDefault();
    });
        
    $('table tr:nth-child(even)').addClass('stripe');
})

$(function() {
    function launch() {
         $('#prof3').lightbox_me({centered: true, onLoad: function() { $('#prof3').find('input:first').focus()}});
    }
    
    $('#profname3').click(function(e) {
        $("#prof3").lightbox_me({centered: true, onLoad: function() {
			$("#prof3").find("input:first").focus();
		}});
		
        e.preventDefault();
    });
        
    $('table tr:nth-child(even)').addClass('stripe');
})

$(function() {
    function launch() {
         $('#prof4').lightbox_me({centered: true, onLoad: function() { $('#prof4').find('input:first').focus()}});
    }
    
    $('#profname4').click(function(e) {
        $("#prof4").lightbox_me({centered: true, onLoad: function() {
			$("#prof4").find("input:first").focus();
		}});
		
        e.preventDefault();
    });
        
    $('table tr:nth-child(even)').addClass('stripe');
})

