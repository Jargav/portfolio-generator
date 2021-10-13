<<<<<<< HEAD
const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('portfolio complete! Check out index.html to see the output!');
});
=======
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = profileDataArr => {
  for (let i = 0; i < profileDataArr.length; i+=1) {
  console.log(profileDataArr[i]);
  }

console.log('================');


profileDataArr.forEach((profileItem) => {

});

};

printProfileData(profileDataArgs);
>>>>>>> 38aee2470572c3945b9e6ad98d39000aceef403d
