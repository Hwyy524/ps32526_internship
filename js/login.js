document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.username === username && user.password === password);
                if (user) {
                    alert("Đăng nhập thành công!")
                    window.location.href = '/index.html'; // Redirect to homepage
                } else {
                    alert("Tài khoản hoặc mật khẩu không đúng!")
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Đã xảy ra lỗi. Vui lòng thử lại!")
            });
    });
});
