/*****************  Task 1   ******************************/

var collect = document.getElementById('tag-line').innerHTML

collect += "\n-------------------------------------------";

var array = document.querySelectorAll(".bg-main-content h2")

for(var i=0; i<array.length; i++)
{
    collect += "\n" + array[i].innerHTML
}

alert(collect)

/*****************  Task 2   ******************************/

var when_to_launch = document.querySelectorAll(".bg-main-content .box")[12].children

collect = when_to_launch[0].innerHTML

collect += "\n-------------------------------------------";

for(var i = 1; i<when_to_launch.length; i++)
{
    collect += "\n" + when_to_launch[i].innerHTML + "\n" 
}


alert(collect)