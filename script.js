const locations = [
    // Тұлғалар мен Блогерлер
    "Димаш Құдайберген", "Геннадий Головкин", "Нұрлан Сабуров", "Скриптонит", "Jah Khalib", 
    "Ерке Есмахан", "Райм", "Қайрат Нұртас", "Төреғали Төреәлі", "Динара Сәтжан", 
    "Мейіржан Төребаев", "Куат Хамитов", "Сәбитке кел", "Асхат Қазақстан", "Zheka Fatbelly",
    "Дана Есеева", "Олжас Абай", "Байзакова", "Аминка Витаминка", "Ирина Кайратовна",
    "Моргенштерн KZ фан", "Adam", "Dequine", "Ninety One", "Mad Men", "Say Mo",

    // Қалалар мен Жерлер
    "Медеу", "Шымбулақ", "Бәйтерек", "Хан Шатыр", "Көк Базар", "Арбат (Алматы)", 
    "Панфилов көшесі", "Алакөл", "Бурабай", "Балқаш", "Каспий теңізі", "Шарын шатқалы", 
    "Түркістан (Кесене)", "Ақтау (Скальная тропа)", "Шымкент (Зоопарк)", "Өскемен (Ертіс)",
    "Қарағанды (Шахтер)", "Атырау (Көпір)", "Тараз (Көне қала)", "Семей (Аспалы көпір)",
    "Алматы Арена", "Астана Арена", "EXPO", "Mega Silk Way", "Esentai Mall",

    // Трендтер мен Мемдер
    "iPhone 16 Pro Max", "Kaspi Gold", "Sergek", "Lexus 570", "Toyota Camry 70", 
    "Тамада", "Құдалық", "Бешбармақ", "Той", "Беташар", "Қалжа", 
    "Диплом қорғау", "Общага", "Түнгі студия", "TikTok Хаус", 
    "Wildberries", "AirPods", "Tesla", "Донер",

    // Күнделікті орындар
    "ЦОН", "Автоцон", "Magnum", "Small", "KFC", "Starbucks", 
    "Кинопарк", "ТРЦ MEGA", "Достық Плаза", "Жасыл базар", "Вокзал", "Әуежай (VIP)",
    "Аптека", "Стоматология", "Барбершоп", "Салон красоты", "Фитнес клуб",
    "Бассейн", "Сауна", "Ломбард", "Химчистка", "Коворкинг",

    // Мамандар
    "Аким", "Депутат", "Блогер", "Вайнер", "Мобилограф", "Таргетолог", "ИТ-шник", 
    "Инспектор", "Прокурор", "Таксист (InDrive)", "Курьер (Glovo)", "Официант",
    "Бариста", "СММ маман", "Дизайнер", "Программист", "Монтажер",

    // Қосымша локациялар
    "Тіс дәрігері", "Түрме", "Ұшақ", "Су асты кемесі", "Ғарыш", "Орман", "Мектеп", 
    "Университет", "Сот залы", "Армия", "Шекара", "Мұражай", "Цирк", "Аквапарк",
    "Стадион", "Кинотеатр", "Қонақ үй", "Пляж",
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
        document.getElementById('game').innerHTML = `
            <h1 style="margin-top:50px;">Ойын басталды! 🕵️‍♂️</h1>
            <p style="color:#bdc3c7; font-size:18px;">Шпионды табыңдар!</p>
            <button onclick="location.reload()" style="margin-top:20px; background:#27ae60;">Жаңа ойын бастау</button>
        `;
        return;
    }

    const cardInner = document.getElementById('cardInner');
    cardInner.classList.remove('is-flipped');

    setTimeout(() => {
        document.getElementById('player-num').innerText = `${currentIndex + 1}-ші ойыншы`;
        document.getElementById('wordBox').innerText = players[currentIndex];
        document.getElementById('instruction').innerText = "Келесі ойыншыға беріңіз";
    }, 400); 
}

function toggleCard() {
    const cardInner = document.getElementById('cardInner');
    
    if (!cardInner.classList.contains('is-flipped')) {
        cardInner.classList.add('is-flipped');
        document.getElementById('instruction').innerText = "Келесі ойыншыға өту үшін тағы бір рет бас";
    } else {
        currentIndex++;
        updateUI();
    }
}
