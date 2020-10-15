<template>
  <div class="chat">
    <div class="chat_head">
       <img v-bind:src="avatar" />
      <div class="userInfo">
        <div class="server_name">{{username}}</div><!--客服昵称-->
        <div class="server_title">在线客服</div>
      </div>

    </div>
    <!--聊天区域-->
    <div class="chatBox">
      <div class="history_message">无更多历史消息</div>

      <div class="chat_content_left">

      </div>
    </div>
    <!--消息发送框-->
    <div class="chat_foot" >
      <div class="chat_active" v-show="chatStausActive">
      <textarea class="editArea" id="editArea" placeholder="人工为您服务"></textarea><button class="sendMessage" @click="sendMsg()">发送</button>
      </div>
      <div class="chat_close" v-show="chatStausClose">
        <span value="会话结束，欢迎为您服务!"></span>
        <button class="start—newChat_button" value="开始新的会话"></button>
      </div>
    </div>
  </div>
</template>

<script>
import SockJs from 'sockjs-client';
import Stomp from 'stompjs';
  export default {
    name: "charRoom",
    data() {
      return {
        ws: null,
        count: 0,
        userId: 0,//this.$store.getters.id, // 当前用户ID
        username: '客服工号22302', // 当前用户昵称  this.$store.getters.name
        avatar: 'http://www.jy-info.com/img/kylin/kylin_index_04.png',//this.$store.getters.avatar, // 当前用户头像
        chatStausActive:true,
        chatStausClose:false,
        CustomerServiceName:'sds',
        CurrentTime:'dsd',
        MessageContent:'dsds',
        list: [], // 聊天记录的数组
        contentText: "" // input输入的值
      };
    },
    mounted() {
       // this.initWebSocket();
    },
    destroyed() {
      // 离开页面时关闭websocket连接
      //  this.ws.onclose(undefined);
    },
    methods: {
    //   // 发送聊天信息
    //   sendText() {
    //     let _this = this;
    //     _this.$refs["sendMsg"].focus();
    //     if (!_this.contentText) {
    //       return;
    //     }
    //     let params = {
    //       userId: _this.userId,
    //       username: _this.username,
    //       avatar: _this.avatar,
    //       msg: _this.contentText,
    //       count: _this.count
    //     };
    //     _this.ws.send(JSON.stringify(params)); //调用WebSocket send()发送信息的方法
    //     _this.contentText = "";
    //     setTimeout(() => {
    //       _this.scrollBottm();
    //     }, 500);
    //   },
    //   // 进入页面创建websocket连接
    //   initWebSocket() {
    //     let _this = this;
    //     // 判断页面有没有存在websocket连接
    //     if (window.WebSocket) {
    //       var serverHot =  window.location.hostname;
    //       let sip = '房间号'
    //       // 填写本地IP地址 此处的 :9101端口号 要与后端配置的一致！
    //       var url = 'ws://' + serverHot + ':9101' + '/groupChat/' + sip + '/' + this.userId; // `ws://127.0.0.1/9101/groupChat/10086/聊天室`
    //       let ws = new WebSocket(url);
    //       _this.ws = ws;
    //       ws.onopen = function(e) {
    //         console.log("服务器连接成功: " + url);
    //       };
    //       ws.onclose = function(e) {
    //         console.log("服务器连接关闭: " + url);
    //       };
    //       ws.onerror = function() {
    //         console.log("服务器连接出错: " + url);
    //       };
    //       ws.onmessage = function(e) {
    //         //接收服务器返回的数据
    //         let resData = JSON.parse(e.data)
    //         _this.count = resData.count;
    //         _this.list = [
    //           ..._this.list,
    //           { userId: resData.userId, username: resData.username, avatar: resData.avatar, content: resData.msg }
    //         ];
    //       };
    //     }
    //   },
      // 滚动条到底部
      // scrollBottm() {
      //   let el = this.$refs["msg-box"];
      //   el.scrollTop = el.scrollHeight;
      // }
      sendMsg(){

        let content= document.getElementById("editArea").value;
       var MessageLeft=document.getElementById('chat_content_left')[0];

      }
     }
  };
</script>

<style  scoped>
  .chat{
    width:3.64rem;
    height: 6.13rem;
    background-color: mistyrose;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0.01rem;
  }

  .chat_head{
    width:3.5rem;
    height: 0.94rem;
    margin: 0.07rem;
    background-color: #fbfbfc;
  }

  .chat_head img{
    width:0.5rem;
    height: 0.5rem;
    margin-left: 0.4rem;
    margin-top: 0.1rem;
    background-size: cover;
    float: left;
  }

  .userInfo{
    width:0.9rem;
    height: 0.5rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    float: left;
    padding-top: 0.03rem;
  }
  .server_name{
    width:100%;
    height: 0.25rem;
    background-size: cover;
    float: left;
  }

  .server_title{
    width:100%;
    height: 0.25rem;
    background-size: cover;
    float: right;
  }

  .chatBox{
    width: 3.50rem;
    height: 3.79rem;
    margin: 0.07rem;
    background-color: #fbfbfc;
    overflow-y: scroll;
  }

  /*css主要部分的样式*/
  /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
  .chatBox::-webkit-scrollbar {
    width: 0.06rem; /*对垂直流动条有效*/
    height: 0.02rem;/*对水平流动条有效*/
  }

  /*定义滚动条的轨道颜色、内阴影及圆角*/
  .chatBox::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 0.06rem rgba(0,0,0,.3);
    background-color: mistyrose;
    border-radius: 0.03rem;
  }


  /*定义滑块颜色、内阴影及圆角*/
  .chatBox::-webkit-scrollbar-thumb{
    border-radius: 0.07rem;
    -webkit-box-shadow: inset 0 0 0.06rem rgba(0,0,0,.3);
    background-color: gray;
  }

  /*定义两端按钮的样式*/
  .chatBox::-webkit-scrollbar-button {
    height:0.2rem ;
    background-color:cyan;
  }

  /*定义右下角汇合处的样式*/
  .chatBox::-webkit-scrollbar-corner {

    background:khaki;
  }

  .history_message{
    width: 100%;
    height: 0.2rem;
    color: gray;
    line-height: 0.2rem;
    text-align: center;
    margin-top: 0.1rem;
    background-color: #fbfbfc;
    margin-bottom: 0.07rem;
  }

  .chat_foot{
    width: 3.50rem;
    height:1.10rem ;
    margin: 0.07rem;
  }

  .editArea{
    width: 100%;
    height:1.10rem;
    background-color: white;
    font-size: 0.16rem;
    color: gray;
    border: none;
    outline: none;
    resize: none;
  }

  .sendMessage{
    width: 0.6rem;
    height: 0.3rem;
    font-size: 0.16rem;
    color: blue;
    border-radius: 0.05rem;
    background-color:gainsboro;
    border: silver;
    float: right;
    position: absolute;
    top:61.8%;
    left: 17.5%;
  }
</style>
