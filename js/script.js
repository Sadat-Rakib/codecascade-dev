// js/script.js

const users = ["Sadat", "Rakib", "John", "Jane", "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry", "Ivy", "Jack", "Kelly", "Liam", "Mia", "Noah", "Olivia", "Peter","Alex", "Mira", "Jaden", "Fatima", "Liam"];
const courses = ["Full Stack", "Python", "DSA", "Python", "Full Stack", "AI", "Frontend", "Backend", "DSA", "Python", "Full Stack", "AI", "Frontend", "Backend", "DSA", "Python", "Full Stack", "AI", "Frontend", "Backend"];

function showLivePopup() {
    const user = users[Math.floor(Math.random() * users.length)];
    const course = courses[Math.floor(Math.random() * courses.length)];
    const msg = `${user} just enrolled in ${course}!`;

    const popup = document.createElement('div');
    popup.textContent = msg;
    popup.className = "position-fixed bottom-0 end-0 m-4 p-3 bg-warning text-dark fw-bold rounded shadow pop-fade";
    popup.style.zIndex = 9999;

    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 4000);
}

setInterval(showLivePopup, 10000);
