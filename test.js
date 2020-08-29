function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(xhttp.response))
        // document.getElementById("demo").innerHTML =
        // this.responseText;
      }
    };
    xhttp.open("GET",'product.json', true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhttp.send();
  }
// $.getJSON("product.json", function(json) {
//   console.log(json); // this will show the info it in firebug console
// });
// fetch("./product.json").then(res => {
//     console.log(res);
//     console.log(res.json())
// })
// var json = (function() {
//   var json = null;
//   $.ajax({
//     'async': false,
//     'global': false,
//     'url': "/product.json",
//     'dataType': "json",
//     'success': function(data) {
//       json = data;
//     }
//   });
//   return json;
// })();
// console.log(json)
// function loadDoc(callback) {   

//   var xobj = new XMLHttpRequest();
//       xobj.overrideMimeType("application/json");
//   xobj.open('GET', 'product.json', true); // Replace 'appDataServices' with the path to your file
//   xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == "200") {
//           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//           callback(xobj.responseText);
//         }
//   };
//   xobj.send(null);  
// }

// function loadDoc(cb){
//   // read text from URL location
//   var request = new XMLHttpRequest();
//   request.open('GET', 'product.json', true);
//   request.send(null);
//   request.onreadystatechange = function () {
//       if (request.readyState === 4 && request.status === 200) {
//           var type = request.getResponseHeader('Content-Type');

//                  try {
//                    cb(JSON.parse(request.responseText));
//                  }catch(err) {
//                    cb(err);
//                  }
//       }
//   }
// }