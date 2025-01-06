import {
  DB_INDEX_ID,
  DATA_SOURCE_ID,
  IQueryViewData,
} from "../../../../config.js";

//Run a vector search for 'Female specific mountain bike'
const searchDescriptionBlob =
  '\xf5\x1e\xaf:7\xd2\x03=\x90\x07\xd9\xbc_\xdf\x93=\x13U\xb7<2\xf7\x14\xbc\xd6q\x1a=^\x8d\xa8<\xe5\x9bR=\x8c\xc7\xd2<\x96\xd9\x0c\xbb\x9b/8\xbd\xbe\x14\x94=\x93\x05\x8e\xbck\x02V=\t\x1a<<\x1a\xff\xe5\xbb4F\xbe;\x10\x81\x9b=\xb6\xa0\xcc\xbd\xaa\xe9\xfd\xbb\x8b\x02\xde<\xcc\x96>\xbd!\xc9G<\xe5H\x92<m\xab|\xbc\xa8\x7f"=\xe5\xd9\x17\xbdFT\xcf<k}\x90:\xf7\n\x07\xbc\x18R\x86\xbcO\xfbm\xbd^=j\xbct\x95!=\xad\x12\xc2\xbc$\x03\xc4\xbb\xf4\xcb\xad\xbcl\x9d\x1e\xbd\xe5u\xe3;0\xd1\xc0=\x08\xe5\xaf\xb9\xe6\x84\xf5\xbch\x19\x91=K+\xf2\xbcz\x10\xcf\xbb\xb2\xd5y<\xe7\xfcO<\t\xfc\xe3\xbc\x80\xa0\xcc<\x87)h;\xe1\xf6~\xbc\x7f\\\xc8\xba\xfc\xf5"\xbd\xaf<\x97\xbc\x16\xed\xe0<2K\x8a\xbb^\xfd\x92\xbdI\x9a2\xbc\x83AY=\xf9\x10_;y\xb2^=\x13\xb2\xe8;\xf8\x8b\x8b=\xb7\x8a\x87=\xc3\x85\x9f\xba\xaf\xef!=\xd9\x94\xcb\xbb\xab\x96<=mrY\xbc~\x83\x87\xbb\x08\xc64\xbd\xc9\xb7\xd2\xbcx\xf6\xcd;\xb4$\xb0\xbb\x11\x0e\xa8\xbc\xd5\xff\xbc<\x86\x9e\xc8:\x93$\x93\xbcDH\xe2\xbbQ8\x8d;+\xb85\xbd\xf4%W\xb9\xa0\x06W\xbb-\xf1\xad\xbd\xfc\xb0\xdd<\xa6\x1f\x9f<"\x85 <\x9d\x99,=C\xad\x8b<Na\x9d\xbc\xb0B\xc4<\xebK\xf1<\x1c5L=\x18\xd6\xf7\xbcb\x0b\x15=Y\xcc \xbd\x80\xc9};\xb7\xf1\xe7</W+\xbd?\xd4=<{\x80\x08=^U\xfd<9*\xd2\xbc\xd9\xd0\x98\xbc}|C=\xf9,L\xbd\xb6_"=\xcb\xb5\x8d\xbc\xbcR\x11<\xd9>\x80</VW=\x19-\x85=x\x7f\xdb\xbc_w\x8b\xbd\x91\n\xa1<mjL<\x1c\xf8\x00=i\xd1\xc7<\x0e\xa6\xe5\xbc\x1a\x96\xb3\xbbD\x81\xa3;HM\x82\xbd\x84ei<c\x9b-=\xa4\xc4t\xbd\xff\xc1\xf8\xbb\xad\xabE\xbd\x12,\xa0\xbc\x86\xa9\xd2\xbc\xc4\x83\x82<\x99\x7f\xed\xbd\x1de!=\xa8\xdca\xbd\r\xa2D\xbd>es=\xecDN\xbdm\xb9i\xbd\x8f\xdd\x85\xbc)|\x06=\xf7\x13l\xbd\xdc\x98\x90\xbd\x86MQ\xbdV\xc5\xbe<\xc7\x0cB\xbb\xec#\x90<\xdf&\xe0\xbc) \xac:/\xff\x8a<z,\x06\xbd\xe6\xf5G<\xc7\x06\xbd=\xe4\xe3O\xbd\x8f\xc0\r=\xbf\xef\xb0<1\xba\xba\xbc\xba\x17\x1e\xbc1\xa5\xc8:3\x0f\x16=\xaf"e:\xf9\x18o=NY\xa1\xbd\x91x\xa1\xbc.C\xb7\xbc@s:=\xb7\xa8\xf5<\x1c\x04&<\xa3\xc1\xb1<L{\x18=\xeb\x7f\x03\xbb\x1e\xfe%\xbc\xd8\xb7\x93=\xa9\xc7\xe3\xbc5\x92.\xbd+t\xb5<\xc0\xa4\x10=\x94\xf8\x10\xbd\xbcc\x88=\x97\xe9\xb2\xbb\x9f\xfa\xc9\xbc\x1bW\xf3\xbc\xc4ER\xbdNI==\xc5o\x90\xbc"\xcd\x14=\x7f\xe4\xe5<>\xdf\x89=\xa2\xb5}<\xf2\x16\x85=\xc6P\x1e\xbc\x17!\x92<\xa5m\xbd<qX\x87\xbdO\x03\x9e\xbc\xc6,N=B\x9c\x04\xbd\xcfP\xce<\xd7?\xec\xbc0\xd9\xb3\xbc\x85>6<\x1e(4\xbc|\x8b\xe2\xbbp\xea\xca\xbd\xe7\x999;J\xc2b\xbb\x97\xf92\xbb\x9d/J=n\x81\xce\xba\xd9\x12/=\xaf\xb6\x8d\xbd\xfd\xbe"\xbdV\x1d\xef<\xb9\xaaO<\xf0`\x81\xbdi\xdc\x12\xbb\xc3\xbf\x91<\xc7\xeb3\xbckr\xa0=\xee\xec\xcd:\xf3\x93\x80<\x96\na;A\x8a\xdc;\x10\xdb\xb1<\xbat\xb5\xbb\x1e\xbbM<\x1f)\x0e\xbc\x15\xfa\x1d\xbb\xd3`\xe8<\xf6\xc1)=\xd8\xd7F\xbdl}+=\x92\x80X<\xa7\xbc\x8f<\x1e$\x14\xbc\x8a\x1b\xbc<\xec\x1e\xda\xbc\xa2\xac\x91\xbc\x84\xcf\x02=`\x87\xf5<\xeb=\xde\xbc>\xe5@\xbdn\x90B;\x92\xd9\xd0\xbc\x1fn\xfd<\x86\xde\r=\x80^v<\xb0\x10\xfc<\x16T\xa0<\xa1gh\xbdf\x1c\x04<L\x90\x9a\xbc[ow\xbdI\xccr\xbcnl\xff<>i\n\xbdZ\x93\xf5<]\x1e\x9b;dme\xbc}B\xb8<\x03~\xe7<\xf0\xa5z\xbc\xab\xe5\x8f:\x0b\x98\xd2\xbc\x801\xf1<)\x83\xd1\xbccN\xe2=\x9a\x11\xbc<\x1c\xbe\xd9\xbc\x98\x0f\xf6< \xc9\x15=&\xbe\xdd\xbc\x1c0\t\xbd\xb5\x8e\x92\xbdXa\x8e\xba>D.\xbdNBE\xbd\xbdq\xbc;\x8a\x03\x86\xbc\xe6\xa2\x12\xbd\xd9\\\x15\xbd\x83\xca\xd4\xbc\x91\rV<Ov\x93=\x10_M\xbcu\xfa\x00\xbcj_\x11=\xe6dR\xbd%\x01\x94<\xac\xc3:\xbdN\xbb\x11=_\xcd\x81<\x18\x8b\x90\xbd\x9e\x86"<s}\x97<\xb0\x80\xd2\xbb\x88\xa5\xf9\xbc\x8a\x8a\xa1;\x89\xd40=\xea}\xdb\xb9\xd1\x08\xee\xbc\xe4\xcd\xe8\xbb\x13^=\xbc\x91\x81\x01\xbd\x0f\xad\x04\xbd\xf5\xef@=\xa0\x95\x1e<\xc74\xea\xbc\x9f\xd2\xfc<\xbb\xc8\xb6<gO\r<\xc7a\xbb\xbc/\xdf4\xbd\xfe>\xa9\xbcTB\xe1<\xb6\xd7\xb4<\xb9\xb9b=\\\xa4l\xbc\xeb\xea:=\x98\x84\xed;*\x01\xef\xbc\xf5$a;\xaa\xe8+=\xf1\xa0 =\xd8\x8b\x03\xbd\x96\xd5#=g\x1f\x91\xbd\xc4\x02\x05\xbc\x94\xd4\x92\xbdS^\x92\xbcs\xe6\xe4<e\xbeT\xbbF\xda\x1a\xbd\x18.O<[\xd1\x89=kt\xe6\xb9L\xa6\t=\xca\x137\xbc\x8d\xf3\x00\xbdX\xad\x04=fOC\xbcf\xabp\xbc/\x0e2\xbc\x04\x80a=o"4\xbaqT\n\xbd?\xf7e=\x80\x97\xc2<e\xfed\xbd\x144\x0b=kj\x04\xbc\xc3\xbb\xdc\xbc\xb3\xbc\x93\xbd\x94>J;L\xd8\xd5\xbc\xda$0\xbc\x15#H\xbd\xd9\x7fI=V5\x00;\xd4\x80J;\x86R\x9c\xbdI\xb6\xa6:P\xb8\xe2\xbc\x95tN\xbd\x0f\x19\x85=\xa8\xa4\x86=^\x10\x81<\x9fO\r=]\x01\x1c=\x0f\x1d\x02\xbd&)\xe4\xbc\xfb\xfc\x02=\xec\x11\xdb<8\x83d\xbc\x8dFC\xbd\xfd0`\xbd"*\x8d;\xd0\tm\xbc\xac\x0b\x7f\xbdn\xf3\xd3\xbc\xad1\x03<JPG;A\xcf\x85;\xf5\xeb\x05=5M\xe8\xbc\xa6\x1c\x1c\xbd\xa1?"=+B\xdf<,\xd0\x8c<Y\x0e\xc6=3\xf9\xb4\xbc"\x93<\xbd\xf3\x96-=7\x95\x9b<\xa8T\xec\xbc\xc6\xc36<\x12\x0e\x1c;A\xc4\xbd\xbc\xd7\tQ;+\xf67\xbb\xa3\xa0\x92\xbd\x84\x94\x1f=X3\xa9\xbc\xc4\x8d\x88\xbc\x05\xd9~=\xddo\xb09lN\xd1\xbc\x95-9<\x00\xcd\\<\x1c\x95l\xbbk\x91.<=\xe2\x9f=aX]\xbc\xb4\xf2\x80=AT6<\x1b\x99A\xbc\x9c\xe4q\xbc\xe1\xf4\x93;\x11\xb65\xbd\xe2/\xaa\xbc\xbdQ\xaa\xbd\x06\x81\x0c=={\xe8\xbc\xb4\xe3\x90<\xd3F\x1e=H\xfd\xb0=\x1ef\xc1;o\xc1\x90<\xdd\xbe\x93=~m\x89=UTw\xbc\xe1y\x9e=\xe5b\xa1\xbc\x1f\xf4\xa6\xbd\x9a\xd1\xd1\xbc\x82\xf1\x02<Hff=\x12p\x8d\xbb=kH\xbb\xde\xb4\xc4\xb8P\x93E=\x89Y\x14=G\xcer:_\xa4$\xbb,\x8f2\xbda\xd7\x15\xbd%M@;P\xd6h;\xc3\x8aC\xbd\xeePQ\xbd\xc8m\x9f\xbc\xd7p\x9a<\xe8\xf6\xab;\x11\xa7\xab<\x96j\xac\xbc/S\x7f<<\x9f\xc1<E\xf7\xa1\xbc`xo<\xd8\x81"\xbc\x8f\x12k=\x88\xab==\xff1\xb1<\x95\x8a>\xbb|M\x98\xbcZq\x16\xbd/\xd3\x97<(;\x0c\xbd\n\xff0=\x93\xb7\xb2\xbc\x8f\x90\xb8;\x92(\x98\xbc\xf3\x1f\xe7<9=\x13\xbcQ\x83\x8d\xbdF\xf1e<\xb2\xc6V=\xbdR};\xbd\x12\xb3\xbcu\x0b\x99=\x82\xd4\xbf\xbc\xcd\xf3\xf0<\xdd\x8a\xc7;\x02\xab\x8e\xbb\xb3GO=\xb280=\x8bw\x15\xbd\xa8\xf7<\xbc\x16v\x1d\xbdX\x99\xbb\xbc\xa9K\x03=\x9dh.\xbd[U\x92<\xd3\xe1\xab\xbb\xc1W\xb2:\x0fl\r\t\x17\x80\xb6\xbdK\xe7\n\xbdl\xd0\xb9<\x83x\xd5\xba\xd9\xb2 \xbcm\xbf\xcf\xbc\xe5,@\xbcL\xad\x18=\x1e\xe9\n\xbc\xed\xbc\xa4<\xa7KS\xbb\xa5\xe3O=\xf8*X;\x0e\x9b\x95=\xb72\x84\xbc\xf9\xff\\<\xf1\xc5\x93\xbaCk>\xbdAw\xe0<\xa2\xd6\xe3<\xde\xe0\x86=~}\x81=\xbe~u\xbdH\xcb6\xbd\x12\x9f2=\xc6\xf16=a^\xd3\xbc\xed\x04\x809\xe7\x8f\x07<\xb0\x9fW\xbb<\xf3\x16\xbd\x9a\x98\xfc<\xf8\xaf\xe1\xbc\xee\xb6!\xbd\xda\xeb\x96\xbcn"\x7f<\xf8j\x8c<z\xb5\x80<\xda\x0e\xa2<\x9d\xeco<O \xbb<Ic\x18\xbc\n\xd4\r\xbd\xc8\x95\xf7<\xc2\x92\x10=\xbai\xd6\xbd\x9d\xd7@=\xf7w\x01\xbc\x14mW\xbc\xb7&\x84\xbc0t\t9\xb7V\x18\xbe\x87!\xa7<\xa59D=\x1b2\x01\xbdE-b\xbc\xd2KW\xbd\n\xa3.\xbd\xe9-\x04\xbd8u\x1f<\xe7\xbe\x8d\xbc\xff\xca\x7f\xbc\xb8\x03\x92\xba"\xe6\xa5\xbbU[Q\xbc6\xec\x1e\xb9\x93\x80\xbe\xbc\xa4>\xc29j\x9fc=L\xb5\x00\xbbI\x90\xcb\xbc\xfdi\x81<\xbbx\x02\xbc\xfb\x0f\xa1\xbb\x13\xdf\x97\xbc\xa2t\x8f\xbc\x99jS\xbd\xdf\xb6\xbf<t\xf3+\xbdxN\xa0<\x18\xe2\x1d<t\xf6\xb4\xba9\xb1\xd8\xbc\xac\x82;=\x91o\x0e\xbd\xe7\xa4\x19=\x11s3=\x93@\xbc\xbb\xec\xda\xe3;\xbe\xf8\xff;k\x9a\xac\xba\xc0\xb4W\xbd\xf3*\xf4<Hl\x8f\xba],7=\xef\xce\xfa<\xa8\xe6\xe1\xbc\xe0oT\xbd\x1fx\x8c=p\xa2\xaa;\x15\x87\xe1\xbd\xcf\xc1\xbb\xbcQ\xacg<5" \xbdpr\xfb\xbc@\xc0\x95\xbcd\xe9\xff\xbb_\xa4\x80\xbc\xe5W\xb4\xbb\xe8\xcf\xd8\xbc\x7f\xf7 =\x8b\x1a\x0b\xbd|A\x81\xbd\x1blN=r\x1d\xbb<|\x02\xb6\xbb\xeaQ4<\x15\xd7\xa0<i\xb7\x89\xbca\xe4\xc9\xbb"\x8e]=\xf2\xbd3=\xc5*-=\xa1F\xab<\xf7Z\xc7<+|:<@g\xfe\xbb8+\xc7<\xd2\xf5%=\x86\x8d(\xbcq\xd8y<\xb4\xf0\x95\xbd\xb8\xf0Y=\x8c+\x82<\xd6i\xa6\xbc\x95q3=\xcacL<\x8f\x80]\xbd\x8f\x8e\x94;w\x84\x8e<\xa2\xad\x8e<\xad\xe6z\xbd\x17/\x08\xbd0\xf3\x84<\xdb\xb9\xd9:P@\x18<?NZ\xbc\xf6xX\xbbcU"=(Z\xaa\xbcMX\x98\xbc\xebL\x01\xbc\xa3\xea\xd7\xbc\xf4h4\xbc\xe0C\xdb<\xe56#\xbc\xe3\xe4\x06\xbd\xe49\x85\xbc\x16\x1d\xb1=\xd6Xv=\x7f\x94\x85\xbd\xed\xa42<[\x1b\x1f\xbdv\x83C\xbc\xc0\x99c=\xf1t~\xbdgMe\xbd\x11j\xef\xbc\x1d\x9c\xe0:\x9d\xae\xb2\xbc\xf6|\x1a=;\xe0\x01=T\xb1\xad\xba\xba{1\xbc\t\xc2\x1a\xbb=\xe1\x86;"He=gb\xb9\xbb2G:=o\xd2\xe9\xbb0-j\xbd\xf1\x81.\xbd\xfb\x8a\xf8\xbac\xe6\xaf\xbc\x1e\xb7\r\xbd\x04j\xc1\xbc\xf1\x12\x96\xbd:\xc0G<v\x13\xe5<\x88\xdd\x8d\xbc\xfc\x16Y=\xc9]u=\xe4\x1b0\xbb\xd8D\xd0<\x844t;7\xd9\x16\xbdp\x84\xf9\xbcv\xc9j<\xbbG\xe4\xbc"N\x8a=/\xaa-\xbd\xd5l\xca\xbb\xe6\xce\xb8;\n\x02+9\xcb\xcf\xa5\xbd\xa0\x93\xa0\xbcK-\xc1<<L*\xbd*\x03\xd6;\x86\xa3:\xbd\x87\xa4\x9d\xbc\xf1\xd6\xfb\xbcB\x9b\xea\xbc\xbe\x81a\xbc\xa5\xcd\xfc\xbb\r\x0c\xab\xbc\xb2\xceT=*-\xd4<\xd3zd<\xda\xa9\xa2\xbc\x11K\x11<\xe8\xdf\xca\xbbtV&=\x1a\xea\x11=\xf3\xd8\x80=\x95\xdf\x03=\x03\xccS<u4\xa19\xc0K.\xbd!\x04j=\x08\xdb=\xbd\x7f&|\xbd\xa3}\x96<\xf0\xccb\xbct\xf9\xb7\xbb\x00}\x1c\xbd(\x9cI;\x10OM<\xd3\xe7==\xbc@\xa1\xbc/l\xde\xbc\x8b\xaaB=\xa5"\xe8;\x1b\x0f\x05<\xd6\x84\x0b=\xa3\xe9g\xbc\x1e\xcb#\xbc_\xca\x89\xbcz\x9a\x90\xbcB\x81o<zS\x98=ar\x06;\xb7l\xc7<3&\x11<\x93\x1c\xc5\xbb f\x1c\xbb\xa2\xd8i\xbd\xcfm\xd0\xbc,1\x80\xbd 0\xed\xbc\x98\x1f.=\x8f\xd7\xe6<\x8dD\xe6<\x80$\x8d\xbc[L`=\x84gE;\xb5\x88\xa5<\xcfTL=\x1e\xef\xc5\xbcz\x06\x8c=\x91\xea\xef<\xa9D\x89=\xa2\xe9W\xbd';

const queryViewData: IQueryViewData = {
  query: `FT.SEARCH idx:bikes_vss 
    "*=>[KNN 3 @description_embeddings $my_blob AS score ]" 
    RETURN 4 score brand type description 
    PARAMS 2 my_blob ${searchDescriptionBlob}
    SORTBY score
    DIALECT 2`,
  dbIndexId: DB_INDEX_ID.BIKE_DS_VSS_INDEX,
  dataSourceId: DATA_SOURCE_ID.BIKE_DS,
};

export default queryViewData;
