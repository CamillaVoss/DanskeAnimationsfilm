$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "dfiList.xml",
    dataType: "xml",
    success: parseXml
  });
});

function parseXml(xml) {
  $("#main").html("<ul id='content' data-role='listview' data-inset='true'></ul>");

  $(xml).find("MovieListItem").each(function() {
    $("#content").append("<a href='"+$(this).find("Ref").text()+"'><li>"+$(this).find("ID").text()+"<h3>"+$(this).find("Name").text()+"</h3><p>"+$(this).find("Ref").text()+"</h2></li></a>");
  });  
}