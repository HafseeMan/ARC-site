// module.exports={A:{A:{"1":"A B","2":"I D F E hB"},B:{"1":"C O H Q J K L U x M VB"},C:{"1":"0 1 2 3 4 5 6 7 8 9 G V I D F E A B C O H Q J K L W X Y Z a b c d e f g h i j k l m n o p q r s t u v w P y z KB BB IB DB EB FB GB CB T N S LB MB NB OB PB QB RB SB TB U x","2":"rB JB oB gB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 A B C O H Q J K L W X Y Z a b c d e f g h i j k l m n o p q r s t u v w P y z KB BB IB DB EB FB GB CB T N S LB MB NB OB PB QB RB SB TB U x M VB fB aB ZB","2":"G V I D F E"},E:{"1":"B C O H WB R AB iB jB","2":"G zB XB","132":"V I D F E A bB cB dB eB"},F:{"1":"0 1 2 3 4 5 6 7 8 9 B C Q J K L W X Y Z a b c d e f g h i j k l m n o p q r s t u v w P y z BB DB EB FB GB CB T N S lB mB nB R UB pB AB","2":"E kB"},G:{"1":"YB 0B 1B 2B 3B 4B 5B 6B 7B 8B","2":"XB","132":"F qB HB sB tB uB vB wB xB yB"},H:{"516":"9B"},I:{"1":"M FC","2":"JB AC BC CC","132":"G DC HB EC"},J:{"1":"A","132":"D"},K:{"1":"A B C P R UB AB"},L:{"1":"M"},M:{"1":"N"},N:{"260":"A B"},O:{"1":"GC"},P:{"1":"G HC IC JC KC LC WB MC NC"},Q:{"1":"OC"},R:{"1":"PC"},S:{"132":"QC"}},B:1,C:"Form validation"};
// Example starter JavaScript for disabling form submissions if there are invalid fields
function SubForm(){
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else{
            Submission()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()
}



function Submission(){
    $.ajax({
      url:"https://api.apispreadsheets.com/data/ouGq1ih3d8ZQ9GZj/",
      type:"post",
      data:$("#myForm").serializeArray(),
      success: function(){
        //alert("Form Data Submitted :)")
        displayMessage()
      },
      error: function(){
        alert("There was an error :(")
      }
    });

  }




function displayMessage(){
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // open the modal
  modal.style.display = "block";


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}  
