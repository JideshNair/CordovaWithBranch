

var app = {
    // Application Constructor
initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
     document.addEventListener('onDeepLink', this.onDeepLink, false);
    document.addEventListener('DOMContentLoaded', function () {
          document.getElementById('profile').addEventListener("click", create_profile);
          document.getElementById('update_profile').addEventListener("click", update_profile);
          document.getElementById('event').addEventListener("click", create_event);

          BranchInit();
        //  init();
        });
    document.addEventListener('onCleverTapProfileSync', this.onCleverTapProfileSync, false);
    document.addEventListener('onCleverTapProfileDidInitialize', this.onCleverTapProfileDidInitialize, false);
    document.addEventListener('onCleverTapInAppNotificationDismissed', this.onCleverTapInAppNotificationDismissed, false);
    // deeplink handler


    //push notification handler
    document.addEventListener('onPushNotification', this.onPushNotification, false);
    document.addEventListener('onCleverTapInboxDidInitialize', this.onCleverTapInboxDidInitialize, false);
    document.addEventListener('onCleverTapInboxMessagesDidUpdate', this.onCleverTapInboxMessagesDidUpdate, false);
    document.addEventListener('onCleverTapInboxButtonClick', this.onCleverTapInboxButtonClick, false);
    document.addEventListener('onCleverTapInAppButtonClick', this.onCleverTapInAppButtonClick, false);
    document.addEventListener('onCleverTapFeatureFlagsDidUpdate', this.onCleverTapFeatureFlagsDidUpdate, false);
    document.addEventListener('onCleverTapProductConfigDidInitialize', this.onCleverTapProductConfigDidInitialize, false);
    document.addEventListener('onCleverTapProductConfigDidFetch', this.onCleverTapProductConfigDidFetch, false);
    document.addEventListener('onCleverTapProductConfigDidActivate', this.onCleverTapProductConfigDidActivate, false);
    document.addEventListener('onCleverTapExperimentsUpdated', this.onCleverTapExperimentsUpdated, false);
    document.addEventListener('onCleverTapDisplayUnitsLoaded', this.onCleverTapDisplayUnitsLoaded, false);
},

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
onDeviceReady: function() {
    this.receivedEvent('deviceready');
    CleverTap.setDebugLevel(3);
    window.Segment.startWithConfiguration("LoGlZKuq3Dj6OLVJgXHIgeZ9IuzlxXvG");
     CleverTap.createNotificationChannel("test", "Test Channel", "A TEST channel",3, true);
   // CleverTap.registerPush();
alert("device ready");
    // Ionic example usage
    //$rootScope.CleverTap = CleverTap;
    //CleverTap && CleverTap.registerPush();

    /*
     CleverTap.setDebugLevel(1);
     CleverTap.notifyDeviceReady();
     CleverTap.registerPush();
     CleverTap.enablePersonalization();
     CleverTap.disablePersonalization();
     CleverTap.recordScreenView("HomeView");

     CleverTap.pushInstallReferrer("source", "medium", "campaign");

     CleverTap.setPushToken("foo");
     CleverTap.setPushXiaomiToken("foo");
     CleverTap.setPushBaiduToken("foo");
     CleverTap.setPushHuaweiToken("foo");

     CleverTap.onUserLogin({"Identity":098767, "custom":1.3});

     CleverTap.profileSet({"Identity":123456, "DOB":"1950-10-15", "custom":1.3});

     CleverTap.profileSetMultiValues("multiValue", ["one", "two", "three", "four"]);

     CleverTap.getLocation(function(loc) {
     console.log("CleverTapLocation is " + loc.lat + loc.lon);
     CleverTap.setLocation(loc.lat, loc.lon);
     },
     function(error) {
     console.log("CleverTapLocation error is "+error);
     });

     CleverTap.recordEventWithName("foo");
     CleverTap.recordEventWithNameAndProps("boo", {"bar":"zoo"});
     CleverTap.recordChargedEventWithDetailsAndItems({"amount":300, "Charged ID":1234}, [{"Category":"Books", "Quantity":1, "Title":"Book Title"}]);
     CleverTap.eventGetFirstTime("foo", function (time) {console.log("foo event first time is "+time);});
     CleverTap.eventGetLastTime("App Launched", function (time) {console.log("app launched last time is "+time);});
     CleverTap.eventGetOccurrences("foo", function (num) {console.log("foo event occurrences "+num);});
     CleverTap.eventGetDetails("Charged", function (res) {console.log(res);});
     CleverTap.getEventHistory(function (history) {console.log(history);});

     CleverTap.eventGetFirstTime("noevent", function (time) {console.log("noevent event first time is "+time);});
     CleverTap.eventGetLastTime("noevent", function (time) {console.log("noevent last time is "+time);});
     CleverTap.eventGetOccurrences("noevent", function (num) {console.log("noevent occurrences "+num);});
     CleverTap.eventGetDetails("noevent", function (res) {console.log(res);});

     CleverTap.profileGetProperty("DOB", function(val) {console.log("DOB profile value is "+val);});

     CleverTap.profileGetProperty("Identity", function(val) {console.log("Identity profile value is "+val);});

     CleverTap.profileGetProperty("custom", function(val) {console.log("custom profile value is "+val);});

     CleverTap.sessionGetTimeElapsed(function(val) {console.log("session elapsed time is "+val);});
     CleverTap.sessionGetTotalVisits(function(val) {console.log("session total visits is "+val);});
     CleverTap.sessionGetScreenCount(function(val) {console.log("session screen count is "+val);});
     CleverTap.sessionGetPreviousVisitTime(function(val) {console.log("session previous visit time is "+val);});
     CleverTap.sessionGetUTMDetails(function(val) {console.log(val);});

     CleverTap.profileGetCleverTapID(function(val) {console.log("CleverTapID is "+val);});

     CleverTap.profileGetCleverTapAttributionIdentifier(function(val) {console.log("CleverTapAttributionIdentifier is "+val);});

     CleverTap.profileAddMultiValue("multiValue", "five");
     CleverTap.profileRemoveMultiValues("multiValue", ["one", "two"]);
     CleverTap.profileRemoveMultiValue("multiValue", "three");
     CleverTap.profileRemoveValueForKey("custom");
     CleverTap.profileGetProperty("multiValue", function(val) {console.log("multiValue profile value is "+val);});

     CleverTap.getAllInboxMessages(function(val) {console.log("Inbox messages are "+val);});
     CleverTap.getUnreadInboxMessages(function(val) {console.log("Unread Inbox messages are "+val);});
     CleverTap.getInboxMessageForID("messageId", function(val) {console.log("Inbox message is "+val);});
     CleverTap.deleteInboxMessageForId("messageId");
     CleverTap.markReadInboxMessageForId("messageId");
     CleverTap.pushInboxNotificationViewedEventForId("messageId");
     CleverTap.pushInboxNotificationClickedEventForId("messageId");
     CleverTap.getAllDisplayUnits(function(val) {console.log("Native Display units are "+val);});
     CleverTap.getDisplayUnitForId(function(val) {console.log("Native Display unit is "+val);});
     CleverTap.recordDisplayUnitViewedEventForID("unitID");
     CleverTap.recordDisplayUnitClickedEventForID("unitID");
     CleverTap.setUIEditorConnectionEnabled(true);
     CleverTap.registerBooleanVariable("test");
     CleverTap.registerDoubleVariable("test");
     CleverTap.registerIntegerVariable("test");
     CleverTap.registerStringVariable("test");
     CleverTap.registerListOfBooleanVariable("test");
     CleverTap.registerListOfDoubleVariable("test");
     CleverTap.registerListOfIntegerVariable("test");
     CleverTap.registerListOfStringVariable("test");
     CleverTap.registerMapOfBooleanVariable("test");
     CleverTap.registerMapOfDoubleVariable("test");
     CleverTap.registerMapOfIntegerVariable("test");
     CleverTap.registerMapOfStringVariable("test");
     CleverTap.getBooleanVariable("test", true, function(val) {console.log("Value is "+val);});
     CleverTap.getDoubleVariable("test", 1000, function(val) {console.log("Value is "+val);});
     CleverTap.getIntegerVariable("test", 10, function(val) {console.log("Value is "+val);});
     CleverTap.getStringVariable("test", "testValue", function(val) {console.log("Value is "+val);});
     CleverTap.getListOfBooleanVariable("test", [true,true], function(val) {console.log("Value is "+val);});
     CleverTap.getListOfDoubleVariable("test", [1000,2000], function(val) {console.log("Value is "+val);});
     CleverTap.getListOfIntegerVariable("test", [10,20], function(val) {console.log("Value is "+val);});
     CleverTap.getListOfStringVariable("test", ["ASD","adsad"], function(val) {console.log("Value is "+val);});
     CleverTap.getMapOfBooleanVariable("test", {"test1": true, "test2": false, "test3": true}, function(val) {console.log("Value is "+val);});
     CleverTap.getMapOfDoubleVariable("test", {"test1": 1000, "test2": 2000, "test3": 3000}, function(val) {console.log("Value is "+val);});
     CleverTap.getMapOfIntegerVariable("test", {"test1": 10, "test2": 20, "test3": 30}, function(val) {console.log("Value is "+val);});
     CleverTap.getMapOfStringVariable("test", {"test1": "sda", "test2": "asd", "test3": "Sad"}, function(val) {console.log("Value is "+val);});
     CleverTap.getFeatureFlag("test",true,function(val) {console.log("Value is "+val);});
     CleverTap.setDefaultsMap({"test":"val1","test1":"val2"});
     CleverTap.fetch();
     CleverTap.fetchWithMinimumFetchIntervalInSeconds(100);
     CleverTap.activate();
     CleverTap.fetchAndActivate();
     CleverTap.setMinimumFetchIntervalInSeconds(100);
     CleverTap.getLastFetchTimeStampInMillis(function(val) {console.log("Value is "+val);});
     CleverTap.getString("test", function(val) {console.log("Value is "+val);});
     CleverTap.getBoolean("test", function(val) {console.log("Value is "+val);});
     CleverTap.getLong("test", function(val) {console.log("Value is "+val);});
     CleverTap.getDouble("test", function(val) {console.log("Value is "+val);});
     CleverTap.reset();

     //FOR NOTIFICATION INBOX
     CleverTap.initializeInbox();
     */

},

    // onCleverTapProfileSync Event Handler
    // CleverTap provides a mechanism for notifying your application about synchronization-related changes to the User Profile/Event History.
    // You can subscribe to these notifications by listening for the onCleverTapProfile Sync event,
    // i.e. document.addEventListener('onCleverTapProfileSync', this.onCleverTapProfileSync, false);
    // the updates property of the onCleverTapProfileSync event represents the changed data and is of the form:
    //      {
    //          "profile":{"<property1>":{"oldValue":<value>, "newValue":<value>}, ...},
    //          "events:{"<eventName>":
    //              {"count":
    //                  {"oldValue":(int)<old count>, "newValue":<new count>},
    //              "firstTime":
    //                  {"oldValue":(double)<old first time event occurred>, "newValue":<new first time event occurred>},
    //              "lastTime":
    //                  {"oldValue":(double)<old last time event occurred>, "newValue":<new last time event occurred>},
    //              }, ...
    //          }
    //      }
    //
    //

onCleverTapProfileSync: function(e) {
    console.log(e.updates);
},

onCleverTapProfileDidInitialize: function(e) {
    console.log(e.CleverTapID);
},

onCleverTapInAppNotificationDismissed: function(e) {
    console.log(e.extras);
    console.log(e.actionExtras);
},

    // deep link handling
onDeepLink: function(e) {
alert(e.deeplink);
    console.log(e.deeplink);
},

    // push notification payload handling
onPushNotification: function(e) {
    console.log(e.notification);
},

onCleverTapInboxDidInitialize: function() {
    CleverTap.showInbox({"navBarTitle":"My App Inbox","tabs": ["tag1", "tag2"],"navBarColor":"#FF0000"});
},

onCleverTapInboxMessagesDidUpdate: function() {
    CleverTap.getInboxMessageUnreadCount(function(val) {console.log("Inbox unread message count"+val);})
    CleverTap.getInboxMessageCount(function(val) {console.log("Inbox read message count"+val);});
},

onCleverTapInAppButtonClick: function(e) {
    console.log("onCleverTapInAppButtonClick");
    console.log(e.customExtras);
},

onCleverTapInboxButtonClick: function(e) {
    console.log("onCleverTapInboxButtonClick");
    console.log(e.customExtras);
},

onCleverTapFeatureFlagsDidUpdate: function() {
    console.log("onCleverTapFeatureFlagsDidUpdate");
},

onCleverTapProductConfigDidInitialize: function() {
    console.log("onCleverTapProductConfigDidInitialize");
},

onCleverTapProductConfigDidFetch: function() {
    console.log("onCleverTapProductConfigDidFetch");
},

onCleverTapProductConfigDidActivate: function() {
    console.log("onCleverTapProductConfigDidActivate");
},

onCleverTapExperimentsUpdated: function() {
    console.log("onCleverTapExperimentsUpdated");
},

onCleverTapDisplayUnitsLoaded: function(e) {
    console.log("onCleverTapDisplayUnitsLoaded");
    console.log(e.units);
},

    // Update DOM on a Received Event
receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
  //  var listeningElement = parentElement.querySelector('.listening');
  //  var receivedElement = parentElement.querySelector('.received');

  //  listeningElement.setAttribute('style', 'display:none;');
 //   receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
}
};


            // Branch initialization
          function BranchInit() {
            // for development and debugging only
            Branch.setDebug(true);

            // for GDPR compliance (can be called at anytime)
            Branch.disableTracking(false);

            // for better Android matching
            Branch.setCookieBasedMatching("cordova.app.link");

            // sync with Mixpanel if installed
            Branch.setRequestMetadata("$mixpanel_distinct_id", "your_mixpanel_token");

            // Branch initialization
            Branch.initSession()
              .then(function success(res) {
                if (res["+clicked_branch_link"]) {
                  alert("Open app with a Branch deep link: " + JSON.stringify(res));
                  // Branch quick link: https://cordova.app.link/uJcOH1IFpM
                  // Branch web link: https://cordova-alternate.app.link/uJcOH1IFpM
                  // Branch dynamic link: https://cordova.app.link?tags=one&tags=two&tags=three&channel=Copy&feature=onboarding&stage=new+user&campaign=content+123+launch&type=0&duration=0&source=android&data
                  // Branch uri scheme: branchcordova://open?link_click_id=link-500015444967786346
                  // Branch android intent: intent://open?link_click_id=518106399270344237#Intent;scheme=looprocks;package=com.eneff.branch.cordovatestbed;S.browser_fallback_url=https%3A%2F%2Fcordova.app.link%2FuJcOH1IFpM%3F__branch_flow_type%3Dchrome_deepview%26__branch_flow_id%3D518106399312287278;S.market_referrer=link_click_id-518106399270344237%26utm_source%3DCopy%26utm_campaign%3Dcontent%20123%20launch%26utm_feature%3Donboarding;S.branch_data=%7B%22~feature%22%3A%22onboarding%22%2C%22this_is%22%3A%22true%22%2C%22custom_string%22%3A%22data%22%2C%22testing%22%3A%22123%22%2C%22%24publicly_indexable%22%3A%22false%22%2C%22%24desktop_url%22%3A%22http%3A%2F%2Fwww.example.com%2Fdesktop%22%2C%22%24one_time_use%22%3Afalse%2C%22custom_object%22%3A%22%7B%5C%5C%5C%22random%5C%5C%5C%22%3A%5C%5C%5C%22dictionary%5C%5C%5C%22%7D%22%2C%22~id%22%3A%22517795540654792902%22%2C%22~campaign%22%3A%22content%20123%20launch%22%2C%22%2Bclick_timestamp%22%3A1524764418%2C%22%2Burl%22%3A%22https%3A%2F%2Fcordova.app.link%2FuJcOH1IFpM%22%2C%22custom_boolean%22%3A%22true%22%2C%22custom%22%3A%22data%22%2C%22source%22%3A%22android%22%2C%22%24og_image_url%22%3A%22http%3A%2F%2Florempixel.com%2F400%2F400%2F%22%2C%22%2Bdomain%22%3A%22cordova.app.link%22%2C%22custom_integer%22%3A%221524690301794%22%2C%22~tags%22%3A%5B%22one%22%2C%22two%22%2C%22three%22%5D%2C%22custom_array%22%3A%22%5B1%2C2%2C3%2C4%2C5%5D%22%2C%22~channel%22%3A%22Copy%22%2C%22~creation_source%22%3A2%2C%22%24canonical_identifier%22%3A%22content%2F123%22%2C%22%24og_title%22%3A%22Content%20123%20Title%22%2C%22%24og_description%22%3A%22Content%20123%20Description%201524690296449%22%2C%22%24identity_id%22%3A%22453670943617990547%22%2C%22~stage%22%3A%22new%20user%22%2C%22%2Bclicked_branch_link%22%3Atrue%2C%22%2Bmatch_guaranteed%22%3Atrue%2C%22%2Bis_first_session%22%3Afalse%7D;B.branch_intent=true;end
                  // Branch android app link (device controlled): https://cordova.app.link/uJcOH1IFpM
                  // Branch ios universal link (device controlled): https://cordova.app.link/uJcOH1IFpM
                } else if (res["+non_branch_link"]) {
                  alert("Open app with a non Branch deep link: " + JSON.stringify(res));
                  // Competitor uri scheme: anotherurischeme://hello=world
                } else {
                  alert("Open app organically");
                  // Clicking on app icon or push notification
                }
              })
              .catch(function error(err) {
                logger(err, true);
              });
          }

function create_profile()
{
alert("New User Created");
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() ;
var dateTime = date+' '+time;
  CleverTap.onUserLogin({"Identity":dateTime, "name":"jidesh_cordova_new"});



}
function update_profile()
{
alert("User Property Updated");

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
  CleverTap.profileSet({"DOB":date, "email":date+"@gmail.com"});
}
function create_event()
{
alert("Event Created");
 CleverTap.recordEventWithName("ButtonClick");

}
app.initialize();