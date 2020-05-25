const Hotel = {

}

const hotel = function ({
    name = 'none',
    age = 0,
    weight = 40
}) {
    this.name = name;
    this.age = age;
    this.weight = weight;
}
hotel.call(Hotel, {
    name: 'Alex',
    age: 18,
    weight: 80
})
console.log(Hotel);


const User = function ({
    name = 'noone',
    age = 6,
    weight = 40,
    status = 'nomarried'
}) {
    this.name = name;
    this.weight = weight;
    this.status = status;
    this.age = age;
    console.log(this);
}

const alex = new User({
    name: 'Alex',
    age: 22,
    weight: 66,
    status: 'in active searching'
})
console.log(alex);