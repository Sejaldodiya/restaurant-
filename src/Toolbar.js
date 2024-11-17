import React from 'react'
import './Toolbar.css'
import 'bootstrap'
function Toolbar() {
  return (
    <div>
      <body></body>
      <header>
        <div style={{float:'left',paddingLeft:'200px'}}>
        <img src='https://th.bing.com/th/id/OIP.0AQLbWKqt1e7CQF-uUoXyAHaHZ?pid=ImgDet&w=207&h=207&c=7&dpr=1.3' alt='sorry' width='50%'/>
        </div>
        <div style={{float:'left',paddingLeft:'200px'}}>
     <ul>
      <li><a href="default.asp">Home</a>
        </li>
      <li><a href="news.asp">News</a></li>
      <li><a href="contact.asp">Contact</a></li>
      <li><a href="about.asp">About</a></li>
    </ul>
    </div>
</header>

   </div>
  )
}

export default Toolbar