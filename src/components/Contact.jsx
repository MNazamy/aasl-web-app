import '../App.css'
import emailIcon from '../assets/icons/email.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import facebookIcon from '../assets/icons/facebook.png'
import whatsappIcon from '../assets/icons/whatsapp.svg'

function Contact() {

  return (
      <div className='contact-info'>
        <h1 className='page-title'>Contact Us / Sign Up</h1>
        <h5 style={{"font-size": "min(2.5vw,20px"}}>Please follow us on social media & WhatsApp for the latest and greatest on all things AASL related.</h5>
        
        <div className='contact-method-list'>
          <a className="contact-method" style={{color:'darkblue'}} href="https://chat.whatsapp.com/EjR6zszj3osAsVmzqoLQJw"><img className='contact-icon' src={whatsappIcon}/></a>  
          <a className="contact-method" style={{color:'darkblue'}} href="https://www.instagram.com/aasl_official/"><img className='contact-icon' src={instagramIcon}/></a>
          <a className="contact-method"  style={{color:'darkblue'}} href="https://www.facebook.com/afghanamericansportsleague"><img className='contact-icon' src={facebookIcon}/></a>
          <a className="contact-method" style={{color:'darkblue'}} href="mailto:afghanamericansoccer@gmail.com"><img className='contact-icon' src={emailIcon}/></a>

        </div>

        

      </div>
  )
}

export default Contact
