// $('h1').css('color','red')
// console.log($)
$('h1').css({
    color:"red",
    size: "70px",
    backgroundColor:"yellow"
}
)
console.log($('h1').text());
// console.log($('h1').text('hiiii'));
console.log($('input').attr('type','number'))
console.log($('input').attr('type'))

$('button').click(()=>{
    // console.log('hehe')
    // $('body').fadeOut();
    // $('body').fadeIn();
    $('body').toggle();
    // ------------toggle click krne pr gyb ho jaegaa click krne pr wps aa jaeegaa-----------------
    

})
// let arr=['images/dog1.jpeg',
//     'images/dog2.jpeg',
//     'images/dogo.jpg'
// ]
// let num=0;
// $('img').attr('src','images/dog1.jpeg');
// $('img').setInterval(() => {
//     $('img').attr('src','arr[num]');
//     num=(num+1)%arr.length;
    
// },1000);
// attr('src','arr[num]');
