console.log("Hello from Javascript")
// alert("Welcome to Art for Science Communication!")

let portfolio = [
    {artist_src: "https://avatars0.githubusercontent.com/u/57967704?v=4&s=128", artist: "Jessica Kendall-Bar", project: "Elephant Seal Animation"},
    {artist_src: "https://avatars0.githubusercontent.com/u/57967704?v=4&s=128", artist: "Jessica Kendall-Bar", project: "Elephant Seal Animation"},
    {artist_src: "https://avatars0.githubusercontent.com/u/57967704?v=4&s=128", artist: "Jessica Kendall-Bar", project: "Elephant Seal Animation"},
    {artist_src: "https://avatars0.githubusercontent.com/u/57967704?v=4&s=128", artist: "Jessica Kendall-Bar", project: "Elephant Seal Animation"},
  ]
console.log(portfolio)

let sel = d3.select("#gallery")
.selectAll("div")
.data(portfolio)
.join("div")

sel.append("p").text((d) => d.artist)  /* d.species ? d.species : "don't know" */
sel.append("img").attr("src", d => d.artist_src).attr("title", d => d.artist)
.style("max-width", "400px")

// Now let's try with a csv

let csv_data = d3.csv("/data/artists_data.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].artist_src);
        console.log(data[i].project);
    }
});

console.log(csv_data)