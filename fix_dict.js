const fs = require('fs');

const ptNFL = `nfl: {
            title: "National Football League (NFL)",
            subtitle: "Simulação de Monte Carlo e Mecanismo de Análise de Desempenho de Jogadores",
            overview: "Modelos de projeção padrão avaliam atletas isoladamente, falhando em capturar a variância interconectada inerente ao futebol profissional. Para resolver isso, uma estrutura de simulação de Monte Carlo de alto rendimento foi projetada para simular dezenas de milhares de trajetórias de estado de jogo. Ao integrar conjuntos de dados históricos multivariáveis e matrizes de correlação entre jogadores, a plataforma transforma condições de jogo incertas em distribuições de probabilidade quantificáveis e perfis de risco acionáveis.",
            methodologyTitle: "Engenharia Central e Metodologia",
            methodologyList: [
              "**Modelagem Multivariada Correlacionada**: Criação de mecanismos de covariância e correlação para contabilizar dependências entre equipes (ex: acoplamento de jardas QB-WR) e supressão defensiva adversária, evitando estimativas de linha de base distorcidas.",
              "**Arquitetura de Simulação Estocástica**: Implantação de algoritmos de Monte Carlo executando mais de 10.000 iterações por partida para mapear vantagens de alcance total, risco mínimo e probabilidades de cauda de resultados nos principais indicadores de desempenho.",
              "**Mecanismo de Escalonamento e Normalização**: Desenvolvimento de um algoritmo de pontuação unificado que normaliza métricas de posições heterogêneas em uma escala padronizada, permitindo análise de paridade de desempenho entre posições.",
              "**Cenário Dinâmico e Perfil de Risco**: Quantificação da dispersão de resultados para fornecer aos tomadores de decisão intervalos de confiança, valor esperado médio e índices de volatilidade em vez de estimativas estáticas e pontuais."
            ],
            techStackTitle: "Frameworks e Arquitetura",
            techStack: "A estrutura de simulação de Monte Carlo de alto rendimento foi desenvolvida usando Python (NumPy, SciPy) para modelagem estocástica e otimização matemática.",
            impactTitle: "Impacto nos Negócios e Decisões",
            impact: "Substituiu planilhas de projeção lineares e propensas a erros por um sistema de inteligência de decisão matematicamente rigoroso. A plataforma fornece previsões probabilísticas de nível institucional, permitindo que analistas e executivos avaliem riscos de queda, visem variâncias de alta vantagem e executem planejamento de jogos baseado em dados."
          },`;

const ptCocaCola = `cocaCola: {
            title: "The Coca-Cola Company",
            subtitle: "Mecanismo Preditivo de Previsão de Demanda e Otimização da Cadeia de Suprimentos",
            overview: "As cadeias de suprimentos globais de bebidas enfrentam extrema variância operacional impulsionada por sazonalidade regional, picos promocionais, mudanças macroeconômicas e flutuações no tempo de entrega de matérias-primas. Para eliminar rupturas de estoque dispendiosas e reduzir custos de manutenção de produtos acabados, foi desenvolvida uma Estrutura Preditiva de Demanda e Otimização da Cadeia de Suprimentos escalonável. Ao consolidar conjuntos de dados ERP díspares, dados de ponto de venda (POS) e sinais de mercado externos, a plataforma automatiza a percepção da demanda e traduz restrições de várias camadas em cronogramas de reabastecimento determinísticos.",
            methodologyTitle: "Engenharia Central e Metodologia",
            methodologyList: [
              "**Previsão Hierárquica de Séries Temporais**: Criação de algoritmos de séries temporais multinível reconciliando metas de demanda nacional de cima para baixo com previsões de fábricas de engarrafamento e SKUs de baixo para cima, mantendo a consistência matemática em cada nível operacional.",
              "**Engenharia de Recursos Causais e Percepção de Demanda**: Fatores exógenos integrados — incluindo padrões climáticos localizados, calendários promocionais de varejo, tendências demográficas regionais e prazos de entrega do distribuidor — para capturar mudanças não lineares de demanda.",
              "**Estoque de Segurança e Otimização de Estoque**: Modelagem de curvas de nível de serviço em relação à volatilidade do lead time de suprimento para calcular níveis dinâmicos de estoque de buffer, evitando o bloqueio de capital de giro enquanto mantém uma meta de disponibilidade na prateleira de mais de 98%.",
              "**Planejamento de Cenário e Simulação E se**: Arquitetou um módulo de simulação permitindo que executivos da cadeia de suprimentos modelem cenários de estresse, como interrupções repentinas de fornecedores, mudanças em gargalos de transporte e choques de preços de ingredientes crus."
            ],
            techStackTitle: "Frameworks e Arquitetura",
            techStack: "O pipeline de dados de ponta a ponta foi construído usando Python (Pandas, Polars e NumPy) para manipulação de dados de alto rendimento e fluxos de trabalho automatizados de limpeza de dados em milhões de registros transacionais diários. Modelagem de regressão e previsão de série temporal avançada foram implementadas usando Prophet, LightGBM e Statsmodels, combinadas com Scikit-Learn para transformação de recursos e pipelines de validação cruzada. Para resolver desafios de distribuição de mercado e alocação de suprimentos restritos, a otimização matemática foi conduzida por programação linear e programação linear inteira mista (MILP) usando SciPy Optimize e PuLP. A ingestão de dados, a orquestração de data warehouse e a transformação foram gerenciadas por meio de SQL e pipelines de ETL escalonáveis, com resultados analíticos finais e simuladores de cenário dinâmicos implementados por meio de painéis executivos empresariais interativos.",
            impactTitle: "Impacto nos Negócios e Decisões",
            impact: "Substituiu planilhas herdadas fragmentadas por um sistema de planejamento unificado e baseado em dados. A solução gerou reduções mensuráveis na variância de erros de previsão, reduziu rupturas de estoque localizadas durante os períodos de pico de promoção de verão e feriados, e liberou economias significativas de capital de giro otimizando os limites de manutenção do armazém."
          }`;

let content = fs.readFileSync('src/lib/getDictionary.ts', 'utf8');

// We need to replace the english versions in the pt section with the portuguese ones
// Let's find the pt section's projects first
const ptSectionStart = content.indexOf('pt: () => Promise.resolve({');
if (ptSectionStart === -1) {
    console.error("PT section not found");
    process.exit(1);
}

// Find nfl and cocaCola inside pt section
const nflStart = content.indexOf('nfl: {', content.indexOf('bayer: {', ptSectionStart) + 100);
if (nflStart === -1) {
    console.error("NFL block not found in PT section");
    process.exit(1);
}

const ptSectionEnd = content.indexOf('})', ptSectionStart);
if (nflStart > ptSectionEnd) {
    console.error("NFL block is outside PT section");
    process.exit(1);
}

// Replace everything from nfl: { to the end of cocaCola block with the new portuguese blocks
const originalTail = content.substring(nflStart, ptSectionEnd);
const cocaColaEnd = originalTail.lastIndexOf('}') + 1;

content = content.substring(0, nflStart) + ptNFL + '\n' + ptCocaCola + '\n        ' + originalTail.substring(cocaColaEnd);

// Now let's inject overviewTitle globally to portfolioPage in English and Portuguese
content = content.replace(/portfolioPage:\s*\{\s*hero:/, 'portfolioPage: {\n      overviewTitle: "Executive Overview",\n      hero:');
content = content.replace(/portfolioPage:\s*\{\s*hero:/g, 'portfolioPage: {\n        overviewTitle: "Resumo Executivo",\n        hero:');

fs.writeFileSync('src/lib/getDictionary.ts', content, 'utf8');
console.log("Dictionary updated");
