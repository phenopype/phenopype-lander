repo_api_link = "https://api.github.com/repos/phenopype/phenopype-lander/commits";

function ModifiedDateTime() {
    fetch(repo_api_link).then((response) => {
        return response.json();
      })
      .then((commits) => {
        var dat = commits[0]['commit']['committer']['date'];
          document.getElementById('last-modified-datetime').textContent = dat.slice(0,10) + " " + dat.slice(11,19) ;
      });
  }
ModifiedDateTime()

function ModifiedDate() {
    fetch(repo_api_link).then((response) => {
        return response.json();
      })
      .then((commits) => {
        var dat = commits[0]['commit']['committer']['date'];
          document.getElementById('last-modified-date').textContent = dat.slice(0,10);
      });
  }
ModifiedDate()


function ModifiedYear() {
    fetch(repo_api_link).then((response) => {
        return response.json();
      })
      .then((commits) => {
        var dat = commits[0]['commit']['committer']['date'];
          document.getElementById('last-modified-year').textContent = dat.slice(0,4);
      });
  }
ModifiedYear()