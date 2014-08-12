///////////////////////
// extractor helpers //
///////////////////////

function extractFromAttributeWithDefault(baseElement, mapItem, name, def) {
  var attribut = baseElement.getAttribute(name);
  if (attribut == null) {
    attribut = def;
  }
  mapItem[name] = attribut;
}

function extractName(baseElement, mapItem) {
  return extractLocalizedText(baseElement, mapItem, "name");
}

function extractLocalizedText(baseElement, mapItem, tagname) {
  var element = baseElement.getElementsByTagName(tagname)[0];
  var keyEN = tagname + "EN";
  var keyFR = tagname + "FR";
  if (element == null) {
    mapItem[keyFR] = "Pas de " + tagname;
    mapItem[keyEN] = "No " + tagname;
    console.log("No name at all for " + baseElement.getAttribute("id"));
    return mapItem;
  }
  mapItem[keyFR] = element.getElementsByTagName("text")[0].childNodes[0].nodeValue;
  if (element.getElementsByTagName("text").length == 1) {
    mapItem[keyEN] = element.getElementsByTagName("text")[0].childNodes[0].nodeValue;
    console.log("Missing English " + tagname + " for: " + mapItem[keyEN]);
  } else {
    mapItem[keyEN] = element.getElementsByTagName("text")[1].childNodes[0].nodeValue;
  }
  return mapItem;
}

function extractList(source, mapItem, name) {
  var element = source.getElementsByTagName(name)[0];
  var count = element.getAttribute("count");
  mapItem[name] = [];
  for (var i = 0; i < count; i++) {
    mapItem[name][mapItem[name].length] = element.getElementsByTagName("link")[i].getAttribute("id");
  }
}

function resetData() {
  _ItemBaseSkillData = {};
  _DungeonData = {};
  _ItemTypeData = {};
  _ItemBaseData = {};
  _SiteData = {};
  _SkillData = {};
  _TaskGroupData = {};
  _TaskData = {};
  _RecipeData = {};
  _RecipeIngredientData = {};
  _UnitTypeData = {};
  _UnitBaseData = {};
  _ImageData = {};
  _TerritoryData = {};
  _RegionData = {};
  _AreaWildlifeData = {};
  _AreaResourceData = {};
  _LandformData = {};
  _UnitBaseSkillData = {};
  _StoreData = {};
  _ResidentData = {};
  _ZoneData = {};
}