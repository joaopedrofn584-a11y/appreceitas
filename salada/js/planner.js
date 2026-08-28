// Lógica do Planejador Semanal e Lista de Compras Inteligente

class WeeklyPlanner {
  constructor() {
    this.days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    this.plan = JSON.parse(localStorage.getItem('saladafit_user_plan')) || {
      'Segunda': 'salada-refrescante',
      'Terça': 'salada-caprese',
      'Quarta': 'salada-caesar',
      'Quinta': 'salada-big-mac',
      'Sexta': 'salada-mediterranea',
      'Sábado': 'salada-toscana',
      'Domingo': 'salada-rustica'
    };
  }

  init() {
    this.renderPlanner();
    this.renderShoppingList();
  }

  renderPlanner() {
    const container = document.getElementById('weekly-planner-grid');
    if (!container) return;

    const allSalads = RECIPES_DATA.saladas;

    container.innerHTML = this.days.map(day => {
      const selectedId = this.plan[day] || '';
      const selectedSalad = allSalads.find(s => s.id === selectedId);

      return `
        <div class="bg-emerald-950/50 border border-emerald-800/40 rounded-xl p-3.5 flex flex-col justify-between transition-all hover:border-emerald-500/40">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">${day}</span>
              ${selectedSalad ? `<span class="text-[10px] px-2 py-0.5 rounded bg-emerald-800/60 text-emerald-200 font-mono">${selectedSalad.calories} kcal</span>` : ''}
            </div>
            
            <select 
              data-day="${day}" 
              class="day-salad-select w-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-100 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="">-- Selecione a Salada --</option>
              ${allSalads.map(s => `
                <option value="${s.id}" ${s.id === selectedId ? 'selected' : ''}>
                  🥗 ${s.title}
                </option>
              `).join('')}
            </select>
          </div>

          ${selectedSalad ? `
            <div class="mt-3 pt-2.5 border-t border-emerald-900/60 flex items-center justify-between">
              <div class="flex items-center gap-2 overflow-hidden">
                <img src="${selectedSalad.image}" alt="${selectedSalad.title}" class="w-8 h-8 object-cover rounded-lg border border-emerald-700/50 flex-shrink-0">
                <span class="text-xs text-emerald-200 font-medium truncate">${selectedSalad.title}</span>
              </div>
              <button 
                onclick="openRecipeModal('${selectedSalad.id}')"
                class="text-[10px] bg-emerald-800/60 hover:bg-emerald-700 text-emerald-200 px-2 py-1 rounded transition-colors flex-shrink-0"
              >
                Ver
              </button>
            </div>
          ` : `
            <div class="mt-3 text-[10px] text-emerald-500/50 italic text-center py-1">Sem refeição selecionada</div>
          `}
        </div>
      `;
    }).join('');

    // Listeners
    document.querySelectorAll('.day-salad-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const day = e.target.dataset.day;
        this.plan[day] = e.target.value;
        localStorage.setItem('saladafit_user_plan', JSON.stringify(this.plan));
        this.renderPlanner();
        this.renderShoppingList();
        if (window.updateDashboardStats) window.updateDashboardStats();
      });
    });
  }

  renderShoppingList() {
    const container = document.getElementById('shopping-list-container');
    if (!container) return;

    const rawIngredients = [];
    Object.values(this.plan).forEach(saladId => {
      if (!saladId) return;
      const salad = RECIPES_DATA.saladas.find(s => s.id === saladId);
      if (salad && salad.ingredients) {
        rawIngredients.push(...salad.ingredients);
      }
    });

    if (rawIngredients.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 text-emerald-400/60 text-xs">
          Selecione as saladas no seu plano semanal acima para gerar sua lista de compras!
        </div>
      `;
      return;
    }

    const uniqueIngredients = [...new Set(rawIngredients)];

    container.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between pb-3 border-b border-emerald-800/50">
          <span class="text-xs text-emerald-300 font-medium">${uniqueIngredients.length} itens necessários</span>
          <button id="btn-copy-shopping-list" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer">
            📋 Copiar Lista
          </button>
        </div>
        <div class="space-y-1.5 max-h-80 overflow-y-auto pr-1">
          ${uniqueIngredients.map((item, idx) => `
            <label class="flex items-center gap-2.5 p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/30 hover:border-emerald-700/50 cursor-pointer text-xs text-emerald-100 transition-all">
              <input type="checkbox" class="w-4 h-4 rounded text-emerald-600 bg-emerald-900 border-emerald-700 focus:ring-emerald-500">
              <span>${item}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;

    const copyBtn = document.getElementById('btn-copy-shopping-list');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = `📌 MINHA LISTA DE COMPRAS - SALADAFIT APP\n\n` + 
          uniqueIngredients.map(item => `• ${item}`).join('\n');
        navigator.clipboard.writeText(text).then(() => {
          copyBtn.textContent = '✅ Copiada!';
          setTimeout(() => {
            copyBtn.textContent = '📋 Copiar Lista';
          }, 2500);
        });
      });
    }
  }
}

const weeklyPlannerInstance = new WeeklyPlanner();
