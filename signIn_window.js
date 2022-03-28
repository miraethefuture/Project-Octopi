function login_window(url, title, w, h) {
    var left = (screen.width - w) / 2;
    var top = (screen.height - h) / 2;
    var myWindow = window.open(url, title, 'resizable=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}