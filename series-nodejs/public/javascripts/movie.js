/**
 * Created by pomy on 15/11/11.
 */

$(function () {
    var mdata = {};
    var url = '/javascripts/movie.json';
    $.ajax(url).then(function(data){
        mdata = data;
        //console.log(JSON.stringify(data));
        render_editor_form(JSON.stringify(mdata));
        render_event_form(JSON.stringify(mdata));
    });

    var render_editor_form = function(mdata){
        $('#c_editor').val(mdata);
    };

    var render_event_form = function(mdata){
        $('#c_save').on('click', function(){
            $.ajax({
                type: 'POST',
                url: '/movie/add',
                data: mdata,
                dataType: 'json',
                success: function(xhr){
                    if(xhr.success === 'true'){
                        $('#msg').html('成功保存!');
                        $('#msg').addClass('alert alert-success');
                       // $(location).attr('href','/movie/'+mdata.name);
                    } else {
                        $('#msg').html(xhr.err);
                        $('#msg').addClass('alert alert-error');
                    }
                },
                error: function(){
                    console.log('error');
                }
            })
        })
    };
});