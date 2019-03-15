$(function(){
    for(i=0;i<local.length;i++)
        $('#province').append('<option value='+local[i].province+'>'+local[i].province+'</option>')
})
$('#province').change(function(){
    var val = $(this).get(0).selectedIndex-1 //得到是local数组中的第几个省份
    
    $("#city").empty()
    $("#area").empty()
    $('#city').append("<option value='' selected disabled>-=请选择城市=-</option>")
    $('#area').append("<option value='' selected disabled>-=请选择地区=-</option>")
    for(i=0;i<local[val].city.length;i++)
    {
        $('#city').append("<option value="+local[val].city[i].name+">"+local[val].city[i].name+"</option>")
    }
})
$('#city').change(function(){
    var pval = $('#province').get(0).selectedIndex-1 //得到是local数组中的第几个省份
    var cval = $(this).get(0).selectedIndex-1 //得到是local数组中的第几个城市
    $("#area").empty()
    $('#area').append("<option value='' selected disabled>-=请选择地区=-</option>")
    for(i=0;i<local[pval].city[cval].area.length;i++)
    {
    $('#area').append("<option value="+local[pval].city[cval].area[i]+">"+local[pval].city[cval].area[i]+"</option>")
    }
})