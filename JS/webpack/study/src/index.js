import _ from "lodash"
import $ from "jquery"
import "./css/index.css"

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChildLast(component());

  $(function(){
      $("li:odd").css("background-color","pink")
      $("li:even").css("background-color","lightBlue")
  })