/*
lrc: dropbox.com
storage: archive.org
storage: dropbox.com
storage: github.com
author: by XuanKen
creat year: 2021-2022-2023-2024-2025-2026
website 1: karaokenb.ga
website 2: nhacbuon.tk
website 3: clipnb.ga
*/
const ap = new APlayer({
    container: document.getElementById('xuankenofficialplayer'),
    mini: false,
    lrcType: 3,
    loop: 'all',
    order: 'random',
    preload: 'metadata',
    listFolded: true,
    listMaxHeight: 660,
    showlrc: true,
    volume: 100,
    autoplay: true,
    audio: [
        {
            name: 'Ngày Em Vu Quy',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/NGAYEMVUQUY-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/NGAYEMVUQUY-LYRIC.lrc',
            theme: '#42462e',
        },
        {
            name: 'Thất Tình & Làm Bạn Anh Nhé',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/THATTINHLAMBANANHNHE-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/THATTINHLAMBANANHNHE-LYRIC.lrc',
            theme: '#8f3158',
        },
        {
            name: 'Quên Nhau Đi Nhé',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/QUENNHAUDINHE-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/QUENNHAUDINHE-LYRIC.lrc',
            theme: '#9ff2d3',
        },
        {
            name: 'Ánh Mắt Em',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/ANHMATEM-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/ANHMATEM-LYRIC.lrc',
            theme: '#5f58d2',
        },
        {
            name: 'Để Em Bên Người Khác',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/DEEMBENNGUOIKHAC-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/DEEMBENNGUOIKHAC-LYRIC.lrc',
            theme: '#4ff951',
        },
        {
            name: 'Người Ở Lại Trong Tim',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/NGUOIOLAITRONGTIM-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/NGUOIOLAITRONGTIM-LYRIC.lrc',
            theme: '#8fe245',
        },
        {
            name: 'Dính Em Mất Rồi',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/DINHEMMATROI-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/DINHEMMATROI-LYRIC.lrc',
            theme: '#fcc812',
        },
        {
            name: 'Sau Cơn Mưa Là Nỗi Nhớ',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/SAUCONMUALANOINHO-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/SAUCONMUALANOINHO-LYRIC.lrc',
            theme: '#2ac35b',
        },
        {
            name: 'Người Ở Lại Giữa Mưa',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/NGUOIOLAIGIUAMUA-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/NGUOIOLAIGIUAMUA-LYRIC.lrc',
            theme: '#db3642',
        },
        {
            name: 'Giữa Hai Người Là Cô Đơn',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/GIUAHAINGUOILACODON-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/GIUAHAINGUOILACODON-LYRIC.lrc',
            theme: '#1a760e',
        },
        {
            name: 'Chúng Ta Dừng Lại Ở Đây',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/CHUNGTADUNGLAIODAY-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/CHUNGTADUNGLAIODAY-LYRIC.lrc',
            theme: '#667116',
        },
        {
            name: 'Đến Cuối Vẫn Là Anh',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/DENCUOIVANLAANH-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/DENCUOIVANLANH-LYRIC.lrc',
            theme: '#3e5714',
        },
        {
            name: 'Về Quảng Ninh Với Tôi',
            artist: 'XuanKen',
            url: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/musicofficial/VEQUANGNINHVOITOI-XUANKEN.mp3',
            cover: 'https://github.com/nokiapro/xuankenofficial/raw/refs/heads/main/logoofficial.png',
            lrc: 'https://raw.githubusercontent.com/nokiapro/xuankenofficial/refs/heads/main/lyric/VEQUANGNINHVOITOI-LYRIC.lrc',
            theme: '#a93dcb',
        },
    ]
});
