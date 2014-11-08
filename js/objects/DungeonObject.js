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

Dungeon.prototype.getUnitBases = function() {
  return this.unitBases;
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
  if(flavor == "unitIn") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Se trouve dans les dungeons suivants:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Can be found in the following dungeons:</h2>';
  }
}

Dungeon.prototype.exploreTableHeader = function(flavor) {
  return '<thead><tr><th>Name</th><th>Map Name</th></tr></thead>';
}

Dungeon.prototype.exploreInformation = function(flavor) {
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td>' + this.getName() + '</td><td>' + this.getMapName() + '</td></tr>';
}