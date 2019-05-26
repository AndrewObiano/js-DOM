/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

name1.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

position2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

alias3.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

document.body.getElementsByClassName('profile')[0].innerHTML = 'I dunno Prince lyrics';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

document.body.getElementsByClassName('profile')[1].innerHTML = 'Be like water';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

document.body.getElementsByClassName('alias')[2].innerHTML = 'Nick Fury';

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var nameElem = document.createElement('div');
nameElem.id = 'name7';
nameElem.innerHTML = 'David Ige';
nameParent.appendChild(nameElem);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var aliasElem = document.createElement('div');
aliasElem.id = 'alias8';
aliasElem.innerHTML = 'Stay Thirsty My Friends';
aliasParent.appendChild(aliasElem);

//Final Boss
/*9. Create your own profile.*/

var myClass = document.body.getElementsByClassName('block3 col-sm-4')[2];
// console.log(myClass);
var myName = document.createElement('div');
myName.id = 'name9';
myName.innerHTML = 'Andrew Obiano';
myClass.appendChild(myName);

var myPosition = document.createElement('div');
myPosition.id = 'position9';
myPosition.innerHTML = 'Mechanical Engineer / Web Developer';
myClass.appendChild(myPosition);

var myAlias = document.createElement('div');
myAlias.id = 'alias9';
myAlias.innerHTML = 'To be or nah';
myClass.appendChild(myAlias);

var myBio = document.createElement('div');
myBio.id = 'bio9';
myBio.innerHTML = 'Lorem ipsum oiajwfoiejoawejfojwaife';
myClass.appendChild(myBio);

document.getElementsByTagName('img')[8].src = 'https://image.shutterstock.com/image-photo/thinly-sliced-pepperoni-popular-pizza-260nw-134986916.jpg';