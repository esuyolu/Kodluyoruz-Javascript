// Object
let arrayObj = [1, 2, 3];
let object1 = {obj: 1};

console.log("arrayObj", typeof(arrayObj));
console.log("object1", typeof(object1));

let item1 = new Object();
let item2 = {};

console.log("item1", typeof(item1));
console.log("item2", typeof(item2));

console.log(object1);

// Key-Value
let laptop = {
    brand: "Apple",
    model: "MacBook Pro"
}

console.log(laptop);
console.log(laptop.brand);
console.log(laptop.model);

laptop.brand = "Mac";
console.log(laptop);

laptop.version = "10.15.7";
console.log(laptop);

let keys = Object.keys(laptop);
console.log(keys);

keys.forEach(key => {
    console.log(key);
    console.log(laptop[key]);
    console.log("******");
});

let values = Object.values(laptop);
console.log(values);

values.forEach(value => {
    console.log(value);
})

// Object içinde metot nasıl eklenir?
let user = {
    firstName: "Esma",
    lastName: "Suyolu",
    score: [1, 2, 3, 4],
    isActive: true,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    sumScore: function() {
        let sum = 0
        this.score.forEach((i) => {
            sum += i;
        })
        return sum;
    }
};

console.log(user);
console.log(user.fullName());
console.log(user.sumScore());

// Object Destructuring 

let settings = {
    userName: "loremIpsum",
    password: "badPassword",
    isActive: false,
    ip: "127.0.0.0.1",
    serverName: "kodluyoruz.org"
};

let {userName, password, isActive, ip, serverName} = settings;

console.log(userName, password, isActive, ip, serverName);
console.log(userName);

let {userName: userName1, password: password1, isActive: isActive1, ...newSettings} = settings
console.log(newSettings);
console.log(userName1);

let settings1 = newSettings;
settings1.userName = "changed";
console.log(newSettings);
console.log(settings1);

let settings2 = {...newSettings};
settings2.userName = "esma";
console.log(newSettings);
console.log(settings2);

let score = [100, 200, 300, 400];
let [s1, s2, ...newScores] = score;
console.log(newScores);

let score1 = [...score];
score1[0]=1000;
console.log(score);
console.log(score1);

let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo);