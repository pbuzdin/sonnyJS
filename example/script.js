(function() {

	SONNY.PAGEPATH = "../templates/";

    var SonnyPages = [
        'public/login.html',
        'public/register.html',
        'public/footer.html',
        'public/gallery.html',
        'public/navigation.html'
    ];

    SonnyPages.Settings = {
        connection: false,
        connectionPort: 9005,
        displaynotifications: false
    }

    var instance = new SONNY.Instance(SonnyPages, function() {

        var renderer = new SONNY.Renderer(instance);
			renderer.render("public/login.html");

    });

})();