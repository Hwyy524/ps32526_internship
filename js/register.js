document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;

        if (password !== password2) {
            alert("Mật khẩu không giống. Vui lòng thử lại!")
            return;
        }

        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
            .then(response => response.json())
            .then(data => {
                alert("Đăng ký thành công");
                window.location.href = '/dn.html'; // Redirect to homepage
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Đã xảy ra lỗi. Vui lòng thử lại!")
            });
    });
});
