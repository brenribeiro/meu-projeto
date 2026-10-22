import { getPipelineStages } from './pipeline.js';
import './style.css';

const stages = getPipelineStages()
  .map(({ number, title, description }) => `
    <li class="stage">
      <span class="stage__number">${number}</span>
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </li>
  `)
  .join('');

document.querySelector('#app').innerHTML = `
  <main class="page">
    <header class="hero">
      <p class="eyebrow"><span aria-hidden="true"></span> Projeto front-end</p>
      <h1>Do primeiro commit à <span>produção.</span></h1>
      <p class="hero__description">
        Um ponto de partida simples para construir, validar e publicar
        aplicações web com confiança.
      </p>
      <a class="button" href="#pipeline">Conheça a pipeline <span aria-hidden="true">↓</span></a>
    </header>

    <section class="pipeline" id="pipeline" aria-labelledby="pipeline-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Entrega contínua</p>
          <h2 id="pipeline-title">Cada mudança, com confiança.</h2>
        </div>
        <p class="section-heading__note">Automatizado com GitHub Actions</p>
      </div>
      <ol class="stages">${stages}</ol>
    </section>

    <footer class="footer">
      <span>Feito para evoluir.</span>
      <span>Vite <span aria-hidden="true">·</span> GitHub Actions <span aria-hidden="true">·</span> GitHub Pages</span>
    </footer>
  </main>
`;
