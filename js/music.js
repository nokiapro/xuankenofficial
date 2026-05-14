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
        name: "Phố Cũ Còn Em (Version Nam)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/PHOCUCONEM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/8dn5wczn5kywxwaael7hq/PHOCUCONEM-XUANKEN.mp3?rlkey=rtzxbgzwldj1xtb0qs8j5jq80&st=ek29uf7s&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/PHOCUCONEM-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Phố Cũ Còn Anh (Version Nữ)",
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
        name: "Tiêu Dao Tuyệt Nhất (Version Nữ)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/TIEUDAOTUYETNHATNU-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/0tyy5hyl9hkns6cvobb03/TIEUDAOTUYETNHATNU-XUANKEN.mp3?rlkey=9roii9h3gkytex2pnoeksdgqq&st=zdoy5osc&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/TIEUDAOTUYETNHATNU-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Tiêu Dao Tuyệt Nhất (Version Nam)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/TIEUDAOTUYETNHATNAM-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/nh33b9axnj1y96hbhh0a6/TIEUDAOTUYETNHATNAM-XUANKEN.mp3?rlkey=u0zdtwjtb6rqrxkahnmd65kl4&st=3twzmajs&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/TIEUDAOTUYETNHATNAM-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Người Ở Lại Giữa Mưa (Remake)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/NGUOIOLAIGIUAMUAREMAKE-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/xcb88dzoba7jqhdioqr26/NGUOIOLAIGIUAMUAREMAKE-XUANKEN.mp3?rlkey=s64xw2cf1tu1ge6t1nif3fgkh&st=4ak2r3lx&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/NGUOIOLAIGIUAMUAREMAKE-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Sau Cơn Mưa Là Nỗi Nhớ (Remake)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/SAUCONMUALANOINHOREMAKE-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/4nhyf9wfo22zcf8kepvos/SAUCONMUALANOINHOREMAKE-XUANKEN.mp3?rlkey=qnn35aewi5kkbz8iesz6dyyev&st=qzktv3d1&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/SAUCONMUALANOINHOREMAKE-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Giữa Những Ngày Không Em (Remake)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/GIUANHUNGNGAYKHONGEMREMAKE-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/6zuwv2yodirdkjvim82vt/GIUANHUNGNGAYKHONGEMREMAKE-XUANKEN.mp3?rlkey=iherk1r703qn5tqth0trrlc2x&st=0epeuuql&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/GIUANHUNGNGAYKHONGEMREMAKE-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Đến Cuối Vẫn Là Anh (Remake)",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/DENCUOIVANLAANHREMAKE-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/c8hf7evi016i7alew1xz0/DENCUOIVANLAANHREMAKE-XUANKEN.mp3?rlkey=nlnsdomphrlv3ste7xbofhm3u&st=b3l7wdlo&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/DENCUOIVANLAANHREMAKE-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Lo Người Ướt Áo",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/LONGUOIUOTAO-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/m5y2g1dg6zyyyjejvmkab/LONGUOIUOTAO-XUANKEN.mp3?rlkey=dtx7v8qbzz5kwroqb70rxbf8k&st=al9tsqi6&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/LONGUOIUOTAO-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Cầu Vồng Tình Yêu",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/CAUVONGTINHYEU-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/cuei0bsf4ytosz2ylxc4w/CAUVONGTINHYEU-XUANKEN.mp3?rlkey=0kd5k7wmyqxqdm9ke0gamgafu&st=wvyrs5jj&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/CAUVONGTINHYEU-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Mỉm Cười Trông Em Thật Đẹp",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/MIMCUOITRONGEMTHATDEP-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/9o84fhb69n8hf8lvdl4o7/MIMCUOITRONGEMTHATDEP-XUANKEN.mp3?rlkey=z8y7eo5n3gdfkagq0biwptu3x&st=nms6ahbn&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/MIMCUOITRONGEMTHATDEP-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Chúc Em Hạnh Phúc",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/CHUCEMHANHPHUC-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/0h0msp09nb4p3y7emkok6/CHUCEMHANHPHUC-XUANKEN.mp3?rlkey=ajwjfdvotwpnk1c5gos4mbrdm&st=mkqi288c&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/CHUCEMHANHPHUC-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Sinh Nhật Là Phải Vui",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/SINHNHATLAPHAIVUI-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/nsgmll1afh3kv7y9wzcm1/SINHNHATLAPHAIVUI-XUANKEN.mp3?rlkey=f0ko1d7ljwurgywgseuqi7j12&st=c779fwr1&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/SINHNHATLAPHAIVUI-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/kcvy5md9s3unktrdcqb3u/SINHNHATLAPHAIVUI-LYRIC.lrc?rlkey=mtfmy4ojc1hyayck23l68pwek&st=ji3qirzg&dl=0"
    },
    {
        name: "Sau Lời Tạm Biệt",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/SAULOITAMBIET-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/p524zta5w1bgjtvib9m7p/SAULOITAMBIET-XUANKEN.mp3?rlkey=tvmpqbysyztan8p8fc6qh5g7p&st=vo0z8tk1&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/SAULOITAMBIET-LYRIC.lrc",
        lrc2: "https://dl.dropboxusercontent.com/scl/fi/ur3cyl6i7u4c52o1fqyil/SAULOITAMBIET-LYRIC.lrc?rlkey=ws6mpq9vfqtquec85nrnpdfnz&st=5hc55xk2&dl=0"
    },
    {
        name: "Món Quà Vô Giá",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/MONQUAVOGIA-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/fuijf7q8htphn9q4x142t/MONQUAVOGIA-XUANKEN.mp3?rlkey=q6wrw8w2naxqf332lz4u25pee&st=nla1ou45&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/MONQUAVOGIA-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Bay Giữa Ngân Hà",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/BAYGIUANGANHA-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/d40siu3rpo5k50r85jdwj/BAYGIUANGANHA-XUANKEN.mp3?rlkey=xqnqr2vc0yvbltpbyre5z2zfa&st=wvuxajfp&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/BAYGIUANGANHA-LYRIC.lrc",
        lrc2: ""
    },
    {
        name: "Từng Là Thanh Xuân Của Nhau",
        audio1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/musicofficial/TUNGLATHANHXUANCUANHAU-XUANKEN.mp3",
        audio2: "https://dl.dropboxusercontent.com/scl/fi/5q563c9qerc5434o50dwg/TUNGLATHANHXUANCUANHAU-XUANKEN.mp3?rlkey=22c5bqupw97ymipvioe8z3yp0&st=s6wg975g&dl=0",
        lrc1: "https://raw.githubusercontent.com/nokiapro/xuankenofficial/main/lyric/TUNGLATHANHXUANCUANHAU-LYRIC.lrc",
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

function changeSong(i) {
    loadSong(i).then(() => audio.play().catch(() => { }));
}

function selectSongFromList(i) {
    if (playlistOverlay) playlistOverlay.classList.remove('active');
    changeSong(i);
}

function handleNextAction() {
    let next;
    if (isShuffle) {
        next = getNextShuffleIndex(index);
    } else {
        next = (index + 1) % songs.length;
    }
    changeSong(next);
}

function prevSong() {
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

if (hint) hint.onclick = () => { hint.style.display = 'none'; changeSong(index); };

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

const presetBtns = document.querySelectorAll('.timer-preset, .timer-preset-btn');

function toggleTimerModal() {
    if (!timerModal || !timerOverlay) return;
    
    if (timerModal.classList.contains('show')) {
        timerModal.classList.remove('show');
        timerOverlay.classList.remove('show');
        setTimeout(() => {
            if (!timerModal.classList.contains('show')) {
                timerOverlay.style.display = 'none';
            }
        }, 300);
    } else {
        timerOverlay.style.display = 'block';
        void timerOverlay.offsetHeight;
        timerOverlay.classList.add('show');
        timerModal.classList.add('show');
    }
}

function cancelTimer() {
    if (sleepTimerId) {
        clearTimeout(sleepTimerId);
        sleepTimerId = null;
    }
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    remainSeconds = 0;
    if (timerStatus) timerStatus.innerHTML = 'CHƯA ĐẶT HẸN GIỜ';
    if (openTimerBtn) openTimerBtn.classList.remove('active');
}

function updateTimerDisplay() {
    if (remainSeconds > 0) {
        const mins = Math.floor(remainSeconds / 60);
        const secs = remainSeconds % 60;
        if (timerStatus) timerStatus.innerHTML = `TẮT SAU: <strong>${mins}</strong> PHÚT <strong>${secs}</strong> GIÂY`;
        if (openTimerBtn) openTimerBtn.classList.add('active');
    } else {
        if (timerStatus) timerStatus.innerHTML = 'CHƯA ĐẶT HẸN GIỜ';
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
            if (sleepTimerId) {
                clearTimeout(sleepTimerId);
                sleepTimerId = null;
            }
            if (audio && !audio.paused) {
                audio.pause();
            }
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
    if (!minutes || minutes <= 0) {
        showToast('VUI LÒNG NHẬP SỐ PHÚT HỢP LỆ!');
        return;
    }

    cancelTimer();

    const seconds = minutes * 60;

    sleepTimerId = setTimeout(() => {
        if (audio && !audio.paused) {
            audio.pause();
        }
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
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
        } else {
            showToast('KHÔNG XÁC ĐỊNH ĐƯỢC SỐ PHÚT');
        }
    });
});

if (openTimerBtn) openTimerBtn.onclick = toggleTimerModal;
if (closeTimerModalBtn) closeTimerModalBtn.onclick = toggleTimerModal;
if (timerOverlay) timerOverlay.onclick = toggleTimerModal;

if (startTimerBtn) {
    startTimerBtn.onclick = () => {
        const mins = parseInt(timerMinutesInput?.value);
        if (!isNaN(mins) && mins > 0) {
            window.setTimer(mins);
        } else {
            showToast('VUI LÒNG NHẬP SỐ PHÚT HỢP LỆ!');
        }
    };
}

if (cancelTimerBtn) {
    cancelTimerBtn.onclick = () => {
        cancelTimer();
        showToast('ĐÃ HUỶ HẸN GIỜ TẮT NHẠC');
        toggleTimerModal();
    };
}

if (timerModal) {
    timerModal.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

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
        if (themeIcon) {
            themeIcon.className = 'fal fa-moon';
        }
    } else {
        document.body.classList.remove('dark');
        if (themeIcon) {
            themeIcon.className = 'fal fa-sun';
        }
    }
}

function toggleTheme() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        localStorage.setItem('xuanken_theme', 'light');
        if (themeIcon) {
            themeIcon.className = 'fal fa-sun';
        }
        showToast('ĐÃ CHUYỂN SANG GIAO DIỆN SÁNG');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('xuanken_theme', 'dark');
        if (themeIcon) {
            themeIcon.className = 'fal fa-moon';
        }
        showToast('ĐÃ CHUYỂN SANG GIAO DIỆN TỐI');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

loadTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('xuanken_theme');
    if (!savedTheme) {
        if (e.matches) {
            document.body.classList.add('dark');
            if (themeIcon) themeIcon.className = 'fal fa-moon';
        } else {
            document.body.classList.remove('dark');
            if (themeIcon) themeIcon.className = 'fal fa-sun';
        }
    }
});

// ========== HỆ THỐNG ĐẾM LƯỢT NGHE ==========

const GOOGLE_SHEET_API = 'https://script.google.com/macros/s/AKfycbxGoLJOeikvklz3EM137ELiK6a86jioK9o5DFBEXHZvmulQpxKJcTiKe8KL0wPizoeV0Q/exec';
const GOOGLE_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTeZe9vI_OY_nJ0sHiSVUy31z9U-4zClIdkgBZCAiquu8wePVrosqwV-GnSOKTtYJP_pgHt_mtC8Kcm/pub?output=csv';

let listenData = {};
let hasRecordedCurrentSong = false;
let isUpdatingListen = false;

async function fetchListenData() {
    if (isUpdatingListen) return listenData;
    try {
        const response = await fetch(`${GOOGLE_SHEET_API}?action=get&t=${Date.now()}`);
        if (response.ok) {
            listenData = await response.json();
            updateListenBadge();
            updateListenStatsModal();
            return listenData;
        }
    } catch (error) {
        console.log('API error, trying CSV fallback...');
    }
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
            updateListenBadge();
            updateListenStatsModal();
        }
    } catch (error) {
        console.error('Lỗi lấy dữ liệu:', error);
        const saved = localStorage.getItem('xuanken_listens');
        if (saved) {
            listenData = JSON.parse(saved);
            updateListenBadge();
        }
    }
    return listenData;
}

async function incrementListenCount(songName) {
    if (!songName || hasRecordedCurrentSong || isUpdatingListen) return false;
    hasRecordedCurrentSong = true;
    isUpdatingListen = true;
    try {
        const response = await fetch(`${GOOGLE_SHEET_API}?action=increment&song=${encodeURIComponent(songName)}`);
        const result = await response.json();
        if (result.success) {
            listenData[songName] = result.count;
            updateListenBadge();
            updateListenStatsModal();
            localStorage.setItem('xuanken_listens', JSON.stringify(listenData));
            console.log(`📊 Đã ghi nhận lượt nghe: ${songName} - ${result.count}`);
        }
    } catch (error) {
        console.error('Lỗi tăng lượt nghe:', error);
        if (!listenData[songName]) listenData[songName] = 0;
        listenData[songName]++;
        localStorage.setItem('xuanken_listens', JSON.stringify(listenData));
        updateListenBadge();
    } finally {
        isUpdatingListen = false;
    }
    return false;
}

function updateListenBadge() {
    const badge = document.getElementById('listen-count-badge');
    if (badge && listenData) {
        const total = Object.values(listenData).reduce((a, b) => a + b, 0);
        if (total >= 1000000) badge.textContent = (total / 1000000).toFixed(1) + 'M';
        else if (total >= 1000) badge.textContent = (total / 1000).toFixed(1) + 'K';
        else badge.textContent = total;
    }
}

function showListenStats() {
    let modal = document.getElementById('listen-stats-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'listen-stats-modal';
        modal.className = 'listen-modal';
        modal.innerHTML = `
            <div class="listen-modal-header">
                <div class="close-listen" id="close-listen-modal">
                    <i class="fas fa-times"></i>
                </div>
                <div class="listen-title"><i class="fal fa-headphones"></i> THỐNG KÊ LƯỢT NGHE <i class="fal fa-headphones"></i></div>
                <div style="width: 40px;"></div>
            </div>
            <div class="listen-stats" id="listen-stats-content">
                <div style="text-align:center;padding:40px">Đang tải dữ liệu...</div>
            </div>
            <div class="listen-total" id="listen-total-stats"></div>
        `;
        
        const playerContainer = document.querySelector('.player-container');
        if (playerContainer) {
            playerContainer.appendChild(modal);
        } else {
            document.body.appendChild(modal);
        }
        
        const closeBtn = document.getElementById('close-listen-modal');
        if (closeBtn) {
            closeBtn.onclick = () => {
                modal.classList.remove('show');
            };
        }
    }
    
    updateListenStatsModal();
    modal.classList.add('show');
}

function updateListenStatsModal() {
    const container = document.getElementById('listen-stats-content');
    const totalContainer = document.getElementById('listen-total-stats');
    if (!container) return;
    
    if (listenData && Object.keys(listenData).length > 0) {
        const sorted = Object.entries(listenData).sort((a, b) => b[1] - a[1]);
        const total = sorted.reduce((sum, [_, count]) => sum + count, 0);
        
        const statsHtml = sorted.map(([name, count], idx) => {
            let cleanName = name.replace(/Vụ Quy/g, 'Vu Quy')
                               .replace(/Thắt Tình/g, 'Thất Tình')
                               .replace(/Nổi Nhớ/g, 'Nỗi Nhớ');
            return `
                <div class="listen-stat-item">
                    <span class="listen-stat-rank">${idx + 1}</span>
                    <span class="listen-stat-name">${escapeHtmlStat(cleanName)}</span>
                    <span class="listen-stat-count">${formatNumberStat(count)}</span>
                </div>
            `;
        }).join('');
        
        container.innerHTML = statsHtml;
        
        if (totalContainer) {
            totalContainer.innerHTML = `<span>🎧 TỔNG LƯỢT NGHE:</span><span>${formatNumberStat(total)}</span>`;
        }
    } else {
        container.innerHTML = '<div style="text-align:center;padding:40px">Chưa có dữ liệu lượt nghe<br><span style="font-size:12px">Hãy nghe một bài hát để bắt đầu!</span></div>';
        if (totalContainer) {
            totalContainer.innerHTML = `<span>🎧 TỔNG LƯỢT NGHE:</span><span>0</span>`;
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

function recordListen() {
    const currentSong = songs[index];
    if (currentSong && currentSong.name && !hasRecordedCurrentSong && isPlaying) {
        incrementListenCount(currentSong.name);
    }
}

function resetListenFlag() {
    hasRecordedCurrentSong = false;
}

const originalChangeSongForListen = changeSong;
changeSong = function(i) {
    resetListenFlag();
    originalChangeSongForListen(i);
};

audio.addEventListener('play', () => {
    setTimeout(() => {
        if (!audio.paused && audio.currentTime > 3) {
            recordListen();
        }
    }, 4000);
});

const listenCountBtn = document.getElementById('listen-count-btn');
if (listenCountBtn) {
    listenCountBtn.onclick = (e) => {
        e.stopPropagation();
        showListenStats();
    };
}

fetchListenData();
setInterval(fetchListenData, 30000);

window.adjustLyricFontSize = adjustLyricFontSize;
window.selectSongFromList = selectSongFromList;
