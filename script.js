// 100 қызықты локация тізімі
const locations = [
    "Мектеп", "Аурухана", "Цирк", "Ғарыш станциясы", "Дубай", "Мешіт", "Пирамида", 
    "Сауна", "Түрме", "Кітапхана", "Әуежай", "Поезд", "Су асты қайығы", "Банк", 
    "Мейрамхана", "Қонақ үй", "Театр", "Полиция бөлімшесі", "Әскери база", "Жанармай бекеті",
    "Сауда орталығы", "Стадион", "Музей", "Зоопарк", "Түнгі клуб", "Кинотеатр", 
    "Фитнес залы", "Университет", "Автобус", "Ұшақ", "Кеме", "Орман", "Тау", 
    "Жағажай", "Шахта", "Құрылыс алаңы", "Ферма", "Наубайхана", "Сұлулық салоны", 
    "Тәттілер дүкені", "Сот", "Парламент", "Эйфель мұнарасы", "Ұлттық парк", 
    "Шахмат клубы", "Компьютер клубы", "Гараж", "Саяжай", "Балық аулау орны",
    "Мұз айдыны", "Аквапарк", "Тікұшақ", "Цирк шатыры", "Жер асты бункері",
    "Ғылыми лаборатория", "Аспан астындағы мейрамхана", "Қарлы тау шыңы", 
    "Тропикалық арал", "Ежелгі қамал", "Кітап дүкені", "Гүл дүкені", "Автосалон",
    "Фотостудия", "Татту салоны", "Концерт залы", "Көрме", "Карнавал",
    "Пицца орталығы", "Супермаркет", "Аптека", "Базар", "Медеу мұз айдыны",
    "Шымбұлақ", "Цирк", "Аквариум", "Планетарий", "Көлік жуу орны",
    "Ойыншықтар дүкені", "Спорт дүкені", "Кофехана", "Асхана", "Тіс дәрігері",
    "Сән үйі", "IT кеңсе", "Қойма", "Архив", "Радио станциясы", "Телестудия",
    "Киіз үй", "Көк базар", "Астана Опера", "Бәйтерек", "Хан Шатыр",
    "Шарын шатқалы", "Қайыңды көлі", "Алакөл", "Бурабай", "Каспий жағалауы"
];

let players = [];
let currentIndex = 0;

function startGame() {
    const input = document.getElementById('playerCount');
    const count = parseInt(input.value);

    if (isNaN(count) || count < 3) {
        alert("Ең кемі 3 ойыншы болуы керек!");
        return;
    }

    const randomLoc = locations[Math.floor(Math.random() * locations.length)];
    const spyIndex = Math.floor(Math.random() * count);

    players = [];
    for (let i = 0; i < count; i++) {
        players.push(i === spyIndex ? "ШПИОН 🕵️" : randomLoc);
    }

    currentIndex = 0;
    document.getElementById('setup').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    updateUI();
}

function updateUI() {
    if (currentIndex >= players.length) {
        document.getElementById('game').innerHTML = "<h1>Ойын басталды!</h1><p>Шпионды табыңдар!</p><button onclick='location.reload()'>Жаңа ойын</button>";
        return;
    }
    document.getElementById('player-num').innerText = `${currentIndex + 1}-ші ойыншы`;
    document.getElementById('wordBox').innerText = players[currentIndex];
    document.getElementById('cardInner').classList.remove('is-flipped');
}

function toggleCard() {
    const card = document.getElementById('cardInner');
    if (!card.classList.contains('is-flipped')) {
        card.classList.add('is-flipped');
    } else {
        currentIndex++;
        updateUI();
    }
}
