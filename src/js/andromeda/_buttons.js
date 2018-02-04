// TODO:
// Incorporate aria-pressed for toggle buttons?
const nativeHTMLButtons = ['BUTTON', 'INPUT'];
const nativeInputButtons = ['submit', 'reset', 'button'];

const includeButtons = () => {
  const buttons = document.querySelectorAll('.m31.btn');

  if (buttons.length > 0) {
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      
      if (isNotNativeHTMLInputButton(button)) 
        addSpaceButtonTrigger(button);

      if (isNotNativeHTMLInputButton(button)
          && doesNotHaveRoleAttribute(button)
      ) {
        button.setAttribute('role', 'button');

        if (doesNotHaveTabIndexAttribute(button)) 
          button.setAttribute('tabindex', '0');
      }
    }
  }
}

const addSpaceButtonTrigger = (btn) => {
  btn.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      let targetBtn = e.target || e.srcElement;
      targetBtn.click();
      e.preventDefault();
    }
  });
}

const isNotNativeHTMLInputButton = (btn) => {
  return !(nativeHTMLButtons.includes(btn.tagName)
    && nativeInputButtons.includes(btn.type));
}

const doesNotHaveRoleAttribute = (btn) => {
  return !btn.hasAttribute('role');
}

const doesNotHaveTabIndexAttribute = (btn) => {
  return !btn.hasAttribute('tabindex');
}

export { includeButtons };