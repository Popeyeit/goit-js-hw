// const array = [
//   [5, 7, 8, 5, 12, 14, 8, 8, 8, 8],
//   [9, 12, 55, 55, 12, 8],
//   [22, 55, 87, 55, 12, 13, 13, 13],
// ];
// // debugger;
// console.log(array[0][0].age);
// const uniqueArray = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     if (!uniqueArray.includes(array[i][j])) {
//       uniqueArray.push(array[i][j]);
//     }
//   }
// }
// console.log(uniqueArray);

// const users = [{
//     id: '000',
//     likes: 5,
//     skills: ['js', 'nodejs']
//   },
//   {
//     id: '001',
//     likes: 2,
//     skills: ['html', 'css']
//   },
//   {
//     id: '002',
//     likes: 17,
//     skills: ['html', 'js', 'nodejs']
//   },
//   {
//     id: '003',
//     likes: 8,
//     skills: ['css', 'react']
//   },
//   {
//     id: '004',
//     likes: 0,
//     skills: ['js', 'nodejs', 'react']
//   },
// ];

// const allTags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags)
//   return acc
// }, []).filter((uniqueTags, idx, array) => {
//   return array.includes(uniqueTags)

// })
// console.log(allTags);

// const allTags = tweets.reduce(function (tags, tweet) {
//   tags.push(...tweet.tags);
//   return tags;
// }, []);
// console.log(allTags);
// const tagsStats = allTags.reduce(function (acc, tag) {
//   // console.log(`TAG`, tag);
//   // console.log(`ACC`, acc);
//   //   if (acc.hasOwnProperty(tag)) {
//   //     console.log(`this tag is here, increase the number`);
//   //     acc[tag] += 1;
//   //     return acc;
//   //   }
//   //   console.log(`this tag is not here, add tag`);
//   // acc[tag] = 1;

//   //     return acc;
//   // debugger
//   acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
//   return acc;
// }, {});
// console.log(tagsStats);

// const acc = {

// }

// acc['js'] = 1
// acc['js'] = acc['js'] + 1
// acc.node = 1

// console.log(acc);

//warrior  1                               //warrior 2
// attack // defent                        // attack // defent

//damage = 10
//defence = 5
//hp = 100
// if(fn()>fn1())
//damage * math.random(1-3)
//defence * math.random(1-3)
//if(damage - defence !==){ you get 5 damage }

// const res = Math.random()
// console.log((res * 10) / 10)
// // console.log((0.1 * 10 + 0.2 * 10) / 10);

// const getSortedUniqueSkills = users => {
//   // твой код
//   return users.reduce((getAllUserSkills, element) => {
//       getAllUserSkills.push(...element.skills);
//       return getAllUserSkills;
//     }, [])
//     .filter((uniqueSkill, next, skills) => {
//       return skills.indexOf(uniqueSkill) === next
//     })
//     .sort();
// };
// console.log(getSortedUniqueSkills(users));
