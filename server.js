const express = require('express');
const bodyParser = require("body-parser");
const path = require("path")
const { Server } = require('http');

const app = express();


app.get("/", function(req, res) {

    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'base.html';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/one", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Abu Bakr.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/two", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Umar.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/three", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Uthman.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/four", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Ali.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/five", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Talhah.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/six", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Az Zubayr.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/seven", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Abdur Rahman.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/eight", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Saad.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/nine", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Sa id.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.get("/ten", function(req, res) {
    var options = {
        root: path.join(__dirname)
    };

    var fileName = 'Abu Ubaidah.htm';
    res.sendFile(fileName, options, function(err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
})



let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000
}


app.listen(port, function() {
    console.log("Server has started Successlul")
});