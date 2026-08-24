const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const blogs = [
    {
      title: 'The AI Revolution in Data Analytics',
      titlePt: 'A Revolução da IA na Análise de Dados',
      author: 'Jane Doe',
      date: '2026-08-20',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      excerpt: 'Discover how artificial intelligence is transforming the way businesses analyze and leverage their data for strategic growth.',
      excerptPt: 'Descubra como a inteligência artificial está transformando a maneira como as empresas analisam e utilizam seus dados para o crescimento estratégico.',
      content: '# The Dawn of a New Era\n\nArtificial Intelligence (AI) is no longer a futuristic concept—it is a present-day reality that is fundamentally reshaping data analytics. In this blog, we explore the incredible potential of AI-driven insights, machine learning algorithms, and predictive modeling in empowering modern enterprises.\n\n## Key Takeaways\n- Faster data processing\n- Predictive modeling\n- Cost optimization',
      contentPt: '# O Amanhecer de uma Nova Era\n\nA Inteligência Artificial (IA) não é mais um conceito futurista—é uma realidade atual que está reformulando fundamentalmente a análise de dados. Neste blog, exploramos o incrível potencial dos insights impulsionados por IA, algoritmos de aprendizado de máquina e modelagem preditiva na capacitação de empresas modernas.\n\n## Principais Pontos\n- Processamento de dados mais rápido\n- Modelagem preditiva\n- Otimização de custos',
      slug: 'the-ai-revolution-1a2b'
    },
    {
      title: 'Top 5 Strategies for Business Growth in 2026',
      titlePt: null,
      author: 'John Smith',
      date: '2026-08-22',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      excerpt: 'Learn the top five proven strategies that leading companies are using to scale their operations and increase revenue this year.',
      excerptPt: null,
      content: '# Scale Your Business Today\n\nScaling a business requires a mix of innovation, strategic planning, and flawless execution. In this article, we dive deep into the five core strategies that are driving unprecedented growth for companies across various industries.\n\n1. **Embrace Digital Transformation**\n2. **Optimize Supply Chains**\n3. **Focus on Customer Retention**\n4. **Invest in Employee Training**\n5. **Leverage Data Analytics**',
      contentPt: null,
      slug: 'top-5-strategies-business-growth-3c4d'
    },
    {
      title: 'Why Financial Modeling Matters',
      titlePt: 'Por Que a Modelagem Financeira é Importante',
      author: 'Alice Johnson',
      date: '2026-08-23',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
      excerpt: 'A deep dive into why robust financial modeling is the backbone of any successful startup or enterprise.',
      excerptPt: 'Um mergulho profundo sobre por que uma modelagem financeira robusta é a espinha dorsal de qualquer startup ou empresa de sucesso.',
      content: '# The Backbone of Success\n\nWhether you are raising capital, planning for an expansion, or simply trying to understand your cash flow, financial modeling is an indispensable tool. A well-constructed model allows leaders to forecast future financial performance, identify potential risks, and make data-driven decisions that ensure long-term sustainability.',
      contentPt: '# A Espinha Dorsal do Sucesso\n\nSe você está levantando capital, planejando uma expansão ou simplesmente tentando entender seu fluxo de caixa, a modelagem financeira é uma ferramenta indispensável. Um modelo bem construído permite que os líderes prevejam o desempenho financeiro futuro, identifiquem riscos potenciais e tomem decisões baseadas em dados que garantam a sustentabilidade a longo prazo.',
      slug: 'why-financial-modeling-matters-5e6f'
    }
  ];

  for (const blog of blogs) {
    await prisma.blog.create({ data: blog });
    console.log('Created blog:', blog.title);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
