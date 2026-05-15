let shuffleHistory = [];
let remainingQueue = [];
let currentShuffleCycle = [];
let index = 0;
let isPlaying = false;
let isShuffle = true;
let isRepeatOne = false;
let isChanging = false;
let lyrics = [];
let lastLyric = "";
let wakeLock = null;
let isLoopingHandled = false;

const audio = document.getElementById('audio-player');
const playIcon = document.getElementById('play-icon');
const art = document.getElementById('current-art');
const lyricDisplay = document.getElementById('lyric-text');
const lyricContainer = document.getElementById('lyric-container');
const progressBar = document.getElementById('progress-bar');
const hint = document.getElementById('interaction-hint');
const toast = document.getElementById('toast-msg');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const playlistOverlay = document.getElementById('playlist');
const playlistHeader = document.getElementById('playlist-header');
const songTitleEl = document.getElementById('current-title');

const GOOGLE_SHEET_API = 'https://script.google.com/macros/s/AKfycbxGoLJOeikvklz3EM137ELiK6a86jioK9o5DFBEXHZvmulQpxKJcTiKe8KL0wPizoeV0Q/exec';
const GOOGLE_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTeZe9vI_OY_nJ0sHiSVUy31z9U-4zClIdkgBZCAiquu8wePVrosqwV-GnSOKTtYJP_pgHt_mtC8Kcm/pub?output=csv';

let listenData = {};
let isUpdatingListen = false;

function showToastMsg(msg, isListen = false) {
    const toastEl = document.getElementById('toast-msg');
    if (!toastEl) return;
    toastEl.innerText = msg;
    toastEl.style.opacity = "1";
    if (isListen) {
        toastEl.style.backgroundColor = "rgba(0,0,0,0.85)";
        toastEl.style.color = "#4ade80";
    } else {
        toastEl.style.backgroundColor = "";
        toastEl.style.color = "";
    }
    setTimeout(() => { toastEl.style.opacity = "0"; }, 3000);
}

async function fetchListenData() {
    if (isUpdatingListen) return listenData;
    try {
        const response = await fetch(`${GOOGLE_SHEET_API}?action=get&t=${Date.now()}`);
        if (response.ok) {
            listenData = await response.json();
            updateListenStatsModal();
            return listenData;
        }
    } catch (error) { console.log('API error, trying CSV fallback...'); }
    try {
        const csvResponse = await fetch(GOOGLE_SHEET_CSV + '&t=' + Date.now());
        if (csvResponse.ok) {
            const csvText = await csvResponse.text();
            const rows = csvText.split('\n');
            listenData = {};
            for (let i = 1; i < rows.length; i++) {
                const cols = rows[i].split(',');
                if (cols.length >= 2 && cols[0]) {
                    let name = cols[0].replace(/^"|"$/g, '');
                    let count = parseInt(cols[1]) || 0;
                    listenData[name] = count;
                }
            }
            updateListenStatsModal();
        }
    } catch (error) {
        console.error('LỖI LẤY DỮ LIỆU:', error);
        const saved = localStorage.getItem('xuanken_listens');
        if (saved) { listenData = JSON.parse(saved); updateListenStatsModal(); }
    }
    return listenData;
}

async function incrementListenCount(songName, source = 'normal') {
    if (!songName) return false;
    if (isUpdatingListen) return false;
    
    isUpdatingListen = true;
    try {
        const response = await fetch(`${GOOGLE_SHEET_API}?action=increment&song=${encodeURIComponent(songName)}&t=${Date.now()}`);
        const result = await response.json();
        if (result.success) {
            listenData[songName] = result.count;
            updateListenStatsModal();
            localStorage.setItem('xuanken_listens', JSON.stringify(listenData));
            
            let sourceText = '';
            if (source === 'next') sourceText = 'TIẾP THEO';
            else if (source === 'prev') sourceText = 'QUAY LẠI';
            else if (source === 'loop') sourceText = 'LẶP LẠI';
            else if (source === 'shuffle') sourceText = 'XÁO TRỘN';
            else if (source === 'select') sourceText = 'CHỌN BÀI';
            else sourceText = 'NGHE NHẠC';
            
            showToastMsg(`+1 LƯỢT NGHE: "${songName}" (${sourceText})`, true);
            console.log(`GHI NHẬN: ${songName} - ${result.count} (${source})`);
        }
    } catch (error) {
        console.error('LỖI TĂNG LƯỢT NGHE:', error);
        if (!listenData[songName]) listenData[songName] = 0;
        listenData[songName]++;
        localStorage.setItem('xuanken_listens', JSON.stringify(listenData));
        updateListenStatsModal();
        showToastMsg(`LƯU OFFLINE: +1 "${songName}"`, true);
    } finally { 
        isUpdatingListen = false;
    }
    return true;
}

function recordListenWithSource(songName, source) {
    if (!songName) return;
    incrementListenCount(songName, source);
}

function updateListenStatsModal() {
    const container = document.getElementById('listen-stats-content');
    const totalContainer = document.getElementById('listen-total-stats');
    if (!container) return;
    
    if (listenData && Object.keys(listenData).length > 0) {
        const currentSongName = songs[index]?.name;
        const statsHtml = songs.map(song => {
            const count = listenData[song.name] || 0;
            const isCurrent = (song.name === currentSongName);
            return `
                <div class="listen-stat-item ${isCurrent ? 'current-playing' : ''}" data-song-name="${escapeHtmlStat(song.name)}">
                    <span class="listen-stat-name">${escapeHtmlStat(song.name)}</span>
                    <span class="listen-stat-count">${formatNumberStat(count)}</span>
                </div>
            `;
        }).join('');
        
        const total = Object.values(listenData).reduce((sum, count) => sum + count, 0);
        container.innerHTML = statsHtml;
        if (totalContainer) {
            totalContainer.innerHTML = `<span>TỔNG LƯỢT NGHE:</span><span>${formatNumberStat(total)}</span>`;
        }
    } else {
        container.innerHTML = '<div style="text-align:center;padding:40px">ĐANG TẢI DỮ LIỆU...</div>';
        if (totalContainer) {
            totalContainer.innerHTML = `<span>TỔNG LƯỢT NGHE:</span><span>0</span>`;
        }
    }
}

function formatNumberStat(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

function escapeHtmlStat(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function scrollToCurrentListenSong() {
    const modal = document.getElementById('listen-stats-modal');
    if (!modal || !modal.classList.contains('show')) return;
    
    const currentPlayingItem = modal.querySelector('.listen-stat-item.current-playing');
    if (!currentPlayingItem) return;
    
    const scrollContainer = modal.querySelector('.listen-stats');
    if (!scrollContainer) return;
    
    const header = modal.querySelector('.listen-modal-header');
    const headerHeight = header ? header.offsetHeight : 65;
    const spacingFromHeader = 4;
    
    const itemOffsetTop = currentPlayingItem.offsetTop;
    const itemHeight = currentPlayingItem.offsetHeight;
    const containerHeight = scrollContainer.clientHeight;
    const scrollHeight = scrollContainer.scrollHeight;
    
    const allItems = modal.querySelectorAll('.listen-stat-item');
    const isLastItem = allItems.length > 0 && allItems[allItems.length - 1] === currentPlayingItem;
    
    let targetScroll;
    
    if (isLastItem) {
        targetScroll = scrollHeight - containerHeight;
    } else {
        targetScroll = itemOffsetTop - headerHeight - spacingFromHeader;
        
        const maxScroll = scrollHeight - containerHeight;
        if (targetScroll > maxScroll) {
            targetScroll = maxScroll;
        }
    }
    
    targetScroll = Math.max(0, targetScroll);
    
    scrollContainer.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
    });
}

function showListenStats() {
    let modal = document.getElementById('listen-stats-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'listen-stats-modal';
        modal.className = 'listen-modal';
        modal.innerHTML = `<div class="listen-modal-header"><div class="close-listen" id="close-listen-modal"><i class="fas fa-times"></i></div><div class="listen-title"><i class="fal fa-headphones"></i> THỐNG KÊ LƯỢT NGHE <i class="fal fa-headphones"></i></div><div style="width:40px"></div></div><div class="listen-stats" id="listen-stats-content"><div style="text-align:center;padding:40px">ĐANG TẢI DỮ LIỆU...</div></div><div class="listen-total" id="listen-total-stats"></div>`;
        const playerContainer = document.querySelector('.player-container');
        if (playerContainer) playerContainer.appendChild(modal);
        else document.body.appendChild(modal);
        const closeBtn = document.getElementById('close-listen-modal');
        if (closeBtn) closeBtn.onclick = () => modal.classList.remove('show');
    }
    updateListenStatsModal();
    modal.classList.add('show');
    
    setTimeout(() => {
        scrollToCurrentListenSong();
    }, 300);
}

function updateCurrentSongHighlightAndScroll() {
    const modal = document.getElementById('listen-stats-modal');
    if (!modal) return;
    
    const currentSongName = songs[index]?.name;
    const statItems = modal.querySelectorAll('.listen-stat-item');
    
    let foundCurrent = false;
    statItems.forEach(item => {
        const nameSpan = item.querySelector('.listen-stat-name');
        if (nameSpan && nameSpan.innerText === currentSongName) {
            item.classList.add('current-playing');
            foundCurrent = true;
        } else {
            item.classList.remove('current-playing');
        }
    });
    
    if (modal.classList.contains('show') && foundCurrent) {
        setTimeout(() => {
            scrollToCurrentListenSong();
        }, 100);
    }
}

function createShuffledArray() {
    const arr = [...Array(songs.length).keys()];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function refreshShuffleCycle() {
    currentShuffleCycle = createShuffledArray();
    remainingQueue = [...currentShuffleCycle];
    if (shuffleHistory.length > 0 && remainingQueue.length > 0 && remainingQueue[0] === shuffleHistory[shuffleHistory.length - 1]) {
        if (remainingQueue.length > 1) {
            [remainingQueue[0], remainingQueue[1]] = [remainingQueue[1], remainingQueue[0]];
        }
    }
}

function getNextShuffleIndex(currentIdx) {
    if (!remainingQueue.length || remainingQueue.length === 0) {
        refreshShuffleCycle();
    }
    const nextIndex = remainingQueue.shift();
    shuffleHistory.push(nextIndex);
    if (shuffleHistory.length > 10) shuffleHistory.shift();
    if (remainingQueue.length === 0) {
        refreshShuffleCycle();
    }
    return nextIndex;
}

function resetShuffleState(currentIdx) {
    refreshShuffleCycle();
    shuffleHistory = [];
    if (remainingQueue.length > 0 && remainingQueue[0] === currentIdx) {
        if (remainingQueue.length > 1) {
            const first = remainingQueue.shift();
            remainingQueue.push(first);
        } else {
            refreshShuffleCycle();
            if (remainingQueue[0] === currentIdx && remainingQueue.length > 1) {
                const first = remainingQueue.shift();
                remainingQueue.push(first);
            }
        }
    }
}

function getInitialShuffleIndex() {
    refreshShuffleCycle();
    const initIdx = remainingQueue.shift();
    shuffleHistory = [initIdx];
    return initIdx;
}

function getPrevShuffleIndex(currentIdx) {
    if (shuffleHistory.length < 2) {
        return getNextShuffleIndex(currentIdx);
    }
    const prevTrack = shuffleHistory[shuffleHistory.length - 2];
    shuffleHistory.pop();
    if (remainingQueue.length > 0 && !remainingQueue.includes(currentIdx)) {
        remainingQueue.unshift(currentIdx);
    }
    return prevTrack;
}

function showToast(msg) {
    showToastMsg(msg, false);
}

function getRandomPastel() {
    const h = Math.floor(Math.random() * 360);
    return { bg: `hsl(${h}, 70%, 94%)`, accent: `hsl(${h}, 60%, 40%)` };
}

function scrollToActiveTop() {
    const activeItem = document.querySelector('.song-item.active');
    if (!activeItem) return;
    
    const scrollContainer = document.getElementById('playlist-content');
    if (!scrollContainer) return;
    
    const header = document.querySelector('.playlist-header');
    const headerHeight = header ? header.offsetHeight : 65;
    const spacingFromHeader = 4;
    const itemOffsetTop = activeItem.offsetTop;
    const targetScroll = itemOffsetTop - headerHeight - spacingFromHeader;
    
    scrollContainer.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
    });
}

async function requestWakeLock() {
    if ('wakeLock' in navigator) {
        try { if (document.visibilityState === 'visible') wakeLock = await navigator.wakeLock.request('screen'); } catch (err) { }
    }
}

function releaseWakeLock() {
    if (wakeLock) { wakeLock.release().catch(() => { }); wakeLock = null; }
}

function updateMediaSession() {
    if ('mediaSession' in navigator) {
        const song = songs[index];
        navigator.mediaSession.metadata = new MediaMetadata({
            title: song.name,
            artist: 'XuanKen Official',
            album: 'XuanKen Music Collection',
            artwork: [{ src: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/logoofficial.png', sizes: '512x512', type: 'image/png' }]
        });
        navigator.mediaSession.setActionHandler('play', () => audio.play());
        navigator.mediaSession.setActionHandler('pause', () => audio.pause());
        navigator.mediaSession.setActionHandler('previoustrack', () => prevSong());
        navigator.mediaSession.setActionHandler('nexttrack', () => handleNextAction());
    }
}

function formatTime(sec) {
    if (!sec || isNaN(sec)) return "00:00";
    let m = Math.floor(sec / 60);
    let s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function parseLRC(text) {
    const lines = text.split('\n');
    const result = [];
    const timeReg = /\[(\d+):(\d+\.\d+)\]/;
    lines.forEach(line => {
        const match = timeReg.exec(line);
        if (match) result.push({ time: parseInt(match[1]) * 60 + parseFloat(match[2]), text: line.replace(timeReg, '').trim() });
    });
    return result;
}

async function fetchLyricWithFallback(lrc1, lrc2) {
    const urls = [lrc1, lrc2].filter(url => url && url.trim() !== "");
    for (let i = 0; i < urls.length; i++) {
        try { const res = await fetch(urls[i]); if (res.ok) return parseLRC(await res.text()); } catch (e) { console.error(e); }
    }
    return [];
}

function autoScaleSongTitle() {
    if (!songTitleEl) return;
    const containerWidth = songTitleEl.parentElement?.clientWidth || window.innerWidth - 80;
    let originalFontSize = 1.4;
    songTitleEl.style.fontSize = originalFontSize + 'rem';
    songTitleEl.style.whiteSpace = 'nowrap';
    songTitleEl.style.overflowX = 'visible';
    let currentFontSize = originalFontSize;
    while (songTitleEl.scrollWidth > containerWidth && currentFontSize > 0.7) {
        currentFontSize -= 0.05;
        songTitleEl.style.fontSize = currentFontSize + 'rem';
    }
    if (songTitleEl.scrollWidth > containerWidth && currentFontSize <= 0.7) {
        songTitleEl.style.whiteSpace = 'normal';
        songTitleEl.style.wordBreak = 'break-word';
        songTitleEl.style.fontSize = '0.75rem';
    } else {
        songTitleEl.style.whiteSpace = 'nowrap';
        songTitleEl.style.overflowX = 'visible';
    }
}

function adjustLyricFontSize(text) {
    if (!lyricDisplay || !lyricContainer) return;
    lyricDisplay.style.transform = 'none';
    lyricDisplay.style.fontSize = '16px';
    lyricDisplay.innerText = text;

    const containerWidth = lyricContainer.clientWidth;
    if (containerWidth <= 0) return;

    const textWidth = lyricDisplay.scrollWidth;

    if (textWidth > containerWidth - 20) {
        const scale = (containerWidth - 20) / textWidth;
        const finalScale = Math.max(scale, 0.5);
        lyricDisplay.style.transform = `scale(${finalScale})`;
        lyricDisplay.style.fontSize = '16px';
    } else {
        lyricDisplay.style.transform = 'none';
        let currentFontSize = 16;
        const maxFontSize = Math.min(20, 16 + (containerWidth - textWidth) / 10);
        while (lyricDisplay.scrollWidth < containerWidth - 30 && currentFontSize < maxFontSize) {
            currentFontSize += 1;
            lyricDisplay.style.fontSize = currentFontSize + 'px';
        }
    }
}

async function loadSong(i) {
    if (isChanging) return;
    isChanging = true;
    index = i;
    const song = songs[index];
    if (songTitleEl) songTitleEl.innerText = song.name;
    autoScaleSongTitle();
    const colors = getRandomPastel();
    document.documentElement.style.setProperty('--bg-color', colors.bg);
    document.documentElement.style.setProperty('--accent-color', colors.accent);
    audio.pause();
    audio.src = song.audio1;
    audio.load();
    lyrics = [];
    lastLyric = "";
    adjustLyricFontSize("ĐANG TẢI LỜI BÀI HÁT...");
    progressBar.style.width = '0%';
    lyrics = await fetchLyricWithFallback(song.lrc1, song.lrc2);
    if (lyrics.length === 0) adjustLyricFontSize("BÀI HÁT TẠM CHƯA CÓ LYRIC NHA HIHI");
    renderPlaylist();
    updateMediaSession();
    if (playlistOverlay.classList.contains('active')) setTimeout(scrollToActiveTop, 100);
    isChanging = false;
}

function changeSong(i, source = 'normal') {
    const newSongName = songs[i].name;
    recordListenWithSource(newSongName, source);
    loadSong(i).then(() => audio.play().catch(() => { }));
}

function selectSongFromList(i) {
    if (playlistOverlay) playlistOverlay.classList.remove('active');
    changeSong(i, 'select');
}

function handleNextAction() {
    let next;
    let source = 'next';
    if (isShuffle) {
        next = getNextShuffleIndex(index);
        source = 'shuffle';
    } else {
        next = (index + 1) % songs.length;
        source = 'next';
    }
    changeSong(next, source);
}

function prevSong() {
    let prev;
    let source = 'prev';
    if (isShuffle) {
        prev = getPrevShuffleIndex(index);
        source = 'shuffle';
    } else {
        prev = (index - 1 + songs.length) % songs.length;
        source = 'prev';
    }
    changeSong(prev, source);
}

function togglePlay() {
    if (audio.paused) audio.play().catch(() => { });
    else audio.pause();
}

audio.onerror = () => {
    const song = songs[index];
    const currentSrc = audio.src;
    if (currentSrc === song.audio1 && song.audio2 && song.audio2.trim() !== "") {
        showToast("ĐANG THỬ LINK DỰ PHÒNG...");
        audio.src = song.audio2;
        audio.load();
        audio.play().catch(e => console.error(e));
    } else showToast("LỖI: KHÔNG THỂ PHÁT BÀI HÁT!");
};

audio.ontimeupdate = () => {
    const cur = audio.currentTime;
    const dur = audio.duration;
    if (dur) {
        progressBar.style.width = (cur / dur * 100) + '%';
        const timeCurrent = document.getElementById('time-current');
        const timeTotal = document.getElementById('time-total');
        if (timeCurrent) timeCurrent.innerText = formatTime(cur);
        if (timeTotal) timeTotal.innerText = formatTime(dur);
    }
    if (lyrics.length > 0) {
        const active = lyrics.findLast(l => cur >= l.time);
        if (active && lastLyric !== active.text) {
            lastLyric = active.text;
            adjustLyricFontSize(active.text);
        }
    }
    if (isRepeatOne && dur && (dur - cur) <= 0.1 && !isLoopingHandled && dur > 0) {
        isLoopingHandled = true;
        audio.currentTime = 0;
        audio.play().catch(e => { setTimeout(() => audio.play(), 20); });
    }
    if (cur > 0 && dur && (dur - cur) > 0.2) isLoopingHandled = false;
};

audio.onended = () => {
    if (isRepeatOne) {
        isLoopingHandled = true;
        const currentSong = songs[index];
        if (currentSong && currentSong.name) {
            recordListenWithSource(currentSong.name, 'loop');
        }
        audio.currentTime = 0;
        setTimeout(() => { audio.play().catch(e => { audio.load(); setTimeout(() => audio.play(), 50); }); }, 10);
    } else { 
        handleNextAction(); 
    }
};

audio.onplay = () => {
    isPlaying = true;
    if (playIcon) playIcon.className = 'fas fa-pause';
    if (art) art.style.animationPlayState = 'running';
    requestWakeLock();
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "playing";
};

audio.onpause = () => {
    isPlaying = false;
    if (playIcon) playIcon.className = 'fas fa-play';
    if (art) art.style.animationPlayState = 'paused';
    releaseWakeLock();
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "paused";
};

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderPlaylist() {
    const list = document.getElementById('playlist-content');
    if (!list) return;
    list.innerHTML = songs.map((s, i) => `<div class="song-item ${i === index ? 'active' : ''}" onclick="window.selectSongFromList(${i})"><div class="flex-1"><div class="item-title text-sm uppercase font-bold break-words pr-2">${escapeHtml(s.name)}</div><div class="text-xs text-gray-500"><i class="fa-regular fa-microphone"></i> XuanKen Official</div></div>${i === index ? '<i class="fa-sharp fa-light fa-face-grin-tongue-squint"></i>' : ''}</div>`).join('');
}

const initIdx = getInitialShuffleIndex();
index = initIdx;

if (hint) hint.onclick = () => { hint.style.display = 'none'; changeSong(index, 'normal'); };

const playPauseBtn = document.getElementById('play-pause-btn');
if (playPauseBtn) playPauseBtn.onclick = togglePlay;

const nextBtn = document.getElementById('next-btn');
if (nextBtn) nextBtn.onclick = handleNextAction;

const prevBtn = document.getElementById('prev-btn');
if (prevBtn) prevBtn.onclick = prevSong;

const listBtn = document.getElementById('list-btn');
if (listBtn) {
    listBtn.onclick = (e) => { e.stopPropagation(); renderPlaylist(); if (playlistOverlay) playlistOverlay.classList.add('active'); setTimeout(scrollToActiveTop, 150); };
}

const closePlaylistBtn = document.getElementById('close-playlist-btn');
if (closePlaylistBtn && playlistOverlay) closePlaylistBtn.onclick = () => playlistOverlay.classList.remove('active');

if (shuffleBtn) {
    shuffleBtn.onclick = function () {
        isShuffle = !isShuffle;
        this.classList.toggle('active', isShuffle);
        if (isShuffle) {
            resetShuffleState(index);
            showToast("ĐÃ BẬT XÁO TRỘN THÔNG MINH");
        } else {
            showToast("ĐÃ TẮT XÁO TRỘN, PHÁT TUẦN TỰ");
        }
    };
}

if (repeatBtn) {
    repeatBtn.onclick = function () {
        isRepeatOne = !isRepeatOne;
        this.classList.toggle('active', isRepeatOne);
        isLoopingHandled = false;
        showToast(isRepeatOne ? "BẠN ĐÃ BẬT LẶP LẠI 1 BÀI" : "BẠN ĐÃ TẮT LẶP LẠI");
    };
}

const progressArea = document.getElementById('progress-area');
if (progressArea) {
    progressArea.onclick = (e) => {
        if (!audio.duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
    };
}

let sleepTimerId = null;
let countdownInterval = null;
let remainSeconds = 0;

const timerModal = document.getElementById('timer-modal');
const timerOverlay = document.getElementById('timer-overlay');
const openTimerBtn = document.getElementById('open-timer-btn');
const startTimerBtn = document.getElementById('start-timer-btn');
const cancelTimerBtn = document.getElementById('cancel-timer-btn');
const timerMinutesInput = document.getElementById('timer-minutes');
const timerStatus = document.getElementById('timer-status');
const closeTimerModalBtn = document.getElementById('close-timer-modal');
const presetBtns = document.querySelectorAll('.timer-preset');

function toggleTimerModal() {
    if (!timerModal || !timerOverlay) return;
    if (timerModal.classList.contains('show')) {
        timerModal.classList.remove('show');
        timerOverlay.classList.remove('show');
        setTimeout(() => { if (!timerModal.classList.contains('show')) timerOverlay.style.display = 'none'; }, 300);
    } else {
        timerOverlay.style.display = 'block';
        void timerOverlay.offsetHeight;
        timerOverlay.classList.add('show');
        timerModal.classList.add('show');
    }
}

function cancelTimer() {
    if (sleepTimerId) { clearTimeout(sleepTimerId); sleepTimerId = null; }
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    remainSeconds = 0;
    if (timerStatus) timerStatus.innerHTML = 'BẠN CHƯA ĐẶT HẸN GIỜ';
    if (openTimerBtn) openTimerBtn.classList.remove('active');
}

function updateTimerDisplay() {
    if (remainSeconds > 0) {
        const mins = Math.floor(remainSeconds / 60);
        const secs = remainSeconds % 60;
        if (timerStatus) timerStatus.innerHTML = `TẮT SAU: <strong>${mins}</strong> PHÚT <strong>${secs}</strong> GIÂY`;
        if (openTimerBtn) openTimerBtn.classList.add('active');
    } else {
        if (timerStatus) timerStatus.innerHTML = 'BẠN CHƯA ĐẶT HẸN GIỜ';
        if (openTimerBtn) openTimerBtn.classList.remove('active');
    }
}

function startCountdown(seconds) {
    if (countdownInterval) clearInterval(countdownInterval);
    remainSeconds = seconds;
    updateTimerDisplay();
    countdownInterval = setInterval(() => {
        if (remainSeconds <= 1) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            if (sleepTimerId) { clearTimeout(sleepTimerId); sleepTimerId = null; }
            if (audio && !audio.paused) audio.pause();
            showToast('ĐÃ TỰ ĐỘNG TẮT NHẠC THEO HẸN GIỜ!');
            if (timerStatus) timerStatus.innerHTML = 'ĐÃ TẮT NHẠC';
            if (openTimerBtn) openTimerBtn.classList.remove('active');
        } else {
            remainSeconds--;
            updateTimerDisplay();
        }
    }, 1000);
}

window.setTimer = function(minutes) {
    if (!minutes || minutes <= 0) { showToast('VUI LÒNG NHẬP SỐ PHÚT HỢP LỆ!'); return; }
    cancelTimer();
    const seconds = minutes * 60;
    sleepTimerId = setTimeout(() => {
        if (audio && !audio.paused) audio.pause();
        if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
        showToast('ĐÃ TỰ ĐỘNG TẮT NHẠC THEO HẸN GIỜ!');
        if (timerStatus) timerStatus.innerHTML = 'ĐÃ TẮT NHẠC';
        if (openTimerBtn) openTimerBtn.classList.remove('active');
        remainSeconds = 0;
    }, seconds * 1000);
    startCountdown(seconds);
    toggleTimerModal();
    showToast(`ĐÃ HẸN GIỜ TẮT NHẠC SAU ${minutes} PHÚT`);
};

presetBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        let minutes = parseInt(this.getAttribute('data-minutes'));
        if (isNaN(minutes)) {
            const text = this.textContent;
            if (text.includes('30')) minutes = 30;
            else if (text.includes('60')) minutes = 60;
            else if (text.includes('15')) minutes = 15;
            else if (text.includes('90')) minutes = 90;
            else if (text.includes('120')) minutes = 120;
        }
        if (minutes > 0) {
            if (timerMinutesInput) timerMinutesInput.value = minutes;
            window.setTimer(minutes);
        } else { showToast('KHÔNG XÁC ĐỊNH ĐƯỢC SỐ PHÚT'); }
    });
});

if (openTimerBtn) openTimerBtn.onclick = toggleTimerModal;
if (closeTimerModalBtn) closeTimerModalBtn.onclick = toggleTimerModal;
if (timerOverlay) timerOverlay.onclick = toggleTimerModal;
if (startTimerBtn) {
    startTimerBtn.onclick = () => {
        const mins = parseInt(timerMinutesInput?.value);
        if (!isNaN(mins) && mins > 0) window.setTimer(mins);
        else showToast('VUI LÒNG NHẬP SỐ PHÚT HỢP LỆ!');
    };
}
if (cancelTimerBtn) {
    cancelTimerBtn.onclick = () => { cancelTimer(); showToast('ĐÃ HUỶ HẸN GIỜ TẮT NHẠC'); toggleTimerModal(); };
}
if (timerModal) timerModal.addEventListener('click', (e) => e.stopPropagation());

const observer = new ResizeObserver(() => autoScaleSongTitle());
if (songTitleEl) observer.observe(songTitleEl.parentElement);
window.addEventListener('resize', () => autoScaleSongTitle());
document.addEventListener('visibilitychange', async () => { if (document.visibilityState === 'visible' && !audio.paused) await requestWakeLock(); });

window.onload = () => {
    isShuffle = true;
    if (shuffleBtn) shuffleBtn.classList.add('active');
    renderPlaylist();
    autoScaleSongTitle();
    if ('mediaSession' in navigator) updateMediaSession();
    fetchListenData();
};

window.onresize = () => {
    if (lastLyric) adjustLyricFontSize(lastLyric);
    autoScaleSongTitle();
};

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function loadTheme() {
    const savedTheme = localStorage.getItem('xuanken_theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        document.body.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fal fa-moon';
    } else {
        document.body.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fal fa-sun';
    }
}

function toggleTheme() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        localStorage.setItem('xuanken_theme', 'light');
        if (themeIcon) themeIcon.className = 'fal fa-sun';
        showToast('ĐÃ CHUYỂN SANG GIAO DIỆN SÁNG');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('xuanken_theme', 'dark');
        if (themeIcon) themeIcon.className = 'fal fa-moon';
        showToast('ĐÃ CHUYỂN SANG GIAO DIỆN TỐI');
    }
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
loadTheme();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('xuanken_theme');
    if (!savedTheme) {
        if (e.matches) { document.body.classList.add('dark'); if (themeIcon) themeIcon.className = 'fal fa-moon'; }
        else { document.body.classList.remove('dark'); if (themeIcon) themeIcon.className = 'fal fa-sun'; }
    }
});

const listenCountBtn = document.getElementById('listen-count-btn');
if (listenCountBtn) {
    listenCountBtn.onclick = (e) => { 
        e.stopPropagation(); 
        showListenStats(); 
    };
}

const originalChangeSong = changeSong;
changeSong = function(i, source = 'normal') {
    originalChangeSong(i, source);
    setTimeout(() => {
        updateCurrentSongHighlightAndScroll();
        updateListenStatsModal();
    }, 100);
};

const observerForModal = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const modal = document.getElementById('listen-stats-modal');
            if (modal && modal.classList.contains('show')) {
                setTimeout(() => {
                    scrollToCurrentListenSong();
                }, 200);
            }
        }
    });
});

const modalElement = document.getElementById('listen-stats-modal');
if (modalElement) {
    observerForModal.observe(modalElement, { attributes: true });
}

setInterval(fetchListenData, 30000);

window.adjustLyricFontSize = adjustLyricFontSize;
window.selectSongFromList = selectSongFromList;
