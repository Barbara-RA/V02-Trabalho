// frutas = morango, amora, abacaxi, morango
// verduras= cebola e cenoura


const vetFrutas = ["ABACATE", "ABACAXI", "ABIU", "ABRICÓ", "ABRUNHO", "AÇAÍ", "ACEROLA", "AKEE", "ALFARROBA", "AMEIXA", "AMÊNDOA", "AMORA", "ANANÁS", "ANONA", "ARAÇÁ", "ARANDO", "ARATICUM", "ATA","ATEMOIA", "AVELÃ","BABACO", "BABAÇU", "BACABA", "BACURI", "BACUPARI", "BANANA", "BARU", "BERGAMOTA", "BIRIBÁ", "BURITI", "BUTIÁ","CABELUDINHA", "CACAU", "CAGAITA", "CAIMITO", "CAJÁ", "CAJU", "CALABAÇA", "CALABURA", "CALAMONDIN", "CAMBUCÁ", "CAMBUCI", "CAMU-CAMU", "CAQUI", "CARAMBOLA", "CARNAÚBA", "CASTANHA", "CASTANHA-DO-PARÁ", "CEREJA", "CIRIGUELA", "CIRUELA", "COCO", "CRANBERRY", "CUPUAÇU","DAMASCO","DEKOPON","DENDÊ","DIÓSPIRO","DOVYALIS","DURIÃO","EMBAÚBA","EMBAUBARANA", "ENGKALA", "ESCROPARI", "ESFREGADINHA", "ESPORÃO-DE-GALO","FIGO", "FRAMBOESA", "FRUTA-DO-CONDE", "FRUTA-PÃO", "FEIJOA", "FIGO-DA-ÍNDIA", "FRUTA-DE-CEDRO", "FRUTA-DE-LOBO", "FRUTA-DO-MILAGRE", "FRUTA-DE-TATU","GABIROBA", "GLICOSMIS", "GOIABA", "GRANADILLA", "GRAVATÁ", "GRAVIOLA", "GROSELHA", "GRUMIXAMA", "GUABIJU", "GUABIROBA", "GUARANÁ","HAWTHORN", "HEISTERIA", "HILOCÉREO","IBACURUPARI", "ILAMA", "IMBE", "IMBU", "INAJÁ", "INGÁ", "INHARÉ", "JABUTICABA", "JACA", "JAMBO", "JAMBOLÃO", "JAMELÃO", "JARACATIÁ", "JATOBÁ", "JENIPAPO", "JERIVÁ", "JUÁ", "JUJUBA","KIWI", "KUMQUAT", "KINKAN", "KINO", "KIWANO", "KABOSU", "KARITÉ", "KORLAN","LARANJA", "LIMÃO", "LIMA", "LICHIA", "LONGAN", "LUCUMA", "LACUCHA", "LULO", "LOBEIRA", "LANGSAT", "LARANJA-DE-PACU","MABOLO", "MAÇÃ", "MACADÂMIA", "MACAÚBA", "MAMÃO", "MAMEY", "MAMONCILLO", "MANÁ-CUBIU", "MANGA","MANGABA", "MANGOSTÃO", "MARACUJÁ", "MARANG", "MARMELO","MAROLO","MARULA", "MASSALA", "MELANCIA", "MELÃO", "MELOA", "MEXERICA", "MIRTILO", "MORANGO", "MURICI","NARANJILLA", "NECTARINA", "NÊSPERA", "NONI", "NOZ", "NOZ-PECÃ", "NOZ-MACADÂMIA","OITI", "OXICOCO", "ORANGELO","PERA", "PÊSSEGO", "PITANGA", "PINHA", "PITAIA", "PITOMBA", "PITANGATUBA", "PINDAÍBA", "PEQUI", "PEQUIÁ", "PHYSALIS", "PULASAN", "POMELO", "PUPUNHA", "PUÇÁ", "PATAUÁ", "PAJURÁ", "PIXIRICA", "PISTACHE","QUINA", "QUIUÍ", "QUIXABEIRA","ROMÃ", "RAMBAI", "RAMBUTÃO", "RUKAM","SAGUARAJI", "SALAK", "SANTOL", "SAPOTA", "SAPOTI", "SAPUCAIA", "SAPUTÁ", "SERIGUELA", "SORVINHA","TANGERINA", "TAMARINDO", "TÂMARA", "TORANJA", "TUCUMÃ", "TAIUVA", "TAPIÁ", "TARUMÃ", "TANGOR", "TUCUJÁ", "UVA", "UMBU", "UVAIA", "UCHUVA", "UMÊ", "UXI", "UCUUBA", "VACÍNIO", "VELUDO", "VERGAMOTA", "VELUDO-BRANCO","WAMPI", "XIXÁ","YAMAMOMO", "YUZU","ZIMBRO"];

vet_legumes = ["ABÓBORA", "ABOBRINHA", "AIPIM", "ALHO", "AMARANTO", "AMÊNDOA", "AMENDOIM", "AMENDOIM-DA-MATA", "ANDU", "ARACHACHÁ", "ARROZ", "ARROZ-SELVAGEM", "AVEIA", "AVELÃ", "AZEITONA", "BAROA", "BATATA", "BATATA-DOCE", "BERDANA", "BERINJELA", "BETERRABA", "CABOTCHAN", "CARÁ", "CARÁ-DO-AR", "CARÁ-MOELA", "CASTANHA-DE-BARU", "CASTANHA-DE-CAJU", "CASTANHA-DE-MACACO", "CASTANHA-DO-MARANHÃO", "CASTANHA-DO-PARÁ", "CASTANHEIRO-DO-MATO", "CAXI", "CEBOLA", "CELÓSIA", "CENOURA", "CENTEIO", "CEVADA", "CHALOTA", "CHIA", "CHICHÁ", "CHICHÁ-DO-NORTE", "CHUCHU", "COUVE-NABO", "COUVE-RÁBANO", "CUMARU", "DENDÊ", "ERVILHA", "ERVILHA-DE-POMBO", "ESCORCIONEIRA", "FAVA", "FEIJÃO", "FEIJÃO-ANDU", "FEIJÃO-AZUKI", "FEIJÃO-BOER", "FRUTA-PÃO", "GENGIBRE", "GERGELIM", "GIRASSOL", "GOBÔ", "GOYA", "GRÃO-DE-BICO", "GRUMIXAMA", "GUANDU", "INAJÁ", "INHAME", "JACA VERDE", "JALAPEÑO", "JICAMA", "JILÓ", "KOHLRABI", "LABACA", "LENTILHA", "LINHAÇA", "LÍRIO-DO-BREJO", "MACASSÁ", "MALAGUETA", "MALTE", "MANDIOCA", "MANDIOQUINHA", "MAXIXE", "MENDUBIGUAÇU", "MILHO", "MITSUBÁ", "MOGANGO", "MONGUBA", "MORANGA", "NABO", "NABO-DA-SUÉCIA", "NABO-MEXICANO", "NABO-SUECO", "NOZ", "NOZES-DA-MACADÂMIA", "OLIVA", "PALMITO", "PARU", "PAU-REI", "PÉ-DE-ANTA", "PELEGA", "PEPINO", "PEPINO-JAPONÊS", "PEQUI", "PIMENTA", "PIMENTÃO", "PINHÃO", "PISTACHE", "QUIABO", "QUINOA", "RABANETE", "RÁBANO", "RÁBANO-SILVESTRE", "RAIZ-FORTE", "RUTABAGA", "SHISSÔ", "SOJA", "SORGO", "TAIOBA", "TARO", "TOMATE", "TOMATE-CEREJA", "TONKA", "TRIGO", "TUPINAMBO", "URUCUM", "VAGEM", "WASABI", "XIXÁ", "XOCONOSTLE", "ZIZÂNIA"];

// Passo 1: solicitar o texto
texto = prompt("Informe umm texto qualquer:", "Eu amo abacaxi (amora, mexerica). Eu gosto de moranga. Você gosta de batata? Gosto também de cebola na comida. Cebola (alho) é bom demais.");


// Passo 2: substitur caracteres Especiais
texto = texto.replaceAll("("," ")
texto = texto.replaceAll(")"," ")
texto = texto.replaceAll("."," ")
texto = texto.replaceAll(","," ")
texto = texto.replaceAll("?"," ")
texto = texto.replaceAll("!"," ")

// Passo 3: Criar um vetor contendo todas as plavras do texto
texto = texto.split(" ");


// Passo 4: criar vetor para guardar as furtas que estão seu texto
frutas=[];

verduras=[];


for(i=0;i<texto.length;i++){
    if(vetFrutas.includes(texto[i].toUpperCase())){
        frutas.push(texto[i])
    }
}

for(i=0;i<texto.length;i++){
    if(vet_legumes.includes(texto[i].toUpperCase())){
        verduras.push(texto[i])
    }
}

document.write(`<h3>Frutas Encontradas</h3>`)
document.write(`<p>${frutas}</p>`)


document.write(`<h3>Verduras Encontradas</h3>`)
document.write(`<p>${verduras}</p>`)