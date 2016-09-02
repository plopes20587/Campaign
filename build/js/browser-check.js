
//var firstPage = window.location.href == "http://url.com/";
var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "Other", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown"
    },
    searchString: function(r) {
        for (var t = 0; t < r.length; t++) {
            var i = r[t].string;
            if (this.versionSearchString = r[t].subString, -1 !== i.indexOf(r[t].subString)) return r[t].identity
        }
    },
    searchVersion: function(r) {
        var t = r.indexOf(this.versionSearchString);
        if (-1 !== t) {
            var i = r.indexOf("rv:");
            return "Trident" === this.versionSearchString && -1 !== i ? parseFloat(r.substring(i + 3)) : parseFloat(r.substring(t + this.versionSearchString.length + 1))
        }
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Edge",
        identity: "MS Edge"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer"
    }, {
        string: navigator.userAgent,
        subString: "Trident",
        identity: "Explorer"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.userAgent,
        subString: "Opera",
        identity: "Opera"
    }, {
        string: navigator.userAgent,
        subString: "OPR",
        identity: "Opera"
    }, {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "Safari",
        identity: "Safari"
    }]
};
BrowserDetect.init();
if (BrowserDetect.browser == "Explorer" && BrowserDetect.version < 9) {
    document.write("<div class='browserCompatibility'>For a better experience please upgrade your browser to the latest version.</div>");
};