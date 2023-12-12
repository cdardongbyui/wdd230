document.addEventListener("DOMContentLoaded", function () {
  const reservationTableBody = document.getElementById("reservationTableBody");
  const walkInTableBody = document.getElementById("walkInTableBody");

  fetch('data/rentals.json')
      .then(response => response.json())
      .then(data => {
          data.rentalPrices.forEach(rental => {
              const reservationRow = document.createElement("tr");
              reservationRow.innerHTML = `
                  <td>${rental.rentalType}</td>
                  <td>${rental.maxPersons}</td>
                  <td>
                      <div>${rental.reservation ? '$' + rental.reservation.halfDay : ''}</div>
                  </td>
                  <td>
                      <div>${rental.reservation ? '$' + rental.reservation.fullDay : ''}</div>
                  </td>
              `;
              reservationTableBody.appendChild(reservationRow);

              const walkInRow = document.createElement("tr");
              walkInRow.innerHTML = `
                  <td>${rental.rentalType}</td>
                  <td>${rental.maxPersons}</td>
                  <td>
                      <div>${rental.walkIn ? '$' + rental.walkIn.halfDay : ''}</div>
                  </td>
                  <td>
                      <div>${rental.walkIn ? '$' + rental.walkIn.fullDay : ''}</div>
                  </td>
              `;
              walkInTableBody.appendChild(walkInRow);
          });
      })
      .catch(error => console.error('Error fetching JSON:', error));
});
