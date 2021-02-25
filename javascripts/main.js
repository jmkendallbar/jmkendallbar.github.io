console.log("Hello from Javascript")
// alert("Welcome to Art for Science Communication!")

let portfolio = [
    {artist_src: "https://news.ucsc.edu/2019/07/images/kendall-bar-jessica.jpg", artist: "Jessica Kendall-Bar", project: "Elephant Seal Animation"},
    {artist_src: "https://news.ucsc.edu/2019/07/images/kendall-bar-jessica.jpg", artist: "Jessica Kendall-Bar", project: "Elephant Seal Animation"},
    {artist_src: "https://news.ucsc.edu/2019/07/images/kendall-bar-jessica.jpg", artist: "Jessica Kendall-Bar", project: "Elephant Seal Animation"},
    {artist_src: "https://news.ucsc.edu/2019/07/images/kendall-bar-jessica.jpg", artist: "Jessica Kendall-Bar", project: "Elephant Seal Animation"},
  ]
console.log(portfolio)

let sel = d3.select("#gallery")
.selectAll("div")
.data(portfolio)
.join("div")

sel.append("p").text((d) => d.artist)  /* d.species ? d.species : "don't know" */
sel.append("img").attr("src", d => d.artist_src).attr("title", d => d.artist)
.style("max-width", "400px")