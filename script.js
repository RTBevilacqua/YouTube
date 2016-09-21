'use strict'
var apiKey = "AIzaSyAlTLJr1lotZXpVjeyqoNoiRg8SLTAYPMs";
$(function(){ 
	$('.results').hide();
	$('.lightbox').hide();
	/*----------------Search---------------------*/

	$('#yp-form').submit(function(e){
		e.preventDefault();
		var search = $('#search-input').val();
		getRequest(search);
	});
	

	/*----------------Searches YouTube---------------------*/
	function getRequest(search){
		var params = {
			key: apiKey,
			q: search,
			part: 'snippet'
		};
		var url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, showResults);
	};

	/*----------------Callback ---------------------*/	
	function showResults(results){
		$('.results').show();
		$.each(results.items, function(index, value){
			$('.results').append('<a href ="https://www.youtube.com/watch?v=' +
			 value.id.videoId + '"><img src =' + value.snippet.thumbnails.medium.url + '></a>');
		});
	}


});//end of DR