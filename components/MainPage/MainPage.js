class MainPage {
    render() {

    let htmlCatalogueTypes = '';

    CATALOGUETYPES.forEach(({ id, name, img, text }) => {
        
        htmlCatalogueTypes += `
            <li class='card'>
                <a href='#' class='card__link'>
                    <img class='card__img' src='${img}'/>
                    <span class='card__text'>${text}</span>
                </a>
            </li>
        `;
    });

    const html = `
    <ul class='cards'>
        ${htmlCatalogueTypes}
    </ul>
`;

    ROOT_MAINPAGE.innerHTML = html;

  }
}

const htmlCatalogueTypes = new MainPage();
htmlCatalogueTypes.render();