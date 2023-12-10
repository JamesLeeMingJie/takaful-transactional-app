$(function () {
  const inputDatePicker = document.querySelector("input[name='daterange']");

  inputDatePicker.addEventListener(
    "click",
    function () {
      $('input[name="daterange"]').daterangepicker(
        {
          locale: "DD-MM-YYYY",
          opens: "center",
        },
        function (start, end, label) {
          console.log(
            `${start.format("YYYY-MM-DD")} to ${end.format("YYYY-MM-DD")}`
          );

          $('input[name="daterange"]').val(
            `${start.format("YYYY-MM-DD")} to ${end.format("YYYY-MM-DD")}`
          );
        }
      );
    },
    { once: true }
  );
});

// $('input[name="daterange"]').click()) {
//   $('input[name="daterange"]').daterangepicker(
//     {
//       autoUpdateInput: true,
//       opens: "left",
//       locale: {
//         cancelLabel: "Clear",
//       },
//     },
//     function (start, end, label) {
//       console.log(
//         "A new date selection was made: " +
//           start.format("YYYY-MM-DD") +
//           " to " +
//           end.format("YYYY-MM-DD")
//       );
//     }
//   );
// }
// });
