const checkForSpam = message => {
  const messageSmallText = message.toLowerCase();

  const isTrueValue =
    messageSmallText.includes('spam') || messageSmallText.includes('sale');

  if (isTrueValue) {
    return isTrueValue;
  }
  return isTrueValue;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
