document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const selectedCategory = this.id;
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const categories = card.dataset.category.split(',');
            
            if (selectedCategory === 'all-directions' || categories.includes(selectedCategory)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cards = document.querySelectorAll('.card');

function searchCards() {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const profession = card.querySelector('.profession').textContent.toLowerCase();
        if (profession.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

searchBtn.addEventListener('click', searchCards);
searchInput.addEventListener('input', searchCards);

let regionn = localStorage.getItem('region')
let nam= localStorage.getItem('nam')
let famm = localStorage.getItem('fam')

document.getElementById('region').innerHTML = regionn;
document.getElementById('fio').innerHTML = (nam + " " + famm);