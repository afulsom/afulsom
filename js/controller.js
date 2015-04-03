function loadMonsters() {
$.get('templates/monsters.mst', function(template) {
    $.getJSON(
        'http://private-208d1-assignment2.apiary-mock.com/monsters', 
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
        'http://private-208d1-assignment2.apiary-mock.com/items', 
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
        'http://private-208d1-assignment2.apiary-mock.com/stats', 
        {}, 
        function(json, textStatus) {
            var data = {"stats":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function loadMonsterById(id) {
$.get('templates/monsters-detail.mst', function(template) {
    $.getJSON(
        'http://private-208d1-assignment2.apiary-mock.com/monsters'+id,
        {}, 
        function(json, textStatus) {
            var data = {"monster":json};
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}


function loadItemById(id) {
$.get('templates/items-detail.mst', function(template) {
    $.getJSON(
        'http://private-208d1-assignment2.apiary-mock.com/items'+id,
        {}, 
        function(json, textStatus) {
            var data = {"item":json};
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function hashAction(){
    var numberPattern = /\/\d+/g;
    var noteId = location.hash.match( numberPattern );
    if (noteId) {
	if(location.hash == '#monsters')
            loadMonsterById(noteId);
	else
	    loadItemById(noteId);
        return;
    }
    switch(location.hash) {
        case '#home':
          //do something
          $("#body").text("Welcome to the official website for Roguelike Game(working title). The game isn't finished yet, but feel free to read up on the game before its release.");
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
    $.get('templates/global.mst', function(template) {
    var data = {"title":"Roguelike Game"};
    var rendered = Mustache.render(template,data);
    $('#header').html(rendered);
    });
    $.get('templates/navigation.mst', function(template) {
    var data = {"title":"TEST TITLE", 
                "nav":[
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


