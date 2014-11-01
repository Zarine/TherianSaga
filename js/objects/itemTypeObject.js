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