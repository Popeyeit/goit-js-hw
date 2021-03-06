// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    // this.items = this.items.filter(item => item !== itemName);

    // const fn = () => {
    //   for (let i = 0; i < this.items.length; i++) {
    //     if (this.items[i].includes(itemName)) {
    //       this.items.splice(i, 1);
    //     }
    //   }
    // };
    // this.items = [...this.items];
    // const fn = function () {
    //   for (let i = 0; i < this.items.length; i++) {
    //     if (this.items[i].includes(itemName)) {
    //       this.items.splice(i, 1);
    //     }
    //   }
    // };
    // // fn()
    // fn.call(inventory);

    const fn = function () {
      const array = [];
      for (const element of this.items) {
        if (element !== itemName) {
          array.push(element);
        }
      }
      return array;
    };
    this.items = fn.call(inventory);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};
const add = inventory.add.bind(inventory);

invokeInventoryAction('Medkit', add); //('Medkit', inventory.add.bind(inventory))
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
