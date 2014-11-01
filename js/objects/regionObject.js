var Region = function(xmlSource) {
    this.constr = "Region";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.territoryId = extractFromAttributeWithDefaultObject(xmlSource, "territoryId", 0);
    this.landformId = extractFromAttributeWithDefaultObject(xmlSource, "landformId", 0);
    this.difficulty = extractFromAttributeWithDefaultObject(xmlSource, "difficulty", 0);
    
    this.wildlifes = extractListObject(xmlSource, "wildlifes");
    this.resources = extractListObject(xmlSource, "resources");
}

Region.prototype.getId = function() {
  return this.id;
};

Region.prototype.getName = function() {
  return this.name.getText();
};

Region.prototype.getValue = function() {
  return "";
};

Region.prototype.getTerritoryId = function() {
  return this.territoryId;
};

Region.prototype.getTerritoryName = function() {
  return _TerritoryData[this.territoryId].getName();
};

Region.prototype.getDifficulty = function() {
  return this.difficulty;
};

Region.prototype.getTerrainSkillId = function() {
  return _LandformData[this.landformId].getSkillId();
};

Region.prototype.getTerrainName = function() {
  return _LandformData[this.landformId].getSkillName();
};

Region.prototype.getTerrainIcon = function() {
  return _LandformData[this.landformId].getSkillIcon();
};

// Explore Specific
Region.prototype.explore = function() {
  var result = [];

  // First set a Title
  result.push('<h1 class="exploreTitle title" id="' + this.getId() + '">' + this.getName() + ' / <span class="exploreItem" onclick="exploreId(\'' + this.getTerritoryId() + '\')" >' + this.getTerritoryName() + '</span></h1><div class="terrainDifficulty exploreItem" onclick="exploreId(\'' + this.getTerrainSkillId() + '\')"><div class="vertAlign">Terrain: </div><img class="vertAlign" src="' + this.getTerrainIcon() + '" ><div class="vertAlign"> ' + this.getTerrainName() + ' - Difficulty:' + this.getDifficulty() + '</div></div>');

  result.push( exploreList(this.wildlifes) );
  result.push(exploreList(this.resources) );

  return result.join("");
}

Region.prototype.exploreCategoryTitle = function(flavor) {

}

Region.prototype.exploreTableHeader = function() {

}

Region.prototype.exploreInformation = function() {

}