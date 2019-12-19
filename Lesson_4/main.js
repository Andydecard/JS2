const str = '123 abc 456';

const regexp = new RegExp('abc', 'gmi');
const regexp2 = /test/gmi;
console.log(regexp.test(str));


const str1 = 'Lorem ipsum dolor sit amet, \'consectetur\' adipiscing elit. Nulla nisl nisl, bibendum in aliquet eu, ' +
    'blandit a massa. Donec placerat viverra tortor, ut ultricies ante sollicitudin non. Mauris non pretium velit.' +
    ' Vivamus blandit bibendum vulputate. Sed non mollis velit, vitae faucibus nulla. Integer at nunc ut ex vehicula' +
    ' ullamcorper. Donec ornare nisi massa, id porta odio consequat non. Praesent nec vehicula dolor. Ut ' +
    'rhoncus efficitur risus vitae pulvinar. Maecenas luctus lorem at odio pharetra maximus. Nullam pulvinar' +
    ' urna vitae tempor placerat. Etiam in posuere est, nec sagittis elit. Sed rhoncus velit id congue suscipit. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu lacinia orci.';
const regexp3 = /\'/gmi;
console.log(str1.replace(regexp3, '"'));

// console.log(str1.match(regexp3));
const str2 = str1.replace(regexp3, '+');
console.log(str2);

const str4 = 'Hi, I am Greek geek from Geekbrains';
const regexp4 = /(g.+?k)/gi;
console.log(str4.replace(regexp4, '+$1+'));

const str5 = '000 1221 1333333333311';
const regexp5 = /1.+?1/g;
console.log(str5.match(regexp5));