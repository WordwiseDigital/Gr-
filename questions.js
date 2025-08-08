const meervoudeQuestions = [
    // Existing
    { question: 'boek', options: ['boeke', 'boeks', 'boeken'], answer: 'boeke' },
    { question: 'stoel', options: ['stoele', 'stoels', 'stoelen'], answer: 'stoele' },
    { question: 'tafel', options: ['tafels', 'tafele', 'tafel'], answer: 'tafels' },
    // New
    { question: 'bus', options: ['busse', 'buste', 'bus'], answer: 'busse' },
    { question: 'oog', options: ['oge', 'oë', 'ooglede'], answer: 'oë' },
    { question: 'skip', options: ['skips', 'skepe', 'skippe'], answer: 'skepe' },
    { question: 'stad', options: ['stade', 'stads', 'stede'], answer: 'stede' },
    { question: 'hemp', options: ['hemde', 'hemps', 'hempe'], answer: 'hemde' },
    { question: 'vlieg', options: ['vlieë', 'vliege', 'vliegs'], answer: 'vlieë' },
    { question: 'dag', options: ['dae', 'dags', 'dage'], answer: 'dae' },
    { question: 'pad', options: ['padde', 'paaie', 'paaieë'], answer: 'paaie' },
    { question: 'vraag', options: ['vrae', 'vraags', 'vrage'], answer: 'vrae' },
    { question: 'glas', options: ['glase', 'glasse', 'glaseë'], answer: 'glase' },
    { question: 'stoof', options: ['stowe', 'stowe', 'stoofs'], answer: 'stowe' },
    { question: 'brief', options: ['briewe', 'briefe', 'briefs'], answer: 'briewe' },
    { question: 'see', options: ['seë', 'seeë', 'sees'], answer: 'seë' },
    { question: 'knie', options: ['knieë', 'knie', 'knies'], answer: 'knieë' },
    { question: 'ouma', options: ['oumas', 'ouma\'s', 'oumas'], answer: 'oumas' },
    { question: 'foto', options: ['foto\'s', 'fotos', 'fotoe'], answer: 'foto\'s' },
    { question: 'skadu', options: ['skadus', 'skadu\'s', 'skaduwees'], answer: 'skaduwees' },
];

const verledeTydQuestions = [
    // Existing
    { start: 'Ek', verb: 'leer', end: 'vir die toets.', answer: 'het geleer' },
    { start: 'Die hond', verb: 'hardloop', end: 'in die park.', answer: 'het gehardloop' },
    { start: 'Ons', verb: 'eet', end: 'lekker kos.', answer: 'het geëet' },
    // New
    { start: 'Die man', verb: 'ry', end: 'die kar.', answer: 'het die kar gery' },
    { start: 'Ek', verb: 'skryf', end: '`n brief.', answer: 'het `n brief geskryf' },
    { start: 'Die voël', verb: 'sing', end: '`n lied.', answer: 'het `n lied gesing' },
    { start: 'Jy', verb: 'drink', end: 'die water.', answer: 'het die water gedrink' },
    { start: 'Die son', verb: 'skyn', end: 'helder.', answer: 'het helder geskyn' },
    { start: 'Die baba', verb: 'slaap', end: 'diep.', answer: 'het diep geslaap' },
    { start: 'Hulle', verb: 'koop', end: 'nuwe skoene.', answer: 'het nuwe skoene gekoop' },
    { start: 'Die kat', verb: 'klim', end: 'in die boom.', answer: 'het in die boom geklim' },
    { start: 'Ons', verb: 'help', end: 'vir Mamma.', answer: 'het vir Mamma gehelp' },
    { start: 'Die vis', verb: 'swem', end: 'in die dam.', answer: 'het in die dam geswem' },
    { start: 'Die meisie', verb: 'gooi', end: 'die bal.', answer: 'het die bal gegooi' },
    { start: 'Ek', verb: 'verloor', end: 'my sleutel.', answer: 'het my sleutel verloor' },
    { start: 'Hy', verb: 'bring', end: 'die kos.', answer: 'het die kos gebring' },
    { start: 'Ons', verb: 'sien', end: '`n film.', answer: 'het `n film gesien' },
    { start: 'Die kind', verb: 'val', end: 'van die stoel.', answer: 'het van die stoel geval' },
    { start: 'Sy', verb: 'maak', end: 'die deur oop.', answer: 'het die deur oopgemaak' },
];

const alfabetQuestions = [
    // Existing
    { question: 'Watter woord kom eerste in die alfabet?', options: ['appel', 'piesang', 'dadel'], answer: 'appel' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['son', 'maan', 'ster'], answer: 'ster' },
    { question: 'Watter woord kom eerste in die alfabet?', options: ['huis', 'boom', 'motor'], answer: 'boom' },
    // New
    { question: 'Watter woord kom laaste in die alfabet?', options: ['kat', 'hond', 'muis'], answer: 'muis' },
    { question: 'Watter woord kom eerste in die alfabet?', options: ['lemoen', 'appel', 'piesang'], answer: 'appel' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['tafel', 'stoel', 'bed'], answer: 'tafel' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['see', 'strand', 'son'], answer: 'son' },
    { question: 'Watter woord kom eerste in die alfabet?', options: ['winter', 'somer', 'herfs'], answer: 'herfs' },
    { question: 'Watter woord kom eerste in die alfabet?', options: ['vliegtuig', 'motor', 'fiets'], answer: 'fiets' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['potlood', 'pen', 'uitveër'], answer: 'uitveër' },
    { question: 'Watter woord kom eerste in die alfabet?', options: ['rok', 'broek', 'hemp'], answer: 'broek' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['skoen', 'sokkie', 'stewel'], answer: 'stewel' },
    { question: 'Watter woord kom eerste in die alfabet?', options: ['blou', 'rooi', 'groen'], answer: 'blou' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['een', 'twee', 'drie'], answer: 'twee' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['Maandag', 'Dinsdag', 'Woensdag'], answer: 'Woensdag' },
    { question: 'Watter woord kom eerste in die alfabet?', options: ['oom', 'tannie', 'neef'], answer: 'neef' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['vinger', 'toon', 'neus'], answer: 'toon' },
    { question: 'Watter woord kom eerste in die alfabet?', options: ['bord', 'koppie', 'piering'], answer: 'bord' },
    { question: 'Watter woord kom laaste in die alfabet?', options: ['vork', 'mes', 'lepel'], answer: 'vork' },
];

const voegwoordeQuestions = [
    // Existing
    { question: 'Ek hou van roomys, ___ ek is allergies vir neute.', options: ['maar', 'en', 'want'], answer: 'maar' },
    { question: 'Sy is moeg, ___ sy het die hele nag geleer.', options: ['want', 'maar', 'dus'], answer: 'want' },
    { question: 'Dit reën, ___ ons gaan steeds park toe.', options: ['al', 'want', 'en'], answer: 'al' },
    // New
    { question: 'Hy is ryk, ___ hy is nie gelukkig nie.', options: ['en', 'maar', 'dus'], answer: 'maar' },
    { question: 'Ek sal my huiswerk doen ___ ek gaan speel.', options: ['voordat', 'nadat', 'dan'], answer: 'dan' },
    { question: 'Jy moet gou maak, ___ jy gaan laat wees.', options: ['anders', 'of', 'want'], answer: 'anders' },
    { question: 'Die hond blaf ___ die kat krap.', options: ['en', 'maar', 'of'], answer: 'en' },
    { question: 'Hy het goeie punte gekry ___ hy het hard geleer.', options: ['omdat', 'alhoewel', 'maar'], answer: 'omdat' },
    { question: 'Sy dra `n serp, ___ dit is koud.', options: ['want', 'dus', 'en'], answer: 'want' },
    { question: 'Ons kan gaan fliek ___ ons kan by die huis bly.', options: ['of', 'en', 'maar'], answer: 'of' },
    { question: 'Die telefoon lui, ___ niemand antwoord nie.', options: ['want', 'maar', 'dus'], answer: 'maar' },
    { question: 'Jy moet jou tande borsel ___ jy gaan slaap.', options: ['terwyl', 'nadat', 'voordat'], answer: 'voordat' },
    { question: 'Ek sal jou help ___ jy my help.', options: ['as', 'wanneer', 'terwyl'], answer: 'as' },
    { question: 'Hy het geslaap ___ die film gekyk het.', options: ['terwyl', 'voordat', 'nadat'], answer: 'terwyl' },
    { question: 'Dit het begin reën, ___ het ons huis toe gegaan.', options: ['daarom', 'want', 'maar'], answer: 'daarom' },
    { question: 'Sy het die koek geëet ___ sy veronderstel was om te wag.', options: ['omdat', 'alhoewel', 'as'], answer: 'alhoewel' },
    { question: 'Hy is sterk ___ `n leeu.', options: ['soos', 'as', 'dan'], answer: 'soos' },
    { question: 'Ek sal wag ___ jy klaar is.', options: ['totdat', 'as', 'voordat'], answer: 'totdat' },
];

const vraagwoordeQuestions = [
    { question: '___ is jou naam?', options: ['Wat', 'Waar', 'Wie'], answer: 'Wat' },
    { question: '___ woon jy?', options: ['Wat', 'Waar', 'Wie'], answer: 'Waar' },
    { question: '___ is daardie man?', options: ['Wat', 'Waar', 'Wie'], answer: 'Wie' },
    { question: '___ gaan ons eet?', options: ['Wanneer', 'Hoekom', 'Hoeveel'], answer: 'Wanneer' },
];

const voorsetselsQuestions = [
    { question: 'Die boek is ___ die tafel.', options: ['op', 'onder', 'in'], answer: 'op' },
    { question: 'Die kat slaap ___ die bed.', options: ['op', 'onder', 'in'], answer: 'onder' },
    { question: 'Die melk is ___ die bottel.', options: ['op', 'onder', 'in'], answer: 'in' },
    { question: 'Hy sit ___ die stoel.', options: ['langs', 'deur', 'op'], answer: 'op' },
];

const verkleinwoordeQuestions = [
    { question: 'hond', options: ['hondjie', 'hondjie', 'hondie'], answer: 'hondjie' },
    { question: 'kat', options: ['katjie', 'kattie', 'katetjie'], answer: 'katjie' },
    { question: 'boom', options: ['boompie', 'boomie', 'boometjie'], answer: 'boompie' },
    { question: 'huis', options: ['huisie', 'huisetjie', 'huisjie'], answer: 'huisie' },
];

const trappeVanVergelykingQuestions = [
    { question: 'groot', options: ['groter', 'grooter', 'meer groot'], answer: 'groter' },
    { question: 'mooi', options: ['mooier', 'meer mooi', 'mooiste'], answer: 'mooier' },
    { question: 'vinnig', options: ['vinniger', 'snel', 'meer vinnig'], answer: 'vinniger' },
    { question: 'goed', options: ['beter', 'goeder', 'meer goed'], answer: 'beter' },
];

const sinsoorteQuestions = [
    { question: 'Die son skyn.', options: ['Stelsin', 'Vraagsin', 'Bevelsin'], answer: 'Stelsin' },
    { question: 'Wat is jou naam?', options: ['Stelsin', 'Vraagsin', 'Uitroepsin'], answer: 'Vraagsin' },
    { question: 'Maak die deur toe!', options: ['Vraagsin', 'Bevelsin', 'Stelsin'], answer: 'Bevelsin' },
    { question: 'Eina, dit is seer!', options: ['Stelsin', 'Uitroepsin', 'Vraagsin'], answer: 'Uitroepsin' },
];

const vormeQuestions = [
    { question: 'onderwyser', options: ['onderwyseres', 'onderwyserin', 'onderwyseres'], answer: 'onderwyseres' },
    { question: 'leeu', options: ['leeuin', 'leeuwyfie', 'leeuin'], answer: 'leeuin' },
    { question: 'prins', options: ['prinses', 'prinsesin', 'prinses'], answer: 'prinses' },
    { question: 'sanger', options: ['sangerin', 'sangeres', 'sangeres'], answer: 'sangeres' },
];

const versamelnameQuestions = [
    { question: '`n ___ voëls', options: ['swerm', 'skool', 'trop'], answer: 'swerm' },
    { question: '`n ___ visse', options: ['swerm', 'skool', 'trop'], answer: 'skool' },
    { question: '`n ___ beeste', options: ['kudde', 'swerm', 'trop'], answer: 'kudde' },
    { question: '`n ___ mense', options: ['skare', 'bende', 'groep'], answer: 'skare' },
];

const antoniemeSinoniemeQuestions = [
    { question: 'Wat is die antoniem van "groot"?', options: ['klein', 'lank', 'wyd'], answer: 'klein' },
    { question: 'Wat is die sinoniem van "bly"?', options: ['gelukkig', 'hartseer', 'kwaad'], answer: 'gelukkig' },
    { question: 'Wat is die antoniem van "warm"?', options: ['koud', 'lou', 'warm'], answer: 'koud' },
    { question: 'Wat is die sinoniem van "praat"?', options: ['gesels', 'skree', 'luister'], answer: 'gesels' },
];

const toekomendeTydQuestions = [
    { start: 'Ek', verb: 'leer', end: 'vir die toets.', answer: 'sal vir die toets leer' },
    { start: 'Die hond', verb: 'hardloop', end: 'in die park.', answer: 'sal in die park hardloop' },
    { start: 'Ons', verb: 'eet', end: 'lekker kos.', answer: 'sal lekker kos eet' },
    { start: 'Sy', verb: 'lees', end: 'die boek.', answer: 'sal die boek lees' },
];

const woordordeQuestions = [
    { question: 'gister die seun het die bal geskop', answer: 'Die seun het gister die bal geskop' },
    { question: 'in die oggend die voëls sing', answer: 'Die voëls sing in die oggend' },
    { question: 'my ma koek bak in die kombuis', answer: 'My ma bak koek in die kombuis' },
    { question: 'lees die meisie `n boek in haar kamer', answer: 'Die meisie lees `n boek in haar kamer' },
];
