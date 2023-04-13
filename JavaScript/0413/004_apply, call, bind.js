// apply, call, bind

// ✅ call
// 📍 call() 메서드의 인수에 this 로 사용할 값을 전달할 수 있습니다.
var peter = {
    name : 'Peter Parker',
    sayName : function(){    
          console.log(this.name);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  peter.sayName.call(bruce); // 'Bruce Wayne'


  // 📍 아래와 같이 아규먼트를 전달해줄 수 있습니다.
  var peter = {
    name : 'Peter Parker',
    sayName : function(감탄사){    
          console.log(this.name + 감탄사);
      }
  }

  peter.sayName() // Peter Parkerundefined
  peter.sayName('!') // Peter Parker!
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  peter.sayName.call(bruce, '!');


// ✅ apply
// 📍 this 로 사용할 값을 전달할 수 있으며, 배열의 형태로도 전달할 수 있습니다.
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
          console.log(this.name+ ' is '+ is + ' or ' + is2);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  
  peter.sayName.apply(bruce, ['batman', 'richman']);
  // Bruce Wayne is batman or richman
  


  // 👩‍💻  call과 apply 비교
  // 비교 1
    var peter = {
        name: 'peter',
        sayName: function() {
            console.log(this.name)
        }
    }


// ✅ bind

function sayName() {
    console.log(this.name)
}

var peter = {
    name: 'peter',
    say: sayName.bind(bruce),
}

var bruce = {
    name: 'bruce',
    say: sayName,
}

peter.say() // peter
bruce.say() // bruce

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */