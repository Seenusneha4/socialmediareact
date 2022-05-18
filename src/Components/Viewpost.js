import React from 'react'

const Viewpost = () => {
    var viewlist=[
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "dolorem eum magni eos aperiam quia",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          "userId": 1,
          "id": 7,
          "title": "magnam facilis autem",
          "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          "userId": 1,
          "id": 8,
          "title": "dolorem dolore est ipsam",
          "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
          "userId": 1,
          "id": 9,
          "title": "nesciunt iure omnis dolorem tempora et accusantium",
          "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
          "userId": 1,
          "id": 10,
          "title": "optio molestias id quia eum",
          "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        },
        {
          "userId": 2,
          "id": 11,
          "title": "et ea vero quia laudantium autem",
          "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
        },
        {
          "userId": 2,
          "id": 12,
          "title": "in quibusdam tempore odit est dolorem",
          "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        },
        {
          "userId": 2,
          "id": 13,
          "title": "dolorum ut in voluptas mollitia et saepe quo animi",
          "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
        },
        {
          "userId": 2,
          "id": 14,
          "title": "voluptatem eligendi optio",
          "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
        },
        {
          "userId": 2,
          "id": 15,
          "title": "eveniet quod temporibus",
          "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
        },
        {
          "userId": 2,
          "id": 16,
          "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
          "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
        },
        {
          "userId": 2,
          "id": 17,
          "title": "fugit voluptas sed molestias voluptatem provident",
          "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
        },
        {
          "userId": 2,
          "id": 18,
          "title": "voluptate et itaque vero tempora molestiae",
          "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
        },
        {
          "userId": 2,
          "id": 19,
          "title": "adipisci placeat illum aut reiciendis qui",
          "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
        },
        {
          "userId": 2,
          "id": 20,
          "title": "doloribus ad provident suscipit at",
          "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
        },
        {
          "userId": 3,
          "id": 21,
          "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
          "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
        },
        {
          "userId": 3,
          "id": 22,
          "title": "dolor sint quo a velit explicabo quia nam",
          "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
        },
        {
          "userId": 3,
          "id": 23,
          "title": "maxime id vitae nihil numquam",
          "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
        },
        {
          "userId": 3,
          "id": 24,
          "title": "autem hic labore sunt dolores incidunt",
          "body": "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
        },
        {
          "userId": 3,
          "id": 25,
          "title": "rem alias distinctio quo quis",
          "body": "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
        },
        {
          "userId": 3,
          "id": 26,
          "title": "est et quae odit qui non",
          "body": "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
        },
        {
          "userId": 3,
          "id": 27,
          "title": "quasi id et eos tenetur aut quo autem",
          "body": "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
        },
        {
          "userId": 3,
          "id": 28,
          "title": "delectus ullam et corporis nulla voluptas sequi",
          "body": "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
        },
        {
          "userId": 3,
          "id": 29,
          "title": "iusto eius quod necessitatibus culpa ea",
          "body": "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
        },
        {
          "userId": 3,
          "id": 30,
          "title": "a quo magni similique perferendis",
          "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
        },
        {
          "userId": 4,
          "id": 31,
          "title": "ullam ut quidem id aut vel consequuntur",
          "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
        },
        {
          "userId": 4,
          "id": 32,
          "title": "doloremque illum aliquid sunt",
          "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
        },
        {
          "userId": 4,
          "id": 33,
          "title": "qui explicabo molestiae dolorem",
          "body": "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
        },
        {
          "userId": 4,
          "id": 34,
          "title": "magnam ut rerum iure",
          "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
        },
        {
          "userId": 4,
          "id": 35,
          "title": "id nihil consequatur molestias animi provident",
          "body": "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
        },
        {
          "userId": 4,
          "id": 36,
          "title": "fuga nam accusamus voluptas reiciendis itaque",
          "body": "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
        },
        {
          "userId": 4,
          "id": 37,
          "title": "provident vel ut sit ratione est",
          "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
        },
        {
          "userId": 4,
          "id": 38,
          "title": "explicabo et eos deleniti nostrum ab id repellendus",
          "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
        },
        {
          "userId": 4,
          "id": 39,
          "title": "eos dolorem iste accusantium est eaque quam",
          "body": "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
        },
        {
          "userId": 4,
          "id": 40,
          "title": "enim quo cumque",
          "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
        },
        {
          "userId": 5,
          "id": 41,
          "title": "non est facere",
          "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
        },
        {
          "userId": 5,
          "id": 42,
          "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
          "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
        },
        {
          "userId": 5,
          "id": 43,
          "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
          "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
        },
        {
          "userId": 5,
          "id": 44,
          "title": "optio dolor molestias sit",
          "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
        },
        {
          "userId": 5,
          "id": 45,
          "title": "ut numquam possimus omnis eius suscipit laudantium iure",
          "body": "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
        },
        {
          "userId": 5,
          "id": 46,
          "title": "aut quo modi neque nostrum ducimus",
          "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
        },
        {
          "userId": 5,
          "id": 47,
          "title": "quibusdam cumque rem aut deserunt",
          "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate"
        },
        {
          "userId": 5,
          "id": 48,
          "title": "ut voluptatem illum ea doloribus itaque eos",
          "body": "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
        },
        {
          "userId": 5,
          "id": 49,
          "title": "laborum non sunt aut ut assumenda perspiciatis voluptas",
          "body": "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
        },
        {
          "userId": 5,
          "id": 50,
          "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
          "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
        },
        {
          "userId": 6,
          "id": 51,
          "title": "soluta aliquam aperiam consequatur illo quis voluptas",
          "body": "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
        },
        {
          "userId": 6,
          "id": 52,
          "title": "qui enim et consequuntur quia animi quis voluptate quibusdam",
          "body": "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
        },
        {
          "userId": 6,
          "id": 53,
          "title": "ut quo aut ducimus alias",
          "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
        },
        {
          "userId": 6,
          "id": 54,
          "title": "sit asperiores ipsam eveniet odio non quia",
          "body": "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
        },
        {
          "userId": 6,
          "id": 55,
          "title": "sit vel voluptatem et non libero",
          "body": "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit"
        },
        {
          "userId": 6,
          "id": 56,
          "title": "qui et at rerum necessitatibus",
          "body": "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi"
        },
        {
          "userId": 6,
          "id": 57,
          "title": "sed ab est est",
          "body": "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est"
        },
        {
          "userId": 6,
          "id": 58,
          "title": "voluptatum itaque dolores nisi et quasi",
          "body": "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam"
        },
        {
          "userId": 6,
          "id": 59,
          "title": "qui commodi dolor at maiores et quis id accusantium",
          "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
        },
        {
          "userId": 6,
          "id": 60,
          "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
          "body": "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
        },
        {
          "userId": 7,
          "id": 61,
          "title": "voluptatem doloribus consectetur est ut ducimus",
          "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
        },
        {
          "userId": 7,
          "id": 62,
          "title": "beatae enim quia vel",
          "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
        },
        {
          "userId": 7,
          "id": 63,
          "title": "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
          "body": "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta"
        },
        {
          "userId": 7,
          "id": 64,
          "title": "et fugit quas eum in in aperiam quod",
          "body": "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
        },
        {
          "userId": 7,
          "id": 65,
          "title": "consequatur id enim sunt et et",
          "body": "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur"
        },
        {
          "userId": 7,
          "id": 66,
          "title": "repudiandae ea animi iusto",
          "body": "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe"
        },
        {
          "userId": 7,
          "id": 67,
          "title": "aliquid eos sed fuga est maxime repellendus",
          "body": "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae"
        },
        {
          "userId": 7,
          "id": 68,
          "title": "odio quis facere architecto reiciendis optio",
          "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
        },
        {
          "userId": 7,
          "id": 69,
          "title": "fugiat quod pariatur odit minima",
          "body": "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a"
        },
        {
          "userId": 7,
          "id": 70,
          "title": "voluptatem laborum magni",
          "body": "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
        },
        {
          "userId": 8,
          "id": 71,
          "title": "et iusto veniam et illum aut fuga",
          "body": "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
        },
        {
          "userId": 8,
          "id": 72,
          "title": "sint hic doloribus consequatur eos non id",
          "body": "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
        },
        {
          "userId": 8,
          "id": 73,
          "title": "consequuntur deleniti eos quia temporibus ab aliquid at",
          "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
        },
        {
          "userId": 8,
          "id": 74,
          "title": "enim unde ratione doloribus quas enim ut sit sapiente",
          "body": "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
        },
        {
          "userId": 8,
          "id": 75,
          "title": "dignissimos eum dolor ut enim et delectus in",
          "body": "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
        },
        {
          "userId": 8,
          "id": 76,
          "title": "doloremque officiis ad et non perferendis",
          "body": "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
        },
        {
          "userId": 8,
          "id": 77,
          "title": "necessitatibus quasi exercitationem odio",
          "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
        },
        {
          "userId": 8,
          "id": 78,
          "title": "quam voluptatibus rerum veritatis",
          "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
        },
        {
          "userId": 8,
          "id": 79,
          "title": "pariatur consequatur quia magnam autem omnis non amet",
          "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
        },
        {
          "userId": 8,
          "id": 80,
          "title": "labore in ex et explicabo corporis aut quas",
          "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
        },
        {
          "userId": 9,
          "id": 81,
          "title": "tempora rem veritatis voluptas quo dolores vero",
          "body": "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
        },
        {
          "userId": 9,
          "id": 82,
          "title": "laudantium voluptate suscipit sunt enim enim",
          "body": "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic"
        },
        {
          "userId": 9,
          "id": 83,
          "title": "odit et voluptates doloribus alias odio et",
          "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
        },
        {
          "userId": 9,
          "id": 84,
          "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
          "body": "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio"
        },
        {
          "userId": 9,
          "id": 85,
          "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
          "body": "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
        },
        {
          "userId": 9,
          "id": 86,
          "title": "placeat quia et porro iste",
          "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio"
        },
        {
          "userId": 9,
          "id": 87,
          "title": "nostrum quis quasi placeat",
          "body": "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est"
        },
        {
          "userId": 9,
          "id": 88,
          "title": "sapiente omnis fugit eos",
          "body": "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed"
        },
        {
          "userId": 9,
          "id": 89,
          "title": "sint soluta et vel magnam aut ut sed qui",
          "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
        },
        {
          "userId": 9,
          "id": 90,
          "title": "ad iusto omnis odit dolor voluptatibus",
          "body": "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
        },
        {
          "userId": 10,
          "id": 91,
          "title": "aut amet sed",
          "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
        },
        {
          "userId": 10,
          "id": 92,
          "title": "ratione ex tenetur perferendis",
          "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
        },
        {
          "userId": 10,
          "id": 93,
          "title": "beatae soluta recusandae",
          "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
        },
        {
          "userId": 10,
          "id": 94,
          "title": "qui qui voluptates illo iste minima",
          "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
        },
        {
          "userId": 10,
          "id": 95,
          "title": "id minus libero illum nam ad officiis",
          "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
        },
        {
          "userId": 10,
          "id": 96,
          "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
          "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
        },
        {
          "userId": 10,
          "id": 97,
          "title": "quas fugiat ut perspiciatis vero provident",
          "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
        },
        {
          "userId": 10,
          "id": 98,
          "title": "laboriosam dolor voluptates",
          "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
        },
        {
          "userId": 10,
          "id": 99,
          "title": "temporibus sit alias delectus eligendi possimus magni",
          "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
        },
        {
          "userId": 10,
          "id": 100,
          "title": "at nam consequatur ea labore ea harum",
          "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
        }
      ]
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                {viewlist.map((value,key)=>{return<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="card" >
  <center><img style={{width:250,height:250}} src="data:image/png;base64,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" class="card-img-top" alt="..."/></center>
  <div class="card-body">
   
    <p class="card-text"><b>Title:</b>{value.title}</p>
    <p class="card-text"><b>Body:</b>{value.body}</p>
   
  </div>
</div>
                    
                    </div>
                    })}
                
               
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Viewpost