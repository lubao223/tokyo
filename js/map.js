
const mapinfo={
    "懷舊路線":"本路線是在灣岸橫濱線剛開通的1994年春天那時所流行的路線，當時由於市川—東海段尚未完全通車，因此完整的懷舊路線應該是「市川PA」→「灣岸線」→「東海JCT」→「橫羽線」→「跨海大橋」。對於不少老一輩的日本競車族來說，是相當能夠引發懷舊之情的路線。",
    "C1環狀線":"首都高可以說是大馬力勁車的樂園，不過在這條路線上的話，即使是200匹馬力左右的車也一樣能夠享受到奔馳的樂趣。不過話說回來，這條路上的大小坑洞對車子相當的「傷」、平常車流量不小，再加上岔路也既多又不規則，因此初次跑這條路線時宜減低速度多繞幾圈，把路況確實地搞熟，才是上策。",
    "平價版灣岸路線":"如果想只花700日圓來欣賞灣岸的夜景的話，那麼這一條路線就再適合不過了。首先從環狀線經過江戶橋向灣岸線方向，然後再接9號深川線往辰巳jct。接著從灣岸線向東走（往羽田機場）就可以欣賞灣岸線的夜景，然後在大井的彎道向左接上橫羽線就可以回到環狀線。「C1」→「江戶橋jct」→「9號深川線」→「辰巳jct」→「灣岸線」→「大井jct」→「橫羽線」→「C1」",
    "高價版灣岸路線":"如果想由首都高往橫濱方向走的話，就要再多花500日圓通行費。本路線的最大魅力之一就是直線加速族最喜歡的川崎直線路段。「大黑PA」→「灣岸（東向）」→「有明jct」→「11號台場線」→「C1」→「江戶橋jct」→「9號深川線」→「辰巳jct」→「灣岸線（西向）」→「大黑PA」",
    "新環狀線":"由於不少人認為C1的交通量多的可怕，因此新環狀路線便成為這些競車族的新寵。特別是由直線路段與高速彎道所構成的9號深川線更是競車族們的最愛。另外，羅曼蒂克的灣岸夜景氣氛更是年輕人兜風約會的最佳地點。「C1（內環道）」→「江戶橋jct」→「箱崎jct」→「9號深川線」→「辰巳jct」→「灣岸（西向）」→「有明jct」→「11號台場線」→「川崎橋jct」→「C1（內環道）」"
}
const mappic={
    "懷舊路線":"assets/map/mp01.png",
    "C1環狀線":"assets/map/mp02.png",
    "平價版灣岸路線":"assets/map/mp03.png",
    "高價版灣岸路線":"assets/map/mp04.png",
    "新環狀線":"assets/map/mp05.png",
}



function getinfo(x){
    const info = document.getElementById("info");
    const mapmap = document.getElementById("mapmap");
    mapmap.src=mappic[x]
    info.innerHTML=mapinfo[x];
   }

function openw(y){
    let title = '';
    let des = '';
    let vid = '';
    let what = '';
    if(y==1){
        title = "首都高賽車";
        des = "《首都高賽車》是以日本首都東京的環狀高速道路「首都高速道路」為競速賽道的賽車遊戲，1994 年在 SFC 推出首款作品，其後陸續在 PS1、Saturn、Dreamcast、PS2、PSP、Xbox 360 上推出過多款系列作。最後一款本傳系列作是 2006 年在 Xbox 360 上推出的《首都高賽車 X（Ten）》，距今已有 18 年 "
        what = 'Tokyo Xtreme Racer: Zero';
        vid="assets/vid/Tokyo Xtreme Racer： Zero was & still is good (Final Boss).mp4";
    }else if(y==2){
        title = "wangan midnight maximum tune";
        des="由日本萬代南夢宮遊樂（原南夢宮）公司所出品的街機遊戲，由日本漫畫家楠通春所繪製的漫畫《灣岸Midnight》改編，玩家要扮演一位車手跟遊戲中的角色或是真人玩家比賽。本遊戲從2003年出品至今已有超過20年的歷史，每代皆有不同的特色，也有新增許多遊戲樂趣的要素，讓玩家可以用跑車享受到飆速的快感。"
        what = 'Wangan Midnight Maximum Tune 6R';
        vid='assets/vid/Wangan Midnight Maximum Tune 6R - Fairlady Z (S30) - Online Ghost VS Battle.mp4';
    }else if(y==3){
        title = "灣岸Midnight";
        des="連載時間從1990年至2008年，期間曾經更換出版社，從小學館轉為講談社。全套有42本，2008年9月連載結束，1999年獲得第23回講談社漫畫賞。由於連載時間長，因此有不同的時空背景，但人物的年齡卻不曾改變(例如初期R32價格高達315萬日幣，但到後期卻只有100萬)。故事的主題皆是人們在首都高奔馳時所發生的故事，故事的主要人物通常在一個章節結束後，即不會出現。目前已被改編成同名街機遊戲和電影。"
        what = '灣岸Midnight 動畫';
        vid='assets/vid/Wangan Midnight OP.mp4'
    }

    document.getElementById('modal-title').innerHTML= title;
    document.getElementById('modal-description').innerHTML = des;
    document.getElementById('what').innerHTML = what;
    document.querySelector("video").volume = 0.2;
    document.querySelector("video").src =  vid;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    var video = document.querySelector('video');
    if (video) {
        video.pause();  // 暂停视频播放
    }
    
    document.getElementById('modal').style.display = 'none';
  }

  const albums = {
    'bridge1': [
        "assets/photo/bridge1/tb_02.jpg",
        "assets/photo/bridge1/tb_03.jpg",
        "assets/photo/bridge1/tb_04_thumb.jpg",
        "assets/photo/bridge1/tb_05.jpg",
        "assets/photo/bridge1/tb_06.jpg",
        "assets/photo/bridge1/tb_07.jpg",
        "assets/photo/bridge1/tb_08.jpg",
        "assets/photo/bridge1/tb_09.jpg",
        "assets/photo/bridge1/tb_10.jpg",
        "assets/photo/bridge1/tb_11.jpg",
        "assets/photo/bridge1/tb_12.jpg"
    ],
    'c1': [
        "assets/photo/c1/01.jpg",
        "assets/photo/c1/21353ba8a0baea768e05f0435e1763ca_t.jpeg",
        "assets/photo/c1/6ab31ed66f3d40b5ad4eba5df547b1bb_th.jpg",
        "assets/photo/c1/c085afe9d5e41131c5818f20a929af09_t.jpeg",
        "assets/photo/c1/images.jpg",
        "assets/photo/c1/img03.jpg",
        "assets/photo/c1/img06.jpg",
        "assets/photo/c1/img07.jpg",
        "assets/photo/c1/img11.jpg",
        "assets/photo/c1/img12.jpg",
        "assets/photo/c1/large_201006_c1_01.jpg"
    ],
    'in': [
        "assets/photo/in/001 (1).jpg",
        "assets/photo/in/001.jpg",
        "assets/photo/in/001_s.png",
        "assets/photo/in/1000_F_312846925_nXEgHRAcWNzclN3V7rkPcXmcCmcBXYtA.jpg",
        "assets/photo/in/1d412f79fa367ec1032f665cb65000124a0e4d87_xlarge.jpg",
        "assets/photo/in/240412-shutoko-etc-only-01.jpg",
        "assets/photo/in/4cdbbdd2291b2525f83b66aefaa0e2b9_t.jpeg",
        "assets/photo/in/b135f8549bb89c9b0a37ff02fd651b71_t.jpeg"
    ],
    'pa': [
        "assets/photo/pa/0.jpg",
        "assets/photo/pa/01.webp",
        "assets/photo/pa/03.webp",
        "assets/photo/pa/06.webp",
        "assets/photo/pa/34.jpg",
        "assets/photo/pa/4760642ca4259c30d3e69861950fde4e_t.jpeg",
        "assets/photo/pa/b1e8461935a642a89814cdb1681ca59b.jpeg",
        "assets/photo/pa/b5.jpg",
        "assets/photo/pa/images.jpg"
    ],
    'rb':[
        "assets/photo/rb/rb_01.jpg",
        "assets/photo/rb/rb_02.jpg",
        "assets/photo/rb/rb_03.jpg",
        "assets/photo/rb/rb_04.jpg",
        "assets/photo/rb/rb_05.jpg",
        "assets/photo/rb/rb_06.jpg",
        "assets/photo/rb/rb_07.jpg",
        "assets/photo/rb/rb_08.jpg",
        "assets/photo/rb/rb_09.jpg",
        "assets/photo/rb/rb_10.jpg",
        "assets/photo/rb/rb_11.jpg",
        "assets/photo/rb/rb_12.jpg",
        "assets/photo/rb/rb_13.jpg",
        "assets/photo/rb/rb_15.jpg"
    ],
    'wangan': [
        "assets/photo/wangan/1000_F_135810014_weCinjwceewZ9wazOQQMtrGEwtqDPWbB.jpg",
        "assets/photo/wangan/10252011881.jpg",
        "assets/photo/wangan/360_F_403739299_WSsLQZvWgXXbzCK7ApQw96GeaaUgV4Hr.jpg",
        "assets/photo/wangan/47577287932_7d391b2c50_b.jpg",
        "assets/photo/wangan/49217757796_7a18cd1c92_b.jpg",
        "assets/photo/wangan/FYI04485541.jpg",
        "assets/photo/wangan/unnamed.jpg",
        "assets/photo/wangan/湾岸線１.jpg"
    ]
};



function openpic(i) {
    let currentAlbum = 'bridge1';
    let currentIndex = 0;
    let photoarea = document.getElementById("photoarea");
    let photo = document.getElementById("photo");
    const prev = document.querySelector(".prev-btn");
    const next = document.querySelector(".next-btn");

    // 根據不同的參數設定相簿名稱
    if (i === 'bridge1') {
        currentAlbum = 'bridge1';
    } else if (i === 'c1') {
        currentAlbum = 'c1';
    } else if (i === 'in') {
        currentAlbum = 'in';
    } else if (i === 'pa') {
        currentAlbum = 'pa';
    } else if (i === 'rb') {
        currentAlbum = 'rb';
    } else if (i === 'wangan') {
        currentAlbum = 'wangan';
    }

    // 取得對應相簿的圖片數組
    const albumPhotos = albums[currentAlbum];

    // 顯示當前的第一張圖片並立即顯示它
    photo.src = albumPhotos[currentIndex];
    photo.classList.add('show'); // 確保圖片顯示

    // 確保在首次加載時只綁定一次事件監聽器
    let prevHandler = () => {
        currentIndex = (currentIndex === 0) ? albumPhotos.length - 1 : currentIndex - 1;
        // 在切換圖片前先淡出當前圖片
        photo.classList.remove('show');
        setTimeout(() => {
            photo.src = albumPhotos[currentIndex];
            photo.classList.add('show');  // 切換後淡入新圖片
        }, 200);  // 等待200毫秒後切換圖片
    };

    let nextHandler = () => {
        currentIndex = (currentIndex === albumPhotos.length - 1) ? 0 : currentIndex + 1;
        // 在切換圖片前先淡出當前圖片
        photo.classList.remove('show');
        setTimeout(() => {
            photo.src = albumPhotos[currentIndex];
            photo.classList.add('show');  // 切換後淡入新圖片
        }, 200);  // 等待200毫秒後切換圖片
    };

    // 綁定事件監聽器
    prev.addEventListener("click", prevHandler);
    next.addEventListener("click", nextHandler);

    // 顯示相簿區域
    photoarea.style.display = "flex";
    photoarea.addEventListener("click", (event) => {
        event.stopPropagation();  // 阻止事件冒泡，防止父層的事件觸發頁面跳轉
    });
}




function closepic(){
    const photoarea = document.getElementById("photoarea");
    photoarea.style.display = "none";
}