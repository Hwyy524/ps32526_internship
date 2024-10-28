document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');
    const searchResultsDiv = document.getElementById('searchResults');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const query = document.getElementById('search-box__input').value.toLowerCase();

        fetch('http://localhost:3000/sp')
            .then(response => response.json())
            .then(products => {
                const results = products.filter(product => product.ten.toLowerCase().includes(query));
                searchResultsDiv.innerHTML = results.map(product => `
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="${product.hinh}" alt="Avatar">
                            </div>
                            <div class="flip-card-back">
                                <p>Mã sản phẩm: ${product.masp}</p>
                                <h4>${product.ten}</h4>
                                <p>Giá: ${product.gia} VND</p>
                                <button>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            })
            .catch(error => {
                console.error('Error:', error);
                searchResultsDiv.textContent = 'An error occurred. Please try again.';
            });
    });
});
