import youthPhoto from '../assets/youth_adults.svg'

import '../App.css'

function Mission() {

  return (
    <div className='mission-page-container'>
        <h1 className='page-title'>Mission Statement of the Afghan American Sports League (AASL)</h1>
        <p>The Afghan American Sports League (AASL) is a nonprofit organization committed to fostering unity and community among Afghan Americans through the power of sports. Our primary goal is to provide a platform for the Afghan youth to come together, engage in healthy competition, and build lasting connections within the framework of Islamic principles. AASL is dedicated to promoting a sense of belonging, understanding, and respect among Afghan Americans, transcending cultural and generational divides.</p>
        <p>At the heart of our mission is the belief that sports can serve as a powerful tool for community building and personal development. AASL focuses on organizing soccer, basketball, and volleyball events that are inclusive and accessible to both boys and girls. By providing a free and welcoming environment, we aim to create a space where Afghan youth can not only enjoy the benefits of physical activity but also develop essential life skills, teamwork, and leadership qualities. Through the lens of Islam, AASL seeks to instill a sense of responsibility, discipline, and respect for tradition and roots.</p>
        <img className='youth-photo' src={youthPhoto} />
        <p>AASL operates solely through the generosity of donations from members of the Afghan community who share our vision of unity and community development. We believe in the transformative power of coming together for a cause greater than ourselves. By fostering an environment where Afghans can have fun, network, and serve as mentors for the youth, AASL aims to contribute to the positive growth of the Afghan American community, reminding each member of their heritage while embracing the shared values that bind us all.</p>
    </div>
  )
}

export default Mission
