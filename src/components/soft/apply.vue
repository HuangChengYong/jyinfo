<template>
  <div class="apply_outline">
    <div class="apply">

      <div class="apply_desc">
        <span class="apply_enterprise_title ">甲悦信息科技发展（上海）有限公司</span>
        <div class="apply_enterprise_position apply_enterprise_Name"><div>【优先】</div>{{item.position }}</div>
        <!--<div class="recruitment_groups_condition">{{ item.condition }}</div>-->
        <div class="apply_enterprise_details_bar">
          <div class="apply_enterprise_bar_content"  v-for=" (item, index_second) in item.workplcae" :key="index_second">{{ item }}</div>
        </div>
        <div class="apply_cutline"></div><!--分割线-->
      </div>
      <div class="apply_form_outline">
        <form class="apply_form">
          <div class="apply_enterprise_title">上传资料</div>
          <div class="apply_form_content">
            <div class="apply_form_content_attr_title apply_form_content_attr_CV">上传简历<span>*</span></div>
            <div class="apply_form_content_file" v-on:mouseover="changeBackColor(0)" v-on:mouseout="recoverBackColor(0)" >
              <el-upload
                ref="uploadfile1"
                style="display: none"
                class="upload_file1"
                name="files"
                action='http://localhost:8088/recruition/uploadFile/?senceCode=CV'
                :on-success="handleSuccessCV"
                :on-error="handlefaild"
                :on-exceed="handleExceed"
                :auto-upload="true"
                :file-list="file_CV" >
                <el-button slot="trigger" size="small" type="primary" id="fileCV_span1">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
              <div class="fileCV_span"  @click="upload_CV('fileCV_span1')" >上传简历</div>

            </div>
            <div class="apply_for_upload_attach_format">支持pdf、doc、xls、ppt、docx、pptx、jpg、jpeg、png、txt等简历格式</div>
          </div>
          <div class="apply_form_content">
            <div class="apply_form_content_attr_title">上传附件</div>
            <div class="apply_form_content_file" v-on:mouseover="changeBackColor(1)" v-on:mouseout="recoverBackColor(1)">
              <el-upload
                ref="uploadfile2"
                class="upload_file2"
                style="display: none"
                name="files"
                action='http://localhost:8088/recruition/uploadFile/?senceCode=attach'
                :on-success="handleSuccessAttach"
                :on-error="handlefaild"
                :on-exceed="handleExceed"
                :auto-upload="true"
                :file-list="file_attach">
                <el-button slot="trigger" size="small" id="fileCV_span2" type="primary"></el-button>
              </el-upload>
              <div class="fileCV_span"  @click="upload_CV('fileCV_span2')" >上传附件</div>
            </div>
            <div class="apply_for_upload_attach_format">支持文档、图片、压缩包、视频、音频等格式文件，所有附件大小总和不超过50MB</div>
          </div>
          <div class="apply_enterprise_title apply_form_content_attr_file">个人信息</div>
          <div class="apply_cutline"></div><!--分割线-->
          <div class="apply_form_input">
            <div class="apply_form_Name">
              <div class="apply_form_content_attr_title">姓名<span>*</span></div>
              <div class="apply_form_content_attr"><input id="apply_fName"  name="apply_fName" v-model="form_Value.apply_fName" placeholder="请输入您的姓名" /> </div>
            </div>
            <div  class="apply_form_Name">
              <div class="apply_form_content_attr_title">手机号码<span>*</span></div>
              <div class="apply_form_content_attr"><input id="apply_fPhone"  name="apply_fPhone" v-model="form_Value.apply_fPhone" placeholder="请输入您的手机号码" /></div>
            </div>
            <div  class="apply_form_Name">
              <div class="apply_form_content_attr_title">邮箱<span>*</span></div>
              <div class="apply_form_content_attr"><input id="apply_fMailbox"  name="apply_fMailbox" v-model="form_Value.apply_fMailbox" placeholder="请输入您的邮箱" /></div>
            </div>
          </div>
          <button class="apply_submit_buttons"  type="button" @click.prevent="form_submit()">提交</button>
        </form>
      </div>

    </div>
  </div>
</template>
<script>
  import software from "../../assets/js/software";
  import { PositionApply } from "../../api/getData";
  import axios from 'axios'
  export default {
    name: "apply",
    data() {
      return {
        item:{},
        fRecruitionCode:0,
        file_CV: [],
        file_attach: [],
        form_Value:{

          file_CV_Path:'',
          file_attach_Path: '',
          apply_fName:'',
          apply_fPhone:'',
          apply_fMailbox:'',
          fRecruitionCode:0
        }
      }
    },
    methods: {
      //通过onchanne触发方法获得文件列表
       /*handleChange1() {
         let files=this.form_Value.file_CV;

       return '
      },*/
      upload_CV(fileCV_span){
        if(fileCV_span==='fileCV_span1'){
          document.getElementById('fileCV_span1').click();
        }
        if(fileCV_span==='fileCV_span2'){
          document.getElementById('fileCV_span2').click();
        }
      },
      handleExceed(files, fileList) {
        if(fileList.size>1){
          this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        }

      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleSuccessCV(response,files,fileList){
        this.form_Value.file_CV_Path=response.data[0].relativeFile
      },
      handleSuccessAttach(response,files,fileList){
        this.form_Value.file_attach_Path=response.data[0].relativeFile
      },
    handlefaild(){
        this.$message({
          showClose: true,
          message: '很抱歉，您的文件上传失败!',
          type: 'error'
        });
      },
      form_submit(){

        let form=this.form_Value;
        //表单提交
        let formValue={
          fEmployeeName:form.apply_fName,
          fRecruitionCode:form.fRecruitionCode,
          fEmployeeCv:form.file_CV_Path,
          fEmployeeAttach:form.file_attach_Path,
          fEmployeeMobile:form.apply_fPhone,
          fEmployeeEmail:form.apply_fMailbox,
          fCreateTime:new Date()
        }
        PositionApply({

          cvinfo:formValue
          }
        ).then(res => {
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: res.code === 0 ? '提交申请完成' : '提交申请失败,请重新操作'
            })
          } else {
            this.$message({
              type: 'error',
              message: res.message
            })

          }
          this.form={}
        });

      },
      changeBackColor(val){
        document.getElementsByClassName('fileCV_span')[val].setAttribute('style','background-color:rgba(200,201,204,1);');
      },
      recoverBackColor(val){
        document.getElementsByClassName('fileCV_span')[val].setAttribute('style','background-color:rgba(225,227,230,1);');
      }

    },
    mounted() {
        this.form_Value.cVBaseURl=axios.defaults.baseURL+"/recruition/uploadFile?sceneCode=CV"
        this.form_Value.attachBaseURl=axios.defaults.baseURL+"/recruition/uploadFile?sceneCode=attach"
    },
    created() {
      //从路由中获取数组下标
      let index_tag=this.$route.params.index_first;
      this.fRecruitionCode=index_tag;
      //获取对应的职位信息
      this.item = software.recruitment_groups_Desc[index_tag];

    }
  }
</script>
<style scoped>
  apply_outline{
    width: 19.2rem;
  }

  .apply {
    margin: auto 2.8rem auto;
    padding: 0;
    border: none;
  }

  a{
    text-decoration: none;

  }

  .apply_desc{
    width: 14rem;
    padding-top:0.4rem ;
    padding-left:0.22rem ;
    margin-bottom: 0.4rem;
    background:rgba(255,255,255,1);
  }

  .apply_enterprise_title{
    width: 100%;
    height:0.24rem;
    font-size:0.22rem;
    padding:0 0;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(44,46,51,1);
  }

  .apply_enterprise_Name{
    margin-top: 0.28rem;
  }

  .apply_enterprise_position{
    width:100%;
    height:0.26rem;
    font-size:0.26rem;
    font-family:Microsoft YaHei;
    margin-bottom: 0.19rem;
    font-weight:400;
    color:rgba(45,47,51,1);
  }

  .apply_enterprise_position  div{
    width:0.36rem;
    height:0.26rem;
    font-size:0.26rem;
    font-family:Microsoft YaHei;
    margin-left: -0.13rem;
    text-align: left;
    line-height: 0.26rem;
    font-weight:400;
    display: inline;
    margin-right: 0.2rem;
    color: rgb(249, 73, 4);
  }

  .apply_enterprise_details_bar{
    height: 0.26rem;
    padding-left: 0;
    margin-bottom: 0.4rem;
    color: rgba(90,94,102,1);
  }

  .apply_enterprise_bar_content {
    height: 0.22rem;
    font-size: 0.22rem;
    line-height: 0.22rem;
    font-family: Microsoft YaHei Arial, Helvetica, sans-serif;
    font-weight: 400;
    margin-right: 0.39rem;
    padding: 0;
    border: none;
    display: inline;
  }

  .apply_for_upload_attach_format{
    height:0.18rem;
    font-size:0.16rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(135,141,153,1);
    margin-top: 0.14rem;
    margin-bottom: 0.38rem;
  }

  .apply_cutline{
    width: 97.92%;
    height:1px;
    margin-bottom: 0.4rem;
    background:rgba(175,176,179,1);
  }

  .apply_form_content_attr_file{
    margin-bottom: 0.19rem;
  }

  .apply_form_outline{
    width: 14rem;
    margin-bottom: 0.39rem;
    padding-left: 0.2rem;
  }
  .apply_form{
    width: 100%;
    margin: 0 0;
  }
  .apply_form_content{
    width: 100%;
  }

  .apply_for_upload_attach_format{
    width: 100%;
    height:0.16rem;
    font-size:0.16rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    text-align: left;
    color:rgba(135,141,153,1);
  }

  .apply_form_content_attr_title{
    width: 100%;
    height:0.21rem;
    font-size:0.22rem;
    font-family:Microsoft YaHei;
    margin-bottom: 0.25rem;
    font-weight:400;
    color:rgba(90,94,102,1);
  }

  .apply_form_content_file{
    padding: 0;
    width: 3.2rem;
  }

  .apply_form_content_attr_CV{

    margin-top: 0.3rem;
  }

  .apply_form_content_attr_CV span{
    height:0.21rem;
    font-size:0.22rem;
    line-height: 0.5rem;
    text-align: center;

  }

  .fileCV_span{
    width: 3.2rem;
    height:0.5rem;
    font-size:0.18rem;
    text-align: center;
    line-height: 0.5rem;
    background:rgba(225,227,230,1);
  }

  .fileCV_span:hover{
    width: 3.2rem;
    height:0.5rem;
    font-size:0.18rem;
    text-align: center;
    line-height: 0.5rem;
  }

  .upload_file1, .upload_file2{
    width: 100%;
    height:0.5rem;
    position: absolute;
    margin: 0;
    opacity:0;filter:alpha(opacity=0);
  }

  .upload_file1 >>>  input[type='file'],
  .upload_file2 >>>  input[type='file']{
    width: 3.2rem;
    height:0.5rem;
  }


  .apply_form_input{
    width: 7.2rem;
    height: 2.12rem;
    position: absolute;
  }


  .apply_form_Name{
    width:3.2rem;
    height: 0.92rem;
    float: left;
    margin-bottom: 0.29rem;
    margin-right: 0.4rem;
    padding:0 0;
  }

  .apply_form_content_attr_title{
    width:3.2rem;
    height:0.22rem;
    font-size:0.22rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(90,94,102,1);

  }

  .apply_form_content_attr_title span{
    vertical-align: middle;
    padding-left: 0.02rem;
    color: red;
  }

  .apply_form_content_attr{
    width:3.2rem;
    height:0.5rem;
    border:1px solid rgba(176,176,180,1);

  }

  .apply_form_content_attr input{
    width: 100%;
    height: 100%;
    font-size: 0.18rem;

  }

  .apply_submit_buttons{
    width:2.8rem;
    height:0.66rem;
    font-size:0.26rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    margin: 3.3rem 5.6rem 0.9rem;
    color:rgba(255,255,255,1);
    background:linear-gradient(45deg,rgba(253,176,144,1),rgba(253,126,130,1));
    border: none;
    border-radius:0.33rem;
  }
</style>

