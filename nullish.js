/**
 *  ngữ cảnh: khi mọi người call data từ phía bên server về mà chả may nó bị undefined hoặc null thì tôi
 *  không muốn nó nhận giá trị này => 1 giá trị (default) để thay thế
 */
var fetchAPI = "Hello world";
var data = fetchAPI !== null && fetchAPI !== void 0 ? fetchAPI : "default value";
console.log("kết quả của data", data);
