const cars = [
    {
        model: "ВАЗ-2101",
        year: 1970,
        from_to: "1970 по 1988",
        characteristics: "Двигатель 1.2L, 62 л.с., 4-ступ. МКПП",
        sales: 4800000,
        image: "vaz-2101.jpg"
    },
    {
        model: "ВАЗ-2106",
        year: 1976,
        from_to: "1976 по 2006",
        characteristics: "Двигатель 1.6L, 75 л.с., 4-ступ. МКПП",
        sales: 4300000,
        image: "vaz-2106.jpg"
    },
    {
        model: "ВАЗ-2109",
        year: 1987,
        from_to: "1987 по 2004",
        characteristics: "Двигатель 1.3L, 64 л.с., 5-ступ. МКПП",
        sales: 3400000,
        image: "vaz-2109.jpg"
    },
    {
        model: "ВАЗ-2110",
        year: 1995,
        from_to: "1996 по 2015",
        characteristics: "Двигатель 1.5L, 79 л.с., 5-ступ. МКПП",
        sales: 2900000,
        image: "vaz-2110.jpg"
    },
    {
        model: "ВАЗ-2114",
        year: 2001,
        from_to: "2003 по 2013",
        characteristics: "Двигатель 1.6L, 81 л.с., 5-ступ. МКПП",
        sales: 2100000,
        image: "vaz-2114.jpg"
    },
    {
        model: "ВАЗ-2115",
        year: 1997,
        from_to: "1997 по 2012",
        characteristics: "Двигатель 1.5L, 77 л.с., 5-ступ. МКПП",
        sales: 1800000,
        image: "vaz-2115.jpg"
    },
    {
        model: "Lada Granta",
        year: 2011,
        from_to: "2011 по ???",
        characteristics: "Двигатель 1.6L, 87-106 л.с., 5-ступ. МКПП/АКПП",
        sales: 1500000,
        image: "lada-granta.jpg"
    },
    {
        model: "Lada Vesta",
        year: 2015,
        from_to: "2015 по ???",
        characteristics: "Двигатель 1.6L-1.8L, 106-122 л.с., 5-ступ. МКПП/ВАРИАТОР",
        sales: 900000,
        image: "lada-vesta.png"
    },
    {
        model: "Lada Largus",
        year: 2012,
        from_to: "2012 по 2022",
        characteristics: "Двигатель 1.6L, 84-106 л.с., 5-ступ. МКПП",
        sales: 600000,
        image: "lada-largus.png"
    },
    {
        model: "Lada Niva",
        year: 1977,
        from_to: "1997 по ???",
        characteristics: "Двигатель 1.7L, 80 л.с., 5-ступ. МКПП, полный привод",
        sales: 2500000,
        image: "lada-niva.jpg"
    }
];

function searchCar() {
    const carName = document.getElementById('carName').value.trim();
    const foundCar = cars.find(car => 
        car.model.toLowerCase() === carName.toLowerCase()
    );
    
    if (foundCar) {
        localStorage.setItem('selectedCar', JSON.stringify(foundCar));
        window.location.href = 'car.html';
    } else {
        alert('Автомобиль не найден! Используйте названия из списка ниже.');
    }
}

function loadCarInfo() {
    const carData = localStorage.getItem('selectedCar');
    const carContent = document.getElementById('carContent');
    
    if (carData) {
        const car = JSON.parse(carData);
        
        carContent.innerHTML = `
            <div class="car-info">
                <div class="car-image">
                    <img src="images/${car.image}" alt="${car.model}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5ldCBmb3RvPC90ZXh0Pjwvc3ZnPg=='">
                </div>
                <div class="car-details">
                    <h3>${car.model}</h3>
                    <div class="info-row">
                        <strong>Начало производства</strong> ${car.year}
                    </div>
                    <div class="info-row">
                        <strong>Годы выпуска</strong> ${car.from_to}
                    </div>
                    <div class="info-row">
                        <strong>Характеристики:</strong> ${car.characteristics}
                    </div>
                    <div class="info-row">
                        <strong>Продано:</strong> ${car.sales.toLocaleString()} единиц
                    </div>
                </div>
            </div>
        `;
    } else {
        carContent.innerHTML = '<p class="error-message">Автомобиль не найден</p>';
    }
}

function goBack() {
    window.location.href = 'index.html';
}


if (window.location.pathname.includes('car.html')) {
    window.onload = loadCarInfo;
}
