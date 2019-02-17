window.addEventListener('load', function(event) {
  console.log('DOM loaded..')
  //The variable 'featuredJobs' is declared in a scripts from job-browser.njk
  populateRandFeaturedJobs(featuredJobs)
})


function populateRandFeaturedJobs(featuredJobs) {
  let randFeatured = randomThreeFromArray(featuredJobs)
  let featuredElements = document.getElementsByClassName('featured-jobs__item')
  //{{ assetPath }}/images/logo.png
  //public\images\_jobs
  //{{ assetPath }}/images/_jobs/microsoft.png
  for (let i=0; i<featuredElements.length; i++) {
    let img = featuredElements[i].querySelector('.featured-jobs__img')
    let link = featuredElements[i].querySelector('.featured-jobs__link')
    let location = featuredElements[i].querySelector('.featured-jobs__location')
    let salary = featuredElements[i].querySelector('.featured-jobs__salary')

    img.src = `public/images/_jobs/${randFeatured[i].image}`
    link.innerHTML = randFeatured[i].position
    location.innerHTML = randFeatured[i].location
    salary.innerHTML = randFeatured[i].salary
  }
}


function randomThreeFromArray(arr) {
  let result = Array.from(arr)
  result = result.sort(() => 0.5 - Math.random())
  result = result.slice(0, 3)
  return result
}
