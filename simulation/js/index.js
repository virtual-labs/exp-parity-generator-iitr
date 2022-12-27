var connections = [];
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("tab_check").disabled = true;
});


function reload(event) {
    window.location.reload()
}

function BoardController() {
    var jsPlumbInstance = null;
    var endPoints = [];

    this.setJsPlumbInstance = function(instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function(drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function() {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 30 }],
            PaintStyle: { strokeStyle: '#87321b', lineWidth: 4 },
            EndpointStyle: { radius: 3, fillStyle: 'blue' },
            HoverPaintStyle: { strokeStyle: "#26c947" }
        });

        jsPlumbInstance.bind("beforeDrop", function(params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function(conn) {
            jsPlumb.detach(conn);
            return false;
        });

        jsPlumbInstance.bind("jsPlumbConnection", function(conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function(radius, divID, groupName, endPointName, anchorArray, color, stroke) {
        var Stroke;
        if (typeof(stroke) == 'undefined') {
            Stroke = '#87321b';
        } else {
            Stroke = stroke;
        }
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: 1,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            paintStyle: { radius: radius, fillStyle: color },
            connectorStyle: { strokeStyle: Stroke, lineWidth: 4 }
        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function(endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

}

var con;

function checkCircuit() {
    con = false;
    var g = new Graph(50);


    var groups = ['input_A', 'input_B', 'input_C', 'input_D', 'VCC', 'GND', 'led_A0', 'led_C0', 'led_A1', 'led_C1', 'led_A2', 'led_C2', 'led_A3', 'led_C3', 'led_A4', 'led_C4', 'led_A5', 'led_C5', 'led_A6', 'led_C6', 'led_A7', 'led_C7', 'led_A8', 'led_C8', 'led_A9', 'led_C9', 'ic7442_VCC', 'ic7442_GND', 'ic7442_A', 'ic7442_B', 'ic7442_C', 'ic7442_D', 'ic7442_Y9', 'ic7442_Y8', 'ic7442_Y7', 'ic7442_Y6', 'ic7442_Y5', 'ic7442_Y4', 'ic7442_Y3', 'ic7442_Y2', 'ic7442_Y1', 'ic7442_Y0', 'row1', 'row3', 'row4', 'row2', 'row5', 'row6', 'row8', 'row7', 'r0_A', 'r0_B', 'r1_A', 'r1_B', 'r2_A', 'r2_B', 'r3_A', 'r3_B', 'r4_A', 'r4_B', 'r5_A', 'r5_B', 'r6_A', 'r6_B', 'r7_A', 'r7_B', 'r8_A', 'r8_B', 'r9_A', 'r9_B']

    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) { // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
    console.log("exe")

    if (g.isConnected('ic7442_VCC', 'VCC') && g.isConnected('ic7442_GND', 'GND') &&
        g.isConnected('ic7442_A', 'input_A') && g.isConnected('ic7442_B', 'input_B') && g.isConnected('ic7442_C', 'input_C') && g.isConnected('ic7442_D', 'input_D') &&
        ((g.isConnected('led_A0', 'r0_A') && g.isConnected('r0_B', 'VCC')) || (g.isConnected('led_A0', 'r0_B') && g.isConnected('r0_A', 'VCC'))) &&
        ((g.isConnected('led_A1', 'r1_A') && g.isConnected('r1_B', 'VCC')) || (g.isConnected('led_A1', 'r1_B') && g.isConnected('r1_A', 'VCC'))) &&
        ((g.isConnected('led_A2', 'r2_A') && g.isConnected('r2_B', 'VCC')) || (g.isConnected('led_A2', 'r2_B') && g.isConnected('r2_A', 'VCC'))) &&
        ((g.isConnected('led_A3', 'r3_A') && g.isConnected('r3_B', 'VCC')) || (g.isConnected('led_A3', 'r3_B') && g.isConnected('r3_A', 'VCC'))) &&
        ((g.isConnected('led_A4', 'r4_A') && g.isConnected('r4_B', 'VCC')) || (g.isConnected('led_A4', 'r4_B') && g.isConnected('r4_A', 'VCC'))) &&
        ((g.isConnected('led_A5', 'r5_A') && g.isConnected('r5_B', 'VCC')) || (g.isConnected('led_A5', 'r5_B') && g.isConnected('r5_A', 'VCC'))) &&
        ((g.isConnected('led_A6', 'r6_A') && g.isConnected('r6_B', 'VCC')) || (g.isConnected('led_A6', 'r6_B') && g.isConnected('r6_A', 'VCC'))) &&
        ((g.isConnected('led_A7', 'r7_A') && g.isConnected('r7_B', 'VCC')) || (g.isConnected('led_A7', 'r7_B') && g.isConnected('r7_A', 'VCC'))) &&
        ((g.isConnected('led_A8', 'r8_A') && g.isConnected('r8_B', 'VCC')) || (g.isConnected('led_A8', 'r8_B') && g.isConnected('r8_A', 'VCC'))) &&
        ((g.isConnected('led_A9', 'r9_A') && g.isConnected('r9_B', 'VCC')) || (g.isConnected('led_A9', 'r9_B') && g.isConnected('r9_A', 'VCC'))) &&
        g.isConnected('ic7442_Y0', 'led_C0') && g.isConnected('ic7442_Y1', 'led_C1') && g.isConnected('ic7442_Y2', 'led_C2') && g.isConnected('ic7442_Y3', 'led_C3') && g.isConnected('ic7442_Y4', 'led_C4') && g.isConnected('ic7442_Y5', 'led_C5') && g.isConnected('ic7442_Y6', 'led_C6') && g.isConnected('ic7442_Y7', 'led_C7') && g.isConnected('ic7442_Y8', 'led_C8') && g.isConnected('ic7442_Y9', 'led_C9')
    ) {
        con = true;
        alert("Right COnnections")
        showOutput();

    } else {
        alert("Wrong Connections")
    }
    console.log("executed")
    if (con == true) {
        var a1 = document.getElementById("a1");
        var b1 = document.getElementById("b1");
        var c1 = document.getElementById("c1");
        var d1 = document.getElementById("d1");
        var e1 = document.getElementById("e1");
        var f1 = document.getElementById("f1");
        var g1 = document.getElementById("g1");
        var h1 = document.getElementById("h1");
        var i1 = document.getElementById("i1");
        var j1 = document.getElementById("j1");


        var a2 = document.getElementById("a2");
        var b2 = document.getElementById("b2");
        var c2 = document.getElementById("c2");
        var d2 = document.getElementById("d2");
        var e2 = document.getElementById("e2");
        var f2 = document.getElementById("f2");
        var g2 = document.getElementById("g2");
        var h2 = document.getElementById("h2");
        var i2 = document.getElementById("i2");
        var j2 = document.getElementById("j2");

        var a3 = document.getElementById("a3");
        var b3 = document.getElementById("b3");
        var c3 = document.getElementById("c3");
        var d3 = document.getElementById("d3");
        var e3 = document.getElementById("e3");
        var f3 = document.getElementById("f3");
        var g3 = document.getElementById("g3");
        var h3 = document.getElementById("h3");
        var i3 = document.getElementById("i3");
        var j3 = document.getElementById("j3");


        var a4 = document.getElementById("a4");
        var b4 = document.getElementById("b4");
        var c4 = document.getElementById("c4");
        var d4 = document.getElementById("d4");
        var e4 = document.getElementById("e4");
        var f4 = document.getElementById("f4");
        var g4 = document.getElementById("g4");
        var h4 = document.getElementById("h4");
        var i4 = document.getElementById("i4");
        var j4 = document.getElementById("j4");


        var a5 = document.getElementById("a5");
        var b5 = document.getElementById("b5");
        var c5 = document.getElementById("c5");
        var d5 = document.getElementById("d5");
        var e5 = document.getElementById("e5");
        var f5 = document.getElementById("f5");
        var g5 = document.getElementById("g5");
        var h5 = document.getElementById("h5");
        var i5 = document.getElementById("i5");
        var j5 = document.getElementById("j5");


        var a6 = document.getElementById("a6");
        var b6 = document.getElementById("b6");
        var c6 = document.getElementById("c6");
        var d6 = document.getElementById("d6");
        var e6 = document.getElementById("e6");
        var f6 = document.getElementById("f6");
        var g6 = document.getElementById("g6");
        var h6 = document.getElementById("h6");
        var i6 = document.getElementById("i6");
        var j6 = document.getElementById("j6");

        var a7 = document.getElementById("a7");
        var b7 = document.getElementById("b7");
        var c7 = document.getElementById("c7");
        var d7 = document.getElementById("d7");
        var e7 = document.getElementById("e7");
        var f7 = document.getElementById("f7");
        var g7 = document.getElementById("g7");
        var h7 = document.getElementById("h7");
        var i7 = document.getElementById("i7");
        var j7 = document.getElementById("j7");


        var a8 = document.getElementById("a8");
        var b8 = document.getElementById("b8");
        var c8 = document.getElementById("c8");
        var d8 = document.getElementById("d8");
        var e8 = document.getElementById("e8");
        var f8 = document.getElementById("f8");
        var g8 = document.getElementById("g8");
        var h8 = document.getElementById("h8");
        var i8 = document.getElementById("i8");
        var j8 = document.getElementById("j8");


        var a9 = document.getElementById("a9");
        var b9 = document.getElementById("b9");
        var c9 = document.getElementById("c9");
        var d9 = document.getElementById("d9");
        var e9 = document.getElementById("e9");
        var f9 = document.getElementById("f9");
        var g9 = document.getElementById("g9");
        var h9 = document.getElementById("h9");
        var i9 = document.getElementById("i9");
        var j9 = document.getElementById("j9");

        var a10 = document.getElementById("a10");
        var b10 = document.getElementById("b10");
        var c10 = document.getElementById("c10");
        var d10 = document.getElementById("d10");
        var e10 = document.getElementById("e10");
        var f10 = document.getElementById("f10");
        var g10 = document.getElementById("g10");
        var h10 = document.getElementById("h10");
        var i10 = document.getElementById("i10");
        var j10 = document.getElementById("j10");

        var a11 = document.getElementById("a11");
        var b11 = document.getElementById("b11");
        var c11 = document.getElementById("c11");
        var d11 = document.getElementById("d11");
        var e11 = document.getElementById("e11");
        var f11 = document.getElementById("f11");
        var g11 = document.getElementById("g11");
        var h11 = document.getElementById("h11");
        var i11 = document.getElementById("i11");
        var j11 = document.getElementById("j11");


        var a12 = document.getElementById("a12");
        var b12 = document.getElementById("b12");
        var c12 = document.getElementById("c12");
        var d12 = document.getElementById("d12");
        var e12 = document.getElementById("e12");
        var f12 = document.getElementById("f12");
        var g12 = document.getElementById("g12");
        var h12 = document.getElementById("h12");
        var i12 = document.getElementById("i12");
        var j12 = document.getElementById("j12");

        var a13 = document.getElementById("a13");
        var b13 = document.getElementById("b13");
        var c13 = document.getElementById("c13");
        var d13 = document.getElementById("d13");
        var e13 = document.getElementById("e13");
        var f13 = document.getElementById("f13");
        var g13 = document.getElementById("g13");
        var h13 = document.getElementById("h13");
        var i13 = document.getElementById("i13");
        var j13 = document.getElementById("j13");


        var a14 = document.getElementById("a14");
        var b14 = document.getElementById("b14");
        var c14 = document.getElementById("c14");
        var d14 = document.getElementById("d14");
        var e14 = document.getElementById("e14");
        var f14 = document.getElementById("f14");
        var g14 = document.getElementById("g14");
        var h14 = document.getElementById("h14");
        var i14 = document.getElementById("i14");
        var j14 = document.getElementById("j14");


        var a15 = document.getElementById("a15");
        var b15 = document.getElementById("b15");
        var c15 = document.getElementById("c15");
        var d15 = document.getElementById("d15");
        var e15 = document.getElementById("e15");
        var f15 = document.getElementById("f15");
        var g15 = document.getElementById("g15");
        var h15 = document.getElementById("h15");
        var i15 = document.getElementById("i15");
        var j15 = document.getElementById("j15");


        var a16 = document.getElementById("a16");
        var b16 = document.getElementById("b16");
        var c16 = document.getElementById("c16");
        var d16 = document.getElementById("d16");
        var e16 = document.getElementById("e16");
        var f16 = document.getElementById("f16");
        var g16 = document.getElementById("g16");
        var h16 = document.getElementById("h16");
        var i16 = document.getElementById("i16");
        var j16 = document.getElementById("j16");


        document.getElementById("tab_check").disabled = false;


        a1.style.display = "inline";
        a2.style.display = "inline";
        a3.style.display = "inline";
        a4.style.display = "inline";
        a5.style.display = "inline";
        a6.style.display = "inline";
        a7.style.display = "inline";
        a8.style.display = "inline";
        a9.style.display = "inline";
        a10.style.display = "inline";
        a11.style.display = "inline";
        a12.style.display = "inline";
        a13.style.display = "inline";
        a14.style.display = "inline";
        a15.style.display = "inline";
        a16.style.display = "inline";

        b1.style.display = "inline";
        b2.style.display = "inline";
        b3.style.display = "inline";
        b4.style.display = "inline";
        b5.style.display = "inline";
        b6.style.display = "inline";
        b7.style.display = "inline";
        b8.style.display = "inline";
        b9.style.display = "inline";
        b10.style.display = "inline";
        b11.style.display = "inline";
        b12.style.display = "inline";
        b13.style.display = "inline";
        b14.style.display = "inline";
        b15.style.display = "inline";
        b16.style.display = "inline";

        c1.style.display = "inline";
        c2.style.display = "inline";
        c3.style.display = "inline";
        c4.style.display = "inline";
        c5.style.display = "inline";
        c6.style.display = "inline";
        c7.style.display = "inline";
        c8.style.display = "inline";
        c9.style.display = "inline";
        c10.style.display = "inline";
        c11.style.display = "inline";
        c12.style.display = "inline";
        c13.style.display = "inline";
        c14.style.display = "inline";
        c15.style.display = "inline";
        c16.style.display = "inline";

        d1.style.display = "inline";
        d2.style.display = "inline";
        d3.style.display = "inline";
        d4.style.display = "inline";
        d5.style.display = "inline";
        d6.style.display = "inline";
        d7.style.display = "inline";
        d8.style.display = "inline";
        d9.style.display = "inline";
        d10.style.display = "inline";
        d11.style.display = "inline";
        d12.style.display = "inline";
        d13.style.display = "inline";
        d14.style.display = "inline";
        d15.style.display = "inline";
        d16.style.display = "inline";

        e1.style.display = "inline";
        e2.style.display = "inline";
        e3.style.display = "inline";
        e4.style.display = "inline";
        e5.style.display = "inline";
        e6.style.display = "inline";
        e7.style.display = "inline";
        e8.style.display = "inline";
        e9.style.display = "inline";
        e10.style.display = "inline";
        e11.style.display = "inline";
        e12.style.display = "inline";
        e13.style.display = "inline";
        e14.style.display = "inline";
        e15.style.display = "inline";
        e16.style.display = "inline";

        f1.style.display = "inline";
        f2.style.display = "inline";
        f3.style.display = "inline";
        f4.style.display = "inline";
        f5.style.display = "inline";
        f6.style.display = "inline";
        f7.style.display = "inline";
        f8.style.display = "inline";
        f9.style.display = "inline";
        f10.style.display = "inline";
        f11.style.display = "inline";
        f12.style.display = "inline";
        f13.style.display = "inline";
        f14.style.display = "inline";
        f15.style.display = "inline";
        f16.style.display = "inline";

        g1.style.display = "inline";
        g2.style.display = "inline";
        g3.style.display = "inline";
        g4.style.display = "inline";
        g5.style.display = "inline";
        g6.style.display = "inline";
        g7.style.display = "inline";
        g8.style.display = "inline";
        g9.style.display = "inline";
        g10.style.display = "inline";
        g11.style.display = "inline";
        g12.style.display = "inline";
        g13.style.display = "inline";
        g14.style.display = "inline";
        g15.style.display = "inline";
        g16.style.display = "inline";

        h1.style.display = "inline";
        h2.style.display = "inline";
        h3.style.display = "inline";
        h4.style.display = "inline";
        h5.style.display = "inline";
        h6.style.display = "inline";
        h7.style.display = "inline";
        h8.style.display = "inline";
        h9.style.display = "inline";
        h10.style.display = "inline";
        h11.style.display = "inline";
        h12.style.display = "inline";
        h13.style.display = "inline";
        h14.style.display = "inline";
        h15.style.display = "inline";
        h16.style.display = "inline";

        i1.style.display = "inline";
        i2.style.display = "inline";
        i3.style.display = "inline";
        i4.style.display = "inline";
        i5.style.display = "inline";
        i6.style.display = "inline";
        i7.style.display = "inline";
        i8.style.display = "inline";
        i9.style.display = "inline";
        i10.style.display = "inline";
        i11.style.display = "inline";
        i12.style.display = "inline";
        i13.style.display = "inline";
        i14.style.display = "inline";
        i15.style.display = "inline";
        i16.style.display = "inline";

        j1.style.display = "inline";
        j2.style.display = "inline";
        j3.style.display = "inline";
        j4.style.display = "inline";
        j5.style.display = "inline";
        j6.style.display = "inline";
        j7.style.display = "inline";
        j8.style.display = "inline";
        j9.style.display = "inline";
        j10.style.display = "inline";
        j11.style.display = "inline";
        j12.style.display = "inline";
        j13.style.display = "inline";
        j14.style.display = "inline";
        j15.style.display = "inline";
        j16.style.display = "inline";
    }
}


function changeA() {
    var imagea = document.getElementById('input_a');
    if (imagea.src.match("images/switch_1.png")) {
        imagea.src = "images/switch_0.png";
    } else {
        imagea.src = "images/switch_1.png";
    }
    showOutput();
}

function changeB() {
    var imageb = document.getElementById('input_b');
    if (imageb.src.match("images/switch_1.png")) {
        imageb.src = "images/switch_0.png";
    } else {
        imageb.src = "images/switch_1.png";
    }
    showOutput();
}

function changeC() {
    var imagec = document.getElementById('input_c');
    if (imagec.src.match("images/switch_1.png")) {
        imagec.src = "images/switch_0.png";
    } else {
        imagec.src = "images/switch_1.png";
    }
    showOutput();
}

function changeD() {
    var imaged = document.getElementById('input_d');
    if (imaged.src.match("images/switch_1.png")) {
        imaged.src = "images/switch_0.png";
    } else {
        imaged.src = "images/switch_1.png";
    }
    showOutput();
}

function showOutput() {
    var switch1 = document.getElementById('input_a').src;
    var switch2 = document.getElementById('input_b').src;
    var switch3 = document.getElementById('input_c').src;
    var switch4 = document.getElementById('input_d').src;

    if (con == true) {

        if (switch1.match("images/switch_0.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_0.png") && switch2.match("images/switch_1.png") && switch3.match("images/switch_1.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_0.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led0.png')";
        } else if (switch1.match("images/switch_1.png") && switch2.match("images/switch_0.png") && switch3.match("images/switch_0.png") && switch4.match("images/switch_1.png")) {
            document.getElementById('led0').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led0.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led1.png')";
        } else {
            document.getElementById('led0').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led1').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led2').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led3').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led4').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led5').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led6').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led7').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led8').style.backgroundImage = "url('images/led1.png')";
            document.getElementById('led9').style.backgroundImage = "url('images/led1.png')";
        }
    } else {
        return;
    }

}