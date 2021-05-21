const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const blog = document.querySelector('#blog')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const blogContent = document.querySelector('#blog-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'Sobre mim',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#f53a53')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Meu Contato',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#f53a53')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


