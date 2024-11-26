document.addEventListener("DOMContentLoaded", () => {
    const carForm = document.getElementById("carForm");
    const carTableBody = document.getElementById("carTable").querySelector("tbody");
    const sortYearButton = document.getElementById("sortYear");
    const sortPriceButton = document.getElementById("sortPrice");

    let cars = [];

    carForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const yearMade = parseInt(document.getElementById("yearMade").value);
        const price = parseInt(document.getElementById("price").value);

        cars.push({ name, yearMade, price });
        updateCarTable();
        carForm.reset();
    });

    sortYearButton.addEventListener("click", () => {
        cars.sort((a, b) => a.yearMade - b.yearMade);
        updateCarTable();
    });

    sortPriceButton.addEventListener("click", () => {
        cars.sort((a, b) => a.price - b.price);
        updateCarTable();
    });

    function updateCarTable() {
        carTableBody.innerHTML = "";
        cars.forEach((car) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${car.name}</td>
                <td>${car.yearMade}</td>
                <td>${car.price}</td>
            `;
            carTableBody.appendChild(row);
        });
    }
});