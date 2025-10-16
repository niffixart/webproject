// Profile image upload
const profileImageInput = document.getElementById('profileImageInput');
const profileImage = document.getElementById('profileImage');

if (profileImageInput && profileImage) {
  profileImageInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImage.src = e.target.result;
        localStorage.setItem('profileImage', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Load saved image
  const savedImage = localStorage.getItem('profileImage');
  if (savedImage) profileImage.src = savedImage;
}

// Editable name
const welcomeUser = document.getElementById('welcomeUser');
if (welcomeUser) {
  const savedName = localStorage.getItem('username');
  if (savedName) welcomeUser.textContent = savedName;

  welcomeUser.addEventListener('input', () => {
    localStorage.setItem('username', welcomeUser.textContent);
  });
}

// Logout button
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'user.html';
  });
}
