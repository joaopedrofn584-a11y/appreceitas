// SaladaFit App - Lógica da Aplicação Interativa

let favorites = JSON.parse(localStorage.getItem('saladafit_favorites')) || [];
let activeCategory = 'all';
let activeTag = 'all';
let searchQuery = '';
let maxCaloriesFilter = 250;
let prepTimerInterval = null;

document.addEventListener('DOMContentLoaded', () => {
  initAppNav();
  initCatalog();
  initModals();
  updateDashboardStats();

  jarSimulatorInstance.init();
  weeklyPlannerInstance.init();
});

// --- NAVIGATION & TABS ---
function initAppNav() {
  document.querySelectorAll('.app-nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('href').replace('#', '');
      
      document.querySelectorAll('.app-nav-btn').forEach(b => {
        b.classList.remove('text-emerald-400', 'border-emerald-500');
        b.classList.add('text-emerald-200/70', 'border-transparent');
      });
      btn.classList.remove('text-emerald-200/70', 'border-transparent');
      btn.classList.add('text-emerald-400', 'border-emerald-500');

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// --- CATALOG & FILTERS ---
function initCatalog() {
  renderRecipes();

  // Category Tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.remove('bg-emerald-600', 'text-white', 'shadow-lg');
        t.classList.add('bg-emerald-950/60', 'text-emerald-300', 'hover:bg-emerald-900/60');
      });
      tab.classList.remove('bg-emerald-950/60', 'text-emerald-300', 'hover:bg-emerald-900/60');
      tab.classList.add('bg-emerald-600', 'text-white', 'shadow-lg');

      activeCategory = tab.dataset.category;
      renderRecipes();
    });
  });

  // Tag Filters
  document.querySelectorAll('.tag-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tag-filter-btn').forEach(b => {
        b.classList.remove('bg-emerald-700', 'text-white');
        b.classList.add('bg-emerald-900/40', 'text-emerald-300');
      });
      btn.classList.remove('bg-emerald-900/40', 'text-emerald-300');
      btn.classList.add('bg-emerald-700', 'text-white');

      activeTag = btn.dataset.tag;
      renderRecipes();
    });
  });

  // Search Input
  const searchInput = document.getElementById('recipe-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderRecipes();
    });
  }

  // Calorie Range Filter
  const calRange = document.getElementById('calorie-range');
  const calVal = document.getElementById('calorie-val');
  if (calRange && calVal) {
    calRange.addEventListener('input', (e) => {
      maxCaloriesFilter = parseInt(e.target.value);
      calVal.textContent = `${maxCaloriesFilter} kcal`;
      renderRecipes();
    });
  }
}

function getAllRecipesList() {
  let list = [];
  if (activeCategory === 'all') {
    Object.values(RECIPES_DATA).forEach(catList => list.push(...catList));
  } else if (activeCategory === 'favorites') {
    Object.values(RECIPES_DATA).forEach(catList => {
      catList.forEach(r => {
        if (favorites.includes(r.id)) list.push(r);
      });
    });
  } else {
    list = RECIPES_DATA[activeCategory] || [];
  }

  // Tag filter
  if (activeTag !== 'all') {
    list = list.filter(r => r.tags && r.tags.includes(activeTag));
  }

  // Search filter
  if (searchQuery) {
    list = list.filter(r => 
      r.title.toLowerCase().includes(searchQuery) ||
      (r.description && r.description.toLowerCase().includes(searchQuery)) ||
      (r.sauce && r.sauce.toLowerCase().includes(searchQuery)) ||
      (r.ingredients && r.ingredients.some(i => i.toLowerCase().includes(searchQuery)))
    );
  }

  // Calorie filter
  list = list.filter(r => (r.calories || 0) <= maxCaloriesFilter);

  return list;
}

function renderRecipes() {
  const container = document.getElementById('recipes-grid');
  if (!container) return;

  const recipes = getAllRecipesList();

  if (recipes.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-emerald-950/30 rounded-2xl border border-emerald-800/40">
        <span class="text-3xl block mb-2">🔍</span>
        <h3 class="text-sm font-semibold text-emerald-200">Nenhuma receita encontrada</h3>
        <p class="text-xs text-emerald-400/70">Tente ajustar a busca, a categoria ou os filtros.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = recipes.map(recipe => {
    const isFav = favorites.includes(recipe.id);

    return `
      <div class="recipe-card bg-emerald-950/40 border border-emerald-800/50 hover:border-emerald-500/60 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="relative h-44 overflow-hidden">
            <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
            
            <!-- Calories Badge -->
            <div class="absolute top-3 right-3 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-700/60 text-[11px] font-mono text-emerald-300 font-bold">
              🔥 ${recipe.calories} kcal
            </div>

            <!-- Favorite Button -->
            <button 
              onclick="toggleFavorite(event, '${recipe.id}')"
              class="absolute top-3 left-3 w-8 h-8 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-700/60 flex items-center justify-center text-sm transition-transform hover:scale-110"
              title="Favoritar"
            >
              ${isFav ? '❤️' : '🤍'}
            </button>

            <!-- Tags -->
            <div class="absolute bottom-2 left-3 flex gap-1.5 flex-wrap">
              ${recipe.tags ? recipe.tags.map(t => `
                <span class="bg-emerald-800/80 text-emerald-100 text-[10px] px-2 py-0.5 rounded-md backdrop-blur-sm">
                  ${t}
                </span>
              `).join('') : ''}
            </div>
          </div>

          <div class="p-5">
            <h3 class="text-base font-bold text-emerald-100 mb-1 line-clamp-1">${recipe.title}</h3>
            ${recipe.sauce ? `<p class="text-xs text-emerald-400 font-medium mb-2">🥣 ${recipe.sauce}</p>` : ''}
            <p class="text-xs text-emerald-300/70 line-clamp-2 leading-relaxed mb-4">${recipe.description}</p>
          </div>
        </div>

        <div class="px-5 pb-5 pt-0">
          <button 
            onclick="openRecipeModal('${recipe.id}')"
            class="w-full bg-emerald-800/60 hover:bg-emerald-600 text-emerald-100 hover:text-white font-medium py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 border border-emerald-700/50 cursor-pointer"
          >
            <span>Ver Receita & Passo a Passo</span> ➔
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// --- FAVORITES MANAGEMENT ---
function toggleFavorite(event, recipeId) {
  event.stopPropagation();
  if (favorites.includes(recipeId)) {
    favorites = favorites.filter(id => id !== recipeId);
  } else {
    favorites.push(recipeId);
  }
  localStorage.setItem('saladafit_favorites', JSON.stringify(favorites));
  renderRecipes();
  updateDashboardStats();
}

function updateDashboardStats() {
  const favCountEl = document.getElementById('stat-fav-count');
  const planCountEl = document.getElementById('stat-plan-count');

  if (favCountEl) favCountEl.textContent = favorites.length;

  if (planCountEl && weeklyPlannerInstance) {
    const plannedCount = Object.values(weeklyPlannerInstance.plan).filter(Boolean).length;
    planCountEl.textContent = `${plannedCount}/7`;
  }
}

// --- RECIPE MODAL & INTERACTIVE COOKING MODE ---
function initModals() {
  const closeBtn = document.getElementById('close-modal-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeRecipeModal);
  if (backdrop) backdrop.addEventListener('click', closeRecipeModal);
}

function openRecipeModal(recipeId) {
  let foundRecipe = null;
  Object.values(RECIPES_DATA).forEach(catList => {
    const match = catList.find(r => r.id === recipeId);
    if (match) foundRecipe = match;
  });

  if (!foundRecipe) return;

  const modal = document.getElementById('recipe-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const isFav = favorites.includes(foundRecipe.id);

  content.innerHTML = `
    <div class="relative">
      <!-- Header Image -->
      <div class="h-48 w-full rounded-2xl overflow-hidden mb-5 relative">
        <img src="${foundRecipe.image}" alt="${foundRecipe.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800/80 mb-1 inline-block">
              ${foundRecipe.category.toUpperCase()} • ${foundRecipe.calories} KCAL
            </span>
            <h2 class="text-lg sm:text-xl font-bold text-white">${foundRecipe.title}</h2>
          </div>
          <button 
            onclick="toggleFavorite(event, '${foundRecipe.id}'); openRecipeModal('${foundRecipe.id}');" 
            class="text-xl bg-emerald-900/80 p-2 rounded-full border border-emerald-700/60"
          >
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

      <!-- Macros Bar -->
      <div class="grid grid-cols-4 gap-2 mb-5 text-center">
        <div class="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/50">
          <span class="text-[10px] text-emerald-400 block font-mono">CALORIAS</span>
          <strong class="text-xs text-white">${foundRecipe.calories} kcal</strong>
        </div>
        <div class="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/50">
          <span class="text-[10px] text-emerald-400 block font-mono">PROTEÍNAS</span>
          <strong class="text-xs text-white">${foundRecipe.protein || '10g'}</strong>
        </div>
        <div class="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/50">
          <span class="text-[10px] text-emerald-400 block font-mono">CARBOS</span>
          <strong class="text-xs text-white">${foundRecipe.carbs || '12g'}</strong>
        </div>
        <div class="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/50">
          <span class="text-[10px] text-emerald-400 block font-mono">GORDURAS</span>
          <strong class="text-xs text-white">${foundRecipe.fat || '4g'}</strong>
        </div>
      </div>

      <!-- Interactive Timer Tool -->
      <div class="mb-6 p-4 rounded-2xl bg-emerald-900/30 border border-emerald-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <span class="text-xl">⏱️</span>
          <div>
            <strong class="text-xs text-emerald-200 block">Cronômetro de Preparo: ${foundRecipe.prepTime || '15 min'}</strong>
            <span class="text-[10px] text-emerald-400/80">Use o timer enquanto higieniza e monta os potes</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span id="timer-display" class="font-mono font-bold text-sm text-amber-400 bg-emerald-950 px-3 py-1 rounded-lg border border-emerald-800">
            15:00
          </span>
          <button id="timer-btn-start" onclick="toggleTimer(15)" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-3 py-1 rounded-lg transition-colors">
            Iniciar
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Ingredients Checklist -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 font-semibold flex items-center justify-between">
            <span>🛒 Ingredientes</span>
            <span class="text-[10px] text-emerald-500">Marque os prontos</span>
          </h4>
          <ul class="space-y-2 text-xs text-emerald-200">
            ${foundRecipe.ingredients.map((ing, idx) => `
              <li class="flex items-center gap-2.5 bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/30">
                <input type="checkbox" id="ing-${idx}" class="w-4 h-4 rounded text-emerald-600 bg-emerald-900 border-emerald-700">
                <label for="ing-${idx}" class="cursor-pointer leading-snug">${ing}</label>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Layers Assembly Guide -->
        <div>
          ${foundRecipe.layers ? `
            <h4 class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 font-semibold">🏺 Camadas do Pote</h4>
            <div class="space-y-1.5 text-xs">
              ${foundRecipe.layers.map(layer => `
                <div class="p-2 rounded-lg bg-emerald-900/30 border border-emerald-800/40 flex items-center justify-between text-emerald-200">
                  <span class="font-mono text-[10px] text-emerald-400 font-bold">Camada ${layer.level}</span>
                  <span class="font-medium">${layer.name}</span>
                </div>
              `).join('')}
            </div>
          ` : `
            <h4 class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 font-semibold">💡 Dicas da Nutri</h4>
            <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-200 space-y-2">
              <p>• Conservar em pote de vidro hermético.</p>
              <p>• Validade de até 7 dias sob refrigeração constante.</p>
            </div>
          `}
        </div>
      </div>

      <!-- Prep Steps -->
      <h4 class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 font-semibold">👩‍🍳 Modo de Preparo Passo a Passo</h4>
      <ol class="space-y-2 text-xs text-emerald-200 mb-6">
        ${foundRecipe.prepSteps.map((step, idx) => `
          <li class="flex gap-3 bg-emerald-950/50 p-3 rounded-xl border border-emerald-800/30">
            <span class="font-mono font-bold text-emerald-400 text-xs">${idx + 1}.</span>
            <span class="leading-relaxed">${step}</span>
          </li>
        `).join('')}
      </ol>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeRecipeModal() {
  const modal = document.getElementById('recipe-modal');
  if (modal) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }
  if (prepTimerInterval) {
    clearInterval(prepTimerInterval);
    prepTimerInterval = null;
  }
}

// Timer Logic
function toggleTimer(minutes) {
  const btn = document.getElementById('timer-btn-start');
  const display = document.getElementById('timer-display');

  if (prepTimerInterval) {
    clearInterval(prepTimerInterval);
    prepTimerInterval = null;
    if (btn) btn.textContent = 'Iniciar';
    return;
  }

  let totalSeconds = minutes * 60;
  if (btn) btn.textContent = 'Pausar';

  prepTimerInterval = setInterval(() => {
    totalSeconds--;
    if (totalSeconds <= 0) {
      clearInterval(prepTimerInterval);
      prepTimerInterval = null;
      if (display) display.textContent = '00:00';
      if (btn) btn.textContent = 'Concluído!';
      alert('⏰ Tempo de preparo concluído!');
      return;
    }
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    if (display) display.textContent = `${m}:${s}`;
  }, 1000);
}
