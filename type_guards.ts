// mình hiểu đỡn giản dùng type_guards để kiểm tra kiểu dữ liệu hoặc kiểm tra đối tượng

/**
 * dựa vào 3 từ khoá:
 *  typeof: kiểm tra kiểu dữ liệu ,
 * instanceof: ,
 * in
 */

let fullName = 1000;

const listNumber: number[] = [1, 2, 3, 4, 5]; // Array.isArray()

console.log(" kiểm tra kiểu dữ liệu", typeof listNumber);

// demo lúc gọi hàm

const calcNumber = (
  a: number | string,
  b: number | string
): number | string => {
  if (typeof a == "number" && b == "number") {
    return a + b;
  } else if (typeof a == "string" || typeof b == "string") {
    return " Bạn phải truyền vào kiểu dữ liệu number";
  }
};

console.log(calcNumber("10", 20));

// instanceof (gác lại đến khi mình học class)

// in

interface IStudent {
  name: string;
  age: number;
}

interface ITeacher {
  name: string;
  age: number;
  permission: string;

  teach(): void;
}

type unknownPerson = IStudent | ITeacher;

const checkNameInClass = (person: unknownPerson) => {
  if ("permission" in person) {
    return "Đây là thầy giáo, Vui lòng lên trên để dạy";
  } else {
    return "Đây là học viên, về chỗ học";
  }
};

const student: unknownPerson = {
  name: "Quang NM",
  age: 24,
};

const teacher: unknownPerson = {
  name: "Vụ",
  age: 24,
  permission: "dạy học",

  teach() {
    console.log("dạy môn lập trình");
  },
};

console.log(checkNameInClass(student));
