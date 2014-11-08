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
  extractTaskSet(context);
  extractRecipeSet(context);
  extractRecipeIngredientSet(context);
  extractUnitTypeSet(context);
  extractUnitBaseSet(context);
  extractImageSet(context);
  extractTerritorySet(context);
  extractRegionSet(context);
  extractAreaWildlifeSet(context);
  extractAreaResourceSet(context);
  extractLandformSet(context);
  extractUnitBaseSkillSet(context);
  extractStoreSet(context);
  extractResidentSet(context);
  extractZoneSet(context);

  removeOperationSelection();
  hideAllOutput();
  prepareAutoCompletion();
  
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
  
  // Add a default site so that it is defined whenever we try to get it
  var object = new Site("", 0);
  _SiteData[object.getId()] = object;
  _AllData[object.getId()] = object;
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
  
  // Add a default skill so that it is defined whenever we try to get it
  var object = new Skill("", 0);
  _SkillData[object.getId()] = object;
  _AllData[object.getId()] = object;
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

function extractTaskSet(context) {
  var taskSet = context.getElementsByTagName("taskSet")[0];
  var numberOfItem = taskSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var taskElement = taskSet.getElementsByTagName("task")[i];

	var object = new Task(taskElement);
    _TaskData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractRecipeSet(context) {
  var recipeSet = context.getElementsByTagName("recipeSet")[0];
  var numberOfItem = recipeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var recipeElement = recipeSet.getElementsByTagName("recipe")[i];

	var object = new Recipe(recipeElement);
    _RecipeData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractRecipeIngredientSet(context) {
  var recipeIngredientSet = context.getElementsByTagName("recipeIngredientSet")[0];
  var numberOfItem = recipeIngredientSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var recipeIngredientElement = recipeIngredientSet.getElementsByTagName("recipeIngredient")[i];

	  var object = new RecipeIngredient(recipeIngredientElement);
    _RecipeIngredientData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractUnitTypeSet(context) {
  var unitTypeSet = context.getElementsByTagName("unitTypeSet")[0];
  var numberOfItem = unitTypeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var unitTypeElement = unitTypeSet.getElementsByTagName("unitType")[i];

	  var object = new UnitType(unitTypeElement);
    _UnitTypeData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
  // Add a default unitType so that it is defined whenever we try to get it
  var object = new UnitType("", 0);
  _UnitTypeData[object.getId()] = object;
  _AllData[object.getId()] = object;
}

function extractUnitBaseSet(context) {
  var unitBaseSet = context.getElementsByTagName("unitBaseSet")[0];
  var numberOfItem = unitBaseSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var unitBaseElement = unitBaseSet.getElementsByTagName("unitBase")[i];

	  var object = new UnitBase(unitBaseElement);
    _UnitBaseData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractImageSet(context) {
  var imageSet = context.getElementsByTagName("imageSet")[0];
  var numberOfItem = imageSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var imageElement = imageSet.getElementsByTagName("image")[i];

    var object = new Image(imageElement);
    _ImageData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractTerritorySet(context) {
  var territorySet = context.getElementsByTagName("territorySet")[0];
  var numberOfItem = territorySet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var territoryElement = territorySet.getElementsByTagName("territory")[i];

    var object = new Territory(territoryElement);
    _TerritoryData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractRegionSet(context) {
  var regionSet = context.getElementsByTagName("regionSet")[0];
  var numberOfItem = regionSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var regionElement = regionSet.getElementsByTagName("region")[i];

    var object = new Region(regionElement);
    _RegionData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractAreaWildlifeSet(context) {
  var areaWildlifeSet = context.getElementsByTagName("areaWildlifeSet")[0];
  var numberOfItem = areaWildlifeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var areaWildlifeElement = areaWildlifeSet.getElementsByTagName("areaWildlife")[i];

    var object = new AreaWildLife(areaWildlifeElement);
    _AreaWildlifeData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractAreaResourceSet(context) {
  var areaResourceSet = context.getElementsByTagName("areaResourceSet")[0];
  var numberOfItem = areaResourceSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var areaResourceElement = areaResourceSet.getElementsByTagName("areaResource")[i];

    var object = new AreaResource(areaResourceElement);
    _AreaResourceData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractLandformSet(context) {
  var landformSet = context.getElementsByTagName("landformSet")[0];
  var numberOfItem = landformSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var landformElement = landformSet.getElementsByTagName("landform")[i];

    var object = new LandForm(landformElement);
    _LandformData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractUnitBaseSkillSet(context) {
  var unitBaseSkillSet = context.getElementsByTagName("unitBaseSkillSet")[0];
  var numberOfItem = unitBaseSkillSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var unitBaseSkillElement = unitBaseSkillSet.getElementsByTagName("unitBaseSkill")[i];

    var object = new UnitBaseSkill(unitBaseSkillElement);
    _UnitBaseSkillData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractStoreSet(context) {
  var storeSet = context.getElementsByTagName("storeSet")[0];
  var numberOfItem = storeSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var storeElement = storeSet.getElementsByTagName("store")[i];

    var object = new Store(storeElement);
    _StoreData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractResidentSet(context) {
  var residentSet = context.getElementsByTagName("residentSet")[0];
  var numberOfItem = residentSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var residentElement = residentSet.getElementsByTagName("resident")[i];

    var object = new Resident(residentElement);
    _ResidentData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
}

function extractZoneSet(context) {
  var zoneSet = context.getElementsByTagName("zoneSet")[0];
  var numberOfItem = zoneSet.getAttribute("count");
  for (var i = 0; i < numberOfItem; i++) {
    var zoneElement = zoneSet.getElementsByTagName("zone")[i];

    var object = new Zone(zoneElement);
    _ZoneData[object.getId()] = object;
    _AllData[object.getId()] = object;
  }
  
  // Add a default Zone so that it is defined whenever we try to get it
  var object = new Zone("", 0);
  _ZoneData[object.getId()] = object;
  _AllData[object.getId()] = object;
}