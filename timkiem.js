const textValue = document.querySelector('#text-value');
const homeCardsP = document.querySelector('.home-cards-p');
const itemBox = document.querySelector('.item_box');
const timkiemBtn = document.querySelector('#timkiem-btn');

const normalizeString = str => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const searchValue = async searchText => {
    const res = await fetch('timkiem.json');
    const states = await res.json();

    const sanitizedSearchText = normalizeString(searchText);

    const searchRegex = new RegExp(`^${sanitizedSearchText}`, 'i');

    let matches = states.filter(state => {
        const normalizedHeader = normalizeString(state.header);
        const normalizedMain = normalizeString(state.main);
        return (
            searchRegex.test(normalizedHeader) || searchRegex.test(normalizedMain)
        );
    });

    if (searchText.length === 0) {
        matches = [];
        homeCardsP.style.display = 'block';
        itemBox.innerHTML = "";
    }

    outputHTML(matches);
};


const outputHTML = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => 
            `<div class="box_main">
            <a href="${match.a}"><img src="${match.src}"></a>
          <a href="${match.a}"><p class="${match.box_p}">${match.main}</p></a>
          <span class ="box_span">${match.box_span}</span><span class ="box_span_1">${match.box_span_1}</span> 
          <span class ="box_span_2">${match.box_span_2}</span><span class ="box_span_3">${match.box_span_1}</span>
          <hr class="${match.bar}">
          </div>`
            ).join('');
        
        homeCardsP.style.display = 'none';
        itemBox.innerHTML = html;  
    } else {
        homeCardsP.style.display = 'block';
        itemBox.innerHTML = "";
    }
};

textValue.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        searchValue(textValue.value);
    }
});

timkiemBtn.addEventListener('click', () => {
    searchValue(textValue.value);
});


