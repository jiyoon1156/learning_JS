const dog = {
  name: "doggy",
  sound: "wofwof!",
  say: function () {
    console.log(this.sound); //this 는 속해있는 곳
  },
};

const cat = {
  name: "catty",
  sound: "meow~",
};

cat.say = dog.say;
dog.say();
cat.say();
