// code goes here

var SETTINGS_KEY = "LSS_Settings";
var settings = getSettings( );

if (settings.name) {
  showHelloPage( );
} else {
  showFormPage( );
}

function getSettings( ) {
  var s = localStorage[ SETTINGS_KEY];
  if ( s ) {
    return JSON.parse( S );
  } else {
      return { };
  }
}

function saveSettings () {
  localStorage[ SETTINGS_KEY ] = JSON.stringify( settings );
}

function showHelloPage( ){
  $('.show-name').text(settings.name);
  $('#hello-page').show( );
  $('#form-page').hide( );
}

function showFormPage ( ){
  $('#name').val(settings.name);
  $('#submit').on('click', updateSettings);
  $('#form-page').show( );
  $('#hello-page').hide( );
  
  function updateSettings ( evt ) {
    evt.preventDefault();
  }
}