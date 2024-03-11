const reviews = [
    {
      id: 1,
      name: 'Michael Jordan',
      job: 'basketball shoes',
      img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/893.png',
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aut odit, esse eaque ratione vel aliquid sit, rerum tempora laboriosam maxime cum facere repellendus quidem.",
    },
    {
      id: 2,
      name: 'Jordan Belfort',
      job: 'Financial Advisor',
      img: 'https://media.gq-magazine.co.uk/photos/5fa964286d0e5689dfabb0fc/1:1/w_934,h_934,c_limit/WOLFOFWALLSTREETWATCH_HP.jpg',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aut odit, esse eaque ratione vel aliquid sit, rerum tempora laboriosam maxime cum facere repellendus quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aut odit, esse eaque ratione vel aliquid sit, rerum tempora laboriosam maxime cum facere repellendus quidem.',
    },
    {
      id: 3,
      name: 'Walter White',
      job: 'Teacher',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aut odit, esse eaque ratione vel aliquid sit, rerum tempora laboriosam maxime cum facere repellendus quidem.',
    },
    {
      id: 4,
      name: 'Andy Dufresne',
      job: 'Bank Officer',
      img: 'https://static1.personality-database.com/profile_images/9d7c51322a524bec8caf0cb7dc503106.png',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aut odit, esse eaque ratione vel aliquid sit, rerum tempora laboriosam maxime cum facere repellendus quidem.',
    },
    {
      id: 5,
      name: 'Dr. Watson',
      job: 'Doctor',
      img: 'https://cdn.kayiprihtim.com/wp-content/uploads/2022/10/doktor-watson-dizisi-sherlock.jpg',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aut odit, esse eaque ratione vel aliquid sit, rerum tempora laboriosam maxime cum facere repellendus quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, aut odit, esse eaque ratione vel aliquid sit, rerum tempora laboriosam maxime cum facere repellendus quidem.',
    },
  ];
  
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const comment = document.getElementById('comment');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  
  let currentItem = 0;

  window.addEventListener('DOMContentLoaded', () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    comment.textContent = item.text;
  });

  function showPerson(personIndex) {
    const item = reviews[personIndex];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    comment.textContent = item.text;
  }
  
  prevBtn.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem)
  })

  nextBtn.addEventListener('click', () => {
    currentItem++
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem)
  })