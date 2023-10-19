let tabs = document.querySelectorAll(".tabs__toggle"),
contents = document.querySelectorAll(".tabs__content");

tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        contents.forEach((con)=>{
            con.classList.remove("is-active");
        });
        tabs.forEach((tab)=>{
            tab.classList.remove("is-active");
        });
        contents[index].classList.add("is-active");
        tabs[index].classList.add("is-active");
    });
});

// Movie :)
let t = document.querySelectorAll(".tabs_toggle"),
c = document.querySelectorAll(".tabs_content");

t.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        c.forEach((co)=>{
            co.classList.remove("is_active");
        });
        t.forEach((ta)=>{
            ta.classList.remove("is_active");
        });
        c[index].classList.add("is_active");
        t[index].classList.add("is_active");
    });
});
// ==========================================================Complain Start ==========================================
let getComplain = async()=>{
    let res = await fetch("http://localhost:8000/complains");
    let data = await res.json();
    appendData(data);
    console.log(data);
  }
  getComplain();

  let appendData= (data)=>{
    let container = document.getElementById("showComplains");
    container.innerHTML = "";
    data.forEach((el)=>{
        let tr = document.createElement("tr");
        let complainId = document.createElement("td");
        complainId.innerText = el.complainId;
        let complainMessage = document.createElement("td");
        complainMessage.innerText = el.complainMessage;
        tr.append(complainId,complainMessage);
        container.append(tr);
    })
  }

  // ==========================================================Complain End ==========================================

// ========================================================== Movie start ==========================================

const addMovie = async  () => {
    let add_movie = {
      moviesImageUrl: document.getElementById("url").value,
      movieCategory: document.getElementById("category").value,
      movieTitle: document.getElementById("name").value,
      movieSubtitle: document.getElementById("subtitle").value,
      movie480QualitySize: document.getElementById("quality480").value,
      movie720QualitySize: document.getElementById("quality720").value,
      movie1080QualitySize: document.getElementById("quality1080").value,
      movieLatestOrNot: document.getElementById("latestOld").value,
      movieDescription: document.getElementById("desc").value,
      movieReleaseYear: document.getElementById("release").value,
      movieRating: document.getElementById("rating").value,
      movielangaugesAvailable: document.getElementById("langauges").value,
      movieDuration: document.getElementById("duration").value,
      movie480pVideoLink: document.getElementById("movie480").value,
      movie720pVideoLink: document.getElementById("movie720").value,
      movie1080pVideoLink: document.getElementById("movie1080").value,
      imageUrl1: document.getElementById("image1").value,
      imageUrl2: document.getElementById("image2").value,
      imageUrl3: document.getElementById("image3").value,
      imageUrl4: document.getElementById("image4").value,
      imageUrl5: document.getElementById("image5").value,
    };
    let res = await fetch("http://localhost:8000/movies", {
      method: "POST",
      body: JSON.stringify(add_movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    getMovies();
  };


  let getMovies = async()=>{
    let res = await fetch("http://localhost:8000/movies");
    let data = await res.json();
    appendMovies(data);
    console.log(data);
  }
  getMovies();

  let appendMovies = (data)=>{
    let container = document.getElementById("showProduct");
    container.innerHTML = "";
    data.forEach((el)=>{
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = el.moviesId;

        let td2 = document.createElement("td");
        let img = document.createElement("img");
        img.src = el. moviesImageUrl;
        td2.append(img);
        
        let td3 = document.createElement("td");
        td3.innerText = el.movieTitle;
        
        let td4 = document.createElement("td");
        td4.innerText = el.movieReleaseYear;
        
        let td5 = document.createElement("td");
        td5.innerText = el.movieRating;
        
        let td6 = document.createElement("td");
        td6.innerText = el.movieDuration;
        
        let td7 = document.createElement("td");
        td7.innerText = el.movieCategory;
      
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        container.append(tr);
    })
  }


// ========================================================== Movie End ==========================================
