const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    document.querySelector('#tracks').innerHTML = '';
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    if (data.length <= 0) {
        document.querySelector('#tracks').innerHTML = `${ "No tracks have been found." }`
    } else {
    for (let i = 0; i < 5; i++) {
        const track = data[i];
        const template1 = `
        <section class="track-item preview" onclick="loadTrack('${track.id}')">
            <img src="${ track.album.image_url }" aria-label="album art for ${track.name}">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
            <div class="label">
            <h2>${track.name}</h2>
            <p>
                ${track.artist.name}
            </p>
            </div>
        </section>
        `;
        document.querySelector('#tracks').innerHTML += template1;
    }
}
}

async function getAlbums (term) {
    document.querySelector('#albums').innerHTML = '';
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    console.log(data);
    if (data.length <= 0) {
        document.querySelector('#albums').innerHTML = `${ "No album has been found." }`
    } else {
    for (let i = 0; i < 10; i++) {
        const album = data[i];
        const template2 = `
        <section class="album-card" id="${ album.id }">
            <div>
                <img src="${ album.image_url }" aria-label="album art for ${album.name}">
                <h2>${ album.name }</h2>
                <div class="footer">
                    <a href="${album.spotify_url}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>
        `;
        document.querySelector('#albums').innerHTML += template2;
    }
}
}

async function getArtist (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    // console.log(data);
    if (data.length <= 0) {
        document.querySelector('#artist').innerHTML = `${ "No artist has been found." }`
    } else {
    const artist = data[0];
    const template =`
        <section class="artist-card" id="${ artist.id }">
            <div>
                <img src="${ artist.image_url }" aria-label="profile picture of ${artist.name}">
                <h2>${ artist.name }</h2>
                <div class="footer">
                    <a href="https://open.spotify.com/artist/${ artist.id }" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>
    `;
    document.querySelector('#artist').innerHTML = template;
    }
};

function loadTrack(trackId) {
    const template4 = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = template4;
    document.querySelector('#top').innerHTML = "Now Playing";
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}