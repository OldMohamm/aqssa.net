document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var icon = document.querySelector('.dark-mode-toggle i');
    
    checkbox.addEventListener('change', function() {
      if(checkbox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        // ... other code to apply dark mode
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        // ... other code to apply light mode
      }
    });
  });