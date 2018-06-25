module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    const elements = document.querySelectorAll('.unreadCount');
    for (let i = 0; i < elements.length; i += 1) {
      if (parseInt(elements[i].innerHTML, 10) !== 0) {
        count += 1;
      }
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
