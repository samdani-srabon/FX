const newsContainer = document.getElementById('news-container');

fetch('https://nfs.faireconomy.media/ff_calendar_thisweek.json')
  .then(response => response.json())
  .then(data => {
    const highImpactNews = data.filter(news =>
      news.impact === 'High' && (news.country === 'EUR' || news.country === 'USD')
    );

    highImpactNews.forEach(news => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');

      const title = document.createElement('h2');
      title.textContent = news.title;

      const date = document.createElement('p');
      date.textContent = new Date(news.date).toLocaleString();

      newsItem.appendChild(title);
      newsItem.appendChild(date);
      newsContainer.appendChild(newsItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
