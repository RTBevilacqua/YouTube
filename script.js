'use strict'
$(function(){ 
/*----------------Search---------------------*/
	$('#yp-form').submit(function(e){
		e.preventDefault();
		var search = $('#search-input').val();
		getRequest(search);
	 });

/*----------------Searches YouTube---------------------*/
function getRequest(search){
	var params = {
		key: 'AIzaSyAlTLJr1lotZXpVjeyqoNoiRg8SLTAYPMs',
		q: search,
		part: 'snippet'
	};
	var url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, showResults);
};

			
/*----------------Callback ---------------------*/	
	function showResults(results){

		$.each(results.items, function(index, value){
			$('.results').append('<img src =' + value.snippet.thumbnails.medium.url + '>');
			console.log(value.snippet.thumbnails.medium.url);
		 });
	}











		//results = results.Search;
		// console.log(results);
		// for(var x in results.items) {
		// 	// console.log(x);
		// 	// console.log(results.items[x].snippet.thumbnails.default);
		// };









});//end of DR