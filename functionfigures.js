console.log("Hello JavaScripts");

// square code
console.group("square");

function squareperimeter(squareside) {
    return squareside * 4;
};

function squarearea(squareside) {
    return squareside * squareside;
};
console.groupEnd();

// triangle code
console.group("triangle");

function triangleperimeter(triangleside1, triangleside2, trianglebase) {
    return triangleside1 + triangleside2 + trianglebase;
}

function trianglearea(triangleheight, trianglebase) {
    return (triangleheight * trianglebase) / 2;
};

console.groupEnd();

// circle code
console.group("circle");

const PI = Math.PI;

function circlediameter(circleradius) {
    return circleradius * 2;
};

function circleperimeter(circleradius) {
    const circlediameterr = circlediameter(circleradius);
    return circlediameterr * PI;
};

function circlearea(circleradius) {
    return (circleradius * circleradius) * PI
};

console.groupEnd();

