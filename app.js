const POETRY_DB = [
    "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
    "离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。",
    "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
    "暮江平不动，春山淡着浓。",
    "天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身。",
    "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。",
    "劝君更尽一杯酒，西出阳关无故人。",
    "海内存知己，天涯若比邻。",
    "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
    "黑发不知勤学早，白首方悔读书迟。",
    "少壮不努力，老大徒伤悲。",
    "停车坐爱枫林晚，霜叶红于二月花。",
    "忽如一夜春风来，千树万树梨花开。",
    "大漠孤烟直，长河落日圆。",
    "山重水复疑无路，柳暗花明又一村。",
    "遥知兄弟登高处，遍插茱萸少一人。",
    "天高云淡，望断南飞雁。",
    "李白乘舟将欲行，忽闻岸上踏歌声。",
    "长风破浪会有时，直挂云帆济沧海。",
    "人生得意须尽欢，莫使金樽空对月。",
    "蜀道之难，难于上青天。",
    "春江潮水连海平，海上明月共潮生。",
    "清明时节雨纷纷，路上行人欲断魂。",
    "君不见黄河之水天上来，奔流到海不复回。",
    "故人西辞黄鹤楼，烟花三月下扬州。",
    "欲穷千里目，更上一层楼。",
    "日照香炉生紫烟，遥看瀑布挂前川。",
    "两岸猿声啼不住，轻舟已过万重山。",
    "举杯邀明月，对影成三人。",
    "野旷天低树，江清月近人。",
    "青山横北郭，白水绕东城。",
    "云想衣裳花想容，春风拂槛露华浓。",
    "不尽长江滚滚来。",
    "天生我材必有用，千金散尽还复来。",
    "水晶帘动微风起，满架蔷薇一院香。",
    "黄梅时节家家雨，青草池塘处处蛙。",
    "江南好，风景旧曾谙。",
    "落红不是无情物，化作春泥更护花。",
    "一骑红尘妃子笑，无人知是荔枝来。",
    "无边落木萧萧下，不尽长江滚滚来。",
    "会当凌绝顶，一览众山小。",
    "梅须逊雪三分白，雪却输梅一段香。",
    "明月松间照，清泉石上流。",
    "停车坐爱枫林晚，霜叶红于二月花。",
    "白发三千丈，缘愁似个长。",
    "空山新雨后，天气晚来秋。",
    "青海长云暗雪山，孤城遥望玉门关。",
    "我寄愁心与明月，随风直到夜郎西。",
    "洛阳亲友如相问，一片冰心在玉壶。",
    "云中谁辨是王孙。",
    "桃花潭水深千尺，不及汪伦送我情。",
    "仰天大笑出门去，我辈岂是蓬蒿人。",
    "人生在世不称意，明朝散发弄扁舟。",
    "明月几时有，把酒问青天。",
    "天若有情天亦老，人间正道是沧桑。",
    "一曲新词酒一杯，去年天气旧亭台。",
    "大江东去，浪淘尽，千古风流人物。",
    "竹外桃花三两枝，春江水暖鸭先知。",
    "夜来风雨声，花落知多少。",
    "粗缯大布裹生涯，腹有诗书气自华。",
    "江山代有人才出，各领风骚数百年。",
    "人生自古谁无死，留取丹心照汗青。",
    "先天下之忧而忧，后天下之乐而乐。",
    "沉舟侧畔千帆过，病树前头万木春。",
    "落霞与孤鹜齐飞，秋水共长天一色。",
    "知否，知否，应是绿肥红瘦。",
    "窗前明月光，疑是地上霜。",
    "千里江陵一日还。",
    "春风又绿江南岸，明月何时照我还。",
    "人生若只如初见，何事秋风悲画扉。",
    "问渠那得清如许，为有源头活水来。",
    "我欲乘风归去，又恐琼楼玉宇，高处不胜寒。",
    "采得百花成蜜后，为谁辛苦为谁甜。",
    "满眼风光多闪烁，看山恰似走来迎。",
    "疏影横斜水清浅，暗香浮动月黄昏。",
    "柴门闻犬吠，风雪夜归人。",
    "等闲识得东风面，万紫千红总是春。",
    "春华秋实，岁月无声。",
    "云横秦岭家何在，雪拥蓝关马不前。",
    "落叶满空山，何处寻归路。",
    "人间四月芳菲尽，山寺桃花始盛开。",
    "洞庭青草，近中秋。",
    "结果不须争，心地自清平。",
    "风云变幻，江海生平。",
    "莫道无衣胜有衣，宁教我负天下人。",
    "桂花秋影落，小院夜凉生。",
    "回首向来萧瑟处，归去，也无风雨也无晴。",
    "云深不知处，雨散山更青。",
    "山明水净夜来霜，数树深红出浅黄。",
    "天边一朵白云，风起片片飞。",
    "有人笑我太疯癫，我也笑他看不穿。",
    "青梅煮酒论英雄，谁能争锋。",
    "明知山有虎，偏向虎山行。",
    "酒入愁肠，化作相思泪。",
    "山外青山楼外楼，西湖歌舞几时休。",
    "长安回望绣成堆，山顶千门次第开。",
    "十年磨一剑，霜刃未曾试。",
    "平生不识凌云笔，试看新磨利。",
    "孤影照寒池，月如银色。",
    "山中一夜雨，树上几声蝉。",
    "百川东到海，何时复西归。",
    "橘子洲头白鹭飞，万里长江一日还。",
    "人生如逆旅，我亦是行人。",
    "雨润青苔色，风吹白鹭群。",
    "寒夜客来茶当酒，竹炉烟火自生秋。",
    "云收雨霁，波静风平。",
    "玉阶生白露，夜久侵罗袜。",
    "天阶夜色凉如水，坐看牵牛织女星。",
    "海棠不惜胭脂色，俱作春风各自妍。",
    "花开花落尚有时，人间最难得是少年。",
    "皓月照中庭，幽人自此生。",
    "落日照大旗，马鸣风萧萧。",
    "岁月从古到今，人生几度离合。",
    "谁言寸草心，报得三春晖。",
    "春日迟迟，卉木萋萋。",
    "烽烟再起，山河依旧。",
    "江南春色最相宜，最是风流人物。",
    "花白年华老，风清岁月深。",
    "男儿何不带吴钩，收取关山五十州。",
    "一片冰心在玉壶。",
    "情不知所起，一往而深。",
    "弦断人无语，花落月满庭。",
    "若无一日不思君，便是梦中也见君。",
    "溪边残照暮，林下落花深。",
    "羌笛何须怨杨柳，春风不度玉门关。",
    "醉里挑灯看剑，梦回吹角连营。",
    "此情可待成追忆，只是当时已惘然。",
    "故国三千里，深宫二十年。",
    "万里悲秋常作客，百年多病独登台。",
    "疏影横斜暗香淡，月上柳梢头。",
    "雁字回时，月满西楼。",
    "山寺月中寻桂子，江村雪里看梅花。",
    "空庭长日静，知有读书声。",
    "闻说双溪春尚好，也无风雨也无晴。",
    "琴心三叠，山雨欲来。",
    "远山淡，近水明。",
    "我在秋风里，听见落叶的回响。",
    "花落知多少，风吹过故人乡。",
    "清浅流年，曾经沧海。",
    "云翻雪卷，三十六峰。",
    "树树皆秋色，山山唯落晖。",
    "一声问候，万里长城。",
    "酒醒思量，夜色沉沉。",
    "天寒雁影稀，暮雨绵绵。",
    "渭城朝雨浥轻尘，客舍青青柳色新。",
    "中秋月色最清幽，照见人间无尽愁。",
    "高山流水觅知音，白云悠悠自在心。",
    "终南山色与君深，不及尘间一世人。",
    "残霞夕照，旧梦初心。",
    "前程似锦，山河无恙。",
    "古木阴中系短篷，杖藜扶我过桥东。",
    "空林返照，照见清霜。",
    "新竹高于旧竹枝，全凭老干为扶持。",
    "山色有无中，水声多少里。",
    "无限风光在险峰。",
    "气蒸云梦泽，波撼岳阳城。",
    "斜阳照墟落，穷巷牛羊归。",
    "岁穷阴风急，雪压竹枝低。",
    "南邻有酒，多饮一杯。",
    "小楼昨夜又东风，故国不堪回首月明中。",
    "烟笼寒水月笼沙，夜泊秦淮近酒家。",
    "上穷碧落，下究黄泉。",
    "不知细叶谁裁出，二月春风似剪刀。",
    "山高水长，时光不老。",
    "人间烟火，最见真情。",
    "一树梨花压海棠，春风不放旧情长。",
    "满庭芳草，惊起一声鹤。",
    "鹤鸣九皋，声闻于天。",
    "月落乌啼霜满天，江枫渔火对愁眠。",
    "相思一夜梅花落，故人何处雁南归。",
    "雨后山河新，风前草木春。",
    "江天一色无纤尘，皎洁的月光照着人。",
    "清风徐来，水波不兴。",
    "松风吹解佩，月色冷侵衣。",
    "花自飘零水自流，人生何处不相逢。",
    "晓来谁染霜林醉，颜色浅深山雨中。",
    "半亩方塘一鉴开，天光云影共徘徊。",
    "长桥卧波，古道无尘。",
    "枯藤老树昏鸦，小桥流水人家。",
    "闻君有两意，故来相决绝。",
    "星河灿烂，梦境微茫。",
    "看尽江南几许山，流水落花皆有情。",
    "玉露金风，秋意愈深。",
    "白云千载空悠悠，青山相对暮烟收。",
    "春色无边，清风不绝。",
    "诗酒趁年华，山水作伴。",
    "旷野无边，风景绝佳。",
    "天上星辰明可数，地上烟火一时多。",
    "故人旧梦，风雨兼程。",
    "流水落花春去也，天上人间。",
    "旧时王谢堂前燕，飞入寻常百姓家。",
    "吟啸清风里，倾心月色中。",
    "踏歌长路，落日孤城。",
    "冬雪覆盖山林，天地一片宁静。",
    "溪云初起日沉阁，山雨欲来风满楼。",
    "思君如梦，梦里长安。",
    "叹息无奈，落尽繁花。",
    "清泉石上流，小桥人未归。",
    "温柔乡里，何处归来。",
    "风和日丽，游子归心。",
    "今日花开，昨日花落。",
    "山中有清音，水上无尘心。",
    "天与云开，心与月明。",
    "更上一层楼，旧梦和新愁。",
    "长亭外，古道边，芳草碧连天。",
    "江上清风来，舟中微雨过。",
    "金樽清酒斗十千，玉盘珍馐直万钱。",
    "小荷才露尖尖角，早有蜻蜓立上头。",
    "春风送暖，花香入梦。",
    "豆蔻年华，丽人犹在。",
    "秋水长天，孤影成双。",
    "且将新火试新茶，诗酒趁年华。",
    "山雨初霁，林光乍开。",
    "白云生处，青山无尽。",
    "来日绵绵，思绪难禁。",
    "几许江山，几番风雨。",
    "晴空一鹤排云上，便引诗情到碧霄。",
    "风吹香气，花落满庭。",
    "青灯古佛，夜色微凉。",
    "从来白发不曾侵，直到今朝始见星。",
    "浮云游子意，落日故人情。",
    "此去经年，谁与话长。",
    "招手天边，清梦悠悠。",
    "青春作伴好还乡，何处不风光。",
    "平湖秋月，清浅波光。",
    "汀洲沙白云帆过，长天落日无穷好。",
    "旧游如梦，烟波浩渺。",
    "且行且止，任它风雨。",
    "一场春梦，醒来仍是旧人。",
    "江水流云，人间星月。",
    "满纸荒唐言，一把辛酸泪。",
    "竹影摇清昼，梅香入晚晴。",
    "日暮长江里，春潮带雨来。",
    "柳暗花明，鸟啼山色。",
    "青鸟不来，云中信断。",
    "年年岁岁花相似，岁岁年年人不同。",
    "烟雨青山，山居静好。",
    "云外抬头望月，水边听雨眠。",
    "长风吹海浪，梦里到天涯。",
    "内外青山相对出，前村后村烟火多。",
    "烟霞明灭，山水相依。",
    "东风吹柳，春到人间。",
    "静夜思，月照窗前。",
    "千里溪山同一色，满庭花木照晴空。",
    "新雨润芭蕉，风送清香。",
    "人在天涯，心随月事。",
    "何处春风最有情，千山万水又逢晴。",
    "江南梅雨，潮湿青苔。",
    "长风万里送秋雁，暮雨一江寒。",
    "云里看山，水中见月。",
    "深山踏雪，旧梦难寻。",
    "橙黄橘绿，满城秋意。",
    "太白诗名遍天下，行到江南亦自奇。",
    "几度夕阳红，归来又一春。",
    "时光若水，年华似梦。",
    "寒塘渡鹤，月落星沉。",
    "何日归来，闻说山中花已开。",
    "云起时，风峻岭高。",
    "晨钟暮鼓，海市蜃楼。",
    "一窗疏影，半枕清风。",
    "桃源深处无人识，白云深处有人家。",
    "隔江烟树，远近分明。",
    "落花有意，流水无情。",
    "天高地迥，江湖恍惚。",
    "梦里相逢，酒醒难诉。",
    "一庭竹影，半院花香。",
    "轻舟已过万重山。",
    "青霭悠悠，白云淡淡。",
    "问君能有几多愁，恰似一江春水向东流。",
    "策马江南，烟雨满城。",
    "借问语何从，山花照水深。",
    "沧海月明珠有泪，蓝天霜白马无声。",
    "故国不堪回首，风月犹存。",
    "今朝有酒今朝醉，明日愁来明日忧。",
    "几声渔笛，几片帆影。",
    "写尽苍生苦，倾尽半生情。",
    "原来春色在此，不知落日催人。",
    "春寒料峭，花枝也怕人。",
    "山色空蒙，雨声断续。",
    "云中白鹭，水际鸥眠。",
    "遮莫相思，滴成沧海。",
    "十里青山，云闲水静。",
    "桃李无言，又到春深。",
    "对镜含愁，卷帘望月。",
    "夜深人静，花香满院。",
    "白头宫女在，闲坐说玄宗。",
    "春潮涨平岸，秋雨落晴川。",
    "人生百年，皆是梦中。",
    "金风玉露一相逢，便胜却人间无数。",
    "年少不知愁滋味，爱上层楼。",
    "劝君莫惜金缕衣，须臾风雨便横秋。",
    "一生只为相思苦，几度春来几度秋。"
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
        if (containsChar(item, char)) {
            const key = item.trim();
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

    list.forEach((poetry, index) => {
        const item = document.createElement('div');
        item.className = 'poetry-item';
        item.innerHTML = `<strong>${index + 1}.</strong>${poetry}`;
        resultList.appendChild(item);
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
        .map(item => item.textContent.trim())
        .join('\n');

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
        .map(item => item.textContent.trim())
        .join('\n');

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
