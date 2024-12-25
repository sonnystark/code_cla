// FETCHES DATA
const getTestimonials = async () => {
  let url = "../data/testimonials.json";
  try {
    let data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

// RENDERS DATA
const renderTestimonials = async () => {
  let testimonials = await getTestimonials();
  let html = "";
  testimonials.forEach((testimonial) => {
    let htmlSegment = `<div class="testimonials">
    <img src=${testimonial.photo}>
    <h2>${testimonial.name}</h2>
    <p>${testimonial.position}</p>
    <blockquote>${testimonial.text}</blockquote>
    </div>`;
    html += htmlSegment;
  });
  let testimonialSection = document.querySelector(".testimonialSection");
  testimonialSection.innerHTML = html;
};

renderTestimonials();

// console.log(renderTestimonials);
