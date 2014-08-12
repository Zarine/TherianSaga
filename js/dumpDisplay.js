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
  var result = '<table><tr><th>Item</th><th>Skill</th><th>Value</th><th>ID</th></tr>';
  for (var itemBaseSkillId in _ItemBaseSkillData) {
    var itemBaseSkill = _ItemBaseSkillData[itemBaseSkillId];
    result += '<tr><td>' + getItemBaseName(itemBaseSkill) + '</td><td>' + getSkillName(itemBaseSkill) + '</td><td>' + itemBaseSkill['value'] + '</td><td>' + itemBaseSkillId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpItemTypeData() {
  var result = '<table><tr><th>Icon</th><th>Item type</th><th>Parent type</th><th>ID</th></tr>';
  for (var itemTypeId in _ItemTypeData) {
    var ItemType = _ItemTypeData[itemTypeId];
    result += '<tr><td><img src="' + getImage(ItemType) + '" ></td><td>' + getLocalizedName(ItemType) + '</td><td>' + getParentItemTypeName(ItemType) + '</td><td>' + itemTypeId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpSkillData() {
  var result = '<table><tr><th>Icon</th><th>Skill</th><th>ID</th></tr>';
  for (var skillId in _SkillData) {
    var skill = _SkillData[skillId];
    result += '<tr><td><img src="' + getImage(skill) + '" ></td><td>' + getLocalizedName(skill) + '</td><td>' + skillId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpTaskGroupData() {
  var result = '<table><tr><th>Icon</th><th>Task group</th><th>ID</th></tr>';
  for (var taskGroupId in _TaskGroupData) {
    var taskGroup = _TaskGroupData[taskGroupId];
    result += '<tr><td><img src="' + getImage(taskGroup) + '" ></td><td>' + getLocalizedName(taskGroup) + '</td><td>' + taskGroupId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}