window.onload = function() {
    // Khi bấm nút OK lúc đầu
    $(".button-popup button").click(function() {
            $(".black-bg").css("animation", "fadeout 1s");
            $(".popup").css("animation", "fadeout 1s");
            setTimeout(function() {
                $(".black-bg").css("display", "none");
                $(".popup").css("display", "none");
            }, 1000);
            $(".content").css("display", "block");
            type(1);
        })
        // Chơi nhạc với key cho sẵn
    function playaudio(key) {
        var audio = document.querySelector("#audio");
        audio.src = "./style/media/" + key;
        audio.play();
    }
    // Dừng nhạc
    function stopaudio() {
        var audio = document.querySelector("#audio");
        if (!audio.pause())
            audio.pause();
    }
    // Hiệu ứng đánh máy
    var txt = "Hôm nay sẽ là ngày đặc biệt anh dành cho em!";
    var speed = 80;
    var count = 0;

    function type(x) {
        if (x == 1)
            playaudio("gophim.mp3");
        if (count < txt.length) {
            document.querySelector("#title-question").innerHTML += txt.charAt(count);
            count++;
            setTimeout(type, speed);
        } else {
            stopaudio();
            showdialog();
            playaudio("music.mp3");
        }
    }
    // Hiện 2 hộp thoại
    function showdialog() {
        $(".button").css("display", "block");
        $("button#yes").css("animation", "showyesbt 1s");
        $("button#nope").css("animation", "shownobt 1s");
    }
    // Khi bấm vào ô đồng ý
    $("#yes").click(function() {
            var popdiv = $(".say-yes").css("z-index");
            $(".say-yes").css("display", "block");
            $(".say-yes").css("z-index", popdiv + 1);
            $(".say-yes").css("animation", "showsayyes 2s");
            $(".black-bg").css("display", "block");
            $(".black-bg").css("z-index", popdiv);
            $(".black-bg").css("animation", "showblackbg 2s");
        })
        // Khi di chuột vào ô từ chối
    $("#nope").on("mousemove", function() {
            getpoint()
        })
        // Lấy tọa độ ngẫu nhiên
    function getpoint() {
        var top = $("body").height() - $("#nope").height();
        var left = $("body").width() - $("#nope").width();
        var rdtop = Math.floor(Math.random() * top);
        var rdleft = Math.floor(Math.random() * left);
        $("#nope").css("top", rdtop + "px");
        $("#nope").css("left", rdleft + "px");
    }
    // Nhập vào hộp thoại một đoạn cho sẵn
    var text = "Từ khi có em trong cuộc đời anh, đời anh bỗng sáng hẳn lên! Anh tự nghĩ có chắc yêu là đâyy. Thế nên, dù cho sóng gió ập đến. Thì mình vẫn mãi bên nhaooo nhé!"
    i = 0;
    $("#input-answer").on("keypress", function(e) {
            document.querySelector("#input-answer").value = "";
            document.querySelector("#text-hidden").innerHTML += text.charAt(i);
            document.querySelector("#input-answer").value = document.querySelector("#text-hidden").innerHTML;
            i++;
        })
        // Khi bấm vào nút có class done
    $(".done").click(function() {
        $(".question").css("animation", "fadeout 1s");
        setTimeout(function() {
            $(".question").css("display", "none");
            $(".end").css("display", "block");
            $(".end").css("animation", "showsayyes 1s");
            setTimeout(function() {
                document.location = "https://www.facebook.com/duyvo.thuan.3";
            }, 6000);
        }, 1000)
    })
}