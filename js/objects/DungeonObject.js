var Dungeon = function(xmlSource) {
    this.constr = "Dungeon";

    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.mapName = xmlSource.getAttribute("mapName");
    this.unitBases = extractListObject(xmlSource, "unitBases");
    
    this.description = new LocalizedText(xmlSource, "description");
}

Dungeon.prototype.getId = function() {
  return this.id;
};

Dungeon.prototype.getName = function() {
  return this.name.getText();
};

Dungeon.prototype.getValue = function() {
  return "";
};

Dungeon.prototype.getMapName = function() {
  return this.mapName;
};

Dungeon.prototype.getDescription = function() {
  return this.description.getText();
};

// Explore Specific
Dungeon.prototype.explore = function() {
  var result = [];

  // First set a Title
  result.push('<h1 class="exploreTitle title" id="' + this.getId() + '">' + this.getName() + ' / ' + this.getMapName() + '</h1><div>' + this.getDescription() + '</div>');

  result.push( exploreList(this.unitBases, "dungeon") );

  return result.join("");
}

Dungeon.prototype.exploreCategoryTitle = function(flavor) {
}

Dungeon.prototype.exploreTableHeader = function() {
}

Dungeon.prototype.exploreInformation = function() {
}