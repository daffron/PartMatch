import React from 'react'

function Intro (props) {
  return (
  <div>
    <div class="container-fluid slideanim backgroundtwo topmargin" id="about">
    <div class="row">
      <div class="col-sm-8">
        <h2>What We Are</h2>
        <h4 class='fontone'>Our goal:</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien sapien. Morbi tempor eu quam vitae pellentesque. Suspendisse potenti. Quisque vel nibh nec libero ultrices ultrices at vitae dolor. Nunc porttitor ullamcorper neque. Aliquam erat volutpat. Nam lectus massa, aliquet ut accumsan id, tempor eget neque. Duis lobortis mauris id turpis ultrices, ac malesuada felis congue. Ut imperdiet purus vel mattis placerat.
        </p>
      </div>
      <div class="col-sm-4">
        <img src="images/aboutme.jpg" class="picture img-rounded" width="280"/>
      </div>
    </div>
  </div>


  <div class="container-fluid bg-grey slideanim backgroundtwo img-rounded">
    <div class="row">
      <div class="col-sm-4">
        <img src="images/balloon2.JPG" class="picture img-rounded rotateimg90 " height="280"/>
      </div>
      <div class="col-sm-8 values">
        <h2>Our Story</h2>
        <h4 class='fontone'> We are here because..
</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien sapien. Morbi tempor eu quam vitae pellentesque. Suspendisse potenti. Quisque vel nibh nec libero ultrices ultrices at vitae dolor. Nunc porttitor ullamcorper neque. Aliquam erat volutpat. Nam lectus massa, aliquet ut accumsan id, tempor eget neque. Duis lobortis mauris id turpis ultrices, ac malesuada felis congue. Ut imperdiet purus vel mattis placerat.
        </p>
      </div>
    </div>
  </div>
  </div>
  )

}

export default Intro