var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   console.log(alist[i]);
    //   alist[i].style.color=color;
    //   i++;
    // }
    $('a').css('color',color);
  }
}
var Body = {
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  SetBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function nightDayHandler(self){
  if(self.value == 'night'){
    Body.SetBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  }else{
    Body.SetBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
