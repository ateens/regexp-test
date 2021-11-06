const str = `
010-3440-7572
Thesecon@gmail.com
https://fastcampus.co.kr/courses/203720/clips/
the_quick_brown_fox_jumps_over_the_lazy_dog.
abbcccddddddddddd
ff
possibly yesterday
`;

const h = ` the hello  world   !

`;

console.log(str.match(/(?<=@).{1,}/g));
