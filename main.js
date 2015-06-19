var page = tabris.create('Page', {
    title: 'Telusuri',
    topLevel: true
});

var myTextView = tabris.create('TextView', {
    layoutData: {top: 0, left: 0},
    text: "hello"
}).appendTo(page);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
   window.plugins.toast.showShortCenter("Geolocation is not supported by this browser.");
}

var directionWebView = tabris.create('WebView', {
    layoutData: {top: [myTextView, 20], left: 0, right: 0},
    url: "http://192.168.1.178/piyiku_web/tabris-helpers/gmap/direction/main.php"
}).appendTo(page);

page.open();

      