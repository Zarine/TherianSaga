//////////////////
// Dump display //
//////////////////

function displayDump(selector) {
  var selectedValue = selector.options[selector.selectedIndex].value
  if (selectedValue != "") {
    eval(selectedValue)();
  }
}

function dumpItemBaseSkillData() {
  var result = "";
  for (var itemBaseSkillId in _ItemBaseSkillData) {
    var itemBaseSkill = _ItemBaseSkillData[itemBaseSkillId];
    result += '<ul>' + "id of element: &lt;" + itemBaseSkillId + "&gt; with value of: &lt;" + itemBaseSkill['value'] + "&gt; for skill: &lt;" + getSkillName(itemBaseSkill) + "&gt; on item: &lt;" + getItemBaseName(itemBaseSkill) + "&gt;" + '</ul>';
  }
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpItemTypeData() {
  var result = "";
  for (var itemTypeId in _ItemTypeData) {
    var ItemType = _ItemTypeData[itemTypeId];
    result += '<ul><img src="' + getImage(ItemType) + '" >' + "Item type: &lt;" + getLocalizedName(ItemType) + "&gt; which is child of: &lt;" + getParentItemTypeName(ItemType) + "&gt; " + '</ul>';
  }
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpSkillData() {
  var result = "";
  for (var skillId in _SkillData) {
    var skill = _SkillData[skillId];
    result += '<ul><img src="' + getImage(skill) + '" >' + "Skill: &lt;" + getLocalizedName(skill) + "&gt;" + '</ul>';
  }
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpTaskGroupData() {
  var result = "";
  for (var taskGroupId in _TaskGroupData) {
    var taskGroup = _TaskGroupData[taskGroupId];
    result += '<ul><img src="' + getImage(taskGroup) + '" >' + "Task group: &lt;" + getLocalizedName(taskGroup) + "&gt; " + '</ul>';
  }
  document.getElementById('DumpOutputResult').innerHTML = result;
}