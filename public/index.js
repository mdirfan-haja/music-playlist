var firebaseConfig = {
    apiKey: "AIzaSyDR-0c96A_yzfmX8jpUv5Bt5cfXe7LXDGw",
    authDomain: "music-playlist-d8e60.firebaseapp.com",
    databaseURL: "https://music-playlist-d8e60.firebaseio.com",
    projectId: "music-playlist-d8e60",
    storageBucket: "music-playlist-d8e60.appspot.com",
    messagingSenderId: "774310292709",
    appId: "1:774310292709:web:5e270cb8f5f00dcb33380c",
    measurementId: "G-7WBCW3YCES"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();




window.onload = function() {
    var uploader = document.getElementById('uploadbar')
    var filesbutton = document.getElementById('filesbutton')
    filesbutton.addEventListener('change', function(e) {

        var file = e.target.files[0]

        var storageRef = firebase.storage().ref('music_list/' + file.name)

        storageRef.put(file)

    })

}