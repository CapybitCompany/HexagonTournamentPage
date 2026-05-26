/* ===== HEX Network presentation — navigation + charts ===== */
(function(){
  const deck = document.getElementById('deck');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const counter = document.getElementById('counter');
  const progressFill = document.getElementById('progress-fill');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const helpOverlay = document.getElementById('help-overlay');
  let current = 0;
  let isScrolling = false;

  function updateUI(){
    counter.textContent = `${current+1} / ${slides.length}`;
    progressFill.style.width = ((current+1)/slides.length*100) + '%';
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length-1;
  }

  function goTo(idx){
    if(idx < 0 || idx >= slides.length) return;
    current = idx;
    isScrolling = true;
    slides[idx].scrollIntoView({behavior:'smooth', block:'start'});
    setTimeout(()=>{ isScrolling = false; }, 700);
    updateUI();
  }

  // Track current slide via IntersectionObserver
  const io = new IntersectionObserver((entries)=>{
    if(isScrolling) return;
    entries.forEach(e=>{
      if(e.isIntersecting && e.intersectionRatio > .55){
        const idx = slides.indexOf(e.target);
        if(idx !== -1 && idx !== current){
          current = idx;
          updateUI();
        }
      }
    });
  }, { root: deck, threshold:[0.55,0.75] });
  slides.forEach(s => io.observe(s));

  // Keyboard
  document.addEventListener('keydown', (e)=>{
    if(!helpOverlay.hidden){
      if(e.key === 'Escape' || e.key === '?') helpOverlay.hidden = true;
      return;
    }
    switch(e.key){
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault(); goTo(current+1); break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault(); goTo(current-1); break;
      case 'Home': e.preventDefault(); goTo(0); break;
      case 'End': e.preventDefault(); goTo(slides.length-1); break;
      case 'f': case 'F':
        if(!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
        break;
      case '?':
        helpOverlay.hidden = false;
        break;
    }
  });

  prevBtn.addEventListener('click', ()=> goTo(current-1));
  nextBtn.addEventListener('click', ()=> goTo(current+1));
  helpOverlay.addEventListener('click', ()=> helpOverlay.hidden = true);

  updateUI();

  // ===== MD VIEWER MODAL =====
  const mdModal = document.getElementById('md-modal');
  const mdContent = document.getElementById('md-content');
  const mdToc = document.getElementById('md-toc');
  const mdTocToggle = document.getElementById('md-toc-toggle');
  const mdClose = document.getElementById('md-close');
  const strategyButtons = Array.from(document.querySelectorAll('[data-open-strategy]'));
  const strategyFilePath = 'strategia.md';
  let mdLoaded = false;

  function slugify(s){
    return s.toLowerCase()
      .replace(/[ąćęłńóśźż]/g, c=>({ą:'a',ć:'c',ę:'e',ł:'l',ń:'n',ó:'o',ś:'s',ź:'z',ż:'z'}[c]||c))
      .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  }

  function buildToc(){
    if(!mdContent) return;
    const headings = mdContent.querySelectorAll('h1, h2, h3, h4');
    let html = '<h4>Spis treści</h4>';
    headings.forEach(h=>{
      if(!h.id) h.id = slugify(h.textContent);
      const lvl = h.tagName.toLowerCase();
      html += `<a href="#${h.id}" class="lvl-${lvl[1]}" data-target="${h.id}">${h.textContent}</a>`;
    });
    mdToc.innerHTML = html;
    mdToc.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const target = document.getElementById(a.dataset.target);
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
        if(window.innerWidth < 900) mdToc.hidden = true;
      });
    });
  }

  function renderMd(text){
    if(!window.marked){
      mdContent.innerHTML = '<div class="md-loading">⚠️ Biblioteka marked.js nie załadowała się. Sprawdź połączenie z internetem.</div>';
      return;
    }
    marked.setOptions({ gfm:true, breaks:false, headerIds:true, mangle:false });
    mdContent.innerHTML = marked.parse(text);
    buildToc();
    mdLoaded = true;
  }

  async function loadMd(){
    if(mdLoaded) return;
    try{
      const res = await fetch(strategyFilePath);
      if(!res.ok) throw new Error('HTTP '+res.status);
      const text = await res.text();
      renderMd(text);
    } catch(err){
      mdContent.innerHTML = `
        <div class="md-loading">
          <p>⚠️ Nie udało się załadować pliku <code>${strategyFilePath}</code>.</p>
          <p style="font-size:.9rem;color:var(--text-mute);max-width:520px;margin:14px auto">
            Wygląda na to, że prezentacja jest otwarta przez <code>file://</code> i przeglądarka blokuje wczytanie lokalnego pliku.
          </p>
          <p style="font-size:.9rem;color:var(--text);max-width:520px;margin:14px auto">
            <strong>Rozwiązanie:</strong> uruchom prezentację przez lokalny serwer.<br>
            • VS Code → zainstaluj rozszerzenie <code>Live Server</code> → prawym na <code>index.html</code> → „Open with Live Server".<br>
            • Lub w PowerShell w folderze <code>prezentacja</code>: <code>python -m http.server 8080</code> i otwórz <code>http://localhost:8080</code>.
          </p>
          <p style="margin-top:18px">
            <button id="md-open-raw" class="md-btn">Otwórz ${strategyFilePath} bezpośrednio</button>
          </p>
          <p style="font-size:.85rem;color:var(--text-mute);margin-top:18px">Błąd: ${err.message}</p>
        </div>`;
      const rawButton = document.getElementById('md-open-raw');
      if(rawButton) rawButton.addEventListener('click', openRawStrategyFile);
    }
  }

  function openRawStrategyFile(){
    window.open(strategyFilePath, '_blank', 'noopener');
  }

  function shouldOpenRawStrategy(){
    return window.location.protocol === 'file:';
  }

  function openMd(){
    if(shouldOpenRawStrategy()){
      openRawStrategyFile();
      return;
    }
    mdModal.hidden = false;
    document.body.style.overflow = 'hidden';
    loadMd();
  }
  function closeMd(){
    mdModal.hidden = true;
    document.body.style.overflow = '';
  }

  strategyButtons.forEach((button) => button.addEventListener('click', openMd));
  if(mdClose) mdClose.addEventListener('click', closeMd);
  if(mdTocToggle) mdTocToggle.addEventListener('click', ()=>{
    mdToc.hidden = !mdToc.hidden;
  });
  // click outside box to close
  mdModal.addEventListener('click', (e)=>{ if(e.target === mdModal) closeMd(); });

  // extend keyboard handler
  document.addEventListener('keydown', (e)=>{
    if(!mdModal.hidden){
      if(e.key === 'Escape'){ closeMd(); e.preventDefault(); }
      return;
    }
    if(e.key === 'm' || e.key === 'M'){
      if(!helpOverlay.hidden) return;
      openMd();
    }
  });

  // ===== CHARTS =====
  // Chart.js global defaults — dark theme
  if(window.Chart){
    Chart.defaults.color = '#9aa3b3';
    Chart.defaults.borderColor = '#262d39';
    Chart.defaults.font.family = "'Montserrat','Segoe UI',system-ui,sans-serif";
    Chart.defaults.font.size = 12;
  }

  // --- KPI #1 Discord growth ---
  const discCtx = document.getElementById('chartDiscord');
  if(discCtx && window.Chart){
    const months = ['Start (13.05)','Maj','Czerwiec','Lipiec 🔥','Sierpień','Wrzesień','Październik','Listopad 🎯'];
    const target = [133, 150, 170, 210, 225, 235, 245, 250];
    const conservative = [133, 145, 158, 178, 190, 198, 210, 218];
    new Chart(discCtx, {
      type:'line',
      data:{
        labels: months,
        datasets:[
          {
            label:'Plan (target)',
            data: target,
            borderColor:'#ffa600',
            backgroundColor:'rgba(255,166,0,.18)',
            fill:true, tension:.35,
            pointBackgroundColor:'#ffa600', pointRadius:5, pointHoverRadius:8,
            borderWidth:3
          },
          {
            label:'Scenariusz konserwatywny',
            data: conservative,
            borderColor:'#64b4ff',
            backgroundColor:'transparent',
            tension:.35,
            borderDash:[6,4],
            pointBackgroundColor:'#64b4ff', pointRadius:4,
            borderWidth:2
          }
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{position:'top', labels:{color:'#e0d8cc', font:{weight:'600'}}},
          tooltip:{
            backgroundColor:'#10141a', borderColor:'#ffa600', borderWidth:1,
            padding:12, titleColor:'#ffa600', bodyColor:'#fff',
            callbacks:{ label: c => ` ${c.dataset.label}: ${c.parsed.y} osób` }
          }
        },
        scales:{
          y:{ beginAtZero:false, min:120, grid:{color:'#262d39'}, ticks:{stepSize:20} },
          x:{ grid:{color:'#1a1f28'} }
        }
      }
    });
  }

  // --- KPI #2 SMP retention ---
  const smpCtx = document.getElementById('chartSMP');
  if(smpCtx && window.Chart){
    new Chart(smpCtx, {
      type:'bar',
      data:{
        labels:['T1\n(3-10.07)','T2\n(10-17.07)','T4\n(31.07)','T8\n(sierp)','T12\n(wrz)','T16\n(paź)','T20\n(lis) 🎯'],
        datasets:[
          {
            label:'Aktywni 7-dniowo',
            data:[35, 17, 13, 17, 20, 23, 26],
            backgroundColor:'rgba(100,180,255,.35)',
            borderColor:'#64b4ff', borderWidth:2, borderRadius:6
          },
          {
            label:'Stale aktywni (≥3×/tydz)',
            data:[null, null, 9, 13, 16, 19, 22],
            backgroundColor:'rgba(255,166,0,.85)',
            borderColor:'#ffa600', borderWidth:2, borderRadius:6
          }
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{position:'top', labels:{color:'#e0d8cc'}},
          tooltip:{
            backgroundColor:'#10141a', borderColor:'#ffa600', borderWidth:1, padding:12,
            titleColor:'#ffa600', bodyColor:'#fff'
          },
          annotation: false
        },
        scales:{
          y:{ beginAtZero:true, grid:{color:'#262d39'},
            title:{display:true, text:'Liczba graczy', color:'#9aa3b3'} },
          x:{ grid:{color:'#1a1f28'} }
        }
      }
    });
  }

  // --- TikTok algorithm weights ---
  const algoCtx = document.getElementById('chartAlgo');
  if(algoCtx && window.Chart){
    new Chart(algoCtx, {
      type:'bar',
      data:{
        labels:['Share / Save','Comments','Watch time %','Loop rate','Likes'],
        datasets:[{
          label:'Siła sygnału dla algorytmu',
          data:[100, 85, 80, 60, 35],
          backgroundColor:[
            'rgba(255,166,0,.9)',
            'rgba(255,166,0,.78)',
            'rgba(255,166,0,.66)',
            'rgba(255,166,0,.54)',
            'rgba(255,166,0,.36)'
          ],
          borderColor:'#ffa600', borderWidth:1, borderRadius:6
        }]
      },
      options:{
        indexAxis:'y',
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{display:false},
          tooltip:{
            backgroundColor:'#10141a', borderColor:'#ffa600', borderWidth:1,
            titleColor:'#ffa600', bodyColor:'#fff',
            callbacks:{ label: c => ` Siła: ${c.parsed.x}/100` }
          }
        },
        scales:{
          x:{ beginAtZero:true, max:100, grid:{color:'#262d39'},
            ticks:{ callback: v=> v + ' / 100' } },
          y:{ grid:{display:false}, ticks:{color:'#e0d8cc', font:{weight:'700'}} }
        }
      }
    });
  }

  // --- Budget breakdown ---
  const budgetCtx = document.getElementById('chartBudget');
  if(budgetCtx && window.Chart){
    new Chart(budgetCtx, {
      type:'doughnut',
      data:{
        labels:[
          'Promo TikTok (rolki 12+15.05)',
          'Trailer SMP (Fiverr)',
          'Nagrody Awantura o Kasę',
          'Boost płatny lipiec+',
          'Nagrody referal TOP 3',
          'Wsparcie ambasadorów',
          'Sticker pack'
        ],
        datasets:[{
          data:[200, 100, 250, 100, 50, 30, 30],
          backgroundColor:[
            '#ffa600', '#ffcc66', '#64b4ff', '#6ddf94',
            '#ffd166', '#a18fff', '#ff6b6b'
          ],
          borderColor:'#10141a',
          borderWidth:3
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{
            position:'right',
            labels:{color:'#e0d8cc', boxWidth:14, padding:10, font:{size:12}}
          },
          tooltip:{
            backgroundColor:'#10141a', borderColor:'#ffa600', borderWidth:1,
            titleColor:'#ffa600', bodyColor:'#fff',
            callbacks:{ label: c => ` ${c.label}: ${c.parsed} zł` }
          }
        },
        cutout:'58%'
      }
    });
  }
})();
