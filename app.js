// ===== بيانات القرآن الكريم =====
const quranData = {
    totalPages: 604,
    juzCount: 30
};

// ===== آيات يومية لرمضان (30 يوم) =====
const dailyAyat = [
    { day: 1, ayah: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ", surah: "البقرة", ayahNum: 185, tafseer: "شهر رمضان هو الشهر الذي أنزل الله فيه القرآن هداية للناس، وبراهين واضحة تبين الحق من الباطل." },
    { day: 2, ayah: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ", surah: "البقرة", ayahNum: 183, tafseer: "فرض الله الصيام على المؤمنين كما فرضه على الأمم السابقة، والحكمة من ذلك تحقيق التقوى." },
    { day: 3, ayah: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ", surah: "البقرة", ayahNum: 186, tafseer: "الله قريب من عباده، يسمع دعاءهم ويستجيب لهم، فليدعوه بإخلاص وثقة." },
    { day: 4, ayah: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ * وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ * لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ", surah: "القدر", ayahNum: "1-3", tafseer: "ليلة القدر ليلة عظيمة أنزل فيها القرآن، العمل فيها خير من عمل ألف شهر." },
    { day: 5, ayah: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ", surah: "البقرة", ayahNum: 45, tafseer: "الاستعانة بالصبر والصلاة على مصاعب الحياة، وهي سهلة على المتواضعين لله." },
    { day: 6, ayah: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", surah: "الرعد", ayahNum: 28, tafseer: "ذكر الله هو سبب طمأنينة القلب وراحته وسكينته." },
    { day: 7, ayah: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا * وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ", surah: "الطلاق", ayahNum: "2-3", tafseer: "من يخاف الله ويطيعه يجعل له مخرجاً من كل ضيق، ويرزقه من حيث لا يتوقع." },
    { day: 8, ayah: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", surah: "البقرة", ayahNum: 153, tafseer: "الله مع الصابرين بالعون والنصر والتوفيق." },
    { day: 9, ayah: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا * إِنَّ مَعَ الْعُسْرِ يُسْرًا", surah: "الشرح", ayahNum: "5-6", tafseer: "مهما اشتدت الصعوبات فإن الفرج قريب، فلن يغلب عسر واحد يسرين." },
    { day: 10, ayah: "ادْعُونِي أَسْتَجِبْ لَكُمْ", surah: "غافر", ayahNum: 60, tafseer: "أمر من الله بدعائه ووعد بالإجابة، فلا تستصغر أي دعاء." },
    { day: 11, ayah: "وَقُل رَّبِّ زِدْنِي عِلْمًا", surah: "طه", ayahNum: 114, tafseer: "الدعاء بطلب زيادة العلم النافع من أفضل الأدعية." },
    { day: 12, ayah: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", surah: "البقرة", ayahNum: 201, tafseer: "دعاء جامع لخير الدنيا والآخرة، وكان من أكثر أدعية النبي ﷺ." },
    { day: 13, ayah: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ", surah: "الإسراء", ayahNum: 82, tafseer: "القرآن شفاء للقلوب والأبدان، ورحمة للمؤمنين." },
    { day: 14, ayah: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", surah: "الزمر", ayahNum: 53, tafseer: "رحمة الله واسعة، فلا ييأس أحد من مغفرته مهما عظمت ذنوبه إذا تاب." },
    { day: 15, ayah: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ", surah: "الحديد", ayahNum: 4, tafseer: "الله مع عباده بعلمه وقدرته في كل مكان، يراهم ويسمعهم." },
    { day: 16, ayah: "وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ", surah: "النور", ayahNum: 31, tafseer: "التوبة طريق الفلاح والنجاح في الدنيا والآخرة." },
    { day: 17, ayah: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ", surah: "الزمر", ayahNum: 10, tafseer: "أجر الصابرين عظيم لا يُحصى ولا يُعد." },
    { day: 18, ayah: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", surah: "الطلاق", ayahNum: 3, tafseer: "من يعتمد على الله حق الاعتماد يكفيه الله جميع أموره." },
    { day: 19, ayah: "وَقُولُوا لِلنَّاسِ حُسْنًا", surah: "البقرة", ayahNum: 83, tafseer: "الكلمة الطيبة صدقة وأمرنا الله بها مع جميع الناس." },
    { day: 20, ayah: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ", surah: "المائدة", ayahNum: 2, tafseer: "التعاون على الخير من صفات المؤمنين، والابتعاد عن التعاون على الشر." },
    { day: 21, ayah: "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ * سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ", surah: "القدر", ayahNum: "4-5", tafseer: "في ليلة القدر تنزل الملائكة بالخير والبركة، وهي ليلة سلام حتى طلوع الفجر." },
    { day: 22, ayah: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ", surah: "يوسف", ayahNum: 87, tafseer: "النهي عن اليأس من فضل الله ورحمته، فالمؤمن دائماً يرجو الله." },
    { day: 23, ayah: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", surah: "النحل", ayahNum: 127, tafseer: "الصبر بتوفيق الله وعونه، فاطلب منه العون على الصبر." },
    { day: 24, ayah: "إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا", surah: "الكهف", ayahNum: 30, tafseer: "الله لا يضيع عمل عامل، بل يجازيه أحسن الجزاء." },
    { day: 25, ayah: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ", surah: "الرعد", ayahNum: 11, tafseer: "التغيير يبدأ من النفس، فمن أصلح نفسه أصلح الله حاله." },
    { day: 26, ayah: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ", surah: "ق", ayahNum: 16, tafseer: "الله قريب من الإنسان، أقرب إليه من نفسه، يعلم سره وجهره." },
    { day: 27, ayah: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ", surah: "البقرة", ayahNum: 257, tafseer: "الله ناصر المؤمنين ومعينهم، يهديهم من ظلمات الجهل إلى نور الإيمان." },
    { day: 28, ayah: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ", surah: "البقرة", ayahNum: 127, tafseer: "دعاء بقبول العمل، فالتقبل هو المقصود من العبادة." },
    { day: 29, ayah: "وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ أُعِدَّتْ لِلْمُتَّقِينَ", surah: "آل عمران", ayahNum: 133, tafseer: "المسارعة إلى الطاعات وترك المعاصي للفوز بالجنة العظيمة." },
    { day: 30, ayah: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", surah: "التحريم", ayahNum: 8, tafseer: "دعاء ختامي بإتمام النور والمغفرة، نسأل الله القبول." }
];

// ===== أحاديث رمضان =====
const ramadanHadith = {
    ramadan: [
        { text: "إِذَا جَاءَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ، وَغُلِّقَتْ أَبْوَابُ النَّارِ، وَصُفِّدَتِ الشَّيَاطِينُ", source: "متفق عليه" },
        { text: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ", source: "متفق عليه" },
        { text: "رَمَضَانُ إِلَى رَمَضَانَ مُكَفِّرَاتٌ لِمَا بَيْنَهُنَّ إِذَا اجْتُنِبَتِ الْكَبَائِرُ", source: "رواه مسلم" },
        { text: "الصِّيَامُ وَالْقُرْآنُ يَشْفَعَانِ لِلْعَبْدِ يَوْمَ الْقِيَامَةِ", source: "رواه أحمد" },
        { text: "إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ، يَدْخُلُ مِنْهُ الصَّائِمُونَ يَوْمَ الْقِيَامَةِ", source: "متفق عليه" }
    ],
    siyam: [
        { text: "كُلُّ عَمَلِ ابْنِ آدَمَ يُضَاعَفُ، الْحَسَنَةُ عَشْرُ أَمْثَالِهَا إِلَى سَبْعِمِائَةِ ضِعْفٍ، قَالَ اللَّهُ عَزَّ وَجَلَّ: إِلَّا الصَّوْمَ فَإِنَّهُ لِي، وَأَنَا أَجْزِي بِهِ", source: "متفق عليه" },
        { text: "مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ، فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ", source: "رواه البخاري" },
        { text: "الصِّيَامُ جُنَّةٌ، فَلَا يَرْفُثْ وَلَا يَجْهَلْ، وَإِنِ امْرُؤٌ قَاتَلَهُ أَوْ شَاتَمَهُ فَلْيَقُلْ إِنِّي صَائِمٌ مَرَّتَيْنِ", source: "متفق عليه" },
        { text: "لِلصَّائِمِ فَرْحَتَانِ: فَرْحَةٌ عِنْدَ فِطْرِهِ، وَفَرْحَةٌ عِنْدَ لِقَاءِ رَبِّهِ", source: "متفق عليه" },
        { text: "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ، غَيْرَ أَنَّهُ لَا يَنْقُصُ مِنْ أَجْرِ الصَّائِمِ شَيْئًا", source: "رواه الترمذي" }
    ],
    qiyam: [
        { text: "مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ", source: "متفق عليه" },
        { text: "مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ", source: "متفق عليه" },
        { text: "أَفْضَلُ الصَّلَاةِ بَعْدَ الْفَرِيضَةِ صَلَاةُ اللَّيْلِ", source: "رواه مسلم" },
        { text: "عَلَيْكُمْ بِقِيَامِ اللَّيْلِ فَإِنَّهُ دَأْبُ الصَّالِحِينَ قَبْلَكُمْ", source: "رواه الترمذي" },
        { text: "أَقْرَبُ مَا يَكُونُ الرَّبُّ مِنَ الْعَبْدِ فِي جَوْفِ اللَّيْلِ الْآخِرِ", source: "رواه الترمذي" }
    ],
    quran: [
        { text: "اقْرَؤُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ", source: "رواه مسلم" },
        { text: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", source: "رواه البخاري" },
        { text: "الَّذِي يَقْرَأُ الْقُرْآنَ وَهُوَ مَاهِرٌ بِهِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ، وَالَّذِي يَقْرَأُ الْقُرْآنَ وَيَتَتَعْتَعُ فِيهِ وَهُوَ عَلَيْهِ شَاقٌّ لَهُ أَجْرَانِ", source: "متفق عليه" },
        { text: "مَثَلُ الْمُؤْمِنِ الَّذِي يَقْرَأُ الْقُرْآنَ مَثَلُ الأُتْرُجَّةِ رِيحُهَا طَيِّبٌ وَطَعْمُهَا طَيِّبٌ", source: "متفق عليه" },
        { text: "إِنَّ اللَّهَ يَرْفَعُ بِهَذَا الْكِتَابِ أَقْوَامًا وَيَضَعُ بِهِ آخَرِينَ", source: "رواه مسلم" }
    ],
    dua: [
        { text: "الدُّعَاءُ هُوَ الْعِبَادَةُ", source: "رواه الترمذي" },
        { text: "ثَلَاثُ دَعَوَاتٍ مُسْتَجَابَاتٌ: دَعْوَةُ الصَّائِمِ، وَدَعْوَةُ الْمَظْلُومِ، وَدَعْوَةُ الْمُسَافِرِ", source: "رواه البيهقي" },
        { text: "إِنَّ لِلصَّائِمِ عِنْدَ فِطْرِهِ لَدَعْوَةً مَا تُرَدُّ", source: "رواه ابن ماجه" },
        { text: "أَعْجَزُ النَّاسِ مَنْ عَجَزَ عَنِ الدُّعَاءِ", source: "رواه ابن حبان" },
        { text: "يُسْتَجَابُ لِأَحَدِكُمْ مَا لَمْ يَعْجَلْ، يَقُولُ: دَعَوْتُ فَلَمْ يُسْتَجَبْ لِي", source: "متفق عليه" }
    ],
    sadaqa: [
        { text: "كَانَ رَسُولُ اللَّهِ ﷺ أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ", source: "متفق عليه" },
        { text: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ", source: "رواه مسلم" },
        { text: "اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ", source: "متفق عليه" },
        { text: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ", source: "رواه الترمذي" },
        { text: "سَبْعَةٌ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ... وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّى لَا تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ", source: "متفق عليه" }
    ]
};

// ===== بيانات الأذكار =====
const adhkarData = {
    morning: [
        { text: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير", count: "مرة واحدة" },
        { text: "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور", count: "مرة واحدة" },
        { text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك عليّ، وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت", count: "سيد الاستغفار" },
        { text: "سبحان الله وبحمده", count: "100 مرة" },
        { text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير", count: "100 مرة" },
        { text: "اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً", count: "مرة واحدة" },
        { text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم", count: "7 مرات" },
        { text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم", count: "3 مرات" }
    ],
    evening: [
        { text: "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير", count: "مرة واحدة" },
        { text: "اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير", count: "مرة واحدة" },
        { text: "أعوذ بكلمات الله التامات من شر ما خلق", count: "3 مرات" },
        { text: "سبحان الله وبحمده", count: "100 مرة" },
        { text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير", count: "100 مرة" }
    ],
    sleep: [
        { text: "باسمك اللهم أموت وأحيا", count: "مرة واحدة" },
        { text: "اللهم قني عذابك يوم تبعث عبادك", count: "3 مرات" },
        { text: "سبحان الله (33) - الحمد لله (33) - الله أكبر (34)", count: "التسبيح" },
        { text: "قراءة آية الكرسي", count: "مرة واحدة" },
        { text: "قراءة سورة الإخلاص والمعوذتين", count: "3 مرات" }
    ],
    afterPrayer: [
        { text: "أستغفر الله (3 مرات) - اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام", count: "بعد السلام" },
        { text: "سبحان الله (33) - الحمد لله (33) - الله أكبر (33) - لا إله إلا الله وحده لا شريك له", count: "100 تسبيحة" },
        { text: "قراءة آية الكرسي", count: "مرة واحدة" }
    ]
};

// ===== سنن الأوقات =====
const sunnanData = {
    fajr: {
        period: "وقت الفجر 🌅",
        sunnan: [
            { icon: "🕌", title: "صلاة الفجر في جماعة", description: "من صلى الفجر في جماعة فهو في ذمة الله" },
            { icon: "📖", title: "قراءة القرآن", description: "أفضل وقت لقراءة القرآن بعد صلاة الفجر" },
            { icon: "🧎", title: "الجلوس حتى الشروق", description: "أجر حجة وعمرة تامة" }
        ]
    },
    morning: {
        period: "وقت الضحى ☀️",
        sunnan: [
            { icon: "🕌", title: "صلاة الضحى", description: "أقلها ركعتان وأكثرها ثمان" },
            { icon: "📿", title: "أذكار الصباح", description: "حصن يومك بالأذكار" }
        ]
    },
    dhuhr: {
        period: "وقت الظهر 🌞",
        sunnan: [
            { icon: "🕌", title: "السنن الرواتب", description: "4 قبل الظهر و2 بعدها" },
            { icon: "😴", title: "القيلولة", description: "قِيلُوا فإن الشياطين لا تَقِيل" }
        ]
    },
    asr: {
        period: "وقت العصر 🌤️",
        sunnan: [
            { icon: "🕌", title: "صلاة العصر", description: "الصلاة الوسطى" },
            { icon: "📿", title: "الذكر والاستغفار", description: "الإكثار من ذكر الله" }
        ]
    },
    maghrib: {
        period: "وقت المغرب 🌅",
        sunnan: [
            { icon: "🍽️", title: "الإفطار على تمر", description: "ذهب الظمأ وابتلت العروق" },
            { icon: "🤲", title: "الدعاء عند الإفطار", description: "للصائم دعوة لا ترد" },
            { icon: "📿", title: "أذكار المساء", description: "قراءة أذكار المساء" }
        ]
    },
    isha: {
        period: "وقت العشاء 🌙",
        sunnan: [
            { icon: "🕌", title: "صلاة التراويح", description: "من قام رمضان إيماناً واحتساباً غُفر له" },
            { icon: "📖", title: "قراءة الورد اليومي", description: "المداومة على ختم القرآن" }
        ]
    },
    night: {
        period: "الثلث الأخير 🌃",
        sunnan: [
            { icon: "🌃", title: "قيام الليل", description: "أفضل الصلاة بعد الفريضة" },
            { icon: "🤲", title: "الدعاء والاستغفار", description: "ينزل ربنا كل ليلة" },
            { icon: "☀️", title: "السحور", description: "تسحروا فإن في السحور بركة" }
        ]
    }
};

// ===== آيات المشاعر (متعددة لكل شعور) =====
const feelingsAyat = {
    // آيات التطمين والسكينة
    "تطمين": [
        { ayah: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", reference: "الرعد: 28" },
        { ayah: "هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ", reference: "الفتح: 4" },
        { ayah: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ", reference: "البقرة: 186" },
        { ayah: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ", reference: "البقرة: 257" },
        { ayah: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ", reference: "الحديد: 4" }
    ],
    "اطمئنان": [
        { ayah: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً", reference: "الفجر: 27-28" },
        { ayah: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ", reference: "الرعد: 28" },
        { ayah: "فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ", reference: "التوبة: 40" }
    ],
    // آيات الحزن
    "حزن": [
        { ayah: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ", reference: "آل عمران: 139" },
        { ayah: "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", reference: "التوبة: 40" },
        { ayah: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا", reference: "الشرح: 5-6" },
        { ayah: "سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا", reference: "الطلاق: 7" }
    ],
    "حزين": [
        { ayah: "قَالَ إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ", reference: "يوسف: 86" },
        { ayah: "وَابْيَضَّتْ عَيْنَاهُ مِنَ الْحُزْنِ فَهُوَ كَظِيمٌ", reference: "يوسف: 84" },
        { ayah: "لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًا", reference: "الطلاق: 1" },
        { ayah: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ", reference: "البقرة: 216" }
    ],
    // آيات القلق والخوف
    "قلق": [
        { ayah: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", reference: "الرعد: 28" },
        { ayah: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", reference: "الطلاق: 3" },
        { ayah: "فَفِرُّوا إِلَى اللَّهِ إِنِّي لَكُم مِّنْهُ نَذِيرٌ مُّبِينٌ", reference: "الذاريات: 50" },
        { ayah: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا", reference: "التوبة: 51" }
    ],
    "خوف": [
        { ayah: "فَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ", reference: "يوسف: 64" },
        { ayah: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوا وَّالَّذِينَ هُم مُّحْسِنُونَ", reference: "النحل: 128" },
        { ayah: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", reference: "آل عمران: 173" },
        { ayah: "وَإِن يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ", reference: "الأنعام: 17" }
    ],
    "خائف": [
        { ayah: "لَا تَخَافُوا وَلَا تَحْزَنُوا وَأَبْشِرُوا بِالْجَنَّةِ الَّتِي كُنتُمْ تُوعَدُونَ", reference: "فصلت: 30" },
        { ayah: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ أَلَّا تَخَافُوا وَلَا تَحْزَنُوا", reference: "فصلت: 30" },
        { ayah: "قُلْنَا لَا تَخَفْ إِنَّكَ أَنتَ الْأَعْلَىٰ", reference: "طه: 68" }
    ],
    // آيات الشكر
    "شكر": [
        { ayah: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ", reference: "إبراهيم: 7" },
        { ayah: "وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", reference: "البقرة: 152" },
        { ayah: "وَقَلِيلٌ مِّنْ عِبَادِيَ الشَّكُورُ", reference: "سبأ: 13" },
        { ayah: "اعْمَلُوا آلَ دَاوُودَ شُكْرًا", reference: "سبأ: 13" }
    ],
    "شاكر": [
        { ayah: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", reference: "البقرة: 152" },
        { ayah: "وَمَن شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ", reference: "النمل: 40" },
        { ayah: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ", reference: "النمل: 19" }
    ],
    // آيات الفرح والسعادة
    "سعيد": [
        { ayah: "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا", reference: "يونس: 58" },
        { ayah: "وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ بِنَصْرِ اللَّهِ", reference: "الروم: 4-5" },
        { ayah: "فَرِحِينَ بِمَا آتَاهُمُ اللَّهُ مِن فَضْلِهِ", reference: "آل عمران: 170" }
    ],
    "فرح": [
        { ayah: "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا هُوَ خَيْرٌ مِّمَّا يَجْمَعُونَ", reference: "يونس: 58" },
        { ayah: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", reference: "الضحى: 11" },
        { ayah: "يَسْتَبْشِرُونَ بِنِعْمَةٍ مِّنَ اللَّهِ وَفَضْلٍ", reference: "آل عمران: 171" }
    ],
    // آيات الوحدة
    "وحيد": [
        { ayah: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ", reference: "ق: 16" },
        { ayah: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ", reference: "الحديد: 4" },
        { ayah: "إِنَّنِي مَعَكُمَا أَسْمَعُ وَأَرَىٰ", reference: "طه: 46" },
        { ayah: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", reference: "البقرة: 186" }
    ],
    "وحدة": [
        { ayah: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", reference: "التوبة: 40" },
        { ayah: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ", reference: "الأعراف: 56" },
        { ayah: "فَإِنَّكَ بِأَعْيُنِنَا", reference: "الطور: 48" }
    ],
    // آيات الضعف والقوة
    "ضعيف": [
        { ayah: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ", reference: "آل عمران: 139" },
        { ayah: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", reference: "البقرة: 153" },
        { ayah: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", reference: "النحل: 127" },
        { ayah: "رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ", reference: "البقرة: 286" }
    ],
    // آيات الحاجة والدعاء
    "محتاج": [
        { ayah: "ادْعُونِي أَسْتَجِبْ لَكُمْ", reference: "غافر: 60" },
        { ayah: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ", reference: "البقرة: 186" },
        { ayah: "أَمَّن يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ وَيَكْشِفُ السُّوءَ", reference: "النمل: 62" },
        { ayah: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ", reference: "غافر: 60" }
    ],
    // آيات التوبة والمغفرة
    "توبة": [
        { ayah: "إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ", reference: "الزمر: 53" },
        { ayah: "وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا", reference: "النساء: 110" },
        { ayah: "وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ", reference: "النور: 31" },
        { ayah: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ", reference: "البقرة: 222" }
    ],
    "ذنب": [
        { ayah: "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", reference: "الزمر: 53" },
        { ayah: "وَالَّذِينَ إِذَا فَعَلُوا فَاحِشَةً أَوْ ظَلَمُوا أَنفُسَهُمْ ذَكَرُوا اللَّهَ فَاسْتَغْفَرُوا لِذُنُوبِهِمْ", reference: "آل عمران: 135" },
        { ayah: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ", reference: "الزمر: 53" }
    ],
    // آيات اليأس والأمل
    "يأس": [
        { ayah: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ", reference: "يوسف: 87" },
        { ayah: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", reference: "الشرح: 5" },
        { ayah: "سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا", reference: "الطلاق: 7" },
        { ayah: "لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًا", reference: "الطلاق: 1" }
    ],
    "أمل": [
        { ayah: "إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ", reference: "يوسف: 87" },
        { ayah: "فَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا", reference: "النساء: 19" },
        { ayah: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ", reference: "البقرة: 216" }
    ],
    // آيات الصبر
    "صبر": [
        { ayah: "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ", reference: "الزمر: 10" },
        { ayah: "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", reference: "هود: 115" },
        { ayah: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", reference: "البقرة: 153" },
        { ayah: "فَاصْبِرْ صَبْرًا جَمِيلًا", reference: "المعارج: 5" },
        { ayah: "وَبَشِّرِ الصَّابِرِينَ", reference: "البقرة: 155" }
    ],
    // آيات الرزق
    "رزق": [
        { ayah: "وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", reference: "الطلاق: 3" },
        { ayah: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", reference: "الطلاق: 2" },
        { ayah: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ", reference: "الذاريات: 58" },
        { ayah: "وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ", reference: "الذاريات: 22" }
    ],
    // آيات المرض والشفاء
    "مريض": [
        { ayah: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", reference: "الشعراء: 80" },
        { ayah: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ", reference: "الإسراء: 82" },
        { ayah: "رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ", reference: "الأنبياء: 83" }
    ],
    "مرض": [
        { ayah: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", reference: "الشعراء: 80" },
        { ayah: "وَيَشْفِ صُدُورَ قَوْمٍ مُّؤْمِنِينَ", reference: "التوبة: 14" },
        { ayah: "قُلْ هُوَ لِلَّذِينَ آمَنُوا هُدًى وَشِفَاءٌ", reference: "فصلت: 44" }
    ],
    // آيات الهم والكرب
    "هم": [
        { ayah: "فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ", reference: "الأنبياء: 87-88" },
        { ayah: "أَمَّن يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ وَيَكْشِفُ السُّوءَ", reference: "النمل: 62" },
        { ayah: "وَنَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ", reference: "التحريم: 11" }
    ],
    "ضيق": [
        { ayah: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", reference: "الطلاق: 2" },
        { ayah: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا", reference: "الشرح: 5-6" },
        { ayah: "سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا", reference: "الطلاق: 7" }
    ]
};

// ===== متغيرات عامة =====
let currentAyahDay = 1;
const prayerLocationPresets = {
    makkah: { key: 'makkah', label: 'مكة المكرمة', latitude: 21.3891, longitude: 39.8579, timeZone: 'Asia/Riyadh' },
    madinah: { key: 'madinah', label: 'المدينة المنورة', latitude: 24.5247, longitude: 39.5692, timeZone: 'Asia/Riyadh' },
    riyadh: { key: 'riyadh', label: 'الرياض', latitude: 24.7136, longitude: 46.6753, timeZone: 'Asia/Riyadh' },
    jeddah: { key: 'jeddah', label: 'جدة', latitude: 21.5433, longitude: 39.1728, timeZone: 'Asia/Riyadh' },
    dammam: { key: 'dammam', label: 'الدمام', latitude: 26.4207, longitude: 50.0888, timeZone: 'Asia/Riyadh' }
};

const prayerDisplayOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
const prayerLabels = {
    Fajr: 'الفجر',
    Sunrise: 'الشروق',
    Dhuhr: 'الظهر',
    Asr: 'العصر',
    Maghrib: 'المغرب',
    Isha: 'العشاء'
};

let prayerState = {
    location: null,
    today: null,
    tomorrow: null,
    timeZone: 'Asia/Riyadh',
    countdownInterval: null
};

let plannerState = {
    generated: false,
    khatmaCount: 1,
    manualDay: 1,
    completedDays: {}
};

// ===== دوال التهيئة =====
document.addEventListener('DOMContentLoaded', function() {
    try {
        // تهيئة الوضع الداكن
        initDarkMode();
        
        // تهيئة قسم القرآن
        initQuranSection();
        
        // تهيئة عدادات المراجعة
        updateReviewCounts();
        
        // إغلاق القائمة عند النقر على الروابط
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        initDaySelector();
        initPlannerSection();
        showWird('morning');
        showDailyAyah(1);
        showHadithCategory('ramadan');
        initPrayerSection();
        
        // تحديث الوقت فوراً ثم كل دقيقة
        updateTimeNow();
        setInterval(updateTimeNow, 60000);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });

        const skeyInput = document.getElementById('skey');
        if (skeyInput) {
            skeyInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') check_hadith();
            });
        }
        
        const feelingInput = document.getElementById('feeling-input');
        if (feelingInput) {
            feelingInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') findAyah();
            });
        }
    } catch (error) {
        console.error('خطأ في التهيئة:', error);
    }
});

// دالة تحديث الوقت المحسنة
function updateTimeNow() {
    try {
        const now = new Date();
        const hours = now.getHours();
        
        const timeElement = document.getElementById('current-time');
        const periodElement = document.getElementById('current-period');
        const sunnanContent = document.getElementById('sunnan-content');
        
        if (timeElement) {
            timeElement.textContent = new Intl.DateTimeFormat('ar-SA', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }).format(now);
        }
        
        const period = getTimePeriod(hours);
        
        if (periodElement && sunnanData[period]) {
            periodElement.textContent = sunnanData[period].period;
        }
        
        if (sunnanContent) {
            displaySunnan(period);
        }
    } catch (error) {
        console.error('خطأ في تحديث الوقت:', error);
    }
}

// ===== دوال خطة الختم =====
function initDaySelector() {
    const select = document.getElementById('current-day');
    if (!select || select.options.length > 0) {
        return;
    }

    for (let i = 1; i <= 30; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `اليوم ${i}`;
        select.appendChild(option);
    }
}

function getCurrentHijriInfo() {
    try {
        const formatter = new Intl.DateTimeFormat('en-u-ca-islamic', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        const parts = formatter.formatToParts(new Date());
        return {
            day: Number(parts.find(part => part.type === 'day')?.value || 1),
            month: (parts.find(part => part.type === 'month')?.value || '').toLowerCase(),
            year: parts.find(part => part.type === 'year')?.value || ''
        };
    } catch (error) {
        console.error('تعذر قراءة التاريخ الهجري:', error);
        return null;
    }
}

function getAutomaticRamadanDay() {
    const hijriInfo = getCurrentHijriInfo();
    if (!hijriInfo) {
        return null;
    }

    return hijriInfo.month.includes('ramadan') ? Math.min(Math.max(hijriInfo.day, 1), 30) : null;
}

function getPlannerStorageKey() {
    const hijriInfo = getCurrentHijriInfo();
    return hijriInfo ? `planner-${hijriInfo.year}` : 'planner-default';
}

function loadPlannerState() {
    try {
        const saved = JSON.parse(localStorage.getItem('ramadanPlannerState') || '{}');
        const savedYearState = saved[getPlannerStorageKey()] || {};
        plannerState = {
            generated: false,
            khatmaCount: Number(savedYearState.khatmaCount) || 1,
            manualDay: Number(savedYearState.manualDay) || 1,
            completedDays: savedYearState.completedDays || {}
        };
    } catch (error) {
        console.error('تعذر تحميل حالة الخطة:', error);
    }
}

function persistPlannerState() {
    try {
        const saved = JSON.parse(localStorage.getItem('ramadanPlannerState') || '{}');
        saved[getPlannerStorageKey()] = {
            khatmaCount: plannerState.khatmaCount,
            manualDay: plannerState.manualDay,
            completedDays: plannerState.completedDays
        };
        localStorage.setItem('ramadanPlannerState', JSON.stringify(saved));
    } catch (error) {
        console.error('تعذر حفظ حالة الخطة:', error);
    }
}

function getActivePlannerDay() {
    return getAutomaticRamadanDay() || plannerState.manualDay || 1;
}

function initPlannerSection() {
    loadPlannerState();

    const currentDaySelect = document.getElementById('current-day');
    const khatmaCountSelect = document.getElementById('khatma-count');
    const activeDay = getActivePlannerDay();

    if (currentDaySelect) {
        currentDaySelect.value = String(activeDay);
        currentDaySelect.addEventListener('change', function(event) {
            plannerState.manualDay = Number(event.target.value);
            persistPlannerState();
        });
    }

    if (khatmaCountSelect) {
        khatmaCountSelect.value = String(plannerState.khatmaCount);
        khatmaCountSelect.addEventListener('change', function(event) {
            plannerState.khatmaCount = Number(event.target.value);
            persistPlannerState();
        });
    }

    renderPlannerPlaceholder();
}

function renderPlannerPlaceholder() {
    const planContainer = document.getElementById('plan-result');
    const todayContent = document.getElementById('today-content');
    const todayPlanActions = document.getElementById('today-plan-actions');
    const currentDaySelect = document.getElementById('current-day');
    const activeDay = getActivePlannerDay();

    if (currentDaySelect) {
        currentDaySelect.value = String(activeDay);
    }

    if (planContainer) {
        planContainer.innerHTML = `
            <div class="planner-placeholder">
                <div class="planner-placeholder-icon">📘</div>
                <h3>أنشئ خطتك أولاً</h3>
                <p>اليوم المقترح تلقائياً: اليوم ${activeDay} من رمضان.</p>
            </div>
        `;
    }

    if (todayContent) {
        todayContent.innerHTML = '<p>الخطة لم تُنشأ بعد. اختر عدد الختمات ثم اضغط إنشاء الخطة.</p>';
    }

    todayPlanActions?.classList.add('hidden');
}

function getPlannerCompletionStatus(day) {
    return Boolean(plannerState.completedDays[String(day)]);
}

function generatePlan() {
    const khatmaCount = parseInt(document.getElementById('khatma-count').value, 10);
    const currentDay = parseInt(document.getElementById('current-day').value, 10) || getActivePlannerDay();
    const planContainer = document.getElementById('plan-result');
    const todayContent = document.getElementById('today-content');
    const todayPlanActions = document.getElementById('today-plan-actions');
    
    plannerState.generated = true;
    plannerState.khatmaCount = khatmaCount;
    plannerState.manualDay = currentDay;
    persistPlannerState();

    const totalPages = 604;
    const pagesPerDay = Math.ceil((totalPages * khatmaCount) / 30);
    
    let html = '';
    
    for (let day = 1; day <= 30; day++) {
        const startPage = ((day - 1) * pagesPerDay) + 1;
        let endPage = day * pagesPerDay;
        if (endPage > totalPages * khatmaCount) endPage = totalPages * khatmaCount;
        
        const actualStart = ((startPage - 1) % 604) + 1;
        const actualEnd = ((endPage - 1) % 604) + 1;
        
        const isToday = day === currentDay;
        const isCompleted = getPlannerCompletionStatus(day);
        const isPast = day < currentDay;
        
        let classes = 'day-card';
        if (isToday) classes += ' today';
        if (isCompleted) classes += ' completed';
        if (isPast && !isCompleted) classes += ' past';
        
        html += `<div class="${classes}" onclick="showDayDetails(${day}, ${startPage}, ${endPage})">
            <div class="day-number">${day}</div>
            <div class="day-reading">ص${actualStart}-${actualEnd}</div>
            <div class="day-status">${isCompleted ? 'تم' : isToday ? 'اليوم' : isPast ? 'فات' : 'قادم'}</div>
        </div>`;
        
        if (isToday) {
            const completedToday = getPlannerCompletionStatus(day);
            todayContent.innerHTML = `
                <div class="today-plan-summary ${completedToday ? 'is-done' : ''}">
                    <p><strong>📅 اليوم:</strong> ${day} من رمضان</p>
                    <p><strong>📄 الصفحات:</strong> ${actualStart} - ${actualEnd}</p>
                    <p><strong>📚 عدد الصفحات:</strong> ${pagesPerDay} صفحة</p>
                    <p class="today-plan-status">${completedToday ? 'أحسنت، تم تعليم ورد اليوم كمكتمل.' : 'ورد اليوم بانتظار الإنجاز.'}</p>
                </div>
            `;
        }
    }
    
    planContainer.innerHTML = html;
    todayPlanActions?.classList.remove('hidden');
}

function setTodayWirdStatus(isCompleted) {
    const currentDay = parseInt(document.getElementById('current-day').value, 10) || getActivePlannerDay();
    plannerState.completedDays[String(currentDay)] = isCompleted;
    persistPlannerState();
    generatePlan();
}

function showDayDetails(day, startPage, endPage) {
    const actualStart = ((startPage - 1) % 604) + 1;
    const actualEnd = ((endPage - 1) % 604) + 1;
    alert(`📖 اليوم ${day}\nالصفحات: ${actualStart} - ${actualEnd}`);
}

// ===== دوال آية اليوم =====
function showDailyAyah(day) {
    currentAyahDay = day;
    if (currentAyahDay < 1) currentAyahDay = 30;
    if (currentAyahDay > 30) currentAyahDay = 1;
    
    document.getElementById('ayah-day-num').textContent = `اليوم ${currentAyahDay}`;
    
    const ayahData = dailyAyat[currentAyahDay - 1];
    const container = document.getElementById('daily-ayah-content');
    
    container.innerHTML = `
        <div class="fade-in">
            <p class="daily-ayah-text">﴿ ${ayahData.ayah} ﴾</p>
            <p class="daily-ayah-reference">📖 سورة ${ayahData.surah} - الآية ${ayahData.ayahNum}</p>
            <div class="daily-ayah-tafseer">
                <h4>💡 التفسير:</h4>
                <p>${ayahData.tafseer}</p>
            </div>
        </div>
    `;
}

function changeAyahDay(delta) {
    showDailyAyah(currentAyahDay + delta);
}

function previousDayAyah() {
    showDailyAyah(currentAyahDay - 1);
}

function nextDayAyah() {
    showDailyAyah(currentAyahDay + 1);
}

function todayAyah() {
    const selectedDay = parseInt(document.getElementById('current-day').value, 10) || getActivePlannerDay();
    showDailyAyah(selectedDay);
}

// ===== دوال الأذكار =====
function showWird(type, clickedElement) {
    const tabs = document.querySelectorAll('.wird-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // تفعيل التاب المحدد
    if (clickedElement) {
        clickedElement.classList.add('active');
    } else {
        // تفعيل التاب الأول عند التحميل
        const firstTab = document.querySelector('.wird-tab');
        if (firstTab) firstTab.classList.add('active');
    }
    
    const container = document.getElementById('wird-content');
    if (!container || !adhkarData[type]) return;
    
    const adhkar = adhkarData[type];
    
    let html = '';
    adhkar.forEach(item => {
        html += `<div class="wird-item fade-in">
            <div class="wird-text">${item.text}</div>
            <span class="wird-count">${item.count}</span>
        </div>`;
    });
    
    container.innerHTML = html;
}

// ===== دوال سنن الوقت =====
function updateTime() {
    updateTimeNow();
}

function getTimePeriod(hours) {
    if (hours >= 4 && hours < 6) return 'fajr';
    if (hours >= 6 && hours < 12) return 'morning';
    if (hours >= 12 && hours < 15) return 'dhuhr';
    if (hours >= 15 && hours < 18) return 'asr';
    if (hours >= 18 && hours < 20) return 'maghrib';
    if (hours >= 20 && hours < 23) return 'isha';
    return 'night';
}

function displaySunnan(period) {
    const container = document.getElementById('sunnan-content');
    
    // التحقق من وجود البيانات
    if (!sunnanData[period] || !sunnanData[period].sunnan) {
        container.innerHTML = '<div class="empty-message"><p>لا توجد سنن محددة لهذا الوقت</p></div>';
        return;
    }
    
    const sunnan = sunnanData[period].sunnan;
    
    let html = '';
    sunnan.forEach(item => {
        html += `<div class="sunna-item fade-in">
            <div class="sunna-icon">${item.icon}</div>
            <div class="sunna-content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
}

// ===== دوال المشاعر =====
function findAyah() {
    const feeling = document.getElementById('feeling-input').value.trim();
    if (!feeling) {
        alert('اكتب ما تشعر به');
        return;
    }
    searchFeeling(feeling);
}

function quickFeeling(feeling) {
    document.getElementById('feeling-input').value = feeling;
    searchFeeling(feeling);
}

function searchFeeling(feeling) {
    const container = document.getElementById('ayah-result');
    let allMatchedAyat = [];
    
    // البحث في جميع المشاعر المطابقة
    for (const [key, ayat] of Object.entries(feelingsAyat)) {
        if (feeling.includes(key) || key.includes(feeling)) {
            allMatchedAyat = allMatchedAyat.concat(ayat);
        }
    }
    
    // إزالة التكرارات
    const uniqueAyat = allMatchedAyat.filter((ayah, index, self) =>
        index === self.findIndex((a) => a.ayah === ayah.ayah)
    );
    
    if (uniqueAyat.length > 0) {
        // عرض آيات متعددة (حتى 3 آيات)
        const ayatToShow = uniqueAyat.sort(() => Math.random() - 0.5).slice(0, 3);
        
        let html = '<div class="fade-in">';
        ayatToShow.forEach((ayah, index) => {
            html += `
                <div class="feeling-ayah-item ${index > 0 ? 'mt-2' : ''}">
                    <p class="ayah-text">﴿ ${ayah.ayah} ﴾</p>
                    <p class="ayah-reference">📖 ${ayah.reference}</p>
                </div>
                ${index < ayatToShow.length - 1 ? '<hr class="ayah-divider">' : ''}
            `;
        });
        html += '</div>';
        
        container.innerHTML = html;
    } else {
        // آية افتراضية للتطمين
        container.innerHTML = `<div class="fade-in">
            <div class="feeling-ayah-item">
                <p class="ayah-text">﴿ وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ﴾</p>
                <p class="ayah-reference">📖 البقرة: 186</p>
            </div>
            <hr class="ayah-divider">
            <div class="feeling-ayah-item">
                <p class="ayah-text">﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾</p>
                <p class="ayah-reference">📖 الرعد: 28</p>
            </div>
        </div>`;
    }
}

// ===== دوال الأحاديث =====
function showHadithCategory(category, clickedElement) {
    const tabs = document.querySelectorAll('.hadith-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // تفعيل التاب المحدد
    if (clickedElement) {
        clickedElement.classList.add('active');
    } else {
        // تفعيل التاب الأول عند التحميل
        const firstTab = document.querySelector('.hadith-tab');
        if (firstTab) firstTab.classList.add('active');
    }
    
    const container = document.getElementById('hadith-content');
    if (!container || !ramadanHadith[category]) return;
    
    const hadiths = ramadanHadith[category];
    
    let html = '';
    hadiths.forEach(item => {
        html += `<div class="hadith-item fade-in">
            <div class="hadith-text">${item.text}</div>
            <span class="hadith-source">${item.source}</span>
        </div>`;
    });
    
    container.innerHTML = html;
}

// ===== البحث في الأحاديث =====
function check_hadith() {
    const searchKey = document.getElementById('skey').value.trim();
    
    if (!searchKey) {
        alert('اكتب كلمة للبحث');
        return;
    }
    
    document.getElementById('hadith-loading').style.display = 'block';
    document.getElementById('dorar').innerHTML = '';
    
    // رابط البحث في موقع الدرر السنية
    const dorarSearchUrl = `https://dorar.net/hadith/search?q=${encodeURIComponent(searchKey)}`;
    
    setTimeout(function() {
        document.getElementById('hadith-loading').style.display = 'none';
        document.getElementById('dorar').innerHTML = `
            <div class="dorar-search-result">
                <div class="dorar-link-box">
                    <p>🔍 نتائج البحث عن "<strong>${searchKey}</strong>"</p>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1rem;">
                        اضغط على الزر أدناه لفتح نتائج البحث في موقع الدرر السنية
                    </p>
                    <a href="${dorarSearchUrl}" target="_blank" class="btn btn-primary dorar-link" onclick="window.open('${dorarSearchUrl}', '_blank')">
                        📚 فتح نتائج البحث في الدرر السنية ←
                    </a>
                </div>
                <div class="local-hadith-results">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-color);">💡 أحاديث ذات صلة من مكتبتنا:</h4>
                    ${searchLocalHadith(searchKey)}
                </div>
            </div>
        `;
    }, 300);
}

// البحث في الأحاديث المحلية (بحث جزئي محسن)
function searchLocalHadith(searchKey) {
    let results = [];
    const searchWords = searchKey.split(' ').filter(w => w.length > 1);
    
    // البحث في جميع الفئات
    for (const category in ramadanHadith) {
        ramadanHadith[category].forEach(hadith => {
            // البحث عن الكلمة كاملة أو أي كلمة من كلمات البحث
            const hadithText = hadith.text.toLowerCase();
            const searchLower = searchKey.toLowerCase();
            
            // البحث الكامل
            if (hadithText.includes(searchLower)) {
                results.push({ ...hadith, score: 10 });
            } else {
                // البحث الجزئي (كلمات منفصلة)
                let matchCount = 0;
                searchWords.forEach(word => {
                    if (hadithText.includes(word.toLowerCase())) {
                        matchCount++;
                    }
                });
                if (matchCount > 0) {
                    results.push({ ...hadith, score: matchCount });
                }
            }
        });
    }
    
    // ترتيب حسب الصلة وإزالة التكرارات
    results.sort((a, b) => b.score - a.score);
    const uniqueResults = results.filter((item, index, self) => 
        index === self.findIndex(t => t.text === item.text)
    );
    
    if (uniqueResults.length > 0) {
        let html = '';
        uniqueResults.slice(0, 5).forEach(hadith => {
            html += `<div class="hadith-item fade-in">
                <div class="hadith-text">${hadith.text}</div>
                <span class="hadith-source">${hadith.source}</span>
            </div>`;
        });
        return html;
    } else {
        return `<p style="color: var(--text-secondary); text-align: center;">لا توجد أحاديث محلية مطابقة، جرب البحث في الدرر السنية</p>`;
    }
}

// دالة عرض نتائج الأحاديث (HTML من الدرر)
function displayHadithResults(htmlContent) {
    // إنشاء عنصر مؤقت لتحليل HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // البحث عن الأحاديث في الـ HTML
    const hadithElements = tempDiv.querySelectorAll('.hadith, .result-item, p');
    
    if (hadithElements.length > 0) {
        let html = '';
        hadithElements.forEach(function(elem) {
            const text = elem.textContent.trim();
            if (text.length > 20) {
                html += `<div class="hadith-item fade-in">
                    <div class="hadith-text">${text}</div>
                </div>`;
            }
        });
        
        if (html) {
            document.getElementById('dorar').innerHTML = html;
        } else {
            // عرض المحتوى كما هو
            document.getElementById('dorar').innerHTML = `<div class="hadith-results-raw">${htmlContent}</div>`;
        }
    } else {
        // عرض المحتوى كما هو
        document.getElementById('dorar').innerHTML = `<div class="hadith-results-raw">${htmlContent}</div>`;
    }
}

// دالة بديلة لعرض نتائج الأحاديث
function displayHadithResultsAlt(ahadithData) {
    let html = '';
    
    if (Array.isArray(ahadithData)) {
        ahadithData.forEach(function(item) {
            const text = item.hadith || item.th || item.text || item;
            if (typeof text === 'string' && text.length > 10) {
                html += `<div class="hadith-item fade-in">
                    <div class="hadith-text">${text}</div>
                </div>`;
            }
        });
    } else if (typeof ahadithData === 'string') {
        html = `<div class="hadith-results-raw">${ahadithData}</div>`;
    }
    
    if (html) {
        document.getElementById('dorar').innerHTML = html;
    } else {
        document.getElementById('dorar').innerHTML = `
            <div class="empty-message">
                <span style="font-size:2.5rem;">📚</span>
                <p>لم يتم العثور على نتائج</p>
            </div>`;
    }
}

// ============================================
// ===== قسم تصفح القرآن الكريم =====
// ============================================

// بيانات السور
const surahsData = [
    { number: 1, name: "الفاتحة", nameEn: "Al-Fatiha", ayahs: 7, type: "meccan", juz: 1 },
    { number: 2, name: "البقرة", nameEn: "Al-Baqarah", ayahs: 286, type: "medinan", juz: 1 },
    { number: 3, name: "آل عمران", nameEn: "Aal-Imran", ayahs: 200, type: "medinan", juz: 3 },
    { number: 4, name: "النساء", nameEn: "An-Nisa", ayahs: 176, type: "medinan", juz: 4 },
    { number: 5, name: "المائدة", nameEn: "Al-Ma'idah", ayahs: 120, type: "medinan", juz: 6 },
    { number: 6, name: "الأنعام", nameEn: "Al-An'am", ayahs: 165, type: "meccan", juz: 7 },
    { number: 7, name: "الأعراف", nameEn: "Al-A'raf", ayahs: 206, type: "meccan", juz: 8 },
    { number: 8, name: "الأنفال", nameEn: "Al-Anfal", ayahs: 75, type: "medinan", juz: 9 },
    { number: 9, name: "التوبة", nameEn: "At-Tawbah", ayahs: 129, type: "medinan", juz: 10 },
    { number: 10, name: "يونس", nameEn: "Yunus", ayahs: 109, type: "meccan", juz: 11 },
    { number: 11, name: "هود", nameEn: "Hud", ayahs: 123, type: "meccan", juz: 11 },
    { number: 12, name: "يوسف", nameEn: "Yusuf", ayahs: 111, type: "meccan", juz: 12 },
    { number: 13, name: "الرعد", nameEn: "Ar-Ra'd", ayahs: 43, type: "medinan", juz: 13 },
    { number: 14, name: "إبراهيم", nameEn: "Ibrahim", ayahs: 52, type: "meccan", juz: 13 },
    { number: 15, name: "الحجر", nameEn: "Al-Hijr", ayahs: 99, type: "meccan", juz: 14 },
    { number: 16, name: "النحل", nameEn: "An-Nahl", ayahs: 128, type: "meccan", juz: 14 },
    { number: 17, name: "الإسراء", nameEn: "Al-Isra", ayahs: 111, type: "meccan", juz: 15 },
    { number: 18, name: "الكهف", nameEn: "Al-Kahf", ayahs: 110, type: "meccan", juz: 15 },
    { number: 19, name: "مريم", nameEn: "Maryam", ayahs: 98, type: "meccan", juz: 16 },
    { number: 20, name: "طه", nameEn: "Ta-Ha", ayahs: 135, type: "meccan", juz: 16 },
    { number: 21, name: "الأنبياء", nameEn: "Al-Anbiya", ayahs: 112, type: "meccan", juz: 17 },
    { number: 22, name: "الحج", nameEn: "Al-Hajj", ayahs: 78, type: "medinan", juz: 17 },
    { number: 23, name: "المؤمنون", nameEn: "Al-Mu'minun", ayahs: 118, type: "meccan", juz: 18 },
    { number: 24, name: "النور", nameEn: "An-Nur", ayahs: 64, type: "medinan", juz: 18 },
    { number: 25, name: "الفرقان", nameEn: "Al-Furqan", ayahs: 77, type: "meccan", juz: 18 },
    { number: 26, name: "الشعراء", nameEn: "Ash-Shu'ara", ayahs: 227, type: "meccan", juz: 19 },
    { number: 27, name: "النمل", nameEn: "An-Naml", ayahs: 93, type: "meccan", juz: 19 },
    { number: 28, name: "القصص", nameEn: "Al-Qasas", ayahs: 88, type: "meccan", juz: 20 },
    { number: 29, name: "العنكبوت", nameEn: "Al-Ankabut", ayahs: 69, type: "meccan", juz: 20 },
    { number: 30, name: "الروم", nameEn: "Ar-Rum", ayahs: 60, type: "meccan", juz: 21 },
    { number: 31, name: "لقمان", nameEn: "Luqman", ayahs: 34, type: "meccan", juz: 21 },
    { number: 32, name: "السجدة", nameEn: "As-Sajdah", ayahs: 30, type: "meccan", juz: 21 },
    { number: 33, name: "الأحزاب", nameEn: "Al-Ahzab", ayahs: 73, type: "medinan", juz: 21 },
    { number: 34, name: "سبأ", nameEn: "Saba", ayahs: 54, type: "meccan", juz: 22 },
    { number: 35, name: "فاطر", nameEn: "Fatir", ayahs: 45, type: "meccan", juz: 22 },
    { number: 36, name: "يس", nameEn: "Ya-Sin", ayahs: 83, type: "meccan", juz: 22 },
    { number: 37, name: "الصافات", nameEn: "As-Saffat", ayahs: 182, type: "meccan", juz: 23 },
    { number: 38, name: "ص", nameEn: "Sad", ayahs: 88, type: "meccan", juz: 23 },
    { number: 39, name: "الزمر", nameEn: "Az-Zumar", ayahs: 75, type: "meccan", juz: 23 },
    { number: 40, name: "غافر", nameEn: "Ghafir", ayahs: 85, type: "meccan", juz: 24 },
    { number: 41, name: "فصلت", nameEn: "Fussilat", ayahs: 54, type: "meccan", juz: 24 },
    { number: 42, name: "الشورى", nameEn: "Ash-Shura", ayahs: 53, type: "meccan", juz: 25 },
    { number: 43, name: "الزخرف", nameEn: "Az-Zukhruf", ayahs: 89, type: "meccan", juz: 25 },
    { number: 44, name: "الدخان", nameEn: "Ad-Dukhan", ayahs: 59, type: "meccan", juz: 25 },
    { number: 45, name: "الجاثية", nameEn: "Al-Jathiyah", ayahs: 37, type: "meccan", juz: 25 },
    { number: 46, name: "الأحقاف", nameEn: "Al-Ahqaf", ayahs: 35, type: "meccan", juz: 26 },
    { number: 47, name: "محمد", nameEn: "Muhammad", ayahs: 38, type: "medinan", juz: 26 },
    { number: 48, name: "الفتح", nameEn: "Al-Fath", ayahs: 29, type: "medinan", juz: 26 },
    { number: 49, name: "الحجرات", nameEn: "Al-Hujurat", ayahs: 18, type: "medinan", juz: 26 },
    { number: 50, name: "ق", nameEn: "Qaf", ayahs: 45, type: "meccan", juz: 26 },
    { number: 51, name: "الذاريات", nameEn: "Adh-Dhariyat", ayahs: 60, type: "meccan", juz: 26 },
    { number: 52, name: "الطور", nameEn: "At-Tur", ayahs: 49, type: "meccan", juz: 27 },
    { number: 53, name: "النجم", nameEn: "An-Najm", ayahs: 62, type: "meccan", juz: 27 },
    { number: 54, name: "القمر", nameEn: "Al-Qamar", ayahs: 55, type: "meccan", juz: 27 },
    { number: 55, name: "الرحمن", nameEn: "Ar-Rahman", ayahs: 78, type: "medinan", juz: 27 },
    { number: 56, name: "الواقعة", nameEn: "Al-Waqi'ah", ayahs: 96, type: "meccan", juz: 27 },
    { number: 57, name: "الحديد", nameEn: "Al-Hadid", ayahs: 29, type: "medinan", juz: 27 },
    { number: 58, name: "المجادلة", nameEn: "Al-Mujadilah", ayahs: 22, type: "medinan", juz: 28 },
    { number: 59, name: "الحشر", nameEn: "Al-Hashr", ayahs: 24, type: "medinan", juz: 28 },
    { number: 60, name: "الممتحنة", nameEn: "Al-Mumtahanah", ayahs: 13, type: "medinan", juz: 28 },
    { number: 61, name: "الصف", nameEn: "As-Saff", ayahs: 14, type: "medinan", juz: 28 },
    { number: 62, name: "الجمعة", nameEn: "Al-Jumu'ah", ayahs: 11, type: "medinan", juz: 28 },
    { number: 63, name: "المنافقون", nameEn: "Al-Munafiqun", ayahs: 11, type: "medinan", juz: 28 },
    { number: 64, name: "التغابن", nameEn: "At-Taghabun", ayahs: 18, type: "medinan", juz: 28 },
    { number: 65, name: "الطلاق", nameEn: "At-Talaq", ayahs: 12, type: "medinan", juz: 28 },
    { number: 66, name: "التحريم", nameEn: "At-Tahrim", ayahs: 12, type: "medinan", juz: 28 },
    { number: 67, name: "الملك", nameEn: "Al-Mulk", ayahs: 30, type: "meccan", juz: 29 },
    { number: 68, name: "القلم", nameEn: "Al-Qalam", ayahs: 52, type: "meccan", juz: 29 },
    { number: 69, name: "الحاقة", nameEn: "Al-Haqqah", ayahs: 52, type: "meccan", juz: 29 },
    { number: 70, name: "المعارج", nameEn: "Al-Ma'arij", ayahs: 44, type: "meccan", juz: 29 },
    { number: 71, name: "نوح", nameEn: "Nuh", ayahs: 28, type: "meccan", juz: 29 },
    { number: 72, name: "الجن", nameEn: "Al-Jinn", ayahs: 28, type: "meccan", juz: 29 },
    { number: 73, name: "المزمل", nameEn: "Al-Muzzammil", ayahs: 20, type: "meccan", juz: 29 },
    { number: 74, name: "المدثر", nameEn: "Al-Muddaththir", ayahs: 56, type: "meccan", juz: 29 },
    { number: 75, name: "القيامة", nameEn: "Al-Qiyamah", ayahs: 40, type: "meccan", juz: 29 },
    { number: 76, name: "الإنسان", nameEn: "Al-Insan", ayahs: 31, type: "medinan", juz: 29 },
    { number: 77, name: "المرسلات", nameEn: "Al-Mursalat", ayahs: 50, type: "meccan", juz: 29 },
    { number: 78, name: "النبأ", nameEn: "An-Naba", ayahs: 40, type: "meccan", juz: 30 },
    { number: 79, name: "النازعات", nameEn: "An-Nazi'at", ayahs: 46, type: "meccan", juz: 30 },
    { number: 80, name: "عبس", nameEn: "Abasa", ayahs: 42, type: "meccan", juz: 30 },
    { number: 81, name: "التكوير", nameEn: "At-Takwir", ayahs: 29, type: "meccan", juz: 30 },
    { number: 82, name: "الانفطار", nameEn: "Al-Infitar", ayahs: 19, type: "meccan", juz: 30 },
    { number: 83, name: "المطففين", nameEn: "Al-Mutaffifin", ayahs: 36, type: "meccan", juz: 30 },
    { number: 84, name: "الانشقاق", nameEn: "Al-Inshiqaq", ayahs: 25, type: "meccan", juz: 30 },
    { number: 85, name: "البروج", nameEn: "Al-Buruj", ayahs: 22, type: "meccan", juz: 30 },
    { number: 86, name: "الطارق", nameEn: "At-Tariq", ayahs: 17, type: "meccan", juz: 30 },
    { number: 87, name: "الأعلى", nameEn: "Al-A'la", ayahs: 19, type: "meccan", juz: 30 },
    { number: 88, name: "الغاشية", nameEn: "Al-Ghashiyah", ayahs: 26, type: "meccan", juz: 30 },
    { number: 89, name: "الفجر", nameEn: "Al-Fajr", ayahs: 30, type: "meccan", juz: 30 },
    { number: 90, name: "البلد", nameEn: "Al-Balad", ayahs: 20, type: "meccan", juz: 30 },
    { number: 91, name: "الشمس", nameEn: "Ash-Shams", ayahs: 15, type: "meccan", juz: 30 },
    { number: 92, name: "الليل", nameEn: "Al-Layl", ayahs: 21, type: "meccan", juz: 30 },
    { number: 93, name: "الضحى", nameEn: "Ad-Duha", ayahs: 11, type: "meccan", juz: 30 },
    { number: 94, name: "الشرح", nameEn: "Ash-Sharh", ayahs: 8, type: "meccan", juz: 30 },
    { number: 95, name: "التين", nameEn: "At-Tin", ayahs: 8, type: "meccan", juz: 30 },
    { number: 96, name: "العلق", nameEn: "Al-Alaq", ayahs: 19, type: "meccan", juz: 30 },
    { number: 97, name: "القدر", nameEn: "Al-Qadr", ayahs: 5, type: "meccan", juz: 30 },
    { number: 98, name: "البينة", nameEn: "Al-Bayyinah", ayahs: 8, type: "medinan", juz: 30 },
    { number: 99, name: "الزلزلة", nameEn: "Az-Zalzalah", ayahs: 8, type: "medinan", juz: 30 },
    { number: 100, name: "العاديات", nameEn: "Al-Adiyat", ayahs: 11, type: "meccan", juz: 30 },
    { number: 101, name: "القارعة", nameEn: "Al-Qari'ah", ayahs: 11, type: "meccan", juz: 30 },
    { number: 102, name: "التكاثر", nameEn: "At-Takathur", ayahs: 8, type: "meccan", juz: 30 },
    { number: 103, name: "العصر", nameEn: "Al-Asr", ayahs: 3, type: "meccan", juz: 30 },
    { number: 104, name: "الهمزة", nameEn: "Al-Humazah", ayahs: 9, type: "meccan", juz: 30 },
    { number: 105, name: "الفيل", nameEn: "Al-Fil", ayahs: 5, type: "meccan", juz: 30 },
    { number: 106, name: "قريش", nameEn: "Quraysh", ayahs: 4, type: "meccan", juz: 30 },
    { number: 107, name: "الماعون", nameEn: "Al-Ma'un", ayahs: 7, type: "meccan", juz: 30 },
    { number: 108, name: "الكوثر", nameEn: "Al-Kawthar", ayahs: 3, type: "meccan", juz: 30 },
    { number: 109, name: "الكافرون", nameEn: "Al-Kafirun", ayahs: 6, type: "meccan", juz: 30 },
    { number: 110, name: "النصر", nameEn: "An-Nasr", ayahs: 3, type: "medinan", juz: 30 },
    { number: 111, name: "المسد", nameEn: "Al-Masad", ayahs: 5, type: "meccan", juz: 30 },
    { number: 112, name: "الإخلاص", nameEn: "Al-Ikhlas", ayahs: 4, type: "meccan", juz: 30 },
    { number: 113, name: "الفلق", nameEn: "Al-Falaq", ayahs: 5, type: "meccan", juz: 30 },
    { number: 114, name: "الناس", nameEn: "An-Nas", ayahs: 6, type: "meccan", juz: 30 }
];

// أسماء الأجزاء
const juzNames = [
    "الم", "سيقول", "تلك الرسل", "لن تنالوا", "والمحصنات",
    "لا يحب الله", "وإذا سمعوا", "ولو أننا", "قال الملأ", "واعلموا",
    "يعتذرون", "وما من دابة", "وما أبرئ", "ربما", "سبحان",
    "قال ألم", "اقترب", "قد أفلح", "وقال الذين", "أمّن خلق",
    "اتل ما أوحي", "ومن يقنت", "وما لي", "فمن أظلم", "إليه يرد",
    "حم", "قال فما خطبكم", "قد سمع", "تبارك", "عمّ"
];

// متغيرات عامة للقرآن
let currentSurah = 1;
let currentJuz = 1;
let currentPage = 1;
let quranFontSize = 1.8;
let hifzMode = false;
let quranCache = {};
let tafseerCache = {};

// API URLs
const QURAN_API_BASE = 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1';
const QURAN_EDITION = 'ara-quranuthmanihaf'; // النص العربي بالرسم العثماني

// تطبيع النص العربي للبحث بدون حساسية للتشكيل أو أشكال الهمزة
function normalizeArabicText(text) {
    return String(text || '')
        .normalize('NFD')
        .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
        .replace(/[ـ]/g, '')
        .replace(/[إأآٱ]/g, 'ا')
        .replace(/[ى]/g, 'ي')
        .replace(/[ؤ]/g, 'و')
        .replace(/[ئ]/g, 'ي')
        .replace(/[ة]/g, 'ه')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

function buildNormalizedMap(text) {
    const original = String(text || '');
    let normalized = '';
    const indexMap = [];

    for (let i = 0; i < original.length; i++) {
        const char = original[i];
        const cleanChar = normalizeArabicText(char);

        if (cleanChar) {
            normalized += cleanChar;
            indexMap.push(i);
        }
    }

    return { normalized, indexMap };
}

function highlightNormalizedMatch(text, query) {
    const normalizedQuery = normalizeArabicText(query);
    if (!normalizedQuery) {
        return text;
    }

    const { normalized, indexMap } = buildNormalizedMap(text);
    const start = normalized.indexOf(normalizedQuery);

    if (start === -1) {
        return text;
    }

    const end = start + normalizedQuery.length - 1;
    const originalStart = indexMap[start];
    const originalEnd = indexMap[end];

    if (originalStart === undefined || originalEnd === undefined) {
        return text;
    }

    return `${text.slice(0, originalStart)}<span class="search-highlight">${text.slice(originalStart, originalEnd + 1)}</span>${text.slice(originalEnd + 1)}`;
}

// ===== دوال إدارة التخزين المحلي =====
function getBookmarks() {
    const bookmarks = localStorage.getItem('quranBookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmarks(bookmarks) {
    localStorage.setItem('quranBookmarks', JSON.stringify(bookmarks));
}

function getHifzProgress() {
    const progress = localStorage.getItem('quranHifzProgress');
    return progress ? JSON.parse(progress) : { surahs: {}, ayahs: {} };
}

function saveHifzProgress(progress) {
    localStorage.setItem('quranHifzProgress', JSON.stringify(progress));
}

// ===== دوال عرض القرآن =====
function initQuranSection() {
    displaySurahsList();
    displayJuzList();
    displayPagesList();
    displayBookmarks();
    updateHifzStats();
}

// عرض قائمة السور
function displaySurahsList(filter = 'all', search = '') {
    const container = document.getElementById('surahs-list');
    if (!container) return;
    
    const hifzProgress = getHifzProgress();
    let filteredSurahs = surahsData;
    
    // فلترة حسب النوع
    if (filter !== 'all') {
        filteredSurahs = filteredSurahs.filter(s => s.type === filter);
    }
    
    // فلترة حسب البحث
    if (search) {
        filteredSurahs = filteredSurahs.filter(s => 
            s.name.includes(search) || 
            s.nameEn.toLowerCase().includes(search.toLowerCase()) ||
            s.number.toString() === search
        );
    }
    
    let html = '';
    filteredSurahs.forEach(surah => {
        const isMemorized = hifzProgress.surahs[surah.number]?.complete;
        const memorizedClass = isMemorized ? 'memorized' : '';
        const typeClass = surah.type === 'medinan' ? 'medinan' : '';
        const typeText = surah.type === 'meccan' ? 'مكية' : 'مدنية';
        
        html += `
            <div class="surah-card ${memorizedClass}" onclick="openSurah(${surah.number})">
                <span class="surah-number">${surah.number}</span>
                ${isMemorized ? '<span class="hifz-indicator">✓</span>' : ''}
                <div class="surah-name">${surah.name}</div>
                <div class="surah-name-en">${surah.nameEn}</div>
                <div class="surah-meta">
                    <span class="surah-type ${typeClass}">${typeText}</span>
                    <span>${surah.ayahs} آية</span>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html || '<p class="empty-message">لم يتم العثور على سور مطابقة</p>';
}

// فلترة السور
function filterSurahs() {
    const search = document.getElementById('surah-search')?.value || '';
    const activeFilter = document.querySelector('.filter-btn.active');
    const filter = activeFilter ? activeFilter.textContent.trim() : 'all';
    
    let filterType = 'all';
    if (filter === 'مكية') filterType = 'meccan';
    else if (filter === 'مدنية') filterType = 'medinan';
    
    displaySurahsList(filterType, search);
}

function filterByType(type) {
    // تحديث الأزرار النشطة
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const search = document.getElementById('surah-search')?.value || '';
    displaySurahsList(type, search);
}

// عرض قائمة الأجزاء
function displayJuzList() {
    const container = document.getElementById('juz-list');
    if (!container) return;
    
    let html = '';
    for (let i = 1; i <= 30; i++) {
        const startSurah = surahsData.find(s => s.juz === i);
        const startSurahName = startSurah ? startSurah.name : '';
        
        html += `
            <div class="juz-card" onclick="openJuz(${i})">
                <div class="juz-number">${i}</div>
                <div class="juz-name">${juzNames[i-1]}</div>
                <div class="juz-range">من سورة ${startSurahName}</div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// عرض قائمة الصفحات
function displayPagesList() {
    const container = document.getElementById('pages-list');
    if (!container) return;
    
    let html = '';
    for (let i = 1; i <= 604; i++) {
        const currentClass = i === currentPage ? 'current' : '';
        html += `
            <div class="page-card ${currentClass}" onclick="openPage(${i})">
                <div class="page-num">${i}</div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// التنقل إلى صفحة محددة
function goToPage(pageNum) {
    if (pageNum >= 1 && pageNum <= 604) {
        currentPage = pageNum;
        openPage(pageNum);
    }
}

function goToPageInput() {
    const input = document.getElementById('page-input');
    const pageNum = parseInt(input?.value);
    if (pageNum && pageNum >= 1 && pageNum <= 604) {
        goToPage(pageNum);
    } else {
        alert('رقم الصفحة يجب أن يكون بين 1 و 604');
    }
}

// عرض المحفوظات
function displayBookmarks() {
    const container = document.getElementById('bookmarks-list');
    if (!container) return;
    
    const bookmarks = getBookmarks();
    
    if (bookmarks.length === 0) {
        container.innerHTML = '<p class="empty-message">لا توجد إشارات مرجعية محفوظة<br>اضغط على 🔖 أثناء القراءة لإضافة إشارة</p>';
        return;
    }
    
    let html = '';
    bookmarks.forEach((bookmark, index) => {
        const surah = surahsData.find(s => s.number === bookmark.surah);
        html += `
            <div class="bookmark-item">
                <div class="bookmark-info">
                    <div class="bookmark-title">سورة ${surah?.name || bookmark.surah}</div>
                    <div class="bookmark-details">
                        الآية ${bookmark.ayah || 1} - ${new Date(bookmark.date).toLocaleDateString('ar-SA')}
                    </div>
                </div>
                <div class="bookmark-actions">
                    <button onclick="openBookmark(${index})" title="فتح">📖</button>
                    <button onclick="removeBookmark(${index})" title="حذف">🗑️</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// إضافة/إزالة إشارة مرجعية
function toggleBookmark() {
    const bookmarks = getBookmarks();
    const existingIndex = bookmarks.findIndex(b => b.surah === currentSurah);
    
    if (existingIndex !== -1) {
        bookmarks.splice(existingIndex, 1);
        document.getElementById('bookmark-btn')?.classList.remove('active');
    } else {
        bookmarks.push({
            surah: currentSurah,
            ayah: 1,
            date: new Date().toISOString()
        });
        document.getElementById('bookmark-btn')?.classList.add('active');
    }
    
    saveBookmarks(bookmarks);
    displayBookmarks();
}

// حفظ كل الصفحة/السورة الحالية كمحفوظة
async function saveEntirePage() {
    try {
        // الحصول على معلومات السورة الحالية
        const surahInfo = surahsData.find(s => s.number === currentSurah);
        if (!surahInfo) {
            alert('خطأ في تحديد السورة');
            return;
        }
        
        const ayahCount = surahInfo.ayahs;
        let savedCount = 0;
        
        // جلب بيانات الحفظ الحالية
        const progress = getHifzProgress();
        
        // تحديث حالة كل الآيات إلى "محفوظة"
        for (let ayahNum = 1; ayahNum <= ayahCount; ayahNum++) {
            const ayahKey = `${currentSurah}-${ayahNum}`;
            
            // فقط إذا لم تكن محفوظة بالفعل
            if (!progress.ayahs[ayahKey]) {
                progress.ayahs[ayahKey] = true;
                savedCount++;
            }
        }
        
        // تحديث حالة السورة كمكتملة
        progress.surahs[currentSurah] = {
            complete: true,
            count: ayahCount
        };
        
        // حفظ التقدم
        saveHifzProgress(progress);
        
        // تحديث أيضاً حالات الآيات للعرض
        const statuses = JSON.parse(localStorage.getItem('ayahStatuses') || '{}');
        for (let ayahNum = 1; ayahNum <= ayahCount; ayahNum++) {
            const statusKey = `${currentSurah}:${ayahNum}`;
            if (statuses[statusKey] !== 'memorized') {
                statuses[statusKey] = 'memorized';
            }
        }
        localStorage.setItem('ayahStatuses', JSON.stringify(statuses));
        
        // تحديث إحصائيات الحفظ
        updateHifzStats();
        
        // تحديث قائمة السور لإظهار علامة الحفظ
        displaySurahsList();
        
        // إظهار رسالة نجاح
        const surahName = surahInfo.name;
        const btn = document.getElementById('save-page-btn');
        if (btn) {
            btn.textContent = '✅';
            btn.classList.add('saved');
            setTimeout(() => {
                btn.textContent = '💾';
                btn.classList.remove('saved');
            }, 2000);
        }
        
        // إعادة تحميل السورة لتحديث العرض
        openSurah(currentSurah);
        
        alert(`تم حفظ ${savedCount > 0 ? savedCount : ayahCount} آية من سورة ${surahName} كمحفوظة ✅`);
        
    } catch (error) {
        console.error('خطأ في حفظ الصفحة:', error);
        alert('حدث خطأ في حفظ الصفحة');
    }
}

function removeBookmark(index) {
    const bookmarks = getBookmarks();
    bookmarks.splice(index, 1);
    saveBookmarks(bookmarks);
    displayBookmarks();
}

function clearAllBookmarks() {
    if (confirm('هل تريد حذف جميع الإشارات المرجعية؟')) {
        saveBookmarks([]);
        displayBookmarks();
    }
}

function openBookmark(index) {
    const bookmarks = getBookmarks();
    if (bookmarks[index]) {
        openSurah(bookmarks[index].surah);
    }
}

// ===== دوال جلب القرآن من API =====
async function fetchQuranData(endpoint, fallback = true) {
    const url = `${QURAN_API_BASE}${endpoint}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API Error');
        return await response.json();
    } catch (error) {
        if (fallback) {
            // محاولة الرابط البديل
            const altUrl = url.replace('.json', '.min.json');
            try {
                const response = await fetch(altUrl);
                if (!response.ok) throw new Error('Fallback API Error');
                return await response.json();
            } catch (e) {
                console.error('فشل في جلب البيانات:', e);
                return null;
            }
        }
        return null;
    }
}

// فتح سورة للقراءة
async function openSurah(surahNumber) {
    currentSurah = surahNumber;
    const surah = surahsData.find(s => s.number === surahNumber);
    
    // إظهار القارئ
    const reader = document.getElementById('quran-reader');
    const loading = document.getElementById('quran-loading');
    const content = document.getElementById('quran-content');
    const mushafContainer = document.getElementById('mushaf-container');
    
    if (!reader || !loading || !content) return;
    
    reader.style.display = 'flex';
    loading.style.display = 'block';
    content.style.display = 'block';
    content.innerHTML = '';
    if (mushafContainer) mushafContainer.style.display = 'none';
    
    // تحديث عنوان السورة
    document.getElementById('reader-surah-name').textContent = `سورة ${surah?.name}`;
    document.getElementById('reader-surah-info').textContent = 
        `${surah?.type === 'meccan' ? 'مكية' : 'مدنية'} - ${surah?.ayahs} آية`;
    document.getElementById('current-position').textContent = `سورة ${surahNumber} من 114`;
    
    // تحديث حالة الإشارة المرجعية
    const bookmarks = getBookmarks();
    const isBookmarked = bookmarks.some(b => b.surah === surahNumber);
    document.getElementById('bookmark-btn')?.classList.toggle('active', isBookmarked);
    
    // جلب بيانات السورة
    try {
        let data;
        
        // التحقق من الذاكرة المؤقتة
        if (quranCache[surahNumber]) {
            data = quranCache[surahNumber];
        } else {
            data = await fetchQuranData(`/editions/${QURAN_EDITION}/${surahNumber}.json`);
            if (data) {
                quranCache[surahNumber] = data;
            }
        }
        
        loading.style.display = 'none';
        
        if (data && data.chapter) {
            displaySurahContent(data.chapter, surah);
        } else {
            content.innerHTML = '<p class="empty-message">تعذر تحميل السورة. يرجى المحاولة مرة أخرى.</p>';
        }
    } catch (error) {
        loading.style.display = 'none';
        content.innerHTML = '<p class="empty-message">حدث خطأ أ أثناء التحميل. تأكد من اتصالك بالإنترنت.</p>';
    }
}

// عرض محتوى السورة
function displaySurahContent(ayahs, surahInfo) {
    const content = document.getElementById('quran-content');
    const mushafContainer = document.getElementById('mushaf-container');
    const hifzProgress = getHifzProgress();
    const ayahStatuses = JSON.parse(localStorage.getItem('ayahStatuses') || '{}');
    
    // إظهار المحتوى العادي وإخفاء المصحف
    if (content) content.style.display = 'block';
    if (mushafContainer) mushafContainer.style.display = 'none';
    
    let html = '';
    
    // البسملة (ما عدا سورة التوبة)
    if (currentSurah !== 9) {
        html += '<div class="bismillah">﷽</div>';
    }
    
    ayahs.forEach((ayah, index) => {
        const ayahNum = index + 1;
        const isMemorized = hifzProgress.ayahs[`${currentSurah}-${ayahNum}`];
        const statusKey = `${currentSurah}:${ayahNum}`;
        const ayahStatus = ayahStatuses[statusKey] || '';
        const memorizedClass = isMemorized ? 'memorized' : '';
        const statusClass = ayahStatus ? ayahStatus : '';
        const safeText = ayah.text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        
        html += `
            <div class="ayah-container ${memorizedClass} ${statusClass}" id="ayah-${ayahNum}" data-surah="${currentSurah}" data-ayah="${ayahNum}" onclick="openAyahModal(${currentSurah}, ${ayahNum}, '${safeText}')">
                <div class="ayah-text-display" style="font-size: ${quranFontSize}rem;">
                    ${ayah.text}
                    <span class="ayah-end-mark">۝${toArabicNumber(ayahNum)}</span>
                </div>
                <div class="ayah-translation" id="translation-${ayahNum}" style="display: none;"></div>
                <div class="ayah-actions" style="display: none;">
                    <button class="ayah-action-btn memorized-btn ${isMemorized ? 'active' : ''}" 
                            onclick="event.stopPropagation(); toggleAyahHifz(${currentSurah}, ${ayahNum})">
                        ${isMemorized ? '✓ محفوظة' : '📝 حفظت'}
                    </button>
                    <button class="ayah-action-btn" onclick="event.stopPropagation(); copyAyah('${safeText}', ${ayahNum})">
                        📋 نسخ
                    </button>
                    <button class="ayah-action-btn" onclick="event.stopPropagation(); shareAyah('${surahInfo.name}', ${ayahNum})">
                        📤 مشاركة
                    </button>
                </div>
                <div class="ayah-inline-tools">
                    <button class="ayah-action-btn tafseer-btn" onclick="event.stopPropagation(); toggleAyahTafseer(${currentSurah}, ${ayahNum})">
                        📘 تفسير الآية
                    </button>
                </div>
                <div class="ayah-tafseer" id="tafseer-${currentSurah}-${ayahNum}" style="display: none;"></div>
            </div>
        `;
    });
    
    content.innerHTML = html;
    
    // تحميل الترجمة إذا كانت مفعلة
    if (translationEnabled) {
        loadTranslations();
    }
}

// تحويل الأرقام للعربية
function toArabicNumber(num) {
    const arabicNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).split('').map(d => arabicNums[parseInt(d)]).join('');
}

// وظائف الآيات
function copyAyah(text, ayahNum) {
    const surah = surahsData.find(s => s.number === currentSurah);
    const fullText = `${text}\n\n[ سورة ${surah?.name} - الآية ${ayahNum} ]`;
    
    navigator.clipboard.writeText(fullText).then(() => {
        alert('تم نسخ الآية بنجاح');
    }).catch(() => {
        // بديل للمتصفحات القديمة
        const textArea = document.createElement('textarea');
        textArea.value = fullText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('تم نسخ الآية بنجاح');
    });
}

function shareAyah(surahName, ayahNum) {
    const text = `من سورة ${surahName} - الآية ${ayahNum} | رفيق رمضان`;
    
    if (navigator.share) {
        navigator.share({
            title: 'آية من القرآن الكريم',
            text: text,
            url: window.location.href
        });
    } else {
        copyAyah(text, ayahNum);
    }
}

async function fetchAyahTafseer(surahNum, ayahNum) {
    const cacheKey = `${surahNum}:${ayahNum}`;
    if (tafseerCache[cacheKey]) {
        return tafseerCache[cacheKey];
    }

    const urls = [
        `https://api.quran-tafseer.com/tafseer/1/${surahNum}/${ayahNum}`,
        `http://api.quran-tafseer.com/tafseer/1/${surahNum}/${ayahNum}`
    ];

    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                continue;
            }

            const data = await response.json();
            const tafseerText = data?.text || data?.tafseer || data?.content;
            if (tafseerText) {
                tafseerCache[cacheKey] = tafseerText;
                return tafseerText;
            }
        } catch (error) {
            // نجرب الرابط البديل
        }
    }

    throw new Error('تعذر تحميل التفسير من الخادم');
}

async function toggleAyahTafseer(surahNum, ayahNum) {
    const tafseerEl = document.getElementById(`tafseer-${surahNum}-${ayahNum}`);
    if (!tafseerEl) {
        return;
    }

    if (tafseerEl.style.display === 'block') {
        tafseerEl.style.display = 'none';
        return;
    }

    tafseerEl.style.display = 'block';

    if (!tafseerEl.dataset.loaded) {
        tafseerEl.innerHTML = '<div class="tafseer-loading">جاري تحميل التفسير...</div>';
        try {
            const tafseerText = await fetchAyahTafseer(surahNum, ayahNum);
            tafseerEl.innerHTML = `
                <div class="tafseer-header">📘 التفسير الميسر</div>
                <p>${tafseerText}</p>
            `;
            tafseerEl.dataset.loaded = 'true';
        } catch (error) {
            tafseerEl.innerHTML = `
                <div class="tafseer-header">⚠️ تعذر تحميل التفسير</div>
                <p>تأكد من الاتصال بالإنترنت أو جرّب مرة أخرى بعد قليل.</p>
            `;
        }
    }
}

// تبديل حالة حفظ الآية
function toggleAyahHifz(surahNum, ayahNum) {
    const progress = getHifzProgress();
    const key = `${surahNum}-${ayahNum}`;
    
    if (progress.ayahs[key]) {
        delete progress.ayahs[key];
    } else {
        progress.ayahs[key] = true;
    }
    
    // التحقق من إكمال حفظ السورة
    const surah = surahsData.find(s => s.number === surahNum);
    if (surah) {
        let memorizedCount = 0;
        for (let i = 1; i <= surah.ayahs; i++) {
            if (progress.ayahs[`${surahNum}-${i}`]) memorizedCount++;
        }
        progress.surahs[surahNum] = {
            complete: memorizedCount === surah.ayahs,
            count: memorizedCount
        };
    }
    
    saveHifzProgress(progress);
    updateHifzStats();
    
    // تحديث قائمة السور
    displaySurahsList();
    
    // تحديث واجهة الآية
    const ayahContainer = document.getElementById(`ayah-${ayahNum}`);
    const btn = ayahContainer?.querySelector('.memorized-btn');
    
    if (progress.ayahs[key]) {
        ayahContainer?.classList.add('memorized');
        if (btn) {
            btn.classList.add('active');
            btn.textContent = '✓ محفوظة';
        }
    } else {
        ayahContainer?.classList.remove('memorized');
        if (btn) {
            btn.classList.remove('active');
            btn.textContent = '📝 حفظت';
        }
    }
}

// تحديث إحصائيات الحفظ
function updateHifzStats() {
    const progress = getHifzProgress();
    
    // حساب السور المحفوظة
    let memorizedSurahs = 0;
    Object.values(progress.surahs).forEach(s => {
        if (s.complete) memorizedSurahs++;
    });
    
    // حساب الآيات المحفوظة
    const memorizedAyahs = Object.keys(progress.ayahs).length;
    const totalAyahs = 6236;
    
    // حساب النسبة
    const percentage = ((memorizedAyahs / totalAyahs) * 100).toFixed(1);
    
    // تحديث العرض
    const surahCount = document.getElementById('hifz-surah-count');
    const ayahCount = document.getElementById('hifz-ayah-count');
    const percentageEl = document.getElementById('hifz-percentage');
    const progressFill = document.getElementById('hifz-progress-fill');
    
    if (surahCount) surahCount.textContent = `${memorizedSurahs}/114`;
    if (ayahCount) ayahCount.textContent = `${memorizedAyahs}/${totalAyahs}`;
    if (percentageEl) percentageEl.textContent = `${percentage}%`;
    if (progressFill) progressFill.style.width = `${percentage}%`;
}

// التنقل بين السور
function previousSurah() {
    if (currentSurah > 1) {
        openSurah(currentSurah - 1);
    }
}

function nextSurah() {
    if (currentSurah < 114) {
        openSurah(currentSurah + 1);
    }
}

// إغلاق القارئ
function closeReader() {
    const reader = document.getElementById('quran-reader');
    if (reader) reader.style.display = 'none';
}

// فتح جزء
async function openJuz(juzNumber) {
    currentJuz = juzNumber;
    
    const reader = document.getElementById('quran-reader');
    const loading = document.getElementById('quran-loading');
    const content = document.getElementById('quran-content');
    
    if (!reader || !loading || !content) return;
    
    reader.style.display = 'flex';
    loading.style.display = 'block';
    content.innerHTML = '';
    
    // تحديث العنوان
    document.getElementById('reader-surah-name').textContent = `الجزء ${juzNumber}`;
    document.getElementById('reader-surah-info').textContent = juzNames[juzNumber - 1];
    document.getElementById('current-position').textContent = `جزء ${juzNumber} من 30`;
    
    try {
        const data = await fetchQuranData(`/editions/${QURAN_EDITION}/juzs/${juzNumber}.json`);
        loading.style.display = 'none';
        
        if (data && data.juz) {
            displayJuzContent(data.juz);
        } else {
            content.innerHTML = '<p class="empty-message">تعذر تحميل الجزء. يرجى المحاولة مرة أخرى.</p>';
        }
    } catch (error) {
        loading.style.display = 'none';
        content.innerHTML = '<p class="empty-message">حدث خطأ أثناء التحميل.</p>';
    }
}

function displayJuzContent(ayahs) {
    const content = document.getElementById('quran-content');
    let html = '';
    let currentDisplaySurah = 0;
    
    ayahs.forEach((ayah, index) => {
        // عرض اسم السورة عند تغييرها
        if (ayah.chapter !== currentDisplaySurah) {
            currentDisplaySurah = ayah.chapter;
            const surah = surahsData.find(s => s.number === currentDisplaySurah);
            html += `<div class="juz-surah-header" onclick="openSurah(${currentDisplaySurah})">
                <h3>سورة ${surah?.name}</h3>
            </div>`;
            if (currentDisplaySurah !== 9 && ayah.verse === 1) {
                html += '<div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>';
            }
        }
        
        html += `
            <div class="ayah-container" id="juz-ayah-${index}">
                <div class="ayah-text-display" style="font-size: ${quranFontSize}rem;">
                    <span class="ayah-number">${ayah.verse}</span>
                    ${ayah.text}
                </div>
            </div>
        `;
    });
    
    content.innerHTML = html;
}

// فتح صفحة
async function openPage(pageNumber) {
    currentPage = pageNumber;
    
    const reader = document.getElementById('quran-reader');
    const loading = document.getElementById('quran-loading');
    const content = document.getElementById('quran-content');
    
    if (!reader || !loading || !content) return;
    
    reader.style.display = 'flex';
    loading.style.display = 'block';
    content.innerHTML = '';
    
    document.getElementById('reader-surah-name').textContent = `الصفحة ${pageNumber}`;
    document.getElementById('reader-surah-info').textContent = `من 604 صفحة`;
    document.getElementById('current-position').textContent = `صفحة ${pageNumber} من 604`;
    
    try {
        const data = await fetchQuranData(`/editions/${QURAN_EDITION}/pages/${pageNumber}.json`);
        loading.style.display = 'none';
        
        if (data && data.page) {
            displayPageContent(data.page);
        } else {
            content.innerHTML = '<p class="empty-message">تعذر تحميل الصفحة.</p>';
        }
    } catch (error) {
        loading.style.display = 'none';
        content.innerHTML = '<p class="empty-message">حدث خطأ أثناء التحميل.</p>';
    }
}

function displayPageContent(ayahs) {
    const content = document.getElementById('quran-content');
    let html = '';
    let currentDisplaySurah = 0;
    
    ayahs.forEach((ayah, index) => {
        if (ayah.chapter !== currentDisplaySurah) {
            currentDisplaySurah = ayah.chapter;
            const surah = surahsData.find(s => s.number === currentDisplaySurah);
            html += `<div class="juz-surah-header" onclick="openSurah(${currentDisplaySurah})">
                <h3>سورة ${surah?.name}</h3>
            </div>`;
            if (currentDisplaySurah !== 9 && ayah.verse === 1) {
                html += '<div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>';
            }
        }
        
        html += `
            <div class="ayah-container">
                <div class="ayah-text-display" style="font-size: ${quranFontSize}rem;">
                    <span class="ayah-number">${ayah.verse}</span>
                    ${ayah.text}
                </div>
            </div>
        `;
    });
    
    content.innerHTML = html;
}

// البحث في القرآن
async function searchQuran() {
    const searchInput = document.getElementById('quran-search-input');
    const resultsContainer = document.getElementById('search-results');
    const query = searchInput?.value.trim();
    const normalizedQuery = normalizeArabicText(query);
    
    if (!query || normalizedQuery.length < 2) {
        alert('أدخل كلمة للبحث (حرفين على الأقل)');
        return;
    }
    
    resultsContainer.innerHTML = '<div class="loading"><div class="spinner"></div><p>جاري البحث...</p></div>';
    
    try {
        // جلب القرآن كاملاً للبحث
        let fullQuran;
        if (quranCache['full']) {
            fullQuran = quranCache['full'];
        } else {
            fullQuran = await fetchQuranData(`/editions/${QURAN_EDITION}.json`);
            if (fullQuran) {
                quranCache['full'] = fullQuran;
            }
        }
        
        if (!fullQuran || !fullQuran.quran) {
            resultsContainer.innerHTML = '<p class="empty-search">تعذر البحث. حاول مرة أخرى.</p>';
            return;
        }
        
        // البحث في الآيات
        const results = [];
        fullQuran.quran.forEach(ayah => {
            if (normalizeArabicText(ayah.text).includes(normalizedQuery)) {
                results.push(ayah);
            }
        });
        
        if (results.length === 0) {
            resultsContainer.innerHTML = `<p class="empty-search">لم يتم العثور على نتائج لـ "${query}"</p>`;
            return;
        }
        
        // عرض النتائج (أول 50 نتيجة)
        let html = `<p style="margin-bottom:1rem;color:var(--text-secondary);">تم العثور على ${results.length} نتيجة</p>`;
        
        results.slice(0, 50).forEach(ayah => {
            const surah = surahsData.find(s => s.number === ayah.chapter);
            const highlightedText = highlightNormalizedMatch(ayah.text, query);
            
            html += `
                <div class="search-result-item" onclick="openSurahFromSearch(${ayah.chapter}, ${ayah.verse})">
                    <div class="search-result-ayah">${highlightedText}</div>
                    <div class="search-result-ref">📖 سورة ${surah?.name} - الآية ${ayah.verse}</div>
                </div>
            `;
        });
        
        if (results.length > 50) {
            html += `<p style="text-align:center;color:var(--text-secondary);margin-top:1rem;">يظهر 50 نتيجة من أصل ${results.length}</p>`;
        }
        
        resultsContainer.innerHTML = html;
        
    } catch (error) {
        resultsContainer.innerHTML = '<p class="empty-search">حدث خطأ أثناء البحث.</p>';
    }
}

function openSurahFromSearch(surahNum, ayahNum) {
    openSurah(surahNum).then(() => {
        // الانتقال للآية المحددة بعد التحميل
        setTimeout(() => {
            const ayahEl = document.getElementById(`ayah-${ayahNum}`);
            if (ayahEl) {
                ayahEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                ayahEl.style.background = 'var(--gold-light)';
                setTimeout(() => {
                    ayahEl.style.background = '';
                }, 2000);
            }
        }, 500);
    });
}

// تبديل التبويبات
function showQuranTab(tabName, clickedElement) {
    // إخفاء جميع المحتويات
    document.querySelectorAll('.quran-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // إزالة الفعّال من جميع التبويبات
    document.querySelectorAll('.quran-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // إظهار المحتوى المحدد
    const tabContent = document.getElementById(`${tabName}-tab`);
    if (tabContent) tabContent.classList.add('active');
    
    // تفعيل التبويب المضغوط
    if (clickedElement) clickedElement.classList.add('active');
}

// تغيير حجم الخط
function changeFontSize(delta) {
    quranFontSize = Math.max(1.2, Math.min(3, quranFontSize + (delta * 0.2)));
    document.querySelectorAll('.ayah-text-display').forEach(el => {
        el.style.fontSize = `${quranFontSize}rem`;
    });
}

// وضع الحفظ
function toggleHifzMode() {
    hifzMode = !hifzMode;
    document.getElementById('hifz-btn')?.classList.toggle('active', hifzMode);
    
    // إظهار/إخفاء أزرار الحفظ
    document.querySelectorAll('.ayah-actions').forEach(el => {
        el.style.display = hifzMode ? 'flex' : 'none';
    });
}

// الذهاب للأعلى
function scrollToTop() {
    const content = document.getElementById('quran-content');
    if (content) {
        content.scrollTop = 0;
    }
    document.getElementById('quran-reader')?.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== الوضع الداكن =====
function initDarkMode() {
    // استخدام تفضيل النظام كافتراضي
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    }
    
    // الاستماع لتغييرات تفضيل النظام
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            updateThemeIcon(e.matches);
        }
    });
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme === 'dark');
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = isDark ? '☀️' : '🌙';
    }
}

function setMobileMenuExpanded(isExpanded) {
    const button = document.getElementById('mobile-menu-button');
    if (button) {
        button.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        button.setAttribute('aria-label', isExpanded ? 'إغلاق القائمة' : 'فتح القائمة');
    }
}

// ===== قائمة الجوال =====
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    const burger = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.nav-overlay');
    const isOpening = !nav?.classList.contains('active');
    
    nav?.classList.toggle('active');
    burger?.classList.toggle('active');
    overlay?.classList.toggle('active');
    setMobileMenuExpanded(isOpening);
    
    // منع التمرير عند فتح القائمة
    document.body.style.overflow = nav?.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    const nav = document.querySelector('.main-nav');
    const burger = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.nav-overlay');
    
    nav?.classList.remove('active');
    burger?.classList.remove('active');
    overlay?.classList.remove('active');
    setMobileMenuExpanded(false);
    document.body.style.overflow = '';
}

// ===== مواقيت الصلاة =====
function initPrayerSection() {
    const citySelect = document.getElementById('prayer-city-select');
    const detectLocationButton = document.getElementById('detect-location-btn');

    if (!citySelect) {
        return;
    }

    citySelect.addEventListener('change', function(event) {
        const selectedLocation = prayerLocationPresets[event.target.value];
        if (selectedLocation) {
            loadPrayerTimes(selectedLocation);
        }
    });

    detectLocationButton?.addEventListener('click', detectPrayerLocation);

    const storedLocation = getStoredPrayerLocation();
    const initialLocation = storedLocation || prayerLocationPresets.makkah;

    if (initialLocation.key && citySelect.querySelector(`option[value="${initialLocation.key}"]`)) {
        citySelect.value = initialLocation.key;
    }

    loadPrayerTimes(initialLocation);
}

function getStoredPrayerLocation() {
    try {
        const savedLocation = localStorage.getItem('prayerLocation');
        if (!savedLocation) {
            return null;
        }

        const parsedLocation = JSON.parse(savedLocation);
        if (parsedLocation?.key && prayerLocationPresets[parsedLocation.key]) {
            return prayerLocationPresets[parsedLocation.key];
        }

        if (typeof parsedLocation?.latitude === 'number' && typeof parsedLocation?.longitude === 'number') {
            return parsedLocation;
        }

        return null;
    } catch (error) {
        console.error('تعذر قراءة الموقع المحفوظ:', error);
        return null;
    }
}

function persistPrayerLocation(location) {
    try {
        localStorage.setItem('prayerLocation', JSON.stringify(location));
    } catch (error) {
        console.error('تعذر حفظ موقع الصلاة:', error);
    }
}

function setPrayerStatus(message, type = 'info') {
    const statusElement = document.getElementById('prayer-status');
    if (!statusElement) {
        return;
    }

    statusElement.textContent = message;
    statusElement.className = `prayer-status ${type}`;
}

function getDateInTimeZone(timeZone) {
    const formatter = new Intl.DateTimeFormat('en-CA', {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const parts = formatter.formatToParts(new Date());
    const year = Number(parts.find(part => part.type === 'year')?.value || new Date().getFullYear());
    const month = Number(parts.find(part => part.type === 'month')?.value || new Date().getMonth() + 1);
    const day = Number(parts.find(part => part.type === 'day')?.value || new Date().getDate());
    return new Date(year, month - 1, day);
}

function buildPrayerApiDate(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

async function fetchPrayerTimings(location, date) {
    const endpoint = `https://api.aladhan.com/v1/timings/${buildPrayerApiDate(date)}?latitude=${location.latitude}&longitude=${location.longitude}&method=4&school=0&midnightMode=1`;
    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error(`Prayer API failed with status ${response.status}`);
    }

    const payload = await response.json();
    if (payload.code !== 200 || !payload.data) {
        throw new Error('Prayer API returned invalid data');
    }

    return payload.data;
}

async function loadPrayerTimes(location) {
    const citySelect = document.getElementById('prayer-city-select');
    const detectLocationButton = document.getElementById('detect-location-btn');

    if (citySelect) {
        citySelect.disabled = true;
    }

    if (detectLocationButton) {
        detectLocationButton.disabled = true;
    }

    setPrayerStatus('جاري تحديث مواقيت الصلاة...', 'loading');

    try {
        const baseDate = getDateInTimeZone(location.timeZone || 'Asia/Riyadh');
        const tomorrowDate = new Date(baseDate);
        tomorrowDate.setDate(baseDate.getDate() + 1);

        const [todayData, tomorrowData] = await Promise.all([
            fetchPrayerTimings(location, baseDate),
            fetchPrayerTimings(location, tomorrowDate)
        ]);

        prayerState.location = location;
        prayerState.today = todayData;
        prayerState.tomorrow = tomorrowData;
        prayerState.timeZone = todayData.meta?.timezone || location.timeZone || 'Asia/Riyadh';

        persistPrayerLocation({
            key: location.key,
            label: location.label,
            latitude: location.latitude,
            longitude: location.longitude,
            timeZone: prayerState.timeZone
        });

        renderPrayerSection();
        startPrayerCountdown();
        setPrayerStatus(`تم تحديث المواقيت لمدينة ${location.label}`, 'success');
    } catch (error) {
        console.error('خطأ في تحميل مواقيت الصلاة:', error);
        setPrayerStatus('تعذر تحميل المواقيت حالياً. تحقق من الاتصال ثم أعد المحاولة.', 'error');
    } finally {
        if (citySelect) {
            citySelect.disabled = false;
        }

        if (detectLocationButton) {
            detectLocationButton.disabled = false;
        }
    }
}

function detectPrayerLocation() {
    if (!navigator.geolocation) {
        setPrayerStatus('المتصفح لا يدعم تحديد الموقع الجغرافي.', 'error');
        return;
    }

    setPrayerStatus('جارٍ تحديد موقعك الحالي...', 'loading');

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const customLocation = {
                key: 'current-location',
                label: 'موقعك الحالي',
                latitude: Number(position.coords.latitude.toFixed(4)),
                longitude: Number(position.coords.longitude.toFixed(4)),
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            };

            loadPrayerTimes(customLocation);
        },
        function() {
            setPrayerStatus('تعذر الوصول إلى موقعك. يمكنك اختيار مدينة يدوياً.', 'error');
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000
        }
    );
}

function cleanPrayerTime(timeValue) {
    return String(timeValue || '--').split(' ')[0].trim();
}

function prayerTimeToSeconds(timeValue) {
    const [hours = '0', minutes = '0'] = cleanPrayerTime(timeValue).split(':');
    return (Number(hours) * 3600) + (Number(minutes) * 60);
}

function getTimeZoneNowParts(timeZone) {
    const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const parts = formatter.formatToParts(new Date());
    const result = {};

    parts.forEach(part => {
        if (part.type !== 'literal') {
            result[part.type] = part.value;
        }
    });

    return {
        year: Number(result.year),
        month: Number(result.month),
        day: Number(result.day),
        hour: Number(result.hour),
        minute: Number(result.minute),
        second: Number(result.second)
    };
}

function formatCountdown(totalSeconds) {
    const safeSeconds = Math.max(0, totalSeconds);
    const hours = Math.floor(safeSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((safeSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(safeSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function formatPrayerTimeForDisplay(timeValue) {
    const [hours = '0', minutes = '0'] = cleanPrayerTime(timeValue).split(':');
    const date = new Date();
    date.setHours(Number(hours), Number(minutes), 0, 0);
    return new Intl.DateTimeFormat('ar-SA', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).format(date);
}

function formatDateInputValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function convertGregorianDateToHijri(date) {
    const hijriFormatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    });

    return hijriFormatter.format(date);
}

function calculateNightSegments() {
    if (!prayerState.today || !prayerState.tomorrow) {
        return [];
    }

    const maghribSeconds = prayerTimeToSeconds(prayerState.today.timings.Maghrib);
    const fajrSeconds = 86400 + prayerTimeToSeconds(prayerState.tomorrow.timings.Fajr);
    const nightLength = fajrSeconds - maghribSeconds;
    const lastThirdStart = fajrSeconds - Math.floor(nightLength / 3);
    const midnight = maghribSeconds + Math.floor(nightLength / 2);

    const formatSeconds = (seconds) => {
        const normalized = seconds % 86400;
        const hours = Math.floor(normalized / 3600);
        const minutes = Math.floor((normalized % 3600) / 60);
        return formatPrayerTimeForDisplay(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
    };

    return [
        { label: 'الشروق', value: formatPrayerTimeForDisplay(prayerState.today.timings.Sunrise), note: 'بداية ارتفاع الشمس' },
        { label: 'منتصف الليل الشرعي', value: formatSeconds(midnight), note: 'منتصف ما بين المغرب وفجر الغد' },
        { label: 'بداية الثلث الأخير', value: formatSeconds(lastThirdStart), note: 'وقت مبارك للدعاء والقيام' }
    ];
}

function renderPrayerInsights() {
    const insightsContainer = document.getElementById('prayer-insights');
    if (!insightsContainer) {
        return;
    }

    const insights = calculateNightSegments();
    insightsContainer.innerHTML = insights.map(item => `
        <div class="prayer-insight-item">
            <div>
                <strong>${item.label}</strong>
                <p>${item.note}</p>
            </div>
            <span>${item.value}</span>
        </div>
    `).join('');
}

function initPrayerConverter() {
    const input = document.getElementById('gregorian-converter-date');
    if (!input) {
        return;
    }

    if (!input.value) {
        input.value = formatDateInputValue(new Date());
    }

    convertSelectedGregorianDate();
}

function convertSelectedGregorianDate() {
    const input = document.getElementById('gregorian-converter-date');
    const result = document.getElementById('date-converter-result');
    if (!input || !result || !input.value) {
        return;
    }

    const selectedDate = new Date(`${input.value}T12:00:00`);
    const gregorianText = new Intl.DateTimeFormat('ar-SA', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    }).format(selectedDate);

    result.innerHTML = `
        <strong>${convertGregorianDateToHijri(selectedDate)}</strong>
        <span>الموافق ميلادياً: ${gregorianText}</span>
    `;
}

function getNextPrayerInfo() {
    if (!prayerState.today || !prayerState.tomorrow) {
        return null;
    }

    const now = getTimeZoneNowParts(prayerState.timeZone);
    const currentSeconds = (now.hour * 3600) + (now.minute * 60) + now.second;

    for (const prayerName of ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']) {
        const prayerSeconds = prayerTimeToSeconds(prayerState.today.timings[prayerName]);
        if (prayerSeconds > currentSeconds) {
            return {
                name: prayerName,
                label: prayerLabels[prayerName],
                displayTime: formatPrayerTimeForDisplay(prayerState.today.timings[prayerName]),
                countdownSeconds: prayerSeconds - currentSeconds,
                isTomorrow: false
            };
        }
    }

    const nextDayFajrSeconds = prayerTimeToSeconds(prayerState.tomorrow.timings.Fajr);
    return {
        name: 'Fajr',
        label: prayerLabels.Fajr,
        displayTime: formatPrayerTimeForDisplay(prayerState.tomorrow.timings.Fajr),
        countdownSeconds: (86400 - currentSeconds) + nextDayFajrSeconds,
        isTomorrow: true
    };
}

function renderPrayerSection() {
    if (!prayerState.today) {
        return;
    }

    const grid = document.getElementById('prayer-times-grid');
    const nextPrayer = getNextPrayerInfo();
    const hijriDate = prayerState.today.date?.hijri;
    const gregorianDate = prayerState.today.date?.gregorian;
    const hijriText = hijriDate
        ? `${hijriDate.day} ${hijriDate.month?.ar || hijriDate.month?.en || ''} ${hijriDate.year}هـ`
        : '--';
    const gregorianText = gregorianDate
        ? `${gregorianDate.day} ${gregorianDate.month?.ar || gregorianDate.month?.en || ''} ${gregorianDate.year}`
        : '--';

    const nextPrayerName = document.getElementById('next-prayer-name');
    const nextPrayerTime = document.getElementById('next-prayer-time');
    const nextPrayerCountdown = document.getElementById('next-prayer-countdown');
    const hijriDateElement = document.getElementById('hijri-date');
    const hijriDateDetail = document.getElementById('hijri-date-detail');
    const gregorianDateElement = document.getElementById('gregorian-date');
    const gregorianDateDetail = document.getElementById('gregorian-date-detail');
    const prayerLocationLabel = document.getElementById('prayer-location-label');
    const prayerTimezone = document.getElementById('prayer-timezone');

    if (nextPrayerName) {
        nextPrayerName.textContent = nextPrayer ? `${nextPrayer.label}${nextPrayer.isTomorrow ? ' غداً' : ''}` : '--';
    }

    if (nextPrayerTime) {
        nextPrayerTime.textContent = nextPrayer?.displayTime || '--';
    }

    if (nextPrayerCountdown) {
        nextPrayerCountdown.textContent = nextPrayer ? formatCountdown(nextPrayer.countdownSeconds) : '--:--:--';
    }

    if (hijriDateElement) {
        hijriDateElement.textContent = hijriText;
    }

    if (hijriDateDetail) {
        hijriDateDetail.textContent = hijriDate?.weekday?.ar || 'التاريخ الهجري';
    }

    if (gregorianDateElement) {
        gregorianDateElement.textContent = gregorianText;
    }

    if (gregorianDateDetail) {
        gregorianDateDetail.textContent = gregorianDate?.weekday?.ar || gregorianDate?.weekday?.en || 'التاريخ الميلادي';
    }

    if (prayerLocationLabel) {
        prayerLocationLabel.textContent = prayerState.location?.label || '--';
    }

    if (prayerTimezone) {
        prayerTimezone.textContent = prayerState.timeZone || '--';
    }

    if (grid) {
        grid.innerHTML = prayerDisplayOrder.map(prayerName => {
            const isNextPrayer = nextPrayer?.name === prayerName;
            return `
                <div class="prayer-time-card ${isNextPrayer ? 'is-next' : ''}">
                    <span class="prayer-time-name">${prayerLabels[prayerName]}</span>
                    <strong class="prayer-time-value">${formatPrayerTimeForDisplay(prayerState.today.timings[prayerName])}</strong>
                    <span class="prayer-time-meta">${isNextPrayer ? 'الصلاة القادمة' : 'موعد اليوم'}</span>
                </div>
            `;
        }).join('');
    }

    renderPrayerInsights();
    initPrayerConverter();
}

function startPrayerCountdown() {
    if (prayerState.countdownInterval) {
        clearInterval(prayerState.countdownInterval);
    }

    renderPrayerSection();

    prayerState.countdownInterval = setInterval(function() {
        const nextPrayer = getNextPrayerInfo();
        const nextPrayerName = document.getElementById('next-prayer-name');
        const nextPrayerTime = document.getElementById('next-prayer-time');
        const nextPrayerCountdown = document.getElementById('next-prayer-countdown');

        if (!nextPrayer) {
            return;
        }

        if (nextPrayerName) {
            nextPrayerName.textContent = `${nextPrayer.label}${nextPrayer.isTomorrow ? ' غداً' : ''}`;
        }

        if (nextPrayerTime) {
            nextPrayerTime.textContent = nextPrayer.displayTime;
        }

        if (nextPrayerCountdown) {
            nextPrayerCountdown.textContent = formatCountdown(nextPrayer.countdownSeconds);
        }

        if (nextPrayer.countdownSeconds <= 1) {
            renderPrayerSection();
        }
    }, 1000);
}

// ===== عرض المصحف مع تقليب الصفحات =====
let currentMushafPage = 1;
let totalMushafPages = 604;
let mushafViewActive = false;
let mushafPagesCache = {};

async function togglePageView() {
    mushafViewActive = !mushafViewActive;
    const mushafContainer = document.getElementById('mushaf-container');
    const normalContent = document.getElementById('quran-content');
    const toggleBtn = document.querySelector('.view-toggle-btn');
    
    if (mushafViewActive) {
        mushafContainer?.classList.add('active');
        if (normalContent) normalContent.style.display = 'none';
        if (toggleBtn) toggleBtn.textContent = '📖 العرض العادي';
        
        // تحميل الصفحة الحالية
        if (currentSurah) {
            currentMushafPage = surahsData.find(s => s.number === currentSurah)?.startPage || 1;
        }
        await loadMushafPage(currentMushafPage);
    } else {
        mushafContainer?.classList.remove('active');
        if (normalContent) normalContent.style.display = 'block';
        if (toggleBtn) toggleBtn.textContent = '📜 عرض المصحف';
    }
}

async function loadMushafPage(pageNum) {
    const pageContent = document.getElementById('mushaf-page-content');
    const pageInfo = document.querySelector('.mushaf-page-info');
    const pageNumDisplay = document.querySelector('.mushaf-page-number');
    
    if (!pageContent) return;
    
    // تحديث عرض رقم الصفحة
    if (pageInfo) pageInfo.textContent = `صفحة ${pageNum} من ${totalMushafPages}`;
    if (pageNumDisplay) pageNumDisplay.textContent = pageNum;
    
    // التحقق من الكاش
    if (mushafPagesCache[pageNum]) {
        renderMushafPage(mushafPagesCache[pageNum]);
        updateMushafNavButtons();
        return;
    }
    
    pageContent.innerHTML = '<div style="text-align:center;padding:3rem;">جاري تحميل الصفحة...</div>';
    
    try {
        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranuthmanihaf.json`;
        const response = await fetch(url);
        const data = await response.json();
        
        // تصفية الآيات للصفحة المحددة
        const pageAyahs = data.quran.filter(ayah => ayah.page === pageNum);
        mushafPagesCache[pageNum] = pageAyahs;
        
        renderMushafPage(pageAyahs);
    } catch (error) {
        console.error('Error loading mushaf page:', error);
        pageContent.innerHTML = '<div style="text-align:center;padding:3rem;color:#f44336;">حدث خطأ في تحميل الصفحة</div>';
    }
    
    updateMushafNavButtons();
}

function renderMushafPage(ayahs) {
    const pageContent = document.getElementById('mushaf-page-content');
    if (!pageContent || !ayahs.length) return;
    
    // تجميع الآيات حسب السورة
    let html = '';
    let currentSurahNum = 0;
    const ayahStatuses = JSON.parse(localStorage.getItem('ayahStatuses') || '{}');
    
    ayahs.forEach(ayah => {
        // إضافة اسم السورة إذا تغيرت
        if (ayah.surah !== currentSurahNum) {
            currentSurahNum = ayah.surah;
            const surahInfo = surahsData[currentSurahNum - 1];
            if (surahInfo) {
                html += `<div class="mushaf-surah-header" style="text-align:center;font-weight:bold;margin:1rem 0;font-size:1.3rem;color:var(--gold);">
                    ❁ ${surahInfo.name} ❁
                </div>`;
                // إضافة البسملة (ما عدا الفاتحة والتوبة)
                if (currentSurahNum !== 1 && currentSurahNum !== 9 && ayah.ayah === 1) {
                    html += '<div style="text-align:center;margin:1rem 0;font-size:1.4rem;">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</div>';
                }
            }
        }
        
        const status = ayahStatuses[`${ayah.surah}:${ayah.ayah}`] || '';
        const statusClass = status ? ` ${status}` : '';
        
        html += `<span class="ayah-inline${statusClass}" 
            onclick="openAyahModal(${ayah.surah}, ${ayah.ayah}, '${escapeHtml(ayah.text)}')"
            data-surah="${ayah.surah}" 
            data-ayah="${ayah.ayah}">
            ${ayah.text} <span style="color:var(--gold);font-size:0.8em;">(${toArabicNumber(ayah.ayah)})</span>
        </span> `;
    });
    
    pageContent.innerHTML = html;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function flipPagePrev() {
    if (currentMushafPage > 1) {
        currentMushafPage++;
        animatePageFlip('prev');
    }
}

function flipPageNext() {
    if (currentMushafPage < totalMushafPages) {
        currentMushafPage--;
        animatePageFlip('next');
    }
}

function animatePageFlip(direction) {
    const page = document.querySelector('.mushaf-page');
    if (page) {
        page.classList.add('flipping');
        setTimeout(() => {
            loadMushafPage(currentMushafPage);
            page.classList.remove('flipping');
        }, 400);
    } else {
        loadMushafPage(currentMushafPage);
    }
}

function updateMushafNavButtons() {
    const prevBtn = document.querySelector('.mushaf-nav-btn[onclick*="flipPagePrev"]');
    const nextBtn = document.querySelector('.mushaf-nav-btn[onclick*="flipPageNext"]');
    
    if (prevBtn) prevBtn.disabled = currentMushafPage >= totalMushafPages;
    if (nextBtn) nextBtn.disabled = currentMushafPage <= 1;
}

// ===== الترجمة =====
let translationEnabled = false;
let currentTranslation = 'eng-abdulhye';
let translationsCache = {};

function toggleTranslation() {
    translationEnabled = !translationEnabled;
    
    const translationSettings = document.getElementById('translation-settings');
    const translationBtn = document.getElementById('translation-btn');
    
    if (translationSettings) {
        translationSettings.style.display = translationEnabled ? 'flex' : 'none';
    }
    if (translationBtn) {
        translationBtn.classList.toggle('active', translationEnabled);
    }
    
    if (translationEnabled && currentSurah) {
        loadTranslations();
    } else {
        hideAllTranslations();
    }
}

function changeTranslation() {
    currentTranslation = document.getElementById('translation-lang')?.value || 'eng-abdulhye';
    if (translationEnabled && currentSurah) {
        loadTranslations();
    }
}

async function loadTranslations() {
    const cacheKey = `${currentSurah}-${currentTranslation}`;
    
    if (translationsCache[cacheKey]) {
        displayTranslations(translationsCache[cacheKey]);
        return;
    }
    
    try {
        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/${currentTranslation}/${currentSurah}.json`;
        const response = await fetch(url);
        const data = await response.json();
        
        translationsCache[cacheKey] = data.chapter;
        displayTranslations(data.chapter);
    } catch (error) {
        console.error('Error loading translation:', error);
    }
}

function displayTranslations(translations) {
    document.querySelectorAll('.ayah-container').forEach((container, index) => {
        let translationEl = container.querySelector('.ayah-translation');
        
        if (translations[index]) {
            if (!translationEl) {
                translationEl = document.createElement('div');
                translationEl.className = 'ayah-translation';
                container.appendChild(translationEl);
            }
            translationEl.textContent = translations[index].text;
            translationEl.style.display = 'block';
        }
    });
}

function hideAllTranslations() {
    document.querySelectorAll('.ayah-translation').forEach(el => {
        el.style.display = 'none';
    });
}



// ===== مودال حالة الآية =====
let selectedAyahData = null;

function openAyahModal(surah, ayah, text) {
    selectedAyahData = { surah, ayah, text };
    
    const modal = document.getElementById('ayah-status-modal');
    const preview = document.getElementById('modal-ayah-text');
    const ref = document.getElementById('modal-ayah-ref');
    const surahName = surahsData[surah - 1]?.name || `سورة ${surah}`;
    
    if (preview) {
        preview.textContent = text;
    }
    if (ref) {
        ref.textContent = `سورة ${surahName} - الآية ${ayah}`;
    }
    
    // تحديث الحالة المحددة
    const ayahStatuses = JSON.parse(localStorage.getItem('ayahStatuses') || '{}');
    const currentStatus = ayahStatuses[`${surah}:${ayah}`] || 'none';
    
    document.querySelectorAll('.status-btn').forEach(btn => {
        const btnStatus = btn.onclick?.toString().match(/'([^']+)'/)?.[1] || '';
        btn.classList.toggle('active', btnStatus === currentStatus);
    });
    
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeAyahModal() {
    const modal = document.getElementById('ayah-status-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    selectedAyahData = null;
}

function setAyahStatus(status) {
    if (!selectedAyahData) return;
    
    const { surah, ayah } = selectedAyahData;
    const key = `${surah}:${ayah}`;
    const hifzKey = `${surah}-${ayah}`;
    
    const ayahStatuses = JSON.parse(localStorage.getItem('ayahStatuses') || '{}');
    
    if (status === 'none') {
        delete ayahStatuses[key];
    } else {
        ayahStatuses[key] = status;
    }
    
    localStorage.setItem('ayahStatuses', JSON.stringify(ayahStatuses));
    
    // تحديث نظام تتبع الحفظ أيضاً
    const progress = getHifzProgress();
    if (status === 'memorized') {
        progress.ayahs[hifzKey] = true;
    } else if (status === 'none' || status !== 'memorized') {
        delete progress.ayahs[hifzKey];
    }
    
    // التحقق من إكمال حفظ السورة
    const surahInfo = surahsData.find(s => s.number === surah);
    if (surahInfo) {
        let memorizedCount = 0;
        for (let i = 1; i <= surahInfo.ayahs; i++) {
            if (progress.ayahs[`${surah}-${i}`]) memorizedCount++;
        }
        progress.surahs[surah] = {
            complete: memorizedCount === surahInfo.ayahs,
            count: memorizedCount
        };
    }
    
    saveHifzProgress(progress);
    updateHifzStats();
    
    // تحديث قائمة السور إذا تغيرت حالة الحفظ
    displaySurahsList();
    
    // تحديث العرض
    updateAyahStatusDisplay(surah, ayah, status);
    
    // تحديث الخيارات المحددة
    document.querySelectorAll('.status-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.status === status);
    });
    
    // تحديث عداد المراجعة
    updateReviewCounts();
    
    closeAyahModal();
}

function updateAyahStatusDisplay(surah, ayah, status) {
    // تحديث في العرض العادي
    const ayahContainer = document.querySelector(`.ayah-container[data-ayah="${ayah}"][data-surah="${surah}"]`);
    if (ayahContainer) {
        ayahContainer.classList.remove('needs-review', 'learning', 'difficult', 'memorized');
        if (status && status !== 'none') {
            ayahContainer.classList.add(status);
        }
    }
    
    // تحديث في عرض المصحف
    const ayahInline = document.querySelector(`.ayah-inline[data-surah="${surah}"][data-ayah="${ayah}"]`);
    if (ayahInline) {
        ayahInline.classList.remove('needs-review', 'learning', 'difficult', 'memorized');
        if (status && status !== 'none') {
            ayahInline.classList.add(status);
        }
    }
}

// ===== تبويب المراجعة =====
let currentReviewFilter = 'all';

function filterReviewByStatus(status, btn) {
    currentReviewFilter = status;
    
    // تحديث الأزرار
    document.querySelectorAll('.review-filter-btn').forEach(b => b.classList.remove('active'));
    btn?.classList.add('active');
    
    displayReviewList();
}

function displayReviewList() {
    const reviewList = document.getElementById('review-list');
    if (!reviewList) return;
    
    const ayahStatuses = JSON.parse(localStorage.getItem('ayahStatuses') || '{}');
    const entries = Object.entries(ayahStatuses);
    
    // تصفية حسب الحالة
    const filtered = currentReviewFilter === 'all' 
        ? entries 
        : entries.filter(([key, status]) => status === currentReviewFilter);
    
    if (filtered.length === 0) {
        reviewList.innerHTML = `
            <div class="review-empty">
                <div class="review-empty-icon">📝</div>
                <p>لا توجد آيات ${currentReviewFilter === 'all' ? 'محفوظة' : 'بهذه الحالة'}</p>
            </div>
        `;
        return;
    }
    
    reviewList.innerHTML = filtered.map(([key, status]) => {
        const [surah, ayah] = key.split(':').map(Number);
        const surahInfo = surahsData[surah - 1];
        const statusIcons = {
            'needs-review': '🔄',
            'learning': '📚',
            'difficult': '⚠️'
        };
        
        return `
            <div class="review-item ${status}" onclick="goToAyah(${surah}, ${ayah})">
                <div class="review-item-status">${statusIcons[status] || '📖'}</div>
                <div class="review-item-content">
                    <div class="review-item-reference">${surahInfo?.name || 'سورة ' + surah} - آية ${ayah}</div>
                    <div class="review-item-text">انقر للانتقال إلى الآية</div>
                </div>
            </div>
        `;
    }).join('');
}

function updateReviewCounts() {
    const ayahStatuses = JSON.parse(localStorage.getItem('ayahStatuses') || '{}');
    const entries = Object.entries(ayahStatuses);
    
    const counts = {
        all: entries.length,
        'needs-review': entries.filter(([k, v]) => v === 'needs-review').length,
        'learning': entries.filter(([k, v]) => v === 'learning').length,
        'difficult': entries.filter(([k, v]) => v === 'difficult').length
    };
    
    // تحديث الأزرار
    document.querySelectorAll('.review-filter-btn').forEach(btn => {
        const status = btn.dataset.status || 'all';
        const countEl = btn.querySelector('.count');
        if (countEl) {
            countEl.textContent = counts[status] || 0;
        }
    });
}

async function goToAyah(surah, ayah) {
    // إغلاق القارئ إذا مفتوح
    closeReader();
    
    // فتح السورة
    await openSurah(surah);
    
    // الانتقال للآية بعد التحميل
    setTimeout(() => {
        const ayahContainer = document.querySelector(`.ayah-container[data-ayah="${ayah}"]`);
        if (ayahContainer) {
            ayahContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            ayahContainer.classList.add('highlighted');
            setTimeout(() => ayahContainer.classList.remove('highlighted'), 3000);
        }
    }, 500);
}
