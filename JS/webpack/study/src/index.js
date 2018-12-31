import _ from "lodash"
import $ from "jquery"
//config.js 配置可以处理的loader
//loader的处理规则:从后往前
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  $(function(){
      $("li:odd").css("background-color","pink")
      $("li:even").css("background-color","lightBlue")
  })