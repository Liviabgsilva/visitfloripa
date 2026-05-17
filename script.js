// --- DADOS DINÂMICOS DO SITE (MOCK DATA) ---
const DATA = {
    destinos: [
        { nome: "Jurerê Internacional", desc: "Luxo, beach clubs sofisticados e mansões à beira-mar.", img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800", cat: "Norte" },
        { nome: "Santo Antônio de Lisboa", desc: "Cultura açoriana, arquitetura preservada e o melhor pôr-do-sol.", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800", cat: "Norte" },
        { nome: "Praia do Campeche", desc: "Natureza selvagem, ondas perfeitas e a mística Ilha do Campeche.", img: "https://images.unsplash.com/photo-1582291142747-19412953e34b?auto=format&fit=crop&w=800", cat: "Sul" }
    ],
    praias: [
        { nome: "Praia Mole", desc: "Ponto de encontro da viajem ativa, surfistas e desportistas.", regiao: "Leste", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800", temp: "23°C", lotacao: "Alta" },
        { nome: "Barra da Lagoa", desc: "Ideal para famílias, possui piscinas naturais incríveis.", regiao: "Leste", img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800", temp: "22°C", lotacao: "Média" },
        { nome: "Lagoinha do Leste", desc: "A praia mais selvagem e preservada de Florianópolis, acesso por trilha.", regiao: "Sul", img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800", temp: "21°C", lotacao: "Baixa" }
    ],
    hospedagem: [
        { nome: "Ilha Resort & Spa", local: "Ponta das Canas", preco: "R$ 1.650 / noite", rating: 5, desc: "Sofisticação de padrão internacional à beira-mar com spa premiado.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800" },
        { nome: "Villas de Jurerê Boutique", local: "Jurerê Internacional", preco: "R$ 2.100 / noite", rating: 5, desc: "Exclusividade absoluta e atendimento personalizado personalizado de mordomo.", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800" }
    ],
    gastronomia: [
        { nome: "Ostradamus", cat: "frutos-do-mar", local: "Ribeirão da Ilha", desc: "Ostras vivas depuradas e o melhor polvo grelhado num trapiche histórico.", preco: "R$ 180 - R$ 350", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800" },
        { nome: "Artusi Ristorante", cat: "italiana", local: "Centro", desc: "Alta culinária italiana com toques inovadores pelo chef de prestígio.", preco: "R$ 150 - R$ 280", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800" },
        { nome: "Jay Bistrô", cat: "contemporanea", local: "Jurerê", desc: "Menu de autor sofisticado e harmonizações com grandes rótulos mundiais.", preco: "R$ 220 - R$ 450", img: "https://images.unsplash.com/photo-1550966841-3ee7adac1ad4?auto=format&fit=crop&w=800" }
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
            alert("Credenciais incorretas ou existentes.");
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
            hospGrid.innerHTML += `
                <div class="card">
                    <div class="card-img-wrapper">
                        <img src="${h.img}" alt="${h.nome}">
                        <span class="badge-tag">${h.local}</span>
                    </div>
                    <div class="card-body">
                        <h3>${h.nome}</h3>
                        <p>${h.desc}</p>
                        <p style="margin-top: 10px; font-weight: 700; color: var(--primary);">${h.preco}</p>
                    </div>
                </div>`;
        });
    }

    // Gastronomia
    filterGastronomia('todos');
}

// --- FILTROS DE PRAIAS ---
function filterPraias(regiao) {
    const praiasGrid = document.getElementById('praias-grid');
    if (!praiasGrid) return;
    
    praiasGrid.innerHTML = '';
    const filtered = regiao === 'todas' ? DATA.praias : DATA.praias.filter(p => p.regiao === regiao);
    
    filtered.forEach(p => {
        praiasGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${p.img}" alt="${p.nome}">
                    <span class="badge-tag">${p.regiao}</span>
                </div>
                <div class="card-body">
                    <h3>${p.nome}</h3>
                    <p>${p.desc}</p>
                    <div class="card-footer">
                        <span><i class="fas fa-thermometer-half"></i> ${p.temp}</span>
                        <span><i class="fas fa-users"></i> Lotação: ${p.lotacao}</span>
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
        gastroGrid.innerHTML += `
            <div class="card">
                <div class="card-img-wrapper">
                    <img src="${g.img}" alt="${g.nome}">
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

// --- SISTEMA DE FAVORITOS ---
function toggleFavorite(itemName) {
    if (!currentUser) {
        alert("Por favor, faça login para salvar favoritos.");
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
            <div class="fav-item glass">
                <span>${fav}</span>
                <button onclick="toggleFavorite('${fav}')"><i class="fas fa-trash"></i></button>
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
            <div class="history-card glass">
                <div class="history-info">
                    <h4>${h.destino}</h4>
                    <p>${h.data} — Tipo: ${h.tipo}</p>
                </div>
                <span class="status-badge">Confirmada</span>
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
        let reply = "Como concierge de luxo, sugiro uma reserva exclusiva no Restaurante Ostradamus ou uma estadia VIP no Villas de Jurerê.";
        if (userText.toLowerCase().includes('praia')) {
            reply = "A Praia Mole é perfeita para agitação e desportos, enquanto a Lagoinha do Leste oferece privacidade total e natureza intocada.";
        } else if (userText.toLowerCase().includes('reserva') || userText.toLowerCase().includes('hotel')) {
            reply = "Posso contactar os nossos parceiros VIP de imediato para garantir a melhor suite para si.";
        }
        body.innerHTML += `<div class="chat-message bot">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 1000);
}