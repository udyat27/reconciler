function createDomElement(data) {
    var parentElement = document.getElementById("mainArea");

    // Get the current children of the parent element and convert it to an array
    var currentChildren = Array.from(parentElement.children);
    console.log(currentChildren);
    let added = 0, updated = 0, deleted = 0;

    //process each item in data array
    data.forEach(function (item) {
        var existingChild = currentChildren.find(function (child) {
            return child.dataset.id === String(item.id);

        });
        if (existingChild) {
            updated++;

            //if it exists, update it

            existingChild.childeren[0].innerHTMl = item.title;
            existingChild.childeren[1].innerHTMl = item.description;
            // Remove it from the currentChildren Array

            currentChildren = currentChildren.filter(function (child) {
                return child !== existingChild;
            });
        }
        else {
            // continue from here
        }
    })


}
