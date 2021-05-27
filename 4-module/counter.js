//어떤것을 외부에 노출할건지(export)

let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;

