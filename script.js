document.addEventListener('DOMContentLoaded', function(){
  const offer_banner = [...document.querySelectorAll('.offer__banner')]
  const popup = document.querySelector('.popup')
  const popup_overlay = document.querySelector('.popup-overlay')
  const popup_close = document.querySelector('.popup__close')

  // Define data for popup
  var data = [
    {
      photo_img: 'https://adqdesign.co.uk/teststatic/images/modals/photos/ChrisBarnes_main.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "photo" and replaces it completely with image tag.
      }
  ];


// Initialize popup 
// $('.offer').magnificPopup({
//   key: 'image-popup',
//   items: data,
//   type: 'inline',
//   inline: {
//       // Define markup. Class names should match key names.
//       markup: '<div class="white-popup"><div class="mfp-close"></div>' + '<div сlass="mfp-photo"></div>' + '</div>'
//     }
//   });

  const showCount = () => {
    popup.classList.remove('popup-show')
    popup_overlay.classList.remove('popup-show')
  }

  const hideCount = () => {
    popup.classList.remove('popup-show')
    popup_overlay.classList.remove('popup-show')
  }

  offer_banner.forEach(banner => {
    banner.addEventListener('click', (e) => {
      popup.classList.add('popup-show')
      popup_overlay.classList.add('popup-show')
    })

  })

  popup_overlay.addEventListener('click', (e) => {
    popup.classList.remove('popup-show')
    popup_overlay.classList.remove('popup-show')
  })

  popup_close.addEventListener('click', (e) => {
    popup.classList.remove('popup-show')
    popup_overlay.classList.remove('popup-show')
  })
})