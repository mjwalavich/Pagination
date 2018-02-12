const studentContainer = document.getElementsByClassName('student-list');
const students = document.getElementsByClassName('student-item');
const pages = document.getElementsByTagName('a')

//Shows 10 students when page is loaded
window.addEventListener('load', () => {
  for (let i = 0; i < students.length; i++) {
    if (i < 10) {
      students[i].style.display = 'block'
    } else {
      students[i].style.display = 'none'
    }
  }
  appendPageLinks(students);
});
//function creates 10 students per page
function showPage(pageNumber, studentList) {
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = "none";
    if (i < pageNumber + 0 && i >= pageNumber + 0 - 10) {
      studentList[i].style.display = "block";
    }
  }
}

// This function creates the page links and appends the list to the page
function appendPageLinks(studentList) {
  let pageNum = Math.ceil(studentList.length / 10);
  let pageLink = '<div class="pagination"><ul>';
  for (let i = 1; i < pageNum + 1; i++) {
    pageLink += `<li><a class="active" href="#">${i}</a></li>`;
  }
  pageLink += "</ul></div>";
  studentContainer[0].insertAdjacentHTML("afterend", pageLink);
  pages[0].className = "active";

// Adds click event for each page
  for (let p = 0; p < pageNum; p++) {
    pages[p].addEventListener("click", function() {
      showPage(this.innerHTML, studentList);
      for (let y = 0; y < pageNum; y++) {
        pages[y].className = "";
      }
      this.className = "active";
    });
  }
}
