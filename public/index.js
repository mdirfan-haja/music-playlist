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
var storageRef = firebase.storage().ref();
window.onload = function () {
    GetListOfStorageName();
    var uploader = document.getElementById("uploadbar");
    var filesbutton = document.getElementById("filesbutton");
    filesbutton.addEventListener("change", function (e) {
        var file = e.target.files[0];
        storageRef = firebase.storage().ref("music_list/" + file.name);
        var task = storageRef.put(file);
        task.on("state_changed", function uploading(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        }, function error(err) { }, function complete() {
            GetListOfStorageName();
        });
    }
    // download file from storage
    );
};
function downloadrender(pageLocation) {
    var storage = firebase.storage();
    storageRef
        .child(pageLocation)
        .getDownloadURL()
        .then(function (url) {
        console.log(url);
        var myfile = document.getElementById("myfile");
        myfile.src = url;
    })["catch"](function (error) { });
}
function GetListOfStorageName() {
    var listRef = storageRef.child("music_list");
    // Find all the prefixes and items.
    listRef
        .listAll()
        .then(function (res) {
        res.prefixes.forEach(function (folderRef) {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
        });
        res.items.forEach(function (itemRef) {
            console.log(itemRef);
            var hotText = itemRef.name;
            var btn = document.createElement("BUTTON"); // Create a <button> element
            btn.innerHTML = "CLICK to display"; // Insert text
            var att = document.createAttribute("onclick"); // Create a "class" attribute
            att.value = "downloadrender('" + itemRef.fullPath + "')"; // Set the value of the class attribute
            btn.setAttributeNode(att);
            var node = document.createElement("LI");
            var textnode = document.createTextNode(itemRef.name);
            node.appendChild(textnode);
            node.appendChild(btn);
            document.getElementById("listOfStorage").appendChild(node);
        });
    })["catch"](function (error) {
        // Uh-oh, an error occurred!
    });
}
