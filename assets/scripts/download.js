function createLink() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        download_url = null;
    if (iosPlatforms.indexOf(platform) !== -1) {
        link = 'https://apps.apple.com/tt/app/fameup/id1510511383?ign-mpt=uo%3D2';
    } else {
        link = 'https://play.google.com/store/apps/details?id=net.fameup.app';
    }
    
    location.replace(link);
}

document.onload = createLink();