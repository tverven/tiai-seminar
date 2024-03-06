document.addEventListener('DOMContentLoaded', function() {
  var abstracts = document.querySelectorAll('.abstract');

  // Function to toggle abstract visibility
  function toggleAbstract() {
    var abstract = this.nextElementSibling; // Get the next element, which is the abstract
    abstract.classList.toggle('show'); // Toggle the 'show' class
  }

  // Add click event listener to each title
  abstracts.forEach(function(abstract) {
    var title = abstract.previousElementSibling.previousElementSibling; // Get the title
    title.addEventListener('click', toggleAbstract);
  });
});

