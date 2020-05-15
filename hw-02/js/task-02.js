// debugger

const calculateEngravingPrice = (message, pricePerWord) => {
    let result = 0;
    const randomMessage = message.split(' ');
    result = Number(` ${randomMessage.length * pricePerWord}`);
    return result;

};

const result = calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)
console.log(result)



// for (let number of randomMessage) {
//     result = `${number} ${pricePerWord}  ${number.length * pricePerWord}`
// }
// for (let i = 0; i < randomMessage.length; i++) {}