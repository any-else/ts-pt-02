// mình hiểu đỡn giản dùng type_guards để kiểm tra kiểu dữ liệu hoặc kiểm tra đối tượng
/**
 * dựa vào 3 từ khoá:
 *  typeof: kiểm tra kiểu dữ liệu ,
 * instanceof: ,
 * in
 */
var fullName = 1000;
var listNumber = [1, 2, 3, 4, 5]; // Array.isArray()
console.log(" kiểm tra kiểu dữ liệu", typeof listNumber);
// demo lúc gọi hàm
var calcNumber = function (a, b) {
    if (typeof a == "number" && b == "number") {
        return a + b;
    }
    else if (typeof a == "string" || typeof b == "string") {
        return " Bạn phải truyền vào kiểu dữ liệu number";
    }
};
console.log(calcNumber("10", 20));
var checkNameInClass = function (person) {
    if ("permission" in person) {
        return "Đây là thầy giáo, Vui lòng lên trên để dạy";
    }
    else {
        return "Đây là học viên, về chỗ học";
    }
};
var student = {
    name: "Quang NM",
    age: 24,
};
var teacher = {
    name: "Vụ",
    age: 24,
    permission: "dạy học",
    teach: function () {
        console.log("dạy môn lập trình");
    },
};
console.log(checkNameInClass(student));
