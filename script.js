// script.js
let customers = [];
let totalDebt = 0;

function addCustomer() {
    const customerName = document.getElementById('customer-name').value;
    const customerDebt = parseFloat(document.getElementById('customer-debt').value);

    if (customerName && !isNaN(customerDebt)) {
        // Добавление клиента в массив
        customers.push({ name: customerName, debt: customerDebt });

        // Очистка полей формы
        document.getElementById('customer-name').value = '';
        document.getElementById('customer-debt').value = '';

        // Обновление списка карточек клиентов
        updateCustomerList();

        // Обновление общей суммы долга
        updateTotalDebt();
    } else {
        alert('Пожалуйста, введите корректные данные.');
    }
}

function updateCustomerList() {
    const customerListContainer = document.getElementById('customer-list');
    customerListContainer.innerHTML = '';

    customers.forEach(customer => {
        const card = document.createElement('div');
        card.classList.add('customer-card');
        card.textContent = `${customer.name}: ${customer.debt} руб.`;
        customerListContainer.appendChild(card);
    });
}

function updateTotalDebt() {
    totalDebt = customers.reduce((total, customer) => total + customer.debt, 0);
    document.getElementById('total-debt-amount').textContent = totalDebt;
}
