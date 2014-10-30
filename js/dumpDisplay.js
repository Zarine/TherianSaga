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
  var result = '<table class="dumpTable dumpTable-ItemBaseSkill"><tr><th class="dumpTableHeader dumpTableHeader-ItemBaseSkill">Item</th><th class="dumpTableHeader dumpTableHeader-ItemBaseSkill">Skill</th><th class="dumpTableHeader dumpTableHeader-ItemBaseSkill">Value</th><th class="dumpTableHeader dumpTableHeader-ItemBaseSkill">ID</th></tr>';
  for (var itemBaseSkillId in _ItemBaseSkillData) {
    var itemBaseSkill = _ItemBaseSkillData[itemBaseSkillId];
    result += '<tr class="dumpTableElement dumpTableElement-ItemBaseSkill">';
    result += '<td class="dumpTableText dumpTableText-ItemBaseSkill">' + getItemBaseName(itemBaseSkill) + '</td>'
    result += '<td class="dumpTableText dumpTableText-ItemBaseSkill">' + getSkillName(itemBaseSkill) + '</td>'
    result += '<td class="dumpTableText dumpTableText-ItemBaseSkill">' + itemBaseSkill['value'] + '</td>'
    result += '<td class="dumpTableText dumpTableText-ItemBaseSkill">' + itemBaseSkillId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpDungeonData() {
  var result = '<table class="dumpTable"><tr><th>Dungeon</th><th>ID</th></tr>';
  for (var dungeonId in _DungeonData) {
    var dungeon = _DungeonData[dungeonId];
    result += '<tr><td>' + dungeon.getName() + '</td><td>' + dungeonId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpItemTypeData() {
  var result = '<table class="dumpTable"><tr><th>Icon</th><th>Item type</th><th>Parent type</th><th>ID</th></tr>';
  for (var itemTypeId in _ItemTypeData) {
    var ItemType = _ItemTypeData[itemTypeId];
    result += '<tr><td><img src="' + ItemType.getIcon() + '" ></td><td>' + ItemType.getName() + '</td><td>' + ItemType.getParentItemTypeName() + '</td><td>' + itemTypeId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpItemBaseData() {
  var result = '<table class="dumpTable"><tr><th>Icon</th><th>Name</th><th>Item type</th><th>ID</th></tr>';
  for (var itemBaseId in _ItemBaseData) {
    var itemBase = _ItemBaseData[itemBaseId];
    result += '<tr><td><img src="' + getImage(itemBase) + '" ></td><td>' + getLocalizedName(itemBase) + '</td><td>' + getLocalizedName(_ItemTypeData[itemBase['itemTypeId']]) + '</td><td>' + itemBaseId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpSkillData() {
  var result = '<table class="dumpTable"><tr><th>Icon</th><th>Skill</th><th>ID</th></tr>';
  for (var skillId in _SkillData) {
    var skill = _SkillData[skillId];
    result += '<tr><td><img src="' + getImage(skill) + '" ></td><td>' + getLocalizedName(skill) + '</td><td>' + skillId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpTaskGroupData() {
  var result = '<table class="dumpTable"><tr><th>Icon</th><th>Task group</th><th>ID</th></tr>';
  for (var taskGroupId in _TaskGroupData) {
    var taskGroup = _TaskGroupData[taskGroupId];
    result += '<tr><td><img src="' + getImage(taskGroup) + '" ></td><td>' + getLocalizedName(taskGroup) + '</td><td>' + taskGroupId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpTaskData() {
  var result = '<table class="dumpTable"><tr><th>Name</th><th>Skill</th><th>Duration</th><th>Effort</th><th>Difficulty</th><th>ID</th></tr>';
  for (var taskId in _TaskData) {
    var task = _TaskData[taskId];
    result += '<tr><td>' + getLocalizedName(task) + '</td><td>' + getLocalizedName(_SkillData[task['skillId']]) + '</td><td>' + task['duration'] + '</td><td>' + task['effort'] + '</td><td>' + task['difficulty'] + '</td><td>' + taskId + '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}

function dumpRecipeData() {
  var result = '<table class="dumpTable"><tr><th>Recipe name</th><th>Produced item base</th><th>Represented by</th><th>Is discoverable</th><th>Tasks</th><th>Ingredients</th></tr>';
  for (var recipeId in _RecipeData) {
    var recipe = _RecipeData[recipeId];
    result += '<tr><td>' + getLocalizedName(recipe) + '</td><td>' + getLocalizedName(_ItemBaseData[recipe['producedItemBaseId']]) + '</td><td>' + getLocalizedName(_ItemBaseData[recipe['representedByItemBaseId']]) + '</td><td>' + recipe['isDiscoverable'] + '</td><td>';
    for (var i in recipe['useInTasks'])
    {
        result += getLocalizedName(_TaskData[recipe['useInTasks'][i]]) + '<br />';
    }
    result += '</td><td>';
    for (var i in recipe['ingredients'])
    {
        var recipeIngredient = _RecipeIngredientData[recipe['ingredients'][i]]
        result += recipeIngredient['quantity'] + ' ';
        if (recipeIngredient['itemTypeId'] == 0)
        {
            // Not a generic ingredient, use itemBaseId instead
            result += getLocalizedName(_ItemBaseData[recipeIngredient['itemBaseId']]) + '<br />';
        } else {
            result += getLocalizedName(_ItemTypeData[recipeIngredient['itemTypeId']]) + '<br />';
        }
    }
    result += '</td></tr>';
  }
  result += '</table>'
  document.getElementById('DumpOutputResult').innerHTML = result;
}
