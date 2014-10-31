//////////////////
// File reading //
//////////////////

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  var output = [];

  var file = files[0];
  var reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      ParseFile(e.target.result)
    };
  })(file);

  reader.readAsText(file);
}

////////////////
// Extracting //
////////////////

function ParseFile(file) {
  resetData();

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(file, "text/xml");

  var context = xmlDoc.getElementsByTagName("context")[0];

  extractItemBaseSkillSet(context);
  extractDungeonSet(context);
  extractItemBaseSet(context);
  extractItemTypeSet(context);
  extractSiteSet(context);
  extractSkillSet(context);
  extractTaskGroupSet(context);
  taskSet(context);
  recipeSet(context);
  recipeIngredientSet(context);
  unitTypeSet(context);
  unitBaseSet(context);
  extractImageSet(context);
  territorySet(context);
  regionSet(context);
  areaWildlifeSet(context);
  areaResourceSet(context);
  landformSet(context);
  unitBaseSkillSet(context);
  extractStoreSet(context);
  extractResidentSet(context);
  extractZoneSet(context);

  removeOperationSelection();
  hideAllOutput();
  
  if(typeof localStorage !== "undefined") { removeClass("hidden", document.getElementById('SaveToLocalStorage')); }
}

function extractItemBaseSkillSet(context) {
  var itemBaseSkillSet = context.getElementsByTagName("itemBaseSkillSet")[0];
  var numberOfItem = itemBaseSkillSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var itemBaseSkillElement = itemBaseSkillSet.getElementsByTagName("itemBaseSkill")[i];

    var object = new ItemBaseSkill(itemBaseSkillElement);
    _ItemBaseSkillData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractDungeonSet(context) {
  var dungeonSet = context.getElementsByTagName("dungeonSet")[0];
  var numberOfItem = dungeonSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var dungeonElement = dungeonSet.getElementsByTagName("dungeon")[i]

    var object = new Dungeon(dungeonElement);
    _DungeonData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractItemTypeSet(context) {
  var itemTypeSet = context.getElementsByTagName("itemTypeSet")[0];
  var numberOfItem = itemTypeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var itemTypeElement = itemTypeSet.getElementsByTagName("itemType")[i];

    var object = new ItemType(itemTypeElement);
    _ItemTypeData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
  
  // Add a default itemType so that it is defined whenever we try to get it
  var object = new ItemType("", 0);
  _ItemTypeData[object.getId()] = object;
  _AllData[object.getId()] = object;
}

function extractSiteSet(context) {
  var siteSet = context.getElementsByTagName("siteSet")[0]
  var numberOfItem = siteSet.getAttribute("count")
  for (var i = 0; i < numberOfItem; i++) {
    var siteElement = siteSet.getElementsByTagName("site")[i]

    var object = new Site(siteElement);
    _SiteData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractItemBaseSet(context) {
  var itemBaseSet = context.getElementsByTagName("itemBaseSet")[0];
  var numberOfItem = itemBaseSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var itemBaseElement = itemBaseSet.getElementsByTagName("itemBase")[i];

    var object = new ItemBase(itemBaseElement);
    _ItemBaseData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
  
  // Add a default itemBase so that it is defined whenever we try to get it
  var object = new ItemBase("", 0);
  _ItemBaseData[object.getId()] = object;
  _AllData[object.getId()] = object;
}

function extractSkillSet(context) {
  var skillSet = context.getElementsByTagName("skillSet")[0];
  var numberOfItem = skillSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var skillElement = skillSet.getElementsByTagName("skill")[i];

	var object = new Skill(skillElement);
    _SkillData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractTaskGroupSet(context) {
  var taskGroupSet = context.getElementsByTagName("taskGroupSet")[0]
  var numberOfItem = taskGroupSet.getAttribute("count")
  for (var i = 0; i < numberOfItem; i++) {
    var taskGroupElement = taskGroupSet.getElementsByTagName("taskGroup")[i]

	var object = new TaskGroup(taskGroupElement);
    _TaskGroupData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function taskSet(context) {
  var taskSet = context.getElementsByTagName("taskSet")[0];
  var numberOfItem = taskSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var taskElement = taskSet.getElementsByTagName("task")[i];

	var object = new Task(taskElement);
    _TaskData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function recipeSet(context) {
  var recipeSet = context.getElementsByTagName("recipeSet")[0];
  var numberOfItem = recipeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var recipeElement = recipeSet.getElementsByTagName("recipe")[i];

	var object = new Recipe(recipeElement);
    _RecipeData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function recipeIngredientSet(context) {
  var recipeIngredientSet = context.getElementsByTagName("recipeIngredientSet")[0];
  var numberOfItem = recipeIngredientSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var recipeIngredientElement = recipeIngredientSet.getElementsByTagName("recipeIngredient")[i];

    var recipeIngredient = {};
    extractFromAttributeWithDefault(recipeIngredientElement, recipeIngredient, "quantity", 0);
    extractFromAttributeWithDefault(recipeIngredientElement, recipeIngredient, "itemTypeId", 0);
    extractFromAttributeWithDefault(recipeIngredientElement, recipeIngredient, "itemBaseId", 0);
    extractFromAttributeWithDefault(recipeIngredientElement, recipeIngredient, "recipeId", 0);
    extractFromAttributeWithDefault(recipeIngredientElement, recipeIngredient, "IsConsumable", 0);

    _RecipeIngredientData[recipeIngredientElement.getAttribute("id")] = recipeIngredient;
  }
}

function unitTypeSet(context) {
  var unitTypeSet = context.getElementsByTagName("unitTypeSet")[0];
  var numberOfItem = unitTypeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var unitTypeElement = unitTypeSet.getElementsByTagName("unitType")[i];

    var unitType = {};
    extractFromAttributeWithDefault(unitTypeElement, unitType, "parentUnitTypeId", 0);

    extractName(unitTypeElement, unitType);

    _UnitTypeData[unitTypeElement.getAttribute("id")] = unitType;
  }
}

function unitBaseSet(context) {
  var unitBaseSet = context.getElementsByTagName("unitBaseSet")[0];
  var numberOfItem = unitBaseSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var unitBaseElement = unitBaseSet.getElementsByTagName("unitBase")[i];

    var unitBase = {};
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "unitType", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "largeImageId", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "portraitId", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "smallImageId", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "iconId", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "interestSkillId", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "interestSkillValue", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "aggressiveness", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "tamingTaskId", 0);
    extractFromAttributeWithDefault(unitBaseElement, unitBase, "huntingTaskId", 0);

    extractList(unitBaseElement, unitBase, "regions");
    extractList(unitBaseElement, unitBase, "skills");

    extractName(unitBaseElement, unitBase);

    _UnitBaseData[unitBaseElement.getAttribute("id")] = unitBase;
  }
}

function extractImageSet(context) {
  var imageSet = context.getElementsByTagName("imageSet")[0];
  var numberOfItem = imageSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var imageElement = imageSet.getElementsByTagName("image")[i];

    var image = {};
    image['path'] = imageElement.getAttribute("path");

    _ImageData[imageElement.getAttribute("id")] = image;
  }
}

function territorySet(context) {
  var territorySet = context.getElementsByTagName("territorySet")[0];
  var numberOfItem = territorySet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var territoryElement = territorySet.getElementsByTagName("territory")[i];

    var territory = {};
    extractFromAttributeWithDefault(territoryElement, territory, "isProxy", 0);

    extractList(territoryElement, territory, "regions");

    extractName(territoryElement, territory);

    _TerritoryData[territoryElement.getAttribute("id")] = territory;
  }
}

function regionSet(context) {
  var regionSet = context.getElementsByTagName("regionSet")[0];
  var numberOfItem = regionSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var regionElement = regionSet.getElementsByTagName("region")[i];

    var region = {};
    extractFromAttributeWithDefault(regionElement, region, "territoryId", 0);
    extractFromAttributeWithDefault(regionElement, region, "landformId", 0);
    extractFromAttributeWithDefault(regionElement, region, "difficulty", 0);

    extractList(regionElement, region, "wildlifes");
    extractList(regionElement, region, "resources");

    extractName(regionElement, region);

    _RegionData[regionElement.getAttribute("id")] = region;
  }
}

function areaWildlifeSet(context) {
  var areaWildlifeSet = context.getElementsByTagName("areaWildlifeSet")[0];
  var numberOfItem = areaWildlifeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var areaWildlifeElement = areaWildlifeSet.getElementsByTagName("areaWildlife")[i];

    var areaWildlife = {};
    extractFromAttributeWithDefault(areaWildlifeElement, areaWildlife, "unitBaseId", 0);
    extractFromAttributeWithDefault(areaWildlifeElement, areaWildlife, "regionId", 0);
    extractFromAttributeWithDefault(areaWildlifeElement, areaWildlife, "ratio", 0);

    _AreaWildlifeData[areaWildlifeElement.getAttribute("id")] = areaWildlife;
  }
}

function areaResourceSet(context) {
  var areaResourceSet = context.getElementsByTagName("areaResourceSet")[0];
  var numberOfItem = areaResourceSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var areaResourceElement = areaResourceSet.getElementsByTagName("areaResource")[i];

    var areaResource = {};
    extractFromAttributeWithDefault(areaResourceElement, areaResource, "itemBaseId", 0);
    extractFromAttributeWithDefault(areaResourceElement, areaResource, "regionId", 0);
    extractFromAttributeWithDefault(areaResourceElement, areaResource, "minimumQuantity", 0);
    extractFromAttributeWithDefault(areaResourceElement, areaResource, "maximumQuantity", 0);
    extractFromAttributeWithDefault(areaResourceElement, areaResource, "ratio", 0);

    _AreaResourceData[areaResourceElement.getAttribute("id")] = areaResource;
  }
}

function landformSet(context) {
  var landformSet = context.getElementsByTagName("landformSet")[0];
  var numberOfItem = landformSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var landformElement = landformSet.getElementsByTagName("landform")[i];

    var landform = {};
    extractFromAttributeWithDefault(landformElement, landform, "skillId", 0);

    extractList(landformElement, landform, "regions");

    extractName(landformElement, landform);

    _LandformData[landformElement.getAttribute("id")] = landform;
  }
}

function unitBaseSkillSet(context) {
  var unitBaseSkillSet = context.getElementsByTagName("unitBaseSkillSet")[0];
  var numberOfItem = unitBaseSkillSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var unitBaseSkillElement = unitBaseSkillSet.getElementsByTagName("unitBaseSkill")[i];

    var unitBaseSkill = {};
    extractFromAttributeWithDefault(unitBaseSkillElement, unitBaseSkill, "value", 0);
    extractFromAttributeWithDefault(unitBaseSkillElement, unitBaseSkill, "skillId", 0);
    extractFromAttributeWithDefault(unitBaseSkillElement, unitBaseSkill, "unitBaseId", 0);
    extractFromAttributeWithDefault(unitBaseSkillElement, unitBaseSkill, "isProxy", 0);

    _UnitBaseSkillData[unitBaseSkillElement.getAttribute("id")] = unitBaseSkill;
  }
}

function extractStoreSet(context) {
  var storeSet = context.getElementsByTagName("storeSet")[0];
  var numberOfItem = storeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var storeElement = storeSet.getElementsByTagName("store")[i];

    var store = {};
    extractFromAttributeWithDefault(storeElement, store, "siteId", 0);
    extractFromAttributeWithDefault(storeElement, store, "residentId", 0);

    extractList(storeElement, store, "sellItemBases");

    extractName(storeElement, store);

    _StoreData[storeElement.getAttribute("id")] = store;
  }
}

function extractResidentSet(context) {
  var residentSet = context.getElementsByTagName("residentSet")[0];
  var numberOfItem = residentSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var residentElement = residentSet.getElementsByTagName("resident")[i];

    var resident = {};
    extractFromAttributeWithDefault(residentElement, resident, "siteId", 0);
    extractFromAttributeWithDefault(residentElement, resident, "iconId", 0);
    extractFromAttributeWithDefault(residentElement, resident, "imageId", 0);

    extractList(residentElement, resident, "stores");

    extractName(residentElement, resident);

    _ResidentData[residentElement.getAttribute("id")] = resident;
  }
}

function extractZoneSet(context) {
  var zoneSet = context.getElementsByTagName("zoneSet")[0];
  var numberOfItem = zoneSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var zoneElement = zoneSet.getElementsByTagName("zone")[i];

    var zone = {};
    extractFromAttributeWithDefault(zoneElement, zone, "siteId", 0);
    extractFromAttributeWithDefault(zoneElement, zone, "parentZoneId", 0);

    extractList(zoneElement, zone, "zones");
    extractList(zoneElement, zone, "residents");

    extractName(zoneElement, zone)

    _ZoneData[zoneElement.getAttribute("id")] = zone;
  }
}