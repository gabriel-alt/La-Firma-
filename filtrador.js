function miFiltro(){
            console.log("hola");
             // Declare variables
  var input, filtro, ul, li,   txtValue="";
            var h;
            
  input = document.getElementById('ubc');
  filtro = input.value.toUpperCase();
  ul = document.getElementById("myUl");
  li = ul.getElementsByClassName("casa");
            h=ul.getElementsByTagName('h5');
            
            //console.log(li.length);
  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
     
      console.log(i);
    //h = li[i].getElementsByTagName("h5").innerHTML;
     console.log(h.item(i).innerHTML);
       
     txtValue = h.item(i).innerHTML;
      //txtValue=h.innerHTML;
      
    if (txtValue.toUpperCase().indexOf(filtro) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
        }