const tableBody = document.querySelector('#books-table tbody');
function loadBooks() {
    fetch('http://localhost:3000/books')  // Lekéri a könyveket a szerverről
        .then(response => response.json())
        .then(books => {
           
            tableBody.innerHTML = '';  // Törli a meglévő sorokat, hogy friss adatokat adjon hozzá
            books.forEach(book => {
                const row = document.createElement('tr');  // Új sor létrehozása
                
                // Könyv ID cella
                const idCell = document.createElement('td');
                idCell.textContent = book.id;
                row.appendChild(idCell);

                // Könyv cím cella
                const titleCell = document.createElement('td');
                titleCell.textContent = book.title;
                row.appendChild(titleCell);

                // Szerző cella
                const authorCell = document.createElement('td');
                authorCell.textContent = book.author ? book.author : 'N/A';  // Ha nincs szerző, "N/A"-t jelenít meg
                row.appendChild(authorCell);

                // Sor hozzáadása a táblázathoz
                tableBody.appendChild(row);
            });
        });
}

// Oldal betöltésekor automatikusan lefut és lekéri a könyveket
document.addEventListener('DOMContentLoaded', loadBooks);