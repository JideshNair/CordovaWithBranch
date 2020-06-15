
function init(){
    document.addEventListener('deviceReady', onDeviceReady, true);
    CleverTap.notifyDeviceReady();

 }

function onDeviceReady(){


}
document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('profile').addEventListener("click", create_profile);
      document.getElementById('update_profile').addEventListener("click", update_profile);
      document.getElementById('event').addEventListener("click", create_event);
      BranchInit();
      init();
    });

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
  CleverTap.onUserLogin({"Identity":dateTime, "name":"jidesh"});
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