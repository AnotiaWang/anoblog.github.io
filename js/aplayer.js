const MainAPlayer=(()=>{const t={},r={checkAPlayer:()=>{void 0===volantis.APlayerController.status||void 0===t.player?r.setAPlayerObject():void 0===t.observer&&r.setAPlayerObserver()},setAPlayerObject:()=>{let e=document.querySelectorAll(".footer meting-js");0==e.length&&(e=document.querySelectorAll("meting-js")),t.player=void 0,e.forEach((e,a)=>{e.meta.id==volantis.APlayerController.id&&e.aplayer&&void 0===t.player&&(t.player=e.aplayer,r.setAPlayerObserver(),r.updateTitle())})},setAPlayerObserver:()=>{try{t.player.on("play",function(e){r.updateAPlayerControllerStatus(e),t.status="play"}),t.player.on("pause",function(e){r.updateAPlayerControllerStatus(e),t.status="pause"}),t.player.on("volumechange",function(e){r.onUpdateAPlayerVolume(e),t.status="volumechange"}),t.player.on("loadstart",function(e){r.updateTitle(e),t.status="loadstart"}),t.volumeBarWrap=document.getElementsByClassName("nav volume")[0].children[0],t.volumeBar=t.volumeBarWrap.children[0];const a=e=>{r.updateAPlayerVolume(e)},l=e=>{t.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"),document.removeEventListener("mouseup",l),document.removeEventListener("mousemove",a),r.updateAPlayerVolume(e)};t.volumeBarWrap.addEventListener("mousedown",e=>{e.stopPropagation(),t.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"),document.addEventListener("mousemove",a),document.addEventListener("mouseup",l)}),t.volumeBarWrap.addEventListener("click",e=>{e.stopPropagation()}),r.updateAPlayerControllerStatus(),r.onUpdateAPlayerVolume(),t.observer=!0}catch(e){console.log(e),t.observer=void 0}},updateAPlayerVolume:e=>{e=((e.clientX||e.changedTouches[0].clientX)-t.volumeBar.getBoundingClientRect().left)/t.volumeBar.clientWidth,e=Math.max(e,0);e=Math.min(e,1),t.player.volume(e)},onUpdateAPlayerVolume:()=>{try{t.volumeBar.children[0].style.width=100*t.player.audio.volume+"%"}catch(e){console.log(e)}},updateAPlayerControllerStatus:()=>{try{t.player.audio.paused?(volantis.APlayerController.status="pause",document.getElementsByClassName("nav toggle")[0].children[0].classList.add("fa-play"),document.getElementsByClassName("nav toggle")[0].children[0].classList.remove("fa-pause")):(volantis.APlayerController.status="play",document.getElementsByClassName("nav toggle")[0].children[0].classList.remove("fa-play"),document.getElementsByClassName("nav toggle")[0].children[0].classList.add("fa-pause"))}catch(e){console.log(e)}},aplayerToggle:()=>{r.checkAPlayer();try{t.player.toggle()}catch(e){console.log(e)}},aplayerBackward:()=>{r.checkAPlayer();try{t.player.skipBack(),t.player.play()}catch(e){console.log(e)}},aplayerForward:()=>{r.checkAPlayer();try{t.player.skipForward(),t.player.play()}catch(e){console.log(e)}},aplayerVolume:e=>{r.checkAPlayer();try{t.player.volume(e)}catch(e){console.log(e)}},updateTitle:()=>{r.checkAPlayer();try{var e=t.player.list.index,a=t.player.list.audios[e];document.getElementsByClassName("nav music-title")[0].innerHTML=a.title}catch(e){}}};return{checkAPlayer:()=>{r.checkAPlayer()},aplayerBackward:()=>{r.aplayerBackward()},aplayerToggle:()=>{r.aplayerToggle()},aplayerForward:()=>{r.aplayerForward()},APlayer:t}})();Object.freeze(MainAPlayer),volantis.requestAnimationFrame(()=>{MainAPlayer.checkAPlayer()});