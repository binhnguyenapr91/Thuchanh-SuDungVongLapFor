# Thuchanh-SuDungVongLapFor
Luyện tập sử dụng vòng lặp for.
Bài 1: Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for. Với N sẽ hiển thị từ 0 đến 5.

Hướng dẫn
Bước 1: Phân tích 3 phần trong vòng lặp for

Khởi tạo: i = 0

Điều kiện: i < 5

Lệnh lặp lại: i = i + 1

Bước 2: Viết mã vòng lặp for

let i;
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
Lưu ý: i có thể được khởi tạo tại thời điểm khai báo, hoặc trong phần thân của vòng lặp.

Bước 3: Toàn bộ đoạn mã lệnh

<!DOCTYPE html>
<html>

<body>
    <h2>JavaScript Loops</h2>
    <p id="demo"></p>
    <script>
    let text = "";
    let i;
    for (i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
    </script>
</body>

</html>
Bước 4: Thực thi chương trình, quan sát kết quả.

=====================

Bài 2: Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.

Hướng dẫn
Bước 1: Khai báo biến để lưu số vừa nhập vào

let num = prompt("Enter your number: ");
Bước 2: Khai báo biến total và khởi tạo cho total giá trị ban đầu là 0, biến total dùng để lưu tổng.

let total = 0;
Bước 3: Xây dựng các phần của vòng lặp for

Khởi tạo: i = 1

Điều kiện: i <= num

Lệnh lặp lại: i = i + 1

Bước 4: Viết mã vòng lặp for

let i = 1;
for (; i <= num; i +=1) {
    //phần thân vòng lặp thực hiện tính tổng
}
Bước 5: Viết mã thực hiện tính tổng

total = total + i;
Bước 6: Hiển thị kết quả

alert(total);
Bước 7: Thực thi chương trình, quan sát kết quả.
