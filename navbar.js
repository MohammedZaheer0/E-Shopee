let Target = document.getElementById("body");

let Navbar = document.createElement("nav")
Target.appendChild(Navbar);

let H2Tag = document.createElement("h2");
H2Tag.innerHTML = "E-Shopee";
Navbar.appendChild(H2Tag);

let InnerDiv = document.createElement("div");
InnerDiv.setAttribute("class","innernav");
Navbar.appendChild(InnerDiv);

let Atag = document.createElement("a");
Atag.setAttribute("href","index.html");
Atag.innerHTML = "Home";
InnerDiv.appendChild(Atag);

let Atag1 = document.createElement("a");
Atag1.setAttribute("href","blog.html");
Atag1.innerHTML = "Blog";
InnerDiv.appendChild(Atag1);

let Atag2 = document.createElement("a");
Atag2.setAttribute("href","aboutus.html");
Atag2.innerHTML = "About Us";
InnerDiv.appendChild(Atag2);

let Atag3 = document.createElement("a");
Atag3.setAttribute("href","contactus.html");
Atag3.innerHTML = "Contact Us";
InnerDiv.appendChild(Atag3);

let Atag4 = document.createElement("a");
Atag4.setAttribute("href","Orders.html");
Atag4.innerHTML = "Cart";
InnerDiv.appendChild(Atag4);