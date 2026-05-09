const songs = [
    {
        name: "Ngày Em Vu Quy",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/NGAYEMVUQUY-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/2ix1ns96v8qc26fyizvm7/NGAYEMVUQUY-XUANKEN.mp3?rlkey=hw5ro0z9pgg4qua16ys6ofrtk&st=st9ckyf3&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/NGAYEMVUQUY-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/vd8p2aztg2oqgwvan49nh/NGAYEMVUQUY-LYRIC.lrc?rlkey=e80y122dz8ge8y60tz0e12fry&st=plt9z1sw&dl=0"
    },
    {
        name: "Thất Tình & Làm Bạn Anh Nhé",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/THATTINHLAMBANANHNHE-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/g4k5j0x9j0bbfvt3eta9t/THATTINHLAMBANANHNHE-XUANKEN.mp3?rlkey=h1s2unsb9n0ii3poub0eu43u6&st=dbwmvk8z&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/THATTINHLAMBANANHNHE-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/6bm5qyx5t5a7fq6n68p3r/THATTINHLAMBANANHNHE-LYRIC.lrc?rlkey=3hop1nkywgwso083mdwltv7z2&st=o8nh6zok&dl=0"
    },
    {
        name: "Quên Nhau Đi Nhé",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/QUENNHAUDINHE-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/y7oitkaozlf1tk1bp2lh1/QUENNHAUDINHE-XUANKEN.mp3?rlkey=y3pb2acbc5db4rgnkzdmu3bb3&st=8c1hu39q&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/QUENNHAUDINHE-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/58jy9lgo054nhgybeowpu/QUENNHAUDINHE-LYRIC.lrc?rlkey=sdsf40n4a0nddbhqpctgb2ob0&st=8ckarrkq&dl=0"
    },
    {
        name: "Ánh Mắt Em",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/ANHMATEM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/bjxmvn0nk43h81w1y6r8a/ANHMATEM-XUANKEN.mp3?rlkey=4tzanju49d63qkc27cdziu51g&st=mvrnng6s&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/ANHMATEM-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/re28enq6huuyhkibdyxq6/ANHMATEM-LYRIC.lrc?rlkey=5t87c99zogg7q5a3ugss02n0u&st=fnfjr5zq&dl=0"
    },
    {
        name: "Để Em Bên Người Khác",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/DEEMBENNGUOIKHAC-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/bco0g3mdeiwrjsmyqsyv6/DEEMBENNGUOIKHAC-XUANKEN.mp3?rlkey=9gto06vls3tcnc92mn050qex2&st=042c9xjv&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/DEEMBENNGUOIKHAC-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/sdw6mh5s2jbo4fmv5sjqr/DEEMBENNGUOIKHAC-LYRIC.lrc?rlkey=9ztqriimvtc3dp2x9kh536ayu&st=j0wuhpoh&dl=0"
    },
    {
        name: "Người Ở Lại Trong Tim",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/NGUOIOLAITRONGTIM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/glwck81hgjka16k9q183l/NGUOIOLAITRONGTIM-XUANKEN.mp3?rlkey=i3p7j7tr4dkpzfpo1oyz0z79h&st=mrzm37ux&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/NGUOIOLAITRONGTIM-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/nk7f9jnzixbckjxur6wiw/NGUOIOLAITRONGTIM-LYRIC.lrc?rlkey=ftjbip4j30voaiyptthhkq4hn&st=uz38oyzp&dl=0"
    },
    {
        name: "Dính Em Mất Rồi",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/DINHEMMATROI-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/cfqtazmwwi5uetvuz8sgk/DINHEMMATROI-XUANKEN.mp3?rlkey=k48q2oh8gof6da5gkqnp55n1v&st=6jssy0zf&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/DINHEMMATROI-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/l34neac0q9979eba51trr/DINHEMMATROI-LYRIC.lrc?rlkey=c14ci8ghv3ukslx30ngso68be&st=8xrbs75m&dl=0"
    },
    {
        name: "Sau Cơn Mưa Là Nỗi Nhớ",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/SAUCONMUALANOINHO-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/ybt4ie8n1rkvodpzanz37/SAUCONMUALANOINHO-XUANKEN.mp3?rlkey=hqqplne8gn0pz5mpbo464m9sw&st=57lmttit&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/SAUCONMUALANOINHO-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/qh2y72mmiazu8zg81490p/SAUCONMUALANOINHO-LYRIC.lrc?rlkey=z1mtyfuta0jv2j16fypkfh8za&st=3ulsx4em&dl=0"
    },
    {
        name: "Người Ở Lại Giữa Mưa",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/NGUOIOLAIGIUAMUA-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/g4x7mxd3q00pntnxgwzp9/NGUOIOLAIGIUAMUA-XUANKEN.mp3?rlkey=s1pe96tibyiwp1eq8krv12t0z&st=g22qdfog&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/NGUOIOLAIGIUAMUA-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/qjseeej3866khpdn5jh3q/NGUOIOLAIGIUAMUA-LYRIC.lrc?rlkey=mqsly2tfhzk3ejlorry7gbxb2&st=u4ajumn2&dl=0"
    },
    {
        name: "Giữa Hai Người Là Cô Đơn",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/GIUAHAINGUOILACODON-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/uv8e3378ffc2vpc4vimc4/GIUAHAINGUOILACODON-XUANKEN.mp3?rlkey=crnbvb9vktzozmt0940ubhusw&st=817tfrhc&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/GIUAHAINGUOILACODON-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/50zvqzbm7qjcc80q4ajv3/GIUAHAINGUOILACODON-LYRIC.lrc?rlkey=rif6162gbidnq1z60kojcl515&st=ch0uu30y&dl=0"
    },
    {
        name: "Chúng Ta Dừng Lại Ở Đây",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/CHUNGTADUNGLAIODAY-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/xf7ctz25m23af8fmpcjdc/CHUNGTADUNGLAIODAY-XUANKEN.mp3?rlkey=62mr2hadwouba3vyts6us548e&st=k7efytfj&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/CHUNGTADUNGLAIODAY-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/zt6uwa21nj4a7rf2yl5yk/CHUNGTADUNGLAIODAY-LYRIC.lrc?rlkey=1tdkw5gllx62rddklruznn0xf&st=2tkdiozi&dl=0"
    },
    {
        name: "Đến Cuối Vẫn Là Anh",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/DENCUOIVANLAANH-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/k1df0ha02l6cu7zj71ez0/DENCUOIVANLAANH-XUANKEN.mp3?rlkey=51o310ybx6oooatdw4fyc2y1e&st=kanurgew&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/DENCUOIVANLANH-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/owe5ld6aghuml5gejonxh/DENCUOIVANLANH-LYRIC.lrc?rlkey=gghijpfo7ijmvnzki5j33celt&st=iwwwc0fe&dl=0"
    },
    {
        name: "Về Quảng Ninh Với Tôi",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/VEQUANGNINHVOITOI-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/f306jvn3vl4p5cwygptdu/VEQUANGNINHVOITOI-XUANKEN.mp3?rlkey=36e07p5u5olykp6u3ygdzwtbf&st=fqgorzn7&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/VEQUANGNINHVOITOI-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/yjeve4nfqbvpos32vnztd/VEQUANGNINHVOITOI-LYRIC.lrc?rlkey=mwck80s4qzbjoukcmlsdblzsj&st=108lsdsf&dl=0"
    },
    {
        name: "Anh Yêu Em Sai Thời Điểm",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/ANHYEUEMSAITHOIDIEM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/4i6cgievzz4iv63p9maze/ANHYEUEMSAITHOIDIEM-XUANKEN.mp3?rlkey=2akpj5xnjg9q2gi2pqosabm81&st=lkr9n1i5&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/ANHYEUEMSAITHOIDIEM-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Đợi Chờ Trong Hạnh Phúc",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/DOICHOTRONGHANHPHUC-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/i6knkkziozjb96llznl5x/DOICHOTRONGHANHPHUC-XUANKEN.mp3?rlkey=jn2bc2nou1kq9p61gpddtw9cx&st=w8o50bm3&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/DOICHOTRONGHANHPHUC-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Em Chỉ Là Bạn Thân",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/EMCHILABANTHAN-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/g4wy0ph5xbw1xe6jiloxs/EMCHILABANTHAN-XUANKEN.mp3?rlkey=1nvjs671dua8vs5998j0l5u9e&st=hmcwhswl&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/EMCHILABANTHAN-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Khi",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/KHI-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/zhpyu4foriy96avkvtx5t/KHI-XUANKEN.mp3?rlkey=3a3tqb62axoqwnszc340j3c11&st=pmyh4n6c&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/KHI-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Chuyến Tàu Ly Biệt (Version 1)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/CHUYENTAULYBIETV1-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/itwl4qmf52swpx16zpuiw/CHUYENTAULYBIETV1-XUANKEN.mp3?rlkey=uug7me80pghelshev8alzy1mr&st=yhg50rjx&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/CHUYENTAULYBIETV1-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Chuyến Tàu Ly Biệt (Version 2)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/CHUYENTAULYBIETV2-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/6si135ztin6lcxiaxjthn/CHUYENTAULYBIETV2-XUANKEN.mp3?rlkey=g0hnxr8pbemyv782edmeuvxhb&st=rzq1ianv&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/CHUYENTAULYBIETV2-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "50 Năm Về Sau",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/50NAMVESAU-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/gx7lmver0no1ds2fg7xq3/50NAMVESAU-XUANKEN.mp3?rlkey=o3hrdj1nfkmts6nyll9gr6m8e&st=c3juscsq&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/50NAMVESAU-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Phố Cũ Còn Em",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/PHOCUCONEM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/8dn5wczn5kywxwaael7hq/PHOCUCONEM-XUANKEN.mp3?rlkey=rtzxbgzwldj1xtb0qs8j5jq80&st=ek29uf7s&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/PHOCUCONEM-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Phố Cũ Còn Anh",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/PHOCUCONANH-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/ecd36mpc0fwln8uayf1ob/PHOCUCONANH-XUANKEN.mp3?rlkey=a6cgjphx3k835fj0bsez7q0n0&st=thwtxs8o&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/PHOCUCONANH-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Người Không Ở Lại",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/NGUOIKHONGOLAI-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/8abmzuqfakf6fbdkg24hf/NGUOIKHONGOLAI-XUANKEN.mp3?rlkey=070shp3aupj7c279ohptidcqj&st=oox5m476&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/NGUOIKHONGOLAI-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/tn7hynsb1hi2galaid4cq/NGUOIKHONGOLAI-LYRIC.lrc?rlkey=za2vc3txmkxlqjqw16dkdp9hv&st=gyzupiuo&dl=0"
    },
    {
        name: "Mở Lòng Vì Ai",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/MOLONGVIAI-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/2zd1wjb03tb3k3ba0z3ds/MOLONGVIAI-XUANKEN.mp3?rlkey=6fauh5zswmdgf1zojg8ktoo4w&st=ap5i0b5z&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/MOLONGVIAI-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Anh Thua Anh Ta",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/ANHTHUAANHTA-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/ks07aijjdbrhig5emukf2/ANHTHUAANHTA-XUANKEN.mp3?rlkey=e99e54mwuq8371pot2bqtonuv&st=oeebbrr1&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/ANHTHUAANHTA-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Có Chút Ngọt Ngào (Version Nữ)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/COCHUTNGOTNGAONU-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/jj0rfg3hgn29kan17yw3d/COCHUTNGOTNGAONU-XUANKEN.mp3?rlkey=sl25xj6o977i4ec9r12hfsfon&st=8j4svwjf&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/COCHUTNGOTNGAONU-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Có Chút Ngọt Ngào (Version Nam)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/COCHUTNGOTNGAONAM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/ia8dyq8rsc98fikfce0zr/COCHUTNGOTNGAONAM-XUANKEN.mp3?rlkey=6zknjbdoglz86pga5k2zy45wz&st=e2hjfkdg&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/COCHUTNGOTNGAONAM-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Bên Tách Trà Thơm (Version Nữ)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/BENTACHTRATHOMNU-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/xmvov370ukauo6onn1gf2/BENTACHTRATHOMNU-XUANKEN.mp3?rlkey=zfuts0yscqqvts6v7s7g0xqv8&st=9ojbt0lw&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/BENTACHTRATHOMNU-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/ulqccle4hse176qc747pj/BENTACHTRATHOMNU-LYRIC.lrc?rlkey=yanwbm67t0pxur4hgosw6klvp&st=xm8t9vcv&dl=0"
    },
    {
        name: "Bên Tách Trà Thơm (Version Nam)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/BENTACHTRATHOMNAM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/am7ldgzplcftj3y27lnod/BENTACHTRATHOMNAM-XUANKEN.mp3?rlkey=et4mpw2qixg2ve7dzsw4k3dlt&st=y2g4vw76&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/BENTACHTRATHOMNAM-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/8w2l5akni8rvqtn1vlljk/BENTACHTRATHOMNAM-LYRIC.lrc?rlkey=yt8a0sdi0uo7ywhjrmel48euz&st=wzntz7xo&dl=0"
    },
    {
        name: "Cảm Ơn Nhé",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/CAMONNHE-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/8nippzv9z1tpz8cyg3ut0/CAMONNHE-XUANKEN.mp3?rlkey=p2mbpeguwmyoeyqmvh0nqey9g&st=bav6msre&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/CAMONNHE-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Sau Lời Hứa",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/SAULOIHUA-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/qiduzyfsjh7vvgvhgpdo4/SAULOIHUA-XUANKEN.mp3?rlkey=gov4w3tm22y5xdnin806niyc7&st=vy0hfcl1&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/SAULOIHUA-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/tiunqs1qhabr74w3bz4th/SAULOIHUA-LYRIC.lrc?rlkey=ynkwurnc3kltl30g442fwfcmb&st=ozlkxqj5&dl=0"
    },
    {
        name: "Tình Khuyết",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/TINHKHUYET-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/ci7itof2vac38n6u28bti/TINHKHUYET-XUANKEN.mp3?rlkey=r7cxbmpd952r0xy7y41r5b0cw&st=twj1m549&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/TINHKHUYET-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Ngồi Bên Em",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/NGOIBENEM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/s8vomb8b9qkb4pxo05lkw/NGOIBENEM-XUANKEN.mp3?rlkey=ckrqm58my2zx30jtoh74016nr&st=174y8syy&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/NGOIBENEM-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Tiêu Dao Tuyệt Nhất",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/TIEUDAOTUYETNHAT-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/ld980diejeofykttnxkoo/TIEUDAOTUYETNHAT-XUANKEN.mp3?rlkey=36rqkvzjra48zjul5mwqapxmu&st=10rmgfd3&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/TIEUDAOTUYETNHAT-LYRIC.lrc",
        lrc2: ""
    }
];

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
    toast.innerText = msg;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 3000);
}

function getRandomPastel() {
    const h = Math.floor(Math.random() * 360);
    return { bg: `hsl(${h}, 70%, 94%)`, accent: `hsl(${h}, 60%, 40%)` };
}

function scrollToActiveTop() {
    const activeItem = document.querySelector('.song-item.active');
    if (activeItem) {
        const headerHeight = playlistHeader.offsetHeight;
        const targetScroll = activeItem.offsetTop - headerHeight;
        playlistOverlay.scrollTop = targetScroll;
    }
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
    songTitleEl.style.overflowX = 'auto';
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
        songTitleEl.style.overflowX = 'auto';
    }
}

function adjustLyricFontSize(text) {
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
    songTitleEl.innerText = song.name;
    autoScaleSongTitle();
    const colors = getRandomPastel();
    document.documentElement.style.setProperty('--bg-color', colors.bg);
    document.documentElement.style.setProperty('--accent-color', colors.accent);
    audio.pause();
    audio.src = song.audio1;
    audio.load();
    lyrics = [];
    lastLyric = "";
    adjustLyricFontSize("Đang tải lời bài hát...");
    progressBar.style.width = '0%';
    lyrics = await fetchLyricWithFallback(song.lrc1, song.lrc2);
    if (lyrics.length === 0) adjustLyricFontSize("🎤 XuanKen Official 🎤");
    renderPlaylist();
    updateMediaSession();
    if (playlistOverlay.classList.contains('active')) setTimeout(scrollToActiveTop, 100);
    isChanging = false;
}

function changeSong(i) {
    loadSong(i).then(() => audio.play().catch(() => { }));
}

function selectSongFromList(i) {
    playlistOverlay.classList.remove('active');
    changeSong(i);
}

function handleNextAction() {
    if (isRepeatOne) {
        audio.currentTime = 0;
        audio.play().catch(e => { setTimeout(() => audio.play(), 50); });
    } else {
        let next;
        if (isShuffle) {
            next = getNextShuffleIndex(index);
        } else {
            next = (index + 1) % songs.length;
        }
        changeSong(next);
    }
}

function prevSong() {
    if (isRepeatOne) {
        audio.currentTime = 0;
        audio.play().catch(() => { });
        return;
    }
    let prev;
    if (isShuffle) {
        prev = getPrevShuffleIndex(index);
    } else {
        prev = (index - 1 + songs.length) % songs.length;
    }
    changeSong(prev);
}

function togglePlay() {
    if (audio.paused) audio.play().catch(() => { });
    else audio.pause();
}

audio.onerror = () => {
    const song = songs[index];
    const currentSrc = audio.src;
    if (currentSrc === song.audio1 && song.audio2 && song.audio2.trim() !== "") {
        showToast("Đang thử link dự phòng...");
        audio.src = song.audio2;
        audio.load();
        audio.play().catch(e => console.error(e));
    } else showToast("Lỗi: Không thể phát bài hát!");
};

audio.ontimeupdate = () => {
    const cur = audio.currentTime;
    const dur = audio.duration;
    if (dur) {
        progressBar.style.width = (cur / dur * 100) + '%';
        document.getElementById('time-current').innerText = formatTime(cur);
        document.getElementById('time-total').innerText = formatTime(dur);
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
        audio.currentTime = 0;
        setTimeout(() => { audio.play().catch(e => { audio.load(); setTimeout(() => audio.play(), 50); }); }, 10);
    } else { handleNextAction(); }
};

audio.onplay = () => {
    isPlaying = true;
    playIcon.className = 'fas fa-pause';
    art.style.animationPlayState = 'running';
    requestWakeLock();
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = "playing";
};

audio.onpause = () => {
    isPlaying = false;
    playIcon.className = 'fas fa-play';
    art.style.animationPlayState = 'paused';
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
    list.innerHTML = songs.map((s, i) => `<div class="song-item ${i === index ? 'active' : ''}" onclick="selectSongFromList(${i})"><div class="flex-1"><div class="item-title text-sm uppercase font-bold break-words pr-2">${escapeHtml(s.name)}</div><div class="text-xs text-gray-500"><i class="fas fa-microphone-alt"></i> XuanKen Official</div></div>${i === index ? '<i class="fas fa-music text-xs text-black"></i>' : ''}</div>`).join('');
}

const initIdx = getInitialShuffleIndex();
index = initIdx;

hint.onclick = () => { hint.style.display = 'none'; changeSong(index); };
document.getElementById('play-pause-btn').onclick = togglePlay;
document.getElementById('next-btn').onclick = handleNextAction;
document.getElementById('prev-btn').onclick = prevSong;
document.getElementById('list-btn').onclick = (e) => { e.stopPropagation(); renderPlaylist(); playlistOverlay.classList.add('active'); setTimeout(scrollToActiveTop, 150); };
document.getElementById('close-playlist-btn').onclick = () => playlistOverlay.classList.remove('active');

shuffleBtn.onclick = function () {
    isShuffle = !isShuffle;
    this.classList.toggle('active', isShuffle);
    if (isShuffle) {
        resetShuffleState(index);
        showToast("🔀 Đã bật xáo trộn thông minh");
    } else {
        showToast("➡️ Đã tắt xáo trộn, phát tuần tự");
    }
};

repeatBtn.onclick = function () {
    isRepeatOne = !isRepeatOne;
    this.classList.toggle('active', isRepeatOne);
    isLoopingHandled = false;
    showToast(isRepeatOne ? "🔁 Đã bật lặp lại 1 bài" : "➡️ Đã tắt lặp lại");
};

document.getElementById('progress-area').onclick = (e) => {
    if (!audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
};

let sleepTimerId = null, remain = 0;
const openTimerBtn = document.getElementById('open-timer-btn');
const timerModal = document.getElementById('timer-modal');
const timerOverlay = document.getElementById('timer-overlay');
const timerStatus = document.getElementById('timer-status');
const timerInput = document.getElementById('timer-minutes');
const startTimerBtn = document.getElementById('start-timer-btn');
const cancelTimerBtn = document.getElementById('cancel-timer-btn');
const closeTimerBtn = document.getElementById('close-timer-modal');

function toggleTimerModal() {
    if (timerModal.classList.contains('show')) {
        timerModal.classList.remove('show');
        setTimeout(() => timerOverlay.style.display = 'none', 300);
    } else {
        timerOverlay.style.display = 'block';
        setTimeout(() => timerModal.classList.add('show'), 10);
    }
}

function setTimer() {
    const mins = parseInt(timerInput.value);
    if (!mins || mins <= 0) {
        showToast("Vui lòng nhập số phút hợp lệ!");
        return;
    }
    cancelTimer();
    remain = mins * 60;
    updateTimerUI();
    sleepTimerId = setInterval(() => {
        remain--;
        updateTimerUI();
        if (remain <= 0) {
            audio.pause();
            cancelTimer();
            showToast("⏰ Đã tự động tắt nhạc theo hẹn giờ!");
        }
    }, 1000);
    toggleTimerModal();
    openTimerBtn.classList.add('active');
    showToast(`⏰ Đã hẹn giờ tắt nhạc sau ${mins} phút.`);
}

function cancelTimer() {
    if (sleepTimerId) clearInterval(sleepTimerId);
    sleepTimerId = null;
    remain = 0;
    timerStatus.innerText = "Chưa đặt hẹn giờ";
    openTimerBtn.classList.remove('active');
}

function updateTimerUI() {
    if (remain > 0) {
        const m = Math.floor(remain / 60);
        const s = remain % 60;
        timerStatus.innerText = `Sẽ tắt sau: ${m} phút ${s} giây`;
    }
}

openTimerBtn.onclick = toggleTimerModal;
closeTimerBtn.onclick = toggleTimerModal;
timerOverlay.onclick = toggleTimerModal;
startTimerBtn.onclick = setTimer;
cancelTimerBtn.onclick = () => { cancelTimer(); showToast("Đã hủy hẹn giờ tắt nhạc."); };

const observer = new ResizeObserver(() => autoScaleSongTitle());
if (songTitleEl) observer.observe(songTitleEl.parentElement);
window.addEventListener('resize', () => autoScaleSongTitle());
document.addEventListener('visibilitychange', async () => { if (document.visibilityState === 'visible' && !audio.paused) await requestWakeLock(); });

window.onload = () => {
    isShuffle = true;
    shuffleBtn.classList.add('active');
    renderPlaylist();
    autoScaleSongTitle();
    if ('mediaSession' in navigator) updateMediaSession();
};

window.onresize = () => {
    if (lastLyric) adjustLyricFontSize(lastLyric);
    autoScaleSongTitle();
};

window.selectSongFromList = selectSongFromList;
