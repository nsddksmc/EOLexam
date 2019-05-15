function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kJK35FodZv":
        Script1();
        break;
      case "65dTvygkIxi":
        Script2();
        break;
      case "5xTbdzQ29Hl":
        Script3();
        break;
      case "6nv6frSZZPA":
        Script4();
        break;
      case "5l492sGfvl1":
        Script5();
        break;
      case "6Bd8txKgkZK":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

