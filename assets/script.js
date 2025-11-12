// Анимация
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.15 });

      reveals.forEach(el => obs.observe(el));
  } else {
      // Для старых браузеров просто показать сразу
      reveals.forEach(el => el.classList.add("visible"));
  }
});

// Блок услуги
document.addEventListener('DOMContentLoaded', () => {
  const services = [
    {
      title: 'Монтаж электрики',
      description:
        'Проектирование электропроводки, монтаж кабелей и оборудования, подключение щитка и освещения.',
      image: 'img/services/Монтаж электрики.webp'
    },
    {
      title: 'Малярные работы',
      description:
        'Грунтовка, шпатлевка, шлифовка и покраска стен и потолков, а также декоративные покрытия.',
      image: 'img/services/Малярные работы.webp'
    },
    {
      title: 'Укладка кварц винила',
      description:
        'Подготовка подложки, резка и укладка кварц винила, аккуратные стыки, финишная защита и контроль качества.',
      image: 'img/services/Укладка кварц винила.webp'
    },
    {
      title: 'Сантехнические работы',
      description:
        'Установка и замена труб, монтаж сантехники и смесителей, подключение узлов водоснабжения и отопления, проверка герметичности.',
      image: 'img/services/Сантехнические работы.webp'
    },
    {
      title: 'Бетонные работы',
    description:
    'Монолитные полы и конструкции, армирование, выравнивание поверхности, гидроизоляционные мероприятия и контроль качества растворов.',
    image: 'img/services/Бетонные работы.webp'
    },
  {
    title: 'Плиточные работы',
    description:
      'Укладка керамической плитки и камня на полах и стенах, резка и подгонка плитки, затирка швов, финальная герметизация.',
    image: 'img/services/Плиточные работы.webp'
  },
  {
    title: 'Строительство загородных домов',
    description:
      'Строительство под ключ: от проекта и фундамента до кровли, включая каркас, отделку и сдачу заказчику.',
    image: 'img/services/Строительство загородных домов.webp'
  },
  {
    title: 'Услуги дизайнера',
    description:
      'Концептуальный и детализированный дизайн под ваш стиль и бюджет, включая подбор материалов, света и мебели',
    image: 'img/services/Услуги дизайнера.webp'
  },
  {
    title: 'Услуги архитектора',
    description:
      'Полный пакет процессов от идеи до рабочей документации, архитектурный концепт, фасады, разрезы',
    image: 'img/services/Услуги архитектора.webp'
  }
  ];

const grid = document.getElementById('services-grid');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

services.forEach((item, idx) => {
  const col = document.createElement('div');
  col.className = 'service';

  const card = document.createElement('div');
  card.className = 'card service-card';
  card.style.backgroundImage = `url('${item.image}')`;
  card.setAttribute('role', 'img');
  card.setAttribute('aria-label', item.title);

  const body = document.createElement('div');
  body.className = 'card-body d-flex flex-column';

  const titleEl = document.createElement('h5');
  titleEl.className = 'fw-semibold';
  titleEl.textContent = item.title;

  const descEl = document.createElement('p');
  descEl.className = 'service-desc';
  descEl.style.setProperty('--delay', `${idx * 100}ms`);
  descEl.textContent = item.description;

  body.appendChild(titleEl);
  body.appendChild(descEl);
  card.appendChild(body);
  col.appendChild(card);
  grid.appendChild(col);
  observer.observe(descEl);
});
});

// Валидация формы
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// копка вверх
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 0|| document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      btn.style.bottom = "50px";
    } else {
      btn.style.bottom = "50px";
    }
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
