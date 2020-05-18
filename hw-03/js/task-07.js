/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        this.transactions.push({
            amount,
            type,
            id: this.transactions.length + 1
        })
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount
        this.createTransaction(amount, Transaction.DEPOSIT)
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (this.balance - amount === 0) {
            console.log('снятие такой суммы не возможно, недостаточно средств.');
            return
        }
        this.balance -= amount
        this.createTransaction(amount, Transaction.WITHDRAW)
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        let result;
        for (const value of this.transactions) {
            if (value.id === id) {
                result = value
            }
        }
        return (result);
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let result = 0;
        for (const operation of this.transactions) {
            console.log(operation);
            if (operation.type === type) {
                result += operation.amount
            }
        }
        return result;
    },
};

account.deposit(200)
account.deposit(200)
account.deposit(200)
account.deposit(200)
account.deposit(200)
account.deposit(200)
console.log(account.transactions);
account.withdraw(50)
account.withdraw(500)
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getBalance());


// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.