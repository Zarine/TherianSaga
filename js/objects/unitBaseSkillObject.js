var UnitBaseSkill = function(xmlSource) {
    this.constr = "UnitBaseSkill";
    this.id = xmlSource.getAttribute("id");
    
    this.value = extractFromAttributeWithDefaultObject(xmlSource, "value", 0);
    this.skillId = extractFromAttributeWithDefaultObject(xmlSource, "skillId", 0);
    this.unitBaseId = extractFromAttributeWithDefaultObject(xmlSource, "unitBaseId", 0);
    this.isProxy = extractFromAttributeWithDefaultObject(xmlSource, "isProxy", 0);
}

UnitBaseSkill.prototype.getId = function() {
  return this.id;
};

UnitBaseSkill.prototype.getName = function() {
  return "";
};

UnitBaseSkill.prototype.getValue = function() {
  return this.value;
};

UnitBaseSkill.prototype.getUnitBaseName = function() {
  return _UnitBaseData[this.unitBaseId].getName();
};

UnitBaseSkill.prototype.getUnitBaseIcon = function() {
  return _UnitBaseData[this.unitBaseId].getIcon();
};

// Explore Specific
UnitBaseSkill.prototype.explore = function() {
  var result = [];
  return result.join("");
}

UnitBaseSkill.prototype.exploreCategoryTitle = function(flavor) {
  if(flavor == "usedBy") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Est possédée par les humains/créatures:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Is owned by the humans/creatures:</h2>';
  }
}

UnitBaseSkill.prototype.exploreTableHeader = function() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemValueTitle">Skill Value</th></tr></thead>';
}

UnitBaseSkill.prototype.exploreInformation = function() {
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td class="exploreItemIcon"><img src="' + this.getUnitBaseIcon() + '" ></td><td class="exploreItemName">' + this.getUnitBaseName() + '</td><td class="exploreItemValue">' + this.getValue() + '</td></tr>';
}