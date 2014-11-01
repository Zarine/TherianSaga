/////////////////////
// Explore display //
/////////////////////
function exploreId(id) {
  $('#ExploreOutputResult').html() = _AllData[id].explore();
}


function exploreSkill(element) {
  var skillId = element.getAttribute("objectId");
  var skill = _SkillData[skillId];

  var result = '';

  // First set a Title
  result += '<img src="' + getImage(skill) + '" ><h1 class="exploreTitle title" id="Skill_' + skillId + '">' + getLocalizedName(skill) + '</h1>';

  result += exploreDisplayList(skill, 'usedByItemTypes');
  result += exploreDisplayList(skill, 'usedByUnitBaseSkills');
  result += exploreDisplayList(skill, 'usedByItemBaseSkills');
  result += exploreDisplayList(skill, 'subSkills');
  result += exploreDisplayList(skill, 'taskGroups');

  document.getElementById('ExploreOutputResult').innerHTML = result;
  sorttable.init();
}

function exploreItemType(element) {
  var itemTypeId = element.getAttribute("objectId");
  var itemType = _ItemTypeData[itemTypeId];

  var result = '';

  // First set a Title
  result += '<img src="' + getImage(itemType) + '" ><h1 class="exploreTitle title" id="ItemType_' + itemTypeId + '">' + getLocalizedName(itemType) + '</h1>';

  result += exploreDisplayList(itemType, 'skills');
  result += exploreDisplayList(itemType, 'itemBases');
  result += exploreDisplayList(itemType, 'usedInRecipes');
  result += exploreDisplayList(itemType, 'subItemTypes');

  document.getElementById('ExploreOutputResult').innerHTML = result;
  sorttable.init();
}

function exploreItemBase(element) {
  var itemBaseId = element.getAttribute("objectId");
  var itemBase = _ItemBaseData[itemBaseId];

  var result = '';
  
  var itemType = _ItemTypeData[itemBase.itemTypeId];

  // First set a Title
  result += '<img src="' + getImage(itemBase) + '" ><h1 class="exploreTitle title" id="ItemBase_' + itemBaseId + '">' + getLocalizedName(itemBase) + ' / <img src="' + getImage(itemType) + '" ><span class="exploreItem" onclick="exploreItemType(this)" objectId="' + itemBase.itemTypeId + '">' + getLocalizedName(itemType) + '</span></h1>';

  result += exploreDisplaySpecificList(itemBase, 'skills', 'itemBaseSkill');
  //result += exploreDisplayList(itemBase, 'resourceOfRegions');
  result += exploreDisplayListWithParent(itemBase, 'usedInRecipes', 'usedInRecipes', itemType, 'usedInRecipes');
  //result += exploreDisplayList(itemBase, 'soldInStores');

  document.getElementById('ExploreOutputResult').innerHTML = result;
  sorttable.init();
}

function exploreDisplayList(elementSource, listType) {
  return exploreDisplaySpecificList(elementSource, listType, listType);
}
function exploreDisplaySpecificList(elementSource, listType, targetTable) {
  var result = "";
  var listToDisplay = elementSource[listType];
  if (listToDisplay.length != 0) {
    result += titleForCategoryExplore(targetTable);
	result += '<table class="exploreTable sortable">';
	result += eval(targetTable + "DisplayTitleRow")();
	result += makeTR(listToDisplay, targetTable)
    result += '</table></div>';
  }
  return result;
}

function exploreDisplayListWithParent(elementSource, listType, targetTable, elementParent, parentTable)
{
  var result = "";
  var listToDisplay = elementSource[listType];
  var parentListToDisplay = elementParent[parentTable];
  if (listToDisplay.length != 0 || parentListToDisplay != 0) {
    result += titleForCategoryExplore(targetTable);
	result += '<table class="exploreTable sortable">';
	result += eval(targetTable + "DisplayTitleRow")();
	result += makeTR(listToDisplay, targetTable);
	result += makeTR(parentListToDisplay, parentTable);
    result += '</table></div>';
  }
  return result;
}

function makeTR(listToDisplay, targetTable) {
  var result = '';
  for (var i = 0; i < listToDisplay.length; i++) {
    result += eval(targetTable + "DisplayInformation")(listToDisplay[i]);
  }
  return result;
}

function titleForCategoryExplore(type) {
  var result = '<div>';
  result += '<h2 class="subTitle exploreSubTitle">' + translateIdentifierToText(type) + '</h2>';
  return result;
}

function itemTypesDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th></tr></thead>';
}
function subItemTypesDisplayTitleRow() {
  return itemTypesDisplayTitleRow();
}
function usedByItemTypesDisplayTitleRow() {
  return itemTypesDisplayTitleRow();
}

function itemTypesDisplayInformation(id) {
  var result = "";

  var itemTypes = _ItemTypeData[id];
  result += '<tr class="exploreItem" onclick="exploreItemType(this)" objectId="' + id + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(itemTypes) + '" ></td><td class="exploreItemName">' + getLocalizedName(itemTypes) + '</td>';

  result += '</tr>';
  return result;
}
function subItemTypesDisplayInformation(id) {
  return itemTypesDisplayInformation(id);
}
function usedByItemTypesDisplayInformation(id) {
  return itemTypesDisplayInformation(id);
}

function usedByUnitBaseSkillsDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemValueTitle">Skill Value</th></tr></thead>';
}

function usedByUnitBaseSkillsDisplayInformation(id) {
  var result = "";

  var unitBaseSkill = _UnitBaseSkillData[id];
  var unitBase = _UnitBaseData[unitBaseSkill.unitBaseId];
  result += '<tr class="exploreItem" onclick="exploreUnitBase(this)" objectId="' + unitBaseSkill.unitBaseId + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(unitBase) + '" ></td><td class="exploreItemName">' + getLocalizedName(unitBase) + '</td><td class="exploreItemValue">' + unitBaseSkill.value + '</td>';

  result += '</tr>';
  return result;
}

function itemBaseSkillDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemValueTitle">Skill Value</th></tr></thead>';
}
function itemBaseSkillDisplayInformation(id){
  var result = "";

  var itemBaseSkill = _ItemBaseSkillData[id];
  var skill = _SkillData[itemBaseSkill.skillId];
  result += '<tr class="exploreItem" onclick="exploreSkill(this)" objectId="' + itemBaseSkill.skillId + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(skill) + '" ></td><td class="exploreItemName">' + getLocalizedName(skill) + '</td><td class="exploreItemValue">' + itemBaseSkill.value + '</td>';

  result += '</tr>';
  return result;
}

function usedByItemBaseSkillsDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemValueTitle">Skill Value</th></tr></thead>';
}

function usedByItemBaseSkillsDisplayInformation(id){
  var result = "";

  var itemBaseSkill = _ItemBaseSkillData[id];
  var itemBase = _ItemBaseData[itemBaseSkill.itemBaseId];
  result += '<tr class="exploreItem" onclick="exploreItemBase(this)" objectId="' + itemBaseSkill.itemBaseId + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(itemBase) + '" ></td><td class="exploreItemName">' + getLocalizedName(itemBase) + '</td><td class="exploreItemValue">' + itemBaseSkill.value + '</td>';

  result += '</tr>';
  return result;
}

function skillsDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th></tr></thead>';
}
function subSkillsDisplayTitleRow() {
  return skillsDisplayTitleRow();
}

function skillsDisplayInformation(id) {
  var result = "";

  var skill = _SkillData[id];
  result += '<tr class="exploreItem" onclick="exploreSkill(this)" objectId="' + id + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(skill) + '" ></td><td class="exploreItemName">' + getLocalizedName(skill) + '</td>';

  result += '</tr>';
  return result;
}
function subSkillsDisplayInformation(id) {
  return skillsDisplayInformation(id);
}

function taskGroupsDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th></tr></thead>';
}

function taskGroupsDisplayInformation(id) {
  var result = "";

  var taskGroup = _TaskGroupData[id];
  result += '<tr class="exploreItem" onclick="exploreTaskGroup(this)" objectId="' + id + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(taskGroup) + '" ></td><td class="exploreItemName">' + getLocalizedName(taskGroup) + '</td>';

  result += '</tr>';
  return result;
}

function itemBasesDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemCraftTaskTitle">Craft Task Name</th><th class="exploreItemSkillNeededTitle">Skill Needed</th><th class="exploreItemSkillNeededIconTitle"></th></tr></thead>';
}

function itemBasesDisplayInformation(id) {
  var result = "";

  var itemBase = _ItemBaseData[id];
  
  result += '<tr class="exploreItem" onclick="exploreItemBase(this)" objectId="' + id + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(itemBase) + '" ></td><td class="exploreItemName">' + getLocalizedName(itemBase) + '</td>';

  if(itemBase.craftingTaskId != 0)
  {
    var task = _TaskData[itemBase.craftingTaskId];
	result += '<td class="exploreItemCraftTask">' + getLocalizedName(task) + '</td>';
	
	var skill = _SkillData[task.skillId];
	result += '<td class="exploreItemName">' + getLocalizedName(skill) + '</td><td class="exploreItemIcon"><img src="' + getImage(skill) + '" ></td>';
  }
  
  result += '</tr>';
  return result;
}

function usedInRecipesDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemProducedItemTitle">Produced item Name</th><th class="exploreItemProducedItemIconTitle"></th></tr></thead>';
}

function usedInRecipesDisplayInformation(id) {
  var result = "";

  var recipe = _RecipeData[id];
  var representingItem = _ItemBaseData[recipe.representedByItemBaseId];
  var producedItem = _ItemBaseData[recipe.producedItemBaseId];
  
  result += '<tr class="exploreItem" onclick="exploreRecipe(this)" objectId="' + id + '">'
  if(recipe.representedByItemBaseId != 0)
  { result += '<td class="exploreItemIcon"><img src="' + getImage(representingItem) + '" ></td><td class="exploreItemName">' + getLocalizedName(recipe) + '</td>'; }
  else { result += '<td></td><td></td>'; }
	
  result += '<td class="exploreItemProducedItem">' + getLocalizedName(producedItem) + '</td><td class="exploreItemProducedItemIconTitle"><img src="' + getImage(producedItem) + '" ></td>';
  
  result += '</tr>';
  return result;
}