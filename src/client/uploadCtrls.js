/* global FormData */
/* global XMLHttpRequest */

const $ = require('jquery');

const Keys = require('keys/dist/client');

exports.update = $ctrls => {
  const $btn = $ctrls.find('.keysUploadBtn');

  const $input = $ctrls.find('input');

  const val = $input.val();

  if (!val) {
    Keys.resetText($btn);
    $ctrls.removeAttr('data-status');

    return;
  }

  const fileName = /\/([^\/]+)$/.exec(val)[1];

  if (!fileName) {
    console.error('Could not parse file name from value:', val);

    $input.val('');
    exports.update($ctrls);

    return;
  }

  Keys.changeText($btn, `Remover (${fileName})`);

  $ctrls.attr('data-status', 'uploaded');
};

$(() => {
  $('body').on('click', '.keysUploadBtn', ev => {
    const $btn = $(ev.target);

    const $ctrls = $btn.closest('.keysUploadCtrls');

    const $progressBar = $ctrls.find('.keysProgress_bar');

    const $input = $ctrls.find('input');

    const $form = $ctrls.closest('form');

    const $submitBtn = $form.find('[type="submit"]');

    if ($ctrls.attr('data-status') === 'uploaded') {
      $input.val('');
      exports.update($ctrls);

      return;
    }

    const $fileInput = $('<input>')
      .attr('type', 'file')
      .val('');

    {
      const accept = $ctrls.attr('data-keys-accept');

      if (accept) {
        $fileInput.attr('accept', accept);
      }
    }

    function upload(file) {
      const xhr = new XMLHttpRequest();

      $input.val('');
      $progressBar.width(0);

      $btn.prop('disabled', true);
      $submitBtn.prop('disabled', true);

      Keys.clearFieldErrors($ctrls);
      $ctrls.attr('data-status', 'uploading');

      xhr.upload.addEventListener('progress',
        progressEv => $progressBar.width(
          `${(progressEv.loaded / progressEv.total) * 100}%`
        ),
      );

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== 4) {
          return;
        }

        $btn.prop('disabled', false);
        $submitBtn.prop('disabled', false);

        if (xhr.status !== 200) {
          $ctrls.attr('data-status', 'error');
          Keys.flagFieldError($input, 'Falha de upload.');

          return;
        }

        const result = JSON.parse(xhr.response);

        $input.val(decodeURIComponent(result.Location));
        exports.update($ctrls);
      });

      xhr.open('post', $ctrls.attr('data-keys-upload-endpoint'));

      {
        const data = new FormData();

        data.append('file', file);

        xhr.send(data);
      }
    }

    $fileInput.on('change', changeEv => {
      const files = changeEv.target.files;

      if (!files.length) {
        return;
      }

      const file = files[0];

      if (!Keys.fileUploadFilter) {
        upload(file);
      } else {
        Keys.fileUploadFilter($ctrls, file, upload);
      }
    });

    $fileInput.click();
  });

  $('.keysUploadCtrls').each(function () {
    exports.update($(this));
  });
});
