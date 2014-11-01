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