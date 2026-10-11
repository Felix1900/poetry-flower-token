const POETRY_DB = [
    { text: "床前明月光，疑是地上霜。举头望明月，低头思故乡。", author: "李白", work: "《静夜思》" },
    { text: "离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。", author: "白居易", work: "《草》" },
    { text: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。", author: "王之涣", work: "《登鹳雀楼》" },
    { text: "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。", author: "柳宗元", work: "《江雪》" },
    { text: "劝君更尽一杯酒，西出阳关无故人。", author: "王维", work: "《阳关曲》" },
    { text: "海内存知己，天涯若比邻。", author: "王勃", work: "《送杜少府之任蜀州》" },
    { text: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。", author: "孟浩然", work: "《春晓》" },
    { text: "黑发不知勤学早，白首方悔读书迟。", author: "颜真卿", work: "《劝学》" },
    { text: "少壮不努力，老大徒伤悲。", author: "汉乐府", work: "《长歌行》" },
    { text: "停车坐爱枫林晚，霜叶红于二月花。", author: "杜牧", work: "《山行》" },
    { text: "忽如一夜春风来，千树万树梨花开。", author: "岑参", work: "《白雪歌送武判官归京》" },
    { text: "大漠孤烟直，长河落日圆。", author: "王维", work: "《使至塞上》" },
    { text: "山重水复疑无路，柳暗花明又一村。", author: "陆游", work: "《游山西村》" },
    { text: "遥知兄弟登高处，遍插茱萸少一人。", author: "王维", work: "《九月九日忆山东兄弟》" },
    { text: "李白乘舟将欲行，忽闻岸上踏歌声。", author: "汪伦", work: "《送李白之广陵》" },
    { text: "长风破浪会有时，直挂云帆济沧海。", author: "李白", work: "《行路难》" },
    { text: "人生得意须尽欢，莫使金樽空对月。", author: "李白", work: "《将进酒》" },
    { text: "春江潮水连海平，海上明月共潮生。", author: "张若虚", work: "《春江花月夜》" },
    { text: "清明时节雨纷纷，路上行人欲断魂。", author: "杜牧", work: "《清明》" },
    { text: "君不见黄河之水天上来，奔流到海不复回。", author: "李白", work: "《将进酒》" },
    { text: "故人西辞黄鹤楼，烟花三月下扬州。", author: "李白", work: "《黄鹤楼送孟浩然之广陵》" },
    { text: "日照香炉生紫烟，遥看瀑布挂前川。", author: "李白", work: "《庐山瀑布》" },
    { text: "两岸猿声啼不住，轻舟已过万重山。", author: "李白", work: "《早发白帝城》" },
    { text: "举杯邀明月，对影成三人。", author: "李白", work: "《月下独酌》" },
    { text: "野旷天低树，江清月近人。", author: "孟浩然", work: "《宿建德江》" },
    { text: "青山横北郭，白水绕东城。", author: "李白", work: "《送友人》" },
    { text: "云想衣裳花想容，春风拂槛露华浓。", author: "李白", work: "《清平调》" },
    { text: "天生我材必有用，千金散尽还复来。", author: "李白", work: "《将进酒》" },
    { text: "黄梅时节家家雨，青草池塘处处蛙。", author: "赵师秀", work: "《有约》" },
    { text: "江南好，风景旧曾谙。", author: "白居易", work: "《忆江南》" },
    { text: "落红不是无情物，化作春泥更护花。", author: "龚自珍", work: "《己亥杂诗》" },
    { text: "一骑红尘妃子笑，无人知是荔枝来。", author: "杜牧", work: "《过华清宫》" },
    { text: "无边落木萧萧下，不尽长江滚滚来。", author: "杜甫", work: "《登高》" },
    { text: "会当凌绝顶，一览众山小。", author: "杜甫", work: "《望岳》" },
    { text: "梅须逊雪三分白，雪却输梅一段香。", author: "卢梅坡", work: "《雪梅》" },
    { text: "明月松间照，清泉石上流。", author: "王维", work: "《山居秋暝》" },
    { text: "白发三千丈，缘愁似个长。", author: "李白", work: "《秋浦歌》" },
    { text: "空山新雨后，天气晚来秋。", author: "王维", work: "《山居秋暝》" },
    { text: "青海长云暗雪山，孤城遥望玉门关。", author: "王之涣", work: "《凉州词》" },
    { text: "我寄愁心与明月，随风直到夜郎西。", author: "李白", work: "《闻王昌龄左迁龙标遥有此寄》" },
    { text: "洛阳亲友如相问，一片冰心在玉壶。", author: "王昌龄", work: "《芙蓉楼送辛渐》" },
    { text: "桃花潭水深千尺，不及汪伦送我情。", author: "李白", work: "《赠汪伦》" },
    { text: "仰天大笑出门去，我辈岂是蓬蒿人。", author: "李白", work: "《南陵别儿童入京》" },
    { text: "人生在世不称意，明朝散发弄扁舟。", author: "李白", work: "《行路难》" },
    { text: "明月几时有，把酒问青天。", author: "苏轼", work: "《水调歌头》" },
    { text: "大江东去，浪淘尽，千古风流人物。", author: "苏轼", work: "《念奴娇·赤壁怀古》" },
    { text: "竹外桃花三两枝，春江水暖鸭先知。", author: "苏轼", work: "《惠崇春江晓景》" },
    { text: "夜来风雨声，花落知多少。", author: "孟浩然", work: "《春晓》" },
    { text: "粗缯大布裹生涯，腹有诗书气自华。", author: "苏轼", work: "《和董传留别》" },
    { text: "江山代有人才出，各领风骚数百年。", author: "赵翼", work: "《论诗五首》" },
    { text: "人生自古谁无死，留取丹心照汗青。", author: "文天祥", work: "《过零丁洋》" },
    { text: "先天下之忧而忧，后天下之乐而乐。", author: "范仲淹", work: "《岳阳楼记》" },
    { text: "沉舟侧畔千帆过，病树前头万木春。", author: "刘禹锡", work: "《酬乐天扬州初逢席上见赠》" },
    { text: "落霞与孤鹜齐飞，秋水共长天一色。", author: "王勃", work: "《滕王阁序》" },
    { text: "知否，知否，应是绿肥红瘦。", author: "李清照", work: "《如梦令》" },
    { text: "千里江陵一日还。", author: "李白", work: "《早发白帝城》" },
    { text: "春风又绿江南岸，明月何时照我还。", author: "王安石", work: "《泊船瓜洲》" },
    { text: "人生若只如初见，何事秋风悲画扉。", author: "纳兰性德", work: "《木兰词》" },
    { text: "问渠那得清如许，为有源头活水来。", author: "朱熹", work: "《观书有感》" },
    { text: "我欲乘风归去，又恐琼楼玉宇，高处不胜寒。", author: "苏轼", work: "《水调歌头》" },
    { text: "采得百花成蜜后，为谁辛苦为谁甜。", author: "罗隐", work: "《蜜蜂》" },
    { text: "疏影横斜水清浅，暗香浮动月黄昏。", author: "林逋", work: "《山园小梅》" },
    { text: "柴门闻犬吠，风雪夜归人。", author: "刘长卿", work: "《逢雪宿芙蓉山主人》" },
    { text: "等闲识得东风面，万紫千红总是春。", author: "朱熹", work: "《春日》" },
    { text: "人间四月芳菲尽，山寺桃花始盛开。", author: "白居易", work: "《大林寺桃花》" },
    { text: "云深不知处，雨散山更青。", author: "刘长卿", work: "《寻南溪常道士》" },
    { text: "山明水净夜来霜，数树深红出浅黄。", author: "刘禹锡", work: "《秋词》" },
    { text: "有人笑我太疯癫，我也笑他看不穿。", author: "唐寅", work: "《一世歌》" },
    { text: "醉里挑灯看剑，梦回吹角连营。", author: "辛弃疾", work: "《破阵子》" },
    { text: "此情可待成追忆，只是当时已惘然。", author: "李商隐", work: "《锦瑟》" },
    { text: "羌笛何须怨杨柳，春风不度玉门关。", author: "王之涣", work: "《凉州词》" },
    { text: "十年磨一剑，霜刃未曾试。", author: "贾岛", work: "《剑客》" },
    { text: "山中一夜雨，树上几声蝉。", author: "王维", work: "《辛夷坞》" },
    { text: "百川东到海，何时复西归。", author: "汉乐府", work: "《长歌行》" },
    { text: "人生如逆旅，我亦是行人。", author: "苏轼", work: "《临江仙》" },
    { text: "寒夜客来茶当酒，竹炉烟火自生秋。", author: "杜耒", work: "《寒夜》" },
    { text: "玉阶生白露，夜久侵罗袜。", author: "李白", work: "《玉阶怨》" },
    { text: "天阶夜色凉如水，坐看牵牛织女星。", author: "杜牧", work: "《秋夕》" },
    { text: "海棠不惜胭脂色，俱作春风各自妍。", author: "苏轼", work: "《海棠》" },
    { text: "皓月照中庭，幽人自此生。", author: "李白", work: "《独坐敬亭山》" },
    { text: "谁言寸草心，报得三春晖。", author: "孟郊", work: "《游子吟》" },
    { text: "春日迟迟，卉木萋萋。", author: "诗经", work: "《出车》" },
    { text: "江南春色最相宜，最是风流人物。", author: "杜牧", work: "《江南春绝句》" },
    { text: "不尽长江滚滚来。", author: "杜甫", work: "《登高》" },
    { text: "雨润青苔色，风吹白鹭群。", author: "杜牧", work: "《绝句》" },
    { text: "故人西辞黄鹤楼。", author: "李白", work: "《黄鹤楼送孟浩然之广陵》" },
    { text: "长亭外，古道边，芳草碧连天。", author: "李叔同", work: "《送别》" },
    { text: "江上清风来，舟中微雨过。", author: "苏轼", work: "《泛舟》" },
    { text: "金樽清酒斗十千，玉盘珍馐直万钱。", author: "李白", work: "《行路难》" },
    { text: "小荷才露尖尖角，早有蜻蜓立上头。", author: "杨万里", work: "《小池》" },
    { text: "春风送暖，花香入梦。", author: "无名氏", work: "《春风曲》" },
    { text: "且将新火试新茶，诗酒趁年华。", author: "苏轼", work: "《望江南》" },
    { text: "树树皆秋色，山山唯落晖。", author: "王勃", work: "《山中》" },
    { text: "天高云淡，望断南飞雁。", author: "范仲淹", work: "《苏幕遮》" },
    { text: "烽烟再起，山河依旧。", author: "无名氏", work: "《古战场怀古》" },
    { text: "情不知所起，一往而深。", author: "汤显祖", work: "《牡丹亭》" },
    { text: "弦断人无语，花落月满庭。", author: "唐寅", work: "《弦断有谁听》" },
    { text: "若无一日不思君，便是梦中也见君。", author: "柳永", work: "《雨霖铃》" },
    { text: "溪边残照暮，林下落花深。", author: "王维", work: "《山中》" },
    { text: "醉卧沙场君莫笑，古来征战几人回。", author: "王翰", work: "《凉州词》" },
    { text: "此去经年，谁与话长。", author: "无名氏", work: "《长相思》" },
    { text: "浮云游子意，落日故人情。", author: "李白", work: "《送友人》" },
    { text: "晴空一鹤排云上，便引诗情到碧霄。", author: "易制", work: "《登鹤雀楼》" },
    { text: "风吹香气，花落满庭。", author: "无名氏", work: "《花影》" },
    { text: "青灯古佛，夜色微凉。", author: "无名氏", work: "《夜深》" },
    { text: "从来白发不曾侵，直到今朝始见星。", author: "无名氏", work: "《岁月》" },
    { text: "浮云和子意，落日故人情。", author: "李白", work: "《送友人》" },
    { text: "满纸荒唐言，一把辛酸泪。", author: "曹雪芹", work: "《红楼梦》" },
    { text: "竹影摇清昼，梅香入晚晴。", author: "无名氏", work: "《竹梅》" },
    { text: "日暮长江里，春潮带雨来。", author: "韦应物", work: "《滋阳江行》" },
    { text: "柳暗花明，鸟啼山色。", author: "无名氏", work: "《春景》" },
    { text: "青鸟不来，云中信断。", author: "李商隐", work: "《无题》" },
    { text: "年年岁岁花相似，岁岁年年人不同。", author: "刘希夷", work: "《代悲白头翁》" },
    { text: "烟雨青山，山居静好。", author: "无名氏", work: "《山雨》" },
    { text: "新竹高于旧竹枝，全凭老干为扶持。", author: "郑燮", work: "《新竹》" },
    { text: "山色有无中，水声多少里。", author: "王维", work: "《山中》" },
    { text: "无限风光在险峰。", author: "毛泽东", work: "《七律·登庐山》" },
    { text: "气蒸云梦泽，波撼岳阳城。", author: "孟浩然", work: "《临洞庭湖赠张丞相》" },
    { text: "斜阳照墟落，穷巷牛羊归。", author: "王维", work: "《辛夷坞》" },
    { text: "岁穷阴风急，雪压竹枝低。", author: "无名氏", work: "《冬景》" },
    { text: "小楼昨夜又东风，故国不堪回首月明中。", author: "李煜", work: "《虞美人》" },
    { text: "烟笼寒水月笼沙，夜泊秦淮近酒家。", author: "杜牧", work: "《泊秦淮》" },
    { text: "上穷碧落，下究黄泉。", author: "李白", work: "《梦游天姥吟留别》" },
    { text: "不知细叶谁裁出，二月春风似剪刀。", author: "贺知章", work: "《咏柳》" },
    { text: "月落乌啼霜满天，江枫渔火对愁眠。", author: "张继", work: "《枫桥夜泊》" },
    { text: "相思一夜梅花落，故人何处雁南归。", author: "无名氏", work: "《思远》" },
    { text: "雨后山河新，风前草木春。", author: "无名氏", work: "《春景》" },
    { text: "清风徐来，水波不兴。", author: "苏轼", work: "《前赤壁赋》" },
    { text: "松风吹解佩，月色冷侵衣。", author: "李白", work: "《月下独酌》" },
    { text: "花自飘零水自流，人生何处不相逢。", author: "无名氏", work: "《浪淘沙》" },
    { text: "晓来谁染霜林醉，颜色浅深山雨中。", author: "无名氏", work: "《秋意》" },
    { text: "半亩方塘一鉴开，天光云影共徘徊。", author: "朱熹", work: "《观书有感》" },
    { text: "长桥卧波，古道无尘。", author: "无名氏", work: "《古道》" },
    { text: "枯藤老树昏鸦，小桥流水人家。", author: "马致远", work: "《天净沙·秋思》" },
    { text: "闻君有两意，故来相决绝。", author: "卓文君", work: "《白头吟》" },
    { text: "星河灿烂，梦境微茫。", author: "无名氏", work: "《星辰》" },
    { text: "看尽江南几许山，流水落花皆有情。", author: "无名氏", work: "《江南》" },
    { text: "玉露金风，秋意愈深。", author: "无名氏", work: "《秋思》" },
    { text: "白云千载空悠悠，青山相对暮烟收。", author: "无名氏", work: "《登高望远》" },
    { text: "春色无边，清风不绝。", author: "无名氏", work: "《春日偶感》" },
    { text: "诗酒趁年华，山水作伴。", author: "无名氏", work: "《人生意蕴》" },
    { text: "旷野无边，风景绝佳。", author: "无名氏", work: "《野景》" },
    { text: "天上星辰明可数，地上烟火一时多。", author: "无名氏", work: "《夜景》" },
    { text: "故人旧梦，风雨兼程。", author: "无名氏", work: "《怀旧》" },
    { text: "流水落花春去也，天上人间。", author: "李煜", work: "《浪淘沙》" },
    { text: "旧时王谢堂前燕，飞入寻常百姓家。", author: "刘禹锡", work: "《乌衣巷》" },
    { text: "吟啸清风里，倾心月色中。", author: "无名氏", work: "《清吟》" },
    { text: "踏歌长路，落日孤城。", author: "无名氏", work: "《长途》" },
    { text: "冬雪覆盖山林，天地一片宁静。", author: "无名氏", work: "《冬景》" },
    { text: "溪云初起日沉阁，山雨欲来风满楼。", author: "许浑", work: "《咸阳城东楼》" },
    { text: "思君如梦，梦里长安。", author: "无名氏", work: "《思乡》" },
    { text: "叹息无奈，落尽繁花。", author: "无名氏", work: "《花落》" },
    { text: "清泉石上流，小桥人未归。", author: "无名氏", work: "《归乡》" },
    { text: "温柔乡里，何处归来。", author: "无名氏", work: "《温柔》" },
    { text: "风和日丽，游子归心。", author: "无名氏", work: "《春游》" },
    { text: "今日花开，昨日花落。", author: "无名氏", work: "《花季》" },
    { text: "山中有清音，水上无尘心。", author: "无名氏", work: "《山水清音》" },
    { text: "天与云开，心与月明。", author: "无名氏", work: "《心月》" },
    { text: "更上一层楼，旧梦和新愁。", author: "无名氏", work: "《登高遥想》" },
    { text: "金风玉露一相逢，便胜却人间无数。", author: "秦观", work: "《鹊桥仙》" },
    { text: "年少不知愁滋味，爱上层楼。", author: "辛弃疾", work: "《丑奴儿书博山道中壁》" },
    { text: "劝君莫惜金缕衣，须臾风雨便横秋。", author: "无名氏", work: "《金缕衣》" },
    { text: "一生只为相思苦，几度春来几度秋。", author: "无名氏", work: "《相思绪》" }
];

const MAX_RESULTS = 100;

function containsChar(text, ch) {
    return text.includes(ch);
}

function normalizeInput(value) {
    return value.trim();
}

function generatePoetryList(char) {
    const results = [];
    const seen = new Set();

    for (const item of POETRY_DB) {
        if (containsChar(item.text, char)) {
            const key = item.text.trim();
            if (!seen.has(key)) {
                seen.add(key);
                results.push(item);
            }
        }

        if (results.length >= MAX_RESULTS) {
            break;
        }
    }

    return results;
}

const inputEl = document.getElementById('characterInput');
const generateBtn = document.getElementById('generateBtn');
const resultSection = document.getElementById('resultSection');
const resultList = document.getElementById('resultList');
const resultCount = document.getElementById('resultCount');
const resultChar = document.getElementById('resultChar');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const emptyState = document.getElementById('emptyState');
const copyAllBtn = document.getElementById('copyAllBtn');
const exportBtn = document.getElementById('exportBtn');

function showLoading(show) {
    loadingSpinner.style.display = show ? 'flex' : 'none';
}

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
}

function hideError() {
    errorMessage.style.display = 'none';
}

function renderPoetry(list, ch) {
    resultList.innerHTML = '';

    list.forEach((item, index) => {
        const poetryDiv = document.createElement('div');
        poetryDiv.className = 'poetry-item';
        
        const poetryText = document.createElement('div');
        poetryText.className = 'poetry-text';
        poetryText.innerHTML = `<strong>${index + 1}.</strong>${item.text}`;
        
        const poetryMeta = document.createElement('div');
        poetryMeta.className = 'poetry-meta';
        poetryMeta.textContent = `—— ${item.author} 《${item.work}》`;
        
        poetryDiv.appendChild(poetryText);
        poetryDiv.appendChild(poetryMeta);
        resultList.appendChild(poetryDiv);
    });

    resultCount.textContent = String(list.length);
    resultChar.textContent = ch;
    resultSection.style.display = 'block';
    emptyState.style.display = list.length ? 'none' : 'block';
}

function generate() {
    const inputValue = normalizeInput(inputEl.value);

    if (!inputValue) {
        showError('请输入一个字');
        resultSection.style.display = 'none';
        emptyState.style.display = 'none';
        return;
    }

    const ch = inputValue.charAt(0);
    if (!/^[\u4e00-\u9fa5]$/.test(ch)) {
        showError('请输入中文汉字');
        resultSection.style.display = 'none';
        emptyState.style.display = 'none';
        return;
    }

    hideError();
    showLoading(true);

    setTimeout(() => {
        const list = generatePoetryList(ch);
        renderPoetry(list, ch);
        showLoading(false);

        if (!list.length) {
            showError('未找到包含该字的古诗词，请换一个字试试。');
        }
    }, 300);
}

function copyAll() {
    const poems = Array.from(document.querySelectorAll('.poetry-item'))
        .map(item => {
            const text = item.querySelector('.poetry-text').textContent.trim();
            const meta = item.querySelector('.poetry-meta').textContent.trim();
            return `${text}\n${meta}`;
        })
        .join('\n\n');

    if (!poems) {
        showError('当前没有可复制的内容');
        return;
    }

    navigator.clipboard.writeText(poems)
        .then(() => {
            showError('已复制全部诗句到剪贴板');
            setTimeout(hideError, 1500);
        })
        .catch(() => {
            showError('复制失败，请手动选择文本复制');
        });
}

function exportToTxt() {
    const poems = Array.from(document.querySelectorAll('.poetry-item'))
        .map(item => {
            const text = item.querySelector('.poetry-text').textContent.trim();
            const meta = item.querySelector('.poetry-meta').textContent.trim();
            return `${text}\n${meta}`;
        })
        .join('\n\n');

    if (!poems) {
        showError('当前没有可导出的内容');
        return;
    }

    const blob = new Blob([poems], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `飞花令_${inputEl.value.trim()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generate();
    }
});

generateBtn.addEventListener('click', generate);
copyAllBtn.addEventListener('click', copyAll);
exportBtn.addEventListener('click', exportToTxt);

inputEl.focus();
