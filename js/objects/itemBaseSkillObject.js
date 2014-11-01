var ItemBaseSkill = function(xmlSource) {
    this.constr = "ItemBaseSkill";

    this.id = xmlSource.getAttribute("id");

    this.value = extractFromAttributeWithDefaultObject(xmlSource, "value", 0);
    this.isProxy = extractFromAttributeWithDefaultObject(xmlSource, "isProxy", 0);

    this.skillId = xmlSource.getAttribute("skillId");
    this.itemBaseId = xmlSource.getAttribute("itemBaseId");
}

ItemBaseSkill.prototype.getId = function() {
  return this.id;
};

ItemBaseSkill.prototype.getName = function() {
  return "";
};

ItemBaseSkill.prototype.getValue = function() {
  return this.value;
};

ItemBaseSkill.prototype.getSkillName = function() {
  return _SkillData[this.skillId].getName();
};

ItemBaseSkill.prototype.getItemBaseName = function() {
  return _ItemBaseData[this.itemBaseId].getName();
};

ItemBaseSkill.prototype.getItemBaseIcon = function() {
  return _ItemBaseData[this.itemBaseId].getIcon();
};

// Explore Specific
ItemBaseSkill.prototype.explore = function() {
  var result = [];
  return result.join("");
}

ItemBaseSkill.prototype.exploreCategoryTitle = function(flavor) {
  if(flavor == "usedBy") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Est disponible sur les objets/batiments:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Is available for the items/buildings:</h2>';
  }
}

ItemBaseSkill.prototype.exploreTableHeader = function() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemValueTitle">Skill Value</th></tr></thead>';
}

ItemBaseSkill.prototype.exploreInformation = function() {
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td class="exploreItemIcon"><img src="' + this.getItemBaseIcon() + '" ></td><td class="exploreItemName">' + this.getItemBaseName() + '</td><td class="exploreItemValue">' + this.getValue() + '</td></tr>';
}