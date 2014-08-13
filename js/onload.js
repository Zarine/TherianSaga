window.onload = function ()
{
  var _ItemBaseSkillData = {};
  var _DungeonData = {};
  var _ItemTypeData = {};
  var _ItemBaseData = {};
  var _SiteData = {};
  var _SkillData = {};
  var _TaskGroupData = {};
  var _TaskData = {};
  var _RecipeData = {};
  var _RecipeIngredientData = {};
  var _UnitTypeData = {};
  var _UnitBaseData = {};
  var _ImageData = {};
  var _TerritoryData = {};
  var _RegionData = {};
  var _AreaWildlifeData = {};
  var _AreaResourceData = {};
  var _LandformData = {};
  var _UnitBaseSkillData = {};
  var _StoreData = {};
  var _ResidentData = {};
  var _ZoneData = {};

  document.getElementById("files").addEventListener('change', handleFileSelect, false);

  // Check for available local storage
  if(typeof localStorage !== "undefined") { 
    if(localStorage.getItem("TherianSageDataExplorer_DataStored")) { 
    removeClass("hidden", document.getElementById('LoadFromLocalStorage'));
    removeClass("hidden", document.getElementById('ClearLocalStorage')); 
    }
  }
}