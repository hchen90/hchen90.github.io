window.copyCode = function copyCode(button) {
  const codeWrapper = button.closest('.code-block-wrapper');
  if (!codeWrapper) return;

  const codeElement = codeWrapper.querySelector('code');
  if (!codeElement) return;

  const text = codeElement.textContent;

  navigator.clipboard.writeText(text).then(() => {
    button.setAttribute('data-copy-state', 'copied');
    const buttonText = button.querySelector('.copy-button-text');
    if (buttonText) buttonText.textContent = 'Copied!';

    setTimeout(() => {
      button.setAttribute('data-copy-state', 'copy');
      if (buttonText) buttonText.textContent = 'Copy';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
};
