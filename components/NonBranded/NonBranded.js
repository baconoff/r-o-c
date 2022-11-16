class NonBranded {
    render() {

    let htmlCatalogue = '';

    CATALOGUE.forEach(({ id, name, img, price1, price2, price3 }) => {
        
        htmlCatalogue += `
            <li class='card'>
                <span class='card__title'>${name}</span>
                <img class='card__img' src='${img}'/>
                <div> 
                    <span class='card__price-type-title'>До 7 дней</span>
                    <span class='card__price-type-title'>до 14 дней</span>
                    <span class='card__price-type-title'>От 30 дней</span>
                </div>
                <div class='card__price-types'>
                    <span class='card__price-type'>${price1}</span>
                    <span class='card__price-type'>${price2}</span>
                    <span class='card__price-type'>${price3}</span>
                </div>
                <button class='card__button'>Арендовать</button>
            </li>
        `;
    });

    const html = `
    <ul class='cards'>
        ${htmlCatalogue}
    </ul>
`;

    ROOT_NONBRANDED.innerHTML = html;

  }
}

const htmlCatalogue = new NonBranded();
htmlCatalogue.render();