var ItemBase = function(xmlSource, fakeIdCreation) {
    this.constr = "ItemBase";
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

ItemBase.prototype.getItemTypeId = function() {
  return this.itemTypeId;
};

ItemBase.prototype.getItemTypeName = function() {
  return _ItemTypeData[this.itemTypeId].getName();
};

ItemBase.prototype.getItemTypeIcon = function() {
  return _ItemTypeData[this.itemTypeId].getIcon();
};

// Explore Specific
ItemBase.prototype.explore = function() {
  var result = [];

  // First set a Title
  result.push('<img src="' + this.getIcon() + '" ><h1 class="exploreTitle title" id="' + this.getId() + '">' + this.getName() + ' / <img src="' + this.getItemTypeIcon() + '" ><span class="exploreItem" onclick="exploreId(\'' + this.getItemTypeId() + '\')" >' + this.getItemTypeName() + '</span></h1>');

  result.push( exploreList(this.skills) );
  result.push( exploreList(this.resourceOfRegions, "isIn") );
  
  // all this specific item usedInRecipes and also the one of its group
  var groupedList = this.usedInRecipes.concat(_ItemTypeData[this.itemTypeId].usedInRecipes);
  result.push( exploreList(groupedList, "usedIn") );
  
  // Search for the recipe that produce this item
  var recipeList = [];
  for(var id in _RecipeData)
  {
    var recipe = _RecipeData[id];
    if(recipe.getProducedItemId() == this.getId() )
    {
      recipeList.push(id);
    }
  }
  result.push( exploreList(recipeList, "producedWith") );
  
  result.push(exploreList(this.soldInStores, "soldIn") );

  return result.join("");
}

ItemBase.prototype.exploreCategoryTitle = function(flavor) {
  if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Objets de cette catégorie:</h2>'; }
  return '<h2 class="subTitle exploreSubTitle">Objects of this category:</h2>';
}

ItemBase.prototype.exploreTableHeader = function() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemCraftTaskTitle">Craft Task Name</th><th class="exploreItemSkillNeededTitle">Skill Needed</th><th class="exploreItemSkillNeededIconTitle"></th></tr></thead>';
}

ItemBase.prototype.exploreInformation = function() {
  var result = [];
  result.push('<tr class="exploreItem" onclick="exploreId(\'' + this.getId() + '\')" ><td class="exploreItemIcon"><img src="' + this.getIcon() + '" ></td><td class="exploreItemName">' + this.getName() + '</td>');

  if(this.craftingTaskId != 0)
  {
    var task = _TaskData[this.craftingTaskId];
	  result.push('<td class="exploreItemCraftTask">' + task.getName() + '</td><td class="exploreItemName">' + task.getSkillName() + '</td><td class="exploreItemIcon"><img src="' + task.getSkillIcon() + '" ></td>');
  }
  
  result.push('</tr>');
  return result.join("");
}