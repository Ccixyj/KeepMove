import _ from "lodash"
import $ from "jquery"
//config.js 配置可以处理的loader
//loader的处理规则:从后往前
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"
import "bootstrap/dist/css/bootstrap.css"

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());


$(function () {
    $("li:odd").css("background-color", "pink")
    $("li:even").css("background-color", "lightBlue")

    class Animal {
        static method(){
            console.log("call static metod");
            return "static method"
        }

        
        // constructor(name) {
        //     this.name = name
        // }
        
        constructor({name="123", age=123}) {
            this.name = name
            this.age = age
        }
    }
    Animal.foo  = 123

    const a = new Animal({
        name:"vivi"
    })
    console.log(a);
    console.log(` ${Animal.method} call value is ${Animal.method()}` );
    console.log(`static value foo is ${Animal.foo}` );
})

