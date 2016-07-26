<template>
  <nav class="navbar navbar-default" id="app">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a v-link="'/home'">首页<span class="sr-only">(current)</span></a></li>
          <li><a v-link="'/list'">个人信息列表</a></li>
          <li class="dropdown">
            <a v-link="'/setting'" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">设置<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a v-link="'/header'">头像</a></li>
              <li><a v-link="'/nickname'">修改昵称</a></li>
              <li><a v-link="'/password'">修改密码</a></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
  <router-view></router-view>
</template>

<script>
  export default {
    data () {
      return {
        msg: '吃屁',
        items: [
          {text: 'add a item'},
          {text: 'add a item'},
          {text: 'add a item'},
          {text: 'add a item'}
        ]
      }
    },
    methods: {
      reverseMessage () {
        this.msg = this.msg.split('').reverse().join('')
      },
      add () {
        var text = this.msg.trim()
        if (text) {
          this.items.push({ text: text })
          this.msg = ''
        }
      },
      remove (index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>

<style>

</style>
