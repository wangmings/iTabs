
// 获取节点对象
let node = function(nodeName) {
    return document.querySelectorAll(nodeName);
}


window.addEventListener('online', () => {alert('网络连接恢复！');})
window.addEventListener('offline', () => { alert('网络连接中断！');})




// 获取对应的图片路径
let getImgs = function(url) {
    let imgPath;
    let img = imgPathArray;
    for (let i in img) {
        if (url == img[i].src) {
            imgPath = `./imgs/img/${img[i].name}`
            break;
        }
    }
    return imgPath;
}


// 导航栏获取图片并替换
let navigationBar = function(){

    let num = 0, logs = [], item = node('.app-group-item');
    num = imgPathArray.length;




    // 判断图片格式
    let getImgFormat = (url) => {
        let data;
        if (/\.ico/g.test(url)) {
            data = '.ico'
        } else if (/\.svg/g.test(url)) {
            data = '.svg'
        } else if (/\.png/g.test(url)) {
            data = '.png'
        }
        return data
    }



    // 下载图片
    let download = (obj, name) => {
        const data = JSON.stringify(obj, null, 2)
        let blob = new Blob([data], { type: 'text/plain'});
        let a = document.createElement('a')
        a.download = name
        a.href = window.URL.createObjectURL(blob)
        a.click()
    }


    // 获取图片路径
    window.getImg = function() {
        console.log(logs)
        download(logs, 'img.json')
    }

    console.log('下载插件所使用的图片: getImg')

    // 启动时默认加载本地图标
    node('.app-item-img').forEach((img) => {
        let src = getImgs(img.src)
        if (src != undefined) img.src = src;
    })



    node('.search-icon').forEach((img) => {
        let src = getImgs(img.src)
        if (src != undefined) img.src = src;
        if (img.src[0] != 'c') {
            num++;
            logs.push({
                name: 'img_' + num + getImgFormat(img.src),
                src: img.src
            })
        }
    })


    for (let i = 0; i < item.length - 1; i++) {
        item[i].onclick = function() {
            node('.el-carousel')[0].style = '';
            node('.app-item-img').forEach((img) => {
                let src = getImgs(img.src)
                if (src != undefined) img.src = src;

                if (img.src[0] != 'c') {
                    num++;
                    logs.push({
                        name: 'img_' + num + getImgFormat(img.src),
                        src: img.src
                    })
                }
            })
        }

    }

    

}





// 滚动切换
let scrollSwitch = function(){
    let num = 0, control = 0, 
    item = node('.app-group-item'), 
    item_length = item.length - 2;

    
    let wheel = (e)=> {
        if (e.toElement.id == 'app-icon-grid-wrap') {
            let Y = -e.wheelDelta || -e.deltaY;

            if (control == 0) {
                control = 1

                setTimeout(() => {
                    control = 0
                }, 1400)

                if (Y > 0) {
                    // console.log('向下滚动')
                    num--
                } else {
                    // console.log('向上滚动')
                    num++
                }


                if (num < 0) num = item_length
                if (num > item_length) num = 0;
                item[num].click()

                setTimeout(() => {
                        node('.app-item-img').forEach((img) => {
                            let src = getImgs(img.src)
                            if (src != undefined) img.src = src;
                        })

                }, 100)
            }

        }

    }


    node('.el-carousel')[0].addEventListener("mousewheel", wheel)
    node('#app-icon-grid-wrap')[0].addEventListener("mousewheel", wheel)
}



// 动态创建子节点
let createNode = (parentNode,nodeType,className,innerHTML=null,attribute=null,value='') => {
    let createDiv = document.createElement(nodeType);
    createDiv.className = className;
    if(innerHTML != null) createDiv.innerHTML = innerHTML;
    if(attribute != null) {
        let att = document.createAttribute(attribute)
        att.value = value;
        createDiv.setAttributeNode(att)
    }
    node(parentNode)[0].appendChild(createDiv);
}





// 执行
let run_main = () => {

    // 启动滚动切换
    setTimeout(() =>{ 
        let el = node('.el-carousel')[0]
        if(el != undefined) scrollSwitch()
        navigationBar() 
        
    },200)


    // 加载背景半透明
    let config = JSON.parse(localStorage.baseConfig)
    if (config.opacity == true) {
        let el = node('.el-carousel')[0]
        if(el != undefined) el.className += ' opacitys'
        node('.se-input-box')[0].className += ' opacitys'
        
    }


   

    // 创建子节点
    if(node('.blink')[0] == undefined) createNode('.se-input-box', 'div', 'blink twinkle') 






    let input = node('.se-input')[0]
    
    // 设置关闭搜索框的默认闪烁光标 
    input.style = "caret-color:transparent;"
    
    // 点击搜索框时处理的事件
    input.addEventListener('click', ()=>{
        // console.log('点击')
        node('.se-keyword li').forEach(li =>{
            li.addEventListener('click', ()=>{
                let el = node('.el-carousel')[0]
                if(el != undefined) el.style = '';
            })
            
        })

        let config = JSON.parse(localStorage.baseConfig)
        if(config.opacity) node('.se-keyword')[0].className += ' opacitys'

        // 搜索历史记录
        let length = node('.se-keyword-item')[0].innerText.length;
        if(length > 0){
            // 隐藏桌面图标
            let el = node('.el-carousel')[0]
            if(el != undefined)el.style.display = "none";
        }

        // 创建循环定时器
        let timer = setInterval(function() {
            let length = node('.se-keyword-item').length
            if(length == 0){
                node('.se-close')[0].click()
                
                // 显示闪烁光标
                input.style = 'caret-color:transparent;';
                node('.blink')[0].className = 'blink twinkle';

                // 显示桌面图标
                let el = node('.el-carousel')[0]
                if(el != undefined) el.style = '';

                // 加载背景半透明
                setTimeout(()=>{
                    let config = JSON.parse(localStorage.baseConfig)
                    if (config.opacity == true) {
                        let names = node('.se-input-box')[0].className
                        let books = /opacitys/g.test(names)
                        if(books == false){
                            node('.se-input-box')[0].className += ' opacitys'
                        }
                    }
    
                },100)

                clearInterval(timer)     
            }

        },200)
 


    })





   
    // 搜索框有输入时处理的事件
    input.addEventListener('keydown', (e)=>{
        // console.log('输入按键',e.keyCode)

        // 搜索框回车键时触发
        if(e.keyCode == 13){
            // 显示闪烁光标
            input.style = 'caret-color:transparent;';
            node('.blink')[0].className = 'blink twinkle';

            // 显示桌面图标
            let el = node('.el-carousel')[0]
            if(el != undefined) el.style = '';
        }

        // 加载背景半透明
        setTimeout(()=>{
            let names = node('.se-input-box')[0].className
            let books = /opacitys/g.test(names)
            if(books == false){
                    let config = JSON.parse(localStorage.baseConfig)
                    if (config.opacity == true) {
                        node('.se-input-box')[0].className += ' opacitys'
                    }

            } 
        },100)




        let length = input.value.replaceAll(' ', '').length;
        if (length > 0) {
            // 隐藏闪烁光标
            input.style = '';
            node('.blink')[0].className = 'blink';
            // 隐藏桌面图标
            let el = node('.el-carousel')[0]
            if(el != undefined) el.style.display = "none";


        }else{

            let length = node('.se-keyword-item').length
            if(length == 0){

                // 显示闪烁光标
                input.style = 'caret-color:transparent;';
                node('.blink')[0].className = 'blink twinkle';

                // 显示桌面图标
                let el = node('.el-carousel')[0]
                if(el != undefined) el.style = '';
                
            }
        }

    })

}











// 执行2
let run_main2 = function(){

    // 点击本地搜索时隐藏图标和搜索框
    node('#menuhome_5dwx li')[5].addEventListener('click', ()=>{
        node('#app-main')[0].style.display = 'none';
        node('.icon-img').forEach(img =>{
            let src = getImgs(img.src)
            if (src != undefined) img.src = src;
        })

        node('#keywordInput')[0].addEventListener('keydown',()=>{
            console.log('输入了')
            setTimeout(()=>{
                node('.icon-img').forEach(img =>{
                    let src = getImgs(img.src)
                    if (src != undefined) img.src = src;
                })
            },100)
        })

    })
   
    // 点击设置遮罩层时显示图标和搜索框
    node('.el-overlay-dialog')[1].addEventListener('click', ()=>{
        node('#app-main')[0].style = '';
    })


    // 点击设置关闭时显示图标和搜索框
    node('#step2')[0].addEventListener('click', ()=>{
        node('#app-main')[0].style.display = 'none';
        setTimeout(() =>{
            node('.el-overlay.setting-modal')[0].onclick = function(){
                node('#app-main')[0].style = '';
            }
        
            node('.setting-close')[0].onclick = function(){
                node('#app-main')[0].style = '';
            }
    
        },200)

    })



    
    // 给右键菜单添加一个切换本地图片选项
    let lengths = node('#menuhome_5dwx li').length;
    if(lengths == 6) {
        let li = node('#menuhome_5dwx li')[1];
        let className = li.className;
        let innerHTML = li.innerHTML.replace('切换壁纸','切换本地壁纸');
        let innerHTML2 = li.innerHTML.replace('切换壁纸','背景半透明');
        createNode('#menuhome_5dwx','li',className,innerHTML,'data-v-5524a65e')
        createNode('#menuhome_5dwx','li',className,innerHTML2,'data-v-5524a65e')
    }

    // 点击切换本地图片选项时切换背景图片并保存
    let num = 0, background = 4;
    node('#menuhome_5dwx li')[6].addEventListener('click', ()=>{
        num++;
        if (num > background) num = 1;
        let img = `./imgs/background/img_${num}.jpeg`
        let config = JSON.parse(localStorage.baseConfig)
        config.wallpaper.src = img;
        config = JSON.stringify(config)
        localStorage.baseConfig = config;
    
        node('itab-wallpaper')[0].bgEl.style.backgroundImage = `url("${img}")`

    })


    // 背景半透明设置
    
    node('#menuhome_5dwx li')[7].addEventListener('click', ()=>{
        let bool = false;
        let el = node('.el-carousel')[0]
        let se = node('.se-input-box')[0]
        let config = JSON.parse(localStorage.baseConfig)
        
        if (config.opacity == true) {
            if(el != undefined) el.className = el.className.replace(' opacitys','')
            se.className = se.className.replace(' opacitys','')

        }else{
            bool = true
            if(el != undefined) el.className += ' opacitys'
            se.className += ' opacitys'
        }

        config.opacity = bool;
        config = JSON.stringify(config)
        localStorage.baseConfig = config;
    

    })


}





// 点击切换到模式时重新触发
let run_main3 = function() {
    node('itab-date')[0].timeBox.onclick = function() {
        setTimeout(() => {
            let length = node('.el-carousel').length
            if (length > 0) {
                run_main()
                run_main2()
                // console.log('切换')
            }

        },100)
    }
}









setTimeout(() => {
    run_main();
    let length = node('.el-carousel').length
    if (length > 0) {
        run_main3()
        setTimeout(()=>{run_main2()},800)
    }else{
        run_main3()
        
    }

},300)


















































