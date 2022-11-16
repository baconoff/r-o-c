class Header {
  render() {

    const htmlHeader = `
            <img class='header__image' src='../img/car_ico.png' />
            <h1 class='header__title'>Rent-O-Car</h1>
            <ul class='header__links'>
                <a href='https://vk.com/bacon_off' class='header__link' id='VK'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3333 3333"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                >
                <path
                        d="M1667 0c460 0 877 187 1179 488 302 302 488 718 488 1179 0 460-187 877-488 1179-302 302-718 488-1179 
                    488-460 0-877-187-1179-488C186 2544 0 2128 0 1667c0-460 187-877 488-1179C790 186 1206 0 1667 0zm941 1201c14-47 
                    0-81-66-81h-220c-56 0-82 30-96 62 0 0-112 272-270 449-51 51-74 67-102 
                    67-14 0-35-16-35-63v-435c0-56-15-81-62-81h-345c-35 0-56 26-56 50 0 53 79 65 87 214v324c0 71-13 
                    84-41 84-74 0-256-274-363-587-21-61-42-85-98-85H721c-63 0-75 30-75 62 0 58 74 347 347 729 182 261 437 402 670 402 140 0 157-31 
                    157-85v-197c0-63 13-75 57-75 33 0 88 16 219 142 149 149 174 216 257 216h220c63 0 94-31 76-93-20-62-91-151-185-257-51-61-128-126-151-158-33-42-23-61 
                    0-98 0 0 268-377 296-505zm152-628c-280-280-666-453-1093-453S853 293 574 573c-280 280-453 666-453 1093s173 814 453 1093c280 280 666 453 1093 453s814-173 
                    1093-453c280-280 453-666 453-1093s-173-814-453-1093z"
                        fill-rule="nonzero"
                    />
                </svg>
                </a>

                <a href='https://facebook.com' class='header__link' id='Facebook'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3333 3333"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    ><path
                        d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm186 1117h311V744h-311c-240 
                        0-435 195-435 
                        435v186h-249v373h249v994h373v-994h311l62-373h-373v-186c0-34 28-62 62-62z"
                    /></svg>
                </a>

                <a href='https://instagram.com/bacon_off' class='header__link' id='Instagram'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3333 3333"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                >
                <path
                    d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-390 752h780c293 0 532 237 532 525v778c0 289-239 525-532 525h-780c-293 0-532-236-532-525v-778c0-289 240-525 532-525zm385 421c285 0 516 231 516 516s-231 516-516 516-516-231-516-516 231-516 516-516zm0 174c188 0 341 153 341 341s-153 341-341 341c-189 0-341-153-341-341s153-341 341-341zm499-246c46 0 84 37 84 84 0 46-37 84-84 84-46 0-84-37-84-84 0-46 37-84 84-84zm-820-200h652c245 0 445 199 445 443v656c0 244-200 443-445 443h-652c-245 0-445-199-445-443v-656c0-244 200-443 445-443z"
                    />
                </svg>
              
                </a>
            </ul>
        `;

        const html = `
        <div class='header-container'>
        ${htmlHeader}
        </div>
        `;
        
            ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
headerPage.render();
