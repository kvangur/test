$(function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal');
		$(id).addClass('is-open');
		}
	function hideModals(){
		$(document.body).removeClass('is-open-modal');
		$('.modal').removeClass('is-open');
	}

	$(".modal1-open").on('click', function(e){
		showModal('#modal1');
 });
	
    $(".modal2-open").on('click', function(e){
		showModal('#modal2');
 });
    
//	$(document).on('click', function(e){
//		if (!(
//		($(e.target).parents('.dialog').length)
//		||	($(e.target).hasClass('dialog'))
//		||	($(e.target).hasClass('modal2-open')))
//		) {
//			hideModals();
//		}
//	});
	
    $(document).ready(function(){
  $("#cancel, #cancel1").click(function(){
    hideModals();
  });
});
    
});