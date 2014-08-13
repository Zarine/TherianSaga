/////////////////////
// Explore display //
/////////////////////

function exploreSkill(element) {
  var skillId = element.getAttribute("objectId");
  var skill = _SkillData[skillId];

  var result = '';

  // First set a Title
  result += '<img src="' + getImage(skill) + '" ><h1 class="exploreTitle title" id="Skill_' + skillId + '">' + getLocalizedName(skill) + '</h1>';

  result += exploreDisplayList(skill, 'usedByItemTypes');
  result += exploreDisplayList(skill, 'usedByUnitBaseSkills');
  result += exploreDisplayList(skill, 'usedByItemBaseSkills');
  //exploreDisplayList(skill, 'subSkills');
  //exploreDisplayList(skill, 'taskGroups');

  document.getElementById('ExploreOutputResult').innerHTML = result;
  sorttable.init();
}

function exploreDisplayList(elementSource, listType) {
  var result = "";
  var listToDisplay = elementSource[listType];
  if (listToDisplay.length != 0) {
    result += titleForCategoryExplore(listType);
	result += '<table class="exploreTable sortable">';
	result += eval(listType + "DisplayTitleRow")();
    for (var i = 0; i < listToDisplay.length; i++) {
      result += eval(listType + "DisplayInformation")(listToDisplay[i]);
    }
    result += '</table></div>';
  }
  return result;
}

function titleForCategoryExplore(type) {
  var result = '<div>';
  result += '<h2 class="subTitle exploreSubTitle">' + translateIdentifierToText(type) + '</h2>';
  return result;
}

function usedByItemTypesDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th></tr></thead>';
}

function usedByItemTypesDisplayInformation(id) {
  var result = "";

  var usedByItemTypes = _ItemTypeData[id];
  result += '<tr class="exploreItem" onclick="exploreDisplayItemType(this)" objectId="' + id + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(usedByItemTypes) + '" ></td><td class="exploreItemName">' + getLocalizedName(usedByItemTypes) + '</td>';

  result += '</tr>';
  return result;
}

function usedByUnitBaseSkillsDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemValueTitle">Skill Value</th></tr></thead>';
}

function usedByUnitBaseSkillsDisplayInformation(id) {
  var result = "";

  var unitBaseSkill = _UnitBaseSkillData[id];
  var unitBase = _UnitBaseData[unitBaseSkill.unitBaseId];
  result += '<tr class="exploreItem" onclick="exploreUnitBaseSkill(this)" objectId="' + id + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(unitBase) + '" ></td><td class="exploreItemName">' + getLocalizedName(unitBase) + '</td><td class="exploreItemValue">' + unitBaseSkill.value + '</td>';

  result += '</tr>';
  return result;
}

function usedByItemBaseSkillsDisplayTitleRow() {
  return '<thead><tr><th class="exploreItemIconTitle"></th><th class="exploreItemNameTitle">Name</th><th class="exploreItemValueTitle">Skill Value</th></tr></thead>';
}

function usedByItemBaseSkillsDisplayInformation(id) {
  var result = "";

  var itemBaseSkill = _ItemBaseSkillData[id];
  var itemBase = _ItemBaseData[itemBaseSkill.itemBaseId];
  result += '<tr class="exploreItem" onclick="exploreItemBase(this)" objectId="' + id + '">'
  result += '<td class="exploreItemIcon"><img src="' + getImage(itemBase) + '" ></td><td class="exploreItemName">' + getLocalizedName(itemBase) + '</td><td class="exploreItemValue">' + itemBaseSkill.value + '</td>';

  result += '</tr>';
  return result;
}