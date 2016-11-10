/**
 * Created by www.temocenter.ru on 14.10.2016.
 * Mikhail Timoshin.
 */
(function () {'use strict';
    /**
     * @param id
     * @returns {Element}
     * @constructor
     */
    var Container = function (id) {
            return  document.getElementById(id);
        },
        Element = function (tagName) {
            return document.createElement(tagName);
        },
        token,
        keyUrl = 'http://api.mosobr.tv/';

    var loadToken = function () {
        var getKey = new XMLHttpRequest();
        getKey.open('POST', keyUrl +'/api/v0/sessions/create', true);
        getKey.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        getKey.onload = function () {
            var content = JSON.parse(getKey.responseText);
            console.log(content.token);
            return token = content.token;
        };

        getKey.send();
    };
    loadToken();

    var updateToken = function () {
        var updateKey = new XMLHttpRequest();
        updateKey.open('POST', keyUrl +'/api/v0/sessions/update', true);
        updateKey.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        updateKey.onload = function () {
            //Hide method for back-end;
            console.log('token: ' +token + ' передан!')
        };
        updateKey.send('token=' +token);
    };
    setInterval(updateToken, 150000);

    /**
     * loadTemplateMain() - Initializing application!
     * This is entry point of template and Request for a #Virtual content!
     */

    var loadTemplateMain = function () {
        //Create live-video block
        var root = new Container('page');
            root.setAttribute('page','live');
        //clear -  костыль для очистки
            root.innerHTML='';
        //continue..
        var video = new Element('div');
        video.id='videoTarget';
        video.className = 'video';
        root.appendChild(video);

        var stTitle = new Element('div');
            stTitle.id='streamTitle';
            stTitle.className='streamTitle';
            stTitle.innerText='Сейчас в эфире:';
        root.appendChild(stTitle);

        var nxtTitle = new Element('div');
            nxtTitle.id='nextStream';
            nxtTitle.className='nextStream';
            nxtTitle.innerText='Далее...';
        root.appendChild(nxtTitle);

        var stmInfo = new Element('div');
            stmInfo.id='streamInfo';
            stmInfo.className="streamInfo";
        root.appendChild(stmInfo);

        var fList = new Element('div');
            fList.id='fullList';
            fList.className='fullList';
        root.appendChild(fList);

        //create block - navigation
        var navigation = new Element('div');
            navigation.id='navigation';
            navigation.className ='navigation';
        root.appendChild(navigation);

        //navigation:popular
        var navBlock = new Container('navigation'),
            navPopular = new Element('div');
            navPopular.id='popular';
            navPopular.className='tab';
            navPopular.tabIndex='3';
            navPopular.innerText = 'Популярное';
        navBlock.appendChild(navPopular);

        //navigation:switcher
        var navSwitcher = new Element('div');
            navSwitcher.id ='switcher';
            navSwitcher.className="switcher";
        navBlock.appendChild(navSwitcher);

        //navigation:switcher:scrollbar-container;
            navBlock = new Container('switcher');
        var navScroll = new Element('div');
            navScroll.id="scrollbar-container";
            navScroll.className="scrollbar-container";
        navBlock.appendChild(navScroll);

        var swCase = new Element('div');
            swCase.id='switchCase';
            swCase.className='switchCase';
        navBlock.appendChild(swCase);

        //scrollbar-container:scrollbar
            navBlock = new Container('scrollbar-container');
        var scrollBar = new Element('div');
            scrollBar.id='scrollbar';
        navBlock.appendChild(scrollBar);

        var toTop = new Element('div');
            toTop.id='toTop';
            toTop.className='toTop';
        navBlock.appendChild(toTop);

        var toBot = new Element('div');
            toBot.id='toBot';
            toBot.className='toBot';
        navBlock.appendChild(toBot);

        //root:streaminfo
            navBlock = new Container('streamInfo');
        var sTs = new Element('div');
            sTs.id='startTimeStraeam';
            sTs.className='startTimeStraeam';
        navBlock.appendChild(sTs);

        var sBreak = new Element('div');
            sBreak.id='breaker';
            sBreak.className='breaker';
        navBlock.appendChild(sBreak);

        var sTe = new Element('div');
            sTe.id='startTextStream';
            sTe.className='startTextStream';
        navBlock.appendChild(sTe);

        //root: foolList
            navBlock = new Container('fullList');
        var bScrollB = new Element('div');
            bScrollB.id='scrollbar-container-bot';
            bScrollB.className='scrollbar-container-bot';
        navBlock.appendChild(bScrollB);

        var swBtm = new Element('div');
            swBtm.id='switchCaseBot';
            swBtm.className='switchCaseBot';
        navBlock.appendChild(swBtm);

            navBlock = new Container('scrollbar-container-bot');
        var scrollBb = new Element('div');
            scrollBb.id='scrollbar-bot';
        navBlock.appendChild(scrollBb);

        var toLeft = new Element('div');
            toLeft.id='toLeft';
            toLeft.className='toLeft';
        navBlock.appendChild(toLeft);

        var toRight = new Element('div');
            toRight.id='toRight';
            toRight.className='toRight';
        navBlock.appendChild(toRight);

      loadContent();
    };

    var loadTemplateProgram = function () {
        var root = new Container('page');
            root.setAttribute('page','programs');
            root.innerHTML='';

        var leftMenu = new Element('div');
            leftMenu.id='leftMenu';
            leftMenu.className='leftMenu';
        root.appendChild(leftMenu);

        var midMenu = new Element('midMenu');
            midMenu.id='midMenu';
            midMenu.className='midMenu';
        root.appendChild(midMenu);

        var rightMenu = new Element('div');
            rightMenu.id='rightMenu';
            rightMenu.className='rightMenu';
        root.appendChild(rightMenu);

        var contentTarget = new Container('rightMenu'),
            contentCase = new Element('div');
            contentCase.id='case';
            contentCase.className ='case';
        contentTarget.appendChild(contentCase);

        var caseTarget = new Container('case'),
            caseList = new Element('div');
            caseList.id='caselist';
            caseList.className='caselist';
        caseTarget.appendChild(caseList);

        var scrollBox = new Element('div');
            scrollBox.id='scrollbar-container';
            scrollBox.className='scrollbar-container-2';
        contentTarget.appendChild(scrollBox);

        var scrollBar = new Container('scrollbar-container'),
            scrollEl = new Element('div');
            scrollEl.id='scrollbar';
            scrollEl.className='scrollbar';
        scrollBar.appendChild(scrollEl);

        var toTop = new Element('div');
            toTop.id='toTop';
            toTop.className='toTop';
        scrollBar.appendChild(toTop);

        var toBot = new Element('div');
            toBot.id='toBot';
            toBot.className='toBot';
        scrollBar.appendChild(toBot);

        var container = new Container('leftMenu'),
            block = new Element('div');
            block.id ='lm1';
            block.className = 'tabP';
            block.tabIndex = 2003;
            block.innerText = 'Категории';
        container.appendChild(block);

            block = new Element('div');
            block.id = 'lm2';
            block.className = 'tabP';
            block.tabIndex = 2004;
            block.innerText = 'Популярные';
        container.appendChild(block);

            block = new Element('div');
            block.id = 'lm3';
            block.className = 'tabP';
            block.tabIndex = 2005;
            block.innerText = 'По алфавиту';
        container.appendChild(block);

        loadContainer();
    };

    var loadTemplateCategory = function (href) {
        var root = new Container('page');
        root.setAttribute('page','category');
        root.innerHTML='';

        var leftMenu = new Element('div');
        leftMenu.id='leftMenu';
        leftMenu.className='leftMenu';
        root.appendChild(leftMenu);

        var midMenu = new Element('midMenu');
        midMenu.id='midMenu';
        midMenu.className='midMenu';
        root.appendChild(midMenu);

        var rightMenu = new Element('div');
        rightMenu.id='rightMenu';
        rightMenu.className='rightMenu';
        root.appendChild(rightMenu);

        var contentTarget = new Container('rightMenu'),
            contentCase = new Element('div');
        contentCase.id='case';
        contentCase.className ='case';
        contentTarget.appendChild(contentCase);

        var caseTarget = new Container('case'),
            caseList = new Element('div');
        caseList.id='caselist';
        caseList.className='caselist';
        caseTarget.appendChild(caseList);

        var scrollBox = new Element('div');
        scrollBox.id='scrollbar-container';
        scrollBox.className='scrollbar-container-2';
        contentTarget.appendChild(scrollBox);

        var scrollBar = new Container('scrollbar-container'),
            scrollEl = new Element('div');
        scrollEl.id='scrollbar';
        scrollEl.className='scrollbar';
        scrollBar.appendChild(scrollEl);

        var toTop = new Element('div');
        toTop.id='toTop';
        toTop.className='toTop';
        scrollBar.appendChild(toTop);

        var toBot = new Element('div');
        toBot.id='toBot';
        toBot.className='toBot';
        scrollBar.appendChild(toBot);

        loadCategory(href);

    };

    var loadContainer = function () {

        var customScrollerRight = function () {
            var current_scroll_top;

            var Scroller = document.getElementById.bind(document),
                container = Scroller('scrollbar-container'),
                content = Scroller('case'),
                scroll = Scroller('scrollbar'),
                tTop = Scroller('toTop'),
                tBot = Scroller('toBot');

            content.addEventListener('scroll', function() {
                scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
                scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
            });

            var event = new Event('whell');

            window.addEventListener('resize', content.dispatchEvent.bind(content, event));
            content.dispatchEvent(event);

            scroll.addEventListener('mousedown', function(start){
                start.preventDefault();
                var y = scroll.offsetTop;
                var onMove = function(end){
                    var delta = end.pageY - start.pageY;
                    scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
                    content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
                };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', function(){
                    document.removeEventListener('mousemove', onMove);
                });
            });

            tTop.addEventListener('click', function () {
                //need switch onlcik to onkeydown for tv-controller
                content.scrollTop = 0;
                scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0,-container.clientHeight)) + 'px';

                return current_scroll_top = content.scrollTop;
            });

            tBot.addEventListener('click', function () {
                //need switch onСliсk to onkeydown for tv-controller
                /**
                 * replace this!!!!!!!! Don't forget!!!
                 * @type {number}
                 */
                content.scrollTop = 2000;
                scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0,2000)) + 'px';
            });

        };
        customScrollerRight();

        var loadCategories = function () {
            var getCats = new XMLHttpRequest();
            getCats.open('GET', keyUrl +'/api/v0/categories', true);
            getCats.onload = function () {

                var categoriesBack = JSON.parse(getCats.responseText);
                for(var j=0; j < categoriesBack.length; j++) {
                    console.log(categoriesBack[j]);
                    var targetContaienr = new Container('caselist'),
                        parseContent = new Element('div'),
                        nodeContent= categoriesBack[j].title;
                        parseContent.id= 'ctn' +j;
                        parseContent.className ='parseLine';
                        parseContent.tabIndex = 2006 +j;
                        parseContent.innerHTML= nodeContent;
                    targetContaienr.appendChild(parseContent);
                }
                appNavigation(1);
            };
            getCats.send();

        };
        loadCategories();
    };

    var loadContent = function () {

        //local variables for App;
        var current_scroll_top;
        //Scroller: Right.
        var customScrollerRight = function () {

            var Scroller = document.getElementById.bind(document),
                container = Scroller('scrollbar-container'),
                content = Scroller('switcher'),
                scroll = Scroller('scrollbar'),
                tTop = Scroller('toTop'),
                tBot = Scroller('toBot');

            content.addEventListener('scroll', function() {
                scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
                scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
            });

            var event = new Event('whell');

            window.addEventListener('resize', content.dispatchEvent.bind(content, event));
            content.dispatchEvent(event);

            scroll.addEventListener('mousedown', function(start){
                start.preventDefault();
                var y = scroll.offsetTop;
                var onMove = function(end){
                    var delta = end.pageY - start.pageY;
                    scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
                    content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
                };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', function(){
                    document.removeEventListener('mousemove', onMove);
                });
            });

            tTop.addEventListener('click', function () {
                //need switch onlcik to onkeydown for tv-controller
                content.scrollTop = 0;
                scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0,-container.clientHeight)) + 'px';

                return current_scroll_top = content.scrollTop;
            });

            tBot.addEventListener('click', function () {
                //need switch onСliсk to onkeydown for tv-controller
                /**
                 * replace this!!!!!!!! Don't forget!!!
                 * @type {number}
                 */
                content.scrollTop = 2000;
                scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0,2000)) + 'px';
            });

        };
        customScrollerRight();

        //Scroller: Bottom.
        var customScrollerBot = function () {

            var Scroller = document.getElementById.bind(document),
                container = Scroller('scrollbar-container-bot'),
                content = Scroller('fullList'),
                scroll = Scroller('scrollbar-bot'),
                left = Scroller('toLeft'),
                right = Scroller('toRight');


            content.addEventListener('wheel', function(e) {
                var x = scroll.offsetLeft,
                    delta = (e.deltaY)*0.1;
                scroll.style.width = (container.clientWidth * content.clientWidth / content.scrollWidth) + "px";
                content.scrollLeft = (content.scrollWidth * scroll.offsetLeft / container.clientWidth);
                scroll.style.left = Math.min(container.clientWidth - scroll.clientWidth, Math.max(0, (x) + delta)) + 'px';

            });

            content.addEventListener('scroll', function() {
                scroll.style.width = (container.clientWidth * content.clientWidth / content.scrollWidth) + "px";
                scroll.style.left = container.clientWidth * content.scrollLeft / content.scrollWidth + "px";
            });

            var event = new Event('wheel');

            window.addEventListener('resize', content.dispatchEvent.bind(content, event));
            content.dispatchEvent(event);

            scroll.addEventListener('mousedown', function(start){
                start.preventDefault();
                var x = scroll.offsetLeft;
                console.log(x +'offset');
                var onMove = function(end){
                    var delta = end.pageX - start.pageX;
                    scroll.style.left = Math.min(container.clientWidth - scroll.clientWidth, Math.max(0, x + delta)) + 'px';
                    content.scrollLeft = (content.scrollWidth * scroll.offsetLeft / container.clientWidth);
                };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', function(){
                    document.removeEventListener('mousemove', onMove);
                });
            });

            left.addEventListener('click', function () {
            //need switch onlcik to onkeydown for tv-controller
                content.scrollLeft = 0;
                scroll.style.left = Math.min(container.clientWidth - scroll.clientWidth, Math.max(0,-container.clientWidth)) + 'px';

            });

            right.addEventListener('click', function () {
            //need switch onlcik to onkeydown for tv-controller
                content.scrollLeft = container.clientWidth;
                scroll.style.left = Math.min(container.clientWidth - scroll.clientWidth, Math.max(0,+container.clientWidth)) + 'px';

            });
        };


        //load content of videos: next
        var loadNextVideos = function () {
            var getListOfVideos = new XMLHttpRequest();
                getListOfVideos.open('GET', keyUrl +'/api/v0/live.json', true);

            getListOfVideos.onload = function () {

                    var bottomCase = document.getElementById('switchCaseBot'),
                        parentPrototype = document.getElementById('streamInfo'),
                        parentProtoWidth = parentPrototype.offsetWidth,
                        parentProtoHeight= parentPrototype.offsetHeight,
                        parentProtoMargin= window.innerWidth*0.025;

                    if (getListOfVideos.status >= 200 && getListOfVideos.status < 400){

                        var listNext = JSON.parse(getListOfVideos.responseText);

                        var resizeBox = function () {
                            bottomCase.innerHTML = null;
                            bottomCase.style.width = ((parentProtoWidth * (listNext.length))+(parentProtoMargin*(listNext.length))) -parentProtoWidth +'px';

                            var firstContainer = document.getElementById('startTimeStraeam'),
                                lastContainer = document.getElementById('startTextStream'),
                                timeOfLive = new Date(listNext[0].started_at),
                                liveHourses = timeOfLive.getHours(),
                                liveMinutes = timeOfLive.getMinutes();
                                if(liveHourses <9){
                                    liveHourses = '0' +timeOfLive.getHours();
                                }
                                 else{
                                    liveHourses = timeOfLive.getHours()
                                }
                                if(liveMinutes <9){
                                    liveMinutes = '0' +timeOfLive.getMinutes();
                                }
                                else{
                                    liveMinutes = timeOfLive.getMinutes();
                                }
                            firstContainer.innerHTML = liveHourses +':' +liveMinutes ;
                            lastContainer.innerHTML =  listNext[0].title ;

                            for (var i=1; i < listNext.length; i++ ){
                            //main: Parent div
                            var newDiv = document.createElement('div');
                                newDiv.id = 'bl' +i;
                                newDiv.tabIndex = 15 +i;
                                newDiv.style.width = parentProtoWidth +'px';
                                newDiv.style.height = parentProtoHeight +'px';
                                if(i!==1)newDiv.style.marginLeft = parentProtoMargin +'px';
                                newDiv.className = 'floatListTop';

                            bottomCase.appendChild(newDiv);

                            //main: first child of Parent
                            var childDiv = document.getElementById('bl' +i),
                                virtualDivAppend = document.createElement('div');
                                virtualDivAppend.id = 'childof'+listNext[i].id;
                                virtualDivAppend.className = 'startTimeStraeam';

                            var timeOfStart = new Date(listNext[i].started_at),
                                timeHourses = timeOfStart.getHours(),
                                timeMinutes = timeOfStart.getMinutes();
                            if(timeHourses <9){
                                timeHourses = '0'+timeOfStart.getHours();
                            }
                            else{
                                timeHourses = timeOfStart.getHours()
                            }
                            if(timeMinutes <9){
                                timeMinutes = '0' +timeOfStart.getMinutes();
                            }
                            else{
                                timeMinutes = timeOfStart.getMinutes();
                            }
                            virtualDivAppend.innerHTML = timeHourses +':' +timeMinutes ;

                            childDiv.appendChild(virtualDivAppend);

                            //main: second child of Parent
                           // var childBreaker  for childDiv = document.getElementById(listNext[i].id);
                           var ChildBreaker = document.createElement('div');
                               ChildBreaker.className = 'breaker';
                               childDiv.appendChild(ChildBreaker);

                           //title of tv-program
                           var ChildTitle = document.createElement('div');
                               ChildTitle.className = 'startTextStream';
                               ChildTitle.innerHTML =  listNext[i].title;
                               childDiv.appendChild(ChildTitle);
                        }
                            customScrollerBot();
                        };
                        resizeBox();
                    }
                    else {
                        bottomCase.innerHTML = 'Сервер временно недоступен.'
                    }
            };

            getListOfVideos.send();
        };
        loadNextVideos();

        //load popular video
        var loadPopularVideo = function () {

            var getPopularJson= new XMLHttpRequest();
                getPopularJson.open('GET', keyUrl +'/api/v0/categories/popular.json', true);

                getPopularJson.onload = function () {
                    if (getPopularJson.status >= 200 && getPopularJson.status < 400) {

                        var popularList = JSON.parse(getPopularJson.responseText),
                            toCase = document.getElementById('switchCase');

                        for(var i=0; i < 10; i++){
                            var newDiv = document.createElement('div');
                            newDiv.id= 'pl'+i;
                            newDiv.tabIndex = 4+ i;
                            newDiv.className = 'popularList';
                            toCase.appendChild(newDiv);

                            var imagesUrl = document.createElement('img');
                                imagesUrl.src = 'http://mosobr.tv/'+popularList[i].preview;
                                imagesUrl.className = 'popularIcon';
                                imagesUrl.alt = popularList[i].url;
                                newDiv.appendChild(imagesUrl);

                            var parentSpan = document.createElement('div');
                                parentSpan.className = 'popularText';
                                parentSpan.innerHTML = '<span class="titlePop">' +popularList[i].title +'</span><br><span>'  +popularList[i].description.replace(/<\/?[^>]+>/g,'') +'</span>';
                                newDiv.appendChild(parentSpan);
                        }
                        appNavigation(0);
                    }

                };

            getPopularJson.send();

        };
        loadPopularVideo();

        //load content of video: live
        var loadLiveVideo = function () {
            var getPlay = document.getElementById('videoTarget');
            if(token === undefined)setTimeout(loadLiveVideo, 3000);
            else if(getPlay === null)setTimeout(loadLiveVideo, 3000);
            else{

            var getVideoStream = new XMLHttpRequest();
            getVideoStream.open('GET', keyUrl +'/api/v0/live/stream/hls/' +token, true);

            getVideoStream.onload = function () {
                var currentVideoLink = JSON.parse(getVideoStream.responseText),
                    liveLinkForTarget = currentVideoLink.stream_url;


                    var playBlock = document.createElement('video');
                        playBlock.id= "liveVideoPlayer";
                        playBlock.className = 'videoContainer';
                        playBlock.autoplay = 'true';

                        getPlay.appendChild(playBlock);

                    var videoSource = document.createElement('source');
                        videoSource.src = liveLinkForTarget;

                    playBlock.appendChild(videoSource);



            };
            getVideoStream.send();

            }
        };
        loadLiveVideo();

        window.addEventListener('resize', loadNextVideos);


    };

    var loadCategory = function (href) {

        var catList = new XMLHttpRequest();
            catList.open('GET', href, true);
            catList.onload = function () {
                var curResponce = JSON.parse(catList.responseText);
                for(var v = 0; v < curResponce.videos.length; v++){
                    var targetContainer = new Container('caselist'),
                        newBlock = new Element('div'),
                        nodeContent = curResponce.videos[v].title,
                        nodeImg = curResponce.videos[v].preview,
                        nodeViews = curResponce.videos[v].views;
                    newBlock.id= 't' +curResponce.videos[v].id;
                    newBlock.className = 'floatListCats';
                    newBlock.tabIndex = 3006 +v;
                    newBlock.innerHTML = nodeContent +' ' +nodeImg +' ' +nodeViews;
                    targetContainer.append(newBlock);
                }

            };
            catList.send();
        };

    var appNavigation = function (ide) {

        var TopButtonsNav = document.querySelectorAll('[header-menu]');
            TopButtonsNav[ide].focus();
        var Tag = function (tabindex) {
            return document.querySelector('[tabindex="' +tabindex +'"]').focus();
        };

            var navElements = document.querySelectorAll('[tabindex]'),
                botElements = document.getElementsByClassName('floatListTop'),
                rightElements = document.getElementsByClassName('parseLine'),
                botFullList = botElements.length,
                rightFullList = rightElements.length;
            Array.prototype.some.call(navElements, function (navElements) {
                var curEl = navElements.tabIndex,
                    isHref;
                    navElements.addEventListener('keydown', function (e) {
                        var curPage = document.getElementById('page');
                        //live - page
                        if(curPage.getAttribute('page') =='live') {
                            //top menu
                            if (curEl === 1 || curEl === 2000) {
                                if (e.keyCode === 39)new Tag(2000);
                                else if (e.keyCode === 37)new Tag(1);
                                else if (e.keyCode === 40)new Tag(3);
                            }
                            else if (curEl === 3) {
                                if (e.keyCode === 38)new Tag(1);
                                else if (e.keyCode === 40)new Tag(4);
                            }
                            //popular list -main
                            else if (curEl === 4) {
                                if (e.keyCode === 38)new Tag(3);
                                else if(e.keyCode===13){
                                        isHref = navElements.getElementsByTagName('img');
                                        var curHref = isHref[0].alt;
                                    loadTemplateCategory(curHref);
                                }
                                else if (e.keyCode === 40)new Tag(curEl + 1);
                            }
                            else if ((curEl > 4) && (curEl < 13)) {
                                if (e.keyCode === 38)new Tag(curEl - 1);
                                else if(e.keyCode===13){
                                        isHref = navElements.getElementsByTagName('img');
                                        var curHref = isHref[0].alt;
                                    loadTemplateCategory(curHref);
                                }
                                else if (e.keyCode === 40)new Tag(curEl + 1);
                            }
                            else if (curEl === 13) {
                                if (e.keyCode === 38)new Tag(curEl - 1);
                                else if (e.keyCode === 40)new Tag(16);
                            }
                            //bottom list
                            else if (curEl === 16) {
                                if (e.keyCode === 38)Tag(13);
                                else if (e.keyCode === 39)new Tag(curEl + 1);

                            }
                            else if (curEl > 16 && curEl < 15 + botFullList) {
                                if (e.keyCode === 38)new Tag(13);
                                else if (e.keyCode === 39)new Tag(curEl + 1);
                                else if (e.keyCode === 37)new Tag(curEl - 1);
                            }
                            else if (curEl === 15 + botFullList) {
                                if (e.keyCode === 38)new Tag(13);
                                else if (e.keyCode === 37)new Tag(curEl - 1);
                            }
                        }
                        //programs - page
                        else if(curPage.getAttribute('page') =='programs'){
                            if (curEl === 1 || curEl === 2000) {
                                if (e.keyCode === 39)new Tag(2000);
                                else if (e.keyCode === 37)new Tag(1);
                                else if (e.keyCode === 40)new Tag(2003);
                                else if (e.keyCode === 39)new Tag(2006);
                            }
                            else if(curEl === 2003){
                                if(e.keyCode === 38)new Tag(2000);
                                else if(e.keyCode === 40)new Tag(curEl+1);
                                else if(e.keyCode === 39)new Tag(2006);
                            }
                            else if(curEl === 2004){
                                if(e.keyCode===38)new Tag(curEl-1);
                                else if(e.keyCode===40)new Tag(curEl+1);
                                else if(e.keyCode === 39)new Tag(2006);
                            }
                            else if(curEl ===2005){
                                if(e.keyCode===38)new Tag(curEl-1);
                                else if(e.keyCode === 39)new Tag(2006);
                            }
                            else if(curEl>2005 && curEl<2004+rightFullList){
                                    if(curEl % 2 == 0){
                                        if(e.keyCode===37)new Tag(2003);
                                        else if(e.keyCode===38)new Tag(curEl-2);
                                        else if(e.keyCode===39)new Tag(curEl+1);
                                        else if(e.keyCode===40)new Tag(curEl+2);
                                    }
                                    else{
                                        if(e.keyCode===37)new Tag(curEl-1);
                                        else if(e.keyCode===38)new Tag(curEl-2);
                                        else if(e.keyCode===40)new Tag(curEl+2);
                                    }
                            }
                            else if(curEl>2003+rightFullList && curEl<2006+rightFullList){
                                if(curEl % 2 == 0) {
                                    if (e.keyCode === 39)new Tag(curEl + 1);
                                    else if (e.keyCode === 38)new Tag(curEl - 2);
                                }
                                else{
                                    if (e.keyCode === 37)new Tag(curEl - 1);
                                    else if (e.keyCode === 38)new Tag(curEl - 2);
                                }
                            }

                        }
                    });
            });
        //
    };


    var runTemplate = function (){
        document.addEventListener('DOMContentLoaded', function () {

                loadTemplateMain();
            var liveButton = new Container('live'),
                progButton = new Container('programs');

                liveButton.addEventListener('keydown', function (e) {
                    if(e.keyCode===13) loadTemplateMain();
                });

                progButton.addEventListener('keydown', function (e) {
                    if(e.keyCode===13) loadTemplateProgram();
                });


            document.onkeydown = function (e) {

                   var topMenuId = document.getElementById('header');

                if(e.keyCode==406) {
                    var videoTarget = document.getElementById('videoTarget'),
                        videoClass = videoTarget.className,
                        focusIt = document.getElementById('popular');
                    if (videoClass == 'video'){
                        videoTarget.className = 'fullScreen';
                        topMenuId.style.display="none";
                        focusIt.focus();
                    }
                    else if (videoClass == 'fullScreen'){
                        focusIt = document.getElementById('live');
                        videoTarget.className = 'video';
                        topMenuId.style.display="block";
                        focusIt.focus();
                    }
                }
                else if(e.keyCode===404){
                    focusIt = document.getElementById('programs');
                    topMenuId.style.display="block";
                    loadTemplateProgram();
                    focusIt.focus();
                }
                else if(e.keyCode===403) {
                    focusIt = document.getElementById('live');
                    topMenuId.style.display = "block";
                    loadTemplateMain();
                    focusIt.focus();
                }
            };

        });
    };
    runTemplate();
})();