var UnitBase = function(xmlSource) {
    this.constr = "UnitBase";
    this.id = xmlSource.getAttribute("id");
    this.name = new LocalizedText(xmlSource, "name");
    
    this.unitType = extractFromAttributeWithDefaultObject(xmlSource, "unitType", 0);
    this.largeImageId = extractFromAttributeWithDefaultObject(xmlSource, "largeImageId", 0);
    this.portraitId = extractFromAttributeWithDefaultObject(xmlSource, "portraitId", 0);
    this.smallImageId = extractFromAttributeWithDefaultObject(xmlSource, "smallImageId", 0);
    this.iconId = extractFromAttributeWithDefaultObject(xmlSource, "iconId", 0);
    this.interestSkillId = extractFromAttributeWithDefaultObject(xmlSource, "interestSkillId", 0);
    this.interestSkillValue = extractFromAttributeWithDefaultObject(xmlSource, "interestSkillValue", "");
    this.aggressiveness = extractFromAttributeWithDefaultObject(xmlSource, "aggressiveness", 0);
    this.tamingTaskId = extractFromAttributeWithDefaultObject(xmlSource, "tamingTaskId", 0);
    this.huntingTaskId = extractFromAttributeWithDefaultObject(xmlSource, "huntingTaskId", 0);
    
    this.regions = extractListObject(xmlSource, "regions");
    this.skills = extractListObject(xmlSource, "skills");
}

UnitBase.prototype.getId = function() {
  return this.id;
};

UnitBase.prototype.getName = function() {
  return this.name.getText();
};

UnitBase.prototype.getValue = function() {
  return "";
};

UnitBase.prototype.getIcon = function() {
  return getImageLink(this.iconId);
};

UnitBase.prototype.getAggressiveness = function() {
  return this.aggressiveness;
};

UnitBase.prototype.getInterestSkillName = function() {
  return _SkillData[this.interestSkillId].getName();
};

UnitBase.prototype.getInterestSkillIcon = function() {
  return _SkillData[this.interestSkillId].getIcon();
};

UnitBase.prototype.getInterestSkillValue = function() {
  return this.interestSkillValue;
};

UnitBase.prototype.getUnitTypeName = function() {
  return _UnitTypeData[this.unitType].getName();
};

// Explore Specific
UnitBase.prototype.explore = function() {
  var result = [];
  return result.join("");
}

UnitBase.prototype.exploreCategoryTitle = function(flavor) {
  if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Humains/Créatures dans ce lieu:</h2>'; }
  return '<h2 class="subTitle exploreSubTitle">Humans/Creatures in this place:</h2>';
}

UnitBase.prototype.exploreTableHeader = function(flavor) {
  if(flavor == "dungeon") 
  {
    return '<thead><tr><th></th><th>Name</th><th>Type</th><th>Aggressiveness</th></tr></thead>';
  }

}

UnitBase.prototype.exploreInformation = function(flavor) {
  if(flavor == "dungeon") 
  {
    return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td><img src="' + this.getIcon() + '" ></td><td>' + this.getName() + '</td><td>' + this.getUnitTypeName() + '</td><td>' + this.getAggressiveness() + '</td></tr>';
  }
}