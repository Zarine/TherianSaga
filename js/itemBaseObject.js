var ItemBase = function(xmlSource, fakeIdCreation) {
    if(fakeIdCreation === undefined) // parameter was omitted in call
	{
      this.id = xmlSource.getAttribute("id");
      this.name = new LocalizedText(xmlSource, "name");
	
	  this.itemTypeId = xmlSource.getAttribute("itemTypeId");
      this.iconId = extractFromAttributeWithDefaultObject(xmlSource, "iconId", 0);
      this.craftingTaskId = extractFromAttributeWithDefaultObject(xmlSource, "craftingTaskId", 0);
      this.isHidden = extractFromAttributeWithDefaultObject(xmlSource, "isHidden", 0);
	  this.representsRecipeId = extractFromAttributeWithDefaultObject(xmlSource, "representsRecipeId", 0);
    
    
      this.soldInStores = extractListObject(xmlSource, "soldInStores");
      this.resourceOfRegions = extractListObject(xmlSource, "resourceOfRegions");
      this.skills = extractListObject(xmlSource, "skills");
      this.usedInRecipeIngredients = extractListObject(xmlSource, "usedInRecipeIngredients");
      this.usedInRecipes = extractListObject(xmlSource, "usedInRecipes");
    }
	else
	{
	  this.id = 0;
	  this.name = new LocalizedText(xmlSource, "name", "-");
	  
	  this.itemTypeId = 0;
	  this.iconId = 0;
	  this.craftingTaskId = 0;
	  this.isHidden = 0;
	  this.representsRecipeId = 0;
	  
      this.soldInStores = [];
      this.resourceOfRegions = [];
      this.skills = [];
      this.usedInRecipeIngredients = [];
      this.usedInRecipes = [];
	}
}

ItemBase.prototype.getId = function() {
  return this.id;
};

ItemBase.prototype.getName = function() {
  return this.name.getText();
};

ItemBase.prototype.getValue = function() {
  return "";
};

ItemBase.prototype.getIcon = function() {
  return getImageLink(this.iconId);
};
