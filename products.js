show("jewells");

function show(f) {
    let arr = JSON.parse(localStorage.getItem(f));
    let parent = document.getElementById("parent");
    arr.forEach(function (x) {
        let div = document.createElement("div");
        let name = document.createElement("h3");
        name.innerHTML = x.name;
        let price = document.createElement("h3");
        price.innerHTML = `price: ₹${x.price}`;
        let img = document.createElement("img");
        img.src = x.img;
        let btn = document.createElement("button");
        btn.innerText = "Add To Cart";
        btn.onclick = function () {
            cart(x);
        };
        btn.type = "button";
        div.append(name, price, img, btn);
        parent.append(div);
    });
}

function cart(element) {
    let arr = JSON.parse(localStorage.getItem("cartjewells"))
    console.log(arr, element);
        if(arr == null) {
            arr = [];
            arr.push(element);
        }
        else {
            arr = JSON.parse(localStorage.getItem("cartjewells"));
            var k = 0;
            for(i=0; i<arr.length; i++) {
                var c = 0;
                for(key in element) {
                    if(arr[i][key] == element[key]) {
                        c++;
                        break;
                    }
                }
                if(c>0) {
                 k++;
                 break;
                }
            }
            if(k > 0) {
                alert("jewell already added");
                return;
            }
            else {
                arr.push(element);
            }
        }
    localStorage.setItem("cartjewells", JSON.stringify(arr));
    
}