window.addEventListener('load', function(event) {
  console.log('DOM loaded..')
  //The variable 'featuredJobs' is declared in a scripts from job-browser.njk
  populateRandFeaturedJobs(featuredJobs)
})

//Selects and renders a random 3 featured jobs from the data object in the.
//TODO think of a way to achieve the same without js or write a non js fall back.
//Posibly the template could render the first 3 featured jobs and if js is enabled
//it would remove those from the DOM and use the below code to render a random 3 instead.
function populateRandFeaturedJobs(featuredJobs) {
  let randFeatured = randomThreeFromArray(featuredJobs)
  let featuredElements = document.getElementsByClassName('featured-jobs__item')

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
