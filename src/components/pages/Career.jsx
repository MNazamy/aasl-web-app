import '../../App.css'

function Career() {

  return (
      <div className='contact-page-container'>
        <h1 className='page-title'>Career Development</h1>
        <h5 style={{"font-size": "min(3vw,20px", "color":"beige"}}>One of the goals of AASL is to create a network of Afghans to help eachother succeed in our careers and businesses.</h5>
      
        <h5>We are a group of Afghan career and business professionals who see the value in sports for our youth and our adults.</h5>

        <h5>We know the value of internships before getting a job out of college, which is why we are creating the AASL Internship program!</h5>

        <h5>There are now opportunities for 2 new roles that can help with career development for those in college.</h5>
        <h5><a style={{"font-size": "min(3vw,20px", "font-weight":"bold"}}href="https://forms.gle/wuTaHdvY2NQm73Pz7">Apply Here</a></h5>

        <h4>Web Development Internship</h4>
        <ul>
          <li>Learn about CI-CD tools like Github and how to deploy code with AWS resources</li>
          <li>Hands on experience with website development in React</li>
          <li>1:1 Mentorship with software engineer currently working in the field</li>
          <li>End the internship with valid resume experience and a project to showcase</li>
        </ul> 

        <h4>Social Media Marketing Internship</h4>
        <ul>
          <li>Hands on experience with a professional Instagram/Facebook/Website</li>
          <li>Strategize new ideas to increase followers with engaging posts on a schedule</li>
          <li>Practice obtaining footage in real-time with our weekly events</li>
          <li>End the internship with valid resume experience and a project to showcase</li>
        </ul>           
        <h5><a style={{"font-size": "min(3vw,20px", "font-weight":"bold"}}href="https://forms.gle/wuTaHdvY2NQm73Pz7">Apply Here</a></h5>

      </div>
  )
}

export default Career
