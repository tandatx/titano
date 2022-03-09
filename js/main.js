$(document).ready(function() {
    // show hide mb menu
    $('.mb-menu-btn, .btn-close-sidebar').click(function(){
        $('.sidebar, body').toggleClass('active');
    })

    if($('#daysSlider').length){
        var slider = document.getElementById("daysSlider");
        var output = document.getElementById("daysSliderValue");
        output.innerHTML = slider.value + ' days';
        
        slider.oninput = function() {
          output.innerHTML = this.value + ' days';
          if(this.value<=1){
            output.innerHTML = this.value + ' day';
          }
        }
    }

});