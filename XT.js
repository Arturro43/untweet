(function () {
  var delTweets = function () {
    var tweetsRemaining = document.querySelectorAll('[role="heading"]+div')[1].textContent;
    console.log("Remaining: ", tweetsRemaining);
    window.scrollBy(0, 10000);

    var moreButtons = document.querySelectorAll('[aria-label="More"]');
    var deleteButtons = document.querySelectorAll('span:contains("Delete")');
    var confirmationButtons = document.querySelectorAll('[data-testid="confirmationSheetConfirm"]');
    var unretweetButtons = document.querySelectorAll('[data-testid="unretweet"]');
    var unretweetConfirmButtons = document.querySelectorAll('[data-testid="unretweetConfirm"]');

    moreButtons.forEach(function (button, index, array) {
      button.click();
      deleteButtons[index].click();
      confirmationButtons[index].click();
    });

    unretweetButtons.forEach(function (button, index, array) {
      button.click();
      unretweetConfirmButtons[index].click();
    });

    setTimeout(delTweets, 0);
  };

  delTweets();
})();
