const data = [
  {
    title: 'Viaje 1',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pellentesque magna nec tempor. Integer lacinia turpis eu
            maximus facilisis. Integer diam turpis, dignissim eu enim ac, tincidunt luctus massa. Fusce ac sem consectetur, euismod dui id, elementum
            mauris. Quisque viverra quis dui a lacinia. Donec diam dolor, euismod nec elementum quis, feugiat ac sapien. Duis varius ex ut elit
            eleifend consequat. Integer porta fringilla quam, rhoncus hendrerit urna pharetra quis. Fusce pretium enim sit amet orci semper, quis
            accumsan neque dapibus. Quisque auctor tortor purus, et euismod sapien efficitur vel. Vivamus quis malesuada lacus, volutpat
            fermentum erat. Sed interdum auctor ligula, at varius tortor pharetra vitae.`,
    image: './assets/viajes-1.jpg'
    
  },
  {
    title: 'Viaje 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pellentesque magna nec tempor. Integer lacinia turpis eu
            maximus facilisis. Integer diam turpis, dignissim eu enim ac, tincidunt luctus massa. Fusce ac sem consectetur, euismod dui id, elementum
            mauris. Quisque viverra quis dui a lacinia. Donec diam dolor, euismod nec elementum quis, feugiat ac sapien. Duis varius ex ut elit
            eleifend consequat. Integer porta fringilla quam, rhoncus hendrerit urna pharetra quis. Fusce pretium enim sit amet orci semper, quis
            accumsan neque dapibus. Quisque auctor tortor purus, et euismod sapien efficitur vel. Vivamus quis malesuada lacus, volutpat
            fermentum erat. Sed interdum auctor ligula, at varius tortor pharetra vitae.`,
    image: './assets/viajes-2.jpg'
  },
  {
    title: 'Viaje 3',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat pellentesque magna nec tempor. Integer lacinia turpis eu
            maximus facilisis. Integer diam turpis, dignissim eu enim ac, tincidunt luctus massa. Fusce ac sem consectetur, euismod dui id, elementum
            mauris. Quisque viverra quis dui a lacinia. Donec diam dolor, euismod nec elementum quis, feugiat ac sapien. Duis varius ex ut elit
            eleifend consequat. Integer porta fringilla quam, rhoncus hendrerit urna pharetra quis. Fusce pretium enim sit amet orci semper, quis
            accumsan neque dapibus. Quisque auctor tortor purus, et euismod sapien efficitur vel. Vivamus quis malesuada lacus, volutpat
            fermentum erat. Sed interdum auctor ligula, at varius tortor pharetra vitae.`,
    image: './assets/viajes-3.jpg'
  }
];

const cities = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Bilbao",
"Granada",
"Malaga",
"Palma de Mallorca",
"Alicante",
"Zaragoza"
];

const blogTable = document.getElementById('articles')
const selectDestinos = document.getElementById('selectDestinos')

for (const viaje of data) {
  blogTable.innerHTML += `<article class="suggestions">
          <img src="${viaje.image}" alt="">
          <h2>${viaje.title}</h2>
          <p>${viaje.description}</p>
        </article>`;
}


for (const city of cities) {
  selectDestinos.innerHTML += `<option value="${city}">${city}</option>`
}