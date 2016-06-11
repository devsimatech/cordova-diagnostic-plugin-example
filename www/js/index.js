function onDeviceReady() {
    console.log("Adding location listener");
    $('#listen').on("click", function(){
        cordova.plugins.diagnostic.registerLocationStateChangeHandler(function(state){
            console.log("Location state changed to: "+state);
        }, function(error){
            console.error("Error registering for location state changes: "+error);
        });
    });
}


$(document).on("deviceready", onDeviceReady);