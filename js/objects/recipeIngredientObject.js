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
