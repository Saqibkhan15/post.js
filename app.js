var postCount = 0;

document.getElementById('postButton').addEventListener('click', addPost);
document.getElementById('changeTheme').addEventListener('click', changeTheme);

function addPost() {
  var postContent = document.getElementById('postContent').value;
  var postImageFile = document.getElementById('post').files[0];
  var postsContainer = document.getElementById('posts');
  
  if (postsContainer.children.length >= 2) {
    postsContainer.removeChild(postsContainer.firstChild);
  }
  
  var postHTML = '<div class="post"><p>' + postContent + '</p>';
  
  if (postImageFile) {
    var imageUrl = URL.createObjectURL(postImageFile);
    postHTML += '<img src="' + imageUrl + '" alt="Post Image">';
  }
  
  postHTML += '</div>';
  postsContainer.innerHTML += postHTML;

  document.getElementById('postContent').value = '';
  document.getElementById('post').value = '';
}

function changeTheme() {
    var gradients = [
      'linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)',
      'linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%)'
    ];
    var randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.backgroundImage = randomGradient;
  }
  