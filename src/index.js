import './style.css';


(function () {
  const burgerBtn = document.querySelector('.burger-menu');
  
  function toggleHandler(toggle) {
    burgerBtn.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  };
  })();
