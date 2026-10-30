/* SMC Commercial Properties: contact forms.
   Progressive enhancement: without JavaScript the forms still post to Netlify Forms.
   With JavaScript, submissions are sent in the background and the visitor sees a status message. */
(function () {
  'use strict';

  function showStatus(el, kind, message) {
    el.className = 'form-status ' + kind;
    el.textContent = message;
  }

  document.querySelectorAll('form[data-netlify]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var status = form.querySelector('.form-status');
      var button = form.querySelector('button[type="submit"]');
      /* Build the email subject from the form: leasing uses the "I am a" choice, vendor uses its base label. */
      var subjectField = form.querySelector('input[name="subject"]');
      var typeField = form.querySelector('select[name="requester-type"]');
      var propertyField = form.querySelector('select[name="property"]');
      if (subjectField) {
        var base = typeField ? typeField.value : subjectField.getAttribute('data-base');
        if (base) {
          var prop = propertyField ? propertyField.value : '';
          subjectField.value = prop ? base + ' – ' + prop : base;
        }
      }

      var body = new URLSearchParams(new FormData(form)).toString();

      button.disabled = true;

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body
      })
        .then(function (response) {
          if (!response.ok) { throw new Error('HTTP ' + response.status); }
          form.reset();
          showStatus(status, 'ok', form.getAttribute('data-success'));
        })
        .catch(function () {
          showStatus(
            status,
            'err',
            'We couldn’t send your request. Please email ' + form.getAttribute('data-fallback') + ' instead.'
          );
        })
        .then(function () {
          button.disabled = false;
        });
    });
  });
})();
