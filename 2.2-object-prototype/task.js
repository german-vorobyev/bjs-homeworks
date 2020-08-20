String.prototype.isPalindrome = function() {
    let strArray = this.toLowerCase().split('');
    for(let i = strArray.length - 1; i >= 0; i--) {
        if(strArray[i] === ' ') {
           strArray.splice(i, 1);
        }
    }
    if(strArray.join('') == strArray.reverse('').join('')) {
      return true
    } else {
      return false
    }
}

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = sum / marks.length;
  let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
  birthday.replace(/\-/g,",");
  const now = Date.now();
  const newBirthday = new Date(birthday);
  const diff = now - newBirthday;
  const age = Math.floor(diff / 31536e6);
  if (age > 18) {
    return true
  } else {
    return false
  }
  // const today = new Date(); 
  // const newBirthday = new Date(birthday);
  // const todaySum = (today.getFullYear() * 12 + today.getMonth()) * 31 + today.getDate() - 1;
  // const newBirthdaySum = (newBirthday.getFullYear() * 12 + newBirthday.getMonth()) * 31 + newBirthday.getDate() - 1;
  // const age = Math.floor((todaySum - newBirthdaySum) / 31 / 12);
  //   if (age > 18) {
  //     return true
  //   } else {
  //     return false
  //   }
}