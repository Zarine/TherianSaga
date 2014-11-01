var RecipeIngredient = function(xmlSource) {
  this.constr = "RecipeIngredient";
  this.id = xmlSource.getAttribute("id");
	
  this.quantity = extractFromAttributeWithDefaultObject(xmlSource, "quantity", 0);
  this.itemTypeId = extractFromAttributeWithDefaultObject(xmlSource, "itemTypeId", 0);
  this.itemBaseId = extractFromAttributeWithDefaultObject(xmlSource, "itemBaseId", 0);
  this.recipeId = extractFromAttributeWithDefaultObject(xmlSource, "recipeId", 0);
  this.IsConsumable = extractFromAttributeWithDefaultObject(xmlSource, "IsConsumable", 0);
}

RecipeIngredient.prototype.getId = function() {
  return this.id;
};

RecipeIngredient.prototype.getName = function() {
  return "";
};

RecipeIngredient.prototype.getValue = function() {
  return "";
};

RecipeIngredient.prototype.getQuantity = function() {
  return this.quantity;
};

RecipeIngredient.prototype.getIsConsumable = function() {
  if(this.IsConsumable == 1) { return "Yes"; }
  return "No";
};

RecipeIngredient.prototype.getItemTypeId = function() {
  return this.itemTypeId;
};

RecipeIngredient.prototype.getItemTypeName = function() {
  return _ItemTypeData[this.itemTypeId].getName();
};

RecipeIngredient.prototype.getItemTypeIcon = function() {
  return _ItemTypeData[this.itemTypeId].getIcon();
};

RecipeIngredient.prototype.getItemBaseId = function() {
  return this.itemBaseId;
};

RecipeIngredient.prototype.getItemBaseName = function() {
  return _ItemBaseData[this.itemBaseId].getName();
};

RecipeIngredient.prototype.getItemBaseIcon = function() {
  return _ItemBaseData[this.itemBaseId].getIcon();
};

// Explore Specific
RecipeIngredient.prototype.explore = function() {
  var result = [];
  return result.join("");
}

RecipeIngredient.prototype.exploreCategoryTitle = function(flavor) {
  if(_Language == 'FR') { return '<h2 class="subTitle exploreSubTitle">Ingrédients:</h2>'; }
  return '<h2 class="subTitle exploreSubTitle">Ingredients:</h2>';
}

RecipeIngredient.prototype.exploreTableHeader = function() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th>Name</th><th>Quantity required</th><th>Consumables</th></tr></thead>';
}

RecipeIngredient.prototype.exploreInformation = function() {
  var result = [];
  
  if(this.getItemTypeId() != 0)
  {
    result.push('<tr class="exploreItem" onclick="exploreId(\'' + this.getItemTypeId() + '\')" ><td><img src="' + this.getItemTypeIcon() + '" ></td><td>' + this.getItemTypeName() + '</td>');
  }
  else if(this.getItemBaseId() != 0)
  {
    result.push('<tr class="exploreItem" onclick="exploreId(\'' + this.getItemBaseId() + '\')" ><td><img src="' + this.getItemBaseIcon() + '" ></td><td>' + this.getItemBaseName() + '</td>');
  }
  else
  {
    result.push('<tr><td></td><td></td>');
  }

  result.push('<td>' + this.getQuantity() + '</td><td>' + this.getIsConsumable() + '</td>');
  
  return result.join("");
}