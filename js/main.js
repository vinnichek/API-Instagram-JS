jQuery(function($){
    var tok = '273543640.4072a1e.82f87e11c4b64d4aa5f5be5d7b2dc031', 
    metka=["hi","hello"];
var i=0;
 
let getPosts = () => {
    $.ajax({
        url: 'https://api.instagram.com/v1/tags/' + metka[i]+'/media/recent?access_token=' + tok,
        dataType: 'jsonp',
        type: 'GET',
        headers: {'access_token': tok},
        success: function(result){
            console.log(result);
            var template = Handlebars.compile( $('#template').html()  );
            $('.updates').empty().append( template(result)  );
        },
        error: function(xhr, ajaxOptions,thrownError){
            var error=document.createElement('div');
            error.innerHTML='status:'+xhr.status+' '+thrownError;
            document.body.appendChild(error);
		    $('#loading').hide();
        }
    });
    i++;
    if(i==metka.length)
        i=0;
    }
    $(document).ready(function () {
        getPosts();
        setInterval(getPosts, 100000);
    });;
});
