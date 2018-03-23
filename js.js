
var names = ["James", "Jill", "Jane", "Jack"];

for(var i = 0; i<names.length; i++) {
    if(i<names.length) {
        console.log(i + " -> " + names[i]);
    }

    else if(i==names.length) {
        console.log(i-1 + " -> " + names[i]);
    }

    else {
        break;
    }
}