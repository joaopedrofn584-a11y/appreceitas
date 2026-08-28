// Lógica do Simulador e Construtor Interativo do Pote

class JarSimulator {
  constructor() {
    this.selectedLayers = {
      layer1: SIMULATOR_INGREDIENTS.layer1[0], // Molho Cítrico
      layer2: SIMULATOR_INGREDIENTS.layer2[0], // Grão-de-bico
      layer3: SIMULATOR_INGREDIENTS.layer3[0], // Frango
      layer4: SIMULATOR_INGREDIENTS.layer4[0], // Sementes Girassol
      layer5: SIMULATOR_INGREDIENTS.layer5[0]  // Alface
    };
  }

  init() {
    this.renderSelectors();
    this.updateVisualJar();

    const btnSaveCustom = document.getElementById('btn-save-custom-jar');
    if (btnSaveCustom) {
      btnSaveCustom.addEventListener('click', () => this.saveCustomSalad());
    }
  }

  renderSelectors() {
    const container = document.getElementById('simulator-selectors');
    if (!container) return;

    const layerMeta = [
      { key: 'layer1', label: '1ª Camada (Fundo): Molhos & Vinagretes', icon: '🧴', desc: 'Isolado no fundo do pote' },
      { key: 'layer2', label: '2ª Camada: Legumes Firmes & Grãos', icon: '🥕', desc: 'Absorve o tempero sem murchar' },
      { key: 'layer3', label: '3ª Camada: Proteínas & Queijos', icon: '🍗', desc: 'Sustentação nutricional' },
      { key: 'layer4', label: '4ª Camada: Sementes & Castanhas', icon: '🌻', desc: 'Crocância e gorduras boas' },
      { key: 'layer5', label: '5ª Camada (Topo): Folhas Verdes Secas', icon: '🥬', desc: '100% longe do molho' }
    ];

    container.innerHTML = layerMeta.map(meta => {
      const options = SIMULATOR_INGREDIENTS[meta.key];
      const selected = this.selectedLayers[meta.key];

      return `
        <div class="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-4 transition-all hover:border-emerald-500/50">
          <div class="flex items-center justify-between mb-2">
            <label class="text-xs font-semibold text-emerald-200 flex items-center gap-2">
              <span class="text-base">${meta.icon}</span> ${meta.label}
            </label>
            <span class="text-[10px] text-emerald-400/70 font-mono">${meta.desc}</span>
          </div>
          <select 
            data-layer="${meta.key}" 
            class="jar-select w-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            ${options.map(item => `
              <option value="${item.id}" ${item.id === selected.id ? 'selected' : ''}>
                ${item.icon} ${item.name} (${item.calories} kcal • Prot: ${item.protein}g)
              </option>
            `).join('')}
          </select>
        </div>
      `;
    }).join('');

    // Listeners
    document.querySelectorAll('.jar-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const layerKey = e.target.dataset.layer;
        const itemId = e.target.value;
        const found = SIMULATOR_INGREDIENTS[layerKey].find(i => i.id === itemId);
        if (found) {
          this.selectedLayers[layerKey] = found;
          this.updateVisualJar();
        }
      });
    });
  }

  updateVisualJar() {
    const jarVisual = document.getElementById('visual-jar-layers');
    const caloriesEl = document.getElementById('jar-total-calories');
    const proteinEl = document.getElementById('jar-total-protein');
    const carbsEl = document.getElementById('jar-total-carbs');
    const fatEl = document.getElementById('jar-total-fat');

    if (!jarVisual) return;

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    const layerKeys = ['layer5', 'layer4', 'layer3', 'layer2', 'layer1'];

    const colors = {
      layer5: 'from-emerald-600/90 to-green-700/90 text-emerald-100',
      layer4: 'from-amber-600/80 to-yellow-700/80 text-amber-100',
      layer3: 'from-orange-600/80 to-amber-700/80 text-orange-100',
      layer2: 'from-teal-600/80 to-emerald-700/80 text-teal-100',
      layer1: 'from-lime-600/90 to-emerald-800/90 text-lime-100'
    };

    jarVisual.innerHTML = layerKeys.map(key => {
      const item = this.selectedLayers[key];
      totalCalories += item.calories;
      totalProtein += item.protein || 0;
      totalCarbs += item.carbs || 0;
      totalFat += item.fat || 0;

      return `
        <div class="jar-layer-box bg-gradient-to-r ${colors[key]} p-2.5 border-b border-emerald-950/40 flex items-center justify-between transition-all duration-300 transform hover:scale-[1.02]">
          <div class="flex items-center gap-2">
            <span class="text-lg">${item.icon}</span>
            <span class="font-medium text-xs truncate max-w-[140px]">${item.name}</span>
          </div>
          <span class="text-[11px] font-mono font-bold opacity-80">${item.calories} kcal</span>
        </div>
      `;
    }).join('');

    if (caloriesEl) caloriesEl.textContent = `${totalCalories} kcal`;
    if (proteinEl) proteinEl.textContent = `${totalProtein.toFixed(1)}g`;
    if (carbsEl) carbsEl.textContent = `${totalCarbs.toFixed(1)}g`;
    if (fatEl) fatEl.textContent = `${totalFat.toFixed(1)}g`;
  }

  loadPreset(presetName) {
    if (presetName === 'caesar') {
      this.selectedLayers = {
        layer1: SIMULATOR_INGREDIENTS.layer1.find(i => i.id === 'm-caesar'),
        layer2: SIMULATOR_INGREDIENTS.layer2.find(i => i.id === 'l-pepino'),
        layer3: SIMULATOR_INGREDIENTS.layer3.find(i => i.id === 'p-frango'),
        layer4: SIMULATOR_INGREDIENTS.layer4.find(i => i.id === 'c-girassol'),
        layer5: SIMULATOR_INGREDIENTS.layer5.find(i => i.id === 'f-alface-americana')
      };
    } else if (presetName === 'bigmac') {
      this.selectedLayers = {
        layer1: SIMULATOR_INGREDIENTS.layer1.find(i => i.id === 'm-bigmac'),
        layer2: SIMULATOR_INGREDIENTS.layer2.find(i => i.id === 'l-cenoura'),
        layer3: SIMULATOR_INGREDIENTS.layer3.find(i => i.id === 'p-carne-moida'),
        layer4: SIMULATOR_INGREDIENTS.layer4.find(i => i.id === 'c-gergelim'),
        layer5: SIMULATOR_INGREDIENTS.layer5.find(i => i.id === 'f-alface-americana')
      };
    } else if (presetName === 'caprese') {
      this.selectedLayers = {
        layer1: SIMULATOR_INGREDIENTS.layer1.find(i => i.id === 'm-pesto'),
        layer2: SIMULATOR_INGREDIENTS.layer2.find(i => i.id === 'l-tomate'),
        layer3: SIMULATOR_INGREDIENTS.layer3.find(i => i.id === 'p-muçarela'),
        layer4: SIMULATOR_INGREDIENTS.layer4.find(i => i.id === 'c-nozes'),
        layer5: SIMULATOR_INGREDIENTS.layer5.find(i => i.id === 'f-rucula')
      };
    }
    this.renderSelectors();
    this.updateVisualJar();
  }

  saveCustomSalad() {
    const customTitle = prompt('Dê um nome para a sua salada personalizada:', 'Minha Salada Especial');
    if (!customTitle) return;

    let totalCal = 0;
    const ingredients = [];
    const layers = [];

    const keys = ['layer1', 'layer2', 'layer3', 'layer4', 'layer5'];
    keys.forEach((key, index) => {
      const item = this.selectedLayers[key];
      totalCal += item.calories;
      ingredients.push(item.name);
      layers.push({ level: index + 1, name: item.name, type: key });
    });

    const newRecipe = {
      id: `custom-${Date.now()}`,
      title: customTitle,
      sauce: this.selectedLayers.layer1.name,
      calories: totalCal,
      protein: "15g",
      carbs: "10g",
      fat: "5g",
      tags: ["Customizada"],
      preservation: 7,
      prepTime: "12 min",
      category: "saladas",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      description: "Salada personalizada criada no Construtor Interativo do SaladaFit App.",
      ingredients: ingredients,
      layers: layers,
      prepSteps: [
        "Adicione o molho selecionado no fundo do pote de vidro.",
        "Adicione a 2ª camada (legumes e grãos).",
        "Adicione a 3ª camada (proteína).",
        "Salpique as sementes/crocantes.",
        "Preencha com as folhas bem secas.",
        "Mantenha refrigerado."
      ]
    };

    // Salvar nas receitas personalizadas
    const savedCustoms = JSON.parse(localStorage.getItem('nutri_custom_recipes')) || [];
    savedCustoms.push(newRecipe);
    localStorage.setItem('nutri_custom_recipes', JSON.stringify(savedCustoms));

    RECIPES_DATA.saladas.unshift(newRecipe);
    alert(`✅ Salada "${customTitle}" salva com sucesso no seu catálogo!`);

    if (window.renderRecipes) window.renderRecipes();
  }
}

const jarSimulatorInstance = new JarSimulator();
