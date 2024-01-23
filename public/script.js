
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchForm').addEventListener('submit', function (event) {
        event.preventDefault();
        searchByOwner();
    });

    document.getElementById('searchByNameForm').addEventListener('submit', function (event) {
        event.preventDefault();
        searchByName();
    });

    function searchByOwner() {
        const owner = document.getElementById('owner').value;
        fetch(`/api/v1/pets/owner?owner=${owner}`)
            .then(response => response.json())
            .then(data => {
                displayResult(data);
            })
            .catch(error => console.error('Error:', error));
    }

    function searchByName() {
        const petName = document.getElementById('petName').value;
        fetch(`/api/v1/pets/${petName}`)
            .then(response => response.json())
            .then(data => {
                displayResult(data);
            })
            .catch(error => console.error('Error:', error));
    }

    function displayResult(data) {
        const resultContainer = document.getElementById('result');
        if (data.message) {
            resultContainer.innerHTML = `<p>${data.message}</p>`;
        } else {
            resultContainer.innerHTML = `<p>Result:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
        }
    }
});