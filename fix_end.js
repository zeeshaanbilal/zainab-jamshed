const fs = require('fs');
let content = fs.readFileSync('src/lib/getDictionary.ts', 'utf8');

// The end of the file is currently corrupted with extra brackets and missing exports.
// We want to find the end of the cocaCola block and append the correct suffix.

const target = 'otimizando os limites de manuten\\xA7\\xE3o do armaz\\xE9m."\\r\\n          }';
const regex = /impact: "Substituiu planilhas herdadas[^"]+"\s*\}/;

const match = content.match(regex);
if (match) {
    const newSuffix = `
        }
      }
    }
  })
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;

export const getDictionary = async (locale: string) => {
  return locale === 'pt' ? dictionaries.pt() : dictionaries.en();
};
`;
    content = content.substring(0, match.index + match[0].length) + newSuffix;
    fs.writeFileSync('src/lib/getDictionary.ts', content, 'utf8');
    console.log("Fixed the end of getDictionary.ts");
} else {
    console.log("Could not find the end of cocaCola block");
}
