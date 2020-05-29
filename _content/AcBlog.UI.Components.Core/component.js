window.AcBlogUIComponentsCore = {
    loadScript: function (src) {
        var scs = document.getElementsByTagName("script");
        for (var i = 0; i < scs.length; i++) {
            if (scs[i].src.includes(src))
                return;
        }

        console.log("component load " + src);

        return new Promise((resolve, reject) => {
            var script = document.createElement('script');
            script.src = src;
            script.type = "text/javascript";

            script.onload = function () {
                resolve()
            }
            script.onerror = function (error) {
                reject(error)
            }

            document.body.appendChild(script);
        })
    },
    loadStyleSheet: function (href) {
        var lks = document.getElementsByTagName("link");
        for (var i = 0; i < lks.length; i++) {
            if (lks[i].href.includes(href))
                return;
        }

        console.log("component load " + href);

        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = href;
        document.head.appendChild(link);
    }
};