document.addEventListener("keydown", function (e) {
    if (e.code == "KeyA") {
        let Key = document.createElement("AUDIO");
        Key.src = "media/A.mp3";
        Key.play();
        console.log("The \'A\' key is pressed");
    }
    else if (e.code == "KeyS") {
        let Key = document.createElement("AUDIO");
        Key.src = "media/S.mp3";
        Key.play();
        console.log("The \'S\' key is pressed");
    }
    else if (e.code == "KeyD") {
        let Key = document.createElement("AUDIO");
        Key.src="media/D.mp3";
        Key.play();
        console.log("The \'D\' key is pressed");
    }
    else if (e.code == "KeyF") {
        let Key = document.createElement("AUDIO");
        Key.src="media/F.mp3";
        Key.play();
        console.log("The \'F\' key is pressed");
    }
    else if (e.code == "KeyG") {
        let Key = document.createElement("AUDIO");
        Key.src="media/G.mp3";
        Key.play();
        console.log("The \'G\' key is pressed");
    }
    else if (e.code == "KeyH") {
        let Key = document.createElement("AUDIO");
        Key.src="media/H.mp3";
        Key.play();
        console.log("The \'H\' key is pressed");
    }
    else if (e.code == "KeyJ") {
        let Key = document.createElement("AUDIO");
        Key.src="media/J.mp3";
        Key.play();
        console.log("The \'J\' key is pressed");
    }
    else if (e.code == "KeyE") {
        let Key = document.createElement("AUDIO");
        Key.src="media/E.mp3";
        Key.play();
        console.log("The \'E\' key is pressed");
    }
    else if (e.code == "KeyT") {
        let Key = document.createElement("AUDIO");
        Key.src="media/T.mp3";
        Key.play();
        console.log("The \'T\' key is pressed");
    }
    else if (e.code == "KeyU") {
        let Key = document.createElement("AUDIO");
        Key.src="media/U.mp3";
        Key.play();
        console.log("The \'U\' key is pressed");
    }
    else if (e.code == "KeyW") {
        let Key = document.createElement("AUDIO");
        Key.src="media/W.mp3";
        Key.play();
        console.log("The \'W\' key is pressed");
    }
    else if (e.code == "KeyY") {
        let Key = document.createElement("AUDIO");
        Key.src="media/Y.mp3";
        Key.play();
        console.log("The \'Y\' key is pressed");
    }
    else {
        console.log("Pressed another key");
    }
});