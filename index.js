var sizes = [window.innerHeight, 500, 350, 225, 150, 90, 55, 25, 15, 5, 2];
var titles = ["Baby 👶","Easier than easy 😂","Easy 😀","Normal 🙂","Intermediate 😐","Hard 😬","Very hard 😡","Insane 😵", "Extreme 🔥","Demon 👿","Impossible 💀"];
var title = document.getElementById("title")


var level = 0;

var w = window.innerWidth;
var h = window.innerHeight;

var posX = randint(0, w-sizes[level]);
var posY = randint(0, h-sizes[level]);

title.innerHTML = "Find the invisible "+sizes[level]+"x"+sizes[level]+" square on the screen. Level: "+titles[level];

var showed = false;
addEventListener("keypress", function(event) {
    if (event.key === "Enter" && showed == false) {
        if(level<11){
            var obj = document.createElement("div");
            obj.setAttribute("id","collider");
            obj.style.width = sizes[level]+"px";
            obj.style.height = sizes[level]+"px";
            obj.style.backgroundColor = "red";
            obj.style.position = "absolute";
            obj.style.left = posX+"px";
            obj.style.top = posY+"px";
            document.body.append(obj);
            showed = true;
        }
        
    }
});


  
document.addEventListener("click", check);
function check(event) {
    if(event.clientX >= posX && event.clientX < posX+sizes[level] && event.clientY >= posY && event.clientY < posY+sizes[level]){
        
        level++;
        if(level <11){
            title.innerHTML = "Find the invisible "+sizes[level]+"x"+sizes[level]+" square on the screen. Level: "+titles[level];
            posX = randint(0, w-sizes[level]);
            posY = randint(0, h-sizes[level]);
            if(document.getElementById("collider")!=null){
                document.getElementById("collider").remove();
            }
            showed = false;
        }
        else{
            if(document.getElementById("collider")!=null){
                document.getElementById("collider").remove();
            }
            title.innerHTML = "Congrats! You've found all pixels";
        }
    }
}

function randint(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}