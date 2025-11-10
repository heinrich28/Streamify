// 🎧 Global Song List — accessible to all pages
window.songs = [
  // ===== Real Songs (1–11) =====
  { title: "GTA Pinas", artist: "Bugoy na Koykoy", file: "Bugoy na Koykoy - GTA Pinas.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273f0d2aa653a383225ed7c5ed7", favorite: true, genre: "Rap" },
  { title: "No", artist: "Bugoy na Koykoy", file: "Bugoy na Koykoy - No.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02227d47214349b584340456cf", favorite: true, genre: "Rap" },
  { title: "Benta Bounce", artist: "Bugoy na Koykoy", file: "Bugoy na Koykoy - Benta Bounce.mp3", cover: "https://i.scdn.co/image/ab67616d0000b2733bd64aadecd312f3314e8ea5", favorite: true, genre: "Rap" },
  { title: "U Lost", artist: "Supa Fly", file: "SUPAFLY - U lost.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273215294c3f78b49fabc921483", favorite: true, genre: "Hip-hop" },
  { title: "Gangsta Baby", artist: "HELLMERRY ft. Baby G", file: "HELLMERRY, Baby G.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273780560af566ebfb863fdfe8d", favorite: true, genre: "Hip-hop" },
  { title: "City Girl", artist: "Shanti Dope", file: "Shanti Dope - City Girl.mp3", cover: "https://i.scdn.co/image/ab67616d00001e023f6b45e30d5bd3906e2df44e", favorite: true, genre: "OPM" },
  { title: "Dynamite", artist: "BTS", file: "BTS - Dynamite.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8", favorite: false, genre: "K-pop" },
  { title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar, Giveon", file: "Justin Bieber - Peaches.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431", favorite: false, genre: "Pop" },
  { title: "One Kiss", artist: "Dua Lipa", file: "Calvin Harris, Dua Lipa - One Kiss.mp3", cover: "https://i.scdn.co/image/ab67616d00001e023ce13931214f0c268b588352", favorite: false, genre: "Pop" },
  { title: "Binibini", artist: "Zack Tabudlo", file: "Zack Tabudlo - Binibini.mp3", cover: "https://i.scdn.co/image/ab67616d0000b27316597b9b39bb83ede8504efa", favorite: false, genre: "OPM" },
  { title: "All I Have", artist: "Jennifer Lopez", file: "Jennifer Lopez - All I Have.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273c0d17a37386e6891cc4d8877", favorite: true, genre: "R&B" },

  // Rap (12–16) — placeholders
  { title: "G Wolf", artist: "Flow G", file: "music/G WOLF - FLOW G.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWHr9zKqZJreYYjQCV0-FmVlBn9ITRH5CPg&s", favorite: false, genre: "Rap" },
  { title: "Walang Makapa", artist: "Hev Abi", file: "music/Hev Abi - Walang Makapa.mp3", cover: "https://i.scdn.co/image/ab67616d0000b2737aad49b9a6cebd454fdea729", favorite: false, genre: "Rap" },
  { title: "Ashtray", artist: "MBNEL & O Side Mafia", file: "music/Ashtray.mp3", cover: "https://i.scdn.co/image/ab67616d00001e027b853633b7804adeaf624e3b", favorite: true, genre: "Rap" },
  { title: "Ghetto From The South", artist: "GA Chillerong Ghetto", file: "music/GA FT. LUCI J GHETTO FROM THE SOUTH.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02b20722cd6541b8906d958853", favorite: true, genre: "Rap" },
  { title: "New Wave Bebot - Remix", artist: "NO LIMIT 4L", file: "music/New Wave BEBOT ( Remix) - NIO ft. No LIMIT.mp3", cover: "https://i.scdn.co/image/ab6761610000e5ebbd567e6dc57b46a75667f189", favorite: false, genre: "Rap" },

  // R&B (17–21)
  { title: "Broken Clocks", artist: "SZA", file: "music/SZA - Broken Clocks.mp3", cover: "https://i.scdn.co/image/ab67616d00001e024c79d5ec52a6d0302f3add25", favorite: false, genre: "R&B" },
  { title: "Her Way", artist: "PARTYNEXTDOOR", file: "music/Her Way.mp3", cover: "https://i.scdn.co/image/ab67616d00001e026cfa297b0178fd91dca5c4f1", favorite: false, genre: "R&B" },
  { title: "Sativa", artist: "Jhene Aiko", file: "music/Jhené Aiko - Sativa.mp3", cover: "https://i.scdn.co/image/ab67616d0000b2737ccc8005498d9f75b03333c2", favorite: false, genre: "R&B" },
  { title: "Get You", artist: "Daniel Caesar", file: "music/Get You.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273767b0cb17b7b6b4b3edcdb1a", favorite: false, genre: "R&B" },
  { title: "The Weekend", artist: "SZA", file: "music/SZA - The Weekend.mp3", cover: "https://i.scdn.co/image/ab67616d00001e024c79d5ec52a6d0302f3add25", favorite: false, genre: "R&B" },

  // Hip-hop (22–26)
  { title: "Without Me", artist: "Eminem", file: "music/Eminem - Without Me.mp3", cover: "https://images.genius.com/43c0028d130e85df2c466f2075684dbe.300x300x1.png", favorite: false, genre: "Hip-hop" },
  { title: "Sicko Mode", artist: "Travis Scott", file: "music/Travis Scott - SICKO MODE.mp3", cover: "https://i.scdn.co/image/ab67616d00001e020eb9240c0c5bbba4a0495587", favorite: false, genre: "Hip-hop" },
  { title: "Money Trees", artist: "Kendrick Lamar", file: "music/Money Trees.mp3", cover: "https://images.genius.com/7ce90585a9da57d4ee67a09f27d8d6bc.300x300x1.jpg", favorite: false, genre: "Hip-hop" },
  { title: "HUMBLE.", artist: "Kendrick Lamar", file: "music/HUMBLE..mp3", cover: "https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699", favorite: false, genre: "Hip-hop" },
  { title: "God's Plan", artist: "Drake", file: "music/God's Plan.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02f907de96b9a4fbc04accc0d5", favorite: false, genre: "Hip-hop" },

  // K-pop (27–31) — placeholders
  { title: "What Is Love", artist: "Twice", file: "music/TWICE What is Love.mp3", cover: "https://i.scdn.co/image/ab67616d0000b27340d7efd2594a2b6bda60ea18", favorite: false, genre: "K-pop" },
  { title: "Cupid", artist: "Fifty Fifty", file: "music/FIFTY FIFTY (피프티피프티) - 'Cupid'.mp3", cover: "https://i.scdn.co/image/ab67616d00001e026e4c68dbc99bdf730fcfac09", favorite: false, genre: "K-pop" },
  { title: "Pink Venom", artist: "BLACKPINK", file: "music/BLACKPINK - Pink Venom.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273a05e34f50d239e48fe5de4c1", favorite: false, genre: "K-pop" },
  { title: "Attention", artist: "NewJeans", file: "music/NewJeans (뉴진스) 'Attention'.mp3", cover: "https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209", favorite: false, genre: "K-pop" },
  { title: "Hype Boy", artist: "NewJeans", file: "music/NewJeans (뉴진스) 'Hype Boy'.mp3", cover: "https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209", favorite: false, genre: "K-pop" },

  // EDM (32–36)
  { title: "Clarity", artist: "Zedd", file: "music/Zedd - Clarity ft. Foxes.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02941dd3b3343d9cb9329d37bf", favorite: false, genre: "EDM" },
  { title: "Under Control", artist: "Calvin Harris & Alesso", file: "music/Calvin Harris - Under Control.mp3", cover: "https://i1.sndcdn.com/artworks-000159489375-pia2au-t500x500.jpg", favorite: false, genre: "EDM" },
  { title: "Calling (Lose My Mind)", artist: "Sebastian Ingrosso & Alesso", file: "music/Sebastian Ingrosso & Alesso ft. Ryan Tedder -- Calling (Lose My Mind).mp3", cover: "https://i.scdn.co/image/ab67616d00001e028edd8e6a77eb276268f1315b", favorite: false, genre: "EDM" },
  { title: "I Need Your Love", artist: "Calvin Harris ft. Ellie Goulding", file: "music/Calvin Harris - I Need Your Love (Official Video) ft. Ellie Goulding.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273dcef905cb144d4867119850b", favorite: false, genre: "EDM" },
  { title: "We Found Love", artist: "Rihanna ft. Calvin Harris", file: "music/Rihanna - We Found Love (Lyrics) ft. Calvin Harris.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273bef074de9ca825bddaeb9f46", favorite: false, genre: "EDM" },

  // OPM (37–41) — placeholders
  { title: "Ikaw Lamang", artist: "Silent Sanctuary", file: "music/Silent Sanctuary - Ikaw Lamang.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273737bdadd1f88e23968f9783a", favorite: false, genre: "OPM" },
  { title: "Sundo", artist: "Imago", file: "music/Imago - Sundo.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273927d181a33cabcd8449c2b24", favorite: false, genre: "OPM" },
  { title: "Tagpuan", artist: "Moira Dela Torre", file: "music/Tagpuan - Moira Dela Torre.mp3", cover: "https://i.scdn.co/image/ab67616d00001e023786a94bd065b1b01ee20c9f", favorite: false, genre: "OPM" },
  { title: "Tadhana", artist: "Up Dharma Down", file: "music/Tadhana - Up Dharma Down.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02c37604dd465e90d386feb4bf", favorite: false, genre: "OPM" },
  { title: "Huwag Na Huwag Mong Sasabihin", artist: "Kitchie Nadal", file: "music/Huwag Na Huwag Mong Sasabihin.mp3", cover: "https://i.scdn.co/image/ab67616d0000b2734699830bfdf6e043cda2d294", favorite: false, genre: "OPM" },

      // Love Songs (42–46) — placeholders (romantic / emotional ballads)
  { title: "Say You Won't Let Go", artist: "James Arthur", file: "music/James Arthur - Say You Won't Let Go.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02b080cad9c173b3700bb90045", favorite: false, genre: "Love Songs" },
  { title: "A Thousand Years", artist: "Christina Perri", file: "music/Christina Perri - A Thousand Years.mp3", cover: "https://i.scdn.co/image/ab67616d00001e023dea4a2ccd58ad1f8e4dbb03", favorite: false, genre: "Love Songs" },
  { title: "I Won't Give Up", artist: "Jason Mraz", file: "music/jason mraz  i won't give up.mp3", cover: "https://i.scdn.co/image/ab67616d0000b2731a538dbbc117f0723b8e94da", favorite: false, genre: "Love Songs" },
  { title: "Heaven", artist: "Bryan Adams", file: "music/Bryan Adams - Heaven.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273cf1fee2a55e98e22bf358512", favorite: false, genre: "Love Songs" },
  { title: "When I Was Your Man", artist: "Bruno Mars", file: "music/Bruno Mars - When I Was Your Man.mp3", cover: "https://upload.wikimedia.org/wikipedia/en/6/62/Bruno-mars-when-i-was-your-man.jpg", favorite: false, genre: "Love Songs" },

  // Pop (47–50) — placeholders
  { title: "Levitating", artist: "Dua Lipa", file: "music/Dua Lipa - Levitating.mp3", cover: "https://i.scdn.co/image/ab67616d00001e022172b607853fa89cefa2beb4", favorite: false, genre: "Pop" },
  { title: "When Did You Get Hot?", artist: "Sabrina Carpenter", file: "music/Sabrina Carpenter - When Did You Get Hot.mp3", cover: "https://i.scdn.co/image/ab67616d0000b273b1863bf95557ea7f357c4947", favorite: false, genre: "Pop" },
  { title: "As It Was", artist: "Harry Styles", file: "music/Harry Styles - As It Was.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02b46f74097655d7f353caab14", favorite: false, genre: "Pop" },
  { title: "Cheap Thrills", artist: "Sia", file: "music/Sia - Cheap Thrills (Lyrics) ft. Sean Paul.mp3", cover: "https://i.scdn.co/image/ab67616d00001e029f5a5f3d50cd3939ba8e465c", favorite: false, genre: "Pop" },
  { title: "Folded", artist: "Kehlani", file: "music/Kehlani - Folded.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02c23c6110d6061ba7e2311141", favorite: false, genre: "Pop" },

  // Additional placeholders (51–55)
  { title: "Don't Let Me Down", artist: "The Chainsmokers,Daya", file: "music/The Chainsmokers - Don't Let Me Down.mp3", cover: "https://i.scdn.co/image/ab67616d00001e0202df2d642b572cf4f284a5c3", favorite: false, genre: "EDM" },
  { title: "Shake", artist: "O Side Mafia,BRGR", file: "music/O SIDE MAFIA, BRGR - SHAKE.mp3", cover: "https://i.scdn.co/image/ab67616d00001e0200820887c55bb948479a2a25", favorite: false, genre: "Rap" },
  { title: "Swimming Pools", artist: "Kendrick Lamar", file: "music/Kendrick Lamar - Swimming Pools.mp3", cover: "https://i.scdn.co/image/ab67616d00001e02b5ef185d28724c5573c2ac9c", favorite: false, genre: "Hip-hop" },
  { title: "Loyal", artist: "Chris Brown", file: "music/Chris Brown - Loyal (Lyrics) ft. Lil Wayne, Tyga.mp3", cover: "https://i.scdn.co/image/ab67616d0000b2732fa07c5de267229a015fe25d", favorite: false, genre: "Hip-hop" },
  { title: "Ayo", artist: "Chris Brown", file: "music/Chris Brown, Tyga - Ayo.mp3", cover: "https://i.scdn.co/image/ab67616d00001e020cd74e794eca3efa9c4ff6e4", favorite: false, genre: "Hip-hop" },
  { title: "Where Have You Been", artist: "Rihanna", file: "music/Rihanna - Where Have You Been.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigdXU4XTpkwE8r8VsoIqweCcmZlXUTjpwNw&s", favorite: false, genre: "Pop" }
];



// 🎵 Global audio + state
window.audioPlayer = new Audio();
window.currentTrackIndex = 0;
window.isPlaying = false;
window.playbackQueue = null;
window.playbackPos = 0;
window.mode = "normal";

// 📊 Stats
window.stats = JSON.parse(localStorage.getItem("streamifyStats")) || {
  songsPlayed: 0, favorites: 0, playlists: 0, listeningTime: 0
};

// --- Player Controls ---
window.loadTrack = function(index) {
  if (index == null || !songs[index]) return;
  const song = songs[index];
  audioPlayer.src = song.file;
  const albumCover = document.getElementById("albumCover");
  const nowPlaying = document.getElementById("nowPlaying");
  const artistName = document.getElementById("artistName");
  if (albumCover) albumCover.src = song.cover;
  if (nowPlaying) nowPlaying.textContent = song.title;
  if (artistName) artistName.textContent = song.artist;
  currentTrackIndex = index;
  audioPlayer.load();
  console.log(`🎵 Loaded: ${song.title}`);
};

window.playTrack = function() {
  audioPlayer.play()
    .then(() => {
      isPlaying = true;
      const playPauseBtn = document.getElementById("playPauseBtn");
      if (playPauseBtn) playPauseBtn.textContent = "⏸️";
    })
    .catch(err => console.warn("⚠️ Playback blocked until user interacts:", err));
};

window.pauseTrack = function() {
  audioPlayer.pause();
  isPlaying = false;
  const playPauseBtn = document.getElementById("playPauseBtn");
  if (playPauseBtn) playPauseBtn.textContent = "▶️";
};

window.togglePlay = function() {
  isPlaying ? pauseTrack() : playTrack();
};

window.nextTrack = function() {
  if (playbackQueue && playbackQueue.length > 0) {
    playbackPos = (playbackPos + 1) % playbackQueue.length;
    const nextIndex = playbackQueue[playbackPos];
    loadTrack(nextIndex);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % songs.length;
    loadTrack(currentTrackIndex);
  }
  playTrack();
  updateStats();
};

window.prevTrack = function() {
  if (playbackQueue && playbackQueue.length > 0) {
    playbackPos = (playbackPos - 1 + playbackQueue.length) % playbackQueue.length;
    const prevIndex = playbackQueue[playbackPos];
    loadTrack(prevIndex);
  } else {
    currentTrackIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
    loadTrack(currentTrackIndex);
  }
  playTrack();
  updateStats();
};

window.playAllRandom = function() {
  playbackQueue = songs.map((_, i) => i).sort(() => Math.random() - 0.5);
  playbackPos = 0;
  mode = "randomAll";
  loadTrack(playbackQueue[playbackPos]);
  playTrack();
  updateStats();
};

window.playFavorites = function() {
  const favIdx = songs.map((s, i) => s.favorite ? i : -1).filter(i => i !== -1);
  if (!favIdx.length) {
    alert("No favorite songs available.");
    return;
  }
  playbackQueue = favIdx.sort(() => Math.random() - 0.5);
  playbackPos = 0;
  mode = "favorites";
  loadTrack(playbackQueue[playbackPos]);
  playTrack();
  updateStats();
};

// --- Stats ---
window.updateStats = function() {
  stats.songsPlayed++;
  stats.favorites = songs.filter(s => s.favorite).length;
  localStorage.setItem("streamifyStats", JSON.stringify(stats));
  displayStats();
};

// --- Increment playlist stats when a playlist is clicked ---
document.addEventListener("DOMContentLoaded", () => {
  const playlistItems = document.querySelectorAll(".album-grid .album");
  playlistItems.forEach(album => {
    album.addEventListener("click", () => {
      stats.playlists++;
      localStorage.setItem("streamifyStats", JSON.stringify(stats));
      displayStats();
    });
  });
});


window.displayStats = function() {
  const el = id => document.getElementById(id);
  if (!el("songsPlayed")) return;
  el("songsPlayed").textContent = stats.songsPlayed;
  el("favorites").textContent = stats.favorites;
  el("playlists").textContent = stats.playlists;
  el("listeningTime").textContent = stats.listeningTime.toFixed(1) + " hrs";
};

// --- DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const favoritesGrid = document.getElementById("favoritesGrid");
  const playFavoritesBtn = document.getElementById("playFavoritesBtn") || document.getElementById("randomPlayBtn");
  const continueBtn = document.getElementById("continueBtn") || document.getElementById("continueListeningBtn");

  const progressBar = document.getElementById("progressBar");
  const volumeControl = document.getElementById("volumeControl");

  // --- Button Event Listeners ---
  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlay);
  if (nextBtn) nextBtn.addEventListener("click", nextTrack);
  if (prevBtn) prevBtn.addEventListener("click", prevTrack);
  if (playFavoritesBtn) playFavoritesBtn.addEventListener("click", playFavorites);
  if (continueBtn) continueBtn.addEventListener("click", playAllRandom);

  // --- Favorites Grid ---
  if (favoritesGrid) {
    favoritesGrid.innerHTML = "";
    const favoriteSongs = songs.filter(s => s.favorite);
    favoriteSongs.forEach(song => {
      const card = document.createElement("div");
      card.className = "song-card";
      card.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <div class="song-info">
          <h4>${song.title}</h4>
          <p>${song.artist}</p>
        </div>
      `;
      card.addEventListener("click", () => {
        playbackQueue = null;
        mode = "normal";
        const idx = songs.indexOf(song);
        if (idx === -1) return;
        loadTrack(idx);
        playTrack();
        updateStats();
      });
      favoritesGrid.appendChild(card);
    });
  }

  // --- Auto advance on song end ---
  audioPlayer.addEventListener("ended", nextTrack);

  // --- Progress Bar ---
  if (progressBar) {
    audioPlayer.addEventListener("timeupdate", () => {
      if (audioPlayer.duration) {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      }
    });

    progressBar.addEventListener("input", () => {
      if (audioPlayer.duration) {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
      }
    });
  }

  // --- Volume Control ---
  if (volumeControl) {
    audioPlayer.volume = volumeControl.value / 100;
    volumeControl.addEventListener("input", () => {
      audioPlayer.volume = volumeControl.value / 100;
    });
  }

  const likeBtn = document.getElementById("likeBtn");

function updateLikeButton() {
  const currentSong = songs[currentTrackIndex];
  if (!currentSong) return;
  likeBtn.textContent = currentSong.favorite ? "❤️" : "🤍";
}

// Toggle favorite status
if (likeBtn) {
  likeBtn.addEventListener("click", () => {
    const currentSong = songs[currentTrackIndex];
    if (!currentSong) return;
    currentSong.favorite = !currentSong.favorite;
    localStorage.setItem("streamifySongs", JSON.stringify(songs)); // optional persistence
    updateLikeButton();
    updateStats(); // update stats count for favorites
  });
}

// Update the button whenever a new track loads
audioPlayer.addEventListener("loadedmetadata", updateLikeButton);


  // --- Load initial track and stats ---
document.addEventListener("DOMContentLoaded", () => {
  displayStats();

  // If no track is loaded yet, play a random song
  if (!audioPlayer.src) {
    playAllRandom(); // this will shuffle all songs and play the first one
  } else {
    loadTrack(currentTrackIndex); // fallback
  }
});


  // --- Listening time tracker ---
  setInterval(() => {
    if (isPlaying) {
      stats.listeningTime += 0.001;
      localStorage.setItem("streamifyStats", JSON.stringify(stats));
    }
  }, 1000);

  console.info("✅ Streamify initialized. Songs:", songs.length);

  // --- Add Song from Existing Array (Title, Artist, or Genre Search + Confirm) ---
if (addSongBtn) {
  addSongBtn.addEventListener("click", () => {
    const keyword = prompt("Enter song title, artist, or genre to search:");
    if (!keyword) return;

    // Search songs array by title, artist, or genre
    const matchedSongs = songs.filter(song =>
      song.title.toLowerCase().includes(keyword.toLowerCase()) ||
      song.artist.toLowerCase().includes(keyword.toLowerCase()) ||
      (song.genre && song.genre.toLowerCase().includes(keyword.toLowerCase()))
    );

    if (!matchedSongs.length) {
      return alert("No songs found matching that keyword.");
    }

    // Show matches
    let msg = "Matching songs found:\n";
    matchedSongs.forEach((song, i) => {
      msg += `${i + 1}. "${song.title}" by ${song.artist} [${song.genre || "Unknown"}]\n`;
    });
    msg += "\nEnter number to add to your playlist:";

    const choice = parseInt(prompt(msg));
    if (choice > 0 && choice <= matchedSongs.length) {
      const selectedSong = matchedSongs[choice - 1];

      // Confirm before adding
      const confirmAdd = confirm(`Do you want to add "${selectedSong.title}" by ${selectedSong.artist} to your playlist?`);
      if (!confirmAdd) return;

      // Avoid duplicates in playlist view
      const exists = Array.from(songsGrid.querySelectorAll(".song-card h4")).some(el => el.textContent === selectedSong.title);
      if (exists) return alert("This song is already in your playlist view!");

      // Create card
      const index = songs.indexOf(selectedSong);
      const card = document.createElement("div");
      card.className = "song-card";
      card.innerHTML = `
        <img src="${selectedSong.cover || 'https://via.placeholder.com/150'}" alt="${selectedSong.title}">
        <div class="song-info">
          <h4>${selectedSong.title}</h4>
          <p>${selectedSong.artist}</p>
          <p style="font-size:0.8em;color:#888">${selectedSong.genre || 'Unknown'}</p>
          <button class="playSongBtn">▶️ Play</button>
          <button class="likeBtn">${selectedSong.favorite ? "❤️" : "🤍"}</button>
        </div>
      `;

      // Play button
      card.querySelector(".playSongBtn").addEventListener("click", () => {
        playbackQueue = null;
        mode = "normal";
        loadTrack(index);
        playTrack();
        updateStats();
      });

      // Like button
      const likeBtn = card.querySelector(".likeBtn");
      likeBtn.addEventListener("click", () => {
        selectedSong.favorite = !selectedSong.favorite;
        likeBtn.textContent = selectedSong.favorite ? "❤️" : "🤍";
        localStorage.setItem("streamifySongs", JSON.stringify(songs));
        updateStats();
      });

      songsGrid.appendChild(card);
      alert(`✅ "${selectedSong.title}" added to your playlist!`);
    } else {
      alert("Invalid choice.");
    }
  });
}



  
});


