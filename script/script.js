let themeToggle = document.getElementById('themeToggle');
let body = document.body;
let savedTheme = localStorage.getItem('site-theme');

if (savedTheme === 'light')
{
    body.classList.add('light-theme');
    if(themeToggle) themeToggle.checked = true;
}

if (themeToggle)
{
    themeToggle.addEventListener('change', () =>
    {
        if (themeToggle.checked)
        {
            body.classList.add('light-theme');
            localStorage.setItem('site-theme', 'light');
        }
        else
        {
            body.classList.remove('light-theme');
            localStorage.setItem('site-theme', 'dark');
        }
    });
}


const specsDict = { 
    brand: "Бренд",
    type: "Тип",
    color: "Колір",
    
    socket: "Сокет",
    cores: "Ядра",
    frequency: "Частота",
    tdp: "TDP",
    ramType: "Тип пам'яті",
    chip: "Чіпсет/Графічний чіп",
    formFactor: "Форм-фактор",
    m2slots: "Слоти M.2",
    capacity: "Об'єм",
    
    memory: "Відеопам'ять",
    length: "Довжина (мм)",
    recommendedPSU: "Реком. БЖ (Вт)",
    
    interface: "Інтерфейс",
    
    power: "Потужність",
    certificate: "Сертифікат",
    modular: "Модульний",
    
    height: "Висота (мм)",
    radiator: "Радіатор (мм)",
    support: "Підтримка",
    
    maxMbSize: "Макс. розмір плати",
    maxGpuLength: "Макс. довжина GPU",
    maxCoolerHeight: "Макс. висота кулера",
    psuPosition: "Розташування БЖ",
    radiatorSupport: "Підтримка СРО",

    connection: "Підключення",
    sensor: "Сенсор",
    dpi: "DPI (Чутливість)",
    switch: "Перемикачі",
    format: "Формат",
    resolution: "Роздільна здатність",
    refresh: "Частота оновлення",
    matrix: "Матриця",
    mic: "Мікрофон",
    sound: "Звук"
};

let currentPage = 1;
let itemsPerPage = 8;
let currentCategory = 'all';

function renderProducts()
{
    let grid = document.getElementById('productsGrid');
    if (!grid) return; 

    grid.innerHTML = '';

    let filtered = products; 
    if (currentCategory !== 'all')
    {
        filtered = products.filter(p => p.category === currentCategory);
    }
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = filtered.slice(start, end);

    paginatedItems.forEach(product =>
    {
        let card = document.createElement('div');
        card.className = "product-card"; 
        
        let specsHTML = '';
        if (product.specs)
        {
            for (let [key, value] of Object.entries(product.specs))
            {
                let label = specsDict[key] || key;
                specsHTML += `
                    <div class="detail-row">
                        <span style="opacity: 0.7;">${label}</span>
                        <b>${value}</b>
                    </div>`;
            }
        }

        card.innerHTML = `
            <div class="product-shell">
                
                <div class="card-main">
                    <button class="info-btn" onclick="toggleDetails(this)">i</button>

                    <img src="${product.image}" class="card-img" alt="${product.title}">
                    <div class="card-title">${product.title}</div>
                    <div class="counter-wrapper">
                            <button class="cnt-btn" onclick="updateQty(this, -1)">-</button>
                            <input type="text" class="cnt-input" value="1" readonly>
                            <button class="cnt-btn" onclick="updateQty(this, 1)">+</button>
                    </div>
                    <div class="card-price">${product.price} грн</div>
                    <div class="card-actions"><button class="miscBtn add-to-cart-btn" onclick="addToCartFromCard(this, ${product.id})">Додати в кошик</button></div>
                </div>
                <div class="product-details">
                    <h3>Характеристики</h3>
                    <div class="details-list">${specsHTML}</div>
                    <button class="build-pc-btn">Зібрати ПК з цим товаром</button>
                </div>
            </div>
            `;
        grid.appendChild(card);
    });

    let pageIndicator = document.getElementById('pageIndicator');
    if (pageIndicator) pageIndicator.innerText = `${currentPage}`;
}

function toggleDetails(btn)
{
    let card = btn.closest('.product-card');
    if (!card) return;

    let opened = document.querySelector('.product-card.active');
    if (opened && opened !== card)
    {
        closeCard(opened);
    }

    if (card.classList.contains('active'))
    {
        closeCard(card);
        return;
    }

    let rect = card.getBoundingClientRect();
    let spaceRight = window.innerWidth - rect.right;
    let dir = spaceRight < 350 + 40 ? 'expand-left' : 'expand-right';

    card.classList.add('active', dir);

    btn.textContent = '×';
    btn.style.color = '#ff4757';
}

function closeCard(card)
{
    let btn = card.querySelector('.info-btn');
    if (btn)
    {
        btn.textContent = 'i';
        btn.style.color = '';
    }

    card.classList.remove('active', 'expand-right', 'expand-left');
    
    card.classList.add('closing');

    setTimeout(() =>
    {
        card.classList.remove('closing');
    }, 550); 
}

function filterProducts(category)
{
    currentCategory = category;
    currentPage = 1;
    renderProducts();
}

function changePage(direction)
{
    if (currentPage + direction > 0)
    {
        currentPage += direction;
        renderProducts();
    }
}

function updateQty(btn, change)
{
    let wrapper = btn.closest('.counter-wrapper');
    let input = wrapper.querySelector('.cnt-input');
    
    let currentValue = parseInt(input.value);
    
    let newValue = currentValue + change;
    
    if (newValue < 1) newValue = 1;
    input.value = newValue;
}

let cart = [];

function toggleCart()
{
    let wrapper = document.getElementById('cartWrapper');
    wrapper.classList.toggle('active');
}


function addToCartFromCard(btn, productId)
{
    let card = btn.closest('.product-card');
    let qtyInput = card.querySelector('.cnt-input');
    let quantity = parseInt(qtyInput.value) || 1;

    addToCart(productId, quantity);
}

function addToCart(productId, quantity = 1)
{
    let product = products.find(p => p.id === productId);
    if (!product) return;

    let existing = cart.find(item => item.id === productId);

    if (existing)
    {
        existing.qty += quantity;
    }
    else
    {
        cart.push(
        {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            qty: quantity
        });
    }

    updateCartUI();
}

function updateCartUI()
{
    let container = document.getElementById('cartItemsContainer');
    let totalEl = document.getElementById('cartTotal');
    let countEl = document.getElementById('cartCount');
    let checkoutBtn = document.getElementById('checkoutBtn');
    
    container.innerHTML = '';
    
    let totalPrice = 0;
    let totalQty = 0;

    if (cart.length === 0)
    {
        container.innerHTML = '<p class="empty-msg" style="text-align:center; opacity:0.6;">Кошик порожній</p>';
        checkoutBtn.disabled = true;
    }
    else
    {
        checkoutBtn.disabled = false;
        
        cart.forEach((item, index) =>
        {
            let itemTotal = item.price * item.qty;
            totalPrice += itemTotal;
            totalQty += item.qty;

            container.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-title">×${item.qty} ${item.title} </div>
                        <div class="cart-item-price"><b>${itemTotal} грн</b></div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="cart-ctrl-btn" onclick="changeCartQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="cart-ctrl-btn" onclick="changeCartQty(${index}, 1)">+</button>
                    </div>
                </div>
            `;
        });
    }

    totalEl.innerText = totalPrice + ' грн';
    countEl.innerText = totalQty;
}

function changeCartQty(index, change)
{
    cart[index].qty += change;
    
    if (cart[index].qty <= 0) cart.splice(index, 1);
    
    updateCartUI();
}

document.addEventListener('click', () => { document.getElementById('cartWrapper')?.classList.remove('active'); });

function submitOrder()
{
    if (!cart.length)
    {
        alert("Кошик порожній");
        return;
    }

    let nameInput = document.getElementById('orderName');
    let phoneInput = document.getElementById('orderPhone');

    let customerName = nameInput.value.trim();
    let customerPhone = phoneInput.value.trim();

    if (!customerName || !customerPhone)
    {
        alert("Будь ласка, введіть імʼя та номер телефону");
        return;
    }

    let order =
    {
        orderId: "ORD-" + Date.now(),
        date: new Date().toLocaleString(),
        customer:
        {
            name: customerName,
            phone: customerPhone
        },
        items: cart.map(item => (
        {
            id: item.id,
            title: item.title,
            price: item.price,
            qty: item.qty,
            total: item.price * item.qty
        })),
        total: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    };

    downloadOrderFile(order);

    cart = [];
    nameInput.value = '';
    phoneInput.value = '';
    updateCartUI();
}

function downloadOrderFile(order)
{
    let dataStr = JSON.stringify(order, null, 2);
    let blob = new Blob([dataStr], { type: "application/json" });

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${order.orderId}.json`;

    link.click();

    URL.revokeObjectURL(link.href);
}

renderProducts();
updateCartUI();