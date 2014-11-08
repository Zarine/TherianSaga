/////////////////////
// Explore display //
/////////////////////
function exploreId(id) {
  $('#ExploreOutputResult').html(_AllData[id].explore());
  sorttable.init();
}

function exploreList(list, flavor) {
  var result = [];

  var length = list.length;
  if (list.length != 0) {
    var firstItem = _AllData[list[0]];
    result.push('<div>');
    result.push(firstItem.exploreCategoryTitle(flavor));
	  result.push('<table class="exploreTable sortable">');
    result.push(firstItem.exploreTableHeader(flavor));
    
    for (var i = 0; i < length; i++) {
      result.push( _AllData[list[i]].exploreInformation(flavor) );
    }
    result.push('</table></div>');
  }
  return result.join("");
}

function prepareAutoCompletion() {
  var list = [];
  
  for(var id in _AllData)
  {
    var name = _AllData[id].getName();
    if(name != "") { list.push(name); }
  }
  
  $('#exploreSearch').autocomplete({
    source : list,
    close: function() { searchExplore(); },
    create: function() { searchExplore(); }
  });
}

function searchExplore() {
  var value = $('#exploreSearch').val();
  for(var id in _AllData)
  {
    var name = _AllData[id].getName();
    if(name == value) { exploreId(id); }
  }
}