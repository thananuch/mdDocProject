function kyubitLogin(url, userName, password, callback)
{
    kyubitJsonp(url + "/WebServices/Users.asmx/LoginAPI", "&userName=" + encodeURIComponent(userName) + "&password=" + encodeURIComponent(password), callback)
}

function kyubitLoginWin(url, domain, userName, password, callback)
{
    kyubitJsonp(url + "/WebServices/Users.asmx/LoginAPIWin", "&domain=" + encodeURIComponent(domain) + "&userName=" + encodeURIComponent(userName) + "&password=" + encodeURIComponent(password), callback)
}

function kyubitLogout(url, callback)
{
    kyubitJsonp(url + "/WebServices/Users.asmx/LoginOut", "", callback);
}

function kyubitJsonp(url, params, callback)
{
    var callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
    window[callbackName] = function (data)
    {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement("script");
    script.onerror = function ()
    {
        alert("Error loading " + this.src);
    };
    script.src = url + (url.indexOf("?") >= 0 ? "&" : "?") + "callback=" + callbackName + params;
    document.body.appendChild(script);
}