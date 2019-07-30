var Mock = require('mockjs')
const Random = Mock.Random;
const produceData = function(opt){
   /* console.log('opt', opt);*/
    let articles = [];
    for (let i = 0;i < 100; i++){
        let newArticleObject = {
            // Random.boolean( min?, max?, current? )返回一个随机的布尔值。
            condition1:Random.boolean(),
            condition2:Random.boolean(),
            condition3:Random.boolean(),
            //Random.natural( min?, max? )返回一个随机的自然数（大于等于 0 的整数）。
            //Random.integer( min?, max? )返回一个随机的整数。
            money:Random.integer( 9, 29 ),
            //Random.float( min?, max?, dmin?, dmax? )返回一个随机的浮点数。

            //Random.character( pool? )
            // Random.character()
            // Random.character( 'lower/upper/number/symbol' )
            // Random.character( pool )
            // 返回一个随机字符。

            //Random.string( pool?, min?, max? )返回一个随机字符串。
            //Random.range( start?, stop, step? )返回一个整型数组。
            //Random.date( format? )默认值为 yyyy-MM-dd。
            // Random.date()
            // Random.date(format)
            // 返回一个随机的日期字符串。
            //Random.time( format? )返回一个随机的时间字符串。默认值为 HH:mm:ss。
            //Random.datetime( format? )返回一个随机的日期和时间字符串。默认值为 yyyy-MM-dd HH:mm:ss。
            //Random.now( unit?, format? ) 返回当前的日期和时间字符串。
            date:Random.now(  ),

            //Random.image( size?, background?, foreground?, format?, text? )生成一个随机的图片地址。
            //Random.dataImage( size?, text? )生成一段随机的 Base64 图片编码。
            //Random.color() 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
            //Random.hex()随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
            //Random.rgb()随机生成一个有吸引力的颜色，格式为 'rgb(r, g, b)'。
            //Random.rgba() 随机生成一个有吸引力的颜色，格式为 'rgba(r, g, b, a)'。
            //Random.hsl() 随机生成一个有吸引力的颜色，格式为 'hsl(h, s, l)'。


            //text
            //Random.paragraph( min?, max? )随机生成一段文本。
            //Random.cparagraph( min?, max? ) 随机生成一段中文文本。
            //Random.sentence( min?, max? ) 随机生成一个句子，第一个单词的首字母大写。
            //Random.csentence( min?, max? ) 随机生成一段中文文本。
            //Random.cword( pool?, min?, max? ) 随机生成一个汉字。

            //Random.title( min?, max? ) 随机生成一句标题，其中每个单词的首字母大写。
            //Random.ctitle( min?, max? ) 随机生成一句中文标题。
            //title:Random.ctitle( 4, 6 ),
            title:Random.ctitle( 4, 6 )+Random.cword( '修' )+Random.cword( '补' )+Random.cword( '方' )+Random.cword( '案' ),

            //name
            //Random.first() 随机生成一个常见的英文名。
            //Random.last()随机生成一个常见的英文姓。
            //Random.name( middle? ) 随机生成一个常见的英文姓名。
            //Random.cfirst()随机生成一个常见的中文名。
            //Random.clast()随机生成一个常见的中文姓。
            //Random.cname()随机生成一个常见的中文姓名。
            username:Random.cname(),


            //web
            //Random.url( protocol?, host? ) 随机生成一个 URL。
            //Random.email( domain? ) 随机生成一个邮件地址。
            //Random.ip()随机生成一个 IP 地址。


            //address
            //Random.region() 随机生成一个（中国）大区。
            //Random.province() 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
            //Random.city( prefix? )随机生成一个（中国）市。
            city:Random.city(  ),
            //Random.county( prefix? )随机生成一个（中国）县。
            //Random.zip()随机生成一个邮政编码（六位数字）。


            //helper
            //Random.pick( arr ) 从数组中随机选取一个元素，并返回。
            //Random.shuffle( arr )打乱数组中元素的顺序，并返回。


            //Miscellaneous
            //Random.id() 随机生成一个 18 位身份证。
            //Random.increment( step? )生成一个全局的自增整数。
            number:Random.increment(  ),




        }
        articles.push(newArticleObject);
    }
    return {
        data: articles
    }
}
Mock.mock('/user',/post|get/i,produceData);


