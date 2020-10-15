<template>
  <div class="chat">
    <div class="chat_head">
      <img :src="avatar" alt="客服头像"/>
      <div class="userInfo">
        <div class="server_name">{{username}}</div><!--客服昵称-->
        <div class="server_title">在线客服</div>
      </div>

    </div>
    <!--聊天区域-->
    <div class="chatBox">
      <div class="history_message"><span>无更多历史消息</span></div>

      <div class="chat_content">

      </div>
    </div>
    <!--消息发送框-->
    <div class="chat_foot" >
      <div class="chat_active" v-show="chatStatusActive">
        <label for="editArea"></label><textarea class="editArea" id="editArea" placeholder="请输入您的问题"></textarea><button class="sendMessage" @click="sendMessage()">发送</button>
      </div>
      <div class="chat_close" v-show="chatStatusClose">
        <span value="会话结束，欢迎为您服务!"></span>
        <button class="start—newChat_button" value="开始新的会话"></button>
      </div>
    </div>
  </div>
</template>

<script>
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
export default {
  name: "SingleChat",
  data () {
    return {
      username: 'jykf_0001', // 当前用户昵称  this.$store.getters.name
      avatar: 'http://www.jy-info.com/img/jykf_0001.png',//this.$store.getters.avatar, // 当前用户头像
      chatStatusActive:true,
      chatStatusClose:false,
      stompClient: '',
      socket: "",
      timer: '',
      clientUserName: 'jiuluo',
    }
  },
  methods: {
    initWebSocket () {// 初始化连接
      this.connection();
      let that= this;
      // 断开重连机制,尝试发送消息,捕获异常发生时重连
      this.timer = setInterval(() => {
        try {
          that.stompClient.send("test");
        } catch (err) {
          console.log("断线了: " + err);
          that.connection();
        }
      }, 5000);
    },
    connection() {// 连接websocket
      let _this = this;
      // 建立连接对象
      _this.socket = new SockJS('http://127.0.0.1:8080/jyinfo/endpoint-websocket', null, {timeout: 15000});
      // 获取STOMP子协议的客户端对象
      _this.stompClient = Stomp.over(_this.socket);
      // 定义客户端的认证信息，按需求配置
      let headers = {
        Authorization: ""
      }
      // 向服务器发起websocket连接
      _this.stompClient.connect(
        headers,
        (res) => {// 连接成功，订阅客服主题消息
          console.log('连接成功');
          console.log(res);
          _this.stompClient.subscribe('/chat/single/' + _this.clientUserName, (result) => {
            _this.showMessageContent(JSON.parse(result.body));
          });
        },
        (error) => {// 连接发生错误时的处理函数
          console.log("连接失败");
          console.log(error);
        }
      );
    },
    showMessageContent(message) {
      $(".chat_content").append("<div class='chat_left'><div class='chat_left_content'>" + message.content + "</div></div>")
    },
    sendMessage() {
      let editArea = $("#editArea");
      if (editArea.val() !== '') {
        this.stompClient.send("/jyinfo/app/v1/single/chat", {}, JSON.stringify({'content': editArea.val(), 'to': this.username, 'from': this.clientUserName}));
        $(".chat_content").append("<div class='chat_right'><div class='chat_right_content'>" + editArea.val() + "</div></div>")
        editArea.val('');
        console.log("发送成功");
      }
    },
    disconnect() {// 断开连接
      if (this.stompClient != null) {
        this.connection.disconnect();
      }
      console.log("断开连接");
    },
  },
  created() {
  },
  mounted() {
    this.initWebSocket();
  }
}
</script>

<style scoped>
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
  background-color: #f6f6f6;
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
  background-color: #f5f5f5;
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

.chatBox >>> .chat_left {
  width: 3.5rem;
  height: 0.35rem;
  margin: 0.2rem 0;
}
.chatBox >>> .chat_left .chat_left_content {
  width: auto;
  height: auto;
  border-radius: 0.05rem;
  background-color: #ffffff;
  line-height: 0.35rem;
  float: left;
  margin-left: 0.2rem;
  padding: 0 0.12rem;
}

.chatBox >>> .chat_right {
  width: 3.5rem;
  height: 0.35rem;
  margin: 0.2rem 0;
}
.chatBox >>> .chat_right .chat_right_content {
  width: auto;
  height: auto;
  border-radius: 0.05rem;
  background-color: #9eea6a;
  line-height: 0.35rem;
  float: right;
  margin-right: 0.2rem;
  padding: 0 0.12rem;
}

.history_message{
  width: 100%;
  height: 0.2rem;
  color: gray;
  line-height: 0.2rem;
  text-align: center;
  margin-top: 0.1rem;
  background-color: #f5f5f5;
  margin-bottom: 0.07rem;
}
.history_message span {
  cursor: pointer;
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
  border-radius: 0.05rem;
  background-color:gainsboro;
  border: silver;
  float: right;
  position: absolute;
  top:61.8%;
  left: 17.5%;
}
</style>
