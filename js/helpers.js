function formatCodeSamples() {
    $('code').each(function(){
        var $this = $(this);
        var t = $this.html();
        console.log(t);
        t = t.replace('<br>', '***');
        t = t.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        t = t.replace('***', '<br>');
        $(this).html(t);
    });
}



$(document).ready(function() { 
    formatCodeSamples();
});