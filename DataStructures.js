// Tutorial - https://www.youtube.com/watch?v=t2CEgPsws3U

// Stack implementation
var Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    this.size = function() {
        return this.count;
    };

    this.peek = function(value) {
        return this.storage[this.count-1];
    };

}

// Set - no duplicates

function mySet() {
    var collection = [];

    // Used to see if there is no such element in the set.
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    this.values = function() {
        return collection;
    };

    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function(element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }

    this.size = function() {
        return collection.length;
    }

    // Return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    }

    // Return the intersection of two sets
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }
}