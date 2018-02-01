var recipe = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  var newObject = Object.assign({}, obj, {key, val});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign(obj, {key, val});
}

function deleteFromObjectByKey(obj, key) {
  var newObject = obj;
  newObject.delete[key];
  return newObject;
}

function 