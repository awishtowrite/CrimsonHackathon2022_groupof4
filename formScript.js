function countChecksByType(type){

  var checkMarksOfType = document.getElementsByName(type);
  var totalChecked = 0;

  for(var i = 0; i < checkMarksOfType.length; i++ )
  {
    if(checkMarksOfType[i].checked)
    {
        totalChecked++;
    }
  }
  return totalChecked;
}

function reccomend()
{

  var alc = countChecksByType("alcohol");  //if >= 2, bad sign.
  var dep = countChecksByType("depression"); //if >=2 bad sign
  var stu = countChecksByType("study");  //if >= 3, good sign

  if(alc >= 2 && dep < 2 && stu >= 3){//fail alc
    alert("Reccomended reading: Alcohol");
    //location.assign("alc.html");       TODO we gotta make these result pages
  }
  else if(alc < 2 && dep >= 2 && stu >= 3){//fail dep
    alert("Reccomended reading: Depression");
    //location.assign("dep.html");
  }
  else if(alc < 2 && dep < 2 && stu < 3){//fail stu
    alert("Reccomended reading: Study");
    //location.assign("stu.html");
  }
  else if(alc >= 2 && dep >= 2 && stu >= 3){//fail alc and dep
    alert("Reccomended readings: Alcohol and Depression");
    //location.assign("alcdep.html");
  }
  else if(alc >= 2 && dep < 2 && stu < 3){//fail alc and stu
    alert("Reccomended readings: Alcohol and Study");
    //location.assign("alcstu.html");

  }
  else if(alc < 2 && dep >= 2 && stu < 3){//fail dep and stu
    alert("Reccomended readings: Depression and Study");
    //location.assign("depstu.html");

  }
  else if (alc >= 2 && dep >= 2 && stu < 3){//fail all three :()
    alert("Reccomended readings: Alcohol, Depression, and Study");
    //location.assign("alcdepstu.html");

  }
  else{//succeed all 3
    alert("No reccomended readings!");
    //location.assign("none.html");

  }
}
