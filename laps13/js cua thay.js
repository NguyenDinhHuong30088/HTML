var products = [
    name:"Flying Ninja",
    image:"nen/d2t8-A2BLO080003-BALO-NAM-NU-TOTOSHOP%20(3)_thumb.jpg"
    price: 12,
    star:3.5
star:5
},
{
    name:"Flying Ninja",
        image:"nen/d2t8-A2BLO080003-BALO-NAM-NU-TOTOSHOP%20(3)_thumb.jpg",
    price: 12,
    star:3.5
    star:1
},
{
    name:"Flying Ninja",
        image:"nen/d2t8-A2BLO080003-BALO-NAM-NU-TOTOSHOP%20(3)_thumb.jpg",
    price: 12,
    star:3.5
    star:2
},
{
    name:"Flying Ninja",
    @@ -27,7 +27,7 @@ var products = [
    name:"Flying Ninja",
    image:"nen/d2t8-A2BLO080003-BALO-NAM-NU-TOTOSHOP%20(3)_thumb.jpg",
    price: 12,
    star:3.5
    star:4.5
},
{
    name:"Flying Ninja",
    @@ -60,4 +60,26 @@ var products = [
    star:3.5
}

]
]
function gridProduct() {
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html += "<div class=\"col-md-4\">\n" +
            "                    <div class=\"item text-center\">\n" +
            "                        <img class=\"product-image\" src=\""+products[i].image+"\"/>\n" +
            "                        <h2 class=\"product-name\">"+products[i].name+"</h2>\n" +
            "                        <div class=\"star\">\n" +
            "                            <div class=\"star-box\">\n" +
            "                                <div class=\"star-rate\" style=\"width: "+(products[i].star/5*100)+"%\"></div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <p class=\"price\">$"+products[i].price+"</p>\n" +
            "                        <a href=\"#\" class=\"add-to-cart text-uppercase\">Add To Cart</a>\n" +
            "                    </div>\n" +
            "                </div>";
    }

    return g_html;
}
var grid = document.getElementById("grid-products");
grid.innerHTML = gridProduct();