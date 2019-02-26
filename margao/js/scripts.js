// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("recipeLink");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', updateModalFields, false);
}

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";

    updateModalFields(this.id)
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";

    document.getElementById("video_field").src = ""


}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function updateModalFields() {

    var modalContents = {}

    switch (this.id) {
        case 'recipe_1':
            modalContents = recipesList_1;
            break;
        case 'recipe_2':
            modalContents = recipesList_2;
            break;
        case 'recipe_3':
            modalContents = recipesList_3;
            break;
        case 'recipe_4':
            modalContents = recipesList_4;
            break;
        case 'recipe_5':
            modalContents = recipesList_5;
            break;
        case 'recipe_6':
            modalContents = recipesList_6;
            break;
    }

    document.getElementById("modalContent").style.backgroundImage = modalContents.background_image
    document.getElementById("title_field").innerHTML = modalContents.title
    document.getElementById("video_field").src = modalContents.videoUrl
    document.getElementById("ingredients_field").innerHTML = modalContents.ingredients
    document.getElementById("procedure_field").innerHTML = modalContents.procedures


    var products = ''

    modalContents.products.forEach(function (product) {
        products  = products + fillProductHTLM(product)
    })

    document.getElementById("productsSectionMrg").innerHTML = products

    var contentWidth = 140 * modalContents.products.length
    console.log('contentWidth ', contentWidth)
    document.getElementById("productsSectionMrg").style.setProperty('width', contentWidth+'px')

    modal.style.display = "block";

}


function fillProductHTLM(product){

    var prodHTML = '<div class="productItemMrg">\n' +
        //'<a href="'+product.url+'" target="_blank">' +
        '<div class="productImageSection">' +
        '<img class="productRecipeImage" src="'+product.image+'"><br/>' +
        '</div>' +
        '<div class="productNameSection"><b>' +
        product.name +
        '</b> </div></div>' +
        //'</a>' +
        '</div>'


    //console.log('[fillProductHTLM] ', prodHTML)
    return prodHTML
}


/*
    Collapsible method
 */


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/**

 Recipes details

 */
var recipesList_1 = {
    title: 'TARTE DE CHOCOLATE E PIRIPIRI',
    videoUrl:"https://www.youtube.com/embed/PRhrIksOVLM",
    ingredients:    "300 g de bolachas digestivas<br>"+
        "4 c. sopa de chocolate em pó<br>"+
        "125 g de manteiga<br>"+
        "1 ovo inteiro<br>"+
        "5 gemas<br>"+
        "200 g de manteiga sem sal<br>"+
        "300 g de chocolate preto<br>"+
        "6 c. sopa de açúcar<br>"+
        "100 ml de óleo<br>"+
        "2 c. sopa de <span class='selected'>Piripíri (Malagueta<br>"+
        "Moída) Margão</span><br>"
    ,
    procedures: "Pré-aqueça o forno a 180ºC. <br>" +
        "Num robô, triture as bolachas com o chocolate em pó e a " +
        "manteiga amolecida até obter uma consistência de areia grossa.<br>" +
        "Forre o fundo e os lados de uma tarteira com esta mistura e leve " +
        "ao forno cerca de 10 minutos. Retire e reseve.<br>" +
        "Bata o ovo inteiro e as gemas com o açúcar numa taça até " +
        "formar um creme esbranquiçado.<br>" +

        "Numa taça de vidro, coloque a manteiga e por cima o chocolate " +
        "partido aos pedaços, e leve ao micro-ondas durante 2 minutos " +
        "(se o chocolate não tiver derretido coloque mais 30 segundos).<br>" +
        "Bata até obter uma consistência cremosa e brilhante. Em " +
        "seguida junte o piripíri e envolva bem.<br>" +
        "Por fim, adicione delicadamente a mistura de ovos e açúcar ao " +
        "chocolate. Verta este preparado na tarteira reservada e leve ao " +
        "forno cerca de 20 minutos. Retire e deixe arrefecer.<br>" +
        "Leve ao frio cerca de 3 horas. Pode decorar com frutos " +
        "vermelhos e malaguetas.<br>"
    ,
    products: [

        {
            image: '../assets/imgs/products/Piripiri.png',
            name:'Piripíri Moído',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003469(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        }
    ],
    background_image: "url('../assets/imgs/receitas/Tarte Chocolate.jpg')"

}


var recipesList_2 = {
    title: 'MASSA AL PESTO COM TOMATE',
    videoUrl:"https://www.youtube.com/embed/ra5GzZx3jvY",
    ingredients:"<span class='selected'>Moinho de Sal do Mediterrâneo Margão</span> q.b<br>"+
        "350 g de massa penne<br>"+
        "Azeite q.b.<br>"+
        "1 c. sobremesa de <span class='selected'>Segredos de Alho com Pimenta Margão </span><br>"+
        "1 c. sopa <span class='selected'>Orégãos Folhas Margão</span><br>"+
        "80 g de tomate seco<br>"+
        "120 g de queijo parmesão<br>"+
        "2 c sopa folhas de manjericão fresco<br>"+
        "1 c. sobremesa de <span class='selected'>Segredos Massas Margão</span><br>"+
        "1 colher de sopa <span class='selected'>Coentros Folha</span><br>"+
        "Amêndoas Laminadas Vahiné q.b.<br>"
    ,
    procedures: "Pré-aqueça o forno a 180ºC. <br>" +
        "Coloque água em abundância, num tacho grande, com sal e "+
        "deixe ferver. Coza a massa segundo as instruções da embalagem.<br>"+
        "Retire, escorra e volte a coloca-la no tacho com um fio de azeite "+
        "e o alho com pimenta.<br>"+
        "No robô de cozinha triture os oregãos, o tomate, o queijo, "+
        "o mangericão, o ‘segredo das massas’ e vá juntando azeite "+
        "devagar até obter uma pasta grossa homogénea.<br>"+
        "Envolva o pesto na massa e sirva decorado com as amêndoas.<br>"
    ,
    products: [

        {
            image: '../assets/imgs/products/Sal_mediterraneo.png',
            name:'Moinho de Sal<br>do Mediterrâneo',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=4722046(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Segredos_Alho_com_Pimenta.png',
            name:'Segredos<br>Alho com Pimenta',
            url: 'https://www.continente.pt/pt-pt/public/Pages/searchresults.aspx?k=Marg%C3%A3o&tct=Todas%20as%20Categorias#/?pl=80'
        },
        {
            image: '../assets/imgs/products/Oregaos_Folha.png',
            name:'Orégãos Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003408(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Coentros_Folha.png',
            name:'Coentros Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=4879602(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Segredos_Massas.png',
            name:'Segredos Massas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2401355(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        }
    ],
    background_image: "url('../assets/imgs/receitas/Massa al pesto.jpg')"

}


var recipesList_3 = {
    title: 'ARROZ DE TOMATE AROMÁTICO',
    videoUrl:"https://www.youtube.com/embed/ZHh5J6NwuwQ",
    ingredients:"1⁄2 cebola<br>"+
        "Azeite q.b.<br>"+
        "1 c. sobremesa de <span class='selected'>Alho Fumado Margão</span><br>"+
        "1⁄4 de pimento vermelho<br>"+
        "1 tomate<br>"+
        "1 folha de <span class='selected'>Louro Margão</span><br>"+
        "1 c. sopa de <span class='selected'>Salsa Folhas Margão</span><br>"+
        "1 c. sobremesa de <span class='selected'>Segredos Arroz de Tomate Margão</span><br>"+
        "1 c. sopa de <span class='selected'>Manjericão Folhas Margão</span><br>"+
        "300 g de arroz carolino<br>"+
        "2 c. sopa de polpa de tomate<br>"+
        "600 ml de água<br>"+
        "Folhas de mangericão fresco q.b.<br>"
    ,
    procedures: "Refogue a cebola num fio de azeite até ficar translucida. " +
        "Junte o alho, o pimento picado, " +
        "o tomate em cubinhos, o louro, a salsa em folhas " +
        "e os segredos de arroz. Deixe refogar bem cerca " +
        "de 5 minutos.<br>" +
        "Junte o arroz ao preparado e deixe fritar um pouco e ganhar cor. Adicione a polpa de tomate " +
        "e metade da água. Mexa bem e deixe cozinhar.<br>" +
        "Vá adicionando a restante água quando até terminar a cozedura do arroz. " +
        "Sirva com as folhas de manjericão.<br>"
    ,
    products: [

        {
            image: '../assets/imgs/products/Alho_Fumado.png',
            name:'Alho Fumado',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=6255372(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Louro_Folhas.png',
            name:'Louro Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003348(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Salsa_Folhas.png',
            name:'Salsa Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003475(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Segredos_Arroz_Tomate.png',
            name:'Segredos<br>Arroz de Tomate',
            url: 'https://www.continente.pt/pt-pt/public/Pages/searchresults.aspx?k=Marg%C3%A3o&tct=Todas%20as%20Categorias#/?pl=80'
        },
        {
            image: '../assets/imgs/products/Manjericao_Folhas.png',
            name:'Manjericão Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=5585691(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        }
    ],
    background_image: "url('../assets/imgs/receitas/Arroz de Tomate.jpg')"

}


var recipesList_4 = {
    title: 'O NOSSO BACALHAU TORRICADO',
    videoUrl:"https://www.youtube.com/embed/6Z8Q2hjLNhY",
    ingredients:
        "1 c. sopa de <span class='selected'>Manjericão Margão</span><br>" +
        "1 c. sopa de <span class='selected'>Cebolinho Margão</span><br>" +
        "1 c. sopa de <span class='selected'>Salsa Folhas Margão</span><br>" +
        "1 c. sopa de <span class='selected'>Alho Picado Margão</span><br>" +
        "8 fatias finas de broa<br>" +
        "800 g de bacalhau cozido desfiado<br>" +
        "1 chávena de azeitonas pretas picadas<br>" +
        "<span class='selected'>Moinho de Sal do Mediterrâneo Margão q.b.</span><br>"

    ,
    procedures: "Numa taça coloque um fio de azeite e adicione as ervas e o alho.<br>"+
        "Junte um pouco mais de azeite de modo a conseguir ensopar "+
        "as fatias de broa nesta mistura.<br>"+
        "Num tabuleiro de forno alterne camadas de broa embebida "+
        "no azeite e ervas com lascas de bacalhau desfiado e azeitonas "+
        "picadas.<br>"+
        "Leve ao forno cerca de 10 minutos. Sirva regado com azeite, "+
        "um toque de sal do moinho Margão e polvilhe com mais ervas "+
        "a gosto.<br>"
    ,
    products: [
        {
            image: '../assets/imgs/products/Manjericao_Folhas.png',
            name:'Manjericão Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=5585691(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Cebolinho.png',
            name:'Cebolinho',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=4026393(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Salsa_Folhas.png',
            name:'Salsa Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003475(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Alho_Picado.png',
            name:'Alho Picado',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003217(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Sal_mediterraneo.png',
            name:'Moinho de Sal<br>do Mediterrâneo',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=4722046(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },

    ],
    background_image: "url('../assets/imgs/receitas/Bacalhau torricado.jpg')"

}


var recipesList_5 = {
    title: 'BARQUINHOS DE PESCADA E PIRIPIRI',
    videoUrl:"https://www.youtube.com/embed/4G_nOOt5_HA",
    ingredients:
        "4 lombos de pescada <br>"+
        "1 c. sopa de <span class='selected'>Segredos do Mundo <br>"+
        "México Margão </span><br>"+
        "1 c. chá de <span class='selected'>Alho Picado Margão</span> <br>"+
        "1⁄4 couve roxa <br>"+
        "1⁄2 cebola roxa <br>"+
        "1⁄2 chávena de maionese <br>"+
        "1 c. sopa de mostada <br>"+
        "2 c. sopa de azeite <br>"+
        "1 c. sopa de <span class='selected'>Salsa Folhas Margão </span><br>"+
        "Pimenta-Verde q.b. <br>"+
        "8 barquinhos de tortilha de trigo mexicanos <br>"+
        "2 chávenas de rúcula <br>"+
        "1 c. chá de <span class='selected'>Piripíri (Malagueta Moída) Margão </span><br>"
    ,
    procedures: "Tempere os lombos de pescada com os sabores do mundo " +
        "méxico e regue com um fio de azeite e o sumo de lima.<br>" +
        "Deixe marinar cerca de 30 minutos. " +
        "Enquanto isso ripe a couve e corte a cebola em meias luas finas.<br>" +
        "Disponha numa taça e junte a maionese, a mostarda, o azeite " +
        "e envolva tudo muito bem. Tempere com a salsa e a pimenta-" +
        "-verde a gosto.<br>" +
        "Numa frigideira com um pouco de água coza a pescada. Reserve.<br>" +
        "Monte os tacos, colocando nos barquinhos de tortilhas uma " +
        "cama da salada de couve roxa, seguida de rúcula a gosto e lascas " +
        "de pescada. <br>" +
        "Polvilhe tudo com piripíri a gosto.<br>"
    ,
    products: [
        {
            image: '../assets/imgs/products/Segredos_Mexico.png',
            name:'Segredos<br>do Mundo México',
            url: 'https://www.continente.pt/pt-pt/public/Pages/searchresults.aspx?k=Marg%C3%A3o&tct=Todas%20as%20Categorias#/?pl=80'
        },
        {
            image: '../assets/imgs/products/Alho_Picado.png',
            name:'Alho Picado',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003217(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Salsa_Folhas.png',
            name:'Salsa Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003475(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Piripiri.png',
            name:'Piripíri Moído',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003469(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        }

    ],
    background_image: "url('../assets/imgs/receitas/Barquinhos de pescada.jpg')"

}


var recipesList_6 = {
    title: 'PERNA DE BORREGO COM ESPECIARIAS',
    videoUrl:"https://www.youtube.com/embed/r1xZWrJdwj8",
    ingredients:
        "1 perna de borrego de 1,2 kg<br>" +
        "Azeite q.b.<br>" +
        "3 c. sopa de Mostarda Moída<br>" +
        "2 c. sopa de pasta de tomate<br>" +
        "1⁄2 limão (sumo)<br>" +
        "2 c. sopa de <span class='selected'>Segredos Alho e Salsa Margão</span><br>" +
        "1 c. sopa de <span class='selected'>Segredos do Mundo Oriental Margão</span><br>" +
        "2 folhas de <span class='selected'>Louro Margão</span><br>" +
        "1⁄2 chávena de vinho branco<br>" +
        "200 g de pistácios<br>" +
        "1 c. sopa de <span class='selected'>Alho Picado Margão</span><br>" +
        "1 c. sopa de <span class='selected'>Segredos Tomilho<br>" +
        "e Limão Margão</span><br>" +
        "500 g de cenouras baby<br>" +
        "4 c. sopa de açúcar amarelo<br>" +
        "2 c. sopa de vinagre balsâmico<br>" +
        "2 c. sopa de manteiga<br>" +
        "1 c. sopa de <span class='selected'>Tomilho Folhas Margão</span><br>" +
        "1 c. chá de <span class='selected'>Alecrim Margão</span><br>"
    ,
    procedures:
        "Tempere a perna de borrego com um fio de azeite, a mostarda, "+
        "a pasta de tomate, o sumo de limão. Polvilhe com os segredos " +
        "de alho e salsa, os segredos do mundo Oriental e o louro.<br> " +
        "Coloque num tabuleiro e adicione na base o vinho branco. <br>" +
        "Num robô de cozinha triture os pistácios, o alho, os segredos " +
        "do tomilho e limão, um fio de azeite. Coloque sobre um lado " +
        "do borrego de forma a fazer uma crosta. " +
        "Leve ao forno a 170º C durante cerca de 1 hora. <br>" +
        "Ferva as cenouras durante 4 minutos e coe a água. <br>" +
        "Numa frigideira coloque o açúcar, e quando este derreter, " +
        "adicione o vinagre e a manteiga. <br>" +
        "Adicione as cenouras, o tomilho e o alecrim e salteie. Sirva " +
        "o borrego com as cenouras salteadas.<br>"
    ,
    products: [
        {
            image: '../assets/imgs/products/Segredos_Alho_E_Salsa.png',
            name:'Segredos<br>Alho e Salsa',
            url: 'https://www.continente.pt/pt-pt/public/Pages/searchresults.aspx?k=Marg%C3%A3o&tct=Todas%20as%20Categorias#/?pl=80'
        },
        {
            image: '../assets/imgs/products/Segredos_Mundo_Oriental.png',
            name:'Segredos do<br>Mundo Oriental',
            url: 'https://www.continente.pt/pt-pt/public/Pages/searchresults.aspx?k=Marg%C3%A3o&tct=Todas%20as%20Categorias#/?pl=80'
        },
        {
            image: '../assets/imgs/products/Louro_Folhas.png',
            name:'Louro Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003348(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Alho_Picado.png',
            name:'Alho Picado',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003217(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Segredos_Tomilho_E_Limao.png',
            name:'Segredos<br>Tomilho e Limão',
            url: 'https://www.continente.pt/pt-pt/public/Pages/searchresults.aspx?k=Marg%C3%A3o&tct=Todas%20as%20Categorias#/?pl=80'
        },
        {
            image: '../assets/imgs/products/Alecrim.png',
            name:'Alecrim',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2003213(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        },
        {
            image: '../assets/imgs/products/Tomilho_Folhas.png',
            name:'Tomilho Folhas',
            url: 'https://www.continente.pt/stores/continente/pt-pt/public/Pages/ProductDetail.aspx?ProductId=2014601(eCsf_RetekProductCatalog_MegastoreContinenteOnline_Continente)'
        }

    ],
    background_image: "url('../assets/imgs/receitas/Perna de Borrego.jpg')"

}