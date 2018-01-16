const BOYS_GIRLS = [
    {
        id: 1,
        question: 'Who made you?',
        answer: 'God made me',
        fillQuestion: '** made me',
        fillAnswer: ['god']
    },
    {
        id: 2,
        question: 'What else did God make?',
        answer: 'God made all things',
        fillQuestion: 'God made ** things',
        fillAnswer: ['all']
    },
    {
        id: 3,
        question: 'Why did God make you and all things?',
        answer: 'For his own glory',
        fillQuestion: 'For his own **',
        fillAnswer: ['glory']
    },
    {
        id: 4,
        question: 'How can you glorify God?',
        answer: 'By loving him and doing what he commands',
        fillQuestion: 'By ** him and doing what he **',
        fillAnswer: ['loving', 'commands']
    },
    {
        id: 5,
        question: 'Why ought you to glorify God?',
        answer: 'Because he made me and takes care of me',
        fillQuestion: 'Because he ** me and takes ** of me',
        fillAnswer: ['made', 'care']
    },
    {
        id: 6,
        question: 'Are there more gods than one?',
        answer: 'There is only one God',
        fillQuestion: 'There is only ** God',
        fillAnswer: ['one']
    },
    {
        id: 7,
        question: 'In how many persons does this one God exist?',
        answer: 'In three persons',
        fillQuestion: 'In ** persons',
        fillAnswer: ['three']
    },
    {
        id: 8,
        question: 'Who are they?',
        answer: 'The Father, the Son, and the Holy Spirit',
        fillQuestion: 'The **, the **, and the Holy **',
        fillAnswer: ['father', 'son', 'spirit']
    },
    {
        id: 9,
        question: 'Who is God?',
        answer: 'God is a Spirit, and does not have a body like men',
        fillQuestion: 'God is a **, and does not have a ** like men',
        fillAnswer: ['spirit', 'body']
    },
    {
        id: 10,
        question: 'Where is God?',
        answer: 'God is everywhere',
        fillQuestion: 'God is *',
        fillAnswer: ['everywhere']
    },
    {
        id: 11,
        question: 'Can you see God?',
        answer: 'No. I cannot see God, but he always sees me',
        fillQuestion: 'No. I cannot ** God, but he always ** me',
        fillAnswer: ['see', 'sees']
    },
    {
        id: 12,
        question: 'Does God know all things?',
        answer: 'Yes. Nothing can be hidden from God',
        fillQuestion: 'Yes. Nothing can be ** from God',
        fillAnswer: ['hidden']
    },
    {
        id: 13,
        question: 'Can God do all things?',
        answer: 'Yes. God can do all his holy will',
        fillQuestion: 'Yes. God can do all his ** will',
        fillAnswer: ['holy']
    },
    {
        id: 14,
        question: 'Where do you learn how to love and obey God?',
        answer: 'In the Bible alone',
        fillQuestion: 'In the ** alone',
        fillAnswer: ['bible']
    },
    {
        id: 15,
        question: 'Who wrote the Bible?',
        answer: 'Holy men who were taught by the Holy Spirit',
        fillQuestion: '** men who were taught by the Holy **',
        fillAnswer: ['holy', 'spirit']
    },
    {
        id: 16,
        question: 'Who were our first parents?',
        answer: 'Adam and Eve',
        fillQuestion: '** and **',
        fillAnswer: ['adam', 'eve']
    },
    {
        id: 17,
        question: 'Of what were our first parents made?',
        answer: 'God made the body of Adam out of the ground, and formed Eve from the body of Adam',
        fillQuestion: 'God made the ** of Adam out of the **, and formed Eve from the ** of Adam',
        fillAnswer: ['body', 'ground', 'body']
    },
    {
        id: 18,
        question: 'What did God give Adam and Eve besides bodies?',
        answer: 'He gave them souls that could never die',
        fillQuestion: 'He gave them ** that could never **',
        fillAnswer: ['souls', 'die']
    },
    {
        id: 19,
        question: 'Have you a soul as well as a body?',
        answer: 'Yes, I have a soul that can never die',
        fillQuestion: 'Yes, I have a soul that can never **',
        fillAnswer: ['die']
    },
    {
        id: 20,
        question: 'How do you know that you have a soul?',
        answer: 'Because the Bible tells me so',
        fillQuestion: 'Because the ** tells me so',
        fillAnswer: ['bible']
    },
    {
        id: 21,
        question: 'In what condition did God make Adam and Eve?',
        answer: 'He made them holy and happy',
        fillQuestion: 'He made them ** and **',
        fillAnswer: ['holy', 'happy']
    },
    {
        id: 22,
        question: 'Did Adam and Eve stay holy and happy?',
        answer: 'No. They sinned against God',
        fillQuestion: 'No. They ** against God',
        fillAnswer: ['sinned']
    },
    {
        id: 23,
        question: 'What is sin?',
        answer: 'Sin is any transgression of the law of God',
        fillQuestion: 'Sin is any ** of the ** of God',
        fillAnswer: ['transgression', 'law']
    },
    {
        id: 24,
        question: 'What is meant by transgression?',
        answer: 'Doing what God forbids',
        fillQuestion: 'Doing what God forbids',
        fillAnswer: ['all']
    },
    {
        id: 25,
        question: 'What was the sin of our first parents?',
        answer: 'Eating the forbidden fruit',
        fillQuestion: 'Eating the ** fruit',
        fillAnswer: ['forbidden']
    },
    {
        id: 26,
        question: 'Why did they eat the forbidden fruit?',
        answer: 'Because they did not believe what God had said',
        fillQuestion: 'Because they did not ** what God had said',
        fillAnswer: ['believe']
    },
    {
        id: 27,
        question: 'Who tempted them to this sin?',
        answer: 'The devil tempted Eve, and she gave the fruit to Adam',
        fillQuestion: 'The ** tempted Eve, and she gave the fruit to **',
        fillAnswer: ['devil', 'adam']
    },
    {
        id: 28,
        question: 'What happened to our first parents when they had sinned?',
        answer: 'Instead of being holy and happy, they became sinful and miserable',
        fillQuestion: 'Instead of being holy and happy, they became ** and **',
        fillAnswer: ['sinful', 'miserable']
    },
    {
        id: 29,
        question: 'What effect did the sin of Adam have on all mankind?',
        answer: 'All mankind is born in a state of sin and misery',
        fillQuestion: 'All mankind is born in a state of ** and **',
        fillAnswer: ['sin', 'misery']
    },
    {
        id: 30,
        question: 'What do we inherit from Adam as a result of this original sin?',
        answer: 'A sinful nature',
        fillQuestion: 'A ** nature',
        fillAnswer: ['sinful']
    },
    {
        id: 31,
        question: 'What does every sin deserve?',
        answer: 'The anger and judgment of God',
        fillQuestion: 'The ** and ** of God',
        fillAnswer: ['anger', 'judgment']
    },
    {
        id: 32,
        question: 'Can anyone go to heaven with this sinful nature?',
        answer: 'No. Our hearts must be changed before we can be fit for heaven',
        fillQuestion: 'No. Our hearts must be ** before we can be fit for **',
        fillAnswer: ['changed', 'heaven']
    },
    {
        id: 33,
        question: 'What is a change of heart called?',
        answer: 'Regeneration',
        fillQuestion: '**',
        fillAnswer: ['regeneration']
    },
    {
        id: 34,
        question: 'Who can change a sinner\'s heart?',
        answer: 'The Holy Spirit alone',
        fillQuestion: 'The Holy ** alone',
        fillAnswer: ['spirit']
    },
    {
        id: 35,
        question: 'What is righteousness?',
        answer: 'It is God\'s goodness',
        fillQuestion: 'It is God\'s **',
        fillAnswer: ['goodness']
    },
    {
        id: 36,
        question: 'Can anyone be saved by his own righteousness?',
        answer: 'No. No one is good enough for God',
        fillQuestion: 'No. No one is ** enough for **',
        fillAnswer: ['good', 'god']
    },
    {
        id: 37,
        question: 'What is a covenant?',
        answer: 'An agreement between two or more persons',
        fillQuestion: 'An ** between two or more persons',
        fillAnswer: ['agreement']
    },
    {
        id: 38,
        question: 'What is the covenant of grace?',
        answer: 'The agreement God made with His elect people to save them from their sins',
        fillQuestion: 'The ** God made with His ** people to save them from their **',
        fillAnswer: ['agreement', 'elect', 'sins']
    },
    {
        id: 39,
        question: 'What did Christ undertake in the covenant of grace?',
        answer: 'To keep the whole law for His people and to suffer the punishment due to their sins',
        fillQuestion: 'To keep the whole ** for His people and to suffer the ** due to their sins',
        fillAnswer: ['law', 'punishment']
    },
    {
        id: 40,
        question: 'Did our Lord Jesus Christ ever sin?',
        answer: 'No. He was holy, blameless and undefiled',
        fillQuestion: 'No. He was **, blameless and **',
        fillAnswer: ['holy', 'undefiled']
    },
    {
        id: 41,
        question: 'How could the Son of God suffer?',
        answer: 'Christ, the Son of God, took flesh and blood, that He might obey and suffer as a man',
        fillQuestion: 'Christ, the Son of God, took ** and blood, that He might ** and ** as a man',
        fillAnswer: ['flesh', 'obey', 'suffer']
    },
    {
        id: 42,
        question: 'What is meant by the atonement?',
        answer: 'Christ satisfying divine justice, by His sufferings and death, in the place of sinners',
        fillQuestion: 'Christ ** divine justice, by His sufferings and death, in the ** of sinners',
        fillAnswer: ['satisfying', 'place']
    },
    {
        id: 43,
        question: 'What did God the Father undertake in the covenant of grace?',
        answer: 'To justify, adopt and sanctify those for whom Christ should die',
        fillQuestion: 'To **, adopt and ** those for whom Christ should die',
        fillAnswer: ['justify', 'sanctify']
    },
    {
        id: 44,
        question: 'What is justification?',
        answer: 'It is God regarding sinners as if they had never sinned and granting them righteousness',
        fillQuestion: 'It is God ** sinners as if they had never ** and granting them **',
        fillAnswer: ['regarding', 'sinned', 'righteousness']
    },
    {
        id: 45,
        question: 'What is sanctification?',
        answer: 'It is God making sinners holy in heart and conduct',
        fillQuestion: 'It is God making sinners ** in heart and **',
        fillAnswer: ['holy', 'conduct']
    },
    {
        id: 46,
        question: 'For whom did Christ obey and suffer?',
        answer: 'For those whom the Father had given Him',
        fillQuestion: 'For those whom the ** had ** Him',
        fillAnswer: ['father', 'given']
    },
    {
        id: 47,
        question: 'What kind of life did Christ live on earth?',
        answer: 'A life of perfect obedience to the law of God',
        fillQuestion: 'A life of perfect ** to the ** of God',
        fillAnswer: ['obedience', 'law']
    },
    {
        id: 48,
        question: 'What kind of death did Christ die?',
        answer: 'The painful and shameful death of the cross',
        fillQuestion: 'The ** and ** death of the **',
        fillAnswer: ['painful', 'shameful', 'cross']
    },
    {
        id: 49,
        question: 'Who will be saved?',
        answer: 'Only those who repent of sin and believe in Christ',
        fillQuestion: 'Only those who ** of sin and ** in Christ',
        fillAnswer: ['repent', 'believe']
    },
    {
        id: 50,
        question: 'What is it to repent?',
        answer: 'To be sorry for sin, and to hate and forsake it because it is displeasing to God',
        fillQuestion: 'To be ** for sin, and to ** and forsake it because it is ** to God',
        fillAnswer: ['sorry', 'hate', 'displeasing']
    },
    {
        id: 51,
        question: 'What is it to believe in Christ?',
        answer: 'To trust in Christ alone for salvation',
        fillQuestion: 'To trust in Christ ** for **',
        fillAnswer: ['alone', 'salvation']
    },
    {
        id: 52,
        question: 'Can you repent and believe in Christ by your own power?',
        answer: 'No. I can do nothing good without God\'s Holy Spirit',
        fillQuestion: 'No. I can do nothing ** without God\'s Holy **',
        fillAnswer: ['good', 'spirit']
    },
    {
        id: 53,
        question: 'How can you receive the Holy Spirit?',
        answer: 'God has told us that we must pray to Him for the Holy Spirit',
        fillQuestion: 'God has told us that we must ** to Him for the Holy **',
        fillAnswer: ['pray', 'spirit']
    },
    {
        id: 54,
        question: 'How were godly persons saved before the coming of Christ?',
        answer: 'By believing in the Savior to come',
        fillQuestion: 'By believing in the Savior to come',
        fillAnswer: ['all']
    },
    {
        id: 55,
        question: 'How did they show their faith?',
        answer: 'By offering sacrifices on God\'s altar',
        fillQuestion: 'By offering ** on God\'s **',
        fillAnswer: ['sacrifices', 'altar']
    },
    {
        id: 56,
        question: 'What did these sacrifices represent?',
        answer: 'Christ, the Lamb of God, who was to die for sinners',
        fillQuestion: '**, the Lamb of God, who was to ** for sinners',
        fillAnswer: ['christ', 'die']
    },
    {
        id: 57,
        question: 'What does Christ do for His people?',
        answer: 'He does the work of a prophet, a priest and a king',
        fillQuestion: 'He does the work of a **, a ** and a **',
        fillAnswer: ['prophet', 'priest', 'king']
    },
    {
        id: 58,
        question: 'Why is Christ a prophet?',
        answer: 'Because He teaches us the will of God',
        fillQuestion: 'Because He ** us the ** of God',
        fillAnswer: ['teaches', 'will']
    },
    {
        id: 59,
        question: 'Why is Christ a priest?',
        answer: 'Because He died for our sins and prays to God for us',
        fillQuestion: 'Because He ** for our sins and ** to God for us',
        fillAnswer: ['died', 'prays']
    },
    {
        id: 60,
        question: 'Why is Christ a king?',
        answer: 'Because He rules over us and defends us',
        fillQuestion: 'Because He ** over us and ** us',
        fillAnswer: ['rules', 'defends']
    },
    {
        id: 61,
        question: 'Why do you need Christ as a prophet?',
        answer: 'Because I am ignorant',
        fillQuestion: 'Because I am **',
        fillAnswer: ['ignorant']
    },
    {
        id: 62,
        question: 'Why do you need Christ as a priest?',
        answer: 'Because I am guilty',
        fillQuestion: 'Because I am **',
        fillAnswer: ['guilty']
    },
    {
        id: 63,
        question: 'Why do you need Christ as a king?',
        answer: 'Because I am weak and helpless',
        fillQuestion: 'Because I am ** and **',
        fillAnswer: ['weak', 'helpless']
    },
    {
        id: 64,
        question: 'How many commandments did God give on Mt. Sinai?',
        answer: 'Ten commandments',
        fillQuestion: '** commandments',
        fillAnswer: ['ten']
    },
    {
        id: 65,
        question: 'What are the ten commandments sometimes called?',
        answer: 'God\'s moral law',
        fillQuestion: 'God\'s ** law',
        fillAnswer: ['moral']
    },
    {
        id: 66,
        question: 'What do the first four commandments teach?',
        answer: 'Our duty to God',
        fillQuestion: 'Our ** to God',
        fillAnswer: ['duty']
    },
    {
        id: 67,
        question: 'What do the last six commandments teach?',
        answer: 'Our duty to our fellow men',
        fillQuestion: 'Our duty to our ** men',
        fillAnswer: ['**']
    },
    {
        id: 68,
        question: 'What is the sum of the ten commandments?',
        answer: 'To love God with all my heart, and my neighbor as myself',
        fillQuestion: 'To love God with all my **, and my ** as myself',
        fillAnswer: ['heart', 'neighbor']
    },
    {
        id: 69,
        question: 'Who is your neighbor?',
        answer: 'All my fellow men are my neighbors',
        fillQuestion: 'All my ** men are my **',
        fillAnswer: ['fellow', 'neighbors']
    },
    {
        id: 70,
        question: 'Is God pleased with those who love and obey him?',
        answer: 'Yes. He says, \'I love them that love me\'',
        fillQuestion: '**. He says, \'I ** them that ** me\'',
        fillAnswer: ['yes', 'love', 'love']
    },
    {
        id: 71,
        question: 'Is God pleased with those who do not love and obey him?',
        answer: 'No. "God is angry with the wicked every day"',
        fillQuestion: '**. "God is ** with the ** every day"',
        fillAnswer: ['no', 'angry', 'wicked']
    },
    {
        id: 72,
        question: 'What is the first commandment?',
        answer: 'The first commandment is, "You shall have no other gods before Me"',
        fillQuestion: 'The first commandment is, "You shall have ** other ** before **"',
        fillAnswer: ['no', 'gods', 'me']
    },
    {
        id: 73,
        question: 'What does the first commandment teach us?',
        answer: 'To worship God only',
        fillQuestion: 'To ** God **',
        fillAnswer: ['worship', 'only']
    },
    {
        id: 74,
        question: 'What is the second commandment?',
        answer: 'The second commandment is, "You shall not make for yourself any carved image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: you shall not bow down to them nor serve them. For I, the LORD your God, am a jealous God, visiting the iniquity of the fathers on the children to the third and fourth generations of those that hate Me, but showing mercy to thousands, to those who love Me, and keep My commandments."',
        fillQuestion: 'The second commandment is, "You shall not make for yourself any carved **, or any ** of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: you shall not ** down to them nor ** them. For I, the LORD your God, am a ** God, visiting the ** of the fathers on the children to the third and fourth generations of those that hate Me, but showing ** to thousands, to those who ** Me, and ** My commandments."',
        fillAnswer: ['image', 'likeness', 'bow', 'serve', 'jealous', 'iniquity', 'love', 'keep']
    },
    {
        id: 75,
        question: 'What does the second commandment teach us?',
        answer: 'To worship God in the right way and to avoid idolatry.',
        fillQuestion: 'To worship God in the ** way and to avoid **.',
        fillAnswer: ['right', 'idolatry']
    },
    {
        id: 76,
        question: 'What is the third commandment?',
        answer: 'The third commandment is, "You shall not take the name of the LORD your God in vain; for the LORD will not hold him guiltless who takes His name iin vain.',
        fillQuestion: 'The third commandment is, "You shall not take the ** of the LORD your God in **; for the LORD will not hold him ** who takes His name iin vain.',
        fillAnswer: ['name', 'vain', 'guiltless']
    },
    {
        id: 77,
        question: 'What does the third commandment teach us?',
        answer: 'To reverence God\'s name, word and works',
        fillQuestion: 'To ** God\'s **, word and **',
        fillAnswer: ['reverence', 'name', 'works']
    },
    {
        id: 78,
        question: 'What is the fourth commandment?',
        answer: 'The fourth commandment is, Remember the Sabbath day to keep it holy. Six days you shall labor and do all your work: but the seventh day is the Sabbath of the LORD your God. In it you shall do no work, you nor your son, nor your daughter, nor your manservant, nor your maidservant, nor your cattle, nor your stranger that is within your gates. For in six days the LORD made heaven and earth, the sea, and all that is in them, and rested the seventh day. Therefore the LORD blessed the Sabbath day, and hallowed it',
        fillQuestion: 'The fourth commandment is, Remember the ** day to keep it **. Six days you shall labor and do all your **: but the ** day is the Sabbath of the LORD your God. In it you shall do no work, you nor your son, nor your daughter, nor your manservant, nor your maidservant, nor your cattle, nor your stranger that is within your gates. For in ** days the LORD made heaven and earth, the sea, and all that is in them, and rested the ** day. Therefore the LORD ** the Sabbath day, and hallowed it',
        fillAnswer: ['sabbath', 'holy', 'work', 'seventh', 'six', 'seventh', 'blessed']
    },
    {
        id: 79,
        question: 'What does the fourth commandment teach us?',
        answer: 'To keep the Sabbath holy',
        fillQuestion: 'To keep the Sabbath **',
        fillAnswer: ['holy']
    },
    {
        id: 80,
        question: 'What day of the week is the Christian Sabbath?',
        answer: 'The first day of the week, called the Lord\'s Day',
        fillQuestion: 'The ** day of the week, called the Lord\'s **',
        fillAnswer: ['first', 'day']
    },
    {
        id: 81,
        question: 'Why is it called the Lord\'s Day?',
        answer: 'Because on that day Christ rose from the dead',
        fillQuestion: 'Because on that day ** rose from the **',
        fillAnswer: ['christ', 'dead']
    },
    {
        id: 82,
        question: 'How should the Sabbath be kept?',
        answer: 'In prayer and praise, in hearing and reading God\'s Word, and in doing good to our fellow men',
        fillQuestion: 'In prayer and **, in hearing and ** God\'s Word, and in doing ** to our fellow men',
        fillAnswer: ['praise', 'reading', 'good']
    },
    {
        id: 83,
        question: 'What is the fifth commandment?',
        answer: 'The fifth commandment is, "Honor your father and your mother, that your days may be long upon the land which the LORD your God is giving you',
        fillQuestion: 'The fifth commandment is, "** your ** and your **, that your days may be ** upon the land which the LORD your God is giving you',
        fillAnswer: ['honor', 'father', 'mother', 'long']
    },
    {
        id: 84,
        question: 'What does the fifth commandment teach us?',
        answer: 'To love and obey our parents',
        fillQuestion: 'To ** and ** our **',
        fillAnswer: ['love', 'obey', 'parents']
    },
    {
        id: 85,
        question: 'What is the sixth commandment?',
        answer: 'This sixth commandment is, "You shall not murder"',
        fillQuestion: 'This sixth commandment is, "You shall not **"',
        fillAnswer: ['murder']
    },
    {
        id: 86,
        question: 'What does the sixth commandment teach us?',
        answer: 'To avoid hatred',
        fillQuestion: 'To avoid **',
        fillAnswer: ['hatred']
    },
    {
        id: 87,
        question: 'What is the seventh commandment?',
        answer: 'The seventh commandment is, "You shall not commit adultery"',
        fillQuestion: 'The seventh commandment is, "You shall not commit **"',
        fillAnswer: ['adultery']
    },
    {
        id: 88,
        question: 'What does the seventh commandment teach us?',
        answer: 'To be pure in heart, language, and conduct',
        fillQuestion: 'To be ** in **, language, and **',
        fillAnswer: ['pure', 'heart', 'conduct']
    },
    {
        id: 89,
        question: 'What is the eighth commandment?',
        answer: 'The eighth commandment is, "You shall not steal"',
        fillQuestion: 'The eighth commandment is, "You shall not **"',
        fillAnswer: ['steal']
    },
    {
        id: 90,
        question: 'What does the eighth commandment teach us?',
        answer: 'To be honest and not to take the things of others',
        fillQuestion: 'To be ** and not to ** the things of others',
        fillAnswer: ['honest', 'take']
    },
    {
        id: 91,
        question: 'What is the ninth commandment?',
        answer: 'The ninth commandment is, "You shall not bear false witness against your neighbor',
        fillQuestion: 'The ninth commandment is, "You shall not bear false ** against your **',
        fillAnswer: ['witness', 'neighbor']
    },
    {
        id: 92,
        question: 'What does the ninth commandment teach us?',
        answer: 'To tell the truth and not to speak evil of others',
        fillQuestion: 'To tell the ** and not to speak ** of others',
        fillAnswer: ['truth', 'evil']
    },
    {
        id: 93,
        question: 'What is the tenth commandment?',
        answer: 'The tenth commandment is, "You shall not covet your neighbor\'s house, you shall not covet your neighbor\'s wife, nor his manservant, nor his maidservant, nor his ox, nor his donkey, nor any thing that is your neighbor\'s',
        fillQuestion: 'The tenth commandment is, "You shall not ** your neighbor\'s house, you shall not ** your neighbor\'s wife, nor his manservant, nor his maidservant, nor his ox, nor his donkey, nor any thing that is your neighbor\'s',
        fillAnswer: ['covet']
    },
    {
        id: 94,
        question: 'What does the tenth commandment teach us?',
        answer: 'To be content with what we have',
        fillQuestion: 'To be ** with what we **',
        fillAnswer: ['content', 'have']
    },
    {
        id: 95,
        question: 'Can any man keep these Ten Commandments perfectly?',
        answer: 'No mere man, since the fall of Adam, ever did or can keep the Ten Commandments perfectly',
        fillQuestion: 'No ** man, since the fall of **, ever did or can keep the Ten Commandments **',
        fillAnswer: ['mere', 'adam', 'perfectly']
    },
    {
        id: 96,
        question: 'Of what use are the Ten Commandments to us?',
        answer: 'They teach us our duty and show us our need of a Savior',
        fillQuestion: 'They teach us our ** and show us our need of a **',
        fillAnswer: ['duty', 'savior']
    },
    {
        id: 97,
        question: 'What is prayer?',
        answer: 'Prayer is talking with God',
        fillQuestion: 'Prayer is ** with **',
        fillAnswer: ['talking', 'god']
    },
    {
        id: 98,
        question: 'In whose name should we pray?',
        answer: 'Only in the name of Christ',
        fillQuestion: 'Only in the ** of **',
        fillAnswer: ['name', 'christ']
    },
    {
        id: 99,
        question: 'What has Christ given to teach us how to pray?',
        answer: 'The Lord\'s Prayer',
        fillQuestion: 'The ** Prayer',
        fillAnswer: ['Lord\'s']
    },
    {
        id: 100,
        question: 'Repeat the Lord\'s Prayer',
        answer: 'Our Father in heaven, hallowed be Your name. Your kingdom come. Your will be done on earth, as it is in heaven. Give us this day our daily bread. And forgive us our debts as we forgive our debtors. And do not lead us into temptation, but deliver us from the evil one. For Yours is the kingdom and the power and the glory forever. Amen.',
        fillQuestion: 'Our Father in **, hallowed be Your **. Your ** come. Your ** be done on earth, as it is in heaven. Give us this day our daily **. And ** us our debts as we forgive our **. And do not lead us into **, but ** us from the evil one. For Yours is the ** and the ** and the ** forever. Amen.',
        fillAnswer: ['heaven', 'name', 'kingdom', 'will', 'bread', 'forgive', 'debtors', 'temptation', 'deliver', 'kingdom', 'power', 'glory']
    },
    {
        id: 101,
        question: 'How many petitions are there in the Lord\'s Prayer?',
        answer: 'Six',
        fillQuestion: '**',
        fillAnswer: ['six']
    },
    {
        id: 102,
        question: 'What is the first petition?',
        answer: 'Hallowed be Your name',
        fillQuestion: '** be Your **',
        fillAnswer: ['hallowed', 'name']
    },
    {
        id: 103,
        question: 'What do we pray for in the first petition?',
        answer: 'That God\'s name may be honored by us and all men',
        fillQuestion: 'That God\'s ** may be ** by us and all **',
        fillAnswer: ['name', 'honored', 'men']
    },
    {
        id: 104,
        question: 'What is the second petition?',
        answer: 'Thy kingdom come',
        fillQuestion: 'Thy ** come',
        fillAnswer: ['kingdom']
    },
    {
        id: 105,
        question: 'What do we pray for in the second petition?',
        answer: 'That the gospel may be preached in all the world, and believed and obeyed by us and all men',
        fillQuestion: 'That the gospel may be ** in all the world, and ** and ** by us and all men',
        fillAnswer: ['preached', 'believed', 'obeyed']
    },
    {
        id: 106,
        question: 'What is the third petition?',
        answer: 'Your will be done on earth as it is in heaven',
        fillQuestion: 'Your ** be done on ** as it is in **',
        fillAnswer: ['will', 'earth', 'heaven']
    },
    {
        id: 107,
        question: 'What do we pray for in the third petition?',
        answer: 'That men on earth may serve God as the angels do in heaven',
        fillQuestion: 'That men on earth may ** God as the ** do in heaven',
        fillAnswer: ['serve', 'angels']
    },
    {
        id: 108,
        question: 'What is the fourth petition?',
        answer: 'Give us this day our daily bread',
        fillQuestion: '** us this day our daily **',
        fillAnswer: ['give', 'bread']
    },
    {
        id: 109,
        question: 'What do we pray for in the fourth petition?',
        answer: 'That God will give us all things needful for our bodies',
        fillQuestion: 'That God will ** us all things ** for our **',
        fillAnswer: ['give', 'needful', 'bodies']
    },
    {
        id: 110,
        question: 'What is the fifth petition?',
        answer: 'And forgive us our debts, as we forgive our debtors',
        fillQuestion: 'And ** us our **, as we forgive our **',
        fillAnswer: ['forgive', 'debts', 'debtors']
    },
    {
        id: 111,
        question: 'What do we pray for in the fifth petition?',
        answer: 'That God will pardon our sins and help us to forgive those who have sinned against us',
        fillQuestion: 'That God will ** our sins and help us to ** those who have ** against us',
        fillAnswer: ['pardon', 'forgive', 'sinned']
    },
    {
        id: 112,
        question: 'What is the sixth petition?',
        answer: 'And do not lead us into temptation, but deliver us from the evil one',
        fillQuestion: 'And do not lead us into **, but deliver us from the ** one',
        fillAnswer: ['temptation', 'evil']
    },
    {
        id: 113,
        question: 'What do we pray for in the sixth petition?',
        answer: 'That God will keep us from sin',
        fillQuestion: 'That God will ** us from **',
        fillAnswer: ['keep', 'sin']
    },
    {
        id: 114,
        question: 'How does the Holy Spirit bring us to salvation?',
        answer: 'He uses the Bible, which is the Word of God',
        fillQuestion: 'He uses the **, which is the ** of God',
        fillAnswer: ['bible', 'word']
    },
    {
        id: 115,
        question: 'How can we know the Word of God?',
        answer: 'We are commanded to hear, read and search the Scriptures',
        fillQuestion: 'We are commanded to hear, ** and search the **',
        fillAnswer: ['read', 'scriptures']
    },
    {
        id: 116,
        question: 'What is a church?',
        answer: 'An assembly of baptized believers met together under the preaching of the Word of God',
        fillQuestion: 'An ** of ** believers met together under the ** of the Word of God',
        fillAnswer: ['assembly', 'baptized', 'preaching']
    },
    {
        id: 117,
        question: 'What two ordinances did Christ give to His Church?',
        answer: 'Baptism and the Lord\'s Supper',
        fillQuestion: '** and the Lord\'s **',
        fillAnswer: ['baptism', 'supper']
    },
    {
        id: 118,
        question: 'Why did Christ give these ordinances?',
        answer: 'To show that His disciples belong to Him, and to remind them of what He has done for them.',
        fillQuestion: 'To show that His disciples belong to Him, and to remind them of what He has done for them.',
        fillAnswer: ['all']
    },
    {
        id: 119,
        question: 'What is baptism?',
        answer: 'The dipping of believers into water, as a sign of their union with Christ in His death, burial and resurrection',
        fillQuestion: 'The dipping of believers into water, as a sign of their union with Christ in His death, burial and resurrection',
        fillAnswer: ['all']
    },
    {
        id: 120,
        question: 'What is the purpose of baptism?',
        answer: 'To show believers that God has cleansed them from their sins through Jesus Christ',
        fillQuestion: 'To show believers that God has cleansed them from their sins through Jesus Christ',
        fillAnswer: ['all']
    },
    {
        id: 121,
        question: 'Who are to be baptized?',
        answer: 'Only those who repent of their sins and believe in Christ for salvation',
        fillQuestion: 'Only those who repent of their sins and believe in Christ for salvation',
        fillAnswer: ['all']
    },
    {
        id: 122,
        question: 'Should babies be baptized?',
        answer: 'No, because the Bible neither commands it, nor gives any example of it',
        fillQuestion: 'No, because the Bible neither commands it, nor gives any example of it',
        fillAnswer: ['all']
    },
    {
        id: 123,
        question: 'What is the Lord\'s Supper?',
        answer: 'The eating of bread and the drinking of wine to remember the sufferings and death of Christ',
        fillQuestion: 'The eating of bread and the drinking of wine to remember the sufferings and death of Christ',
        fillAnswer: ['all']
    },
    {
        id: 124,
        question: 'What does the bread represent?',
        answer: 'The body of Christ, broken for our sins',
        fillQuestion: 'The body of Christ, broken for our sins',
        fillAnswer: ['all']
    },
    {
        id: 125,
        question: 'What does the wine represent?',
        answer: 'The blood of Christ, shed for our salvation',
        fillQuestion: 'The blood of Christ, shed for our salvation',
        fillAnswer: ['all']
    },
    {
        id: 126,
        question: 'Who should partake of the Lord\'s Supper?',
        answer: 'Only those who repent of their sins, believe in Christ for salvation and love their fellow men',
        fillQuestion: 'Only those who repent of their sins, believe in Christ for salvation and love their fellow men',
        fillAnswer: ['all']
    },
    {
        id: 127,
        question: 'Did Christ remain in the tomb after His crucifixion?',
        answer: 'No. He rose from the tomb on the third day after His death',
        fillQuestion: 'No. He rose from the tomb on the third day after His death',
        fillAnswer: ['all']
    },
    {
        id: 128,
        question: 'Where is Christ now?',
        answer: 'In heaven, seated at the right hand of God the Father',
        fillQuestion: 'In heaven, seated at the right hand of God the Father',
        fillAnswer: ['all']
    },
    {
        id: 129,
        question: 'Will Christ come again?',
        answer: 'Yes. At the last day He will come again to judge the world.',
        fillQuestion: 'Yes. At the last day He will come again to judge the world.',
        fillAnswer: ['all']
    },
    {
        id: 130,
        question: 'What happens to men when they die?',
        answer: 'The body returns to dust and the soul goes into the world of spirits',
        fillQuestion: 'The body returns to dust and the soul goes into the world of spirits',
        fillAnswer: ['all']
    },
    {
        id: 131,
        question: 'Will the bodies of the dead be raised to life again?',
        answer: 'Yes. "There will be a resurrection of the dead, both of the just and unjust"',
        fillQuestion: 'Yes. "There will be a resurrection of the dead, both of the just and unjust"',
        fillAnswer: ['all']
    },
    {
        id: 132,
        question: 'What will happen to the wicked in the day of judgment?',
        answer: 'They shall be cast into hell',
        fillQuestion: 'They shall be cast into hell',
        fillAnswer: ['all']
    },
    {
        id: 133,
        question: 'What is hell?',
        answer: 'A place of dreadful and endless punishment',
        fillQuestion: 'A place of dreadful and endless punishment',
        fillAnswer: ['all']
    },
    {
        id: 134,
        question: 'What will happen to the righteous in the day of judgment?',
        answer: 'They shall live with Christ forever, in a new heaven and new earth',
        fillQuestion: 'They shall live with Christ forever, in a new heaven and new earth',
        fillAnswer: ['all']
    },
    {
        id: 135,
        question: 'What is heaven?',
        answer: 'A glorious and happy place, where the righteous shall be forever with the Lord',
        fillQuestion: 'A glorious and happy place, where the righteous shall be forever with the Lord',
        fillAnswer: ['all']
    }
];

export default BOYS_GIRLS;
