import { Entry } from "src/scripts.js";


$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();

    var journalInput = $("input#journalInput").val();
    journalInput = journalInput.split(" ");
    var titleInput = $("input#titleInput").val();
    var journalEntry = new Entry(titleInput, journalInput);

    journalEntry.countVowels(journalInput);
    journalEntry.countConsonants(journalInput);
    journalEntry.getTeaser(journalInput);

    $("#titleDisplay").text("Hello");
    $("#entryDisplay").text("Hello");
    $(".journal-display").show();
  });
});
