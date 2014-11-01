var ItemType = function(xmlSource, fakeIdCreation) {
    this.constr = "ItemType";
    if(fakeIdCreation === undefined) // parameter was omitted in call
	{
      this.id = xmlSource.getAttribute("id");
      this.name = new LocalizedText(xmlSource, "name");
    
      this.parentItemTypeId = extractFromAttributeWithDefaultObject(xmlSource, "parentItemTypeId", 0);
      this.iconId = extractFromAttributeWithDefaultObject(xmlSource, "iconId", 0);
      this.showInGuide = extractFromAttributeWithDefaultObject(xmlSource, "showInGuide", 0);
      this.totalItemBaseCount = xmlSource.getAttribute("totalItemBaseCount");
    
      this.skills = extractListObject(xmlSource, "skills");
      this.itemBases = extractListObject(xmlSource, "itemBases");
      this.usedInRecipeIngredients = extractListObject(xmlSource, "usedInRecipeIngredients");
      this.usedInRecipes = extractListObject(xmlSource, "usedInRecipes");
      this.subItemTypes = extractListObject(xmlSource, "subItemTypes");
    }
    else
	{
	  this.id = 0;
	  this.name = new LocalizedText(xmlSource, "name", "-");
	  
	  this.parentItemTypeId = 0;
	  this.iconId = 0;
	  this.showInGuide = 0;
	  this.totalItemBaseCount = 0;
	  
      this.skills = [];
      this.itemBases = [];
      this.usedInRecipeIngredients = [];
      this.usedInRecipes = [];
      this.subItemTypes = [];
	}

}

ItemType.prototype.getId = function() {
  return this.id;
};

ItemType.prototype.getName = function() {
  return this.name.getText();
};

ItemType.prototype.getValue = function() {
  return "";
};

ItemType.prototype.getIcon = function() {
  return getImageLink(this.iconId);
};

ItemType.prototype.getParentItemTypeName = function() {
  if (this.parentItemTypeId != 0) {
    return _ItemTypeData[this.parentItemTypeId].getName();
  }
  return "-";
}

// Explore Specific
ItemType.prototype.explore = function() {
  var result = [];
  
  // First set a Title
  result.push('<img src="' + this.getIcon() + '" ><h1 class="exploreTitle title" id="' + this.getId() + '">' + this.getName() + '</h1>');

  result.push( exploreList(this.skills) );
  result.push( exploreList(this.itemBases) );
  result.push( exploreList(this.usedInRecipes, "usedIn") );
  result.push( exploreList(this.subItemTypes, "sub") );
  
  return result.join("");
}

ItemType.prototype.exploreCategoryTitle = function(flavor) {
  if(flavor == "usedBy") 
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Présent dans les objets de ces catégories:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Present in item from those categories:</h2>';
  }
  if(flavor == "sub")
  {
    if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">A les sous types d\'objets suivants:</h2>'; }
    return '<h2 class="subTitle exploreSubTitle">Has the following sub item types:</h2>';
  }
}

ItemType.prototype.exploreTableHeader = function() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th></tr></thead>';
}

ItemType.prototype.exploreInformation = function() {
  return '<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td class="exploreItemIcon"><img src="' + this.getIcon() + '" ></td><td class="exploreItemName">' + this.getName() + '</td></tr>';
}