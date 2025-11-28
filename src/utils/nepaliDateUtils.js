// // import { bsToAd, adToBs } from 'nepali-calendar-js';

// // export function getCurrentBsDate() {
// //   const todayAd = new Date();
// //   const todayBs = adToBs({
// //     year: todayAd.getFullYear(),
// //     month: todayAd.getMonth() + 1,
// //     day: todayAd.getDate(),
// //   });
// //   return `${todayBs.year}/${String(todayBs.month).padStart(2, '0')}/${String(todayBs.day).padStart(2, '0')}`;
// // }

// // export function getWeekdayFromBs(year, month, day) {
// //   const adDate = bsToAd({ year, month, day });
// //   const weekdayIndex = new Date(adDate.year, adDate.month - 1, adDate.day).getDay();
// //   const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// //   return weekdays[weekdayIndex];
// // }

// //   export function getMonthDaysWithWeek(year, month) {
// //   const bsToAd = require('nepali-calendar-js').bsToAd;

// //   // Rough number of days in each month of BS 2082
// //   const bsMonthDays = [31, 31, 32, 31, 31, 30, 30, 29, 30, 29, 30, 30];
// //   const totalDays = bsMonthDays[month]; // no need -1, because selectedMonth is 0-based

// //   const days = [];

// //   for (let day = 1; day <= totalDays; day++) {
// //     const bsDate = `${year}/${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
// //     const ad = bsToAd({ year, month: month + 1, day });
// //     const weekday = new Date(ad.year, ad.month - 1, ad.day).toLocaleDateString('en-US', {
// //       weekday: 'long',
// //     });

// //     days.push({ date: bsDate, weekday });
// //   }

// //   return days;
// // }



// import bs from 'bikram-sambat-js';
// import { BSToAD, ADToBS } from 'bikram-sambat-js';

// export function getCurrentBsDate() {
//   const todayAd = new Date();
//   const bsDate = ADToBS({
//     year: todayAd.getFullYear(),
//     month: todayAd.getMonth() + 1,
//     day: todayAd.getDate()
//   });

//   return `${bsDate.year}/${String(bsDate.month).padStart(2, '0')}/${String(bsDate.day).padStart(2, '0')}`;
// }

// export function getWeekdayFromBs(year, month, day) {
//   const adDate = BSToAD({ year, month, day });
//   const dateObj = new Date(adDate.year, adDate.month - 1, adDate.day);
//   const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   return weekdays[dateObj.getDay()];
// }

// export function getMonthDaysWithWeek(year, month) {
//   // Approximate BS month days for now. You can update this manually as needed.
//   const bsMonthDays = [31, 31, 32, 31, 31, 30, 30, 29, 30, 29, 30, 30];
//   const totalDays = bsMonthDays[month]; // `month` is zero-indexed in your dropdown

//   const days = [];

//   for (let day = 1; day <= totalDays; day++) {
//     const bsDateStr = `${year}/${String(month + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
//     const ad = BSToAD({ year, month: month + 1, day });
//     const weekday = new Date(ad.year, ad.month - 1, ad.day).toLocaleDateString('en-US', {
//       weekday: 'long',
//     });

//     days.push({ date: bsDateStr, weekday });
//   }

//   return days;
// }


