function login(event) {
  event.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'admin' && pass === '1234') {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    alert('ভুল তথ্য');
  }
}

function addNews(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const newsList = JSON.parse(localStorage.getItem('news') || '[]');
  newsList.push({ title, content });
  localStorage.setItem('news', JSON.stringify(newsList));
  alert('সংবাদ যোগ হয়েছে!');
}

function addAd(event) {
  event.preventDefault();
  const adText = document.getElementById('adText').value;
  localStorage.setItem('ad', adText);
  alert('বিজ্ঞাপন যোগ হয়েছে!');
}

if (document.getElementById('news-container')) {
  const newsList = JSON.parse(localStorage.getItem('news') || '[]');
  const container = document.getElementById('news-container');
  const ad = localStorage.getItem('ad');

  if (ad) {
    const adDiv = document.createElement('div');
    adDiv.style = 'background: yellow; padding: 10px; margin: 10px 0;';
    adDiv.innerText = 'বিজ্ঞাপন: ' + ad;
    container.appendChild(adDiv);
  }

  newsList.forEach(news => {
    const div = document.createElement('div');
    div.style = 'background: white; padding: 10px; margin-bottom: 10px;';
    div.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
    container.appendChild(div);
  });
}
