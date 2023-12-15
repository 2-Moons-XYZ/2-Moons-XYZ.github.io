const inviteButton = document.querySelector('.invite-button');

inviteButton.addEventListener('click', () => {

  window.open('https://discord.com/api/oauth2/authorize?client_id=1148673812502675486&permissions=8&scope=bot', '_blank');
});
