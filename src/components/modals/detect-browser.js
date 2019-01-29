import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// -- BROWSER MODAL --
const BrowserModal = withReactContent(Swal);
const browserModalBackground = browserName => `https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/${browserName}/${browserName}.svg`;

const windowGlobal = typeof window !== 'undefined' && window;
const BrowserModalContent = browserName => (
  <div className="detect-browser--content">
    <div
      className="detect-browser--logo"
      style={{ backgroundImage: `url(${browserModalBackground(browserName)})` }}
    />
    <p>{`zauważyłem, że przeglądarka której używasz do przeglądania tej strony to ${browserName}.`}</p>
    <span>Ciągle jeszcze pracuję nad tym, aby blog wyświetlał się poprawnie na wszystkich przeglądarkach</span>
    <span>{` i ${browserName} posiada jeszcze kilka niedociągnięć wizualnych.`}</span>
    <p>
      <span>Jeżeli nie jest to dla Ciebie problem, zachęcam do otworzenia bloga przy użyciu Chrome, </span>
      <span>aby w pełni wykorzystać potencjał strony frontstack.pl.</span>
    </p>
    <p>Nic jednak nie stoi na przeszkodzie, abyś kontynuował przeglądanie na obecnej przeglądarce.</p>
  </div>
);

const browserPopup = (browserName) => {
  const lastCheck = window.localStorage.getItem('lastCheck') ? JSON.parse(window.localStorage.getItem('lastCheck')) : 0;
  const now = new Date().getTime();
  const showModal = now - lastCheck > 432000000; // 5 days = 432000000ms

  let confirmBtn;
  const handleClick = () => {
    window.localStorage.setItem('lastCheck', JSON.stringify(new Date().getTime()));
    confirmBtn.removeEventListener('click', handleClick);
  };

  showModal && BrowserModal.fire({
    title: <p className="detect-browser--title">Cześć,</p>,
    customClass: 'detect-browser',
    html: BrowserModalContent(browserName),
    confirmButtonClass: 'detect-browser--confirm',
    showCloseButton: false,
    focusConfirm: false,
    confirmButtonText: 'Przejdź do strony',
    confirmButtonAriaLabel: 'ok',
    onBeforeOpen: () => {
      confirmBtn = BrowserModal.getConfirmButton();
      confirmBtn.addEventListener('click', handleClick);
    }
  });
};

export default browserPopup;
