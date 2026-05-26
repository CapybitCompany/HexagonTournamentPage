(function(){
  const deck = document.getElementById('deck');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const counter = document.getElementById('counter');
  const progressFill = document.getElementById('progress-fill');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const helpOverlay = document.getElementById('help-overlay');
  const mdModal = document.getElementById('md-modal');
  const mdContent = document.getElementById('md-content');
  const mdToc = document.getElementById('md-toc');
  const mdTocToggle = document.getElementById('md-toc-toggle');
  const mdClose = document.getElementById('md-close');
  const strategyButtons = Array.from(document.querySelectorAll('[data-open-strategy]'));
  const markdownSource = document.getElementById('strategy-markdown').textContent.replace(/^\n/, '');
  let current = 0;
  let isScrolling = false;
  let mdLoaded = false;

  function updateUI(){
    counter.textContent = `${current + 1} / ${slides.length}`;
    progressFill.style.width = (((current + 1) / slides.length) * 100) + '%';
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
  }

  function goTo(idx){
    if(idx < 0 || idx >= slides.length) return;
    current = idx;
    isScrolling = true;
    slides[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => { isScrolling = false; }, 700);
    updateUI();
  }

  const io = new IntersectionObserver((entries) => {
    if(isScrolling) return;
    entries.forEach((entry) => {
      if(entry.isIntersecting && entry.intersectionRatio > 0.55){
        const idx = slides.indexOf(entry.target);
        if(idx !== -1 && idx !== current){
          current = idx;
          updateUI();
        }
      }
    });
  }, { root: deck, threshold: [0.55, 0.75] });
  slides.forEach((slide) => io.observe(slide));

  function slugify(s){
    return s.toLowerCase()
      .replace(/[ąćęłńóśźż]/g, (c) => ({ą:'a', ć:'c', ę:'e', ł:'l', ń:'n', ó:'o', ś:'s', ź:'z', ż:'z'}[c] || c))
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function escapeHtml(text){
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function inlineMarkdown(text){
    let html = escapeHtml(text);
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return html;
  }

  function parseList(lines, startIndex){
    const items = [];
    const ordered = /^\s*\d+\.\s+/.test(lines[startIndex]);
    let i = startIndex;
    while(i < lines.length){
      const line = lines[i];
      if(ordered && !/^\s*\d+\.\s+/.test(line)) break;
      if(!ordered && !/^\s*[-*]\s+/.test(line)) break;
      const itemText = line.replace(/^\s*(?:\d+\.|[-*])\s+/, '');
      items.push('<li>' + inlineMarkdown(itemText.trim()) + '</li>');
      i += 1;
    }
    return {
      html: '<' + (ordered ? 'ol' : 'ul') + '>' + items.join('') + '</' + (ordered ? 'ol' : 'ul') + '>',
      nextIndex: i
    };
  }

  function parseTable(lines, startIndex){
    const rows = [];
    let i = startIndex;
    while(i < lines.length && /\|/.test(lines[i])){
      rows.push(lines[i]);
      i += 1;
    }
    if(rows.length < 2 || !/^\s*\|?\s*[-:]/.test(rows[1])){
      return null;
    }
    const parseCells = (row) => row.split('|').map((cell) => cell.trim()).filter((_, idx, arr) => !(idx === 0 && arr[idx] === '') && !(idx === arr.length - 1 && arr[idx] === ''));
    const headerCells = parseCells(rows[0]).map((cell) => '<th>' + inlineMarkdown(cell) + '</th>').join('');
    const bodyRows = rows.slice(2).map((row) => '<tr>' + parseCells(row).map((cell) => '<td>' + inlineMarkdown(cell) + '</td>').join('') + '</tr>').join('');
    return {
      html: '<table><thead><tr>' + headerCells + '</tr></thead><tbody>' + bodyRows + '</tbody></table>',
      nextIndex: i
    };
  }

  function parseBlockquote(lines, startIndex){
    const parts = [];
    let i = startIndex;
    while(i < lines.length && /^\s*>/.test(lines[i])){
      parts.push(lines[i].replace(/^\s*>\s?/, ''));
      i += 1;
    }
    return {
      html: '<blockquote><p>' + inlineMarkdown(parts.join(' ')) + '</p></blockquote>',
      nextIndex: i
    };
  }

  function parseParagraph(lines, startIndex){
    const parts = [];
    let i = startIndex;
    while(i < lines.length){
      const line = lines[i];
      if(!line.trim()) break;
      if(/^#{1,4}\s+/.test(line)) break;
      if(/^\s*```/.test(line)) break;
      if(/^\s*>/.test(line)) break;
      if(/^\s*(?:[-*]|\d+\.)\s+/.test(line)) break;
      if(/^\s*---+\s*$/.test(line)) break;
      if(/\|/.test(line) && i + 1 < lines.length && /^\s*\|?\s*[-:]/.test(lines[i + 1])) break;
      parts.push(line.trim());
      i += 1;
    }
    return {
      html: '<p>' + inlineMarkdown(parts.join(' ')) + '</p>',
      nextIndex: i
    };
  }

  function renderMarkdown(md){
    const lines = md.replace(/\r/g, '').split('\n');
    const html = [];
    let i = 0;
    while(i < lines.length){
      const line = lines[i];
      if(!line.trim()){
        i += 1;
        continue;
      }
      if(/^\s*```/.test(line)){
        const codeLines = [];
        i += 1;
        while(i < lines.length && !/^\s*```/.test(lines[i])){
          codeLines.push(lines[i]);
          i += 1;
        }
        i += 1;
        html.push('<pre><code>' + escapeHtml(codeLines.join('\n')) + '</code></pre>');
        continue;
      }
      const heading = line.match(/^(#{1,4})\s+(.*)$/);
      if(heading){
        const level = heading[1].length;
        const text = heading[2].trim();
        const id = slugify(text);
        html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
        i += 1;
        continue;
      }
      if(/^\s*---+\s*$/.test(line)){
        html.push('<hr />');
        i += 1;
        continue;
      }
      const table = parseTable(lines, i);
      if(table){
        html.push(table.html);
        i = table.nextIndex;
        continue;
      }
      if(/^\s*>/.test(line)){
        const blockquote = parseBlockquote(lines, i);
        html.push(blockquote.html);
        i = blockquote.nextIndex;
        continue;
      }
      if(/^\s*(?:[-*]|\d+\.)\s+/.test(line)){
        const list = parseList(lines, i);
        html.push(list.html);
        i = list.nextIndex;
        continue;
      }
      const paragraph = parseParagraph(lines, i);
      html.push(paragraph.html);
      i = paragraph.nextIndex;
    }
    return html.join('\n');
  }

  function buildToc(){
    const headings = mdContent.querySelectorAll('h1, h2, h3, h4');
    let html = '<h4>Spis treści</h4>';
    headings.forEach((h) => {
      if(!h.id) h.id = slugify(h.textContent);
      const lvl = h.tagName.toLowerCase();
      html += `<a href="#${h.id}" class="lvl-${lvl[1]}" data-target="${h.id}">${h.textContent}</a>`;
    });
    mdToc.innerHTML = html;
    mdToc.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(a.dataset.target);
        if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if(window.innerWidth < 900) mdToc.hidden = true;
      });
    });
  }

  function renderMd(){
    if(mdLoaded) return;
    mdContent.innerHTML = renderMarkdown(markdownSource);
    buildToc();
    mdLoaded = true;
  }

  function openMd(){
    mdModal.hidden = false;
    document.body.style.overflow = 'hidden';
    renderMd();
  }

  function closeMd(){
    mdModal.hidden = true;
    document.body.style.overflow = '';
  }

  function roundedRect(ctx, x, y, width, height, radius){
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function fitCanvas(canvas, minHeight){
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(rect.width || 640, 320);
    const height = Math.max(rect.height || minHeight || 320, minHeight || 320);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, width, height };
  }

  function drawGrid(ctx, left, top, width, height, rows){
    ctx.save();
    ctx.strokeStyle = '#262d39';
    ctx.lineWidth = 1;
    for(let i = 0; i <= rows; i += 1){
      const y = top + (height / rows) * i;
      ctx.beginPath();
      ctx.moveTo(left, y);
      ctx.lineTo(left + width, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawLineChart(canvasId, cfg){
    const canvas = document.getElementById(canvasId);
    if(!canvas) return;
    const { ctx, width, height } = fitCanvas(canvas, 340);
    const pad = { top: 26, right: 26, bottom: 60, left: 56 };
    const plotW = width - pad.left - pad.right;
    const plotH = height - pad.top - pad.bottom;
    const min = cfg.min;
    const max = cfg.max;
    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, pad.left, pad.top, plotW, plotH, 5);

    ctx.fillStyle = '#9aa3b3';
    ctx.font = '12px Segoe UI';
    for(let i = 0; i <= 5; i += 1){
      const value = max - ((max - min) / 5) * i;
      const y = pad.top + (plotH / 5) * i;
      ctx.fillText(Math.round(value), 10, y + 4);
    }

    const xStep = plotW / (cfg.labels.length - 1);
    ctx.strokeStyle = '#1a1f28';
    ctx.beginPath();
    ctx.moveTo(pad.left, pad.top + plotH);
    ctx.lineTo(pad.left + plotW, pad.top + plotH);
    ctx.stroke();

    function yFor(value){
      return pad.top + plotH - ((value - min) / (max - min)) * plotH;
    }

    const planPoints = cfg.plan.map((v, i) => ({ x: pad.left + xStep * i, y: yFor(v) }));
    const altPoints = cfg.alt.map((v, i) => ({ x: pad.left + xStep * i, y: yFor(v) }));

    ctx.beginPath();
    ctx.moveTo(planPoints[0].x, pad.top + plotH);
    planPoints.forEach((p) => ctx.lineTo(p.x, p.y));
    ctx.lineTo(planPoints[planPoints.length - 1].x, pad.top + plotH);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,166,0,.18)';
    ctx.fill();

    ctx.beginPath();
    planPoints.forEach((p, idx) => idx === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.strokeStyle = '#ffa600';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    altPoints.forEach((p, idx) => idx === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = '#64b4ff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);

    planPoints.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffa600';
      ctx.fill();
    });
    altPoints.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#64b4ff';
      ctx.fill();
    });

    ctx.fillStyle = '#9aa3b3';
    ctx.font = '12px Segoe UI';
    cfg.labels.forEach((label, i) => {
      const x = pad.left + xStep * i;
      ctx.save();
      ctx.translate(x, height - 34);
      ctx.rotate(-0.28);
      ctx.fillText(label, -18, 0);
      ctx.restore();
    });

    ctx.fillStyle = '#e0d8cc';
    ctx.fillRect(width - 210, 12, 12, 12);
    ctx.fillStyle = '#e0d8cc';
    ctx.fillText('Plan (target)', width - 190, 22);
    ctx.strokeStyle = '#64b4ff';
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(width - 210, 42);
    ctx.lineTo(width - 198, 42);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#e0d8cc';
    ctx.fillText('Scenariusz konserwatywny', width - 190, 46);
  }

  function drawGroupedBarChart(canvasId, cfg){
    const canvas = document.getElementById(canvasId);
    if(!canvas) return;
    const { ctx, width, height } = fitCanvas(canvas, 340);
    const pad = { top: 26, right: 26, bottom: 78, left: 56 };
    const plotW = width - pad.left - pad.right;
    const plotH = height - pad.top - pad.bottom;
    const max = cfg.max;
    ctx.clearRect(0, 0, width, height);
    drawGrid(ctx, pad.left, pad.top, plotW, plotH, 5);

    ctx.fillStyle = '#9aa3b3';
    ctx.font = '12px Segoe UI';
    for(let i = 0; i <= 5; i += 1){
      const value = max - (max / 5) * i;
      const y = pad.top + (plotH / 5) * i;
      ctx.fillText(Math.round(value), 10, y + 4);
    }

    const groups = cfg.labels.length;
    const groupW = plotW / groups;
    const barW = Math.min(22, groupW * 0.28);
    cfg.labels.forEach((label, i) => {
      const center = pad.left + groupW * i + groupW / 2;
      const x1 = center - barW - 4;
      const x2 = center + 4;
      const h1 = (cfg.series1[i] / max) * plotH;
      ctx.fillStyle = 'rgba(100,180,255,.45)';
      ctx.strokeStyle = '#64b4ff';
      ctx.lineWidth = 2;
      roundedRect(ctx, x1, pad.top + plotH - h1, barW, h1, 6);
      ctx.fill();
      ctx.stroke();

      const value2 = cfg.series2[i];
      if(typeof value2 === 'number'){
        const h2 = (value2 / max) * plotH;
        ctx.fillStyle = 'rgba(255,166,0,.88)';
        ctx.strokeStyle = '#ffa600';
        roundedRect(ctx, x2, pad.top + plotH - h2, barW, h2, 6);
        ctx.fill();
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(center - 18, height - 44);
      const lines = label.split('\n');
      ctx.fillStyle = '#9aa3b3';
      ctx.font = '11px Segoe UI';
      lines.forEach((line, idx) => ctx.fillText(line, 0, idx * 14));
      ctx.restore();
    });
  }

  function drawHorizontalBarChart(canvasId, cfg){
    const canvas = document.getElementById(canvasId);
    if(!canvas) return;
    const { ctx, width, height } = fitCanvas(canvas, 320);
    const pad = { top: 24, right: 24, bottom: 20, left: 120 };
    const plotW = width - pad.left - pad.right;
    const plotH = height - pad.top - pad.bottom;
    const barGap = 12;
    const barH = (plotH - barGap * (cfg.labels.length - 1)) / cfg.labels.length;
    ctx.clearRect(0, 0, width, height);
    cfg.labels.forEach((label, i) => {
      const y = pad.top + i * (barH + barGap);
      const w = (cfg.values[i] / 100) * plotW;
      ctx.fillStyle = '#1a1f28';
      roundedRect(ctx, pad.left, y, plotW, barH, 8);
      ctx.fill();
      ctx.fillStyle = cfg.colors[i];
      roundedRect(ctx, pad.left, y, w, barH, 8);
      ctx.fill();
      ctx.fillStyle = '#e0d8cc';
      ctx.font = '700 12px Segoe UI';
      ctx.fillText(label, 12, y + barH * 0.68);
      ctx.fillStyle = '#0a0b0e';
      ctx.fillText(cfg.values[i] + ' / 100', pad.left + Math.max(10, w - 58), y + barH * 0.68);
    });
  }

  function drawDoughnut(canvasId, cfg){
    const canvas = document.getElementById(canvasId);
    if(!canvas) return;
    const { ctx, width, height } = fitCanvas(canvas, 300);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.28;
    const inner = radius * 0.58;
    const total = cfg.values.reduce((sum, v) => sum + v, 0);
    let start = -Math.PI / 2;
    ctx.clearRect(0, 0, width, height);
    cfg.values.forEach((value, i) => {
      const angle = (value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, start, start + angle);
      ctx.closePath();
      ctx.fillStyle = cfg.colors[i];
      ctx.fill();
      start += angle;
    });
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(centerX, centerY, inner, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#e0d8cc';
    ctx.font = '700 14px Segoe UI';
    ctx.textAlign = 'center';
    ctx.fillText('Budżet', centerX, centerY - 4);
    ctx.font = '12px Segoe UI';
    ctx.fillStyle = '#9aa3b3';
    ctx.fillText(total + ' zł', centerX, centerY + 18);
  }

  function renderCharts(){
    drawLineChart('chartDiscord', {
      labels: ['Start', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'],
      plan: [133, 150, 170, 210, 225, 235, 245, 250],
      alt: [133, 145, 158, 178, 190, 198, 210, 218],
      min: 120,
      max: 260
    });

    drawGroupedBarChart('chartSMP', {
      labels: ['T1\n3-10.07', 'T2\n10-17.07', 'T4\n31.07', 'T8\nsierpień', 'T12\nwrzesień', 'T16\npaździernik', 'T20\nlistopad'],
      series1: [35, 17, 13, 17, 20, 23, 26],
      series2: [null, null, 9, 13, 16, 19, 22],
      max: 40
    });

    drawHorizontalBarChart('chartAlgo', {
      labels: ['Share / Save', 'Comments', 'Watch time %', 'Loop rate', 'Likes'],
      values: [100, 85, 80, 60, 35],
      colors: ['#ffa600', 'rgba(255,166,0,.82)', 'rgba(255,166,0,.68)', 'rgba(255,166,0,.52)', 'rgba(255,166,0,.36)']
    });

    drawDoughnut('chartBudget', {
      values: [200, 100, 250, 100, 50, 30, 30],
      colors: ['#ffa600', '#ffcc66', '#64b4ff', '#6ddf94', '#ffd166', '#a18fff', '#ff6b6b']
    });
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  helpOverlay.addEventListener('click', () => { helpOverlay.hidden = true; });
  strategyButtons.forEach((button) => button.addEventListener('click', openMd));
  mdClose.addEventListener('click', closeMd);
  mdTocToggle.addEventListener('click', () => { mdToc.hidden = !mdToc.hidden; });
  mdModal.addEventListener('click', (e) => { if(e.target === mdModal) closeMd(); });
  window.addEventListener('resize', () => renderCharts());

  document.addEventListener('keydown', (e) => {
    if(!mdModal.hidden){
      if(e.key === 'Escape'){ closeMd(); e.preventDefault(); }
      return;
    }
    if(!helpOverlay.hidden){
      if(e.key === 'Escape' || e.key === '?') helpOverlay.hidden = true;
      return;
    }
    switch(e.key){
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        goTo(current + 1);
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        goTo(current - 1);
        break;
      case 'Home':
        e.preventDefault();
        goTo(0);
        break;
      case 'End':
        e.preventDefault();
        goTo(slides.length - 1);
        break;
      case 'f':
      case 'F':
        if(!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
        break;
      case 'm':
      case 'M':
        openMd();
        break;
      case '?':
        helpOverlay.hidden = false;
        break;
    }
  });

  updateUI();
  renderCharts();
})();
