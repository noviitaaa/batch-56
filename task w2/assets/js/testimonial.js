function fetchUrl(url) {
    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onerror = () => {
        reject("Network error!");
    };

    xhr.onload = () => {
        resolve(JSON.parse(xhr.responseText));
    };

    xhr.send();
    });
}


async function allTestimonial() {
    try {
    const testimonials = await fetchUrl(
        "https://api.npoint.io/eee58092f238a856f594"
    );

    const testimonialHTML = testimonials.map((testimonial) => {
     console.log=(testimonial)
        return `<div class="testimonial">
                    <img
                    src="${testimonial.image}"
                    class="profile-testimonial"
                    />
                    <p class="quote">${testimonial.content}</p>
                    <p class="author">- ${testimonial.author}</p>
                </div>`;
    });

    document.getElementById("testimonials").innerHTML =
        testimonialHTML.join(" ");
    } catch (error) {
    alert(error);
    }
}

async function filterTestimonial(rating) {
    try {
    const testimonials = await fetchUrl(
        "https://api.npoint.io/eee58092f238a856f594"
    );
    
    const filteredTestimonialByRating = testimonials.filter((testimonial) => {
        return testimonial.rating == rating;
    });
    
    const testimonialHTML = filteredTestimonialByRating.map((testimonial) => {
        return `<div class="testimonial">
                        <img
                        src="${testimonial.image}"
                        class="profile-testimonial"
                        />
                        <p class="quote">${testimonial.content}</p>
                        <p class="author">- ${testimonial.author}</p>
                    </div>`;
    });
    
    document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ");
    } catch(error) {
    alert(error)
    }
}

allTestimonial();