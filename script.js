// --- DADOS DINÂMICOS DO SITE (MOCK DATA) ---
const imgGenerica1 = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800";
const imgGenerica2 = "https://images.unsplash.com/photo-1535262412227-85541e910204?auto=format&fit=crop&w=800";
const imgGenerica3 = "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800";
const imgGenerica4 = "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800";

const DATA = {
    destinos: [
        { nome: "Jurerê Internacional", desc: "Luxo, beach clubs sofisticados e mansões à beira-mar.", img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800", cat: "Norte" },
        { nome: "Santo Antônio de Lisboa", desc: "Cultura açoriana, arquitetura preservada e o melhor pôr-do-sol.", img: imgGenerica1, cat: "Norte" },
        { nome: "Praia do Campeche", desc: "Natureza selvagem, ondas perfeitas e a mística Ilha do Campeche.", img: "https://images.unsplash.com/photo-1582291142747-19412953e34b?auto=format&fit=crop&w=800", cat: "Sul" }
    ],
    praias: [
        // --- NORTE DA ILHA ---
        { nome: "Jurerê", desc: "Águas calmas e quentes, excelente para famílias com excelente infraestrutura.", regiao: "Norte", img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800", temp: "25°C", lotacao: "Alta" },
        { nome: "Jurerê Internacional", desc: "Sinónimo de luxo, mansões e beach clubs exclusivos com festas sunset.", regiao: "Norte", img: imgGenerica1, temp: "25°C", lotacao: "Muito Alta" },
        { nome: "Canasvieiras", desc: "Um dos destinos mais procurados por turistas do Mercosul, mar tranquilo e comércio forte.", regiao: "Norte", img: imgGenerica2, temp: "24°C", lotacao: "Muito Alta" },
        { nome: "Cachoeira do Bom Jesus", desc: "Extensão de Canasvieiras, com faixa de areia larga e águas convidativas.", regiao: "Norte", img: imgGenerica3, temp: "24°C", lotacao: "Média" },
        { nome: "Ponta das Canas", desc: "Praia charmosa na ponta norte da ilha com colónias de pescadores.", regiao: "Norte", img: imgGenerica4, temp: "23°C", lotacao: "Média" },
        { nome: "Lagoinha (do Norte)", desc: "Pequena e abrigada, com formato de ferradura e mar cristalino.", regiao: "Norte", img: imgGenerica1, temp: "24°C", lotacao: "Média" },
        { nome: "Praia Brava", desc: "Paraíso dos surfistas com mar agitado, miradouro deslumbrante e condomínios de luxo.", regiao: "Norte", img: imgGenerica2, temp: "22°C", lotacao: "Alta" },
        { nome: "Praia dos Ingleses", desc: "Infraestrutura completa, dunas incríveis e ótima para todas as idades.", regiao: "Norte", img: imgGenerica3, temp: "23°C", lotacao: "Muito Alta" },
        { nome: "Praia do Santinho", desc: "História e natureza encontram-se. Famosa pelo resort e pelas inscrições rupestres.", regiao: "Norte", img: imgGenerica4, temp: "23°C", lotacao: "Alta" },
        { nome: "Praia do Forte", desc: "Junto à histórica Fortaleza de São José da Ponta Grossa. Mar calmo e extenso.", regiao: "Norte", img: imgGenerica1, temp: "24°C", lotacao: "Média" },
        { nome: "Praia da Daniela", desc: "Mar calmo e quente que parece uma lagoa. Ideal para crianças e famílias.", regiao: "Norte", img: imgGenerica2, temp: "25°C", lotacao: "Média" },
        { nome: "Sambaqui", desc: "Raízes açorianas fortes, gastronomia focada em ostras e cenário bucólico.", regiao: "Norte", img: imgGenerica3, temp: "23°C", lotacao: "Baixa" },
        { nome: "Santo Antônio de Lisboa", desc: "Um dos bairros mais antigos de Florianópolis, com arquitetura colonial e pôr do sol famoso.", regiao: "Norte", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800", temp: "22°C", lotacao: "Média" },
        { nome: "Cacupé", desc: "Orla requintada com restaurantes sofisticados e vista espetacular para a Beira-Mar.", regiao: "Norte", img: imgGenerica4, temp: "23°C", lotacao: "Baixa" },

        // --- LESTE DA ILHA ---
        { nome: "Barra da Lagoa", desc: "O maior núcleo pesqueiro da ilha, com o Canal da Barra e piscinas naturais.", regiao: "Leste", img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800", temp: "22°C", lotacao: "Muito Alta" },
        { nome: "Prainha da Barra", desc: "Pequena e escondida, acessível por uma curta trilha na Barra da Lagoa.", regiao: "Leste", img: imgGenerica1, temp: "22°C", lotacao: "Média" },
        { nome: "Praia Mole", desc: "Ponto de encontro da viajem ativa, surfistas, parapente e bares com DJs.", regiao: "Leste", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800", temp: "23°C", lotacao: "Alta" },
        { nome: "Praia da Galheta", desc: "Acessível apenas por trilha e reservada para o naturismo (opcional).", regiao: "Leste", img: imgGenerica2, temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia da Joaquina", desc: "Reconhecimento internacional no surf. Dunas imensas famosas para a prática de sandboard.", regiao: "Leste", img: imgGenerica3, temp: "23°C", lotacao: "Muito Alta" },
        { nome: "Praia do Gravatá", desc: "Trilha escondida, com relvados perfeitos para piquenique e mar aberto.", regiao: "Leste", img: imgGenerica4, temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia do Moçambique", desc: "A maior extensão de areia da ilha (12km). Selvagem e preservada dentro de um parque estadual.", regiao: "Leste", img: imgGenerica1, temp: "21°C", lotacao: "Baixa" },

        // --- SUL DA ILHA ---
        { nome: "Praia do Campeche", desc: "Mar aberto de águas cristalinas com vista magnífica para a Ilha do Campeche.", regiao: "Sul", img: "https://images.unsplash.com/photo-1582291142747-19412953e34b?auto=format&fit=crop&w=800", temp: "22°C", lotacao: "Alta" },
        { nome: "Praia da Armação", desc: "Tradicional vila de pescadores, com a icónica Igreja de Sant'Ana.", regiao: "Sul", img: imgGenerica2, temp: "22°C", lotacao: "Média" },
        { nome: "Praia do Matadeiro", desc: "Paraíso do surf no Sul da ilha. Acessível apenas atravessando o rio.", regiao: "Sul", img: imgGenerica3, temp: "21°C", lotacao: "Média" },
        { nome: "Praia do Morro das Pedras", desc: "Rodeada de rochas escuras, com ondas fortes e um miradouro espetacular no Convento.", regiao: "Sul", img: imgGenerica4, temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia do Pântano do Sul", desc: "Famosa pelos restaurantes tradicionais à beira-mar e pela pesca da tainha.", regiao: "Sul", img: imgGenerica1, temp: "22°C", lotacao: "Alta" },
        { nome: "Praia dos Açores", desc: "Tranquila e com extensa faixa de areia, excelente para relaxar em família.", regiao: "Sul", img: imgGenerica2, temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia da Solidão", desc: "Cercada pela Mata Atlântica exuberante, possui ainda uma cascata escondida.", regiao: "Sul", img: imgGenerica3, temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia do Saquinho", desc: "Isolada, acessível por uma trilha cimentada através do Morro. Perfeita para desconectar.", regiao: "Sul", img: imgGenerica4, temp: "20°C", lotacao: "Muito Baixa" },
        { nome: "Praia da Lagoinha do Leste", desc: "Frequentemente eleita a mais bela da ilha. Selvagem, sem acesso rodoviário, ideal para trilhas.", regiao: "Sul", img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800", temp: "21°C", lotacao: "Baixa" },
        { nome: "Praia de Naufragados", desc: "No extremo sul da ilha. História em ruínas e natureza forte ao redor do farol.", regiao: "Sul", img: imgGenerica1, temp: "20°C", lotacao: "Baixa" },
        { nome: "Ribeirão da Ilha", desc: "Polo gastronómico das ostras e um dos locais com arquitetura colonial açoriana mais preservada.", regiao: "Sul", img: imgGenerica2, temp: "23°C", lotacao: "Média" },
        { nome: "Tapera", desc: "Mar raso, calmo e águas quentes. Uma praia mais nativa e residencial.", regiao: "Sul", img: imgGenerica3, temp: "25°C", lotacao: "Baixa" },

        // --- CONTINENTAL / CENTRO ---
        { nome: "Praia de Itaguaçu", desc: "Vista maravilhosa para o pôr do sol, cercada por pedras folclóricas cheias de lendas açorianas.", regiao: "Centro", img: imgGenerica4, temp: "22°C", lotacao: "Baixa" },
        { nome: "Praia das Palmeiras", desc: "Pequena e tranquila, no coração da região continental com foco gastronómico ao redor.", regiao: "Centro", img: imgGenerica1, temp: "23°C", lotacao: "Baixa" },
        { nome: "Praia da Saudade", desc: "Praia urbanizada da região de Coqueiros, ideal para caminhadas no calçadão à beira-mar.", regiao: "Centro", img: imgGenerica2, temp: "22°C", lotacao: "Média" },
        { nome: "Praia do Meio", desc: "Faz parte do circuito gastronómico de Coqueiros. Mais frequentada por moradores para exercício.", regiao: "Centro", img: imgGenerica3, temp: "23°C", lotacao: "Média" },
        { nome: "Praia do Bom Abrigo", desc: "Reduto charmoso, seguro e bem cuidado, ótimo para contemplar a ponte Hercílio Luz ao longe.", regiao: "Centro", img: imgGenerica4, temp: "22°C", lotacao: "Baixa" }
    ],
    hospedagem: [
        { nome: "Majestic Palace Hotel", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "Porto da Ilha Hotel", local: "Beira-Mar", preco: "A consultar", rating: 4 },
        { nome: "Blue Tree Premium Florianópolis", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "Castelmar Hotel", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "ibis Florianopolis", local: "Centro", preco: "A consultar", rating: 3 },
        { nome: "LK DESIGN HOTEL FLORIANOPOLIS", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "Mercure Florianópolis", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "Costão do Santinho Resort", local: "Norte (Costão)", preco: "A consultar", rating: 5 },
        { nome: "Slaviero", local: "Vários", preco: "A consultar", rating: 4 },
        { nome: "Valerim Plaza Hotel", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "Novotel Florianopolis", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "Hotel Intercity Florianópolis", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "Faial Prime Suites", local: "Centro", preco: "A consultar", rating: 4 },
        { nome: "Ingleses Palace Hotel", local: "Ingleses", preco: "A consultar", rating: 4 },
        { nome: "Innbox Hotel & Hostel - Centro", local: "Centro", preco: "A consultar", rating: 3 },
        { nome: "Hotel Slaviero Ingleses Convention", local: "Ingleses", preco: "A consultar", rating: 4 },
        { nome: "Rio Branco Hotel", local: "Centro", preco: "A consultar", rating: 3 },
        { nome: "Ingleses Park Hotel", local: "Ingleses", preco: "A consultar", rating: 4 }
    ],
    gastronomia: [
        { nome: "Ostradamus Restaurante", cat: "frutos-do-mar", local: "Ribeirão da Ilha", desc: "Especialista em ostras e frutos do mar frescos.", preco: "R$ 80 - R$ 250" },
        { nome: "La Cave Gastronomia e Vinhos", cat: "vinhos", local: "Centro", desc: "Carta de vinhos selecionada com pratos de autor.", preco: "R$ 120 - R$ 350" },
        { nome: "Taberna Ibérica", cat: "iberica", local: "Centro Histórico", desc: "Sabores da Península Ibérica com menu degustação.", preco: "R$ 90 - R$ 280" },
        { nome: "Píer 54 Restaurante", cat: "frutos-do-mar", local: "Beira-Mar", desc: "Cozinha contemporânea com vista para a baía.", preco: "R$ 100 - R$ 300" },
        { nome: "Restaurante Olivia Cucina", cat: "italiana", local: "Jurerê", desc: "Tradição italiana com massa fresca e selecção de vinhos.", preco: "R$ 80 - R$ 220" },
        { nome: "Los Troncos Parrilla Uruguaya & Getúlio – Bar Secreto", cat: "parrilla", local: "Centro", desc: "Cortes argentinos/uruguaios e ambiente intimista.", preco: "R$ 120 - R$ 400" },
        { nome: "Guacamole Cocina Mexicana", cat: "mexicana", local: "Centro", desc: "Comida mexicana autêntica e cocktails proprietários.", preco: "R$ 50 - R$ 150" },
        { nome: "Trattoria Carbone", cat: "italiana", local: "Centro", desc: "Clássicos italianos com forno à lenha.", preco: "R$ 90 - R$ 240" },
        { nome: "Osli Restaurante", cat: "contemporanea", local: "Centro", desc: "Menu de autor e sabores regionais reinventados.", preco: "R$ 100 - R$ 300" },
        { nome: "O Timoneiro", cat: "frutos-do-mar", local: "Pântano do Sul", desc: "Peixes frescos e ambiente ribeirinho.", preco: "R$ 70 - R$ 200" },
        { nome: "Coco Bambu", cat: "frutos-do-mar", local: "Beira-Mar", desc: "Rede famosa por pratos compartilháveis e sabores tropicais.", preco: "R$ 100 - R$ 350" },
        { nome: "Restaurante Rancho de Canoa", cat: "regional", local: "Sul da Ilha", desc: "Comida regional e ambiente de rancho à beira-mar.", preco: "R$ 60 - R$ 180" },
        { nome: "Ponta das Caranhas", cat: "regional", local: "Norte", desc: "Pequeno restaurante local com frutos do mar.", preco: "R$ 60 - R$ 160" },
        { nome: "Artusi Restaurante", cat: "italiana", local: "Centro", desc: "Alta cozinha italiana com carta de vinhos selecionada.", preco: "R$ 150 - R$ 320" },
        { nome: "Bonomi Restaurante", cat: "italiana", local: "Centro", desc: "Tradição italiana com ingredientes locais.", preco: "R$ 100 - R$ 260" },
        { nome: "Rancho Açoriano", cat: "regional", local: "Ribeirão da Ilha", desc: "Sabores açorianos e mariscos frescos.", preco: "R$ 70 - R$ 200" },
        { nome: "Bar do Vadinho", cat: "bar", local: "Pântano do Sul", desc: "Clássicos locais e boa carta de petiscos.", preco: "R$ 30 - R$ 120" },
        { nome: "Gatae  Restaurante Japonês", cat: "japonesa", local: "Centro", desc: "Sushi e pratos quentes preparados à moda tradicional.", preco: "R$ 80 - R$ 280" },
        { nome: "Jun Kappô Sushi", cat: "japonesa", local: "Centro", desc: "Kappô com foco em peixe fresco e técnica apurada.", preco: "R$ 120 - R$ 380" },
        { nome: "Il Caravaggio", cat: "italiana", local: "Centro", desc: "Clássicos italianos e ambiente intimista.", preco: "R$ 110 - R$ 300" },
        { nome: "Sattoru Sushi", cat: "japonesa", local: "Jurerê", desc: "Sushi contemporâneo com ingredientes locais.", preco: "R$ 100 - R$ 320" }
    ],
    eventos: [
        { nome: "Festival de Comida de Rua", data: "15 de Junho 2026", hora: "12:00 - 22:00", local: "Praia de Canasvieiras", desc: "Celebração culinária com gastronomia local e internacional.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800" },
        { nome: "Sunset Music Festival", data: "22 de Junho 2026", hora: "17:30 - 23:00", local: "Jurerê Internacional", desc: "Música ao vivo com DJs nacionais e internacionais durante o pôr do sol.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800" },
        { nome: "Trilha Eco-aventura", data: "28 de Junho 2026", hora: "08:00 - 14:00", local: "Praia da Lagoinha do Leste", desc: "Expedição guiada pela natureza selvagem da Mata Atlântica.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800" },
        { nome: "Campeonato de Surf Florianópolis", data: "05 de Julho 2026", hora: "09:00 - 18:00", local: "Praia Mole", desc: "Competição internacional de surf com atletas do mundo todo.", img: "https://images.unsplash.com/photo-1502680390467-361b25e5d895?auto=format&fit=crop&w=800" },
        { nome: "Noite de Arte Contemporânea", data: "12 de Julho 2026", hora: "19:00 - 23:00", local: "Centro Histórico", desc: "Exposição de arte, performances e instalações interativas.", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800" },
        { nome: "Passeio de Barco Sunset", data: "19 de Julho 2026", hora: "17:00 - 20:00", local: "Marina da Barra da Lagoa", desc: "Experiência gastronómica flutuante com vista panorâmica do pôr do sol.", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800" }
    ]
};

// --- CONTROLO DAS VIEWS (SPA SIMULADA) ---
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- BASE DE DADOS E AUTENTICAÇÃO (LOCALSTORAGE) ---
let currentUser = JSON.parse(localStorage.getItem('loggedUser')) || null;

function authAction(type) {
    if (type === 'register') {
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-pass').value;

        if (!name || !email || !pass) {
            alert("Preencha todos os campos do registo.");
            return;
        }

        const newUser = {
            name,
            email,
            pass,
            favorites: [],
            history: [
                { destino: "Santo Antônio de Lisboa", data: "Março 2026", tipo: "Cultural" }
            ],
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200"
        };

        localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
        alert("Conta VIP criada com sucesso! Pode agora efetuar o login.");
        showView('login');
    } 
    else if (type === 'login') {
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password') ? document.getElementById('login-password').value : document.getElementById('login-pass').value;

        const storedUser = JSON.parse(localStorage.getItem(`user_${email}`));

        if (storedUser && storedUser.pass === pass) {
            currentUser = storedUser;
            localStorage.setItem('loggedUser', JSON.stringify(currentUser));
            updateUI();
            showView('home');
        } else {
            alert("Credenciais incorretas ou inexistentes.");
        }
    }
    else if (type === 'logout') {
        localStorage.removeItem('loggedUser');
        currentUser = null;
        updateUI();
        showView('home');
    }
}

// --- ATUALIZAÇÃO DA INTERFACE (USER STATE) ---
function updateUI() {
    const authNav = document.getElementById('nav-auth');
    const userNav = document.getElementById('user-nav');

    if (currentUser) {
        authNav.classList.add('hidden');
        userNav.classList.remove('hidden');
        document.getElementById('user-nav-name').innerText = `Olá, ${currentUser.name.split(' ')[0]}`;
        
        // Elementos do Dashboard/Perfil
        document.getElementById('profile-display-name').innerText = currentUser.name;
        document.getElementById('profile-display-email').innerText = currentUser.email;
        document.getElementById('edit-name').value = currentUser.name;
        document.getElementById('user-nav-avatar').src = currentUser.avatar;
        document.getElementById('profile-display-avatar').src = currentUser.avatar;

        renderFavorites();
        renderHistory();
    } else {
        authNav.classList.remove('hidden');
        userNav.classList.add('hidden');
    }
}

// --- RENDERIZAÇÃO DE GRELHAS DINÂMICAS ---
function renderGrids() {
    // Destinos Populares
    const destinosGrid = document.getElementById('destinos-grid');
    if (destinosGrid) {
        destinosGrid.innerHTML = '';
        DATA.destinos.forEach(d => {
            destinosGrid.innerHTML += `
                <div class="card">
                    <div class="card-img-wrapper">
                        <img src="${d.img}" alt="${d.nome}">
                        <span class="badge-tag">${d.cat}</span>
                    </div>
                    <div class="card-body">
                        <h3>${d.nome}</h3>
                        <p>${d.desc}</p>
                        <div class="card-footer">
                            <button class="btn-fav" onclick="toggleFavorite('${d.nome}')"><i class="far fa-heart"></i> Guardar</button>
                        </div>
                    </div>
                </div>`;
        });
    }

    // Praias
    filterPraias('todas');

    // Hospedagem
    const hospGrid = document.getElementById('hospedagem-grid');
    if (hospGrid) {
        hospGrid.innerHTML = '';
        DATA.hospedagem.forEach(h => {
            const imgUrl = h.img || `https://source.unsplash.com/800x600/?${encodeURIComponent(h.nome)},hotel,florianopolis`;
            hospGrid.innerHTML += `
                <div class="card">
                    <div class="card-img-wrapper">
                        <img src="${imgUrl}" alt="${h.nome}">
                        <span class="badge-tag">${h.local}</span>
                    </div>
                    <div class="card-body">
                        <h3>${h.nome}</h3>
                        <p>${h.desc || ''}</p>
                        <p style="margin-top: 10px; font-weight: 700; color: var(--primary);">${h.preco || ''}</p>
                    </div>
                </div>`;
        });
    }

    // Gastronomia
    filterGastronomia('todos');

    // Eventos
    renderEventos();
}

// --- FILTROS DE PRAIAS ATUALIZADO ---
function filterPraias(regiao, btnElement = null) {
    const praiasGrid = document.getElementById('praias-grid');
    if (!praiasGrid) return;
    
    // UI Button Toggle
    if (btnElement) {
        const buttons = btnElement.parentElement.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }

    praiasGrid.innerHTML = '';
    const filtered = regiao === 'todas' ? DATA.praias : DATA.praias.filter(p => p.regiao === regiao);
    
    filtered.forEach(p => {
        praiasGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${p.img}" alt="${p.nome}" loading="lazy">
                    <span class="badge-tag">${p.regiao}</span>
                </div>
                <div class="card-body">
                    <h3>${p.nome}</h3>
                    <p>${p.desc}</p>
                    <div class="card-footer" style="display:flex; flex-direction:column; align-items:flex-start; gap:8px;">
                        <span><i class="fas fa-thermometer-half"></i> Temp Água: ${p.temp}</span>
                        <span><i class="fas fa-users"></i> Movimento: ${p.lotacao}</span>
                        <button class="btn-fav" style="align-self: flex-end; margin-top: 10px;" onclick="toggleFavorite('${p.nome}')"><i class="far fa-heart"></i> Guardar</button>
                    </div>
                </div>
            </div>`;
    });
}

// --- FILTROS DE GASTRONOMIA ---
function filterGastronomia(cat) {
    const gastroGrid = document.getElementById('gastronomia-grid');
    if (!gastroGrid) return;

    gastroGrid.innerHTML = '';
    const filtered = cat === 'todos' ? DATA.gastronomia : DATA.gastronomia.filter(g => g.cat === cat);

    filtered.forEach(g => {
        const imgUrl = g.img || `https://source.unsplash.com/800x600/?${encodeURIComponent(g.nome)},restaurant,florianopolis`;
        gastroGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${imgUrl}" alt="${g.nome}">
                    <span class="badge-tag">${g.preco}</span>
                </div>
                <div class="card-body">
                    <h3>${g.nome}</h3>
                    <p>${g.desc}</p>
                    <div class="card-footer">
                        <span><i class="fas fa-map-marker-alt"></i> ${g.local}</span>
                    </div>
                </div>
            </div>`;
    });
}

// --- RENDERIZAÇÃO DE EVENTOS ---
function renderEventos() {
    const eventosGrid = document.getElementById('eventos-grid');
    if (!eventosGrid) return;

    eventosGrid.innerHTML = '';
    DATA.eventos.forEach(e => {
        const imgUrl = e.img || `https://source.unsplash.com/800x600/?${encodeURIComponent(e.nome)},event,florianopolis`;
        eventosGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${imgUrl}" alt="${e.nome}">
                    <span class="badge-tag">Evento</span>
                </div>
                <div class="card-body">
                    <h3>${e.nome}</h3>
                    <p>${e.desc}</p>
                    <div class="card-footer" style="display:flex; flex-direction:column; align-items:flex-start; gap:8px;">
                        <span><i class="fas fa-calendar-alt"></i> ${e.data} — ${e.hora || ''}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${e.local}</span>
                        <button class="btn-fav" style="align-self: flex-end; margin-top: 10px;" onclick="toggleFavorite('${e.nome}')"><i class="far fa-heart"></i> Guardar</button>
                    </div>
                </div>
            </div>`;
    });
}

// --- SISTEMA DE FAVORITOS ---
function toggleFavorite(itemName) {
    if (!currentUser) {
        alert("Por favor, faça login para guardar favoritos.");
        showView('login');
        return;
    }

    const index = currentUser.favorites.indexOf(itemName);
    if (index === -1) {
        currentUser.favorites.push(itemName);
        alert(`${itemName} guardado nos favoritos!`);
    } else {
        currentUser.favorites.splice(index, 1);
        alert(`${itemName} removido dos favoritos.`);
    }

    localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
    localStorage.setItem('loggedUser', JSON.stringify(currentUser));
    updateUI();
}

function renderFavorites() {
    const favGrid = document.getElementById('favorites-grid');
    if (!favGrid) return;

    favGrid.innerHTML = '';
    if (!currentUser.favorites || currentUser.favorites.length === 0) {
        favGrid.innerHTML = '<p class="empty-state">Nenhum favorito guardado até ao momento.</p>';
        return;
    }

    currentUser.favorites.forEach(fav => {
        favGrid.innerHTML += `
            <div class="fav-item glass" style="display:flex; justify-content:space-between; padding:20px; border-radius:15px; margin-bottom:15px;">
                <span style="font-weight:700;">${fav}</span>
                <button onclick="toggleFavorite('${fav}')" style="background:transparent; border:none; color:#ff4a5a; cursor:pointer;"><i class="fas fa-trash"></i> Remover</button>
            </div>`;
    });
}

// --- HISTÓRICO DE VIAGENS ---
function renderHistory() {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;

    historyList.innerHTML = '';
    if (!currentUser.history || currentUser.history.length === 0) {
        historyList.innerHTML = '<p class="empty-state">Sem histórico de viagens registado.</p>';
        return;
    }

    currentUser.history.forEach(h => {
        historyList.innerHTML += `
            <div class="history-card glass" style="padding:20px; border-radius:15px; margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
                <div class="history-info">
                    <h4 style="font-weight:700; margin-bottom:5px;">${h.destino}</h4>
                    <p style="font-size:0.9rem; color:#aaa;">${h.data} — Tipo: ${h.tipo}</p>
                </div>
                <span class="status-badge" style="background:rgba(0,255,102,0.1); color:#00ff66; padding:5px 15px; border-radius:50px; font-size:0.8rem;">Confirmada</span>
            </div>`;
    });
}

// --- EDIÇÃO DE PERFIL ---
function updateProfile() {
    if (!currentUser) return;

    const newName = document.getElementById('edit-name').value;
    const newPhone = document.getElementById('edit-phone').value;
    const newLocation = document.getElementById('edit-location').value;

    if (!newName) return alert("O nome não pode ficar em branco.");

    currentUser.name = newName;
    currentUser.phone = newPhone;
    currentUser.location = newLocation;

    localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
    localStorage.setItem('loggedUser', JSON.stringify(currentUser));
    updateUI();
    alert("Perfil atualizado com sucesso!");
}

function deleteAccount() {
    if (confirm("Deseja mesmo eliminar a sua conta de prestígio? Todos os favoritos e histórico serão apagados.")) {
        localStorage.removeItem(`user_${currentUser.email}`);
        authAction('logout');
    }
}

// --- INTERNET DOS COMPONENTES VISUAIS (NAVBAR & LOADER) ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Cursor Customizado
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Loader de Carregamento
document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('.progress-bar');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 15;
        if (bar) bar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) loader.style.opacity = '0';
                setTimeout(() => { if (loader) loader.style.display = 'none'; }, 800);
            }, 300);
        }
    }, 80);

    renderGrids();
    updateUI();

    ScrollReveal().reveal('.reveal', { delay: 300, distance: '50px', origin: 'bottom' });
});

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// --- CHAT CONCIERGE IA ---
function toggleChat() {
    const win = document.getElementById('chat-window');
    win.classList.toggle('hidden');
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    if (!input || !input.value.trim()) return;

    const userText = input.value.trim();
    body.innerHTML += `<div class="chat-message user">${userText}</div>`;
    input.value = '';

    setTimeout(() => {
        let reply = "Como seu assistente virtual, sugiro uma reserva exclusiva no Restaurante Ostradamus ou uma estadia VIP no Villas de Jurerê.";
        if (userText.toLowerCase().includes('praia')) {
            reply = "A Praia Mole é perfeita para agitação e desportos, enquanto a Lagoinha do Leste oferece privacidade total e natureza intocada.";
        } else if (userText.toLowerCase().includes('reserva') || userText.toLowerCase().includes('hotel')) {
            reply = "Posso contactar os nossos parceiros, e de imediato garantir a melhor suite para Você.";
        }
        body.innerHTML += `<div class="chat-message bot">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 1000);
}

// --- FUNÇÕES COMPLEMENTARES FALTANTES ---

// Pesquisa
function executeSearch() {
    const searchTerm = document.getElementById('main-search-input').value.toLowerCase();
    if (!searchTerm) {
        alert("Por favor, digite algo para procurar.");
        return;
    }
    
    // Procurar em destinos
    const foundDestino = DATA.destinos.find(d => d.nome.toLowerCase().includes(searchTerm));
    if (foundDestino) {
        showView('home');
        setTimeout(() => alert(`Encontrado: ${foundDestino.nome}`), 300);
        return;
    }
    
    // Procurar em praias
    const foundPraia = DATA.praias.find(p => p.nome.toLowerCase().includes(searchTerm));
    if (foundPraia) {
        showView('praias');
        setTimeout(() => alert(`Encontrado: ${foundPraia.nome}`), 300);
        return;
    }
    
    // Procurar em gastronomia
    const foundGastro = DATA.gastronomia.find(g => g.nome.toLowerCase().includes(searchTerm));
    if (foundGastro) {
        showView('gastronomia');
        setTimeout(() => alert(`Encontrado: ${foundGastro.nome}`), 300);
        return;
    }
    
    alert("Nenhum resultado encontrado para: " + searchTerm);
}

// Scroll suave para seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Trocar aba do perfil
function switchProfileTab(tabName) {
    // Ocultar todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Mostrar o selecionado
    const tab = document.getElementById(`tab-${tabName}`);
    if (tab) {
        tab.classList.add('active');
    }
    
    // Marcar botão ativo
    event.target.classList.add('active');
}

// Enviar formulário de contacto
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (name && email && message) {
        alert(`Obrigado ${name}! A sua mensagem foi enviada para viagem@floripando.com`);
        event.target.reset();
    }
}

// Tecla Enter no chat
function handleChatKey(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Mudar avatar do utilizador
function handleAvatarChange(event) {
    const file = event.target.files[0];
    if (file && currentUser) {
        const reader = new FileReader();
        reader.onload = (e) => {
            currentUser.avatar = e.target.result;
            localStorage.setItem(`user_${currentUser.email}`, JSON.stringify(currentUser));
            localStorage.setItem('loggedUser', JSON.stringify(currentUser));
            updateUI();
        };
        reader.readAsDataURL(file);
    }
}