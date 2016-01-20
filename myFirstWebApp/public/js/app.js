function addLastName() {

  var lastNameElem = document.createElement('span');

  var lastNameText = document.createTextNode('Allum');

  lastNameElem.id = 'myLastName';
  lastNameElem.appendChild(lastNameText);

  var myNameElem = document.getElementById('myName');

  myNameElem.appendChild(lastNameElem);

}