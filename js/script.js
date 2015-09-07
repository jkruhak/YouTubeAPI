function keyWordSearch(){
  gapi.client.setApiKey('AIzaSyChZm1tt8S9m4kXntXYkdpOcLm5P1Y0GHs');
  gapi.client.load('youtube', 'v3', function() {
    search();
  });
}

// Search for a specified string.
function search() {
  var q = $('#srch').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#results').html('<pre>' + str + '</pre>');
  });
}