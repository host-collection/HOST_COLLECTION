$(function() {
    //---image-view-----

    $('#fileInput').on('change', function(evt) {
	  var selectedImage = evt.currentTarget.files[0];
	  var imageWrapper = document.querySelector('.image-wrapper');
	  var theImage = document.createElement('img');
	  imageWrapper.innerHTML = '';
	 
	  var regex = /^([a-zA-Z0-9\s_\\.\-:()])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
	  if (regex.test(selectedImage.name.toLowerCase())) {
	    if (typeof(FileReader) != 'undefined') {
	      var reader = new FileReader();
	      reader.onload = function(e) {
	          theImage.id = 'new-selected-image';
	          theImage.src = e.target.result;
	          imageWrapper.appendChild(theImage);
	        }
	        //
	      reader.readAsDataURL(selectedImage);
	    } else {
	      //-- Let the user knwo they cannot peform this as browser out of date
	      console.log('browser support issue');
	    }
	  } else {
	    //-- no image so let the user knwo we need one...
	    $(this).prop('value', null);
	    console.log('please select and image file');
	  }

	});
	//-----img-multi--------////
	function previewImages() {

	  var $preview = $('#preview');
	  if (this.files) $.each(this.files, readAndPreview);

	  function readAndPreview(i, file) {
	    
	    if (!/\.(jpe?g|png|gif|jpg)$/i.test(file.name)){
	      return console.log(file.name +" is not an image");
	    } // else...
	    
	    var reader = new FileReader();

	    $(reader).on("load", function() {

	      	$preview.append($("<img/>", {src:this.result, height:130}));
	    });
	    reader.readAsDataURL(file); 
	  }
	}
	$('#file-input').on("change", previewImages);
});

$(document).ready(function(){
  	$(".click_remove").click(function(){
      	if(confirm("Bạn muốn xoá dữ liệu ")){
          	$.post($(this).attr("href"));
          	$(this).parent().parent().remove();
      	}
      	return false;
  	});
  	$(".click_remove_cate").click(function(){
      	if(confirm("Bạn muốn xoá dữ liệu ")){
          	$.post($(this).attr("href"));
          	$(this).parent().parent().next().remove();
          	$(this).parent().parent().remove();
      	}
      	return false;
  	});

  	$(".remove_picture").click(function(){
            if(confirm("Bạn muốn bỏ hình này? ")){
                $.get("/admin/product/removepicture/"+$(this).attr("idx")+"?pic="+$(this).attr("pic"),function(){
                });
                $(this).parent().remove();
            }
    });

    //select2 

    $(".js-example-basic-single").select2();

});