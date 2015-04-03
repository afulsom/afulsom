function loadMonsters() {
$.get('templates/monsters.mst', function(template) {
    $.getJSON(
        'http://private-ad0b0-demoapi24.apiary-mock.com/notes', 
        {}, 
        function(json, textStatus) {
            var data = {"monsters":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function loadItems() {
$.get('templates/items.mst', function(template) {
    $.getJSON(
        'http://private-ad0b0-demoapi24.apiary-mock.com/notes', 
        {}, 
        function(json, textStatus) {
            var data = {"items":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}


function loadStats() {
$.get('templates/stats.mst', function(template) {
    $.getJSON(
        'http://private-ad0b0-demoapi24.apiary-mock.com/notes', 
        {}, 
        function(json, textStatus) {
            var data = {"stats":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function loadNoteById(id) {
$.get('templates/notes-detail.mst', function(template) {
    $.getJSON(
        'http://private-ad0b0-demoapi24.apiary-mock.com/notes/'+id,
        {}, 
        function(json, textStatus) {
            var data = {"note":json};
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function hashAction(){
    var numberPattern = /notes-\d+/g;
    var noteId = location.hash.match( numberPattern );
    if (noteId) {
        loadNoteById(noteId);
        return;
    }
    switch(location.hash) {
        case '#home':
          //do something
          $("#body").text("Welcome to my awesome list website");
        break;
        case '#monsters':
          //do something else
          loadMonsters();
        break;
        case '#items':
          loadItems();
        break;
	case '#stats':
	  loadStats();
	break;
        default:
          location.hash = "home";
      }
}

$(function(){
    $("#body").text("");
    $.get('navigation.mst', function(template) {
    var data = {"title":"TEST TITLE", 
                "nav":[
                    {"title":"Home", "href":"home"},
                    {"title":"Monsters", "href":"monsters"},
                    {"title":"Items", "href":"items"},
		    {"title":"Stats", "href":"stats"}
                    ]
                };
    var rendered = Mustache.render(template,data);
    $('#navigation').html(rendered);
    });
    window.onhashchange = function(){
      hashAction();
    };
    hashAction();
});


