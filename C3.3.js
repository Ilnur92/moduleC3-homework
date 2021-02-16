// Задание 1

function printObject (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}

// Задание2

function checkPropInObj (str, obj) {
    return (str in obj);
}

// Задание3

function createObjWithoutProto() {
    return Object.create(null);
}