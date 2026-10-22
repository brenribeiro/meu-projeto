export function getPipelineStages() {
  return [
    {
      number: '01',
      title: 'Lint',
      description: 'O ESLint verifica o estilo e possíveis problemas no código.',
    },
    {
      number: '02',
      title: 'Testes',
      description: 'Os testes automatizados ajudam a proteger o comportamento.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'O Vite prepara os arquivos otimizados para publicação.',
    },
    {
      number: '04',
      title: 'Deploy',
      description: 'A versão validada é publicada no GitHub Pages.',
    },
  ];
}
