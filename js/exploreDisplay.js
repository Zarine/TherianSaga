/////////////////////
// Explore display //
/////////////////////

function exploreDisplaySkill(element) {
  var skillId = element.getAttribute("objectId");
  var skill = _SkillData[skillId];

  var result = '';

  // First set a Title
  result += '<img src="' + getImage(skill) + '" ><h1 class="exploreTitle title" id="Skill_' + skillId + '">' + getLocalizedName(skill) + '</h1>';

  result += exploreDisplayList(skill, 'usedByItemTypes');
  //exploreDisplayList(skill, 'usedByUnitBaseSkills');
  //exploreDisplayList(skill, 'usedByItemBaseSkills');
  //exploreDisplayList(skill, 'subSkills');
  //exploreDisplayList(skill, 'taskGroups');

  document.getElementById('ExploreOutputResult').innerHTML = result;
}

function exploreDisplayList(elementSource, listType) {
  var result = "";
  var listToDisplay = elementSource[listType];
  if (listToDisplay.length != 0) {
    result += titleForCategoryExplore(listType);
    for (var i = 0; i < listToDisplay.length; i++) {
      result += eval(listType + "DisplayInformation")(listToDisplay[i]);
    }
    result += '</div>';
  }
  return result;
}

function titleForCategoryExplore(type) {
  var result = '<div>';
  result += '<h2 class="subTitle exploreSubTitle">' + type + '</h2>';
  return result;
}

function usedByItemTypesDisplayInformation(id) {
  var result = "";

  var usedByItemTypes = _ItemTypeData[id];
  result += '<div class="exploreItem" onclick="exploreDisplayItemType(this)" objectId="' + id + '">'
  result += '<img src="' + getImage(usedByItemTypes) + '" >Item type: &lt;' + getLocalizedName(usedByItemTypes) + '&gt; which is child of: &lt;' + getParentItemTypeName(usedByItemTypes) + '&gt;';

  result += '</div>';
  return result;
}