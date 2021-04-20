import React from 'react'

const Carousel = (props) => {
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div style={
            {
              width: '100%',
              height: '800px',
              backgroundImage: 'url(' + props.images[0] + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }
          } />
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>What is ASTROFLEX?</h1>
              <p style={
                {
                  fontsize: 'x-large'
                }}>
                ASTROFLEX is a great way to earn extra money. Simply you will use your own vehicle to deliver our
                packages and will get paid
                per delivery.
              </p>
              <p><a class="btn btn-lg btn-primary" href="#">Sign up</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div style={
            {
              width: '100%',
              height: '800px',
              backgroundImage: 'url(' + props.images[1] + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }
          } />
          <div class="container">
            <div class="carousel-caption">

              <h1>Why ASTROFLEX?</h1>
              <p style={ {fontsize: 'x-large'}}>We value your time, and that's why you can choose your schedule and set
                your own pace.</p>
              <p style={{fontsize: 'x-large'}}>Earn up to 50 AED per hour!</p>
              <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>

            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel;
