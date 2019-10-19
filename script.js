window.onload = function () {
    var isAllComponentDisplayed = !1;
    var playTimes = 1;
    var enableClick = !0;
    var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {
        loop: !1
    });

    function startTypeWriter() {
        typewriter.deleteAll().pauseFor(500).typeString('.....').pauseFor(1500).deleteAll().typeString(
                'Hi!').pauseFor(1500).deleteAll().typeString('Its ME!').pauseFor(1000).deleteAll()
            .typeString('Gusman!').pauseFor(1500).deleteAll().typeString('Actually my name is..').pauseFor(
                700).deleteAll().typeString('Tri Cahyo Gusmantoro').pauseFor(1500).deleteAll().typeString(
                'But..').pauseFor(500).deleteAll().typeString('Some people also call me..').pauseFor(700)
            .deleteAll().typeString('"Gendut"').pauseFor(2000).deleteAll().typeString('I am a programmer')
            .pauseFor(1500).deleteAll().typeString('I develop web..').pauseFor(700).deleteChars(2).pauseFor(
                500).typeString(' and android apps').pauseFor(1500).deleteAll().typeString(
                'Have any question?').pauseFor(1000).deleteAll().typeString('Feel free to contact me :)')
            .start()
    }

    function reportTired() {
        typewriter.deleteAll().pauseFor(500).typeString('Hmmm...').pauseFor(1500).deleteAll().typeString(
                'I am tired to do this').pauseFor(1500).deleteAll().typeString('again and again...')
            .pauseFor(2000).deleteAll().typeString('Want to know me closer?').pauseFor(1000).deleteAll()
            .typeString('Just contact me on my social media').pauseFor(1500).deleteAll().typeString(':)')
            .start()
    }
    startTypeWriter();
    var component;

    function displayComponent() {
        isAllComponentDisplayed = !1;
        component = setInterval(function () {
            var node = document.getElementById('app');
            var textContent = node.textContent;
            if (textContent == "Feel free to contact me :)|") {
                if (!isAllComponentDisplayed) {
                    isAllComponentDisplayed = !0;
                    enableClick = !0;
                    $("#btn_container").fadeIn(1500);
                    $("#container_social").fadeIn(1500);
                    myStopFunction()
                }
            } else if (textContent == ":)|") {
                if (!isAllComponentDisplayed) {
                    isAllComponentDisplayed = !0;
                    $("#will_be_hide").fadeOut(2000, function () {
                        $("#container_social2").fadeIn(1500)
                    })
                }
            }
        }, 1000)
    }

    function myStopFunction() {
        clearInterval(component)
    }
    displayComponent();
    setInterval(function () {
        var typewriterHeight = $("#app").height();
        $('#btn_container').css('margin-top', typewriterHeight + 10)
    }, 1);
    $("#btn_repeat").click(function () {
        if (enableClick) {
            enableClick = !1;
            $("#btn_container").fadeOut(1000, function () {
                if (playTimes < 3) {
                    playTimes++;
                    startTypeWriter()
                } else {
                    reportTired()
                }
                displayComponent()
            })
        }
    });
    $("#btn_my_web").click(function () {
        window.location = "https://gusman.sandevelopment.com/"
    });
    $(".fa-facebook").click(function () {
        window.open("https://web.facebook.com/gusmantoro31")
    });
    $(".fa-instagram").click(function () {
        window.open("https://www.instagram.com/gusman_31/")
    });
    $(".fa-linkedin").click(function () {
        window.open("https://www.linkedin.com/in/gusman31")
    });
    $(".fa-line").click(function () {
        window.open("https://line.me/ti/p/XuGBKO1jfA")
    });
    $(".fa-twitter").click(function () {
        window.open("https://twitter.com/gusmantoro31")
    });
    $(".fa-github").click(function () {
        window.open("https://github.com/gusmantoro")
    })
};