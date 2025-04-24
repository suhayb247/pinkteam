document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const inputs = card.querySelectorAll('input');
        const isDisabled = inputs.length ? inputs[0].disabled : true;
  
        inputs.forEach(input => {
          input.disabled = !isDisabled;
          input.style.background = isDisabled ? '#fff' : '#d0ddf2';
          input.style.border = isDisabled ? '1px solid #ccc' : 'none';
        });
  
        btn.innerHTML = isDisabled ? '<i class="bi bi-check-lg"></i>' : '<i class="bi bi-pencil"></i>';
  
        const paymentMethods = card.querySelectorAll('.payment-method');
        paymentMethods.forEach(pm => {
          let deleteBtn = pm.querySelector('.delete-btn');
          if (isDisabled) {
            if (!deleteBtn) {
              deleteBtn = document.createElement('button');
              deleteBtn.classList.add('delete-btn');
              deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
              deleteBtn.addEventListener('click', () => {
                const confirmed = confirm('Are you sure you want to delete this payment method?');
                if (confirmed) {
                  pm.remove();
                }
              });
              pm.appendChild(deleteBtn);
            }
          } else {

            if (deleteBtn) {
              deleteBtn.remove();
            }
          }
        });
      });
    });
  
   
    const settingsBtn = document.querySelector('.settings-icon');
    const settingsModal = document.getElementById('settingsModal');
    const closeSettings = document.getElementById('closeSettings');
  
    if (settingsBtn && settingsModal && closeSettings) {
      settingsBtn.addEventListener('click', () => {
        settingsModal.classList.add('active');
      });
  
      closeSettings.addEventListener('click', () => {
        settingsModal.classList.remove('active');
      });
    }
  

    const textRadios = document.querySelectorAll('input[name="textSize"]');
    textRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        document.body.style.fontSize = `${radio.value}px`;
      });
    });
  });