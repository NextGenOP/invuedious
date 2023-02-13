"use strict";(self["webpackChunkinvuedious"]=self["webpackChunkinvuedious"]||[]).push([[791],{2065:function(t,e,i){i.r(e),i.d(e,{default:function(){return Pe}});var o=i(6252);const a=t=>((0,o.dD)("data-v-d86e4fd4"),t=t(),(0,o.Cn)(),t),n={class:"container2"},s={key:0,class:"loading loading-lg"},d={key:1},l={key:0},r={class:"empty"},c={class:"empty-icon"},m=a((()=>(0,o._)("p",{class:"empty-title h5"},"Connection error",-1))),u=a((()=>(0,o._)("p",{class:"empty-subtitle"},[(0,o.Uk)(" The request to the indvidious instance took too long, or the video doesn't exist. "),(0,o._)("br"),(0,o.Uk)("Check your connection and try again. ")],-1))),h={class:"empty-action"},v={key:1},p={id:"content",class:"columns"},g={class:"column col-lg-12 col-9"},f={class:"column col-lg-12 col-2 customMargin"},y={class:"column col-12"};function w(t,e,i,a,w,_){const b=(0,o.up)("unicon"),I=(0,o.up)("videoplayer"),k=(0,o.up)("videoinfo"),D=(0,o.up)("comments"),C=(0,o.up)("recommended");return(0,o.wg)(),(0,o.iD)("div",n,[w.loading?((0,o.wg)(),(0,o.iD)("div",s)):((0,o.wg)(),(0,o.iD)("div",d,[w.failed?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",r,[(0,o._)("div",c,[(0,o.Wm)(b,{name:"sad-dizzy",fill:"var(--primary)",width:"50px",height:"50px"})]),m,u,(0,o._)("div",h,[(0,o._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>_.reconnect())}," RETRY ")])])])):((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",p,[(0,o._)("div",g,[(0,o.Wm)(I,{videoInfo:w.videoInfo},null,8,["videoInfo"]),(0,o.Wm)(k,{videoInfo:w.videoInfo},null,8,["videoInfo"]),w.myWidth>960?((0,o.wg)(),(0,o.j4)(D,{key:0,videoId:w.videoId},null,8,["videoId"])):(0,o.kq)("",!0)]),(0,o._)("div",f,[(0,o.Wm)(C,{videoInfo:w.videoInfo},null,8,["videoInfo"])]),(0,o._)("div",y,[w.myWidth<=960?((0,o.wg)(),(0,o.j4)(D,{key:0,videoId:w.videoId},null,8,["videoId"])):(0,o.kq)("",!0)])])]))]))])}var _=i(9669),b=i.n(_),I=i(3577);const k={key:0},D={class:"empty"},C={class:"empty-icon"},T=(0,o._)("p",{class:"empty-title h5"},"This video is not playable",-1),x={key:0,class:"empty-title"},H={class:"empty-action"},z={key:1,class:"textCenter"},W=["data-poster","src"],S=["src","type","size"];function q(t,e,i,a,n,s){const d=(0,o.up)("unicon"),l=(0,o.up)("vue-plyr");return 0==i.videoInfo[0].formatStreams.length?((0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",D,[(0,o._)("div",C,[(0,o.Wm)(d,{name:"frown",fill:"var(--primary)",width:"50px",height:"50px"})]),T,i.videoInfo[0].error?((0,o.wg)(),(0,o.iD)("p",x," Error: "+(0,I.zw)(i.videoInfo[0].error),1)):(0,o.kq)("",!0),(0,o._)("div",H,[(0,o._)("button",{class:"btn",onClick:e[0]||(e[0]=t=>s.goBack())},"Go back")])])])):((0,o.wg)(),(0,o.iD)("div",z,[(0,o.Wm)(l,{ref:"plyr"},{default:(0,o.w5)((()=>[(0,o._)("video",{"data-poster":i.videoInfo[0].thumb,playsinline:"",controls:"",src:i.videoInfo[0].formatStreams[0].url,width:"100%"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.videoInfo[0].formatStreams,(t=>((0,o.wg)(),(0,o.iD)("source",{key:t.itag,src:t.url,type:t.type,size:t.qualityLabel},null,8,S)))),128))],8,W)])),_:1},512)]))}var L={name:"videoplayer",props:{videoInfo:Array},methods:{goBack(){this.$router.go(-1)}}},R=i(3744);const E=(0,R.Z)(L,[["render",q]]);var V=E;const A=t=>((0,o.dD)("data-v-128b5d3e"),t=t(),(0,o.Cn)(),t),U={id:"videoTitle"},M={id:"infoSmall"},Y={class:"infoLeft"},Z=A((()=>(0,o._)("span",{class:"dot"},"•",-1))),j={id:"voteContainer"},B={class:"vote"},O={class:"vote"},$=A((()=>(0,o._)("div",{class:"divider"},null,-1))),N={class:"authorInfo"},K=["data-initial"],G=["src"],P={class:"authorDetails"},F={id:"authorName"},J={class:"accordion"},Q=A((()=>(0,o._)("input",{type:"checkbox",id:"accordion-1",name:"accordion-checkbox",hidden:""},null,-1))),X=A((()=>(0,o._)("p",null,"Description",-1))),tt=["innerHTML"],et=A((()=>(0,o._)("div",{class:"divider"},null,-1)));function it(t,e,i,a,n,s){const d=(0,o.up)("unicon"),l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h4",U,[(0,o._)("b",null,(0,I.zw)(i.videoInfo[0].title),1)]),(0,o._)("div",M,[(0,o._)("div",Y,[(0,o._)("p",null,(0,I.zw)(s.numberWithDots(i.videoInfo[0].viewCount))+" views",1),Z,(0,o._)("p",null,(0,I.zw)(i.videoInfo[0].publishedText),1)]),(0,o._)("div",j,[(0,o._)("p",B,[(0,o.Wm)(d,{name:"thumbs-up",fill:"var(--primary)"}),(0,o._)("span",null,(0,I.zw)(i.videoInfo[0].likeCount),1)]),(0,o._)("p",O,[(0,o.Wm)(d,{name:"thumbs-down",fill:"var(--primary)"}),(0,o._)("span",null,(0,I.zw)(i.videoInfo[0].dislikeCount),1)])])]),$,(0,o._)("div",null,[(0,o.Wm)(l,{to:{name:"channel",params:{id:i.videoInfo[0].authorId}}},{default:(0,o.w5)((()=>[(0,o._)("div",N,[(0,o._)("figure",{class:"avatar avatar-xl","data-initial":i.videoInfo[0].author.charAt(0),style:{"background-color":"#6f2232"}},[(0,o._)("img",{src:i.videoInfo[0].authorThumbnails[1].url,name:"Channel image"},null,8,G)],8,K),(0,o._)("span",P,[(0,o._)("span",F,(0,I.zw)(i.videoInfo[0].author),1),(0,o._)("span",null,(0,I.zw)(i.videoInfo[0].subCountText)+" subscribers",1)])])])),_:1},8,["to"]),(0,o._)("div",J,[Q,(0,o._)("label",{class:"accordion-header",for:"accordion-1",onClick:e[0]||(e[0]=t=>s.descriptionIcon())},[X,n.open?((0,o.wg)(),(0,o.j4)(d,{key:1,name:"angle-up",fill:"white"})):((0,o.wg)(),(0,o.j4)(d,{key:0,name:"angle-down",fill:"white"}))]),(0,o._)("div",{innerHTML:i.videoInfo[0].descriptionHtml,class:"accordion-body"},null,8,tt)])]),et])}var ot={name:"videoinfo",props:{videoInfo:Array},data(){return{open:!1}},methods:{descriptionIcon(){this.open=!this.open},numberWithDots(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}};const at=(0,R.Z)(ot,[["render",it],["__scopeId","data-v-128b5d3e"]]);var nt=at;const st={class:"columns"};function dt(t,e,i,a,n,s){const d=(0,o.up)("unicon"),l=(0,o.up)("card");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h5",null,[(0,o.Wm)(d,{name:"circle-layer",fill:"darkgray"}),(0,o.Uk)("Recommended videos ")]),(0,o._)("div",st,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.videoInfo[0].recommendedVideos,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"column col-xs-12 col-sm-6 col-md-4 col-lg-3 col-12",key:t.videoId},[(0,o.Wm)(l,{video:t,mode:"recommended"},null,8,["video"])])))),128))])])}var lt=i(2717),rt={name:"recommended",props:{videoInfo:Array},components:{card:lt.Z}};const ct=(0,R.Z)(rt,[["render",dt],["__scopeId","data-v-88cb859a"]]);var mt=ct;const ut=t=>((0,o.dD)("data-v-09a4325b"),t=t(),(0,o.Cn)(),t),ht={key:0,class:"loading loading-lg"},vt={key:1},pt={key:0},gt={class:"empty"},ft={class:"empty-icon"},yt=ut((()=>(0,o._)("p",{class:"empty-title h5"},"Connection error",-1))),wt=ut((()=>(0,o._)("p",{class:"empty-subtitle"},[(0,o.Uk)(" The request for the comments took too long. "),(0,o._)("br"),(0,o.Uk)("Check your connection and try again. ")],-1))),_t={class:"empty-action"},bt={key:1},It={style:{"margin-bottom":"0.4rem"}},kt={class:"panel"},Dt={class:"panel-body"},Ct=ut((()=>(0,o._)("div",{class:"loading loading-lg bottomLoader"},null,-1)));function Tt(t,e,i,a,n,s){const d=(0,o.up)("unicon"),l=(0,o.up)("commentCard");return n.loading?((0,o.wg)(),(0,o.iD)("div",ht)):((0,o.wg)(),(0,o.iD)("div",vt,[n.failed?((0,o.wg)(),(0,o.iD)("div",pt,[(0,o._)("div",gt,[(0,o._)("div",ft,[(0,o.Wm)(d,{name:"sad-dizzy",fill:"var(--primary)",width:"50px",height:"50px"})]),yt,wt,(0,o._)("div",_t,[(0,o._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>s.reconnect())}," RETRY ")])])])):((0,o.wg)(),(0,o.iD)("div",bt,[(0,o._)("p",It,(0,I.zw)(n.commentCount)+" Comments:",1),(0,o._)("div",kt,[(0,o._)("div",Dt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.comments,(t=>((0,o.wg)(),(0,o.j4)(l,{key:t.commentId,commentData:t,videoId:i.videoId},null,8,["commentData","videoId"])))),128))])]),Ct]))]))}const xt={class:"commentCard"},Ht={class:"card"},zt={class:"card-header"},Wt={key:0,class:"card-title h6 owner"},St=["data-initial"],qt=["src"],Lt={key:1,class:"card-title h6"},Rt=["data-initial"],Et=["src"],Vt={class:"text-gray"},At={key:0},Ut={class:"card-body"},Mt=["innerHTML"],Yt={style:{display:"flex"}},Zt={class:"like"},jt={key:0,class:"creatorHeart"},Bt=["data-initial"],Ot=["src","alt"],$t={key:0,class:"card-footer"},Nt={class:"accordion"},Kt=["id"],Gt=["for"],Pt={key:0,class:"accordion-body"};function Ft(t,e,i,a,n,s){const d=(0,o.up)("router-link"),l=(0,o.up)("unicon"),r=(0,o.up)("repliesContainer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",xt,[(0,o._)("div",Ht,[(0,o._)("div",zt,[(0,o.Wm)(d,{to:{name:"channel",params:{id:i.commentData.authorId}}},{default:(0,o.w5)((()=>[i.commentData.authorIsChannelOwner?((0,o.wg)(),(0,o.iD)("div",Wt,[(0,o._)("figure",{class:"avatar avatar-lg","data-initial":i.commentData.author.charAt(0),style:{"background-color":"#5755d9"}},[(0,o._)("img",{src:i.commentData.authorThumbnails[0].url,name:"profile picture"},null,8,qt)],8,St),(0,o.Uk)(" "+(0,I.zw)(i.commentData.author),1)])):((0,o.wg)(),(0,o.iD)("div",Lt,[(0,o._)("figure",{class:"avatar avatar-lg","data-initial":i.commentData.author.charAt(0),style:{"background-color":"#5755d9"}},[(0,o._)("img",{src:i.commentData.authorThumbnails[0].url,name:"profile picture"},null,8,Et)],8,Rt),(0,o.Uk)(" "+(0,I.zw)(i.commentData.author),1)]))])),_:1},8,["to"]),(0,o._)("span",Vt,[(0,o._)("span",null,(0,I.zw)(i.commentData.publishedText),1),i.commentData.isEdited?((0,o.wg)(),(0,o.iD)("span",At," (Edited)")):(0,o.kq)("",!0)])]),(0,o._)("div",Ut,[(0,o._)("div",{innerHTML:i.commentData.contentHtml,style:{"margin-bottom":"0.8rem"},class:"text-light"},null,8,Mt),(0,o._)("div",Yt,[(0,o._)("span",Zt,[(0,o.Wm)(l,{name:"thumbs-up",fill:"var(--primary)"}),(0,o._)("span",null,(0,I.zw)(i.commentData.likeCount),1)]),null!=i.commentData.creatorHeart?((0,o.wg)(),(0,o.iD)("span",jt,[(0,o._)("figure",{class:"avatar avatar-md","data-initial":i.commentData.creatorHeart.creatorName.charAt(0)},[(0,o._)("img",{src:i.commentData.creatorHeart.creatorThumbnail,alt:i.commentData.creatorHeart.creatorName},null,8,Ot)],8,Bt),(0,o.Wm)(l,{name:"heart",width:"15",height:"15",class:"creatorHeartIcon",fill:"var(--primary)"})])):(0,o.kq)("",!0)])]),void 0!=i.commentData.replies?((0,o.wg)(),(0,o.iD)("div",$t,[(0,o._)("div",Nt,[(0,o._)("input",{type:"checkbox",id:"accordion-"+i.commentData.commentId,name:"accordion-checkbox",hidden:""},null,8,Kt),(0,o._)("label",{class:"accordion-header",for:"accordion-"+i.commentData.commentId},[(0,o._)("button",{class:"btn",onClick:e[0]||(e[0]=t=>s.switchText())},(0,I.zw)(n.accordionText)+" "+(0,I.zw)(i.commentData.replies.replyCount)+" replies ",1)],8,Gt),n.showBody?((0,o.wg)(),(0,o.iD)("div",Pt,[(0,o.Wm)(r,{videoId:i.videoId,initialContinuation:i.commentData.replies.continuation},null,8,["videoId","initialContinuation"])])):(0,o.kq)("",!0)])])):(0,o.kq)("",!0)])])])}const Jt=t=>((0,o.dD)("data-v-7ff984fa"),t=t(),(0,o.Cn)(),t),Qt={key:0,class:"loading loading-lg"},Xt={key:1},te={key:0},ee={class:"empty"},ie={class:"empty-icon"},oe=Jt((()=>(0,o._)("p",{class:"empty-title h5"},"Connection error",-1))),ae=Jt((()=>(0,o._)("p",{class:"empty-subtitle"},[(0,o.Uk)(" The request for the replies took too long. "),(0,o._)("br"),(0,o.Uk)("Check your connection and try again. ")],-1))),ne={class:"empty-action"},se={key:1},de={class:"panel"},le={class:"panel-body"},re={key:0,class:"centered"},ce={key:1,class:"empty"},me=Jt((()=>(0,o._)("p",{class:"empty-title h5"},"Connection error",-1))),ue={class:"empty-action"},he={key:2,class:"loading loading-lg"};function ve(t,e,i,a,n,s){const d=(0,o.up)("unicon"),l=(0,o.up)("replyCard");return n.loading?((0,o.wg)(),(0,o.iD)("div",Qt)):((0,o.wg)(),(0,o.iD)("div",Xt,[n.failed?((0,o.wg)(),(0,o.iD)("div",te,[(0,o._)("div",ee,[(0,o._)("div",ie,[(0,o.Wm)(d,{name:"sad-dizzy",fill:"var(--primary)",width:"40px",height:"40px"})]),oe,ae,(0,o._)("div",ne,[(0,o._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>s.reconnect())}," RETRY ")])])])):((0,o.wg)(),(0,o.iD)("div",se,[(0,o._)("div",de,[(0,o._)("div",le,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.replies,(t=>((0,o.wg)(),(0,o.j4)(l,{key:t.commentId,commentData:t,videoId:i.videoId},null,8,["commentData","videoId"])))),128))])]),void 0!=n.continuation?((0,o.wg)(),(0,o.iD)("div",re,[(0,o._)("button",{class:"btn",onClick:e[1]||(e[1]=t=>s.getReplies())},"SHOW MORE")])):(0,o.kq)("",!0),n.failed2?((0,o.wg)(),(0,o.iD)("div",ce,[me,(0,o._)("div",ue,[(0,o._)("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=t=>s.innerReconnect())}," RETRY ")])])):(0,o.kq)("",!0),n.innerLoading?((0,o.wg)(),(0,o.iD)("div",he)):(0,o.kq)("",!0)]))]))}const pe={class:"commentCard"},ge={class:"card"},fe={class:"card-header"},ye={key:0,class:"card-title h6 owner"},we=["data-initial"],_e=["src"],be={key:1,class:"card-title h6"},Ie=["data-initial"],ke=["src"],De={class:"text-gray"},Ce={key:0},Te={class:"card-body"},xe=["innerHTML"],He={style:{display:"flex"}},ze={class:"like"},We={key:0,class:"creatorHeart"},Se=["data-initial"],qe=["src","alt"];function Le(t,e,i,a,n,s){const d=(0,o.up)("router-link"),l=(0,o.up)("unicon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",pe,[(0,o._)("div",ge,[(0,o._)("div",fe,[(0,o.Wm)(d,{to:{name:"channel",params:{id:i.commentData.authorId}}},{default:(0,o.w5)((()=>[i.commentData.authorIsChannelOwner?((0,o.wg)(),(0,o.iD)("div",ye,[(0,o._)("figure",{class:"avatar avatar-lg","data-initial":i.commentData.author.charAt(0),style:{"background-color":"#5755d9"}},[(0,o._)("img",{src:i.commentData.authorThumbnails[0].url,name:"profile picture"},null,8,_e)],8,we),(0,o.Uk)(" "+(0,I.zw)(i.commentData.author),1)])):((0,o.wg)(),(0,o.iD)("div",be,[(0,o._)("figure",{class:"avatar avatar-lg","data-initial":i.commentData.author.charAt(0),style:{"background-color":"#5755d9"}},[(0,o._)("img",{src:i.commentData.authorThumbnails[0].url,name:"profile picture"},null,8,ke)],8,Ie),(0,o.Uk)(" "+(0,I.zw)(i.commentData.author),1)]))])),_:1},8,["to"]),(0,o._)("span",De,[(0,o._)("span",null,(0,I.zw)(i.commentData.publishedText),1),i.commentData.isEdited?((0,o.wg)(),(0,o.iD)("span",Ce," (Edited)")):(0,o.kq)("",!0)])]),(0,o._)("div",Te,[(0,o._)("div",{innerHTML:i.commentData.contentHtml,style:{"margin-bottom":"0.8rem"},class:"text-light"},null,8,xe),(0,o._)("div",He,[(0,o._)("span",ze,[(0,o.Wm)(l,{name:"thumbs-up",fill:"var(--primary)"}),(0,o._)("span",null,(0,I.zw)(i.commentData.likeCount),1)]),null!=i.commentData.creatorHeart?((0,o.wg)(),(0,o.iD)("span",We,[(0,o._)("figure",{class:"avatar avatar-md","data-initial":i.commentData.creatorHeart.creatorName.charAt(0)},[(0,o._)("img",{src:i.commentData.creatorHeart.creatorThumbnail,alt:i.commentData.creatorHeart.creatorName},null,8,qe)],8,Se),(0,o.Wm)(l,{name:"heart",width:"15",height:"15",class:"creatorHeartIcon",fill:"var(--primary)"})])):(0,o.kq)("",!0)])])])])])}var Re={name:"replyCard",props:{commentData:Object,videoId:String}};const Ee=(0,R.Z)(Re,[["render",Le],["__scopeId","data-v-65ca3ec3"]]);var Ve=Ee,Ae={name:"repliesContainer",props:{videoId:String,initialContinuation:String},components:{replyCard:Ve},created(){this.getReplies()},data(){return{loading:!0,failed:!1,replies:[],continuation:"",begin:!0,innerLoading:!1,failed2:!1}},methods:{reconnect(){this.loading=!0,this.failed=!1,this.getReplies()},innerReconnect(){this.innerLoading=!1,this.failed2=!1,this.getReplies()},getReplies(){this.innerLoading=!0;var t=this.$store.state.selected+"/api/v1/comments/"+this.videoId+"?continuation=";this.begin?t+=this.initialContinuation:t+=this.continuation,b()({url:t,timeout:1e4}).then((t=>{this.begin=!1;for(let e=0;e<t.data.comments.length;e++)this.replies.push(t.data.comments[e]);this.continuation=t.data.continuation})).catch((t=>{this.begin?this.failed=!0:this.failed2=!0,console.log(t.code)})).then((()=>this.innerLoading=!1)).then((()=>this.loading=!1))}}};const Ue=(0,R.Z)(Ae,[["render",ve],["__scopeId","data-v-7ff984fa"]]);var Me=Ue,Ye={name:"commentCard",props:{commentData:Object,videoId:String},components:{repliesContainer:Me},data(){return{accordionText:"Show",showBody:!1}},methods:{switchText(){"Show"==this.accordionText?(this.accordionText="Hide",this.showBody=!0):(this.accordionText="Show",this.showBody=!1)}}};const Ze=(0,R.Z)(Ye,[["render",Ft],["__scopeId","data-v-1424fef9"]]);var je=Ze,Be={name:"comments",props:{videoId:String},components:{commentCard:je},data(){return{comments:[],commentCount:0,continuation:"",loading:!0,bottom:!1,failed:!1}},created(){this.getComments(),window.addEventListener("scroll",(()=>{this.bottom=this.bottomVisible()}))},unmounted(){window.removeEventListener("scroll",(()=>{this.bottom=this.bottomVisible()}))},methods:{reconnect(){this.loading=!0,this.failed=!1,this.getComments()},bottomVisible(){const t=window.scrollY,e=document.documentElement.clientHeight,i=document.documentElement.scrollHeight-400,o=e+t>=i;return o||i<e},getComments(){b()({url:this.$store.state.selected+"/api/v1/comments/"+this.videoId+"?continuation="+this.continuation,timeout:1e4}).then((t=>{var e={};this.commentCount=t.data.commentCount;for(let i=0;i<t.data.comments.length;i++)e=t.data.comments[i],this.comments.push(e);this.continuation=t.data.continuation})).catch((t=>{this.failed=!0,console.log(t)})).then((()=>this.loading=!1))}},watch:{bottom(t){t&&!this.loading&&this.getComments()}}};const Oe=(0,R.Z)(Be,[["render",Tt],["__scopeId","data-v-09a4325b"]]);var $e=Oe,Ne=i(2077),Ke={name:"videoPage",created(){this.getVideo(),this.displayWindowSize(),window.onresize=this.displayWindowSize},components:{videoplayer:V,videoinfo:nt,recommended:mt,comments:$e},props:{reload:Boolean},data(){return{videoId:this.$route.params.id,loading:!0,myWidth:0,myHeight:0,videoInfo:[],failed:!1}},methods:{reconnect(){this.loading=!0,this.failed=!1,this.getVideo()},displayWindowSize(){this.myWidth=window.innerWidth,this.myHeight=window.innerHeight},getVideo(){b()({url:this.$store.state.selected+"/api/v1/videos/"+this.videoId,timeout:1e4}).then((t=>{this.videoInfo.push(t.data),document.title=this.videoInfo[0].title+" - Invuedious",this.videoInfo[0].thumb=this.videoInfo[0].videoThumbnails[0].url;for(let i=0;i<this.videoInfo[0].formatStreams.length;i++)this.videoInfo[0].formatStreams[i].qualityLabel=this.videoInfo[0].formatStreams[i].qualityLabel.substring(0,this.videoInfo[0].formatStreams[i].qualityLabel.length-1),"720"==this.videoInfo[0].formatStreams[i].qualityLabel&&(this.videoInfo[0].thumb=this.videoInfo[0].videoThumbnails[1].url);if(this.videoInfo[0].formattedViews=Ne(t.data.viewCount).format("0a"),"m"==this.videoInfo[0].formattedViews.charAt(this.videoInfo[0].formattedViews.length-1)){var e=this.videoInfo[0].formattedViews.substr(0,this.videoInfo[0].formattedViews.length-1)+"M";this.videoInfo[0].formattedViews=e}})).catch((()=>{this.failed=!0})).then((()=>this.loading=!1))},async downloadCaptions(){this.videoInfo[0].downloadedCaptions=[];for(let t=0;t<this.videoInfo[0].captions.length;t++)await b()(this.$store.state.selected+this.videoInfo[0].captions[t].url).then((e=>{this.videoInfo[0].downloadedCaptions.push({src:e.data,url:this.videoInfo[0].captions[t].url,label:this.videoInfo[0].captions[t].label,languageCode:this.videoInfo[0].captions[t].languageCode})})).catch((t=>{console.log(t)}));this.loading=!1}},watch:{reload(){this.reload&&(this.loading=!0,this.videoInfo=[],this.reconnect())}}};const Ge=(0,R.Z)(Ke,[["render",w],["__scopeId","data-v-d86e4fd4"]]);var Pe=Ge}}]);
//# sourceMappingURL=video.ac8ba4a5.js.map